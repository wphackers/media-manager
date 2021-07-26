/**
 * WordPress dependencies
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { SelectControl, Panel, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const defaultSizes = [
	{
		label: __( 'Small', 'media-manager' ),
		slug: 'small',
		value: 1,
	},
	{
		label: __( 'Normal', 'media-manager' ),
		slug: 'normal',
		value: 1.5,
	},
	{
		label: __( 'Medium', 'media-manager' ),
		slug: 'medium',
		value: 2,
	},
	{
		label: __( 'Large', 'media-manager' ),
		slug: 'large',
		value: 2.5,
	},
	{
		label: __( 'Giant', 'media-manager' ),
		slug: 'giant',
		value: 4,
	},
];

export function getSlugBySize( sizes = defaultSizes, size ) {
	return sizes.find( ( option ) => option.value === size )?.slug;
}

export function withSizes( supportProps ) {
	return createHigherOrderComponent(
		( BlockEdit ) => ( props ) => {
			const { attributes, setAttributes } = props;
			const { size } = attributes;

			function setSize( value ) {
				setAttributes( { size: Number( value ) } );
			}

			// Panel title.
			const panelTitle = supportProps.__sectionTitle;
			const selectorTitle = supportProps.__selectorTitle || __( 'Sizes', 'media-manager' );
			const sizes = supportProps?.options ?? defaultSizes;

			return (
				<Fragment>
					<InspectorControls>
						<Panel>
							<PanelBody title={ panelTitle }>
								<SelectControl
									label={ selectorTitle }
									options={ sizes }
									onChange={ setSize }
									value={ size }
								/>
							</PanelBody>
						</Panel>
					</InspectorControls>

					<BlockEdit { ...props } />
				</Fragment>
			);
		},
		'withSizes'
	);
}
