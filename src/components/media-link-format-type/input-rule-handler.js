
/**
 * External dependencies
 */
import { applyFormat, remove } from '@wordpress/rich-text';
import { __, sprintf } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { convertTimeCodeToSeconds, isTimeformat } from '../../lib/time-utils';
import { MEDIA_LINK_FORMAT_TYPE } from './';

export default function( value ) {
	const WRAP_START_CHAR = '[';
	const WRAP_END_CHAR = ']';
	const { start, text } = value;
	const characterBefore = text.slice( start - 1, start );

	// Bail early when ending char is not the wrap-end-char.
	if ( characterBefore !== WRAP_END_CHAR ) {
		return value;
	}

	const textBefore = text.slice( 0, start - 1 );
	// Bail early when the starting char is not wrap-start-char.
	const indexBefore = textBefore.lastIndexOf( WRAP_START_CHAR );
	if ( indexBefore === -1 ) {
		return value;
	}

	const startIndex = indexBefore;
	const endIndex = start - 2;
	if ( startIndex === endIndex ) {
		return value;
	}

	// Check if it's a valid time format text.
	const wrapText = text.substring( startIndex + 1, endIndex + 1);
	if ( ! isTimeformat( wrapText ) ) {
		return value;
	}
	
	value = remove( value, startIndex, startIndex + 1 );
	value = remove( value, endIndex, endIndex + 1 );

	value = applyFormat(
		value, {
			type: MEDIA_LINK_FORMAT_TYPE,
			attributes: {
				timestamp: `#${ convertTimeCodeToSeconds( wrapText ) }`,
				label: sprintf(
					__( 'Playback at %1$s' ),
					wrapText
				),
			},
		},
		startIndex,
		endIndex
	);

	return value;
};
