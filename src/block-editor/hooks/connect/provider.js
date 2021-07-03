/**
 * External dependencies
 */
import { debounce, throttle } from 'lodash';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { getBlockSupport } from '@wordpress/blocks';
import { useSelect, useDispatch } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useRef, useEffect, Fragment } from '@wordpress/element';
import { Panel } from '@wordpress/components';
import {
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import {
	store as mediaManagerStore,
	STATE_PAUSED,
	STATE_PLAYING,
	STATE_ERROR,
	MEDIA_NOT_DEFINED,
} from '@mediamanager/media-connect';

/**
 * Internal dependencies
 */
import { MediaCenterPanelBody } from '../../../components/media-selector';
import { blockName as mediaCenterBlockName } from '../../../block-library/media-center';

// Define and export support name.
export const SUPPORT_NAME = 'media-manager/connect-provider';

// In-sync constants.
const MEDIA_CURRENT_TIME_THRESHOLD = 1000;
const MEDIA_CURRENT_STATE_THRESHOLD = 1000;

const MediaEdit = ( providerProps ) =>
	createHigherOrderComponent(
		( BlockEdit ) => ( props ) => {
			const { clientId } = props;

			const mediaElementRef = useRef();
			const { attributes, setAttributes } = props;
			const { mediaSourceId: mediaSourceIdAttr } = attributes;

			const { name: attrName, domTypeName } = providerProps;

			// Check media has defined its source.
			const mediaSourceUrl = attributes?.[ attrName ];

			// Media Source actions.
			const {
				registerMediaSource,
				updateMediaSourceData,
				unregisterMediaSource,
				setMediaSourceCurrentTime,
			} = useDispatch( mediaManagerStore );

			const { updateBlockAttributes } = useDispatch( blockEditorStore );

			// Media Source selectors.
			// @TODO: Update with useMediaStore() hook
			const { mediaPlayingState, currentTime, mediaSource } = useSelect(
				( select ) => ( {
					mediaPlayingState: select(
						mediaManagerStore
					).getMediaPlayerState( mediaSourceIdAttr ),
					currentTime: select(
						mediaManagerStore
					).getMediaSourceCurrentTime( mediaSourceIdAttr ),
					mediaSource: select( mediaManagerStore ).getMediaSourceById(
						mediaSourceIdAttr
					),
				} ),
				[]
			);

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
				 * `querySelector` is the string used to pick up
				 * the DOM Element reference.
				 */
				const querySelector = `[data-media-source-provider-id="${ mediaSourceId }"] ${ domTypeName }`;

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
				mediaElement.addEventListener(
					'loadedmetadata',
					onMetadataReady
				);

				// Clean.
				return function () {
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
				updateBlockAttributes( mediaCenterParentClientId, {
					mediaSourceId: mediaSourceIdAttr,
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
					mediaElement?.removeEventListener(
						'timeupdate',
						onTimeUpdate
					);
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
						Math.floor( currentTime - mediaElement.currentTime ) *
							1000
					) > MEDIA_CURRENT_STATE_THRESHOLD
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

					<div
						data-media-source-provider-id={
							attributes?.mediaSourceId
						}
					>
						<BlockEdit { ...props } />
					</div>
				</Fragment>
			);
		},
		'MediaEdit'
	);

// Block attibute name used to populate the providers.
export const mediaProviderBlockAttributeName = 'mediaSourceId';

function addMediaManagerConnectSupport( settings, name ) {
	const blockProviderProps = getBlockSupport(
		settings,
		SUPPORT_NAME
	);
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
		edit: MediaEdit( blockProviderProps )( settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-player-connect-blocks',
	addMediaManagerConnectSupport,
	20
);
