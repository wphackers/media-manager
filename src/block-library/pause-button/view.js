/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { useMediaStore } from '@media-manager/media-connect';

/**
 * Internal dependencies
 */
import { PlayerPauseIcon } from '../../components/icons';

export default function PauseBlock( { mediaSourceId } ) {
	const { pause, className } = useMediaStore( mediaSourceId );

	return (
		<Button
			className={ `wp-media-manager-player-button__button ${ className }` }
			icon={ <PlayerPauseIcon /> }
			onClick={ pause }
		/>
	);
}
