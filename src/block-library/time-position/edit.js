/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useCurrentTime } from '@media-manager/media-connect';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function TimePositionDisplayEditBlock( { mediaSourceId } ) {
	const { currentTimeFormatted } = useCurrentTime( mediaSourceId );

	return (
		<div { ...useBlockProps() }>
			<div className="time-position-display__wrapper">
				{ currentTimeFormatted }
			</div>
		</div>
	);
}
