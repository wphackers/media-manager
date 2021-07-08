/**
 * External dependencies
 */
import { debounce } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useCallback } from '@wordpress/element';
import { RangeControl, Notice, Button } from '@wordpress/components';
import { useMediaStore } from '@media-manager/media-connect';
import { convertSecondsToTimeCode } from '@media-manager/time-utils';

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

export function PlayButton( { onClick, scale, ...other } ) {
	return (
		<Button
			icon={ <PlayerPlayIcon scale={ scale } /> }
			onClick={ onClick }
			label={ __( 'Play', 'media-manager' ) }
			{ ...other }
		/>
	);
}

export function PauseButton( { onClick, scale, ...other } ) {
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
	const { isPaused, isReady, duration, toggle, setCurrentTime } = useMediaStore( mediaSourceId );

	const debouncedOnChange = useCallback(
		debounce( function( debTime, debOnChange ) {
			if ( ! isPaused ) {
				setCurrentTime( debTime );
			}

			debOnChange( debTime );
		}, 250 ),
		[ isPaused ]
	);

	/**
	 * Toggle media playing status.
	 * Set current position when not playing.
	 */
	function toggleInTime() {
		if ( isPaused ) {
			setCurrentTime( time );
		}
		toggle( mediaSourceId );
	}

	function onChangeTimeHandler( newTimeValue ) {
		setRangeTime( newTimeValue );
		debouncedOnChange( newTimeValue, onChange );
	}

	const currentTimeFormatted = convertSecondsToTimeCode( rangeTime );

	return (
		<div className="media-player-control">
			{ ! isReady && (
				<Notice
					spokenMessage={ null }
					status="warning"
					isDismissible={ false }
				>
					{ __( 'No media linked to this block', 'context' ) }
				</Notice>
			) }

			<JumpBackButton
				disabled={ ! isReady }
				onClick={ () => onChangeTimeHandler( Math.max( 0, time - 5 ) ) }
			/>

			<PlayPauseButton
				isPaused={ isPaused }
				disabled={ ! isReady }
				onClick={ () => toggleInTime() }
			/>

			<SkipForwardButton
				disabled={ ! isReady }
				onClick={ () => onChangeTimeHandler( Math.min( duration, time + 5 ) ) }
			/>

			<div className="media-player-control__display">
				{ currentTimeFormatted }
			</div>

			<RangeControl
				disabled={ ! isReady }
				value={ rangeTime }
				min={ 0 }
				max={ duration }
				onChange={ onChangeTimeHandler }
				withInputField={ false }
				showTooltip={ false }
			/>
		</div>
	);
}
