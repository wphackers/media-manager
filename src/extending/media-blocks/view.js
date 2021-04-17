/**
 * External dependencies
 */
import domReady from '@wordpress/dom-ready';
import { dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_ID, STATE_PAUSED } from '../../store/constants';
import { getBlockSourceProps } from '../utils';

domReady( function() {
	// Register media element in the store.

	const mediaElements = document.querySelectorAll( '.media-center-media-source' );
	if ( mediaElements.length ) {
		mediaElements.forEach( function( media ) {			
			const { mediaSourceId, blockName } = media.dataset;
			const { domTypeName } = getBlockSourceProps( blockName );
			const query = `.media-center-media-source[data-media-source-id="${ mediaSourceId }"] ${ domTypeName }`;

			dispatch( STORE_ID ).registerMediaSource( mediaSourceId, {
				// source: mediaSource,
				elementType: domTypeName,
				state: STATE_PAUSED,
				querySelector: query,
			} );
		} );
	}
} );
