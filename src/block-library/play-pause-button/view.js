/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { useMediaStore } from '@media-manager/media-connect';
import { PlayerPauseIcon, PlayerPlayPauseIcon } from '@media-manager/components';

export default function PlayPauseBlock( { mediaSourceId } ) {
	const { isPaused, toggle, className } = useMediaStore( mediaSourceId );

	return (
		<Button
			className={ `wp-media-manager-player-button__button ${ className }` }
			icon={ isPaused ? <PlayerPlayPauseIcon /> : <PlayerPauseIcon /> }
			onClick={ toggle }
		/>
	);
}
