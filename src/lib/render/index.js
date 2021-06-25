/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';

export default function renderReplace( Component, reference, replace = false ) {
	if ( ! replace ) {
		render( Component, reference );
	}

	const tempReference = document.createElement( 'div' );
	render( Component, tempReference, () => {
		reference.replaceWith( ...Array.from( tempReference.childNodes ) );
	} );
}
