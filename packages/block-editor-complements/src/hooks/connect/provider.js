/**
 * External dependencies
 */
import { debounce, throttle } from 'lodash';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { getBlockSupport } from '@wordpress/blocks';
import {
	useSelect,
	useDispatch,
	select as doSelect,
} from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useRef, useEffect, Fragment, useLayoutEffect } from '@wordpress/element';
import { Panel } from '@wordpress/components';
import {
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	store as mediaSourceStore,
	MEDIA_NOT_DEFINED,
	useMediaStore,
	useCurrentTime,
} from '@media-manager/media-connect';

/**
 * Internal dependencies
 */
import { MediaConnectProviderPanelBody } from '../../';
import {
	mediaProviderBlockAttributeName,
	mediaConsumerBlockAttributeName,
} from '../../constants';

const mediaCenterBlockName = 'media-manager/media-center';

// Define and export support name.
export const SUPPORT_NAME = 'media-manager/connect-provider';

// In-sync constants.
const MEDIA_CURRENT_TIME_THRESHOLD = 1000;
const MEDIA_CURRENT_STATE_THRESHOLD = 1000;

const MediaEditProviderWrapper = ( props ) => {
	const { clientId, providerProps, BlockEdit } = props;

	const mediaElementRef = useRef();
	const ref = useRef();
	const { attributes, setAttributes } = props;
	const { mediaSourceId: mediaSourceIdAttr } = attributes;

	const { name: attrName, domTypeName } = providerProps;

	// Check media has defined its source.
	const mediaSourceUrl = attributes?.[ attrName ];

	const { updateBlockAttributes } = useDispatch( blockEditorStore );

	// Media properties / helpers.
	const {
		isPaused,
		register,
		unregister,
		updateData,
		setCurrentTime,
	} = useMediaStore( mediaSourceIdAttr );

	const { currentTime } = useCurrentTime( mediaSourceIdAttr );

	const mediaCenterParentBlock = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlock(
				select( blockEditorStore ).getBlockParentsByBlockName(
					clientId,
					mediaCenterBlockName
				)?.[ 0 ]
			),
		[]
	);

	const mediaCenterParentClientId = mediaCenterParentBlock?.clientId;
	const mediaCenterParentSourceIdAttr =
		mediaCenterParentBlock?.attributes.mediaSourceId;

	function onMetadataReady( event ) {
		updateData( {
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
		setCurrentTime( time );
	}

	/*
	* querySelector is the string used to pick up
	* the DOM Element reference.
	*/
	let querySelector;

	function updateElementRef() {
		if ( ! querySelector ) {
			return;
		}

		const mediaElement = document?.querySelector( querySelector );
		if ( ! mediaElement ) {
			return;
		}

		// Update media element reference (useRef).
		mediaElementRef.current = mediaElement;
		return mediaElement;
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
		 * Get the media source ID, based on:
		 *
		 * - the mediaSourceId attribute when it's defined:
		 * If the attribute is not defined, then let's assing
		 * a new one based on the clientId of the media block.
		 *
		 * - checking whether it's already present in the store.
		 * It happens when the block is duplicated. In this case,
		 * we need to assign a new ID.
		 */
		let mediaSourceId = mediaSourceIdAttr;
		const mediaIdExists = !! doSelect( mediaSourceStore ).getMediaSourceById( mediaSourceId );
		if ( ! mediaSourceId || mediaIdExists ) {
			mediaSourceId = `media-source-${ clientId }`;
			setAttributes( { mediaSourceId } );
		}

		// Do not register the media when no element is found.
		querySelector = `[data-media-source-provider-id="${ mediaSourceId }"] ${ domTypeName }`;
		const mediaElement = updateElementRef();
		if ( ! mediaElement ) {
			return;
		}

		/*
		 * Pre load mediaElement metadata.
		 * It allows preloading useful metadata
		 * of the media source, for instance,
		 * the media duration.
		 */
		mediaElement.preload = 'metadata';
		mediaElement.autoplay = false;

		// Register media source in the store.
		register( mediaSourceId, {
			mediaBlockClientId: clientId,
			source: mediaSourceUrl,
			elementType: domTypeName,
			querySelector,
		} );

		// Subscribe to media events.
		mediaElement.addEventListener( 'loadedmetadata', onMetadataReady );

		// Clean.
		return function() {
			// Cleaning Media Source source ID
			// if the block is linked to it.
			if ( mediaCenterParentSourceIdAttr === mediaSourceIdAttr ) {
				updateBlockAttributes( mediaCenterParentClientId, {
					mediaSourceId: MEDIA_NOT_DEFINED,
				} );
			}

			// Remove listeners.
			mediaElement.removeEventListener(
				'loadedmetadata',
				onMetadataReady
			);

			// Unregister media from store.
			unregister( mediaSourceId );
		};
	}, [
		mediaSourceIdAttr,
		setAttributes,
		mediaSourceUrl,
		mediaCenterParentClientId,
		mediaCenterParentSourceIdAttr,
	] );

	/* Child provider.
	 * Check whether the provider is child of a block consumer.
	 * If so, it means that the provider is a media center block.
	 * @TODO: Move/improve this logic. Currently, it's harcoded to the MediaCenter block.
	 */
	useEffect( () => {
		// Block doesn't have defined its source. Bail early.
		if ( ! mediaSourceUrl || ! mediaSourceIdAttr ) {
			return;
		}

		// Block is not child of MediaCenter. Bail Early.
		if ( ! mediaCenterParentClientId ) {
			return;
		}

		// Media Center source ID is defined properly. Bail early.
		if (
			mediaCenterParentSourceIdAttr &&
			mediaCenterParentSourceIdAttr !== MEDIA_NOT_DEFINED
		) {
			return;
		}

		// Link MediaCenter block on the fly with the media block.
		updateBlockAttributes( mediaCenterParentClientId, {
			[ mediaConsumerBlockAttributeName ]: mediaSourceIdAttr,
		} );
	}, [
		mediaSourceUrl,
		mediaSourceIdAttr,
		mediaCenterParentClientId,
		mediaCenterParentSourceIdAttr,
	] );

	// Play/Pause media depending on playing status (via store).
	useEffect( () => {
		if ( ! mediaElementRef?.current ) {
			return;
		}

		const { current: mediaElement } = mediaElementRef;

		/*
		 * Get the current status of the mediaElement element,
		 * and the required action to toggle it.
		 */
		const action = mediaElement.paused ? play : pause;
		const debouncedAction = debounce( action, 100 );

		if ( isPaused !== mediaElement.paused ) {
			debouncedAction();
		}

		return () => {
			debouncedAction.cancel();
		};
	}, [ isPaused, mediaElementRef ] );

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

		const onTimeUpdate = ( e ) => throttledTimeChange( e.target.currentTime );
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
			Math.abs(
				Math.floor( currentTime - mediaElement.currentTime ) * 1000
			) > MEDIA_CURRENT_STATE_THRESHOLD
		) {
			mediaElement.currentTime = currentTime;
		}
	}, [ mediaElementRef, currentTime ] );

	/*
	 * Observe the block element in the DOM subtree,
	 * and update the media element reference accordingly.
	 */
	useLayoutEffect( () => {
		if ( ! ref?.current ) {
			return;
		}

		const observer = new window.MutationObserver( updateElementRef );

		observer.observe( ref.current, {
			childList: true,
			attributes: false,
			subtree: true,
		} );

		return () => {
			observer.disconnect();
		};
	}, [ ref ] );

	// Bail early when no clientId.
	if ( ! clientId ) {
		return <BlockEdit { ...props } />;
	}

	if ( ! mediaSourceIdAttr ) {
		return <BlockEdit { ...props } />;
	}

	return (
		<Fragment>
			<InspectorControls>
				<Panel>
					<MediaConnectProviderPanelBody />
				</Panel>
			</InspectorControls>

			<div ref={ ref } data-media-source-provider-id={ mediaSourceIdAttr }>
				<BlockEdit { ...props } />
			</div>
		</Fragment>
	);
};

const MediaEditConnectProvider = ( providerProps ) =>
	createHigherOrderComponent(
		( BlockEdit ) => ( props ) => (
			<MediaEditProviderWrapper
				{ ...props }
				providerProps={ providerProps }
				BlockEdit={ BlockEdit }
			/>
		),
		'MediaEditConnectProvider'
	);

function addMediaManagerConnectSupport( settings ) {
	const blockProviderProps = getBlockSupport( settings, SUPPORT_NAME );
	if ( ! blockProviderProps ) {
		return settings;
	}

	// `mediaSourceId` attribute stores the reference to the media source.
	const attributes = {
		...settings.attributes,
		[ mediaProviderBlockAttributeName ]: {
			type: 'string',
		},
	};

	return {
		...settings,
		attributes,
		edit: MediaEditConnectProvider( blockProviderProps )( settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-player-connect-blocks',
	addMediaManagerConnectSupport,
	20
);
