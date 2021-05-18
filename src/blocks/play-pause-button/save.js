/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
 import { useBlockProps, getColorClassName } from '@wordpress/block-editor';
 import { __ } from '@wordpress/i18n';
 
 /**
  * Internal dependencies
  */
 import { PlayerPauseIcon, PlayerPlayPauseIcon } from '../../icons';
 
 export default function save( { attributes } ) {
	 const {
		textColor,
		customTextColor,
		backgroundColor,
		customBackgroundColor,
	} = attributes;

	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const textColorClass = getColorClassName(
		'text-color',
		textColor
	);

	const className = classnames(
		'wp-block-media-manager__item',
		'wp-block-media-manager__play-button',
		'is-paused',
		backgroundColorClass,
		textColorClass
	);

	const style = {
		backgroundColor: ! backgroundColorClass ? customBackgroundColor : undefined,
		textColor: ! textColorClass ? customTextColor : undefined,
	};

	 return (
		<button { ...useBlockProps.save( { className, style } ) }>
			<div className="play-icon icon">
				<PlayerPlayPauseIcon scale={ 1.5 } />
				</div>
			<div className="pause-icon icon">
				<PlayerPauseIcon scale={ 1.5 } />
			</div>
		 </button>
	 );
 }
 