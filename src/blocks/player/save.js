/**
 * WordPress dependencies
 */
 import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


 export default function save() {
	return (
		<div { ...useBlockProps }>
			{ __( 'Player', 'media-manager' ) }
		</div>
	);
 }
 