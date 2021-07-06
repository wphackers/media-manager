/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { PlayerPlayIcon } from '@media-manager/components';
import { getButtonSizeBySlug } from '@media-manager/block-editor-complements';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<button className="wp-media-manager-player-button__button">
				<PlayerPlayIcon
					scale={ getButtonSizeBySlug( attributes?.size ) }
				/>
			</button>
		</div>
	);
}
