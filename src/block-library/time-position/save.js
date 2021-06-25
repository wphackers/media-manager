/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
			<div className="time-position-display__wrapper">
				{ __( '00:00', 'media-manager' ) }
			</div>
		</div>
	);
}
