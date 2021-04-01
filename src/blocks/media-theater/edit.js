/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function MediaTheaterEdit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Media Center – hello from the editor!', 'media-center' ) }
		</p>
	);
}
