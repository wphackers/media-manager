/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { PlayerPauseIcon } from '../../components/icons';
import useMediaStore from '../../components/hooks/use-media-store';

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
