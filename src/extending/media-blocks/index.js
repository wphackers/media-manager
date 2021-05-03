/**
 * External dependencies
 */
import { debounce, throttle } from 'lodash';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useRef, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { Panel } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { shouldExtendMediaBlock, getBlockSourceProps } from '../utils';
import { MediaTheaterPanelBody } from '../../components/media-selector';
import {
	STORE_ID,
	STATE_PAUSED,
	STATE_PLAYING,
	STATE_ERROR,
} from '../../store/constants';

// In-sync constants.
const MEDIA_CURRENT_TIME_THRESHOLD = 1000;
const MEDIA_CURRENT_STATE_THRESHOLD = 1000;

const blockEditWithMediaRegister = createHigherOrderComponent( ( BlockEdit ) => ( props ) => {
	const { clientId, name } = props;

	const mediaElementRef = useRef();
	const { attributes, setAttributes } = props;
	const { mediaSourceId: mediaSourceIdAttr } = attributes;
	const { name: attrName, domTypeName } = getBlockSourceProps( name );

	// Check media has defined its source.
	const mediaSourceUrl = attributes?.[ attrName ];

	// Media Source actions.
	const {
		registerMediaSource,
		updateMediaSourceData,
		unregisterMediaSource,
		setMediaSourceCurrentTime,
	} = useDispatch( STORE_ID );

	// Media Source selectors.
	const { mediaPlayingState, currentTime, mediaSource } = useSelect(
		( select ) => ( {
			mediaPlayingState: select( STORE_ID ).getMediaPlayerState( mediaSourceIdAttr ),
			currentTime: select( STORE_ID ).getMediaSourceCurrentTime( mediaSourceIdAttr ),
			mediaSource: select( STORE_ID ).getMediaSourceById( mediaSourceIdAttr ),
		} ),
		[]
	);

	function onMetadataReady( event ) {
		updateMediaSourceData( mediaSourceIdAttr, {
			duration: event?.srcElement?.duration,
		} );
	}

	function play() {
		mediaElementRef.current?.play().catch( () => {} );
	}

	function pause() {
		mediaElementRef.current?.pause();
	}

	function onTimeChange( time ) {
		setMediaSourceCurrentTime( mediaSourceIdAttr, time );
	}

	/*
	 * - Register/Unregister Media source in the store.
	 * - Set preload to load metadata.
	 */
	useEffect( () => {
		/*
		 * Check if the mediaSourceId attribute is defined.
		 * If so, take it as the media reference.
		 * Otherwise, creates a new ID using the current clientId.
		 */
		let mediaSourceId = mediaSourceIdAttr;
		if ( ! mediaSourceId ) {
			mediaSourceId = `media-source-${ clientId }`;
			// update the block attribute.
			setAttributes( { mediaSourceId } );
		}

		/*
		 * querySelector is the string used to pick up
		 * the DOM Element reference.
		 */
		const querySelector = `#${ mediaSourceId } ${ domTypeName }`;
		const mediaElement = document?.querySelector( querySelector );
		if ( ! mediaElement ) {
			return;
		}

		// Store the media element reference.
		mediaElementRef.current = mediaElement;

		/*
		 * Pre load mediaElement metadata.
		 * It allows preloading useful metadata
		 * of the media source, for instance,
		 * the media duration.
		 */
		mediaElement.preload = 'metadata';
		mediaElement.autoplay = false;

		// Register media source in the store.
		registerMediaSource( mediaSourceId, {
			mediaBlockClientId: clientId,
			source: mediaSourceUrl,
			elementType: domTypeName,
			state: STATE_PAUSED,
			querySelector,
		} );

		// Subscribe to media events.
		mediaElement.addEventListener( 'loadedmetadata', onMetadataReady );

		// Clean.
		return function () {
			// Cleaning the attr probably shoulnd't needed.
			setAttributes( { mediaSourceId: null } );

			// Remove listeners.
			mediaElement.removeEventListener(
				'loadedmetadata',
				onMetadataReady
			);

			// Unregister media from store.
			unregisterMediaSource( mediaSourceId );
		};
	}, [ mediaSourceIdAttr, setAttributes, mediaSourceUrl ] );

	// Play/Pause media depending on playing status (via store).
	useEffect( () => {
		if ( ! mediaElementRef?.current ) {
			return;
		}

		if ( ! mediaPlayingState ) {
			return;
		}

		const { current: mediaElement } = mediaElementRef;

		/*
		 * Get the current status of the mediaElement element,
		 * and the required action to toggle it.
		 */
		const [ mediaElementStatus, action ] =
			mediaElement.paused === false
				? [ STATE_PLAYING, pause ]
				: [ STATE_PAUSED, play ];

		const debouncedAction = debounce( action, 100 );

		if (
			STATE_ERROR !== mediaPlayingState &&
			mediaElementStatus !== mediaPlayingState
		) {
			debouncedAction();
		}

		return () => {
			debouncedAction.cancel();
		};
	}, [ mediaPlayingState, mediaElementRef ] );

	// Handling media state.
	useEffect( () => {
		const { current: mediaElement } = mediaElementRef;
		if ( ! mediaElement ) {
			return;
		}

		const throttledTimeChange = throttle(
			( time ) => onTimeChange( time ),
			MEDIA_CURRENT_TIME_THRESHOLD,
			{
				leading: true,
				trailing: false,
			}
		);

		const onTimeUpdate = ( e ) =>
			throttledTimeChange( e.target.currentTime );
		mediaElement?.addEventListener( 'timeupdate', onTimeUpdate );

		return () => {
			throttledTimeChange.cancel();
			mediaElement?.removeEventListener( 'timeupdate', onTimeUpdate );
		};
	}, [ mediaElementRef, onTimeChange ] );

	// Handling current time.
	useEffect( () => {
		const { current: mediaElement } = mediaElementRef;
		if ( typeof currentTime !== 'number' || ! mediaElement ) {
			return;
		}

		/*
		 * Update the current time when difference between
		 * the media element and the state is bigger than
		 * the threshold  MEDIA_CURRENT_TIME_THRESHOLD.
		 */
		if (
			Math.abs( Math.floor( currentTime - mediaElement.currentTime ) * 1000 ) >
			MEDIA_CURRENT_STATE_THRESHOLD
		) {
			mediaElement.currentTime = currentTime;
		}
	}, [ mediaElementRef, currentTime ] );

	// Bail early when no clientId.
	if ( ! clientId ) {
		return <BlockEdit { ...props } />;
	}
	
	if ( ! mediaSourceUrl ) {
		return <BlockEdit { ...props } />;
	}

	return (
		<Fragment>
			<InspectorControls>
				<Panel>
					<MediaTheaterPanelBody source={ mediaSource } />
				</Panel>
			</InspectorControls>
			<div id={ attributes?.mediaSourceId }>
				<BlockEdit { ...props } />
			</div>
		</Fragment>
	);
}, 'MediaBlockEdit' );

function registerMediaBlocksSource( settings, name ) {
	if ( ! shouldExtendMediaBlock( name, settings ) ) {
		return settings;
	}

	/*
	 * `mediaSourceId` attribute stores the reference
	 * to the media source store.
	 */
	const attributes = {
		...settings.attributes,
		mediaSourceId: {
			type: 'string',
		},
	};

	return {
		...settings,
		attributes,
		edit: blockEditWithMediaRegister( settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-center/registerMediaBlockSource',
	registerMediaBlocksSource
);
