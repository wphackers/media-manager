# Media Selector hook

It hooks a function to the `'blocks.registerBlockType` filter to add the `media-manager/media-selector` block support.

## `media-manager/media-selector` block support

Use this support to provide the ability to associate a media source to the block.

```es6
registerBlockType( `my-plugin/my-block`, {
	supports: {
		'media-manager/media-selector': true,
	},
} );
```

#### insertEmptyBlock

Set the block names that the media selector component will support, or False in case to disable it.

```es6
registerBlockType( `my-plugin/my-block`, {
	supports: {
		'media-manager/media-selector': {
			insertEmptyBlock: [ 'core/video', 'jetpack/videopress' ],
		},
	},
} );
```
