const timecodeRegExp = new RegExp( /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/ );

export function convertSecondsToTimeCode( seconds ) {
	if ( ! seconds ) {
		return '00:00:00';
	}
	return new Date( seconds * 1000 ).toISOString().substr( 11, 8 );
}

export const convertTimeCodeToSeconds = ( string ) => {
	if ( ! isTimeformat( string ) ) {
		return;
	}
	let parts = string.match( timecodeRegExp );
	if ( ! parts ) {
		return;
	}

	// seconds.
	let time = Number( parts[ 3 ] );

	// minutes.
	if ( parts[ 2 ] ) {
		time += Number( parts[ 2 ] ) * 60;
	}

	// hours.
	if ( parts[ 1 ] ) {
		time += Number( parts[ 1 ] ) * 60 * 60;
	}

	return time;
}

export const isTimeformat = ( value ) => timecodeRegExp.test( value );
