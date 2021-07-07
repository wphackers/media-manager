/**
 * WordPress dependencies
 */
import { Popover, Button } from '@wordpress/components';
import { useAnchorRef } from '@wordpress/rich-text';
import { createInterpolateElement } from '@wordpress/element';
import { __, sprintf, _n } from '@wordpress/i18n';
import { MediaPlayerControl } from '@media-manager/components';

/**
 * Internal dependencies
 */
import { settings } from './';

export default function MediaLinkPopover( {
	value,
	hasMultipleTimeformats,
	isActive,
	isMultipleEdition,
	contentRef,
	currentTime,
	mediaSourceId,

	onTimeChange,
	onApplyMultipleFormat,
	onIgnoreMultipleFormat,
} ) {
	const anchorRef = useAnchorRef( {
		ref: contentRef,
		value,
		settings,
	} );

	const showMultipleEdition =
		isMultipleEdition && hasMultipleTimeformats?.length && ! isActive;

	if ( ! ( showMultipleEdition || isActive ) ) {
		return null;
	}

	return (
		<Popover
			anchorRef={ anchorRef }
			position="bottom center"
			focusOnMount={ false }
		>
			<div className="media-link-popover">
				{ showMultipleEdition && (
					<div className="media-link-popover__multiple-styling">
						{ createInterpolateElement(
							sprintf(
								/* translators: %d: number of timeformats found. */
								_n(
									'There was found <strong>%d</strong> time format in the selection.',
									'There were found <strong>%d</strong> time formats in the selection.',
									hasMultipleTimeformats?.length,
									'media-manager'
								),
								hasMultipleTimeformats?.length
							),
							{
								strong: <strong />,
							}
						) }
						<Button
							isSecondary
							isSmall
							onClick={ onApplyMultipleFormat }
						>
							{ __( 'Apply Media Link format', 'media-manager' ) }
						</Button>

						<Button
							isTertiary
							isSmall
							onClick={ onIgnoreMultipleFormat }
						>
							{ __( 'Ignore', 'media-manager' ) }
						</Button>
					</div>
				) }

				{ ! showMultipleEdition && (
					<MediaPlayerControl
						mediaSourceId={ mediaSourceId }
						time={ currentTime }
						onChange={ onTimeChange }
					/>
				) }
			</div>
		</Popover>
	);
}
