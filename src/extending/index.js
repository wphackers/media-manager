/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

const EXTENDED_BLOCKS = [
	'core/video',
	'core/audio',
];

console.log( 'EXTENDED_BLOCKS: ', EXTENDED_BLOCKS );

function registerMediaBlocksSource( settings, name ) {
	if ( EXTENDED_BLOCKS.indexOf( name ) < 0 ) {
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
