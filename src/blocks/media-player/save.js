/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


 export default function save() {
	return (
		<div { ...useBlockProps.save( { className: 'is-paused' } ) }>
			<InnerBlocks.Content />
		</div>
	);
 }
 