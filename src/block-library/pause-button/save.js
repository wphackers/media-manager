/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { PlayerPauseIcon } from '../../components/icons';
import { getButtonSizeBySlug } from '../../components/with-sizes';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<button className="wp-media-manager-player-button__button">
				<PlayerPauseIcon
					scale={ getButtonSizeBySlug( attributes?.size ) }
				/>
			</button>
		</div>
	);
}
