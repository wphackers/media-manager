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
import { useMediaStore, useMediaSourceId } from '@media-manager/media-connect';

/**
 * Internal dependencies
 */
import { mediaConsumerBlockAttributeName } from '../../constants';

// Define and export support name.
export const SUPPORT_NAME = 'media-manager/connect-consumer';

export const withMediaConnect = createHigherOrderComponent(
	( OriginalBlock ) => ( props ) => {
		const mediaSourceId = useMediaSourceId(
			mediaConsumerBlockAttributeName,
			props
		);

		const mediaSource = useMediaStore( mediaSourceId );

		return (
			<BlockContextProvider value={ { mediaSourceId } }>
				<OriginalBlock
					{ ...props }
					mediaContext={ { mediaSourceId } }
					mediaSource={ mediaSource }
					className={ classnames( props.className, {
						'is-media-paused': mediaSource.isPaused,
					} ) }
				/>
			</BlockContextProvider>
		);
	},
	'withMediaConnect'
);

function addMediaManagerConnectSupport( settings ) {
	if ( ! getBlockSupport( settings, SUPPORT_NAME ) ) {
		return settings;
	}

	return {
		...settings,
		usesContext: [ ...settings.usesContext, 'mediaSourceId' ],
		edit: withMediaConnect( settings.edit ),
	};
}

addFilter(
	'blocks.registerBlockType',
	'media-manager/register-media-player-connect-blocks',
	addMediaManagerConnectSupport
);
