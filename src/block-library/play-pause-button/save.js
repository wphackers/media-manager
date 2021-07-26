/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { PlayerPauseIcon, PlayerPlayPauseIcon } from '@media-manager/components';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<button className="wp-media-manager-player-button__button is-media-paused">
				<PlayerPlayPauseIcon />
				<PlayerPauseIcon />
			</button>
		</div>
	);
}
