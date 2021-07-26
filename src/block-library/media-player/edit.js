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
import { blockName as playButtonBlockName } from '../play-button';
import { blockName as pauseButtonBlockName } from '../pause-button';
import { blockName as playPauseButtonBlockName } from '../play-pause-button';
import { blockName as TimePositionBlockName } from '../time-position';
import './editor.scss';

export const PLAYER_BLOCKS = [
	playButtonBlockName,
	pauseButtonBlockName,
	playPauseButtonBlockName,
	TimePositionBlockName,
];

const INNER_BLOCKS_TEMPLATE = [
	[
		playPauseButtonBlockName,
		{
			size: 2,
		},
	],

	[
		pauseButtonBlockName,
		{
			size: 2,
		},
	],

	[
		TimePositionBlockName,
	],
];

export default function MediaPlayerEditBlock() {
	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: PLAYER_BLOCKS,
		orientation: 'horizontal',
		templateLock: false,
		template: INNER_BLOCKS_TEMPLATE,
	} );

	return <div { ...innerBlocksProps } />;
}
