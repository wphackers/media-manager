/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import { PlayerPlayIcon as icon } from '@media-manager/components';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import './style.scss';

export const blockName = 'media-manager/play-button';

domReady( function() {
	// we need this if we'd like to extend the block :'(
	registerBlockType( blockName, {
		edit: Edit,
		save,
		icon,
	} );
} );
