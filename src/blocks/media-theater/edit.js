/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { Placeholder } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { STORE_ID } from '../../store/constants';
import { MediaTheaterIcon } from '../../icons';

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
			<Placeholder
				icon={ MediaTheaterIcon }
				label={ __( 'Media Theater', 'media-center' ) }
				instructions={ __( 'Select a media source to manage', 'media-center' ) }
			/>
		</div>
	);
}
