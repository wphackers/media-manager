
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { PlayerPlayIcon, PlayerPauseIcon } from '../../icons';
import { STATE_PAUSED, STORE_ID } from '../../store/constants';
import './editor.scss';

export default function PlayPauseEditBlock( { context } ) {
	const sourceId = context.mediaSourceId;

	const mediaPlayingState = useSelect(
		( select ) => ( select( STORE_ID ).getMediaPlayerState( sourceId ) ),
		[ sourceId ]
	);

	const { toggleMediaSource } = useDispatch( STORE_ID );

	return (
		<div { ...useBlockProps( { className: 'wp-media-manager-player-block' } ) }>
			<Button
				icon={
					mediaPlayingState === STATE_PAUSED
						? <PlayerPlayIcon scale={ 1.5 } />
						: <PlayerPauseIcon scale={ 1.5 } />
				}
				onClick={ () => toggleMediaSource( sourceId ) }
			/>
		</div>
	);
}
