/**
 * WordPress dependencies
 */
import { Popover } from '@wordpress/components';
import { useAnchorRef } from '@wordpress/rich-text';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { mediaLinkFormatButtonSettings } from './';
import { MediaPlayerControl } from '../media-player';

export default function MediaLinkPopover( {
	value,
	isActive,
	contentRef,
	currentTime,
	sourceId,
	onTimeChange,
} ) {
	const anchorRef = useAnchorRef( {
		ref: contentRef,
		value,
		settings: mediaLinkFormatButtonSettings,
	} );

	if ( ! isActive ) {
		return null;
	}

	return (
		<Popover
			anchorRef={ anchorRef }
			position="bottom center"
			focusOnMount={ false }
		>
			<div className="media-link-popover">
				<MediaPlayerControl
					sourceId={ sourceId }
					time={ currentTime }
					onChange={ onTimeChange }
				/>
			</div>
		</Popover>
	);
}
