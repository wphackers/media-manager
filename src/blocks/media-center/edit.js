/**
 * External dependencies
 */

import { values } from 'lodash';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { Placeholder, Panel, Button, Toolbar } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';
import { useState, useCallback } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';

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

const useInsertMediaBlock = () => {
	const { insertBlock } = useDispatch( blockEditorStore );

	return useCallback( async ( blockType = 'core/video', clientId, index = 0 ) => {
		const mediaBlock = await createBlock( blockType );
		await insertBlock( mediaBlock, index, clientId, false );
	}, [ insertBlock ] );
};

export default function MediaCenterEdit( {
	attributes,
	setAttributes,
	clientId,
} ) {
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
	const insertMediaBlock = useInsertMediaBlock();

	function insertMedia( type ) {
		setSourceId( MEDIA_NOT_DEFINED );
		setIsReplacing( false );
		insertMediaBlock( type, clientId )
	}

	if ( isReplacing || ! sourceId ) {
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

					<Button
						isSecondary
						label={ __( 'Continue adding a video block', 'media-manager' ) }
						onClick={ () => insertMedia( 'core/video' ) }
					>
						{ __( 'Start with Video block', 'media-manager' ) }
					</Button>

					<Button
						isSecondary
						label={ __( 'Continue adding a audio block', 'media-manager' ) }
						onClick={ () => insertMedia( 'core/audio' ) }
					>
						{ __( 'Start with an Audio block', 'media-manager' ) }
					</Button>

					{ ( isReplacing && sourceId !== MEDIA_NOT_DEFINED ) && (
						<Button
							isTertiary
							label={ __( 'Cancel replacing media source', 'media-manager' ) }
							onClick={ () => setIsReplacing( false ) }
						>
							{ __( 'Cancel replacement', 'media-manager' ) }
						</Button>
					) }

					{ ( ! isReplacing || sourceId === MEDIA_NOT_DEFINED ) && (
						<Button
							isTertiary
							label={ __( 'Continue without media source', 'media-manager' ) }
							onClick={ () => {
								setIsReplacing( false );
								setSourceId( MEDIA_NOT_DEFINED );
							} }
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
					<Button onClick={ () => setIsReplacing( true ) }>
						{
							( sourceId !== MEDIA_NOT_DEFINED )
								? __( 'Replace', 'media-manager' )
								: __( 'Link', 'media-manager' )
						}
					</Button>
				</Toolbar>
			</BlockControls>

			<InspectorControls>
				<Panel>
					<MediaItemPanelBody
						source={ mediaSource }
						mediaSourceId={ sourceId }
						onReplace={ setIsReplacing }
						onUnlink={ () => setSourceId( null ) }
					/>
				</Panel>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks template={ MEDIA_CENTER_TEMPLATE } />
			</div>
		</>
	);
}
