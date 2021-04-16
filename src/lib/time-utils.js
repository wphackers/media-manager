/* global mejs */

export function convertSecondsToTimeCode( seconds ) {
	if ( ! seconds ) {
		return '00:00:00';
	}
	return new Date( seconds * 1000 ).toISOString().substr( 11, 8 );
}

export const convertTimeCodeToSeconds = typeof mejs !== 'undefined'
	? mejs.Utils.timeCodeToSeconds
	: () => {};