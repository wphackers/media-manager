/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PlayerPauseIcon, PlayerPlayIcon } from '../../icons';


export default function save() {
	return (
		<div { ...useBlockProps.save( { className: 'wp-block-media-manager__item' } ) }>
			<button>
				<PlayerPlayIcon scale={ 1.5 } />
			</button>
		</div>
	);
}
