/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { CustomSelectControl, Panel, PanelBody } from '@wordpress/components';
import {
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

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

export default ( supportProps ) => {
	return createHigherOrderComponent( ( BlockEdit ) => ( props ) => {
		const { attributes, setAttributes } = props;
		const { size } = attributes;
		const scale = getButtonSizseBySlug( size );

		function setSize( { selectedItem } ) {
			if ( ! selectedItem?.slug ) {
				return;
			}
			setAttributes( { size: selectedItem.slug } );
		}

		// Panel title.
		const panelTitle = supportProps.__panelTitle || __( 'Color settings', 'media-manager' );

		// Panel color settings.
		let colorSettings = [];

		// Contrast checker.
		let contrastCheckerProps = {};

		for( const prop in supportProps ) {
			if ( /^__/.test( prop ) ) {
				continue;
			}

			const support = supportProps[ prop ];
			const value = props[ support.propName ]?.color;
			colorSettings.push( {
				label: supportProps[ prop ]?.label,
				value,
				onChange: props[ support.setterName ],
			} );

			if ( supportProps.__contrastChecker ) {
				contrastCheckerProps[ support.style === 'color' ? 'textColor' : support.style ] = value;
			}
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelColorSettings
						title={ panelTitle }
						colorSettings={ colorSettings }
					>
						{ supportProps.__contrastChecker && (
							<ContrastChecker { ...contrastCheckerProps } isLargeText={ false } />
						) }
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

				<BlockEdit { ...props } scale={ scale } />
			</Fragment>
		);
	}, 'withPlayerButtonSettings' );
};
