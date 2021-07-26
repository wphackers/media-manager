/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Disabled } from '@wordpress/components';
import { PlayPauseButton as Button } from '@media-manager/components';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function PlayPauseEditBlock( {
	mediaSource,
	className,
	isSelected,
} ) {
	return (
		<div { ...useBlockProps() }>
			<Disabled isDisabled={ ! isSelected }>
				<Button
					className={ className }
					isPaused={ mediaSource.isPaused }
					onClick={ mediaSource.toggle }
					disabled={ mediaSource.isNotAvailable }
				/>
			</Disabled>
		</div>
	);
}
