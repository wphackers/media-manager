const BLOCK_NAME_CORE_VIDEO = 'core/video';
const BLOCK_NAME_CORE_AUDIO = 'core/audio';
const BLOCK_NAME_CORE_PARAGRAPH = 'core/paragraph';
const BLOCK_NAME_CORE_HEADING = 'core/heading';
const BLOCK_NAME_CORE_QUOTE = 'core/quote';

export const EXTENDED_MEDIA_BLOCKS = [
	BLOCK_NAME_CORE_AUDIO,
	BLOCK_NAME_CORE_VIDEO,
];

export const EXTEND_BLOCKS_WITH_MEDIA = [
	BLOCK_NAME_CORE_PARAGRAPH,
	BLOCK_NAME_CORE_HEADING,
	BLOCK_NAME_CORE_QUOTE,
];

export const MEDIA_BLOCKS_ATTRIBUTE_SCHEMA = {
	[ BLOCK_NAME_CORE_VIDEO ]: {
		name: 'src',
		type: 'string',
		domTypeName: 'video',
	},

	[ BLOCK_NAME_CORE_AUDIO ]: {
		name: 'src',
		type: 'string',
		domTypeName: 'audio',
	},
};
