/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { MediaCenterIcon as icon } from '../../components/icons';

/**
 * Internal dependencies
 */
import './style.scss';
import Edit from './edit';
import save from './save';

export const blockName = 'media-manager/media-center';
import { SUPPORT_MEDIA_SELECTOR } from '../../block-editor/hooks';

registerBlockType( blockName, {
	apiVersion: 2,
	edit: Edit,
	save,
	icon,
	supports: {
		align: true,
		[ SUPPORT_MEDIA_SELECTOR ]: true,
	},
	providesContext: {
		'mediaSourceId': 'sourceId',
	},
} );
