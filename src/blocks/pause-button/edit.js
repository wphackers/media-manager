
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_ID, STATE_PAUSED } from '../../store/constants';
import { PauseButton } from '../../components/media-player';

export default function PauseEditBlock( { context, scale } ) {
	const sourceId = context.mediaSourceId;

	const mediaPlayingState = useSelect(
		( select ) => ( select( STORE_ID ).getMediaPlayerState( sourceId ) ),
		[ sourceId ]
	);

	const { pauseMediaSource } = useDispatch( STORE_ID );

	return (
		<div { ...useBlockProps() }>
			<PauseButton
				disabled={ mediaPlayingState === STATE_PAUSED }
				scale={ scale }
				onClick={ () => pauseMediaSource( sourceId ) }
			/>
		</div>
	);
}
