/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { MediaCenterIcon as icon } from '../../icons';

/**
 * Internal dependencies
 */
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'media-manager/media-center', {
	apiVersion: 2,
	edit: Edit,
	save,
	icon,
	attributes: {
		sourceId: {
			type: 'string',
		},
	},
	supports: {
		align: true,
	},
} );
