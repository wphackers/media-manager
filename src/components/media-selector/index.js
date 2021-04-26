/**
 * External dependencies
 */
import Gridicon from 'gridicons';

/**
 * WordPress dependencies
 */
import { useRef, useEffect, useState } from '@wordpress/element';
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
	onItemSelect = () => {},
	id,
	dissablePlayInHover = false,
	onReady = () => {},
} ) {
	const itemReference = useRef();

	useEffect( () => {
		if ( ! itemReference?.current ) {
			return;
		}

		// Construct media element.
		const mediaElement = document.createElement( type );
		mediaElement.src = source;

		// Insert player into the DOM.
		itemReference.current.appendChild( mediaElement );
		onReady( mediaElement );
	}, [] );

	return (
		<div
			className="media__item-wrapper"
			onMouseEnter={ ( { target } ) =>
				! dissablePlayInHover && target.querySelector( type )?.play()
			}
			onMouseLeave={ ( { target } ) =>
				! dissablePlayInHover && target.querySelector( type )?.pause()
			}
			onClick={ () => onItemSelect( id ) }
		>
			<div className="media__item" ref={ itemReference } />
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

	const mediaRef = useRef();
	const [ isPaused, setIsPaused ] = useState( true );

	return (
		<PanelBody className="media-source-panel" title={ title }>
			<p>{ __( 'Media source connected to the theater', 'media-center' ) }</p>

			<MediaItem
				{ ...source }
				dissablePlayInHover={ true }
				onReady={ function ( mediaElement ) {
					mediaRef.current = mediaElement;
				} }
			/>

			<ul>
				<li className="media-type">
					<Gridicon
						className={ `media__item-icon is-${ source.elementType }` }
						icon={ source.elementType }
						size={ 36 }
					/>
					<strong> { source.elementType }</strong>
					<PlayPauseButton
						isPaused={ isPaused }
						onClick={ function() {
							if ( mediaRef.current?.paused ) {
								setIsPaused( false );
								return mediaRef.current.play();
							}

							setIsPaused( true );
							mediaRef.current.pause();
						} }
					/>
				</li>
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

	return (
		<div className="media-selector">
			<h4>
				{ __(
					'Pick up the media source from entrance content',
					'media-center'
				) }
			</h4>
			<ul>
				{ media.map( function ( { elementType, source, id } ) {
					return (
						<li key={ `item-${ id }` }>
							<MediaItem
								id={ id }
								type={ elementType }
								source={ source }
								onItemSelect={ onMediaSelect }
							/>
						</li>
					);
				} ) }
			</ul>
		</div>
	);
}
