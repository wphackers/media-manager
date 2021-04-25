
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { ControlBackFiveIcon, ControlForwardFiveIcon } from '../icons';

const playIcon = 'controls-play';
const pauseIcon = 'controls-pause';

export function JumpBackButton( { onClick } ) {
	return (
		<Button
			icon={ ControlBackFiveIcon }
			onClick={ onClick }
			label={ __( 'Jump back', 'media-center' ) }
		/>
	);
}

export function PlayPauseButton( { onClick, isPaused } ) {
	return (
		<Button
			icon={ isPaused ? playIcon : pauseIcon }
			disabled={ false }
			onClick={ onClick }
			label={
				isPaused
					? __( 'Play', 'media-center' )
					: __( 'Pause', 'media-center' )
			}
		/>
	);
}

export function SkipForwardButton( { onClick } ) {
	return (
		<Button
			icon={ ControlForwardFiveIcon }
			onClick={ onClick }
			label={ __( 'Skip forward', 'media-center' ) }
		/>
	);
}