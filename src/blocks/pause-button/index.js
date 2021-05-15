/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PlayerPauseIcon as icon } from '../../icons';
 
 /**
  * Internal dependencies
  */
import './style.scss';
import Edit from './edit';
import save from './save';
 
export const blockName = 'media-manager/pause-button';
 
registerBlockType( blockName, {
	apiVersion: 2,
	title: __( 'Pause button', 'media-manager' ),
	edit: Edit,
	save,
	icon,
	usesContext: [ 'mediaSourceId' ],
} );
 