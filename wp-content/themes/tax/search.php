<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package tax
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title>Поиск</title>
    <meta name="description" content="поиск">
    <meta name="keywords" content="поиск">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">


    <!-- Custom Browsers Color Start -->
    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#000">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#000">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#000">
    <!-- Custom Browsers Color End -->


    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="<?php bloginfo('template_url') ?>/js/animate-cat-arch.js"></script>
    <?php wp_head() ?>
</head>

<body>
<?php
get_header(); ?>

    <section id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

            <?php
            if (have_posts()) : ?>

                <header class="page-header">
<!--                    <h1 class="page-title">--><?php //printf(esc_html__('Search Results for: %s', 'tax'), '<span>' . get_search_query() . '</span>'); ?><!--</h1>-->
                    <h1 class="page-title"><?php printf(esc_html__('Search Results for: %s', 'tax'), '<span>' . '</span>'); ?></h1>
                </header><!-- .page-header -->

                <?php
                /* Start the Loop */
                while (have_posts()) : the_post();

                    /**
                     * Run the loop for the search to output the results.
                     * If you want to overload this in a child theme then include a file
                     * called content-search.php and that will be used instead.
                     */
                    get_template_part('template-parts/content', 'search');

                endwhile;

                the_posts_navigation();

            else :

                get_template_part('template-parts/content', 'none');

            endif; ?>

        </main><!-- #main -->
    </section><!-- #primary -->

<?php
//get_sidebar();
get_footer();

