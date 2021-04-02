/**
 * WordPress dependencies
 */
import { select } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
/**
 * Internal dependencies
 */
import {
	EXTENDED_MEDIA_BLOCKS,
	MEDIA_BLOCKS_ATTRIBUTE_SCHEMA,
	EXTEND_BLOCKS_WITH_MEDIA,
} from './extended-blocks';

function isMediaBlockListed( name ) {
	return EXTENDED_MEDIA_BLOCKS.indexOf( name ) >= 0;
}

function isBlockListed( name ) {
	return name && EXTEND_BLOCKS_WITH_MEDIA.indexOf( name ) >= 0;
}

function hasBlockValidScheme( name, attributes ) {
	// check if the scheme is defined.
	if ( ! MEDIA_BLOCKS_ATTRIBUTE_SCHEMA[ name ] ) {
		return false;
	}

	const blockSchema = MEDIA_BLOCKS_ATTRIBUTE_SCHEMA[ name ];

	// check if the attribute name exists in the scheme.
	if ( ! attributes[ blockSchema.name ] ) {
		return false;
	}

	// check attribute type.
	if (
		! attributes[ blockSchema.name ].type ||
		attributes[ blockSchema.name ].type !== blockSchema.type
	) {
		return false;
	}

	return true;
}

export function shouldExtendMediaBlock( name, settings ) {
	if ( ! isMediaBlockListed( name ) ) {
		return false;
	}

	return hasBlockValidScheme( name, settings?.attributes );
}

export function getBlockSourceProps( name ) {
	return MEDIA_BLOCKS_ATTRIBUTE_SCHEMA?.[ name ];
}

export function shouldExtendBlockWithMedia( name ) {
	const selectedBlock = select( blockEditorStore ).getSelectedBlock();
	if( ! isBlockListed( name || selectedBlock?.name ) ) {
		return false;
	}
	
	if ( ! selectedBlock?.clientId ) {
		return false;
	}

	return !! select( blockEditorStore )
		.getBlockParentsByBlockName( selectedBlock.clientId, 'media-center/media-theater' )
		.length;
}
