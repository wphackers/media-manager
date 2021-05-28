/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { getButtonSizseBySlug } from '../../components/with-player-button-settings';
import { PlayerPauseIcon, PlayerPlayPauseIcon } from '../../icons';

export default function save( { attributes } ) {
	const scale = getButtonSizseBySlug( attributes?.size );
	return (
		<button { ...useBlockProps.save() }>
			<PlayerPlayPauseIcon scale={ scale } />
			<PlayerPauseIcon scale={ scale } />
		</button>
	);
}
