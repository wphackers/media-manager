/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div
			{ ...useBlockProps.save( { className: 'entry-content' } ) }
			data-media-source-ref={ attributes?.mediaSourceId }
		>
			<InnerBlocks.Content />
		</div>
	);
}
