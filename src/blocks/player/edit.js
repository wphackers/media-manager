
/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { blockName as playPauseButtonBlockName } from '../play-pause-button';
import './editor.scss';

const ALLOWED_BLOCKS = [
	playPauseButtonBlockName,
	'core/cover',
];

export default function PlayerEditBlock() {
	const blockProps = useBlockProps();
	console.log( 'blockProps: ', blockProps );

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: 'horizontal',
		templateLock: false,
		__experimentalAppenderTagName: 'li',
	} );

	return (
		<Fragment>
			<ul { ...innerBlocksProps }>
			</ul>
		</Fragment>
	);
}
