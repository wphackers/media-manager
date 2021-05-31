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

function addSaveProps( props, settings, attributes ) {
	const mediaColor = getBlockSupport( settings, 'media-manager/color' );
	if ( ! mediaColor ) {
		return props;
	}

	const {
		iconColor,
		customIconColor,
		backgroundColor,
		customBackgroundColor,
		size,
	} = attributes;

	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const iconColorClass = getColorClassName(
		'color',
		iconColor
	);

	const newProps = { ...props };

	newProps.className = classnames(
		'wp-block-media-manager__item',
		`wp-block-media-manager__${ settings.name.substring( 14 ) }`,
		backgroundColorClass,
		iconColorClass,
		`is-${ size }-size`,
		'is-paused',
	);

	newProps.style = {
		backgroundColor: ! backgroundColorClass ? customBackgroundColor : undefined,
		color: ! iconColorClass ? customIconColor : undefined,
	};

	return newProps;
}

function regiterMediaPlayerButtonBlocks( settings ) {
	const mediaColor = getBlockSupport( settings, 'media-manager/color' );
	if ( ! mediaColor ) {
		return settings;
	}

	let supportStylePropsMap = {};
	for ( const prop in mediaColor ) {
		if ( /^__/.test( prop ) ) {
			continue;
		}

		const propName = /\wColor$/.test( prop ) ? prop : `${ prop }Color`;
		mediaColor[ prop ].propName = propName;
		mediaColor[ prop ].setterName = `set${ propName.charAt( 0 ).toUpperCase() + propName.slice( 1 ) }`;
		mediaColor[ prop ].style = mediaColor[ prop ]?.style || 'color';
		supportStylePropsMap[ propName ] = mediaColor[ prop ].style;
	}

	const existingGetEditWrapperProps = settings.getEditWrapperProps;

	return {
		...settings,
		attributes: {
			...settings.attributes,
			iconColor: {
				type: 'string',
			},
			customIconColor: {
				type: 'string',
			},
			backgroundColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
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
