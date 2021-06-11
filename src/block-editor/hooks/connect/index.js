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
import { BlockContextProvider } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { store as mediaManagerStore } from '../../../store';
import { STATE_PAUSED } from '../../../store/constants';
import useMediaSourceId from '../../../components/hooks/use-media-source-id';

export const withMediaConnect = createHigherOrderComponent( ( OriginalBlock ) => {
	return function ( props ) {
		const mediaSourceId = useMediaSourceId( props );

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

		return <BlockContextProvider value={ { mediaSourceId } }>
			<OriginalBlock
				{ ...props }
				mediaContext={ { mediaSourceId } }
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
		</BlockContextProvider>
	}
}, 'withMediaConnect' );

function addMediaManagerConnectSupport( settings ) {
	if ( ! getBlockSupport( settings, 'media-manager/connect' ) ) {
		return settings;
	}

	return {
		...settings,
		usesContext: [
			...settings.usesContext,
			'mediaSourceId',
		],
		edit: withMediaConnect( settings.edit ),
	}
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-player-connect-blocks',
	addMediaManagerConnectSupport,
);
