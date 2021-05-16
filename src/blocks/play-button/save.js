/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { PlayerPlayIcon } from '../../icons';


export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<button>
				<PlayerPlayIcon scale={ 1.5 } />
			</button>
		</div>
	);
}
