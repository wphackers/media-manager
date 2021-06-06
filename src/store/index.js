/**
 * WordPress dependencies
 */
import { createReduxStore, registerStore, register } from '@wordpress/data';

/**
 * Internal dependencies
 */
import storeDefinition from './store-definition';
import { STORE_NAME } from './constants';

// @TODO: check compatibility with old core versions
/*
 * Register the store, considering the API changes.
 * if ( typeof createReduxStore !== 'undefined' ) {
 * 	const store = createReduxStore( STORE_NAME, storeDefinition );
 * 	register( store );
 * } else {
 * 	registerStore( STORE_NAME, storeDefinition );
 * }
 */

export const store = createReduxStore( STORE_NAME, storeDefinition );
register( store );
