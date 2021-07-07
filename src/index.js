/**
 * WordPress dependencies
 */
import { registerFormatType } from '@wordpress/rich-text';
import { mediaLink } from '@media-manager/format-library';

/**
 * Internal dependencies
 */
import './extending';
import './block-library';

registerFormatType( mediaLink.name, mediaLink.settings );
