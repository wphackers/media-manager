/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { PlayerPauseIcon } from '../../icons';
import { getButtonSizseBySlug } from '../../components/with-player-button-settings';

export default function save( { attributes } ) {
	return (
		<button { ...useBlockProps.save() }>
			<PlayerPauseIcon scale={ getButtonSizseBySlug( attributes?.size ) } />
		</button>
	);
}
