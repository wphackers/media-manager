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
import TimePositionBlock from '../../block-library/time-position/view';
import { MediaLinkViewFormatType } from '@media-manager/format-library';
import MediaSourceProviderWrapper from './media-source-provider-wrapper';

function renderPlayerComponentBlock( mediaSourceId, playerButtonElement ) {
	let PlayerButtonComponent;

	if (
		playerButtonElement.classList.contains(
			'wp-block-media-manager-play-pause-button'
		)
	) {
		PlayerButtonComponent = PlayPauseButtonBlock;
	} else if (
		playerButtonElement.classList.contains(
			'wp-block-media-manager-play-button'
		)
	) {
		PlayerButtonComponent = PlayButtonBlock;
	} else if (
		playerButtonElement.classList.contains(
			'wp-block-media-manager-pause-button'
		)
	) {
		PlayerButtonComponent = PauseButtonBlock;
	} else {
		PlayerButtonComponent = TimePositionBlock;
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
						mediaElement={ mediaElement }
					/>,
					mediaElement
				);
			}
		} );
	}

	// Media Consumers.
	const mediaSourceConsumers = document.querySelectorAll(
		'[data-media-source-reference]'
	);

	// CSS class defined for the player button blocks.
	const buttonBlockCssClass = 'wp-media-manager-player-button';

	// CSS class defined for the time-position block.
	const timePositionBlockCssClass = 'wp-block-media-manager-time-position-display';

	// CSS class defined for the media-link format type.
	const linkFormatCssClass = 'media-link-format-type';

	if ( mediaSourceConsumers?.length ) {
		mediaSourceConsumers.forEach( function( mediaCenterBlock ) {
			const { mediaSourceReference } = mediaCenterBlock?.dataset;

			/*
			 * Check is the consumer is a actionable block:
			 * - media-manager/play-button block.
			 * - media-manager/pause-button block.
			 * - media-manager/play-pause-button block.
			 * - media-manager/time-position block.
			 */
			const isButtonBlock = mediaCenterBlock.classList.contains(
				buttonBlockCssClass
			);

			const isTimePositionBlock = mediaCenterBlock.classList.contains(
				timePositionBlockCssClass
			);

			if ( isButtonBlock || isTimePositionBlock ) {
				renderPlayerComponentBlock(
					mediaSourceReference,
					mediaCenterBlock
				);
			} else {
				/*
				 * Consumer is a wrapper block:
				 * - media-manager/media-center block.
				 * - media-manager/media-player block.
				 */
				// Query player button blocks.
				const mediaPlayerButtons = mediaCenterBlock.querySelectorAll(
					`.${ buttonBlockCssClass }, .${ timePositionBlockCssClass }`
				);
				if ( mediaPlayerButtons?.length ) {
					mediaPlayerButtons.forEach( function(
						playerButtonElement
					) {
						renderPlayerComponentBlock(
							mediaSourceReference,
							playerButtonElement
						);
					} );
				}
			}

			const mediaFormatLinks = mediaCenterBlock.querySelectorAll(
				`.${ linkFormatCssClass }`
			);

			mediaFormatLinks.forEach( function( mediaFormatLinkElement ) {
				const { hash: timehash, text } = mediaFormatLinkElement;

				render(
					<MediaLinkViewFormatType
						timestamp={ Number( timehash.substr( 1 ) ) }
						mediaSourceId={ mediaSourceReference }
						elementRef={ mediaFormatLinkElement }
					>
						{ text }
					</MediaLinkViewFormatType>,
					mediaFormatLinkElement
				);
			} );
		} );
	}
} );
