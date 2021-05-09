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

	// All media-center blocks.
	const mediaCenterBlocks = document.querySelectorAll( '.wp-block-media-manager-media-center' );
	if ( ! mediaCenterBlocks?.length ) {
		return;
	}

	mediaCenterBlocks.forEach( function( mediaCenterBlock ) {
		const mediaLinkFormatElements = mediaCenterBlock.querySelectorAll( 'a.media-link-format-type' );
		if ( ! mediaLinkFormatElements?.length ) {
			return;
		}

		const { mediaSourceRef } = mediaCenterBlock.dataset;
		mediaLinkFormatElements.forEach( function( anchor ) {
			anchor.addEventListener( 'click', function( event ) {
				event.stopPropagation();
				const timestamp = event.target.getAttribute( 'href' ).replace( /#/, '' );
				
				const { state, querySelector } = select( STORE_ID ).getMediaSourceById( mediaSourceRef );
				const mediaElement = document.querySelector( querySelector );

				const rePlay = 
					Math.abs( Math.floor( timestamp - mediaElement.currentTime ) * 1000 ) >
					2000;
					
				// Playback to the timestamp.
				dispatch( STORE_ID ).setMediaSourceCurrentTime( mediaSourceRef, timestamp );
				mediaElement.currentTime = timestamp;

				if ( rePlay ) {
					mediaElement.play();
					dispatch( STORE_ID ).playMediaSource( mediaSourceRef );
				} else {
					if ( STATE_PAUSED === state ) {
						dispatch( STORE_ID ).playMediaSource( mediaSourceRef );
						mediaElement.pause();
					} else {
						mediaElement.play();
						dispatch( STORE_ID ).pauseMediaSource( mediaSourceRef );
					}
				}
			} );
		} );
	} );
} );
