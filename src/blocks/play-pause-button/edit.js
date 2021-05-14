
/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function PlayPauseEditBlock() {
	return (
		<div { ...useBlockProps() }>
			{ __( 'Play/Pause', 'media-manager' ) }
		</div>
	);
}
