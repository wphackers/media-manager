/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';
import { PlayerPlayPauseIcon as icon } from '@media-manager/components';

/**
 * Internal dependencies
 */
import { buttonSupports as supports } from '../media-player';
import Edit from './edit';
import save from './save';
import './style.scss';

export const blockName = 'media-manager/play-pause-button';

domReady( function () {
	// we need this if we'd like to extend the block :'(
	registerBlockType( blockName, {
		apiVersion: 2,
		title: __( 'Play/Pause Button', 'media-manager' ),
		edit: Edit,
		save,
		icon,
		supports,
	} );
} );
