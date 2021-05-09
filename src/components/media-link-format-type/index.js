/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import {
	registerFormatType,
	toggleFormat,
	applyFormat,
	isCollapsed,
	getActiveFormat,
	remove,
} from '@wordpress/rich-text';
import {
	RichTextToolbarButton,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { MediaLinkIcon } from '../../icons';
import { shouldExtendBlockWithMedia } from '../../extending/utils';
import { STORE_ID } from '../../store/constants';
import MediaLinkPopover from './media-link-popover';
import './style.scss';
import { convertSecondsToTimeCode, convertTimeCodeToSeconds, isTimeformat } from '../../lib/time-utils';

const MEDIA_LINK_FORMAT_TYPE = 'media-manager/media-link-format-type';

function MediaLinkFormatButton( { value, onChange, isActive, contentRef } ) {
	const mediatTheatherBlockClientId = shouldExtendBlockWithMedia();
	if ( ! mediatTheatherBlockClientId?.length ) {
		return null;
	}

	const mediaCenterBlock = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlock(
				mediatTheatherBlockClientId[ 0 ]
			),
		[]
	);

	const { sourceId } = mediaCenterBlock?.attributes || {};
	const { domRef } = useSelect(
		( select ) => ( {
			domRef: select( STORE_ID ).getMediaSourceDomReference( sourceId ),
		} ),
		[]
	);

	// Media link format time position.
	const { attributes } = getActiveFormat( value, MEDIA_LINK_FORMAT_TYPE ) || {};

	const { ownerDocument } = contentRef.current;
	const { defaultView } = ownerDocument;

	// Set the initial time position for the format:
	// (1) From extended `timestamp` block attr.
	// (2) Selected text when it has time format.
	// (3) Current position of the media source
	let mediaLinkFormatPosition = 0;
	
	if ( attributes?.timestamp ) {
		mediaLinkFormatPosition = Number( attributes?.timestamp?.replace(/#/, '' ) );
	} else if ( ! isCollapsed( value ) ) {
		// Check whether the selected text has a timestamp shape.
		const selection = defaultView.getSelection();
		const selectedText = selection.toString();
		if ( isTimeformat( selectedText ) ) {
			mediaLinkFormatPosition = convertTimeCodeToSeconds( selectedText );
		}
	} else if ( domRef?.currentTime ) {
		mediaLinkFormatPosition = domRef.currentTime;
	}

	return (
		<>
			<RichTextToolbarButton
				shortcutType="primary"
				icon={ <MediaLinkIcon /> }
				title={ __( 'Link to media', 'media-manager' ) }
				onClick={ function () {
					onChange(
						toggleFormat( value, {
							type: MEDIA_LINK_FORMAT_TYPE,
							attributes: {
								timestamp: `#${ mediaLinkFormatPosition }`,
								label: sprintf(
									__( 'Playback at %1$s' ),
									convertSecondsToTimeCode( mediaLinkFormatPosition )
								),
							},
						} )
					);
				} }
				isActive={ isActive }
			/>

			<MediaLinkPopover
				value={ value }
				contentRef={ contentRef }
				currentTime={ mediaLinkFormatPosition }
				isActive={ isActive }
				sourceId={ sourceId }
				onTimeChange={ function ( newTimePosition ) {
					onChange(
						applyFormat( value, {
							type: MEDIA_LINK_FORMAT_TYPE,
							attributes: {
								timestamp: `#${ newTimePosition }`,
								label: sprintf(
									__( 'Playback at %1$s' ),
									convertSecondsToTimeCode( newTimePosition )
								),
							},
						} )
					);
				} }
			/>
		</>
	);
}

export const mediaLinkFormatButtonSettings = {
	name: MEDIA_LINK_FORMAT_TYPE,
	title: 'Media link',
	tagName: 'a',
	className: 'media-link-format-type',
	attributes: {
		timestamp: 'href',
		label: 'title',
	},
	edit: MediaLinkFormatButton,
	__unstableInputRule( value ) {
		const WRAPCHAR = '|';
		const { start, text } = value;
		const characterBefore = text.slice( start - 1, start );

		// Bail early when prev char is not the backtick.
		if ( characterBefore !== WRAPCHAR ) {
			return value;
		}

		const textBefore = text.slice( 0, start - 1 );
		const indexBefore = textBefore.lastIndexOf( WRAPCHAR );
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
	},
};

registerFormatType( MEDIA_LINK_FORMAT_TYPE, mediaLinkFormatButtonSettings );
