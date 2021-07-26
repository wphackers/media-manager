# Sizes hook

It hooks a function to the `'blocks.registerBlockType` filter to add the `media-manager/sizes` block support.

## `media-manager/sizes` block support

Add a sizes support to your block.

### Adding support in the block definition.

```json
{
	"apiVersion": 2,
	"name": "your-plugin/your-block",
	"title": "Your nice block, with sizes support.",
	"category": "layout",
	"supports": {
		"media-manager/sizes": true
	}
}
```

It's possible to set the size options, too:

```json
{
	"apiVersion": 2,
	"name": "your-plugin/your-block",
	"title": "Your nice block, with sizes support.",
	"category": "layout",
	"supports": {
		"media-manager/sizes": {
			"options": [
				{
					"name": "Small",
					"slug": "small",
					"key": "key-small",
					"size": 1
				},
				{
					"name": "Medium",
					"slug": "normal",
					"key": "key-normal",
					"size": 2
				},
				{
					"name": "Large",
					"slug": "large",
					"key": "key-large",
					"size": 3
				}
			]
		}
	}
}
```

### Using in the block edit function context.

```es6
import { getButtonSizeBySlug } from '@media-manager/block-editor-complements';

export default function MyBlockEdit( { attributes } ) {
	const { size } = attributes;

	return (
		<figure { ...useBlockProps() }>
			{ `${ size } is the size, and ${ getButtonSizeBySlug( size ) } is its value.` }
		</figure>
	);
}
```