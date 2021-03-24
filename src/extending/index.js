/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { shouldExtendBlock } from './utils';

function registerMediaBlocksSource( settings, name ) {
	if ( ! shouldExtendBlock( name ) ) {
		return settings;
	}

	return {
		...settings,
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-theater/registerMediaBlockSource',
	registerMediaBlocksSource
);
