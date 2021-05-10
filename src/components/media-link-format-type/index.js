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
} from '@wordpress/rich-text';
import {
	RichTextToolbarButton,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { MediaLinkIcon } from '../../icons';
import { shouldExtendBlockWithMedia } from '../../extending/utils';
import { STORE_ID } from '../../store/constants';
import MediaLinkPopover from './media-link-popover';
import './style.scss';
import {
	convertSecondsToTimeCode,
	convertTimeCodeToSeconds,
	isTimeformat,
	hasMultipleTimeformats,
	getTimeformatMatch,
} from '../../lib/time-utils';
import inputRuleHandler from './input-rule-handler';

export const MEDIA_LINK_FORMAT_TYPE = 'media-manager/media-link-format-type';

function MediaLinkFormatButton( { value, onChange, isActive, contentRef } ) {
	const mediatTheatherBlockClientId = shouldExtendBlockWithMedia();
	const mediaCenterBlock = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlock(
				mediatTheatherBlockClientId[ 0 ]
			),
		[]
	);

	const { domRef } = useSelect(
		( select ) => ( {
			domRef: select( STORE_ID ).getMediaSourceDomReference( sourceId ),
		} ),
		[]
	);

	const [ isMultipleEdition, setIsMultipleEdition ] = useState( false );

	if ( ! mediatTheatherBlockClientId?.length ) {
		return null;
	}

	const { sourceId } = mediaCenterBlock?.attributes || {};

	// Media link format time position.
	const { attributes } = getActiveFormat( value, MEDIA_LINK_FORMAT_TYPE ) || {};

	const { ownerDocument } = contentRef.current;
	const { defaultView } = ownerDocument;

	// Set the initial time position for the format:
	// (1) From extended `timestamp` block attr.
	// (2) Selected text when it has time format.
	// (3) Current position of the media source
	let mediaLinkFormatTimestamp = 0;
	let isSingleOnTheFlyStyle = false; // <- detects a single timeformat selected hh:mm:ss

	// Check whether the selected text has a timestamp shape.
	const selection = defaultView.getSelection();
	const selectedText = selection.toString();
	
	if ( attributes?.timestamp ) {
		mediaLinkFormatTimestamp = Number( attributes?.timestamp?.replace(/#/, '' ) );
	} else if ( ! isCollapsed( value ) ) {
		if ( isTimeformat( selectedText ) ) {
			isSingleOnTheFlyStyle = true;
			mediaLinkFormatTimestamp = convertTimeCodeToSeconds( selectedText );
		}
	} else if ( domRef?.currentTime ) {
		mediaLinkFormatTimestamp = domRef.currentTime;
	}

	const multipleFormats = hasMultipleTimeformats( selectedText );

	/**
	 * Helper function to apply the style format
	 * 
	 * @param {string} time timestamp to apply to the format
	 * @returns {object} style forat object
	 */
	function getStyleObject( time ) {
		return {
			type: MEDIA_LINK_FORMAT_TYPE,
			attributes: {
				timestamp: `#${ time }`,
				label: sprintf(
					__( 'Playback at %1$s' ),
					convertSecondsToTimeCode( time )
				),
			},
		}
	}

	/**
	 * Apply style format event handler.
	 * 
	 * @param {string} newTimestamp new timestamp value to apply (optional)
	 */
	function applyFormatStyleHandler( newTimestamp ) {
		if ( newTimestamp ) {
			return onChange( applyFormat( value, getStyleObject( newTimestamp ) ) );
		}

		onChange( toggleFormat( value, getStyleObject( mediaLinkFormatTimestamp ) ) );
	}

	return (
		<>
			<RichTextToolbarButton
				shortcutType="primary"
				icon={ <MediaLinkIcon /> }
				title={ __( 'Link to media', 'media-manager' ) }
				onClick={ () => {
					/*
					 * Set edition mode when:
					 * - selected text has multi timeformats
					 * - it is not a single selection
					 * - there is not format active
					 */
					if ( multipleFormats?.length && ! isSingleOnTheFlyStyle && ! isActive ) {
						return setIsMultipleEdition( true );
					}

					applyFormatStyleHandler( false );
				} }
				isActive={ isActive }
			/>

			<MediaLinkPopover
				value={ value }
				hasMultipleTimeformats = { multipleFormats }
				isMultipleEdition = { isMultipleEdition }
				contentRef={ contentRef }
				currentTime={ mediaLinkFormatTimestamp }
				isActive={ isActive }
				sourceId={ sourceId }
				onTimeChange={ applyFormatStyleHandler }
				onIgnoreMultipleFormat={ () => {
					setIsMultipleEdition( false );
					applyFormatStyleHandler();
				} }
				onApplyMultipleFormat={ () => {	
					let match;
					while ( ( match = getTimeformatMatch( selectedText ) ) != null) {
						const timestamp = match[ 0 ];
						const { index: startIndex } = match;
						const endIndex = startIndex + timestamp.length;

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
					}

					onChange( value );
					setIsMultipleEdition( false );
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
	__unstableInputRule: inputRuleHandler,
};

registerFormatType( MEDIA_LINK_FORMAT_TYPE, mediaLinkFormatButtonSettings );
