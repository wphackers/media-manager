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
	const mediaElements = document.querySelectorAll( '[data-media-source-id]' );
	if ( mediaElements.length ) {
		mediaElements.forEach( function( media ) {			
			const { mediaSourceId, mediaSourceType } = media.dataset;
			const { domTypeName } = getBlockSourceProps( mediaSourceType );
			const query = `[data-media-source-id="${ mediaSourceId }"] ${ domTypeName }`;

			dispatch( STORE_ID ).registerMediaSource( mediaSourceId, {
				// source: mediaSource,
				elementType: domTypeName,
				state: STATE_PAUSED,
				querySelector: query,
			} );
		} );
	}

	// All media-theater blocks.
	const mediaTheaterBlocks = document.querySelectorAll( '.wp-block-media-center-media-theater' );
	if ( ! mediaTheaterBlocks?.length ) {
		return;
	}

	mediaTheaterBlocks.forEach( function( theaterBlock ) {
		const mediaLinkFormatElements = theaterBlock.querySelectorAll( 'a.media-link-format-type' );
		if ( ! mediaLinkFormatElements?.length ) {
			return;
		}

		const { mediaSourceRef } = theaterBlock.dataset;
		mediaLinkFormatElements.forEach( function( anchor ) {
			anchor.addEventListener( 'click', function( event ) {
				event.stopPropagation();
				const timestamp = event.target.getAttribute( 'href' ).replace( /#/, '' );
				
				const { state, querySelector } = select( STORE_ID ).getMediaSourceById( mediaSourceRef );
				const mediaElement = document.querySelector( querySelector );
				
				// playback to the timestamp.
				dispatch( STORE_ID ).setMediaSourceCurrentTime( mediaSourceRef, timestamp );
				mediaElement.currentTime = timestamp;

				dispatch( STORE_ID ).toggleMediaSource( mediaSourceRef );
				if ( STATE_PAUSED === state ) {
					mediaElement.pause();
				} else {
					mediaElement.play();
				}
			} );
		} );
	} );
} );
