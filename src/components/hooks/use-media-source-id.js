/**
 * Internal dependencies
 */
import { mediaConsumerBlockAttributeName } from '../../block-editor/hooks/media-selector';

/**
 * This hook picks up the media source,
 * at block level, by the following priorities:
 *
 * - block attribute.
 * - block context.
 * - default value in the store admin
 *
 * @returns {string|null} media source id
 */
export default function useMediaSourceId( props ) {
	const { attributes, context } = props;

	// Pick up media source ID from attributes.
	if ( attributes?.[ mediaConsumerBlockAttributeName ] ) {
		return attributes[ mediaConsumerBlockAttributeName ];
	}

	// Pick up media source ID from context;
	if ( context?.mediaSourceId ) {
		return context.mediaSourceId;
	}

	return;
}
