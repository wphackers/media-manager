/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { PlayerPlayIcon } from '../../components/icons';
import { getButtonSizseBySlug } from '../../components/with-player-button-settings';

export default function save( { attributes } ) {
	return (
		<button { ...useBlockProps.save() }>
			<PlayerPlayIcon scale={ getButtonSizseBySlug( attributes?.size ) } />
		</button>
	);
}
