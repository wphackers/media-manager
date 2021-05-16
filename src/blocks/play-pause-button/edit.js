
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_ID, STATE_PAUSED } from '../../store/constants';
import './editor.scss';
import { PlayPauseButton } from '../../components/media-player';

export default function PlayPauseEditBlock( { context } ) {
	const sourceId = context.mediaSourceId;

	const mediaPlayingState = useSelect(
		( select ) => ( select( STORE_ID ).getMediaPlayerState( sourceId ) ),
		[ sourceId ]
	);

	const { toggleMediaSource } = useDispatch( STORE_ID );

	return (
		<div { ...useBlockProps( { className: 'wp-block-media-manager__item' } ) }>
			<PlayPauseButton
				isPaused= {mediaPlayingState === STATE_PAUSED }
				scale={ 1.5 }
				onClick={ () => toggleMediaSource( sourceId ) }
			/>
		</div>
	);
}
