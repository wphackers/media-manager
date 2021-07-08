# useMediaStore hook

Use this hook to connect your componeny with the media store.

```es6
import { useMediaStore } from '@media-manager/media-connect';

function MyComponent() {
	const mediaSourceId = '<the-media-store-id-here>';
	const { isReady, isPaused, play } = useMediaStore( mediaSourceId );

	if ( ! isReady ) {
		return <div>Media is not ready :'(</div>;
	}

	return (
		<div>
			{ `The media is ${ isPaused ? 'paused' : 'playing' }.` }
			<Button onClick={ play }>Play media!</Button>
		</div>
	);
}
```

the `useMediaStore()` expect a valid media source ID as parameter, and it returns an object with properties and helper functions:

### isReady

-   Type: `boolean`

True is the media is ready to play. Otherwise, False.
### isPaused

-   Type: `boolean`

True is the media is currently paused. Otherwise, False.

### playgingState

-   Type: `string`

Media playing state: `is-ready`, `is-playing`, `is-paused`.

### duration

-   Type: `integer`

Total duration of the media, in seconds.

### className

-   Type: `string`

Retunrs the `is-media-paused` classname when it's paused. Otherwise, its an empty string.

### play()

-   Type: `function`

Use this helper function to play the media.

### pause()

-   Type: `function`

Use this helper function to pause the media.

### toggle()

-   Type: `function`

Use this helper function to play the media when it's paused, and vice versa.

### setCurrentTime( time )

-   Type: `function`

Use this helper function to set the time position of the media to the given time, in milliseconds.
