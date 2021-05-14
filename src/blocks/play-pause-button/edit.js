
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { PlayerPlayIcon } from '../../icons';
import './editor.scss';

export default function PlayPauseEditBlock() {
	return (
		<div { ...useBlockProps( { className: 'wp-media-manager-player-block' } ) }>
			<Button
				icon={ <PlayerPlayIcon scale={ 1.5 } /> }
				onClick={ console.log }
			/>
		</div>
	);
}
