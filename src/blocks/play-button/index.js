/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';

/**
 * Internal dependencies
 */
import { PlayerPlayIcon as icon } from '../../icons';
 
/**
 * Internal dependencies
 */
import { buttonSupports as supports } from '../media-player';
import Edit from './edit';
import save from './save';
import './style.scss';
 
export const blockName = 'media-manager/play-button';

domReady( function() { // we need this if we'd like to extend the block :'(
	registerBlockType( blockName, {
		apiVersion: 2,
		title: __( 'Play button', 'media-manager' ),
		edit: Edit,
		save,
		icon,
		supports,
	} );
} )