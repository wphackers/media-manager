/**
 * External dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { store as mediaManagerStore } from '../../../store';
import { STATE_PAUSED } from '../../../store/constants';

export default function useMediaStore( id ) {
	const { isPaused, playingState } = useSelect(
		function( select ) {
			const playingState = select( mediaManagerStore ).getMediaPlayerState( id );
			return {
				playingState,
				isPaused: typeof playingState === 'undefined' || playingState === STATE_PAUSED,
			};
		},
		[ id ]
	);

	const {
		playMediaSource,
		pauseMediaSource,
		toggleMediaSource,
		setMediaSourceCurrentTime,
		registerMediaSource,
		unregisterMediaSource,
		updateMediaSourceData,
	} = useDispatch( mediaManagerStore );

	return {
		className: isPaused ? 'is-media-paused' : '',
		playingState,
		isPaused,
		play: useCallback( () => playMediaSource( id ), [ id ] ),
		pause: useCallback( () => pauseMediaSource( id ), [ id ] ),
		toggle: useCallback( () => toggleMediaSource( id ), [ id ] ),
		register: useCallback( ( id, data ) => registerMediaSource( id, data ), [ id ] ),
		unregister: useCallback( ( id ) => unregisterMediaSource( id ), [ id ] ),
		updateData: useCallback( ( id, data ) => updateMediaSourceData( id, data ), [ id ] ),
		setCurrentTime: useCallback( ( timestamp ) => setMediaSourceCurrentTime( id, timestamp ), [ id ] ),
	};
}
