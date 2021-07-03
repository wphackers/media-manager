/**
 * External dependencies
 */
import { debounce } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useEffect, useCallback } from '@wordpress/element';
import { RangeControl, Notice, Button } from '@wordpress/components';
import {
	store as mediaManagerStore,
	STATE_PAUSED,
} from '@mediamanager/media-connect';

/**
 * Internal dependencies
 */
import {
	ControlBackFiveIcon,
	ControlForwardFiveIcon,
	PlayerPlayIcon,
	PlayerPauseIcon,
	PlayerPlayPauseIcon,
} from '../icons';
import { convertSecondsToTimeCode } from '../../lib/utils/time';
import './style.scss';

export function JumpBackButton( { onClick, ...other } ) {
	return (
		<Button
			icon={ ControlBackFiveIcon }
			onClick={ onClick }
			label={ __( 'Jump back', 'media-manager' ) }
			{ ...other }
		/>
	);
}

export function PlayPauseButton( {
	onClick,
	isPaused = false,
	scale,
	...other
} ) {
	return (
		<Button
			icon={
				isPaused ? (
					<PlayerPlayPauseIcon scale={ scale } />
				) : (
					<PlayerPauseIcon scale={ scale } />
				)
			}
			disabled={ false }
			onClick={ onClick }
			label={
				isPaused
					? __( 'Play', 'media-manager' )
					: __( 'Pause', 'media-manager' )
			}
			{ ...other }
		/>
	);
}

export function PlayButton( { onClick, isPaused = false, scale, ...other } ) {
	return (
		<Button
			icon={ <PlayerPlayIcon scale={ scale } /> }
			onClick={ onClick }
			label={ __( 'Play', 'media-manager' ) }
			{ ...other }
		/>
	);
}

export function PauseButton( { onClick, isPaused = false, scale, ...other } ) {
	return (
		<Button
			icon={ <PlayerPauseIcon scale={ scale } /> }
			onClick={ onClick }
			label={ __( 'Pause', 'media-manager' ) }
			{ ...other }
		/>
	);
}

export function SkipForwardButton( { onClick, ...other } ) {
	return (
		<Button
			icon={ ControlForwardFiveIcon }
			onClick={ onClick }
			label={ __( 'Skip forward', 'media-manager' ) }
			{ ...other }
		/>
	);
}

export function MediaPlayerControl( {
	mediaSourceId,
	time,
	onChange = () => {},
} ) {
	const [ rangeTime, setRangeTime ] = useState( time );
	useEffect( () => setRangeTime( time ), [ time ] );

	const { mediaPlayingState, mediaDuration, mediaSource } = useSelect(
		( select ) => ( {
			mediaPlayingState: select( mediaManagerStore ).getMediaPlayerState(
				mediaSourceId
			),
			mediaDuration: select( mediaManagerStore ).getMediaSourceDuration(
				mediaSourceId
			),
			mediaSource: select( mediaManagerStore ).getMediaSourceById(
				mediaSourceId
			),
		} ),
		[ mediaSourceId ]
	);

	const { toggleMediaSource, setMediaSourceCurrentTime } = useDispatch(
		mediaManagerStore
	);

	const isPaused = mediaPlayingState === STATE_PAUSED;

	const debouncedOnChange = useCallback(
		debounce( function ( time, onChange ) {
			if ( ! isPaused ) {
				setMediaSourceCurrentTime( mediaSourceId, time );
			}

			onChange( time );
		}, 250 ),
		[ isPaused ]
	);

	/**
	 * Toggle media playing status.
	 * Set current position when not playing.
	 */
	function toggleInTime() {
		if ( isPaused ) {
			setMediaSourceCurrentTime( mediaSourceId, time );
		}
		toggleMediaSource( mediaSourceId );
	}

	function onChangeTimeHandler( time ) {
		setRangeTime( time );
		debouncedOnChange( time, onChange );
	}

	const currentTimeFormatted = convertSecondsToTimeCode( rangeTime );

	return (
		<div className="media-player-control">
			{ ! mediaSource && (
				<Notice
					spokenMessage={ null }
					status="warning"
					isDismissible={ false }
				>
					{ __( 'No media linked to this block', 'context' ) }
				</Notice>
			) }

			<JumpBackButton
				disabled={ ! mediaSource }
				onClick={ () => onChangeTimeHandler( Math.max( 0, time - 5 ) ) }
			/>

			<PlayPauseButton
				isPaused={ isPaused }
				disabled={ ! mediaSource }
				onClick={ () => toggleInTime() }
			/>

			<SkipForwardButton
				disabled={ ! mediaSource }
				onClick={ () =>
					onChangeTimeHandler( Math.min( mediaDuration, time + 5 ) )
				}
			/>

			<div className="media-player-control__display">
				{ currentTimeFormatted }
			</div>

			<RangeControl
				disabled={
					! mediaSource || typeof mediaDuration === 'undefined'
				}
				value={ rangeTime }
				min={ 0 }
				max={ mediaDuration }
				onChange={ onChangeTimeHandler }
				withInputField={ false }
				showTooltip={ false }
			/>
		</div>
	);
}
