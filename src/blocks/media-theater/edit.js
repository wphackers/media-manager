/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { STORE_ID } from '../../store/constants';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function MediaTheaterEdit() {
	const { mediaSources } = useSelect( select => {
		return {
			mediaSources: select( STORE_ID ).getMediaSources(),
		};
	}, [] );

	return (
		<div { ...useBlockProps() }>
			{ __( 'Media Center – hello from the editor!', 'media-center' ) }
		</div>
	);
}
