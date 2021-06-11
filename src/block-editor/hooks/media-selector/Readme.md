# Media selector supports

Use the `media-manager/media-selector` key to supports the media selectors component in your blocks.

```es6
registerBlockType( `my-plugin/my-block`, {
	supports: {
		'media-manager/media-selector': true,
	},
} );
```
