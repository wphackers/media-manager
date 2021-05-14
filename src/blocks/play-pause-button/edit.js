
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

export default function PlayPauseEditBlock() {
	return (
		<li { ...useBlockProps() }>
			<Button
				icon={ <PlayerPlayIcon scale={ 1.5 } /> }
				onClick={ console.log }
			/>
		</li>
	);
}
