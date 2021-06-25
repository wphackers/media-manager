/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { getBlockSourceProps, shouldExtendMediaBlock } from '../utils';
import { SUPPORT_CONNECT_PROVIDER } from '../../block-editor/hooks';

function registerMediaBlocksSource( settings, name ) {
	if ( ! shouldExtendMediaBlock( name, settings ) ) {
		return settings;
	}

	return {
		...settings,
		supports: {
			...settings.support,
			[ SUPPORT_CONNECT_PROVIDER ]: getBlockSourceProps( name ),
		},
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/registerMediaBlockSource',
	registerMediaBlocksSource
);
