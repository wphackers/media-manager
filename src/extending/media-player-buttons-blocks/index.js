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

/**
 * External dependencies
 */
import { PLAYER_BLOCKS } from '../../blocks/media-player/edit';
import withPlayerButtonSettings from '../../components/with-player-button-settings';

function addSaveProps( props, { name }, attributes ) {
	if ( ! PLAYER_BLOCKS.includes( name ) ) {
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
		`wp-block-media-manager__${ name.substring( 14 ) }`,
		backgroundColorClass,
		iconColorClass,
		`is-${ size }-size`,
	);

	newProps.style = {
		backgroundColor: ! backgroundColorClass ? customBackgroundColor : undefined,
		color: ! iconColorClass ? customIconColor : undefined,
	};

	return newProps;
}

function regiterMediaPlayerButtonBlocks( settings, name ) {
	if ( ! PLAYER_BLOCKS.includes( name ) ) {
		return settings;
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
			withColors( {
				iconColor: 'color',
				backgroundColor: 'background-color',
			} ),
			withPlayerButtonSettings,
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
