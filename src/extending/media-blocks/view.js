
/**
 * External dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { getBlockSourceProps } from '../utils';
import PlayPauseButtonBlock from '../../block-library/play-pause-button/view';
import PlayButtonBlock from '../../block-library/play-button/view';
import PauseButtonBlock from '../../block-library/pause-button/view';
import MediaLinkFormatType from '../../components/media-link-format-type/view';
import renderReplace from '../../lib/render';
import MediaSourceProviderWrapper from './media-source-provider-wrapper';

/**
 * Hlper function to render the Player Button Block, in the front-end.
 *
 * @param {string} mediaSourceId Media source ID
 * @returns {React.Component} Media player button
 */
function renderPlayerButtonBlock( mediaSourceId, playerButtonElement ) {
	let PlayerButtonComponent;

	if ( playerButtonElement.classList.contains( 'wp-block-media-manager-play-pause-button' ) ) {
		PlayerButtonComponent = PlayPauseButtonBlock;
	} else if ( playerButtonElement.classList.contains( 'wp-block-media-manager-play-button' ) ) {
		PlayerButtonComponent = PlayButtonBlock;
	} else {
		PlayerButtonComponent = PauseButtonBlock;
	}

	if ( ! PlayerButtonComponent ) {
		return;
	}

	render(
		<PlayerButtonComponent mediaSourceId={ mediaSourceId } />,
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
					<MediaSourceProviderWrapper
						mediaSourceId={ mediaSourceId }
						elementType={ domTypeName }
						querySelector={ query }
					>
						{ mediaElement }
					</MediaSourceProviderWrapper>,
					mediaElement
				);
			}
		} );
	}

	// Media Consumers.
	const mediaSourceConsumers = document.querySelectorAll( '[data-media-source-reference]' );

	// CSS class defined for the player button blocks.
	const buttonBlockCssClass = 'wp-media-manager-player-button';
	const linkFormatCssClass = 'media-link-format-type';
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

			const mediaFormatLinks = mediaCenterBlock.querySelectorAll( `.${ linkFormatCssClass }` );
			mediaFormatLinks.forEach( function( mediaFormatLinkElement ) {
				renderReplace(
					<MediaLinkFormatType
						elRef={ mediaFormatLinkElement }
						mediaSourceId={ mediaSourceReference }
					/>,
					mediaFormatLinkElement,
					true
				);
			} );
		} );
	}
} );
