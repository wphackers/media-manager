# Connect supports

Connect implements a way to connect media with certain blocks/components. For this purpose, Connect exposes two support: `Connect Provider` and `Connect Consumer`.

## Connect Provider

Use the `media-manager/connect-provider` support to define the block as a media provider.
It will try to inspect and connect it to the media source store (@media-mannager/connect lib).

In this way, every time that the block is inserted in the editor, it will register a new media ready to be consumed.

When registering the block, it requires defining the attribute `name` where the media source is defined. Also, it requires defining the DOM type name that the media gets when rendered.

* **name**: the attribute name which contains a reference to the media source
* **domTypeName**: the name of the DOM type, for instance `video`, `audio`.

```es6
// Add media connect provider to the `my-awesome-video` block.
registerBlockType( `my-plugin/my-awesome-video`, {
	supports: {
		'media-manager/connect-provider': {
			name: 'src',
			domTypeName: 'video',
		},
	},
} );
```

For third-party blocks, you can extend them using the `blocks.registerBlockType` filter:

```es6
// Set `core/video` as media provider.
addFilter(
	'blocks.registerBlockType',
	'media-manager/set-block-as-media-provider',
	function( settings, name ) {
		if ( name !== 'core/video' ) ) {
			return settings;
		}

		return {
			...settings,
			supports: {
				...settings.support,
				'media-manager/connect-provider': {
					name: 'src',
					domTypeName: 'video',
				},
			}
		}
	}
);
```

## Connect Consumer

Use the `media-manager/connect-consumer` support to provide to the block a way to consume a media source.

```es6
registerBlockType( `my-plugin/my-block`, {
	supports: {
		'media-manager/connect-consumer': true,
	},
} );
```

### Block edit function

Blocks with media manager connect support will be populated with the following props:

#### isPaused

True if the media source is paused. Otherwise, False. :smart:

```es6
registerBlockType( `my-plugin/my-block`, {
	supports: {
		'media-manager/connect-consumer': true,
	},
	edit: function( { mediaSource } ) {
		return (
			<div>
				{ `The media is currently ${ mediaSource.isPaused ? 'paused' : 'playing' }` }
			</div>
		)
	}
} );
```

#### currentTime

#### className

It adds `is-media-paused` CSS class depending on its playing status (paused/playing).

#### play()

Play the media source.

#### pause()

Pause the media source.

#### toggle()

Toggle the media source.
