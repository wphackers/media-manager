/**
 * External dependencies
 */

import { values } from 'lodash';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { Placeholder, Panel, PanelBody } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { STORE_ID } from '../../store/constants';
import { MediaTheaterIcon } from '../../icons';
import MediaSelector, { MediaItem } from '../../components/media-selector/';
import { MediaPlayerControl } from '../../components/media-link-format-type/media-link-popover';

const MEDIA_THEATER_TEMPLATE = [
	[
		'core/paragraph',
		{
			placeholder: __(
				'Type / to choose a block, from your couch!',
				'media-center'
			),
		},
	],
];

/**
 * Internal dependencies
 */
import './editor.scss';

export default function MediaTheaterEdit( { attributes, setAttributes } ) {
	const { sourceId } = attributes;

	const { mediaSources } = useSelect( ( select ) => {
		return {
			mediaSources: select( STORE_ID ).getMediaSources(),
		};
	}, [] );

	const { mediaSource } = useSelect( ( select ) => {
		return {
			mediaSource: select( STORE_ID ).getMediaSourceById( sourceId )
		};
	}, [ sourceId ] );

	const setSourceId = ( sourceId ) => setAttributes( { sourceId } );

	if ( ! sourceId ) {
		return (
			<div { ...useBlockProps() }>
				<Placeholder
					icon={ MediaTheaterIcon }
					label={ __( 'Media Theater', 'media-center' ) }
					instructions={ __(
						'Manage all media sources, comfortable, from your couch.',
						'media-center'
					) }
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
		<>
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'Media Source', 'media-center' ) }>
						{ mediaSource && (
							<>
								<MediaItem
									type={ mediaSource.elementType }
									source={ mediaSource.source }
									id={ mediaSource.id }
									onItemSelect={ console.log }
								/>
								<MediaPlayerControl
									sourceId={ sourceId }
								/>
							</>
						) }

						{ ! mediaSource && (
							<MediaSelector
								media={ values( mediaSources ) }
								onMediaSelect={ setSourceId }
							/>
						) }
					</PanelBody>
				</Panel>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks template={ MEDIA_THEATER_TEMPLATE } />
			</div>
		</>
	);
}
