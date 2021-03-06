/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import {
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
import { store as mediaManagerStore } from '@media-manager/media-connect';
import {
	convertSecondsToTimeCode,
	convertTimeCodeToSeconds,
	isTimeformat,
	hasMultipleTimeformats,
	getTimeformatMatch,
} from '@media-manager/time-utils';
import { MediaLinkIcon } from '@media-manager/components';

/**
 * Internal dependencies
 */
import { shouldExtendBlockWithMedia } from '../../../../src/extending/utils'; // @Todo: extend this!
import MediaLinkPopover from './media-link-popover';
import inputRuleHandler from './input-rule-handler';

export const name = 'media-manager/media-link-format-type';

function MediaLinkFormatButton( { value, onChange, isActive, contentRef } ) {
	const mediatCenterBlockClientId = shouldExtendBlockWithMedia();
	const mediaCenterBlock = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlock(
				mediatCenterBlockClientId[ 0 ]
			),
		[]
	);

	const { mediaSourceReferenceId } = mediaCenterBlock?.attributes || {};
	const { domRef } = useSelect(
		( select ) => ( {
			domRef: select( mediaManagerStore ).getMediaSourceDomReference(
				mediaSourceReferenceId
			),
		} ),
		[]
	);

	const [ isMultipleEdition, setIsMultipleEdition ] = useState( false );
	if ( ! mediatCenterBlockClientId?.length ) {
		return null;
	}

	// Media link format time position.
	const { attributes } = getActiveFormat( value, name ) || {};

	const { ownerDocument } = contentRef.current;
	const { defaultView } = ownerDocument;

	// Set the initial time position for the format:
	// (1) From extended `timestamp` block attr.
	// (2) Selected text when it has time format (HH:MM:SS).
	// (3) Current position of the media source.
	let mediaLinkFormatTimestamp = 0;
	let isSingleOnTheFlyStyle = false; // <- detects a single timeformat selected hh:mm:ss

	// Check whether the selected text has a timestamp shape.
	const selection = defaultView.getSelection();
	const selectedText = selection.toString();

	if ( attributes?.timestamp ) {
		mediaLinkFormatTimestamp = Number(
			attributes?.timestamp?.replace( /#/, '' )
		);
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
	 * Helper function to apply the style format.
	 *
	 * @param {string} time timestamp to apply to the format
	 * @return {Object} style forat object
	 */
	function getStyleObject( time ) {
		return {
			type: name,
			attributes: {
				timestamp: `#${ time }`,
				label: sprintf(
					/* translators: Playback at the specific position. %s: Time position */
					__( 'Playback at %1$s', 'media-manager' ),
					convertSecondsToTimeCode( time )
				),
			},
		};
	}

	/**
	 * Apply style format event handler.
	 *
	 * @param {string} newTimestamp new timestamp value to apply (optional)
	 */
	function applyFormatStyleHandler( newTimestamp ) {
		if ( newTimestamp ) {
			return onChange(
				applyFormat( value, getStyleObject( newTimestamp ) )
			);
		}

		onChange(
			toggleFormat( value, getStyleObject( mediaLinkFormatTimestamp ) )
		);
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
					if (
						multipleFormats?.length &&
						! isSingleOnTheFlyStyle &&
						! isActive
					) {
						return setIsMultipleEdition( true );
					}

					applyFormatStyleHandler( false );
				} }
				isActive={ isActive }
			/>

			<MediaLinkPopover
				value={ value }
				hasMultipleTimeformats={ multipleFormats }
				isMultipleEdition={ isMultipleEdition }
				contentRef={ contentRef }
				currentTime={ mediaLinkFormatTimestamp }
				isActive={ isActive }
				mediaSourceId={ mediaSourceReferenceId }
				onTimeChange={ applyFormatStyleHandler }
				onIgnoreMultipleFormat={ () => {
					setIsMultipleEdition( false );
					applyFormatStyleHandler();
				} }
				onApplyMultipleFormat={ () => {
					let match;
					while (
						( match = getTimeformatMatch( selectedText ) ) !== null
					) {
						const timestamp = match[ 0 ];
						const { index: startIndex } = match;
						const endIndex = startIndex + timestamp.length;

						value = applyFormat(
							value,
							{
								type: name,
								attributes: {
									timestamp: `#${ convertTimeCodeToSeconds(
										timestamp
									) }`,
									label: sprintf(
										/* translators: Playback at the specific position. %s: Time position */
										__( 'Playback at %s', 'media-manager' ),
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

export const attributes = {
	timestamp: 'href',
	label: 'title',
};

export const settings = {
	name,
	title: 'Media link',
	tagName: 'a',
	className: 'media-link-format-type',
	attributes,
	edit: MediaLinkFormatButton,
	__unstableInputRule: inputRuleHandler,
};
