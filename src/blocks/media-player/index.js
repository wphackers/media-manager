/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PlayerIcon as icon } from '../../icons';
 
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import './style.scss';
 
export const blockName = 'media-manager/media-player';
 
registerBlockType( blockName, {
	apiVersion: 2,
	title: __( 'Media Player', 'media-manager' ),
	description: __( 'Compose your custom media player with blocks', 'media-manager' ),
	edit: Edit,
	save,
	icon,
	supports: {
		align: true,
		'media-manager/color': {
			background:  {
				label: __( 'Background color', 'media-manager' ),
			},
			__panelTitle: __( 'Player color', 'media-manager' ),
		},
	},
} );

// Common supports for player buttons blocks.
export const buttonSupports = {
	align: true,
	'media-manager/color': {
		icon: {
			label: __( 'Icon color', 'media-manager' ),
			style: 'backgroundColor',
		},
		background:  {
			label: __( 'Background color', 'media-manager' ),
		},

		__contrastChecker: [ 'icon', 'background' ],

		__panelTitle: __( 'Color', 'media-manager' ),
	},
};