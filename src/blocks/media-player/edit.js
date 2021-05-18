/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	withColors,
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

const ALLOWED_BLOCKS = [
	playButtonBlockName,
	pauseButtonBlockName,
	playPauseButtonBlockName,
	TimePositionBlockName,
];

export function MediaPlayerEditBlock( { backgroundColor } ) {
	const className = classnames( {
		[ backgroundColor.class ]: backgroundColor.class,
		'has-background': !! backgroundColor.color,
	} );

	const style = {
		backgroundColor: backgroundColor.color,
	};

	const blockProps = useBlockProps( { style, className } );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: ALLOWED_BLOCKS,
		orientation: 'horizontal',
		templateLock: false,
	} );

	return <div { ...innerBlocksProps } />;
}

export default withColors( { backgroundColor: 'background-color' } )( MediaPlayerEditBlock );
