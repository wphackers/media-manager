# Connect supports

Use the `media-manager/connect` key to supports media manager connection with your blocks.

```es6
registerBlockType( `my-plugin/my-block`, {
	supports: {
		'media-manager/connect': true,
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
		'media-manager/connect': true,
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
