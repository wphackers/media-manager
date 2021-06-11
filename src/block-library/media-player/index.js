/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PlayerIcon as icon } from '../../components/icons';
 
/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import './style.scss';
import { SUPPORT_MEDIA_SELECTOR } from '../../block-editor/hooks';
 
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
		'media-manager/connect': true,
		[ SUPPORT_MEDIA_SELECTOR ]: true,
		'media-manager/color': {
			background:  {
				label: __( 'Background color', 'media-manager' ),
				style: 'background-color',
			},
		},
	},
} );

// Common supports for player buttons blocks.
export const buttonSupports = {
	align: true,
	'media-manager/connect': true,
	[ SUPPORT_MEDIA_SELECTOR ]: true,
	'media-manager/color': {
		icon: {
			label: __( 'Icon color', 'media-manager' ),
			style: 'background-color',
		},
		background: {
			label: __( 'Background color', 'media-manager' ),
		},
		__contrastChecker: [ 'icon', 'background' ],
		__sectionTitle: __( 'Color', 'media-manager' ),
	},
	'media-manager/customClassName': 'wp-media-manager-player-button', // <- @TODO: make its own implementation
};
