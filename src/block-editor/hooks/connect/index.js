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

/**
 * External dependencies
 */
import { store as mediaManagerStore } from '../../../store';
import { STATE_PAUSED } from '../../../store/constants';

export function withMediaCenterConnection( OriginalBlock ) {
	return function ( props ) {
		const { context } = props;
		const { mediaSourceId: sourceId } = context;

		const { isPaused, currentTime } = useSelect(
			( select ) => ( {
				isPaused: select( mediaManagerStore ).getMediaPlayerState( sourceId ) === STATE_PAUSED,
				currentTime: select( mediaManagerStore ).getMediaSourceCurrentTime( sourceId ),
			} ),
			[ sourceId ]
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
				play: () => playMediaSource( sourceId ),
				pause: () => pauseMediaSource( sourceId ),
				toggle: () => toggleMediaSource( sourceId ),
			} }
			className={ classnames( props.className, {
				'is-media-paused': isPaused,
			} ) }
		/>
	}
}

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
		edit: withMediaCenterConnection( settings.edit ),
	}
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-player-connect-blocks',
	addMediaManagerConnectSupport,
);
