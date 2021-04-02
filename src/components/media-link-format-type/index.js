/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { MediaLinkIcon } from '../../icons';
import { shouldExtendBlockWithMedia } from '../../extending/utils';
 
function MediaLinkFormatType() {
	if ( ! shouldExtendBlockWithMedia() ) {
		return null;
	}

	return (
		<RichTextToolbarButton
			shortcutType="primary"
			icon= { <MediaLinkIcon /> }
			title= { __( 'Link to media', 'media-center' ) }
			onClick= { console.log }
		/>
	);
}

registerFormatType(
	'media-center/media-link-format-type', {
		title: 'Media link',
		tagName: 'a',
		className: 'media-link-format-type',
		attributes: {
			url: 'href',
			type: 'data-type',
			id: 'data-id',
			target: 'target',
		},
		edit: MediaLinkFormatType,
	}
);