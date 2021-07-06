/**
 * WordPress dependencies
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { CustomSelectControl, Panel, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const defaultSizes = [
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
	{
		name: __( 'Giant', 'media-manager' ),
		slug: 'giant',
		key: 'key-giant',
		size: 4,
	},
];

export function getButtonSizeBySlug( slug ) {
	return defaultSizes.find( ( option ) => option.slug === slug )?.size || 1.5;
}

export function withSizes( supportProps ) {
	return createHigherOrderComponent(
		( BlockEdit ) => ( props ) => {
			const { attributes, setAttributes } = props;
			const { size } = attributes;
			const scale = getButtonSizeBySlug( size );

			function setSize( { selectedItem } ) {
				if ( ! selectedItem?.slug ) {
					return;
				}
				setAttributes( { size: selectedItem.slug } );
			}

			// Panel title.
			const panelTitle = supportProps.__sectionTitle;
			const selectorTitle =
				supportProps.__selectorTitle || __( 'Sizes', 'media-manager' );

			return (
				<Fragment>
					<InspectorControls>
						<Panel>
							<PanelBody title={ panelTitle }>
								<CustomSelectControl
									label={ selectorTitle }
									options={ defaultSizes }
									onChange={ setSize }
									value={ defaultSizes.find(
										( option ) => option.slug === size
									) }
								/>
							</PanelBody>
						</Panel>
					</InspectorControls>

					<BlockEdit { ...props } scale={ scale } />
				</Fragment>
			);
		},
		'withSizes'
	);
}
