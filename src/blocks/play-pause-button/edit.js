/**
 * External dependencies
 */
 import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_ID, STATE_PAUSED } from '../../store/constants';
import { PlayPauseButton } from '../../components/media-player';

export default function PlayPauseEditBlock( { context, scale } ) {
	const sourceId = context.mediaSourceId;

	const mediaPlayingState = useSelect(
		( select ) => ( select( STORE_ID ).getMediaPlayerState( sourceId ) ),
		[ sourceId ]
	);

	const { toggleMediaSource } = useDispatch( STORE_ID );

	return (
		<div { ...useBlockProps() }>
			<PlayPauseButton
				isPaused= { mediaPlayingState === STATE_PAUSED }
				scale={ scale }
				onClick={ () => toggleMediaSource( sourceId ) }
			/>
		</div>
	);
}
