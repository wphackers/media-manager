/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { PlayButton as Button } from '@media-manager/components';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function PlayEditBlock( { mediaSource, scale, className } ) {
	return (
		<div { ...useBlockProps() }>
			<Button
				className={ className }
				isPaused={ mediaSource.isPaused }
				scale={ scale }
				onClick={ mediaSource.play }
			/>
		</div>
	);
}
