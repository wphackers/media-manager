
/**
 * Internal dependencies
 */

import { EXTENDED_BLOCKS, BLOCKS_ATTRIBUTE_SCHEMA } from './extended-blocks';

function isBlockListed( name ) {
	return EXTENDED_BLOCKS.indexOf( name ) >= 0;
}

function hasBLockValidScheme( name, attributes ) {
	// check if the scheme is defined.
	if ( ! BLOCKS_ATTRIBUTE_SCHEMA[ name ] ) {
		return false;
	}

	const blockSchema = BLOCKS_ATTRIBUTE_SCHEMA[ name ];

	// check if the attribute name exists in the scheme.
	if ( ! attributes[ blockSchema.name ] ) {
		return false;
	}

	// check attribute type
	if (
		! attributes[ blockSchema.name ].type ||
		attributes[ blockSchema.name ].type !== blockSchema.type
	) {
		return false;
	}

	return true;
}

export function shouldExtendBlock( name, settings ) {
	if ( ! isBlockListed( name ) ) {
		return false;
	}

	return hasBLockValidScheme( name, settings?.attributes );
}

export function getBlockSourceAttributeName( name ) {
	return BLOCKS_ATTRIBUTE_SCHEMA?.[ name ].name;
}