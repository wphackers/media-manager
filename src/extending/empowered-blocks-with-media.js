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

 const blockEditWithMedia = ( name, BlockEdit ) => ( props ) => {
	const { clientId } = props;
	const isChildOfMediaTheater = useSelect(
		select => !! select( 'core/block-editor' )
			.getBlockParentsByBlockName( clientId, 'media-center/media-theater' ).length,
		[]
	);

	if ( ! isChildOfMediaTheater ) {
		return <BlockEdit { ...props } />;
	}

	return <BlockEdit { ...props } />;
 }
 
 function empowerBlocksWithMedia( settings, name ) {
	if ( ! shouldExtendBlockWithMedia( name ) ) {
		return settings;
	}
 
	return {
		...settings,
		edit: blockEditWithMedia( name, settings.edit ),
	};
 }
 
 addFilter(
	'blocks.registerBlockType',
	'media-center/empowerBlocksWithMedia',
	empowerBlocksWithMedia
 );
 