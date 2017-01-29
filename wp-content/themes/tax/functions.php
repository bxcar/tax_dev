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
        'name' => esc_html__('Сustom_with_archives', 'tax'),
        'id' => 'custom-with-archives',
        'description' => esc_html__('Add widgets here.', 'tax'),
        'before_widget' => '',
        'after_widget' => '',
        'before_title' => '',
        'after_title' => '',
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

function convenience_flag_table()
{
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
        $table .= '<div class="capital">' . $table_field['single_convenience_flag_table_capital'] . '</div>';
        $table .= '<div class="tax">' . $table_field['single_convenience_flag_table_dues_sum'] . '</div>';
        $table .= '</div>';
    }

    $table .= '</div>';
    return $table;

}

add_shortcode('table', 'convenience_flag_table');

function animation_start()
{
    return '<div class="wow fadeInUp" data-wow-duration="1s">';
}

add_shortcode('animation_start', 'animation_start');

function animation_end()
{
    return '</div>';
}

add_shortcode('animation_end', 'animation_end');

function new_raw()
{
    return '<br>';
}

add_shortcode('r', 'new_raw');


////////////
add_action('admin_menu', 'register_my_custom_menu_page');
function register_my_custom_menu_page()
{
    add_menu_page(
        'custom menu title', 'Контентные разделы', 'manage_options', 'custompage', 'my_custom_menu_page', 'dashicons-format-aside', 21.3
    );
    // Add a second submenu to the custom top-level menu:
    add_submenu_page('custompage', 'Новости', 'Новости', 8, '/edit.php?post_type=tax_news');
    add_submenu_page('custompage', 'Удобные флаги', 'Удобные флаги', 8, '/edit.php?post_type=tax_convenience_flag');
    add_submenu_page('custompage', 'Услуги и сервисы', 'Услуги и сервисы', 8, '/edit.php?post_type=tax_facilities_serv');
    add_submenu_page('custompage', 'Финансовые компании', 'Финансовые компании', 8, '/edit.php?post_type=tax_finance_company');
    add_submenu_page('custompage', 'Полезная информация', 'Полезная информация', 8, '/edit.php?post_type=tax_helpful_inf');
    add_submenu_page('custompage', 'Центры юрисдикций', 'Центры юрисдикций', 8, '/edit.php?post_type=tax_jur_centers');
    add_submenu_page('custompage', 'Услуги и цены', 'Услуги и цены', 8, '/edit.php?post_type=tax_serv_and_price');
    add_submenu_page('custompage', 'Специальные предложения', 'Специальные предложения', 8, '/edit.php?post_type=tax_special_offers');
    remove_submenu_page('custompage', 'custompage');

    add_menu_page(
        'custom taxonomy title', 'Таксономии', 'manage_options', 'customtaxonomies', 'my_custom_taxonomy_page', 'dashicons-list-view', 22.3
    );
    add_submenu_page('customtaxonomies', 'Категории_новости', 'Категории_новости', 8, '/edit-tags.php?taxonomy=customcat_for_tax_news');
//    remove_submenu_page('customtaxonomies','customtaxonomies');
}

function my_custom_menu_page()
{
    echo "<h3>Выберите нужный вам раздел для редактирования, которые отображены слева в подменю данного раздела.</h3>";
}

function my_custom_taxonomy_page()
{
    echo "<h3>Выберите нужный вам раздел для редактирования, которые отображены слева в подменю данного раздела.</h3>";
}


function get_next_posts_link_custom($label = null, $max_page = 0)
{
    global $paged, $wp_query;

    if (!$max_page)
        $max_page = $wp_query->max_num_pages;

    if (!$paged)
        $paged = 1;

    $nextpage = intval($paged) + 1;

    if (null === $label)
        $label = __('Next Page &raquo;');

    if (!is_single() && ($nextpage <= $max_page)) {

        $attr = apply_filters('next_posts_link_attributes', '');

        return next_posts($max_page, false);
    }
}


