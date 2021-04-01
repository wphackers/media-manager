
/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { MediaTheaterIcon as icon } from '../icons';

/**
 * Internal dependencies
 */
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'media-center/media-theater', {
	apiVersion: 2,
	edit: Edit,
	save,
	icon,
} );
