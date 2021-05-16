
/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	__experimentalUseColorProps as useColorProps,
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

const ALLOWED_BLOCKS = [
	playButtonBlockName,
	pauseButtonBlockName,
	playPauseButtonBlockName,
	TimePositionBlockName,
];

export default function MediaPlayerEditBlock( { attributes } ) {
	const colorProps = useColorProps( attributes );
	const blockProps = useBlockProps( colorProps );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: 'horizontal',
		templateLock: false,
	} );

	return <div { ...innerBlocksProps } />;
}
