/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';
import { useMediaStore } from '@media-manager/media-connect';

export default function MediaLinkViewFormatType( { mediaSourceId, timestamp, children, elementRef } ) {
	const { play } = useMediaStore( mediaSourceId );

	function onLinkClick() {
		play( timestamp );
	}

	useEffect( () => {
		if ( ! elementRef ) {
			return;
		}

		elementRef.addEventListener( 'click', onLinkClick );

		return function() {
			elementRef.removeEventListener( 'click', onLinkClick );
		};
	}, [ elementRef ] );

	return children;
}
