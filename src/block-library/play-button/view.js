/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { useMediaStore } from '@media-manager/media-connect';

/**
 * Internal dependencies
 */
import { PlayerPlayIcon } from '../../components/icons';

export default function PlayBlock( { mediaSourceId } ) {
	const { play, className } = useMediaStore( mediaSourceId );

	return (
		<Button
			className={ `wp-media-manager-player-button__button ${ className }` }
			icon={ <PlayerPlayIcon /> }
			onClick={ play }
		/>
	);
}