function get_previous_posts_link_custom($label = null)
{
    global $paged;

    if (null === $label)
        $label = __('&laquo; Previous Page');

    if (!is_single() && $paged > 1) {

        $attr = apply_filters('previous_posts_link_attributes', '');

        return previous_posts(false);
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

add_filter('navigation_markup_template', 'my_navigation_template', 10, 2);
function my_navigation_template($template, $class)
{
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


function my_post_queries($query)
{
    // do not alter the query on wp-admin pages and only alter it if it's the main query
    if (!is_admin() && $query->is_main_query()) {

        // alter the query for the home and category pages

        /* if(is_home()){
             $query->set('posts_per_page', 1);
         }*/

        if (is_category()) {
            $query->set('posts_per_page', get_field('business_news_page_amount_news_per_page', 55));
        }

    }
}

add_action('pre_get_posts', 'my_post_queries');


function object_to_array($data)
{
    if (is_array($data) || is_object($data)) {
        $result = array();
        foreach ($data as $key => $value) {
            $result[$key] = object_to_array($value);
        }
        return $result;
    }
    return $data;
}


//post per page for archives
add_action('pre_get_posts', 'set_posts_per_page');
function set_posts_per_page($query)
{

    global $wp_the_query;

    /* if ( ( ! is_admin() ) && ( $query === $wp_the_query ) && ( $query->is_search() ) ) {
         $query->set( 'posts_per_page', 3 );
     }*/
    /*else*/
    if ((!is_admin()) && ($query === $wp_the_query) && ($query->is_archive())) {
        $query->set('posts_per_page', get_field('business_news_page_amount_news_per_page', 55));
    }

    /*if( is_category() ) {
        $post_type = get_query_var('post_type');
        if($post_type)
            $post_type = $post_type;
        else
            $post_type = array('nav_menu_item', 'post', 'movies'); // don't forget nav_menu_item to allow menus to work!
        $query->set('post_type',$post_type);
        return $query;
    }*/
    // Etc..

    return $query;
}

//custom search
function template_chooser($template)
{
    global $wp_query;
    $post_type = get_query_var('post_type');
    if ($wp_query->is_search && $post_type == 'tax_news') {
        return locate_template('search-tax_news.php');  //  redirect to archive-search.php
    }
    return $template;
}

add_filter('template_include', 'template_chooser');


//List archives by year, then month(work, but I use wp_custom_archive_new)
function wp_custom_archive($post_type_cust = 'post', $args = '')
{
    global $wpdb, $wp_locale;

    $defaults = array(
        'limit' => '',
        'format' => 'html', 'before' => '',
        'after' => '', 'show_post_count' => false,
        'echo' => 1
    );

    $r = wp_parse_args($args, $defaults);
    extract($r, EXTR_SKIP);

    if ('' != $limit) {
        $limit = absint($limit);
        $limit = ' LIMIT ' . $limit;
    }

    // over-ride general date format ? 0 = no: use the date format set in Options, 1 = yes: over-ride
    $archive_date_format_over_ride = 0;

    // options for daily archive (only if you over-ride the general date format)
    $archive_day_date_format = 'Y/m/d';

    // options for weekly archive (only if you over-ride the general date format)
    $archive_week_start_date_format = 'Y/m/d';
    $archive_week_end_date_format = 'Y/m/d';

    if (!$archive_date_format_over_ride) {
        $archive_day_date_format = get_option('date_format');
        $archive_week_start_date_format = get_option('date_format');
        $archive_week_end_date_format = get_option('date_format');
    }

    //filters
    $where = apply_filters('customarchives_where', "WHERE post_type = '$post_type_cust' AND post_status = 'publish'", $r);
    $join = apply_filters('customarchives_join', "", $r);

    $output = '<ul>';

    $query = "SELECT YEAR(post_date) AS `year`, MONTH(post_date) AS `month`, count(ID) as posts FROM $wpdb->posts $join $where GROUP BY YEAR(post_date), MONTH(post_date) ORDER BY post_date DESC $limit";
    $key = md5($query);
    $cache = wp_cache_get('wp_custom_archive', 'general');
    if (!isset($cache[$key])) {
        $arcresults = $wpdb->get_results($query);
        $cache[$key] = $arcresults;
        wp_cache_set('wp_custom_archive', $cache, 'general');
    }
    else {
        $arcresults = $cache[$key];
    }
    if ($arcresults) {
        $afterafter = $after;
        foreach ((array)$arcresults as $arcresult) {
            $url = get_month_link($arcresult->year, $arcresult->month) . '?post_type=' . $post_type_cust;
            $year_url = get_year_link($arcresult->year) . '?post_type=' . $post_type_cust;
            /* translators: 1: month name, 2: 4-digit year */
            $text = sprintf(__('%s'), $wp_locale->get_month($arcresult->month));
            $year_text = sprintf('%d', $arcresult->year);
            if ($show_post_count)
                $after = '&nbsp;(' . $arcresult->posts . ')' . $afterafter;
            $year_output = get_archives_link($year_url, $year_text, $format, $before, $after);
            $output .= ($arcresult->year != $temp_year) ? $year_output : '';
            $output .= get_archives_link($url, $text, $format, $before, $after);

            $temp_year = $arcresult->year;
        }
    }

    $output .= '</ul>';

    if ($echo)
        echo $output;
    else
        return $output;
}

//   /List archives by year, then month(work, but I use wp_custom_archive_new)


//another function for custom display archives
function wp_custom_archive_new($post_type_cust = 'post')
{
    global $wpdb;
    $year_prev = null;
    $months = $wpdb->get_results("SELECT DISTINCT MONTH( post_date ) AS month ,
								YEAR( post_date ) AS year,
								COUNT( id ) as post_count FROM $wpdb->posts
								WHERE post_status = 'publish' and post_date <= now( )
								and post_type = '$post_type_cust'
								GROUP BY month , year
								ORDER BY post_date DESC");
    foreach ($months as $month) :
        $year_current = $month->year;
        if ($year_current != $year_prev) {
            if ($year_prev != null) {
                ?>
                </ul>
            <?php } ?>
            <a href="<?= get_home_url() . '/' . $month->year . '?post_type=' . $post_type_cust ?>"
               class="archive-year"><?php echo $month->year; ?></a><br>

            <div id="archive-by-month" class="archive-year-span">
                <span>(по месяцам)</span>
                <img id="transform-right-arrow-arch-by-month"
                     src="<?php bloginfo('template_url') ?>/img/right-arrow.png">
            </div>

            <ul class="archive-month-list" class="archive-list" id="archive-by-month-block-hidden" style="display: none;">
        <?php }
        $monthes = array(
            1 => 'Январь', 2 => 'Февраль', 3 => 'Март', 4 => 'Апрель',
            5 => 'Май', 6 => 'Июнь', 7 => 'Июль', 8 => 'Август',
            9 => 'Сентябрь', 10 => 'Октябрь', 11 => 'Ноябрь', 12 => 'Декабрь'
        );
        ?>
        <li>
            <a href="<?php bloginfo('url') ?>/<?php echo $month->year; ?>/<?php echo date("m", mktime(0, 0, 0, $month->month, 1, $month->year)) . '?post_type=' . $post_type_cust ?>">
                <span
                    class="archive-month"><?php echo $monthes[date("n", mktime(0, 0, 0, $month->month, 1, $month->year))] ?></span>
                <!--            <span class="archive-count">--><?php //echo $month->post_count;
                ?><!--</span>-->
            </a>
        </li>
        <?php $year_prev = $year_current;
    endforeach; ?>
    </ul>
    <?php
}

//c
function mytheme_comment($comment, $args, $depth)
{
    $GLOBALS['comment'] = $comment;
    //var_dump($comment);
    if($comment->comment_parent) {
        switch ($comment->comment_type) :
            case '' :
                ?>
                <li <?php comment_class('comment answer'); ?> id="li-comment-<?php comment_ID() ?>">
                    <div class="comment-wrap" id="comment-<?php comment_ID(); ?>">
                        <div class="user-img">
                            <?php echo get_avatar($comment->comment_author_email, $args['avatar_size']); ?>
                        </div>

                        <?php comment_reply_link(array_merge($args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>

                        <?php printf(__('<cite class="fn name">%s</cite>'), get_comment_author_link()) ?>

                        <div class="date"><?php printf(__('%1$s'), get_comment_date('j F Y'), '') ?></div>

                        <?php comment_text() ?>
                        <?php //edit_comment_link(__('Редактировать'), ' ');
                        ?>

                        <?php if ($comment->comment_approved == '0') : ?>
                            <div
                                class="comment-awaiting-verification"><?php _e('Your comment is awaiting moderation.') ?></div>
                            <br/>
                        <?php endif; ?>
                    </div>
                </li>

                <?php
                break;
            case 'pingback'  :
            case 'trackback' :
                ?>
                <li class="post pingback">
                <?php comment_author_link(); ?>
                <?php edit_comment_link(__('Редактировать'), ' '); ?>
                <?php
                break;
        endswitch;
    }

    else {
        switch ($comment->comment_type) :
            case '' :
                ?>
                <li <?php comment_class('comment'); ?> id="li-comment-<?php comment_ID() ?>">
                    <div class="comment-wrap" id="comment-<?php comment_ID(); ?>">
                        <div class="user-img">
                            <?php echo get_avatar($comment->comment_author_email, $args['avatar_size']); ?>
                        </div>

                        <?php comment_reply_link(array_merge($args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>

                        <?php printf(__('<cite class="fn name">%s</cite>'), get_comment_author_link()) ?>

                        <div class="date"><?php printf(__('%1$s'), get_comment_date('j F Y'), '') ?></div>

                        <?php comment_text() ?>
                        <?php //edit_comment_link(__('Редактировать'), ' ');
                        ?>

                        <?php if ($comment->comment_approved == '0') : ?>
                            <div
                                class="comment-awaiting-verification"><?php _e('Your comment is awaiting moderation.') ?></div>
                            <br/>
                        <?php endif; ?>
                    </div>
                </li>

                <?php
                break;
            case 'pingback'  :
            case 'trackback' :
                ?>
                <li class="post pingback">
                <?php comment_author_link(); ?>
                <?php edit_comment_link(__('Редактировать'), ' '); ?>
                <?php
                break;
        endswitch;
    }
}

add_filter('comment_reply_link', 'replace_reply_link_class');

//comment form button
function awesome_comment_form_submit_button($button) {
    $button =
        '<input name="submit" type="submit" class="form-submit" tabindex="5" id="[args:id_submit]" value="Отправить" />' .
        get_comment_id_fields();
    return $button;
}
add_filter('comment_form_submit_button', 'awesome_comment_form_submit_button');



// add a new default avatar to the list in WordPress admin   ---I use plugin instead bottom code--
/*function mytheme_addgravatar( $avatar_defaults ) {
    $myavatar = get_bloginfo('template_directory') . '/img/user-default.jpg';
//    $myavatar = 'http://front.dizz.in.ua/tax/img/user-default.jpg';
    $avatar_defaults[$myavatar] = 'New Default Gravatar';
    return $avatar_defaults;
}
add_filter( 'avatar_defaults', 'mytheme_addgravatar' );*/



// THIS MUST BE DELETED ON REAL HOST
/*add_filter( 'get_avatar', 'so_14088040_localhost_avatar', 10, 5 );

function so_14088040_localhost_avatar( $avatar, $id_or_email, $size, $default, $alt )
{
    $whitelist = array( 'localhost', '192.168.0.98' );

    if( !in_array( $_SERVER['SERVER_ADDR'] , $whitelist ) )
        return $avatar;

    $doc = new DOMDocument;
    $doc->loadHTML( $avatar );
    $imgs = $doc->getElementsByTagName('img');
    if ( $imgs->length > 0 )
    {
        $url = urldecode( $imgs->item(0)->getAttribute('src') );
        $url2 = explode( 'd=', $url );
        $url3 = explode( '&', $url2[1] );
        $avatar= "<img src='{$url3[0]}' alt='' class='avatar avatar-64 photo' height='64' width='64' />";
    }

    return $avatar;
}*/

//     /THIS MUST BE DELETED ON REAL HOST

// /add a new default avatar to the list in WordPress admin


function replace_reply_link_class($class)
{
    $class = str_replace("class='comment-reply-link", "class='answer-link", $class);
    return $class;
}

add_filter('comment_text', 'stefan_wrap_comment_text', 1000);

function stefan_wrap_comment_text($class)
{
    $class = str_replace("<p>", "<div class='text'>", $class);
    $class = str_replace("</p>", "</div>", $class);
    return $class;
}

/**
 * Функция возвращает окончание для множественного числа слова на основании числа и массива окончаний
 * @param  $number int Число на основе которого нужно сформировать окончание
 * @param  $ending_arr  array Массив слов с правильными окончаниями для чисел (1, 2, 5),
 *         например array('комментарий', 'комментария', 'комментариев')
 * @return string
 */
function get_num_ending($number, $ending_arr)
{
    $number = $number % 100;
    if ($number >= 11 && $number <= 19) {
        $ending = $ending_arr[2];
    }
    else {
        $i = $number % 10;
        switch ($i) {
            case (1):
                $ending = $ending_arr[0];
                break;
            case (2):
            case (3):
            case (4):
                $ending = $ending_arr[1];
                break;
            default:
                $ending = $ending_arr[2];
        }
    }
    return $ending;
}

/**
 * Фильтр к стандартной функции WordPress comments_number()
 * Возвращает строку с количеством комментариев к статье
 * с правильными окончаниями слова "комментарий" (1 комментарий, 2 комментария, 5 комментариев)
 */
function comments_number_ru()
{
    global $id;
    $number = get_comments_number($id);

    if ($number == 0) {
        $output = 'Комментариев нет';
    }
    else {
        $output = '(' . $number . ') ' . get_num_ending($number, array('комментарий', 'комментария', 'комментариев'));
    }
    echo $output;
}

add_filter('comments_number', 'comments_number_ru');