/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { getButtonSizeBySlug } from '@media-manager/block-editor-complements';
import { PlayerPauseIcon } from '@media-manager/components';

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
