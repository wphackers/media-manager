/**
 * External dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { store as mediaManagerStore } from '../../';
import { STATE_NOT_READY, STATE_PAUSED } from '../../store/constants';

/**
 * Media Store hook that provides properties and helper functions
 * to get useful data as well as be able to control the media.
 *
 * @param {string} id Media store ID.
 * @return {Object} Media store object, with properties and helpers.
 */
export default function useMediaStore( id ) {
	const { isPaused, isReady, playingState, duration } = useSelect(
		function( select ) {
			const state = select( mediaManagerStore ).getMediaPlayerState( id );
			return {
				playingState: state,
				isReady: typeof state !== STATE_NOT_READY,
				isPaused:
					typeof state === 'undefined' ||
					state === STATE_PAUSED,
				duration: select( mediaManagerStore ).getMediaSourceDuration( id ),
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
		className: isPaused ? 'is-media-paused' : '', // @Todo: Considering remove this className prp.
		playingState,
		isPaused,
		isReady,
		duration,
		play: useCallback( ( timestamp ) => {
			if ( timestamp && typeof timestamp === 'number' ) {
				setMediaSourceCurrentTime( id, timestamp );
			}
			playMediaSource( id );
		}, [ id ] ),
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
			( mediaSourceId, data ) =>
				updateMediaSourceData( mediaSourceId, data ),
			[]
		),
		setCurrentTime: useCallback(
			( timestamp ) => setMediaSourceCurrentTime( id, timestamp ),
			[ id ]
		),
	};
}
