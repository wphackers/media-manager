
/**
 * Internal dependencies
 */

import { EXTENDED_BLOCKS } from './extended-blocks';

export function shouldExtendBlock( name ) {
	return EXTENDED_BLOCKS.indexOf( name ) >= 0;
}
