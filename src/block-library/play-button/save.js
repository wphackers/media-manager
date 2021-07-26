/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { PlayerPlayIcon } from '@media-manager/components';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<button className="wp-media-manager-player-button__button">
				<PlayerPlayIcon />
			</button>
		</div>
	);
}
