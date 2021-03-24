/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { shouldExtendBlock, getBlockSourceAttributeName } from './utils';
import { registerMediaSource } from '../store';
import { STORE_ID } from '../store/constants';

const blockEditWithMediaRegister = ( name, BlockEdit ) => ( props ) => {
	const { clientId } = props;
	const { registerMediaSource } = useDispatch( STORE_ID );

	if ( ! clientId ) {
		return <BlockEdit { ...props } />;
	}

	const sourceAttributeName = getBlockSourceAttributeName( name );
	registerMediaSource( clientId, {
		source: props?.attributes?.[ sourceAttributeName ],
	} );

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
