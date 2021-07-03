/**
 * External dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useCallback } from '@wordpress/element';

import {
	store as mediaManagerStore,
	STATE_PAUSED,
} from '@media-manager/media-connect';

/**
 * Internal dependencies
 */

export default function useMediaStore( id ) {
	const { isPaused, playingState } = useSelect(
		function ( select ) {
			const playingState = select(
				mediaManagerStore
			).getMediaPlayerState( id );
			return {
				playingState,
				isPaused:
					typeof playingState === 'undefined' ||
					playingState === STATE_PAUSED,
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
		register: useCallback(
			( id, data ) => registerMediaSource( id, data ),
			[ id ]
		),
		unregister: useCallback(
			( mediaSourceId ) => unregisterMediaSource( mediaSourceId ),
			[]
		),
		updateData: useCallback(
			( mediaSourceI, data ) =>
				updateMediaSourceData( mediaSourceI, data ),
			[]
		),
		setCurrentTime: useCallback(
			( timestamp ) => setMediaSourceCurrentTime( id, timestamp ),
			[ id ]
		),
	};
}
