/**
 * External dependencies
 */
 import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	withColors,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { CustomSelectControl, Panel, PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { STORE_ID, STATE_PAUSED } from '../../store/constants';
import { PlayPauseButton } from '../../components/media-player';
import './editor.scss';

const buttonSizes = [
	{
		name: __( 'Small', 'media-manager' ),
		slug: 'small',
		key: 'key-small',
		size: 1,
	},
	{
		name: __( 'Normal', 'media-manager' ),
		slug: 'normal',
		key: 'key-normal',
		size: 1.5,
	},
	{
		name: __( 'Medium', 'media-manager' ),
		slug: 'medium',
		key: 'key-medium',
		size: 2,
	},
	{
		name: __( 'Large', 'media-manager' ),
		slug: 'large',
		key: 'key-large',
		size: 2.5,
	},
];

export function getButtonSizseBySlug( slug ) {
	return buttonSizes.find( option => option.slug === slug )?.size || 1.5
}

function PlayPauseEditBlock( {
	context,
	iconColor,
	setIconColor,
	backgroundColor,
	setBackgroundColor,
	attributes,
	setAttributes,
} ) {
	const sourceId = context.mediaSourceId;
	const { size } = attributes;

	function setSize( { selectedItem } ) {
		if ( ! selectedItem?.slug ) {
			return;
		}
		setAttributes( { size: selectedItem.slug } );
	}

	const className = classnames( 'wp-block-media-manager__item', {
		[ backgroundColor.class ]: backgroundColor.class,
		'has-background': !! backgroundColor.color,
		'has-text-color': !! iconColor.color,
	} );

	const style = {
		backgroundColor: backgroundColor.color,
		color: iconColor.color,
	};

	const blockProps = useBlockProps( { style, className } );

	const mediaPlayingState = useSelect(
		( select ) => ( select( STORE_ID ).getMediaPlayerState( sourceId ) ),
		[ sourceId ]
	);

	const { toggleMediaSource } = useDispatch( STORE_ID );

	return (
		<Fragment>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color', 'media-manager' ) }
					colorSettings={ [
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __( 'Icon color', 'media-manager' ), // <- confusing, same.
						},
						{
							value: iconColor.color,
							onChange: setIconColor,
							label: __( 'Background color', 'media-manager' ), // <- confusing, indeed.
						},
					] }
				>
					<ContrastChecker
						{ ...{
							backgroundColor: backgroundColor.color,
							color: iconColor.color,
						} }
						isLargeText={ false }
					/>
				</PanelColorSettings>

				<Panel>
					<PanelBody>
						<CustomSelectControl
							label={ __( 'Button size', 'media-manager' ) }
							options={ buttonSizes }
							onChange={ setSize }
							value={ buttonSizes.find( option => option.slug === size ) }
						/>
					</PanelBody>
				</Panel>

			</InspectorControls>

			<div { ...blockProps }>
				<PlayPauseButton
					className={ `is-${ size }-size` }
					isPaused= { mediaPlayingState === STATE_PAUSED }
					scale={ getButtonSizseBySlug( size ) }
					onClick={ () => toggleMediaSource( sourceId ) }
				/>
			</div>
		</Fragment>
	);
}

export default withColors( {
	iconColor: 'color',
	backgroundColor: 'background-color',
} )( PlayPauseEditBlock );
