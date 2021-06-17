useMediaStore hook
==================

Uae this hook to get properties and helpers to interact with the media, from the store.

```es6
import useMediaStore from '../../components/hooks/use-media-store';

function MyComponent() {
	const mediaSourceId = '<the-media-store-id-here>';
	const { isPaused, play } = useMediaStore( mediaSourceId );

	return (
		<div>
			{ `The media is ${ isPaused ? 'paused' : 'playing' }.` }
			<Button onClick={ play }>Play media!</Button>
		</div>
	);
}
```
