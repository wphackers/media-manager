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
import { InspectorControls, store as blockEditorStore } from '@wordpress/block-editor';
import { Panel } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { shouldExtendMediaBlock, getBlockSourceProps } from '../utils';
import { MediaCenterPanelBody } from '../../components/media-selector';
import { blockName as mediaCenterBlockName } from '../../blocks/media-center';
import {
	STORE_NAME,
	STATE_PAUSED,
	STATE_PLAYING,
	STATE_ERROR,
	MEDIA_NOT_DEFINED
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
	} = useDispatch( STORE_NAME );

	const { updateBlockAttributes } = useDispatch( blockEditorStore );

	// Media Source selectors.
	const { mediaPlayingState, currentTime, mediaSource } = useSelect(
		( select ) => ( {
			mediaPlayingState: select( STORE_NAME ).getMediaPlayerState( mediaSourceIdAttr ),
			currentTime: select( STORE_NAME ).getMediaSourceCurrentTime( mediaSourceIdAttr ),
			mediaSource: select( STORE_NAME ).getMediaSourceById( mediaSourceIdAttr ),
		} ),
		[]
	);

	const mediaCenterParentBlock = useSelect(
		( select ) => select( blockEditorStore ).getBlock(
			select( blockEditorStore ).getBlockParentsByBlockName(
				clientId,
				mediaCenterBlockName
			)?.[ 0 ]
		),
		[]
	);
	
	const mediaCenterParentClientId = mediaCenterParentBlock?.clientId;
	const mediaCenterParentSourceIdAttr = mediaCenterParentBlock?.attributes.sourceId;

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
	 * - Set `preload` equal to `metadata` to load it.
	 */
	useEffect( () => {
		// Bail early when no source for the current block.
		if ( ! mediaSourceUrl ) {
			return;
		}

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
			// Cleaning Media Source source ID
			// if the block is linked to it.
			if ( mediaCenterParentSourceIdAttr === mediaSourceIdAttr ) {
				updateBlockAttributes( mediaCenterParentClientId, { sourceId: MEDIA_NOT_DEFINED } );
			}

			// Remove listeners.
			mediaElement.removeEventListener(
				'loadedmetadata',
				onMetadataReady
			);

			// Unregister media from store.
			unregisterMediaSource( mediaSourceId );
		};
	}, [
		mediaSourceIdAttr,
		setAttributes,
		mediaSourceUrl,
		mediaCenterParentClientId,
		mediaCenterParentSourceIdAttr,
	] );

	useEffect( () => {
		// Block doesn't have defined its source. Bail early.
		if ( ! mediaSourceUrl || ! mediaSourceIdAttr ) {
			return;
		}

		// Block is not child of MediaCenter. Bail Early.
		if ( ! mediaCenterParentClientId ) {
			return;
		}

		// Media Center source ID is defined properly. Bail eraly.
		if (
			mediaCenterParentSourceIdAttr &&
			mediaCenterParentSourceIdAttr !== MEDIA_NOT_DEFINED
		) {
			return;
		}

		// Link MediaCenter block on the fly with the media block.
		updateBlockAttributes( mediaCenterParentClientId, { sourceId: mediaSourceIdAttr } );
	}, [ mediaSourceUrl, mediaSourceIdAttr, mediaCenterParentClientId, mediaCenterParentSourceIdAttr ] );

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
					<MediaCenterPanelBody source={ mediaSource } />
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
	'media-manager/registerMediaBlockSource',
	registerMediaBlocksSource
);
