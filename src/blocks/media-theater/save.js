/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() } data-media-source-ref={ attributes?.sourceId }>
			<InnerBlocks.Content />
		</div>
	);
}
