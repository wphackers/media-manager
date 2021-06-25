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
import Edit from './edit';
import save from './save';
import './style.scss';

export const blockName = 'media-manager/media-center';
import {
	SUPPORT_CONNECT_CONSUMER,
	SUPPORT_MEDIA_SELECTOR,
} from '../../block-editor/hooks';

registerBlockType( blockName, {
	apiVersion: 2,
	edit: Edit,
	save,
	icon,
	supports: {
		align: true,
		[ SUPPORT_CONNECT_CONSUMER ]: true,
		[ SUPPORT_MEDIA_SELECTOR ]: true,
	},
} );
