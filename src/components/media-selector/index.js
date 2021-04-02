
/**
 * External dependencies
 */
import Gridicon from 'gridicons';

/**
 * WordPress dependencies
 */
import { useRef, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss';

function MediaItem( { type, source, onItemSelect, id } ) {
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
	}, [] );

	return (
		<div
			className="media-selector__item-wrapper"
			onMouseEnter={ ( { target } ) => target.querySelector( type )?.play() }
			onMouseLeave={ ( { target } ) => target.querySelector( type )?.pause() }
			onClick={ () => onItemSelect( id ) }
		>
			<div className="media-selector__item" ref={ itemReference } />

			<Gridicon
				className={ `media-selector__item-icon is-${ type }` }
				icon={ type }
				size={ 36 }
			/>
		</div>
	);
}

export default function MediaSelector( { media, onMediaSelect } ) {
	if ( ! media?.length ) {
		return null;
	}

	return (
		<div className="media-selector">
			<h4>{ __( 'Pick up the media source from this content', 'media-center' ) }</h4>
			<ul>
				{
					media.map( function( { elementType, source, id } ) {
						return (
							<li key={ `item-${ id }`}>
								<MediaItem
									id={ id }
									type={ elementType }
									source={ source }
									onItemSelect={ onMediaSelect }
								/>
							</li>
						);
					} )
				}
			</ul>
		</div>
	)
}
