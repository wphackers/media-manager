/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Disabled } from '@wordpress/components';
import { PauseButton as Button } from '@media-manager/components';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function PlayEditBlock( { mediaSource, scale, className, isSelected } ) {
	return (
		<div { ...useBlockProps() }>
			<Disabled isDisabled={ ! isSelected }>
				<Button
					className={ className }
					scale={ scale }
					onClick={ mediaSource.pause }
					disabled={ mediaSource.isNotAvailable }
				/>
			</Disabled>
		</div>
	);
}
