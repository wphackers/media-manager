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
import { registerMediaSource } from '../store';
import { STORE_ID } from '../store/constants';

const blockEditWithMediaRegister = ( name, BlockEdit ) => ( props ) => {
	const { clientId } = props;
	const { registerMediaSource } = useDispatch( STORE_ID );

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
		const domEl = document?.querySelector( `#block-${ clientId } ${domTypeName }` );
		if ( ! domEl ) {
			return;
		}

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
	'media-theater/registerMediaBlockSource',
	registerMediaBlocksSource
);
