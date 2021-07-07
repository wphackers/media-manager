/**
 * External dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { store as mediaManagerStore, STATE_PAUSED } from '../../';

/**
 * Media Store hook that provides properties and helper functions
 * to get useful data as well as be able to control the media.
 *
 * @param {string} id Media store ID.
 * @return {Object} Media store object, with properties and helpers.
 */
export default function useMediaStore( id ) {
	const { isPaused, playingState } = useSelect(
		function( select ) {
			const playState = select( mediaManagerStore ).getMediaPlayerState(
				id
			);
			return {
				playingState: playState,
				isPaused:
					typeof playState === 'undefined' ||
					playState === STATE_PAUSED,
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
			( storeId, data ) => registerMediaSource( storeId, data ),
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
