/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { convertSecondsToTimeCode } from '@media-manager/time-utils';

/**
 * Internal dependencies
 */
import { store as mediaManagerStore } from '../../';

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
