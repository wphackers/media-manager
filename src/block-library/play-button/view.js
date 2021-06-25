/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { PlayerPlayIcon } from '../../components/icons';
import useMediaStore from '../../components/hooks/use-media-store';

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
