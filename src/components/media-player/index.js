
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { ControlBackFiveIcon, ControlForwardFiveIcon } from '../icons';

const playIcon = 'controls-play';
const pauseIcon = 'controls-pause';

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
			icon={ isPaused ? playIcon : pauseIcon }
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