/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { TimePositionIcon as icon } from '../../components/icons';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import './style.scss';

export const blockName = 'media-manager/time-position-display';

registerBlockType( blockName, {
	apiVersion: 2,
	title: __( 'Time position display', 'media-manager' ),
	description: __(
		'Block show the current time position of the media source',
		'media-manager'
	),
	edit: Edit,
	save,
	icon,
	supports: {
		typography: {
			fontSize: true,
			lineHeight: true,
			__experimentalFontStyle: true,
			__experimentalFontWeight: true,
			__experimentalFontFamily: true,
		},
	},
} );
