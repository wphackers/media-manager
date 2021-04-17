<?php
/**
 * Plugin Name:     Media Center
 * Description:     Connect different media sources and blocks in general with each other.
 * Version:         0.0.1
 * Author:          Damián Suárez (retrofox)
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     media-center
 *
 * @package         media-center
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function media_center_media_theater_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'media_center_media_theater_block_init' );

function add_frontend_scripts() {
	if ( has_block( 'media-center/media-theater' ) ) {
		$path = plugins_url( 'build/view.js', __FILE__ );
		$build_assets = require_once __DIR__ . '/build/view.asset.php';
	
		wp_enqueue_script(
			'media-center-media-theater',
			$path,
			$build_assets['dependencies'], 
			filemtime( plugin_dir_path( __FILE__ ) . 'build/view.js' ),
			true
		);
	}
}

add_action( 'wp_enqueue_scripts', 'add_frontend_scripts' );