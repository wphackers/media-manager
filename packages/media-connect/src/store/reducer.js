/**
 * Internal dependencies
 */
import {
	DEFAULT_STATE,
	MEDIA_NOT_DEFINED,
	STATE_PLAYING,
	STATE_PAUSED,
} from './constants';

function reducer( state = DEFAULT_STATE, action ) {
	// Some actions doesn't have defined the source ID
	// On this case, we try to get safe getting the default ID.
	// Othewise, it will try to pick the first fro the souces list.
	const actionId =
		action.id || state.default || Object.keys( state.sources )?.[ 0 ];

	// Do not register when it sets explicitely as not defined.
	if ( actionId === MEDIA_NOT_DEFINED ) {
		return state;
	}

	switch ( action.type ) {
		case 'REGISTER_MEDIA_SOURCE': {
			return {
				...state,
				sources: {
					...state.sources,
					[ action.id ]: {
						id: action.id,
						...action.mediaSourceState,
					},
				},
			};
		}

		case 'UPDATE_MEDIA_SOURCE_DATA': {
			return {
				...state,
				sources: {
					...state.sources,
					[ action.id ]: {
						...state.sources[ action.id ],
						...action.data,
					},
				},
			};
		}

		case 'UNREGISTER_MEDIA_SOURCE': {
			const currentState = Object.assign( {}, state );
			if ( currentState.sources[ action.id ] ) {
				delete currentState.sources[ action.id ];
			}

			// Set the first source as default
			// if it's removing it.
			if ( action.id === state.default ) {
				currentState.default = Object.keys( state.sources )?.[ 0 ];
			}

			return currentState;
		}

		case 'SET_DEFAULT_MEDIA_SOURCE': {
			return {
				...state,
				default: action.id,
			};
		}

		case 'SET_MEDIA_PLAYER_STATE': {
			return {
				...state,
				sources: {
					...state.sources,
					[ actionId ]: {
						...state.sources[ actionId ],
						state: action.state,
					},
				},
			};
		}

		case 'TOGGLE_MEDIA_PLAYER_STATE': {
			return {
				...state,
				sources: {
					...state.sources,
					[ actionId ]: {
						...state.sources[ actionId ],
						state:
							state.sources[ actionId ].state === STATE_PLAYING
								? STATE_PAUSED
								: STATE_PLAYING,
					},
				},
			};
		}

		case 'SET_MEDIA_PLAYER_CURRENT_TIME': {
			return {
				...state,
				sources: {
					...state.sources,
					[ actionId ]: {
						...state.sources[ actionId ],
						currentTime: action.currentTime,
					},
				},
			};
		}
	}

	return state;
}

export default reducer;
