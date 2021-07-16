/**
 * WordPress dependencies
 */
import { useRef, useEffect, useState, Fragment } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { PanelBody, PanelRow, Button, Notice, Icon } from '@wordpress/components';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useDispatch } from '@wordpress/data';
import { convertSecondsToTimeCode } from '@media-manager/time-utils';
import { PlayPauseButton, MediaConnectIcon } from '@media-manager/components';

/**
 * Internal dependencies
 */

export function MediaItem( {
	elementType: type,
	source,
	id,
	showTypeLabel,
	onPlayToggle = () => {},
	onItemSelect = () => {},
	onReady = () => {},
	onRemove = () => {},
} ) {
	const itemReference = useRef();
	const [ isPlaying, setIsPlaying ] = useState( false );

	function onPlayHandler() {
		setIsPlaying( true );
	}

	function onPauseHandler() {
		setIsPlaying( false );
	}

	useEffect( () => {
		if ( ! itemReference?.current ) {
			return;
		}

		// Construct media element.
		const mediaElement = document.createElement( type );
		mediaElement.src = source;

		// Insert player into the DOM.
		itemReference.current.appendChild( mediaElement );
		onReady( mediaElement, id );

		mediaElement.addEventListener( 'play', onPlayHandler );
		mediaElement.addEventListener( 'pause', onPauseHandler );

		return function() {
			onRemove( mediaElement, id );
			mediaElement.removeEventListener( 'play', onPlayHandler );
			mediaElement.removeEventListener( 'pause', onPauseHandler );
		};
	}, [ itemReference ] );

	return (
		<div
			className="media__item-wrapper"
			onClick={ () => onItemSelect( id ) }
		>
			<div className="media__item" ref={ itemReference } />

			<div className="media__item-metadata">
				<Icon
					className="media__item-icon"
					icon={ `format-${ type }` }
					size={ 36 }
				/>

				{ showTypeLabel && <strong> { type }</strong> }

				<PlayPauseButton
					className="media__item-play-button"
					isPaused={ ! isPlaying }
					onClick={ ( event ) => {
						event.stopPropagation();
						onPlayToggle(
							itemReference.current?.querySelector( type ),
							id
						);
					} }
					isSmall
				/>
			</div>
		</div>
	);
}

export function MediaItemPanelBody( {
	source,
	isReady,
	isNotAvailable,
	isNotDefined,
	onReplace,
	onUnlink,
	isMediaInherited,
} ) {
	const { selectBlock } = useDispatch( blockEditorStore );

	return (
		<PanelBody
			className="media-source-panel"
			title={ __( 'Media Source Consumer', 'media-manager' ) }
		>
			<p>
				{ __(
					'This block is connected to a media source.',
					'media-manager'
				) }
			</p>

			{ ( ! isReady || isNotAvailable || isNotDefined ) && (
				<Fragment>
					<PanelRow>
						<Notice
							spokenMessage={ null }
							status={ isNotAvailable && ! isNotDefined ? 'error' : 'warning' }
							isDismissible={ false }
						>
							{
								isNotAvailable && ! isNotDefined
									? __( 'Media is not available anymore', 'media-manager' )
									: __( 'No media linked to this block', 'media-manager' )
							}
						</Notice>
					</PanelRow>

					<PanelRow>
						<Button
							isSecondary
							isSmall
							label={ __(
								'Link to a media source',
								'media-manager'
							) }
							onClick={ onReplace }
						>
							{ __( 'Link to Media', 'media-manager' ) }
						</Button>
					</PanelRow>
				</Fragment>
			) }

			{ source && (
				<Fragment>
					<PanelRow>
						<MediaItem
							{ ...source }
							showTypeLabel={ true }
							onPlayToggle={ ( element ) => {
								if ( ! element ) {
									return;
								}

								if ( element.paused ) {
									return element.play();
								}

								element.pause();
							} }
						/>
					</PanelRow>

					<PanelRow>
						<ul>
							<li>
								{ __( 'Filename:', 'media-manager' ) }
								<strong> { source.source }</strong>
							</li>
							<li>
								{ __( 'Duration:', 'media-manager' ) }
								<strong>
									{ ' ' }
									{ convertSecondsToTimeCode(
										source.duration
									) }
								</strong>
							</li>

							<li>
								{ sprintf(
									/* translators: %1$s: block title, %2$s: author name. */
									__( 'Connected to a %1$s.', 'media-manager' ),
									source.elementType
								) }

								<Button
									className="components-button__focus"
									isLink
									onClick={ () => {
										if ( ! source.mediaBlockClientId ) {
											return;
										}
										selectBlock(
											source.mediaBlockClientId
										);
									} }
								>
									{ __( 'Focus', 'media-manager' ) }
								</Button>
							</li>
						</ul>
					</PanelRow>

					{ ! isMediaInherited && (
						<PanelRow>
							<div className="media-source-panel__actions">
								<Button
									isSecondary
									isSmall
									label={ __(
										'Replacing linked media source',
										'media-manager'
									) }
									onClick={ onReplace }
								>
									{ __( 'Replace Media', 'media-manager' ) }
								</Button>

								<Button
									isTertiary
									isSmall
									label={ __(
										'Unlink media source',
										'media-manager'
									) }
									onClick={ () => onUnlink( true ) }
								>
									{ __( 'Unlink Media', 'media-manager' ) }
								</Button>
							</div>
						</PanelRow>
					) }
				</Fragment>
			) }
		</PanelBody>
	);
}

/**
 * Block settings Pane to show info
 * about block as media provider
 */
export function MediaConnectProviderPanelBody() {
	return (
		<PanelBody
			icon={ MediaConnectIcon }
			className="media-source-panel"
			title={ __( 'Media Source Provider', 'media-manager' ) }
		>
			<p>
				{ __(
					'This block has been defined as media provider, meaning you can connect and command it from other blocks.',
					'media-manager'
				) }
			</p>
		</PanelBody>
	);
}

export function MediaSelector( { media, onMediaSelect } ) {
	const [ mediaPlayingElementRef, setMediaPlayingElementRef ] = useState();

	if ( ! media?.length ) {
		return null;
	}

	return (
		<div className="media-selector">
			<h4>
				{ __(
					'Pick up a media from the media sources list available for this entrance.',
					'media-manager'
				) }
			</h4>
			<ul>
				{ media.map( function( { id, ...other } ) {
					return (
						<li key={ `item-${ id }` }>
							<MediaItem
								id={ id }
								{ ...other }
								isPaused={ mediaPlayingElementRef?.paused }
								onPlayToggle={ ( element ) => {
									// Seek previous media element by media Id.
									// If so, stop it.
									if (
										mediaPlayingElementRef &&
										mediaPlayingElementRef !== element
									) {
										mediaPlayingElementRef?.pause();
									}

									if ( element.paused ) {
										setMediaPlayingElementRef( element );
										return element.play();
									}

									setMediaPlayingElementRef( null );
									element.pause();
								} }
								onItemSelect={ onMediaSelect }
							/>
						</li>
					);
				} ) }
			</ul>
		</div>
	);
}
