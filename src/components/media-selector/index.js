/**
 * External dependencies
 */
import Gridicon from 'gridicons';

/**
 * WordPress dependencies
 */
import { useRef, useEffect, useState, select } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';
import { convertSecondsToTimeCode } from '../../lib/time-utils';
import { PlayPauseButton } from '../media-player';

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
		}
	}, [ itemReference ] );

	return (
		<div
			className="media__item-wrapper"
			onClick={ () => onItemSelect( id ) }
		>
			<div className="media__item" ref={ itemReference } />

			<div className="media__item-metadata">
				<Gridicon
					className={ `media__item-icon is-${ type }` }
					icon={ type }
					size={ 36 }
				/>

				{ showTypeLabel && (
					<strong> { type }</strong>
				) }

				<PlayPauseButton
					className="media__item-button"
					isPaused={ ! isPlaying }
					onClick={ ( event ) => {
						event.stopPropagation();
						onPlayToggle( itemReference.current?.querySelector( type ), id );
					} }
					isSmall
				/>
			</div>
		</div>
	);
}

export function MediaItemPanelBody( {
	title = __( 'Media Source', 'media-center' ),
	source,
} ) {
	if ( ! source ) {
		return null;
	}

	return (
		<PanelBody className="media-source-panel" title={ title }>
			<p>{ __( 'Media source connected to the theater', 'media-center' ) }</p>

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

			<ul>
				<li>
					{ __( 'Filename:', 'media-center' ) }
					<strong> { source.source }</strong>
				</li>
				<li>
					{ __( 'Duration:', 'media-center' ) }
					<strong> { convertSecondsToTimeCode( source.duration ) }</strong>
				</li>
			</ul>
		</PanelBody>
	);
}

export default function MediaSelector( { media, onMediaSelect } ) {
	if ( ! media?.length ) {
		return null;
	}

	const [ mediaPlayingElementRef, setMediaPlayingElementRef ] = useState();

	return (
		<div className="media-selector">
			<h4>
				{ __(
					'Pick up the media source from entrance content',
					'media-center'
				) }
			</h4>
			<ul>
				{ media.map( function ( { id, ...other } ) {
					return (
						<li key={ `item-${ id }` }>
							<MediaItem
								id={ id }
								{ ...other }
								isPaused={ mediaPlayingElementRef?.paused }
								onPlayToggle={ ( element, mediaId ) => {
									// Seek previous media element by media Id.
									// If so, stop it.
									if ( mediaPlayingElementRef && mediaPlayingElementRef !== element) {
										mediaPlayingElementRef?.pause();
									};

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
