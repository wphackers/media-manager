/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { shouldExtendBlock, getBlockSourceProps } from './utils';
import { STORE_ID } from '../store/constants';

const blockEditWithMediaRegister = ( name, BlockEdit ) => ( props ) => {
	const { clientId } = props;
	const { registerMediaSource, updateMediaSourceData } = useDispatch( STORE_ID );

	// Bail early when no clientId.
	if ( ! clientId ) {
		return <BlockEdit { ...props } />;
	}

	const mediaSourceId = `media-source-${ clientId }`;

	// Register media source.
	const { name: attrName, domTypeName } = getBlockSourceProps( name );
	registerMediaSource( mediaSourceId, {
		source: props?.attributes?.[ attrName ],
	} );

	function onMetadataReady( event ) {
		updateMediaSourceData( mediaSourceId, {
			duration: event?.srcElement?.duration,
		} );
	}

	// Interact with the client API.
	useEffect( () => {
		// Pick DOM element reference through client ID and dom type name.
		// We rely on this for now.
		// Probably, we should replace it with useRef() hook,
		// adding a wrapper element.
		const querySelector = `#block-${ clientId } ${domTypeName }`;
		const mediaElement = document?.querySelector( querySelector );
		if ( ! mediaElement ) {
			return;
		}

		// Pre load audio metadata.
		mediaElement.preload = 'metadata';

		// Store the element ID.
		updateMediaSourceData( mediaSourceId, {
			querySelector,
		} );

		mediaElement.addEventListener( 'loadedmetadata', onMetadataReady );

		return function() {
			mediaElement.removeEventListener( 'loadedmetadata', onMetadataReady );
		};
	}, [ clientId ] );

	return <BlockEdit { ...props } />;
}

function registerMediaBlocksSource( settings, name ) {
	if ( ! shouldExtendBlock( name, settings ) ) {
		return settings;
	}

	return {
		...settings,
		edit: blockEditWithMediaRegister( name, settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-center/registerMediaBlockSource',
	registerMediaBlocksSource
);
