/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';
import { convertSecondsToTimeCode } from '../../../../../src/lib/utils/time';

/**
 * Internal dependencies
 */
import { store as mediaManagerStore } from '../../';

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
