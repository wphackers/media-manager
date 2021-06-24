
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { PauseButton as Button } from '../../components/media-player';
import './editor.scss';

export default function PlayEditBlock( { mediaSource, scale, className } ) {
	return (
		<div { ...useBlockProps() }>
			<Button
				className={ className }
				isPaused= { mediaSource.isPaused }
				scale={ scale }
				onClick={ mediaSource.pause }
			/>
		</div>
	);
}
