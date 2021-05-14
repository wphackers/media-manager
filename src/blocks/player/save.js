/**
 * WordPress dependencies
 */
 import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


 export default function save() {
	return (
		<ul { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</ul>
	);
 }
 