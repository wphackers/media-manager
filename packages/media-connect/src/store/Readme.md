# Media Source Store

```es6
import { store as mediaManagerStore } from '@media-manager/media-connect';
import { useSelect } from '@wordpress/data';

function MediaComponent( { mediaSourceId } ) {
	const currentTime useSelect(
		( select ) => select( mediaManagerStore ).getMediaSourceCurrentTime( mediaSourceId ),
		[ mediaSourceId ]
	);

	return <div>`Current time: ${ currentTime }`</div>;
}
