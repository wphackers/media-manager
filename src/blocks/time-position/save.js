/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save() {
	return (
		<div { ...useBlockProps.save( { className: 'wp-block-media-manager__item' } ) }>
			<div className="time-position-diaplay__wrapper">
				{ __( '00:00', 'media-manager' ) }
			</div>
		</div>
	);
}
