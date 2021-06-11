
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { PlayButton as Button } from '../../components/media-player';
import './editor.scss';

export default function PlayEditBlock( { mediaSource, scale, className } ) {
	return (
		<div { ...useBlockProps( { className } ) }>
			<Button
				isPaused= { mediaSource.isPaused }
				scale={ scale }
				onClick={ mediaSource.play }
			/>
		</div>
	);
}
