/**
 * External dependencies
 */
const shell = require( 'shelljs' );

/**
 * Internal dependencies
 */
const { version } = require( '../../package.json' );

if ( ! shell.which( 'git' ) ) {
	shell.echo( 'Sorry, this script requires git' );
	shell.exit( 1 );
}

if ( shell.exec( 'npm run clean' ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
} else if ( shell.exec( 'npm run build' ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
} else if ( shell.exec( `git checkout -b v${ version }` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

if ( shell.exec( `zip -r media-manager-${ version }.zip build/ src/ media-manager.php readme.txt license.txt` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

if ( shell.exec( `git add media-manager-${ version }.zip -v` ).code !== 0 ) {
	shell.echo( 'Error git adding files' );
	shell.exit( 1 );
}

if ( shell.exec( `git commit -m "media-manager: release-${ version }"` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

if ( shell.exec( `git tag v${ version }` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

if ( shell.exec( `git push origin tags/v${ version }` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

if ( shell.exec( `git checkout -` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}

if ( shell.exec( `git checkout -- build/` ).code !== 0 ) {
	shell.echo( 'Error' );
	shell.exit( 1 );
}
