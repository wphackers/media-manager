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
```

## API

### Selectors

#### getMediaSources( state )

#### getMediaSourceById( state, id )

#### getDefaultMediaSource( state )

#### getMediaPlayerState( state, id )

#### getMediaSourceCurrentTime( state, id )

#### getMediaSourceDuration( state, id )

#### getMediaSourceDomReference( state, id )

### Actions

##### registerMediaSource( id, mediaSourceState )

##### updateMediaSourceData( id, data )

##### unregisterMediaSource( id )

##### setDefaultMediaSource( id )

##### playMediaSource( id )

##### toggleMediaSource( id )

##### pauseMediaSource( id )

##### errorMediaSource( id )

##### setMediaSourceCurrentTime( id, currentTime )
