/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { useMediaStore } from '@media-manager/media-connect';
import { PlayerPauseIcon } from '@media-manager/components';

export default function PauseBlock( { mediaSourceId } ) {
	const { pause, className, isNotRegistered } = useMediaStore( mediaSourceId );

	return (
		<Button
			className={ `wp-media-manager-player-button__button ${ className }` }
			icon={ <PlayerPauseIcon /> }
			onClick={ pause }
			disabled={ isNotRegistered }

		/>
	);
}
