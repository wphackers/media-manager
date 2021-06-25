/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { getButtonSizeBySlug } from '../../components/with-sizes';
import { PlayerPauseIcon, PlayerPlayPauseIcon } from '../../components/icons';

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
