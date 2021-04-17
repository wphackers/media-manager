/**
 * External dependencies
 */
import domReady from '@wordpress/dom-ready';
import { select, dispatch } from '@wordpress/data';

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

	// Handle all media-link-format elements.
	const mediaLinkFormatElemens = document.querySelectorAll( 'a.media-link-format-type' );
	mediaLinkFormatElemens.forEach( function( anchor ) {
		anchor.addEventListener( 'click', function( event ) {
			event.stopPropagation();
			const { mediaSourceId } = event.target.dataset;
			const timestamp = event.target.getAttribute( 'href' ).replace( /#/, '' );

			dispatch( STORE_ID ).toggleMediaSource( mediaSourceId );
			dispatch( STORE_ID ).setMediaSourceCurrentTime( mediaSourceId, timestamp );

			const { state, querySelector } = select( STORE_ID ).getMediaSourceById( mediaSourceId );
			const mediaElement = document.querySelector( querySelector );

			// playback to the timestamp
			mediaElement.currentTime = timestamp;

			if ( STATE_PAUSED === state ) {
				mediaElement.pause();
			} else {
				mediaElement.play();
			}
		} );
	} );
} );
