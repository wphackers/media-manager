/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { PlayPauseButton as Button } from '../../components/media-player';
import './editor.scss';

export default function PlayPauseEditBlock( { mediaSource, scale, className } ) {
	return (
		<div { ...useBlockProps( { className } ) }>
			<Button
				isPaused= { mediaSource.isPaused }
				scale={ scale }
				onClick={ mediaSource.toggle }
			/>
		</div>
	);
}
