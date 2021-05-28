/**
 * External dependencies
 */
 import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	withColors,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { STORE_ID, STATE_PAUSED } from '../../store/constants';
import { PlayPauseButton } from '../../components/media-player';
import './editor.scss';

function PlayPauseEditBlock( {
	context,
	iconColor,
	setIconColor,
	backgroundColor,
	setBackgroundColor,
} ) {
	const sourceId = context.mediaSourceId;

	const className = classnames( 'wp-block-media-manager__item', {
		[ backgroundColor.class ]: backgroundColor.class,
		'has-background': !! backgroundColor.color,
		'has-text-color': !! iconColor.color,
	} );

	const style = {
		backgroundColor: backgroundColor.color,
		color: iconColor.color,
	};

	const blockProps = useBlockProps( { style, className } );

	const mediaPlayingState = useSelect(
		( select ) => ( select( STORE_ID ).getMediaPlayerState( sourceId ) ),
		[ sourceId ]
	);

	const { toggleMediaSource } = useDispatch( STORE_ID );

	return (
		<Fragment>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color', 'media-manager' ) }
					colorSettings={ [
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __( 'Icon color', 'media-manager' ), // <- confusing, same.
						},
						{
							value: iconColor.color,
							onChange: setIconColor,
							label: __( 'Background color', 'media-manager' ), // <- confusing, indeed.
						},
					] }
				>
					<ContrastChecker
						{ ...{
							backgroundColor: backgroundColor.color,
							backgroundColor: iconColor.color,
						} }
						isLargeText={ false }
					/>
				</PanelColorSettings>
			</InspectorControls>

			<div { ...blockProps }>
				<PlayPauseButton
					isPaused= {mediaPlayingState === STATE_PAUSED }
					scale={ 1.5 }
					onClick={ () => toggleMediaSource( sourceId ) }
				/>
			</div>
		</Fragment>
	);
}

export default withColors( {
	iconColor: 'color',
	backgroundColor: 'background-color',
} )( PlayPauseEditBlock );
