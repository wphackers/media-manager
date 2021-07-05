# useCurrentTime hook

Simple hook to get the current time position to the media source.
It isn't part of [useMediaStore](../use-media-store) with the purpose of dealing with rendering performance issues.

```es6
import { useCurrentTime } from '@media-manager/media-connect';

function MyComponent() {
	const mediaSourceId = '<the-media-store-id-here>';
	const { currentTime, currentTimeFomatted } = useCurrentTime( mediaSourceId );

	return (
		<div>
			{ `Current time position of media is ${ currentTimeFomatted }.` }
			{ `( ${ currentTime }ms )` }
		</div>
	);
}
```

## Props
### currentTime

-   Type: `string`

Current time position of the media source, in millisecons (Integer).

### currentTimeFormatted

-   Type: `string`

Current time position of the media source, in time format (HH:MM:SS).