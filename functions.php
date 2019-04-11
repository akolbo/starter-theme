<?php
/**
 * Timber starter-theme
 * https://github.com/timber/starter-theme
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
	});

	add_filter('template_include', function( $template ) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});

	return;
}

/**
 * Sets the directories (inside your theme) to find .twig files
 */
Timber::$dirname = array( 'templates', 'views' );

/**
 * By default, Timber does NOT autoescape values. Want to enable Twig's autoescape?
 * No prob! Just set this value to true
 */
Timber::$autoescape = false;


/**
 * We're going to configure our theme inside of a subclass of Timber\Site
 * You can move this to its own file and include here via php's include("MySite.php")
 */
class StarterSite extends Timber\Site {
	/** Add timber support. */
	public function __construct() {
		add_action( 'after_setup_theme', array( $this, 'theme_supports' ) );
		add_filter( 'timber/context', array( $this, 'add_to_context' ) );
		add_filter( 'timber/twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}
	/** This is where you can register custom post types. */
	public function register_post_types() {

	}
	/** This is where you can register custom taxonomies. */
	public function register_taxonomies() {

	}

	/** This is where you add some context
	 *
	 * @param string $context context['this'] Being the Twig's {{ this }}.
	 */
	public function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::context();';
		$context['menu'] = new Timber\Menu();
		$context['site'] = $this;

	
	
	
	
		/** CUSTOM contexts go here */

		/**  Site Logo */

			/* WordPress Variables  */
			$custom_logo_id = get_theme_mod( 'custom_logo' );
			$custom_logo_url = wp_get_attachment_image_url( $custom_logo_id , 'full' );
			$custom_logo_url_src = wp_get_attachment_image_src( 'custom_logo_src' );

			/* Corresponding Twig Handles for WP Variables (above) */
			$context['custom_logo_id'] = $custom_logo_id;
			$context['custom_logo_url'] = $custom_logo_url;
			$context['custom_logo_url_src'] = $custom_logo_url_src;
			/* Here in order to use the twig handle {{custom_logo}} in .twig files in the form of 
			*  alt="{{ Image(custom_logo).alt }}" 
			*  Otherwise, use {{custom_logo_id}} and {{custom_logo_url}} for use with 
			webp images and sourceset the handles below  
			*/
			$context['custom_logo'] = get_custom_logo();
		
			
		/** Custom Post Type Context Support */

			/* Add the property to the array called 'clients'.  
			* Inside the array parenthesis you can use the standard type of query that you'd send to 
			* wp_query or WordPress' own get_posts function
			*/
			$context['clients'] = Timber::get_posts(array('post_type' => 'client'));
			$context['services'] = Timber::get_posts(array('post_type' => 'service'));
		


		return $context;
	}

	public function theme_supports() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5', array(
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 *
		 * See: https://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats', array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
				'gallery',
				'audio',
			)
		);

		add_theme_support( 'menus' );

		/*
		* Enable support for Custom Logo.
		*
		* See: https://developer.wordpress.org/themes/functionality/custom-logo/
		*/
		add_theme_support( 'custom-logo' );

		/*
		* This Allows us to add #asyncload to the end of the javascript script path so that it loads asyncroneosly. Notes below by AK
		See: https://stackoverflow.com/questions/18944027/how-do-i-defer-or-async-this-wordpress-javascript-snippet-to-load-lastly-for-fas
		And: https://matthewhorne.me/defer-async-wordpress-scripts/
		*/

		/*
		* First, enqueue the scripts
		*/
		function my_assets() {
			//wp_enqueue_style( 'theme-style', get_stylesheet_uri(), array( 'reset' ) );
			//wp_enqueue_style( 'reset', get_stylesheet_directory_uri() . '/reset.css' );							
			wp_enqueue_style( 'minified-css', get_stylesheet_directory_uri() . '/style.css');
			wp_enqueue_style( 'fonts', get_stylesheet_directory_uri() . '/fonts_css/fonts.css');

			wp_enqueue_script( 'minified-javascript', get_stylesheet_directory_uri() . '/scripts.min.js','',2,true );
			// Lazyload - Class .lazy is defined in in custom.js
			wp_enqueue_script( 'lazyload', 'https://cdn.jsdelivr.net/npm/vanilla-lazyload@11.0.5/dist/lazyload.min.js','',2,true ); 
			wp_enqueue_script( 'require', 'https://cdn.jsdelivr.net/npm/requirejs@2.3.6/bin/r.min.js','',2,true ); 
		}


	/*
	* Second, add the handle to either the defer or async function below. In this case the handle = minified-javascript
	*/
		function add_defer_attribute($tag, $handle) {
			// add script handles to the array below
			$scripts_to_defer = array('my_handle_goes_here'); //<---replace 'my-js-handle' with the handle inside wp_enqueue_script. Add multiple handles separated by commas
			
			foreach($scripts_to_defer as $defer_script) {
			   if ($defer_script === $handle) {
				  return str_replace(' src', ' defer="defer" src', $tag);
			   }
			}
			return $tag;
		 }			 		
					
		function add_async_attribute($tag, $handle) {
			// add script handles to the array below
			$scripts_to_async = array(['minified-css','fonts','minified-javascript','lazyload','require']); //<---replace 'my-js-handle' with the handle inside wp_enqueue_script. Add multiple handles separated by commas
			
			foreach($scripts_to_async as $async_script) {
			   if ($async_script === $handle) {
				  return str_replace(' src', ' async="async" src', $tag);
			   }
			}
			return $tag;
		 }

	/*
	* Third, run 'async' or 'defer' filters (or both)
	*/			 
		 add_filter('script_loader_tag', 'add_async_attribute', 10, 2);
		 add_filter('script_loader_tag', 'add_defer_attribute', 10, 2);	
	
	 /*
	* Fourth, add action that runs the filtered enqueued script
	*/
		 add_action( 'wp_enqueue_scripts', 'my_assets' );		

	}

	/** This Would return 'foo bar!'.
	 *
	 * @param string $text being 'foo', then returned 'foo bar!'.
	 */
	public function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	/** This is where you can add your own functions to twig.
	 *
	 * @param string $twig get extension.
	 */
	public function add_to_twig( $twig ) {
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter( new Twig_SimpleFilter( 'myfoo', array( $this, 'myfoo' ) ) );
		return $twig;
	}

}

new StarterSite();
