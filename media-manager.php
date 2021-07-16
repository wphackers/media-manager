<?php
/**
 * Plugin Name:     Block Editor Media Manager
 * Description:     The lord of the media. A WordPress plugin to rule them all media..
 * Version:         0.0.1
 * Author:          Damián Suárez (retrofox)
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     media-manager
 *
 * @package         media-manager
 */

namespace FancyBlocks\MediaManager;

// Tip: define functions prefixing with fbmm -> Fancy Blocks Media Manager :smart:.

/*
 * Load frontend scripts.
 */
add_action( 'init', function () {
	$asset_file   = __DIR__ . '/build/index.asset.php';
	$asset        = file_exists( $asset_file ) ? require_once $asset_file : null;
	$dependencies = isset( $asset['dependencies'] ) ? $asset['dependencies'] : [];
	$version      = isset( $asset['version'] ) ? $asset['version'] : filemtime( __DIR__ . '/build/index.js' );
	
	// Block editor scripts.
	wp_register_script(
		'fancy-blocks/media-manager',
		plugins_url( 'build/index.js', __FILE__ ),
		$dependencies,
		$version,
		true
	);

	// Block editor style.
	wp_register_style(
		'fancy-blocks/media-manager',
		plugins_url( 'build/index.css', __FILE__ ),
		[],
		filemtime( __DIR__ . '/build/index.css' )
	);

	// Block front-end style.
	wp_register_style(
		'fancy-blocks/media-manager-front-end',
		plugins_url( 'build/style-index.css', __FILE__ ),
		[],
		filemtime( __DIR__ . '/build/style-index.css' )
	);

	$blocks_folder = __DIR__ . '/src/block-library/';

	register_block_type_from_metadata( $blocks_folder .'media-center' );
	register_block_type_from_metadata( $blocks_folder .'media-player' );
	register_block_type_from_metadata( $blocks_folder .'pause-button' );
	register_block_type_from_metadata( $blocks_folder .'play-button' );
	register_block_type_from_metadata( $blocks_folder .'play-pause-button' );
	register_block_type_from_metadata( $blocks_folder .'time-position' );
} );

/*
 * Load frontend scripts.
 */
function fbmm_add_frontend_scripts() {
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

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\fbmm_add_frontend_scripts' );

/*
 * Wrap media elements with media manager data.
 */
function fbmm_media_center_wrap_media_source( $block_content, $block ) {
	if (
		empty( $block_content ) ||
		! (
			isset( $block['attrs']['mediaSourceId'] ) ||
			isset( $block['attrs']['mediaSourceReferenceId'] )
		)
	) {
		return $block_content;
	}
	
	$dom = new \DomDocument();
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

add_filter( 'render_block', __NAMESPACE__ . '\fbmm_media_center_wrap_media_source', 10, 2 );

function fbmm_register_media_center_block_category() {
	if ( class_exists( 'WP_Block_Patterns_Registry' ) ) {

		register_block_pattern_category(
			'media-manager',
			array( 'label' => _x( 'Media Manager', 'Block pattern category', 'media-manager' ) )
		);
	}
}

add_action( 'init', __NAMESPACE__ . '\fbmm_register_media_center_block_category' );