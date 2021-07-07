/**
 * External dependencies
 */
import { debounce, throttle } from 'lodash';

/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import {
	store as mediaManagerStore,
	STATE_PAUSED,
	useMediaStore,
} from '@media-manager/media-connect';

const MEDIA_CURRENT_TIME_THRESHOLD = 1000;
const MEDIA_CURRENT_STATE_THRESHOLD = 1000;

export default function MediaSourceProviderWrapper( {
	mediaElement,
	mediaSourceId,
	elementType,
	querySelector,
} ) {
	const {
		isPaused,
		setCurrentTime,
		play: playMedia,
		pause: pauseMedia,
		register,
		unregister,
		updateData,
	} = useMediaStore( mediaSourceId );

	const currentTime = useSelect(
		( select ) =>
			select( mediaManagerStore ).getMediaSourceCurrentTime(
				mediaSourceId
			),
		[ mediaSourceId ]
	);

	function play() {
		mediaElement.play().catch( () => {} );
	}

	function pause() {
		mediaElement.pause();
	}

	function onMetadataReady( event ) {
		updateData( mediaSourceId, {
			duration: event?.srcElement?.duration,
		} );
	}

	/*
	 * Pre load mediaElement metadata.
	 * It allows preloading useful metadata
	 * of the media source, for instance,
	 * the media duration.
	 */
	mediaElement.preload = 'metadata';
	mediaElement.autoplay = false;

	/*
	 * - Register Media into the store.
	 * - Get the metadata from the client.
	 * - Listen Play and Pause events.
	 */
	useEffect( () => {
		register( mediaSourceId, {
			// source: mediaSource,
			elementType,
			state: STATE_PAUSED,
			querySelector,
		} );

		// Subscribe to media events.
		mediaElement.addEventListener( 'loadedmetadata', onMetadataReady );
		mediaElement.addEventListener( 'play', playMedia );
		mediaElement.addEventListener( 'pause', pauseMedia );

		// Clean.
		return function() {
			// Remove listeners.
			mediaElement.removeEventListener(
				'loadedmetadata',
				onMetadataReady
			);
			mediaElement.removeEventListener( 'play', playMedia );
			mediaElement.removeEventListener( 'pause', pauseMedia );

			// Unregister media from store.
			unregister( mediaSourceId );
		};
	}, [] );

	// Play/Pause media depending on isPaused status (via store).
	useEffect( () => {
		const action = mediaElement.paused ? play : pause;
		const debouncedAction = debounce( action, 100 );

		if ( isPaused !== mediaElement.paused ) {
			debouncedAction();
		}

		return () => {
			debouncedAction.cancel();
		};
	}, [ isPaused, mediaElement ] );

	/*
	 * Handling current time state,
	 * updating its status in the store,
	 * listening the `timeupdate` element event.
	 */

	useEffect( () => {
		const throttledTimeChange = throttle(
			( time ) => setCurrentTime( time ),
			MEDIA_CURRENT_TIME_THRESHOLD,
			{
				leading: true,
				trailing: false,
			}
		);

		const onTimeUpdate = ( e ) =>
			throttledTimeChange( e.target.currentTime );
		mediaElement.addEventListener( 'timeupdate', onTimeUpdate );

		return () => {
			throttledTimeChange.cancel();
			mediaElement.removeEventListener( 'timeupdate', onTimeUpdate );
		};
	}, [ mediaElement, setCurrentTime ] );

	/*
	 * Change the playing state of the media,
	 * depending on the current time
	 * defined in the store.
	 */
	useEffect( () => {
		if ( typeof currentTime !== 'number' || ! mediaElement ) {
			return;
		}

		/*
		 * Update the current time when difference between
		 * the media element and the state is bigger than
		 * the threshold  MEDIA_CURRENT_TIME_THRESHOLD.
		 */
		if (
			Math.abs(
				Math.floor( currentTime - mediaElement.currentTime ) * 1000
			) > MEDIA_CURRENT_STATE_THRESHOLD
		) {
			mediaElement.currentTime = currentTime;
		}
	}, [ mediaElement, currentTime ] );

	return null;
}
