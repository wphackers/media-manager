/**
 * External dependencies
 */

import { values } from 'lodash';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { Placeholder, Panel, Button, Toolbar } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { STORE_ID, MEDIA_NOT_DEFINED } from '../../store/constants';
import { MediaCenterIcon } from '../../icons';
import MediaSelector, { MediaItemPanelBody } from '../../components/media-selector/';

const MEDIA_CENTER_TEMPLATE = [
	[
		'core/paragraph',
		{
			placeholder: __(
				'Type / to choose a block, from your couch!',
				'media-manager'
			),
		},
	],
];

/**
 * Internal dependencies
 */
import './editor.scss';

export default function MediaCenterEdit( { attributes, setAttributes } ) {
	const { sourceId } = attributes;
	const [ isReplacing, setIsReplacing ] = useState( false );

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

	if ( ! sourceId || isReplacing ) {
		return (
			<div { ...useBlockProps() }>
				<Placeholder
					icon={ MediaCenterIcon }
					label={ __( 'Media Center', 'media-manager' ) }
					instructions={ __(
						'Manage all media sources, comfortable, from your couch.',
						'media-manager'
					) }
				>
					<MediaSelector
						media={ values( mediaSources ) }
						onMediaSelect={ ( id ) => {
							setSourceId( id );
							setIsReplacing( false );
						} }
					/>

					{ isReplacing && (
						<Button
							isSecondary
							label={ __( 'Cancel replacing media source', 'media-manager' ) }
							onClick={ () => setIsReplacing( false ) }
						>
							{ __( 'Cancel replacement', 'media-manager' ) }
						</Button>
					) }

					{ ! isReplacing && (
						<Button
							isSecondary
							label={ __( 'Continue without media source', 'media-manager' ) }
							onClick={ () => setSourceId( MEDIA_NOT_DEFINED ) }
						>
							{ __( 'Skip', 'media-manager' ) }
						</Button>
					) }
				</Placeholder>
			</div>
		);
	}

	return (
		<>
			<BlockControls>
				<Toolbar>
					<Button onClick={ () => setIsReplacing( sourceId ) }>
						{ __( 'Replace', 'media-manager' ) }
					</Button>
				</Toolbar>
			</BlockControls>

			<InspectorControls>
				<Panel>
					<MediaItemPanelBody
						source={ mediaSource }
						onReplace={ setIsReplacing }
					/>
				</Panel>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks template={ MEDIA_CENTER_TEMPLATE } />
			</div>
		</>
	);
}
