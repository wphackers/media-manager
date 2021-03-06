/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { withColors, getColorClassName } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
import { getBlockSupport } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { withMediaManagerColors } from '../../';

export const getMediaManagerColorSupport = ( settings ) =>
	getBlockSupport( settings, 'media-manager/color' );

export const getMediaManagerCustomClassNameSupport = ( settings ) =>
	getBlockSupport( settings, 'media-manager/customClassName' );

function addMediaManagerColorSaveProps( props, settings, attributes ) {
	const mediaColor = getMediaManagerColorSupport( settings );
	if ( ! mediaColor ) {
		return props;
	}

	const customClassName = getMediaManagerCustomClassNameSupport( settings );

	const newProps = { ...props, style: props.style || {} };

	const mediaColorClassNames = [];
	for ( const prop in mediaColor ) {
		if ( /^__/.test( prop ) ) {
			continue;
		}

		const colorClassName = getColorClassName(
			mediaColor[ prop ].style,
			attributes[ mediaColor[ prop ].attributeName ]
		);

		mediaColorClassNames.push( colorClassName );

		const attrName = mediaColor[ prop ].customAttributeName;

		const stylePropName =
			mediaColor[ prop ].style === 'background-color'
				? 'backgroundColor'
				: 'color';

		newProps.style[ stylePropName ] = colorClassName
			? undefined
			: attributes[ attrName ];
	}

	newProps.className = classnames(
		props?.className,
		...mediaColorClassNames,
		customClassName
	);

	return newProps;
}

function addMediaManagerColorSupport( settings ) {
	const mediaColor = getMediaManagerColorSupport( settings );
	if ( ! mediaColor ) {
		return settings;
	}

	// HOC withColors settings object.
	const supportStylePropsMap = {};

	// Block attributes.
	const attributes = {};

	for ( const prop in mediaColor ) {
		if ( /^__/.test( prop ) ) {
			continue;
		}

		const attributeName = /\wColor$/.test( prop ) ? prop : `${ prop }Color`;
		const upperCaseName =
			attributeName.charAt( 0 ).toUpperCase() + attributeName.slice( 1 );

		// Populate mediaColor supports object.
		mediaColor[ prop ] = {
			...mediaColor[ prop ],
			attributeName,
			customAttributeName: `custom${ upperCaseName }`,
			setterAttributeName: `set${ upperCaseName }`,
			style: mediaColor[ prop ]?.style || 'color',
			className: attributeName,
		};

		// Build withColors HOC settings.
		supportStylePropsMap[ attributeName ] = mediaColor[ prop ].style;

		// Populate block attributes.
		attributes[ attributeName ] = { type: 'string' };
		attributes[ mediaColor[ prop ].customAttributeName ] = {
			type: 'string',
		};
	}

	const existingGetEditWrapperProps = settings.getEditWrapperProps;

	return {
		...settings,
		attributes: {
			...settings.attributes,
			...attributes,
		},

		getEditWrapperProps: ( attrs ) => {
			let props = {};
			if ( existingGetEditWrapperProps ) {
				props = existingGetEditWrapperProps( attrs );
			}

			return addMediaManagerColorSaveProps( props, settings, attrs );
		},

		edit: compose( [
			withColors( supportStylePropsMap ),
			withMediaManagerColors( mediaColor ),
		] )( settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-player-buttons-blocks',
	addMediaManagerColorSupport
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'media-manager/add-media-player-buttons-save-props',
	addMediaManagerColorSaveProps
);
