/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { getBlockSupport } from '@wordpress/blocks';

/**
 * External dependencies
 */
export const SUPPORT_NAME = 'media-manager/media-selector';

function addMediaSelectorSupport( settings ) {
	if ( ! getBlockSupport( settings, SUPPORT_NAME ) ) {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			sourceId: {
				type: 'string',
			},
		},
	}
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-selector-blocks',
	addMediaSelectorSupport,
);
