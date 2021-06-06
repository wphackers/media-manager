
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../store/constants';
import { convertSecondsToTimeCode } from '../../lib/utils/time';
import './editor.scss';

export default function TimePositionDisplayEditBlock( { context } ) {
	const sourceId = context.mediaSourceId;

	const { currentTime = 0 } = useSelect( ( select ) => ( {
		currentTime: select( STORE_NAME ).getMediaSourceCurrentTime( sourceId ),
	} ), [ sourceId ] );

	return (
		<div { ...useBlockProps() }>
			<div className="time-position-diaplay__wrapper">
				{ convertSecondsToTimeCode( currentTime ) }
			</div>
		</div>
	);
}
