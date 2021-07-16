/**
 * External dependencies
 */
const shell = require( 'shelljs' );

/**
 * Internal dependencies
 */
const { version } = require( '../../package.json' );

// if ( ! shell.which( 'git' ) ) {
// 	shell.echo( 'Sorry, this script requires git' );
// 	shell.exit( 1 );
// }

// if ( shell.exec( `git checkout -b v${ version } ` ).code !== 0 ) {
// 	shell.echo( 'Error: Git commit failed' );
// 	shell.exit( 1 );
// }

// if ( shell.exec( `mkdir -p release-${ version }` ).code !== 0 ) {
// 	shell.echo( 'Error: Git commit failed' );
// 	shell.exit( 1 );
// }

if ( shell.exec( `cp -rf build/ release-${ version }/build` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

if ( shell.exec( `cp media-manager.php readme.txt license.txt release-${ version }/` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

if ( shell.exec( `zip -r release-${ version }/media-manager.zip release-${ version }` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

if ( shell.exec( `git add release-${ version }/ -v` ).code !== 0 ) {
	shell.echo( 'Error git adding files' );
	shell.exit( 1 );
}

if ( shell.exec( `git commit -m "media-manager: release-${ version }"` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

// console.log( 'version: ', version );