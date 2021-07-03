/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { convertSecondsToTimeCode } from '../../../lib/utils/time';

import { store as mediaManagerStore } from '@media-manager/media-connect';

/**
 * Internal dependencies
 */

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
