
/**
 * External dependencies
 */
 import { debounce } from 'lodash';
 
 /**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useEffect, useCallback } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import {
	ControlBackFiveIcon,
	ControlForwardFiveIcon,
	PlayerPlayIcon,
	PlayerPauseIcon,
} from '../../icons';
import { convertSecondsToTimeCode } from '../../lib/utils/time';
import { STORE_ID, STATE_PAUSED } from '../../store/constants';

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

export function PlayPauseButton( { onClick, isPaused = false, ...other } ) {
	return (
		<Button
			icon={ isPaused ? PlayerPlayIcon : PlayerPauseIcon }
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

export function SkipForwardButton( { onClick } ) {
	return (
		<Button
			icon={ ControlForwardFiveIcon }
			onClick={ onClick }
			label={ __( 'Skip forward', 'media-manager' ) }
		/>
	);
}

export function MediaPlayerControl( {
	sourceId,
	time,
	onChange = () => {},
} ) {
	const [ rangeTime, setRangeTime ] = useState( time );
	useEffect( () => setRangeTime( time ), [ time ] );

	const { mediaPlayingState, mediaDuration } = useSelect(
		( select ) => ( {
			mediaPlayingState: select( STORE_ID ).getMediaPlayerState(
				sourceId
			),
			mediaDuration: select( STORE_ID ).getMediaSourceDuration( sourceId ),
		} ),
		[]
	);

	const { toggleMediaSource, setMediaSourceCurrentTime } = useDispatch(
		STORE_ID
	);

	const isPaused = mediaPlayingState === STATE_PAUSED;

	const debouncedOnChange = useCallback(
		debounce( function ( time, onChange ) {
			if ( ! isPaused ) {
				setMediaSourceCurrentTime( sourceId, time );
			}

			onChange( time );
		}, 250 )
	, [ isPaused ] );

	/**
	 * Toggle media playing status.
	 * Set current position when not playing.
	 */
	function toggleInTime() {
		if ( isPaused ) {
			setMediaSourceCurrentTime( sourceId, time );
		}
		toggleMediaSource( sourceId );
	}

	function onChangeTimeHandler( time ) {
		setRangeTime( time );
		debouncedOnChange( time, onChange );
	}

	const currentTimeFormatted = convertSecondsToTimeCode( rangeTime );

	return (
		<div className="media-player-control">
			<JumpBackButton
				onClick={ () => onChangeTimeHandler( Math.max( 0, time - 5 ) ) }
			/>

			<PlayPauseButton
				isPaused={ isPaused }
				onClick={ () => toggleInTime() }
			/>

			<SkipForwardButton
				onClick={ () => onChangeTimeHandler( Math.min( mediaDuration, time + 5 ) ) }
			/>

			<div className="media-player-control__display">
				{ currentTimeFormatted }
			</div>

			<RangeControl
				disabled={ typeof mediaDuration === 'undefined' }
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