<?php
/**
 * Plugin Name:     Media Manager
 * Description:     The lord of the media. A WordPress plugin to rule them all media..
 * Version:         0.0.1
 * Author:          Damián Suárez (retrofox)
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     media-manager
 *
 * @package         media-manager
 */

function media_center_media_center_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'media_center_media_center_block_init' );

/*
 * Load frontend scripts.
 */
function add_frontend_scripts() {
	$path = plugins_url( 'build/view.js', __FILE__ );
	$build_assets = require_once __DIR__ . '/build/view.asset.php';

	wp_enqueue_script(
		'media-manager-media-center',
		$path,
		$build_assets['dependencies'], 
		filemtime( plugin_dir_path( __FILE__ ) . 'build/view.js' ),
		true
	);
}

add_action( 'wp_enqueue_scripts', 'add_frontend_scripts' );

/*
 * Wrap media elements with media manager data.
 */
function media_center_wrap_media_source( $block_content, $block ) {
	if (
		empty( $block_content ) ||
		! (
			isset( $block['attrs']['mediaSourceId'] ) ||
			isset( $block['attrs']['mediaSourceReferenceId'] )
		)
	) {
		return $block_content;
	}
	
	$dom = new DomDocument();
	@$dom->loadHTML( $block_content );
	$elem = $dom->documentElement->childNodes->item( 0 )->childNodes->item( 0 );

	// Provider blocks: store media source reference.
	if ( isset( $block['attrs']['mediaSourceId'] ) ) {
		$elem->setAttribute( 'data-media-source-id', $block['attrs']['mediaSourceId'] );
	}

	// Consumer blocks: store media source reference.
	if ( isset( $block['attrs']['mediaSourceReferenceId'] ) ) {
		$elem->setAttribute( 'data-media-source-reference', $block['attrs']['mediaSourceReferenceId'] );
	}

	$elem->setAttribute( 'data-media-source-type', $block['blockName'] );
	return $dom->saveHTML();
}

add_filter( 'render_block', 'media_center_wrap_media_source', 10, 2 );

function register_media_center_block_category() {
	if ( class_exists( 'WP_Block_Patterns_Registry' ) ) {

		register_block_pattern_category(
			'media-manager',
			array( 'label' => _x( 'Media Manager', 'Block pattern category', 'media-manager' ) )
		);
	}
}
