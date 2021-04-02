/**
 * External dependencies
 */
import { debounce } from 'lodash';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { shouldExtendMediaBlock, getBlockSourceProps } from './utils';
import { STORE_ID, STATE_PAUSED, STATE_PLAYING, STATE_ERROR } from '../store/constants';

const blockEditWithMediaRegister = ( name, BlockEdit ) => ( props ) => {
	const { clientId } = props;

	// Bail early when no clientId.
	const { registerMediaSource, updateMediaSourceData, unregisterMediaSource } = useDispatch( STORE_ID );
	
	if ( ! clientId ) {
		return <BlockEdit { ...props } />;
	}

	const mediaElementRef = useRef();
	const { attributes, setAttributes } = props;
	const { name: attrName, domTypeName } = getBlockSourceProps( name );

	// Check media ahs defined its source.
	const mediaSource = attributes?.[ attrName ];
	if( ! MediaSource ) {
		return <BlockEdit { ...props } />;
	}

	const { mediaPlayingState } = useSelect(
		select => ( {
				mediaPlayingState: select( STORE_ID ).getMediaPlayerState( attributes.mediaSourceId ),
			}
		),
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

	// Interact with the client API.
	useEffect( () => {
		// Pick DOM element reference through client ID and dom type name.
		// We rely on this for now.
		// Probably, we should replace it with useRef() hook,
		// adding a wrapper element.
		let mediaSourceId = attributes?.mediaSourceId;	
		if ( ! mediaSourceId ) {
			mediaSourceId = `media-source-${ clientId }`;
			// update the block attribute.
			setAttributes( { mediaSourceId } );
		}
	
		const querySelector = `#${ mediaSourceId } ${domTypeName }`;
		const mediaElement = document?.querySelector( querySelector );
		if ( ! mediaElement ) {
			return;
		}

		// ref the media element.
		mediaElementRef.current = mediaElement;

		// Pre load audio metadata.
		mediaElement.preload = 'metadata';

		// Register media source.
		registerMediaSource( mediaSourceId, {
			source: mediaSource,
			elementType: domTypeName,
			state: STATE_PAUSED,
			querySelector,
		} );

		mediaElement.addEventListener( 'loadedmetadata', onMetadataReady );

		return function() {
			mediaElement.removeEventListener( 'loadedmetadata', onMetadataReady );
			unregisterMediaSource( mediaSourceId );
		};
	}, [ attributes, setAttributes, mediaSource ] );

	// Play/Pause media depending on its media store status.
	useEffect( () => {
		if ( ! mediaElementRef?.current ) {
			return;
		}

		const { current: mediaElement } = mediaElementRef;

		// Get the current status of the audio element and the required action to toggle it.
		const [ audioStatus, action ] = mediaElement.paused === false 
			? [ STATE_PLAYING, pause ]
			: [ STATE_PAUSED, play ];

		const debouncedAction = debounce( action, 100 );

		if ( STATE_ERROR !== mediaPlayingState && audioStatus !== mediaPlayingState ) {
			debouncedAction();
		}

		return () => {
			debouncedAction.cancel();
		};
	}, [ mediaPlayingState, mediaElementRef ] );

	return (
		<div id={ attributes?.mediaSourceId }>
			<BlockEdit { ...props } />
		</div>
	);
}

function registerMediaBlocksSource( settings, name ) {
	if ( ! shouldExtendMediaBlock( name, settings ) ) {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			mediaSourceId: {
				type: 'string',
			},
		},
		edit: blockEditWithMediaRegister( name, settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-center/registerMediaBlockSource',
	registerMediaBlocksSource
);
