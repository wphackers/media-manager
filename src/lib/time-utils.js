/* global mejs */

export function convertSecondsToTimeCode( seconds ) {
	return new Date( seconds * 1000 ).toISOString().substr( 11, 8 );
}

export const convertTimeCodeToSeconds = mejs.Utils.timeCodeToSeconds;