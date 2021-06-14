Data Management Approach
========================

## A Store to rule them all
The core of media-manager in terms of management data is the Media Store. Any media that want to be exposed to the application API need to pass to it. The overriding step is its registration.

## Blocks data flow
There is not a unique way to flow the data among actors in the application context, which happens when opted for a super flexible way to arrange this kind of structure. That's the other side of the coin.

### Block context

#### Providing media source ID
Some blocks pick and pass the media source ID through the [block context](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-context/). The most relevant instance is the Media Center block.
It allows picking the media source from the UI, to provides it by exposing the `mediaSourceId` context value.

#### Consuming media source ID
Since the media source ID is exposed by some _provider_ blocks, getting this value is quite simple as long as the block is a child of one of these providers.

```es6
export function Edit( { context } ) {
	const { mediaSourceId } = context;
	return (
		<div>
			{ `Current media source ID: ${ mediaSourceId }.` }
		</div>
	);
}
```

### `media-manager/media-selector` support

It's possile to enhance a blok with the Media Selector feature simply setting the `media-manager/media-selector` as true in the block definition.

```es6
registerBlockType( 'my-plugin/my-awesome-media-block, {
	// ...
	supports: {
		'media-manager/media-selector': true,
	},
	// ...
} );
```