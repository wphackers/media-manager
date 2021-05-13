const timecodeRegExp = new RegExp( /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/ );

const multiple = /(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)/;
const singleTimecodeRegExp = new RegExp( multiple, 'g' );
const multipleTimecodeRegExp = new RegExp( multiple, 'gm' );

const markdownTimeformat = /\[((?:(?:(?:[01]?\d|2[0-3]:):)?[0-5]?\d:)?[0-5]?\d)\](?:\(([^\(\)]+)\))?.$/;
const markdownTimeformatRegExp = new RegExp( markdownTimeformat );

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
export const getTimeformatMatch = ( value ) => singleTimecodeRegExp.exec( value );
export const hasMultipleTimeformats = ( value ) => value.match( multipleTimecodeRegExp );

export const isMarkfownTimeformat = ( value ) => markdownTimeformatRegExp.exec( value );
