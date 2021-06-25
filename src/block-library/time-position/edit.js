/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import useCurrentTime from '../../components/hooks/use-current-time';
import './editor.scss';

export default function TimePositionDisplayEditBlock( { context } ) {
	const { currentTimeFormatted } = useCurrentTime( context.mediaSourceId );

	return (
		<div { ...useBlockProps() }>
			<div className="time-position-display__wrapper">
				{ currentTimeFormatted }
			</div>
		</div>
	);
}
