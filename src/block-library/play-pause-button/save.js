/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { getButtonSizseBySlug } from '../../components/with-player-button-settings';
import { PlayerPauseIcon, PlayerPlayPauseIcon } from '../../components/icons';

export default function save( { attributes } ) {
	const scale = getButtonSizseBySlug( attributes?.size );
	return (
		<div { ...useBlockProps.save() }>
			<button className="wp-media-manager-player-button__button">
				<PlayerPlayPauseIcon scale={ scale } />
				<PlayerPauseIcon scale={ scale } />
			</button>
		</div>
	);
}
