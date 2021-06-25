/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import useCurrentTime from '../../components/hooks/use-current-time';
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
