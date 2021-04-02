/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { MediaLinkIcon } from '../../icons';
import { shouldExtendBlockWithMedia } from '../../extending/utils';
import { STORE_ID } from '../../store/constants';

const MEDIA_LINK_FORMAT_TYPE = 'media-center/media-link-format-type';
 
function MediaLinkFormatButton( { value, onChange, isActive } ) {
	const mediatTheatherBlockClientId = shouldExtendBlockWithMedia();
	if ( ! mediatTheatherBlockClientId?.length ) {
		return null;
	}

	const mediaTheaterBlock = useSelect(
		select => select( blockEditorStore ).getBlock( mediatTheatherBlockClientId[ 0 ] ),
		[]
	);

	const { sourceId } = mediaTheaterBlock?.attributes || {};
	const { domRef } = useSelect(
		select => ( {
			domRef: select( STORE_ID ).getMediaSourceDomReference( sourceId ),
		} ),
		[]
	);

	return (
		<RichTextToolbarButton
			shortcutType="primary"
			icon= { <MediaLinkIcon /> }
			title= { __( 'Link to media', 'media-center' ) }
			onClick= { function() {
				onChange( toggleFormat( value, {
					type: MEDIA_LINK_FORMAT_TYPE,
					attributes: {
						url: `#${ domRef.currentTime }`,
					}
				} ) );
			} }
			isActive={ isActive }
		/>
	);
}

registerFormatType(
	MEDIA_LINK_FORMAT_TYPE, {
		title: 'Media link',
		tagName: 'a',
		className: 'media-link-format-type',
		attributes: {
			url: 'href',
		},
		edit: MediaLinkFormatButton,
	}
);