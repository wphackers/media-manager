/**
 * Internal dependencies
 */
import { useCurrentTime } from '@media-manager/media-connect';

export default function TimePositionDisplayEditBlock( { mediaSourceId } ) {
	const { currentTimeFormatted } = useCurrentTime( mediaSourceId );

	return (
		<div>
			<div className="time-position-display__wrapper">
				{ currentTimeFormatted }
			</div>
		</div>
	);
}
