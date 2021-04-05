/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
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

const MEDIA_LINK_FORMAT_TYPE = 'media-center/media-link-format-type';

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

	const currentTime = domRef?.currentTime || 0;

	return (
		<>
			<RichTextToolbarButton
				shortcutType="primary"
				icon={ <MediaLinkIcon /> }
				title={ __( 'Link to media', 'media-center' ) }
				onClick={ function () {
					onChange(
						toggleFormat( value, {
							type: MEDIA_LINK_FORMAT_TYPE,
							attributes: {
								url: `#${ currentTime }`,
							},
						} )
					);
				} }
				isActive={ isActive }
			/>

			<MediaLinkPopover
				value={ value }
				contentRef={ contentRef }
				currentTime={ currentTime }
				isActive={ isActive }
				sourceId={ sourceId }
			/>
		</>
	);
}

export const mediaLinkFormatButtonSettings = {
	title: 'Media link',
	tagName: 'a',
	className: 'media-link-format-type',
	attributes: {
		url: 'href',
	},
	edit: MediaLinkFormatButton,
};

registerFormatType( MEDIA_LINK_FORMAT_TYPE, mediaLinkFormatButtonSettings );
