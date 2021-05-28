/**
 * WordPress dependencies
 */
 import { registerBlockType } from '@wordpress/blocks';
 import { __ } from '@wordpress/i18n';

 /**
  * Internal dependencies
  */
 import { PlayerPlayPauseIcon as icon } from '../../icons';
 
 /**
  * Internal dependencies
  */
 import './style.scss';
 import Edit from './edit';
 import save from './save';
 
 export const blockName = 'media-manager/play-pause-button';
 
 registerBlockType( blockName, {
	apiVersion: 2,
	title: __( 'Play/Pause button', 'media-manager' ),
	edit: Edit,
	save,
	icon,
	usesContext: [ 'mediaSourceId' ],
	supports: {
		align: true,
	},
	attributes: {
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
 } );
 