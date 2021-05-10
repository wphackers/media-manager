/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { shouldExtendBlockWithMedia } from './utils';
import '../components/media-link-format-type';

const BlockEditWithMedia = ( name, BlockEdit ) => ( props ) => {
	const { clientId } = props;
	const isChildOfMediaCenter = useSelect(
		( select ) =>
			!! select( 'core/block-editor' ).getBlockParentsByBlockName(
				clientId,
				'media-manager/media-center'
			).length,
		[]
	);

	if ( ! isChildOfMediaCenter ) {
		return <BlockEdit { ...props } />;
	}

	return <BlockEdit { ...props } />;
};

function empowerBlocksWithMedia( settings, name ) {
	if ( ! shouldExtendBlockWithMedia( name ) ) {
		return settings;
	}

	return {
		...settings,
		edit: BlockEditWithMedia( name, settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/empowerBlocksWithMedia',
	empowerBlocksWithMedia
);
