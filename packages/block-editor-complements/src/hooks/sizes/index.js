/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { getBlockSupport } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { withSizes } from '../../';
import { getSlugBySize } from '../../components';

// Define and export support name.
export const SUPPORT_NAME = 'media-manager/sizes';

function addMediaManagerSizeSaveProps( props, settings, attributes ) {
	const sizes = getBlockSupport( settings, SUPPORT_NAME );
	if ( ! sizes ) {
		return props;
	}

	const { size } = attributes;
	const slug = getSlugBySize( sizes.options, size );

	return {
		...props,
		className: classnames( props?.className, `is-${ slug }-size` ),
	};
}

function addMediaManagerSizeSupport( settings ) {
	const sizes = getBlockSupport( settings, SUPPORT_NAME );
	if ( ! sizes ) {
		return settings;
	}

	const existingGetEditWrapperProps = settings.getEditWrapperProps;

	return {
		...settings,
		attributes: {
			...settings.attributes,
			size: {
				type: 'number',
				default: 1,
			},
		},

		getEditWrapperProps: ( attributes ) => {
			let props = {};
			if ( existingGetEditWrapperProps ) {
				props = existingGetEditWrapperProps( attributes );
			}

			return addMediaManagerSizeSaveProps( props, settings, attributes );
		},

		edit: withSizes( sizes )( settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-player-buttons-blocks',
	addMediaManagerSizeSupport,
	0 // <- it change the order in the InspectorControls (sidebar)
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'media-manager/add-media-player-buttons-save-props',
	addMediaManagerSizeSaveProps
);
