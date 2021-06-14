/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { getBlockSourceProps, shouldExtendMediaBlock } from '../utils';

function registerMediaBlocksSource( settings, name ) {
	if ( ! shouldExtendMediaBlock( name, settings ) ) {
		return settings;
	}

	return {
		...settings,
		supports: {
			...settings.support,
			'media-manager/connect-provider': getBlockSourceProps( name ),
		}
	}
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/registerMediaBlockSource',
	registerMediaBlocksSource
);
