
/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { blockName as playPauseButtonBlockName } from '../play-pause-button';
import { blockName as playButtonBlockName } from '../play-button';
import './editor.scss';

const ALLOWED_BLOCKS = [
	playButtonBlockName,
	playPauseButtonBlockName,
];

export default function PlayerEditBlock() {
	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: 'horizontal',
		templateLock: false,
	} );

	return <div { ...innerBlocksProps } />;
}
