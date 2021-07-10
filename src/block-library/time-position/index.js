/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { TimePositionIcon as icon } from '@media-manager/components';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import './style.scss';

export const blockName = 'media-manager/time-position-display';

registerBlockType( blockName, {
	edit: Edit,
	save,
	icon,
} );
