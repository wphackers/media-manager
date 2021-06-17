/**
 * External dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * External dependencies
 */
import { store as mediaManagerStore } from '../../../store';
import { STATE_PAUSED } from '../../../store/constants';

export default function useMediaStore( id ) {
	const {
		playMediaSource,
		pauseMediaSource,
		toggleMediaSource,
	} = useDispatch( mediaManagerStore );

	return {
		...useSelect(
			( select ) => ( {
				isPaused: select( mediaManagerStore ).getMediaPlayerState( id ) === STATE_PAUSED,
				currentTime: select( mediaManagerStore ).getMediaSourceCurrentTime( id ),
			} ),
			[ id ]
		),
		play: () => playMediaSource( id ),
		pause: () => pauseMediaSource( id ),
		toggle: () => toggleMediaSource( id ),
	};
}
