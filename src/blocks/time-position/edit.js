
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
 import { store as mediaManagerStore } from '../../store';
import { convertSecondsToTimeCode } from '../../lib/utils/time';
import './editor.scss';

export default function TimePositionDisplayEditBlock( { context } ) {
	const sourceId = context.mediaSourceId;

	const { currentTime = 0 } = useSelect( ( select ) => ( {
		currentTime: select( mediaManagerStore ).getMediaSourceCurrentTime( sourceId ),
	} ), [ sourceId ] );

	return (
		<div { ...useBlockProps() }>
			<div className="time-position-diaplay__wrapper">
				{ convertSecondsToTimeCode( currentTime ) }
			</div>
		</div>
	);
}
