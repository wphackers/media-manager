/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { PlayerPauseIcon, PlayerPlayPauseIcon } from '../../components/icons';
import useMediaStore from '../../components/hooks/use-media-store';

export default function PlayPauseEditBlock( { mediaSourceId } ) {
	const { isPaused, toggle, className } = useMediaStore( mediaSourceId );

	return (
		<Button
			className={ `wp-media-manager-player-button__button ${ className }` }
			icon={ isPaused ? <PlayerPlayPauseIcon /> : <PlayerPauseIcon /> }
			onClick={ toggle }
		/>
	);
}
