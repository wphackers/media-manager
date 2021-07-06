/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { PlayPauseButton as Button } from '@media-manager/components';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function PlayPauseEditBlock( {
	mediaSource,
	scale,
	className,
} ) {
	return (
		<div { ...useBlockProps() }>
			<Button
				className={ className }
				isPaused={ mediaSource.isPaused }
				scale={ scale }
				onClick={ mediaSource.toggle }
			/>
		</div>
	);
}
