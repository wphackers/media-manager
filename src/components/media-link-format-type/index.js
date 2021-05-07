/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { registerFormatType, toggleFormat, applyFormat, getTextContent, slice, getActiveFormat } from '@wordpress/rich-text';
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
import { convertSecondsToTimeCode } from '../../lib/time-utils';

const MEDIA_LINK_FORMAT_TYPE = 'media-manager/media-link-format-type';

function MediaLinkFormatButton( { value, onChange, isActive, contentRef } ) {
	const mediatTheatherBlockClientId = shouldExtendBlockWithMedia();
	if ( ! mediatTheatherBlockClientId?.length ) {
		return null;
	}

	const mediaTheaterBlock = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlock(
				mediatTheatherBlockClientId[ 0 ]
			),
		[]
	);

	const { sourceId } = mediaTheaterBlock?.attributes || {};
	const { domRef } = useSelect(
		( select ) => ( {
			domRef: select( STORE_ID ).getMediaSourceDomReference( sourceId ),
		} ),
		[]
	);

	// Media link format time position.
	const { attributes } = getActiveFormat( value, MEDIA_LINK_FORMAT_TYPE ) || {};

	// Pick the initial current time,
	// either from the attribute.
	// or from the media source.
	const mediaLinkFormatPosition = attributes?.url
		? Number( attributes?.url?.replace(/#/, '' ) )
		: domRef?.currentTime || 0;

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
								url: `#${ mediaLinkFormatPosition }`,
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
								url: `#${ newTimePosition }`,
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
		url: 'href',
		label: 'title',
	},
	edit: MediaLinkFormatButton,
};

registerFormatType( MEDIA_LINK_FORMAT_TYPE, mediaLinkFormatButtonSettings );
