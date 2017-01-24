<?php
/**
 * tax functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tax
 */

/*update_option('siteurl', '192.168.0.98');
update_option('home', '192.168.0.98');*/

if (!function_exists('tax_setup')) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function tax_setup()
    {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on tax, use a find and replace
         * to change 'tax' to the name of your theme in all the template files.
         */
        load_theme_textdomain('tax', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(array(
            'menu-1' => esc_html__('Primary', 'tax'),
            'menu-2' => esc_html__('Offers', 'tax'),
            'menu-3' => esc_html__('News', 'tax'),
        ));

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));

        // Set up the WordPress core custom background feature.
        add_theme_support('custom-background', apply_filters('tax_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        )));

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');
    }
endif;
add_action('after_setup_theme', 'tax_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function tax_content_width()
{
    $GLOBALS['content_width'] = apply_filters('tax_content_width', 640);
}

add_action('after_setup_theme', 'tax_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function tax_widgets_init()
{
    register_sidebar(array(
        'name' => esc_html__('Sidebar', 'tax'),
        'id' => 'sidebar-1',
        'description' => esc_html__('Add widgets here.', 'tax'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));

    register_sidebar(array(
        'name' => esc_html__('Sidebar_custom', 'tax'),
        'id' => 'sidebar-custom',
        'description' => esc_html__('Add widgets here.', 'tax'),
        'before_widget' => '<div class="wow fadeInUp" data-wow-duration="1s">',
        'after_widget' => '</div>',
        'before_title' => '<div class="sidebar-title">',
        'after_title' => '</div>',
    ));
}

add_action('widgets_init', 'tax_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function tax_scripts()
{
    wp_enqueue_style('tax-style', get_stylesheet_uri());
    wp_enqueue_style('fonts.min', get_template_directory_uri() . '/css/fonts.min.css');
    wp_enqueue_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.css');
    wp_enqueue_style('custom', get_template_directory_uri() . '/css/custom.css');
    wp_enqueue_style('main.min', get_template_directory_uri() . '/css/main.min.css');

    wp_enqueue_script('tax-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true);
    wp_enqueue_script('lib.min', get_template_directory_uri() . '/js/lib.min.js');
    wp_enqueue_script('common', get_template_directory_uri() . '/js/common.js');
    wp_enqueue_script('custom', get_template_directory_uri() . '/js/custom.js');

    wp_enqueue_script('tax-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'tax_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

if (function_exists('acf_add_options_page')) {

    acf_add_options_page(array(
        'page_title' => 'Общие настройки сайта',
        'menu_title' => 'Общие настройки',
        'menu_slug' => 'theme-general-settings',
        'capability' => 'manage_options',
        'redirect' => true
    ));

    acf_add_options_sub_page(array(
        'page_title' => 'Настройки заголовка сайта(кроме главной)',
        'menu_title' => 'Хедер(кроме главной)',
        'menu_slug' => 'header',
        'parent_slug' => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title' => 'Настройки подвала сайта',
        'menu_title' => 'Футер',
        'menu_slug' => 'footer',
        'parent_slug' => 'theme-general-settings',
    ));

    acf_add_options_sub_page(array(
        'page_title' => 'Настройки ссылок соцсетей',
        'menu_title' => 'Ссылки на соцсети',
        'menu_slug' => 'socials',
        'parent_slug' => 'theme-general-settings',
    ));
}

function convenience_flag_table() {
    $table = '<script>
                    window.onload = function() {
                        var replaced_element = document.getElementsByClassName("capital");
                        var replaced_element_2 = document.getElementsByClassName("tax");
                        for(var i = 0; i < replaced_element.length; i++)
                        {
                            replaced_element[i].innerHTML =replaced_element[i].innerHTML.replace(new RegExp("до",\'g\'),"<span>до</span>");
                            replaced_element_2[i].innerHTML =replaced_element_2[i].innerHTML.replace(new RegExp("до",\'g\'),"<span>до</span>");
                            
                            replaced_element[i].innerHTML =replaced_element[i].innerHTML.replace(new RegExp("более",\'g\'),"<span>более</span>");
                            replaced_element_2[i].innerHTML =replaced_element_2[i].innerHTML.replace(new RegExp("более",\'g\'),"<span>более</span>");
                            
                            replaced_element[i].innerHTML =replaced_element[i].innerHTML.replace(new RegExp("от",\'g\'),"<span>от</span>");
                            replaced_element_2[i].innerHTML =replaced_element_2[i].innerHTML.replace(new RegExp("от",\'g\'),"<span>от</span>");
                           
                            replaced_element[i].innerHTML =replaced_element[i].innerHTML.replace(new RegExp("USD",\'g\'),"<span>USD</span>");
                            replaced_element_2[i].innerHTML =replaced_element_2[i].innerHTML.replace(new RegExp("USD",\'g\'),"<span>USD</span>");
                           
                            replaced_element[i].innerHTML =replaced_element[i].innerHTML.replace(new RegExp("грн.",\'g\'),"<span>грн.</span>");
                            replaced_element_2[i].innerHTML =replaced_element_2[i].innerHTML.replace(new RegExp("грн.",\'g\'),"<span>грн.</span>");
                            
                            replaced_element[i].innerHTML =replaced_element[i].innerHTML.replace(new RegExp("грн",\'g\'),"<span>грн</span>");
                            replaced_element_2[i].innerHTML =replaced_element_2[i].innerHTML.replace(new RegExp("грн",\'g\'),"<span>грн</span>");
                            
                            replaced_element[i].innerHTML =replaced_element[i].innerHTML.replace(new RegExp("EUR",\'g\'),"<span>EUR</span>");
                            replaced_element_2[i].innerHTML =replaced_element_2[i].innerHTML.replace(new RegExp("EUR",\'g\'),"<span>EUR</span>");
                        }
                    }
              </script>
    <div class="table wow fadeInUp" data-wow-duration="1s">
                <div class="top row">
                    <div class="capital">Капитал</div>
                    <div class="tax">Сумма ежегодного сбора</div>
                </div>';

    $table_fields = get_field('single_convenience_flag_table');
    foreach ($table_fields as $table_field) {
            $table .= '<div class="row">';
            $table .= '<div class="capital">'.$table_field['single_convenience_flag_table_capital']. '</div>';
            $table .= '<div class="tax">'.$table_field['single_convenience_flag_table_dues_sum']. '</div>';
            $table .= '</div>';
    }

    $table .= '</div>';
    return $table;

}

add_shortcode('table', 'convenience_flag_table');

function animation_start () {
    return '<div class="wow fadeInUp" data-wow-duration="1s">';
}

add_shortcode('animation_start', 'animation_start');

function animation_end () {
    return '</div>';
}

add_shortcode('animation_end', 'animation_end');

function new_raw () {
    return '<br>';
}

add_shortcode('r', 'new_raw');


////////////
add_action( 'admin_menu', 'register_my_custom_menu_page' );
function register_my_custom_menu_page(){
    add_menu_page(
        'custom menu title', 'Контентные разделы', 'manage_options', 'custompage', 'my_custom_menu_page', 'dashicons-format-aside', 21.3
    );
    // Add a second submenu to the custom top-level menu:
    add_submenu_page('custompage', 'Новости', 'Новости', 8, '/edit.php?post_type=tax_news');
    add_submenu_page('custompage', 'Удобные флаги', 'Удобные флаги', 8, '/edit.php?post_type=tax_convenience_flag');
    add_submenu_page('custompage', 'Услуги и сервисы', 'Услуги и сервисы', 8, '/edit.php?post_type=tax_facilities_serv');
    remove_submenu_page('custompage','custompage');
}

function my_custom_menu_page(){
    echo "<h3>Выберите нужный вам раздел для редактирования, которые отображены слева в подменю данного раздела.</h3>";
}



function get_next_posts_link_custom( $label = null, $max_page = 0 ) {
    global $paged, $wp_query;

    if ( !$max_page )
        $max_page = $wp_query->max_num_pages;

    if ( !$paged )
        $paged = 1;

    $nextpage = intval($paged) + 1;

    if ( null === $label )
        $label = __( 'Next Page &raquo;' );

    if ( !is_single() && ( $nextpage <= $max_page ) ) {

        $attr = apply_filters( 'next_posts_link_attributes', '' );

        return next_posts( $max_page, false );
    }
}


function get_previous_posts_link_custom( $label = null ) {
    global $paged;

    if ( null === $label )
        $label = __( '&laquo; Previous Page' );

    if ( !is_single() && $paged > 1 ) {
        
        $attr = apply_filters( 'previous_posts_link_attributes', '' );
        
        return previous_posts( false );
    }
}


/*
function paginate_links_func($atts='') {
    global $WP_Views;
    $page = $WP_Views->get_current_page_number();
    if (!isset($page)){
        $page = 0;
    }
    $add_args = $_GET;
    if (!is_array($add_args)) {
        $add_args = array();
    }
    if (!array_key_exists('wpv_view_count', $add_args)) {
        $add_args['wpv_view_count'] = $WP_Views->get_view_count();
    }
    if (array_key_exists('wpv_paged', $add_args)) {
        unset($add_args['wpv_paged']);
    }
    $args = array(
        'base' => '%_%',
        'format' => '?wpv_view_count='.$add_args['wpv_view_count'].'&wpv_paged=%#%',
        'total' => $WP_Views->get_max_pages(),
        'current' => $page,
        'show_all' => False,
        'end_size' => 1,
        'mid_size' => 2,
        'prev_next' => True,
        'prev_text' => __('Â" Previous','ec'),
        'next_text' => __('Next Â"','ec'),
        'type' => 'list',
        'add_args' => $add_args,
        'add_fragment' => false
    );
    return paginate_links($args);
}*/

/*next_posts_link( 'Older Entries', $the_query_last_news->max_num_pages );
previous_posts_link( 'Newer Entries' );*/
//                    next_posts_link('Older Entries');
//                    previous_posts_link('Newer Entries');
//posts_nav_link();
//echo paginate_links_func();

add_filter('navigation_markup_template', 'my_navigation_template', 10, 2 );
function my_navigation_template( $template, $class ){
    /*
    Вид базового шаблона:
    <nav class="navigation %1$s" role="navigation">
        <h2 class="screen-reader-text">%2$s</h2>
        <div class="nav-links">%3$s</div>
    </nav>
    */

    return '
	<nav class="navigation %1$s" role="navigation">
		<div class="nav-links">%3$s</div>
	</nav>    
	';
}