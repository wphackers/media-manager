
/**
 * WordPress dependencies
 */
import { Popover } from '@wordpress/components';
import { useAnchorRef } from '@wordpress/rich-text';

/**
 * Internal dependencies
 */
import { convertSecondsToTimeFormat } from '../../lib/time-utils';
import { mediaLinkFormatButtonSettings } from './';

export default function MediaLinkPopover( {
	value,
	isActive,
	contentRef,
	currentTime,
} ) {
	const anchorRef = useAnchorRef( { ref: contentRef, value, settings: mediaLinkFormatButtonSettings } );	
	if ( ! isActive ) {
		return null;
	}
	
	const currentTimeFormatted = convertSecondsToTimeFormat( currentTime );

	return (
		<Popover
			anchorRef={ anchorRef }
			onClose={ console.log }
			position="bottom center"
		>	
			<div>{ currentTimeFormatted }</div>
		</Popover>
	);
}
