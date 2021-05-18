/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { TimePositionIcon as icon } from '../../icons';
 
 /**
  * Internal dependencies
  */
import './style.scss';
import Edit from './edit';
import save from './save';
 
export const blockName = 'media-manager/time-position-diaplay';
 
registerBlockType( blockName, {
	apiVersion: 2,
	title: __( 'Time position display', 'media-manager' ),
	description: __( 'Block show the current time position of the media source', 'media-manager' ),
	edit: Edit,
	save,
	icon,
	usesContext: [ 'mediaSourceId' ],
	supports: {
		fontSize: true,
		lineHeight: true,
	},
} );
