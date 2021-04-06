/**
 * WordPress dependencies
 */
import { Popover, Button } from '@wordpress/components';
import { useAnchorRef } from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { convertSecondsToTimeFormat } from '../../lib/time-utils';
import { mediaLinkFormatButtonSettings } from './';
import { STORE_ID, STATE_PAUSED, STATE_PLAYING } from '../../store/constants';

const playIcon = 'controls-play';
const pauseIcon = 'controls-pause';

export function MediaPlayerControl( { sourceId } ) {
	const { mediaPlayingState } = useSelect(
		( select ) => ( {
			mediaPlayingState: select( STORE_ID ).getMediaPlayerState(
				sourceId
			),
		} ),
		[]
	);

	const { toggleMediaSource, setMediaSourceCurrentTime } = useDispatch(
		STORE_ID
	);

	const isPaused = mediaPlayingState === STATE_PAUSED;

	function toggleInTime( time = 3 ) {
		if ( mediaPlayingState !== STATE_PLAYING ) {
			setMediaSourceCurrentTime( sourceId, time );
		}
		toggleMediaSource( sourceId );
	}

	return (
		<div className="media-player-control">
			<Button
				icon={ isPaused ? playIcon : pauseIcon }
				disabled={ false }
				onClick={ () => toggleInTime() }
				label={
					isPaused
						? __( 'Play', 'media-center' )
						: __( 'Pause', 'media-center' )
				}
			/>
		</div>
	);
}

export default function MediaLinkPopover( {
	value,
	isActive,
	contentRef,
	currentTime,
	sourceId,
} ) {
	const anchorRef = useAnchorRef( {
		ref: contentRef,
		value,
		settings: mediaLinkFormatButtonSettings,
	} );
	if ( ! isActive ) {
		return null;
	}

	const currentTimeFormatted = convertSecondsToTimeFormat( currentTime );

	return (
		<Popover
			anchorRef={ anchorRef }
			onClose={ console.log }
			position="bottom center"
		>
			<div className="media-link-popover">
				{ currentTimeFormatted }

				<MediaPlayerControl sourceId={ sourceId } />
			</div>
		</Popover>
	);
}
