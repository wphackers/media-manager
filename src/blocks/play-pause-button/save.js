/**
 * WordPress dependencies
 */
 import { useBlockProps } from '@wordpress/block-editor';
 import { __ } from '@wordpress/i18n';
 
 /**
  * Internal dependencies
  */
 import { PlayerPauseIcon, PlayerPlayPauseIcon } from '../../icons';
 
 export default function save() {
	 return (
		 <div { ...useBlockProps.save( { className: 'wp-block-media-manager__item wp-block-media-manager__play-button is-paused' } ) }>
			 	<div className="play-icon icon">
					<PlayerPlayPauseIcon scale={ 1.5 } />
				 </div>
			 	<div className="pause-icon icon">
					<PlayerPauseIcon scale={ 1.5 } />
				</div>
		 </div>
	 );
 }
 