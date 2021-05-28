
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_ID, STATE_PLAYING } from '../../store/constants';
import { PlayButton } from '../../components/media-player';

export default function PlayEditBlock( { context, scale } ) {
	const sourceId = context.mediaSourceId;

	const mediaPlayingState = useSelect(
		( select ) => ( select( STORE_ID ).getMediaPlayerState( sourceId ) ),
		[ sourceId ]
	);

	const { playMediaSource } = useDispatch( STORE_ID );

	return (
		<div { ...useBlockProps() }>
			<PlayButton
				disabled={ mediaPlayingState === STATE_PLAYING }
				scale={ scale }
				onClick={ () => playMediaSource( sourceId ) }
			/>
		</div>
	);
}
