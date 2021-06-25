/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { convertSecondsToTimeCode } from '../../../lib/utils/time';

/**
 * Internal dependencies
 */
import { store as mediaManagerStore } from '../../../store';

export default function useCurrentTime( id ) {
	return useSelect(
		( select ) => {
			const currentTime =
				select( mediaManagerStore ).getMediaSourceCurrentTime( id ) ||
				0;
			return {
				currentTime,
				currentTimeFormatted: convertSecondsToTimeCode( currentTime ),
			};
		},
		[ id ]
	);
}
