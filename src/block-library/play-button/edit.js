/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Disabled } from '@wordpress/components';
import { PlayButton as Button } from '@media-manager/components';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function PlayEditBlock( { mediaSource, className, isSelected } ) {
	return (
		<div { ...useBlockProps() }>
			<Disabled isDisabled={ ! isSelected }>
				<Button
					className={ className }
					onClick={ mediaSource.play }
					disabled={ mediaSource.isNotAvailable }
				/>
			</Disabled>
		</div>
	);
}
