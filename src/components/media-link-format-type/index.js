/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { MediaLinkIcon } from '../../icons';
import { shouldExtendBlockWithMedia } from '../../extending/utils';

const MEDIA_LINK_FORMAT_TYPE = 'media-center/media-link-format-type';
 
function MediaLinkFormatButton( { value, onChange, isActive } ) {
	if ( ! shouldExtendBlockWithMedia() ) {
		return null;
	}

	return (
		<RichTextToolbarButton
			shortcutType="primary"
			icon= { <MediaLinkIcon /> }
			title= { __( 'Link to media', 'media-center' ) }
			onClick= { function() {
				onChange( toggleFormat( value, {
					type: MEDIA_LINK_FORMAT_TYPE,
					attributes: {
						url: '#123',
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