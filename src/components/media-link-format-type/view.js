/**
 * WordPress dependencies
 */
import { useDispatch } from '@wordpress/data';
import { store as mediaManagerStore } from '@media-manager/media-connect';

/**
 * Internal dependencies
 */

export default function MediaLinkFormatType( { mediaSourceId, elRef } ) {
	const { hash: timehash, innerHTML } = elRef;
	const timestamp = Number( timehash.substr( 1 ) );

	// Use dispatch instead of use MediaStore hook,
	// to avoid unnecessary rendering.
	const { setMediaSourceCurrentTime, playMediaSource } = useDispatch(
		mediaManagerStore
	);

	return (
		<a
			href={ timehash }
			onClick={ ( event ) => {
				event.preventDefault();
				setMediaSourceCurrentTime( mediaSourceId, timestamp );
				playMediaSource( mediaSourceId );
			} }
		>
			{ innerHTML }
		</a>
	);
}
