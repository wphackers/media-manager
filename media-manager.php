<?php
/**
 * Plugin Name:     Media Manager
 * Description:     Bind different media sources and with generic blocks with each other.
 * Version:         0.0.1
 * Author:          Damián Suárez (retrofox)
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     media-manager
 *
 * @package         media-manager
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function media_center_media_center_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'media_center_media_center_block_init' );

/*
 * Load frontend scripts only when
 * media-center block is into the content.
 */
function add_frontend_scripts() {
	if ( ! has_block( 'media-manager/media-center' ) ) {
		return;
	}

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
	if ( empty( $block_content) || ! isset( $block['attrs']['mediaSourceId'] ) ) {
		return $block_content;
	}

	// store media source data to the block wrapper element.
	$dom = new DomDocument();
	@$dom->loadHTML( $block_content );
	$elem = $dom->documentElement->childNodes->item( 0 )->childNodes->item( 0 );
	$elem->setAttribute( 'data-media-source-id', $block['attrs']['mediaSourceId'] );
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

add_action( 'init', 'register_media_center_block_category' );

function my_plugin_register_my_patterns() {
	register_block_pattern(
		'media-manager/show-notes',
		array(
			'title'       => __( 'Media video linked to its transcript text', 'media-manager' ),
			'description' => __( 'A media center composition with a video block linked to the transcript text.' ),
			'categories'  => array( 'media', 'media-manager' ),
			'content'     => "<!-- wp:media-manager/media-center {\"align\":\"wide\"} -->\n<div class=\"wp-block-media-manager-media-center alignwide entry-content\"><!-- wp:video {\"align\":\"full\"} -->\n<figure class=\"wp-block-video alignfull\"><video controls src=\"https://videos.files.wordpress.com/f8uj77vB/2020-sotw-compressed_dvd.mp4\"></video></figure>\n<!-- /wp:video -->\n\n<!-- wp:heading {\"textAlign\":\"center\",\"align\":\"full\"} -->\n<h2 class=\"alignfull has-text-align-center\">State of The Word @2020</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#3\" class=\"media-link-format-type\">Had everyone</a> my name is Matt Mullenweg and this is the state of the word, about 17 years ago. <a href=\"#10.667850999999999\" class=\"media-link-format-type\">I co-founded</a> a project known as WordPress alongside a gentleman named Mike Little from the United Kingdom.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#17\" class=\"media-link-format-type\">WordPress</a> is open-source software for creating the Web. <a href=\"#21\" class=\"media-link-format-type\">We like</a> to say it's both free and prices at the same time. But, <a href=\"#24\" class=\"media-link-format-type\">about once a year</a>, the state of the word address, which is, of course, an image to the <a href=\"#28\" class=\"media-link-format-type\">State of the Union that the United States</a> president gives the Congress is something we usually do at our annual WordCamp, United States events.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#38.094559\" class=\"media-link-format-type\">This is once a year event</a> where we bring folks from all over the U.S. together to talk about and create their future versions of WordPress.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote {\"className\":\"is-style-large\"} -->\n<blockquote class=\"wp-block-quote is-style-large\"><p><a href=\"#46\" class=\"media-link-format-type\">Today</a>, as many things are happening this year, we are doing it virtually. So thank you so much for tuning in.</p><cite>Matt Mullenweg</cite></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#52\" class=\"media-link-format-type\">Whether you are a WordPress</a> pro or just kind of curious about our community, we hope that you'll find lots to learn and hopefully inspire you to future action and involvement.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p><a href=\"#63\" class=\"media-link-format-type\">Twenty-Twenty</a> was a very surprising year for us, as I'm sure it was for many.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>...</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:media-manager/media-center -->",
			'keywords'    => array(
				__( 'video', 'media-manager' ),
				__( 'transcription', 'media-manager' ),
			),
		)
	);
}
   
add_action( 'init', 'my_plugin_register_my_patterns' );
