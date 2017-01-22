<?php
/**
 * tax functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tax
 */

update_option('siteurl', '192.168.0.98');
update_option('home', '192.168.0.98');

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
        'redirect' => false
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

//[foobar]
/*function foobar_func()
{
    $menu = '';
    $offers = get_field('main_page_so_offers');
    foreach ($offers as $offer) {
//        ob_start();
        */?><!--
        <?php /*$menu .= '<div class="item">'*/?>
        <?php /*$menu .= '<div class="item-wrap">'*/?>
        <?php /*$menu .= '<p>'. $offer['main_page_so_offers_single_offer_text']. '</p>'*/?>
        <?php /*$menu .= '<a href="'. $offer['main_page_so_offers_single_offer_link'] .
            '">ПОДРОБНЕЕ<img src="'. bloginfo('template_url') . '/img/right-arrow.png" alt=""></a>'*/?>
            <?php /*$menu .= '</div>'*/?>
            <?php /*$menu .= '</div>'*/?>
        --><?php
/*//        return ob_get_clean();
    }
    return $menu;
}

add_shortcode('foobar', 'foobar_func');*/

/*function jjj()
{
    $menu =   '<div class="entry-content dishes">';
// check if the repeater field has rows of data
    if( have_rows('menu_sections') ):
        while ( have_rows('menu_sections') ) : the_row();
            // Your loop code
            $menu .= '<h2>' . get_sub_field('section_title') . '</h2>';
            if( have_rows('sections_items') ):
                $menu .= '<table><thead><tr><td class="ja_name">Name</td><td class="ja_description">Description</td><td class="ja_price">Price</td></tr></thead>';
                while ( have_rows('sections_items') ) : the_row();
                    // Your loop code
                    $menu .= '<tr><td>'.the_sub_field('dish_names').'</td><td>'.the_sub_field('dish_description').'</td><td>$ '.the_sub_field('dish_price').'</td></tr>';
                endwhile;
                $menu .= '</table> ';
            else :
                // no rows found
            endif;
        endwhile;
    else :
        // no rows found
    endif;
    $menu .= '</div>';
    // Code
    return $menu;
}*/

function convenience_flag_table() {
    $table = '<div class="table wow fadeInUp" data-wow-duration="1s">
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