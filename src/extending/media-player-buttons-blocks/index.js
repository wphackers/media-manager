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
 * External dependencies
 */
import withPlayerButtonSettings from '../../components/with-player-button-settings';

const getMediaManagerColorSupport = ( settings ) => getBlockSupport( settings, 'media-manager/color' );

function addSaveProps( props, settings, attributes ) {
	const mediaColor = getMediaManagerColorSupport( settings );
	if ( ! mediaColor ) {
		return props;
	}

	const { size } = attributes;

	const newProps = { ...props, style: props.style || {} };

	const mediaColorClassNames = [];
	for( const prop in mediaColor ) {
		if ( /^__/.test( prop ) ) {
			continue;
		}

		const colorClassName = getColorClassName(
			mediaColor[ prop ].style,
			attributes[ mediaColor[ prop ].attributeName ]
		);

		mediaColorClassNames.push( colorClassName );

		const attrName = mediaColor[ prop ].customAttributeName;

		const stylePropName = mediaColor[ prop ].style === 'background-color'
			? 'backgroundColor'
			: 'color';

		newProps.style[ stylePropName ] = colorClassName ? undefined : attributes[ attrName ];
	}

	newProps.className = classnames(
		props?.className,
		...mediaColorClassNames,
		`is-${ size }-size`,
		'is-paused',
	);

	return newProps;
}

function regiterMediaPlayerButtonBlocks( settings ) {
	const mediaColor = getMediaManagerColorSupport( settings );
	if ( ! mediaColor ) {
		return settings;
	}

	// HOC withColors settings object.
	let supportStylePropsMap = {};

	// Block attributes.
	const attributes = {};

	for ( const prop in mediaColor ) {
		if ( /^__/.test( prop ) ) {
			continue;
		}

		const attributeName = /\wColor$/.test( prop ) ? prop : `${ prop }Color`;
		const upperCaseName = attributeName.charAt( 0 ).toUpperCase() + attributeName.slice( 1 );

		// Populate mediaColor supports object.
		mediaColor[ prop ] = {
			...mediaColor[ prop ],
			attributeName: attributeName,
			customAttributeName: `custom${ upperCaseName }`,
			setterAttributeName: `set${ upperCaseName }`,
			style: mediaColor[ prop ]?.style || 'color',
			className: attributeName,
		};

		// Build withColors HOC settings.
		supportStylePropsMap[ attributeName ] = mediaColor[ prop ].style;

		// Populate block attributes.
		attributes[ attributeName ] = { type: 'string' };
		attributes[ mediaColor[ prop ].customAttributeName ] = { type: 'string' };
	}

	const existingGetEditWrapperProps = settings.getEditWrapperProps;

	return {
		...settings,
		attributes: {
			...settings.attributes,
			...attributes,
			size: {
				type: 'string',
				default: 'normal',
			},
		},

		getEditWrapperProps: ( attributes ) => {
			let props = {};
			if ( existingGetEditWrapperProps ) {
				props = existingGetEditWrapperProps( attributes );
			}

			return addSaveProps( props, settings, attributes );
		},

		edit: compose( [
			withColors( supportStylePropsMap ),
			withPlayerButtonSettings( mediaColor ),
		] )( settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-player-buttons-blocks',
	regiterMediaPlayerButtonBlocks,
);

addFilter(
	'blocks.getSaveContent.extraProps',
	'media-manager/add-media-player-buttons-save-props',
	addSaveProps
);
