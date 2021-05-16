
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_ID, STATE_PLAYING } from '../../store/constants';
import './editor.scss';
import { PlayButton } from '../../components/media-player';

export default function PlayEditBlock( { context } ) {
	const sourceId = context.mediaSourceId;

	const mediaPlayingState = useSelect(
		( select ) => ( select( STORE_ID ).getMediaPlayerState( sourceId ) ),
		[ sourceId ]
	);

	const { playMediaSource } = useDispatch( STORE_ID );

	return (
		<div { ...useBlockProps( { className: 'wp-block-media-manager__item' } ) }>
			<PlayButton
				disabled={ mediaPlayingState === STATE_PLAYING }
				scale={ 1.5 }
				onClick={ () => playMediaSource( sourceId ) }
			/>
		</div>
	);
}
