/**
 * This hook picks up the media source,
 * at block level, by the following priorities:
 *
 * - block attribute.
 * - block context.
 * - default value in the store admin
 *
 * @param {string} attrName - Attribute name where the source id is stored.
 * @param {Object} props - Block properties.
 * @return {string|null} Media source id when it's defined. Otherwise, null.
 */
export default function useMediaSourceId( attrName, props ) {
	const { attributes, context } = props;

	// Pick up media source ID from attributes.
	if ( attributes?.[ attrName ] ) {
		return attributes[ attrName ];
	}

	// Pick up media source ID from context;
	if ( context?.mediaSourceId ) {
		return context.mediaSourceId;
	}
}
