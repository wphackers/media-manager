/**
 * Internal dependencies
 */
import { STATE_PLAYING, STATE_PAUSED, STATE_ERROR } from './constants';

export function registerMediaSource( id, mediaSourceState ) {
	return {
		type: 'REGISTER_MEDIA_SOURCE',
		id,
		mediaSourceState,
	};
}

export function updateMediaSourceData( id, data ) {
	return {
		type: 'UPDATE_MEDIA_SOURCE_DATA',
		id,
		data,
	};
}

export function unregisterMediaSource( id ) {
	return {
		type: 'UNREGISTER_MEDIA_SOURCE',
		id,
	};
}

export function setDefaultMediaSource( id ) {
	return {
		type: 'SET_DEFAULT_MEDIA_SOURCE',
		id,
	};
}

export function playMediaSource( id ) {
	return {
		type: 'SET_MEDIA_PLAYER_STATE',
		id,
		state: STATE_PLAYING,
	};
}

export function toggleMediaSource( id ) {
	return {
		type: 'TOGGLE_MEDIA_PLAYER_STATE',
		id,
	};
}

export function pauseMediaSource( id ) {
	return {
		type: 'SET_MEDIA_PLAYER_STATE',
		id,
		state: STATE_PAUSED,
	};
}

export function errorMediaSource( id ) {
	return {
		type: 'SET_MEDIA_PLAYER_STATE',
		id,
		state: STATE_ERROR,
	};
}

export function setMediaSourceCurrentTime( id, currentTime ) {
	return {
		type: 'SET_MEDIA_PLAYER_CURRENT_TIME',
		id,
		currentTime,
	};
}
