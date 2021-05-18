/**
 * External dependencies
 */
 import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	__experimentalUseInnerBlocksProps as useInnerBlocksProps,
	withColors,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_ID, STATE_PAUSED } from '../../store/constants';
import { PlayPauseButton } from '../../components/media-player';
import './editor.scss';

function PlayPauseEditBlock( { context, backgroundColor, textColor } ) {
	const sourceId = context.mediaSourceId;

	const className = classnames( 'wp-block-media-manager__item', {
		[ backgroundColor.class ]: backgroundColor.class,
		'has-background': !! backgroundColor.color,
		'has-text-color': !! textColor.color,
	} );

	const style = {
		backgroundColor: backgroundColor.color,
		color: textColor.color,
	};

	const blockProps = useBlockProps( { style, className } );

	const mediaPlayingState = useSelect(
		( select ) => ( select( STORE_ID ).getMediaPlayerState( sourceId ) ),
		[ sourceId ]
	);

	const { toggleMediaSource } = useDispatch( STORE_ID );

	return (
		<div { ...blockProps }>
			<PlayPauseButton
				isPaused= {mediaPlayingState === STATE_PAUSED }
				scale={ 1.5 }
				onClick={ () => toggleMediaSource( sourceId ) }
			/>
		</div>
	);
}

export default withColors( {
	backgroundColor: 'background-color',
	textColor: 'color',
} )( PlayPauseEditBlock );
