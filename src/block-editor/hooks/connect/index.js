/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { getBlockSupport } from '@wordpress/blocks';
import { useSelect, useDispatch } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * External dependencies
 */
import { store as mediaManagerStore } from '../../../store';
import { STATE_PAUSED } from '../../../store/constants';

export const withMediaCenterConnect = createHigherOrderComponent( ( OriginalBlock ) => {
	return function ( props ) {
		const { context } = props;

		console.log( 'context: ', context );

		// Media Source ID is provided by block context.
		const { mediaSourceId } = context;

		const { isPaused, currentTime } = useSelect(
			( select ) => ( {
				isPaused: select( mediaManagerStore ).getMediaPlayerState( mediaSourceId ) === STATE_PAUSED,
				currentTime: select( mediaManagerStore ).getMediaSourceCurrentTime( mediaSourceId ),
			} ),
			[ mediaSourceId ]
		);
		const {
			playMediaSource,
			pauseMediaSource,
			toggleMediaSource,
		} = useDispatch( mediaManagerStore );

		return <OriginalBlock
			{ ...props }
			mediaSource={ {
				isPaused,
				currentTime,
				play: () => playMediaSource( mediaSourceId ),
				pause: () => pauseMediaSource( mediaSourceId ),
				toggle: () => toggleMediaSource( mediaSourceId ),
			} }
			className={ classnames( props.className, {
				'is-media-paused': isPaused,
			} ) }
		/>
	}
}, 'withMediaCenterConnect' );

function addMediaManagerConnectSupport( settings ) {
	if ( ! getBlockSupport( settings, 'media-manager/connect' ) ) {
		return settings;
	}

	return {
		...settings,
		usesContext: [
			settings.usesContext,
			'mediaSourceId',
		],
		edit: withMediaCenterConnect( settings.edit ),
	}
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-player-connect-blocks',
	addMediaManagerConnectSupport,
);
