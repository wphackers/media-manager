/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { getBlockSupport } from '@wordpress/blocks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { BlockContextProvider } from '@wordpress/block-editor';

/**
 * External dependencies
 */
import useMediaSourceId from '../../../components/hooks/use-media-source-id';
import useMediaStore from '../../../components/hooks/use-media-store';

export const withMediaConnect = createHigherOrderComponent( ( OriginalBlock ) => {
	return function ( props ) {
		const mediaSourceId = useMediaSourceId( props );
		const mediaSource = useMediaStore( mediaSourceId );

		return <BlockContextProvider value={ { mediaSourceId } }>
			<OriginalBlock
				{ ...props }
				mediaContext={ { mediaSourceId } }
				mediaSource={ mediaSource }
				className={ classnames( props.className, {
					'is-media-paused': mediaSource.isPaused,
				} ) }
			/>
		</BlockContextProvider>
	}
}, 'withMediaConnect' );

function addMediaManagerConnectSupport( settings ) {
	if ( ! getBlockSupport( settings, 'media-manager/connect-consumer' ) ) {
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
