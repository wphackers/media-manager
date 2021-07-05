# Media selector supports

Use the `media-manager/media-selector` key to supports the media selectors component in your blocks.

```es6
import { SUPPORT_MEDIA_SELECTOR } from '../../block-editor/hooks';

registerBlockType( `my-plugin/my-block`, {
	supports: {
		[ SUPPORT_MEDIA_SELECTOR ]: true,
	},
} );
```

## API

### Full support

Setting the support to True will provide full media selector features.

#### insertEmptyBlock

Set the block names that the media selector component will support, or False in case to disable it.

```es6
registerBlockType( `my-plugin/my-block`, {
	supports: {
		[ SUPPORT_MEDIA_SELECTOR ]: {
			insertEmptyBlock: [ 'core/video', 'jetpack/videopress' ],
		},
	},
} );
```
