/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';

const MEDIA_CENTER_TEMPLATE = [
	[
		'core/paragraph',
		{
			placeholder: __(
				'Type / to choose a block, from your couch!',
				'media-manager'
			),
		},
	],
];

/**
 * Internal dependencies
 */
import './editor.scss';

export default function MediaCenterEdit() {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks template={ MEDIA_CENTER_TEMPLATE } />
		</div>
	);
}
