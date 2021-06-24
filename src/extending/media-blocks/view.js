/**
 * External dependencies
 */
import { debounce } from 'lodash';

/**
 * External dependencies
 */
import domReady from '@wordpress/dom-ready';
import { dispatch } from '@wordpress/data';
import { render, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { store as mediaManagerStore } from '../../store';
import { STATE_PAUSED } from '../../store/constants';
import { getBlockSourceProps } from '../utils';
import PlayPauseEditBlock from '../../block-library/play-pause-button/view';
import useMediaStore from '../../components/hooks/use-media-store';

function MediaSourceWrapper( {
	children: mediaElement,
	mediaSourceId,
	elementType,
	querySelector,
} ) {
	const { isPaused } = useMediaStore( mediaSourceId );

	// Media Source actions.
	const {
		playMediaSource,
		pauseMediaSource,
		updateMediaSourceData,
	} = dispatch( mediaManagerStore );

	function play() {
		mediaElement.play().catch( () => {} );
	}

	function pause() {
		mediaElement.pause();
	}

	function onMetadataReady( event ) {
		updateMediaSourceData( mediaSourceId, {
			duration: event?.srcElement?.duration,
		} );
	}

	function onMediaPlay() {
		playMediaSource( mediaSourceId );
	}

	function onMediaPause() {
		pauseMediaSource( mediaSourceId );
	}

	/*
	 * Pre load mediaElement metadata.
	 * It allows preloading useful metadata
	 * of the media source, for instance,
	 * the media duration.
	 */
	mediaElement.preload = 'metadata';
	mediaElement.autoplay = false;

	/*
	 * - Register Media into the store.
	 * - Get the metadata from the client.
	 * - Listen Play and Pause events.
	 */
	useEffect( () => {
		dispatch( mediaManagerStore ).registerMediaSource( mediaSourceId, {
			// source: mediaSource,
			elementType,
			state: STATE_PAUSED,
			querySelector,
		} );

		// Subscribe to media events.
		mediaElement.addEventListener( 'loadedmetadata', onMetadataReady );
		mediaElement.addEventListener( 'play', onMediaPlay );
		mediaElement.addEventListener( 'pause', onMediaPause );

		// Clean.
		return function () {
			// Remove listeners.
			mediaElement.removeEventListener( 'loadedmetadata', onMetadataReady );
			mediaElement.removeEventListener( 'play', onMediaPlay );
			mediaElement.removeEventListener( 'pause', onMediaPause );

			// Unregister media from store.
			unregisterMediaSource( mediaSourceId );
		};
	}, [] );

	// Play/Pause media depending on playing status (via store).
	useEffect( () => {
		const action = mediaElement.paused ? play : pause;
		const debouncedAction = debounce( action, 100 );

		if ( isPaused !== mediaElement.paused ) {
			debouncedAction();
		}

		return () => {
			debouncedAction.cancel();
		};
	}, [ isPaused, mediaElement ] );

	return null;
}

/**
 * Hlper function to render the Player Button Block, in the front-end.
 *
 * @param {string} mediaSourceId Media source ID
 * @returns {React.Component} Media player button
 */
function renderPlayerButtonBlock( mediaSourceId, playerButtonElement ) {
	render(
		<PlayPauseEditBlock mediaSourceId={ mediaSourceId } />,
		playerButtonElement
	);
}

domReady( function() {
	// Media Providers.
	const mediaElements = document.querySelectorAll( '[data-media-source-id]' );
	if ( mediaElements.length ) {
		mediaElements.forEach( function( media ) {
			const { mediaSourceId, mediaSourceType } = media.dataset;
			const { domTypeName } = getBlockSourceProps( mediaSourceType );
			const query = `[data-media-source-id="${ mediaSourceId }"] ${ domTypeName }`;
			const mediaElement = document.querySelector( query );
			if ( mediaElement ) {
			// if ( mediaElement && mediaElement.parentElement ) { // Keep wondering why checking parentElement.
				render(
					<MediaSourceWrapper
						mediaSourceId={ mediaSourceId }
						elementType={ domTypeName }
						querySelector={ query }
					>
						{ mediaElement }
					</MediaSourceWrapper>,
					mediaElement
				);
			}
		} );
	}

	// Media Consumers.
	const mediaSourceConsumers = document.querySelectorAll( '[data-media-source-reference]' );

	// CSS class defined for the player button blocks.
	const buttonBlockCssClass = 'wp-media-manager-player-button';
	if ( mediaSourceConsumers?.length ) {
		mediaSourceConsumers.forEach( function( mediaCenterBlock ) {
			const { mediaSourceReference } = mediaCenterBlock?.dataset;

			// Check is the consumer is a player-button block
			const isButtonBlock = mediaCenterBlock.classList.contains( buttonBlockCssClass );
			if ( isButtonBlock ) {
				renderPlayerButtonBlock( mediaSourceReference, mediaCenterBlock );
			} else {
				// Query player button blocks.
				const mediaPlayerButtons = mediaCenterBlock.querySelectorAll( `.${ buttonBlockCssClass }` );
				if ( mediaPlayerButtons?.length ) {
					mediaPlayerButtons.forEach( function( playerButtonElement ) {
						renderPlayerButtonBlock( mediaSourceReference, playerButtonElement );
					} );
				}
			}
		} );
	}
} );
