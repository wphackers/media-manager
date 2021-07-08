/**
 * Internal dependencies
 */
import { MEDIA_NOT_DEFINED, STATE_NOT_READY } from './constants';

export function getMediaSources( state ) {
	return state.sources;
}

export function getMediaSourceById( state, id ) {
	if ( id === MEDIA_NOT_DEFINED ) {
		return;
	}
	return state.sources?.[ id ];
}

/**
 * Retunr the default media source.
 * - the default one in case it's defined.
 * - the first one in case there are sources defined
 * - null when no media sources :-o
 *
 * @param {Object} state
 * @return {string|null} default media source ID.
 */
export function getDefaultMediaSource( state ) {
	let playerId = null;
	const keys = Object.keys( state.sources );

	if ( state.default ) {
		playerId = state.default;
	} else if ( keys?.length ) {
		playerId = state.sources[ keys[ 0 ] ].id;
	}

	if ( ! playerId ) {
		return;
	}

	return state.sources[ playerId ];
}

export function getMediaPlayerState( state, id ) {
	const defaultMediaSource = id
		? state.sources?.[ id ]
		: getDefaultMediaSource( state );

	if ( ! defaultMediaSource?.state ) {
		return STATE_NOT_READY;
	}

	return defaultMediaSource.state;
}

export function getMediaSourceCurrentTime( state, id ) {
	const defaultMediaSource = id
		? state.sources?.[ id ]
		: getDefaultMediaSource( state );

	return defaultMediaSource?.currentTime;
}

export function getMediaSourceDuration( state, id ) {
	if ( ! id ) {
		const defaultMediaSource = getDefaultMediaSource( state );
		return defaultMediaSource?.duration;
	}

	return state.sources?.[ id ]?.duration;
}

export function getMediaSourceDomReference( state, id ) {
	const mediaSource = id
		? state.sources?.[ id ]
		: getDefaultMediaSource( state );

	if ( ! mediaSource ) {
		return;
	}

	if ( ! mediaSource?.querySelector ) {
		return;
	}

	return document.querySelector( mediaSource.querySelector );
}
