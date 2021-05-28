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
import { getButtonSizseBySlug } from './edit';
 
 export default function save( { attributes } ) {
	 const {
		iconColor,
		customIconColor,
		backgroundColor,
		customBackgroundColor,
		size,
	} = attributes;

	const backgroundColorClass = getColorClassName(
		'background-color',
		backgroundColor
	);

	const iconColorClass = getColorClassName(
		'color',
		iconColor
	);

	const className = classnames(
		'wp-block-media-manager__item',
		'wp-block-media-manager__play-button',
		'is-paused',
		backgroundColorClass,
		iconColorClass,
		`is-${ size }-size`,
	);

	const style = {
		backgroundColor: ! backgroundColorClass ? customBackgroundColor : undefined,
		color: ! iconColorClass ? customIconColor : undefined,
	};

	 return (
		<button { ...useBlockProps.save( { className, style } ) }>
			<div className="play-icon icon">
				<PlayerPlayPauseIcon scale={ getButtonSizseBySlug( size ) } />
			</div>
			<div className="pause-icon icon">
				<PlayerPauseIcon scale={ getButtonSizseBySlug( size ) } />
			</div>
		 </button>
	 );
 }
 