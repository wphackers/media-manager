/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { useMediaStore } from '@media-manager/media-connect';
import { PlayerPlayIcon } from '@media-manager/components';

export default function PlayBlock( { mediaSourceId } ) {
	const { play, className, isNotRegistered } = useMediaStore( mediaSourceId );

	return (
		<Button
			className={ `wp-media-manager-player-button__button ${ className }` }
			icon={ <PlayerPlayIcon /> }
			onClick={ play }
			disabled={ isNotRegistered }
		/>
	);
}
