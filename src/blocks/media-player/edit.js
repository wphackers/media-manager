
/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	__experimentalUseColorProps as useColorProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	withColors,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

/**
 * External dependencies
 */
import classnames from 'classnames';
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

export function MediaPlayerEditBlock( {
	attributes,
	backgroundColor,
	setBetbackgroundColor,
} ) {
	const hasBackground = !! backgroundColor.color;
	const className = classnames( {
		[ backgroundColor.class ]: backgroundColor.class,
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
