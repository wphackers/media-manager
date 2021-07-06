/**
 * WordPress dependencies
 */
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import {
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export function withMediaManagerColors( supportProps ) {
	return createHigherOrderComponent(
		( BlockEdit ) => ( props ) => {
			// Panel title.
			const panelTitle =
				supportProps.__sectionTitle ||
				__( 'Color settings', 'media-manager' );

			// Panel color settings.
			const colorSettings = [];

			// Contrast checker.
			const contrastCheckerProps = {};

			for ( const prop in supportProps ) {
				if ( /^__/.test( prop ) ) {
					continue;
				}

				const support = supportProps[ prop ];
				const value = props[ support.attributeName ]?.color;
				colorSettings.push( {
					label: supportProps[ prop ]?.label,
					value,
					onChange: props[ support.setterAttributeName ],
				} );

				if ( supportProps.__contrastChecker ) {
					contrastCheckerProps[
						support.style === 'color'
							? 'textColor'
							: 'backgroundColor'
					] = value;
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
								<ContrastChecker
									{ ...contrastCheckerProps }
									isLargeText={ false }
								/>
							) }
						</PanelColorSettings>
					</InspectorControls>

					<BlockEdit { ...props } />
				</Fragment>
			);
		},
		'withMediaManagerColors'
	);
}
