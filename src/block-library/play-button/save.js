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
		<div { ...useBlockProps.save() }>
			<button className="wp-media-manager-player-button__button">
				<PlayerPlayIcon scale={ getButtonSizseBySlug( attributes?.size ) } />
			</button>
		</div>
	);
}
