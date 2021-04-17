/**
 * External dependencies
 */
import { debounce, throttle } from 'lodash';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { shouldExtendMediaBlock, getBlockSourceProps } from '../utils';
import {
	STORE_ID,
	STATE_PAUSED,
	STATE_PLAYING,
	STATE_ERROR,
} from '../../store/constants';

const MEDIA_CURRENT_TIME_THRESHOLD = 1000;
const MEDIA_CURRENT_STATE_THRESHOLD = 1000;

const blockEditWithMediaRegister = ( name, BlockEdit ) => ( props ) => {
	const { clientId } = props;

	const {
		registerMediaSource,
		updateMediaSourceData,
		unregisterMediaSource,
		setMediaSourceCurrentTime,
	} = useDispatch( STORE_ID );

	// Bail early when no clientId.
	if ( ! clientId ) {
		return <BlockEdit { ...props } />;
	}

	const mediaElementRef = useRef();
	const { attributes, setAttributes } = props;
	const { name: attrName, domTypeName } = getBlockSourceProps( name );

	// Check media has defined its source.
	const mediaSource = attributes?.[ attrName ];
	if ( ! MediaSource ) {
		return <BlockEdit { ...props } />;
	}

	const { mediaPlayingState, currentTime } = useSelect(
		( select ) => ( {
			mediaPlayingState: select( STORE_ID ).getMediaPlayerState(
				attributes.mediaSourceId
			),
			currentTime: select( STORE_ID ).getMediaSourceCurrentTime(
				attributes.mediaSourceId
			),
		} ),
		[]
	);

	function onMetadataReady( event ) {
		updateMediaSourceData( attributes.mediaSourceId, {
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
		setMediaSourceCurrentTime( attributes.mediaSourceId, time );
	}

	// Interact with the client API.
	useEffect( () => {
		/*
		 * Check if the mediaSourceId attribute is defined.
		 * If so, take it as the media reference.
		 * Otherwise, creates a new ID using the current clientId.
		 */
		let mediaSourceId = attributes?.mediaSourceId;
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
			source: mediaSource,
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

			mediaElement.removeEventListener(
				'loadedmetadata',
				onMetadataReady
			);
			unregisterMediaSource( mediaSourceId );
		};
	}, [ attributes, setAttributes, mediaSource ] );

	// Play / Pause media depending on playing state (via store).
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
		if ( ! currentTime || ! mediaElement ) {
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

	return (
		<div id={ attributes?.mediaSourceId }>
			<BlockEdit { ...props } />
		</div>
	);
};

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
		edit: blockEditWithMediaRegister( name, settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-center/registerMediaBlockSource',
	registerMediaBlocksSource
);
