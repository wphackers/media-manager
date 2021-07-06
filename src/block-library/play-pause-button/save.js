/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { getButtonSizeBySlug } from '@media-manager/block-editor-complements';
import { PlayerPauseIcon, PlayerPlayPauseIcon } from '@media-manager/components';

export default function save( { attributes } ) {
	const scale = getButtonSizeBySlug( attributes?.size );
	return (
		<div { ...useBlockProps.save() }>
			<button className="wp-media-manager-player-button__button is-media-paused">
				<PlayerPlayPauseIcon scale={ scale } />
				<PlayerPauseIcon scale={ scale } />
			</button>
		</div>
	);
}
