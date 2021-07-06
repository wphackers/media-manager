/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import {
	SUPPORT_CONNECT_CONSUMER,
	SUPPORT_MEDIA_SELECTOR,
} from '@media-manager/block-editor-complements';
import { MediaCenterIcon as icon } from '@media-manager/components';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import './style.scss';

export const blockName = 'media-manager/media-center';

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
