/**
 * External dependencies
 */
import domReady from '@wordpress/dom-ready';
import { select, dispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { store as mediaManagerStore } from '../../store';
import { STATE_PAUSED } from '../../store/constants';
import { getBlockSourceProps } from '../utils';

domReady( function() {
	// Register media element in the store.
	const mediaElements = document.querySelectorAll( '[data-media-source-id]' );
	if ( mediaElements.length ) {
		mediaElements.forEach( function( media ) {			
			const { mediaSourceId, mediaSourceType } = media.dataset;
			const sourceProps = getBlockSourceProps( mediaSourceType );
			if ( ! sourceProps ) {
				return;
			}

			const { domTypeName } = getBlockSourceProps( mediaSourceType );
			const query = `[data-media-source-id="${ mediaSourceId }"] ${ domTypeName }`;

			dispatch( mediaManagerStore ).registerMediaSource( mediaSourceId, {
				// source: mediaSource,
				elementType: domTypeName,
				state: STATE_PAUSED,
				querySelector: query,
			} );
		} );
	}

	// All Media Center blocks.
	const mediaCenterBlocks = document.querySelectorAll( '.wp-block-media-manager-media-center' );
	if ( ! mediaCenterBlocks?.length ) {
		return;
	}

	mediaCenterBlocks.forEach( function( mediaCenterBlock ) {
		const { mediaSourceRef } = mediaCenterBlock?.dataset;

		// Media Link Format Style.
		const mediaLinkFormatElements = mediaCenterBlock.querySelectorAll( 'a.media-link-format-type' );
		if ( mediaLinkFormatElements?.length ) {
			mediaLinkFormatElements.forEach( function( anchor ) {
				const { state, querySelector } = select( mediaManagerStore ).getMediaSourceById( mediaSourceRef );
				const isPlayerPaused = STATE_PAUSED === state
				const mediaElement = document.querySelector( querySelector );
				
				anchor.addEventListener( 'click', function( event ) {
					event.stopPropagation();
					const timestamp = event.target.getAttribute( 'href' ).replace( /#/, '' );
					
					const rePlay = 
						Math.abs( Math.floor( timestamp - mediaElement.currentTime ) * 1000 ) >
						2000;
						
					// Playback to the timestamp.
					dispatch( mediaManagerStore ).setMediaSourceCurrentTime( mediaSourceRef, timestamp );
					mediaElement.currentTime = timestamp;

					if ( rePlay ) {
						mediaElement.play();
						dispatch( mediaManagerStore ).playMediaSource( mediaSourceRef );
					} else {
						if ( isPlayerPaused ) {
							dispatch( mediaManagerStore ).playMediaSource( mediaSourceRef );
							mediaElement.play();
						} else {
							dispatch( mediaManagerStore ).pauseMediaSource( mediaSourceRef );
							mediaElement.pause();
						}
					}
				} );
			} );
		}

		// Player button blocks.
		const mediaPlayerButtons = mediaCenterBlock.querySelectorAll( '.wp-media-manager-player-button' );
		if ( mediaPlayerButtons?.length ) {
			mediaPlayerButtons.forEach( function( playerButton ) {
				const isPlayPauseButton = playerButton.classList.contains( 'wp-block-media-manager-play-pause-button' );
				const isPlayButton = playerButton.classList.contains( 'wp-block-media-manager-play-button' );
				const isPauseButton = playerButton.classList.contains( 'wp-block-media-manager-pause-button' );

				playerButton.children[0].addEventListener( 'click', function( event ) {
					event.stopPropagation();

					const { state, querySelector } = select( mediaManagerStore ).getMediaSourceById( mediaSourceRef );
					const isPlayerPaused = STATE_PAUSED === state
					const mediaElement = document.querySelector( querySelector );

					if ( isPlayerPaused ) {
						if ( isPlayPauseButton || isPlayButton ) {
							dispatch( mediaManagerStore ).playMediaSource( mediaSourceRef );
							mediaElement.play();
						}

						playerButton.classList.remove( 'is-media-paused' );
					} else {
						if ( isPlayPauseButton || isPauseButton ) {
							dispatch( mediaManagerStore ).pauseMediaSource( mediaSourceRef );
							mediaElement.pause();
						}
						playerButton.classList.add( 'is-media-paused' );
					}
				} );
			} );
		}
	} );
} );
