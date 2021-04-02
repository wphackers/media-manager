/**
 * External dependencies
 */

 /**
  * WordPress dependencies
  */
 import { addFilter } from '@wordpress/hooks';

 /**
  * Internal dependencies
  */
 import { shouldExtendBlockWithMedia } from './utils';
 
 const blockEditWithMedia = ( name, BlockEdit ) => ( props ) => {
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
 