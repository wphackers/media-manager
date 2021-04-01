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

	// Register media source.
	const { name: attrName, domTypeName } = getBlockSourceProps( name );
	registerMediaSource( clientId, {
		source: props?.attributes?.[ attrName ],
	} );

	// Interact with the client API.
	useEffect( () => {
		// Pick DOM element reference through client ID and dom type name.
		// We rely on this for now.
		// Probably, we should replace it with useRef() hook,
		// adding a wrapper element.
		const querySelector = `#block-${ clientId } ${domTypeName }`;
		const domEl = document?.querySelector( querySelector );
		if ( ! domEl ) {
			return;
		}

		// Store the element ID.
		updateMediaSourceData( clientId, {
			querySelector,
		} );
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
