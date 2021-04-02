/**
 * External dependencies
 */

import { values } from 'lodash';
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
import MediaSelector from '../../components/media-selector/';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function MediaTheaterEdit( { attributes, setAttributes } ) {
	const { mediaSources } = useSelect( select => {
		return {
			mediaSources: select( STORE_ID ).getMediaSources(),
		};
	}, [] );

	const { sourceId } = attributes;
	const setSourceId = ( sourceId ) => setAttributes( { sourceId } );

	if ( ! sourceId ) {
		return (
			<div { ...useBlockProps() }>
				<Placeholder
					icon={ MediaTheaterIcon }
					label={ __( 'Media Theater', 'media-center' ) }
					instructions={ __( 'Manage all media sources, comfortable, from your couch.', 'media-center' ) }
				>
						<MediaSelector
							media={ values( mediaSources ) }
							onMediaSelect={ setSourceId }
						/>
				</Placeholder>
			</div>
		);
	}

	return (
		<div { ...useBlockProps() }>
		</div>
	);
}
