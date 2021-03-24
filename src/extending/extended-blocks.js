
const BLOCK_NAME_CORE_VIDEO = 'core/video';
const BLOCK_NAME_CORE_AUDIO = 'core/audio';

export const EXTENDED_BLOCKS = [
	BLOCK_NAME_CORE_AUDIO,
	BLOCK_NAME_CORE_VIDEO,
];

export const BLOCKS_ATTRIBUTE_SCHEMA = {
	[ BLOCK_NAME_CORE_VIDEO ]: {
		name: 'src',
		type: 'string',
	},

	[ BLOCK_NAME_CORE_AUDIO ]: {
		name: 'src',
		type: 'string',
	},
};
