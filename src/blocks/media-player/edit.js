
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
import './style.scss';

export const PLAYER_BLOCKS = [
	playButtonBlockName,
	pauseButtonBlockName,
	playPauseButtonBlockName,
	TimePositionBlockName,
];

export default function MediaPlayerEditBlock() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: PLAYER_BLOCKS,
		orientation: 'horizontal',
		templateLock: false,
	} );

	return <div { ...innerBlocksProps } />;
}
