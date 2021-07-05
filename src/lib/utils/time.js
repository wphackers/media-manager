const multiple = /(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)/;
const singleTimecodeRegExp = new RegExp( multiple, 'g' );
const multipleTimecodeRegExp = new RegExp( multiple, 'gm' );

const markdownTimeformat = /\[((?:(?:(?:[01]?\d|2[0-3]:):)?[0-5]?\d:)?[0-5]?\d)\](?:\(([^\(\)]+)\))?.$/;
const markdownTimeformatRegExp = new RegExp( markdownTimeformat );

export const getTimeformatMatch = ( value ) =>
	singleTimecodeRegExp.exec( value );
export const hasMultipleTimeformats = ( value ) =>
	value.match( multipleTimecodeRegExp );

export const isMarkdownTimeformat = ( value ) =>
	markdownTimeformatRegExp.exec( value );
