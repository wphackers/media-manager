
/**
 * External dependencies
 */
import { applyFormat, remove } from '@wordpress/rich-text';
import { __, sprintf } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { convertTimeCodeToSeconds, isMarkfownTimeformat } from '../../lib/utils/time';
import { MEDIA_LINK_FORMAT_TYPE } from './';
import { blockName as mediaCenterBlockName } from '../../blocks/media-center';

export default function( value ) {
	// Apply rule handler only when current block
	// is child of media center.
	const { getSelectedBlockClientId, getBlockParentsByBlockName } = select( blockEditorStore );
	const isChildOfMediaCenter = getBlockParentsByBlockName(
		getSelectedBlockClientId(),
		mediaCenterBlockName
	).length;

	if ( ! isChildOfMediaCenter ) {
		return value;
	}

	const WRAP_VALUE_END_CHAR = ')';
	const { start, text } = value;
	const characterBefore = text.slice( start - 1, start );
	const isTriggerChar = characterBefore === WRAP_VALUE_END_CHAR;

	if ( ! isTriggerChar ) {
		return value;
	}

	const subText = text.substr( 0, start );
	const markdownParts = isMarkfownTimeformat( subText );
	if ( ! markdownParts ) {
		return value;
	}

	const timestamp = markdownParts[ 1 ];
	const link = markdownParts[ 2 ];
	const startIndex = start - timestamp.length - link.length - 4;
	const endIndex = startIndex + link.length;

	value = remove( value, startIndex, startIndex + timestamp.length + 3 );
	value = remove( value, endIndex, endIndex + 1 );

	value = applyFormat(
		value, {
			type: MEDIA_LINK_FORMAT_TYPE,
			attributes: {
				timestamp: `#${ convertTimeCodeToSeconds( timestamp ) }`,
				label: sprintf(
					__( 'Playback at %1$s' ),
					timestamp
				),
			},
		},
		startIndex,
		endIndex
	);

	return value;
};
