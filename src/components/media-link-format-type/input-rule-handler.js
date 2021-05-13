
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

	const SIMPLE_OPEN_TRIGGER_CHAR = '[';
	const SIMPLE_CLOSE_TRIGGER_CHAR = ']';
	const MD_OPEN_TRIGGER_CHAR = '(';
	const MD_CLOSE_TRIGGER_CHAR = ')';
	const { start, text } = value;

	const characterBefore = text.slice( start - 1, start );
	const trigger = text.slice( start - 2, start - 1);

	const isTriggerChar = trigger === SIMPLE_CLOSE_TRIGGER_CHAR || trigger === MD_CLOSE_TRIGGER_CHAR;
	if ( ! isTriggerChar ) {
		return value;
	}

	const textBefore = text.substr( 0, start );
	if ( characterBefore !== MD_OPEN_TRIGGER_CHAR ) {
		const startIndex = textBefore.lastIndexOf( SIMPLE_OPEN_TRIGGER_CHAR );		
		if ( startIndex === -1 ) {
			return value;
		}

		const parts = isMarkfownTimeformat( textBefore );
		if ( ! parts?.[ 1 ] ) {
			return value;
		}

		const timestamp = parts[ 1 ];
		const endIndex = start - ( parts?.[ 2 ] ? timestamp.length + 5 : 3 ); // [hh:mm:ss].
		const charsToRemove = parts?.[ 2 ] ? timestamp.length + 3 : 1; // // [hh:mm:ss](link).

		value = remove( value, startIndex, startIndex + charsToRemove );
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

		value = remove( value, endIndex + 1, endIndex + 2 ); // <- move the carte at the init position.
	}

	return value;
};
