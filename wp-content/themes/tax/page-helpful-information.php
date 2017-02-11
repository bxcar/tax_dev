<?php
/**
 * Template Name: helpful-information
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title><?php the_field('helpful_information_page_title_meta') ?></title>
    <meta name="description" content="<?= str_replace("\"", "'", get_field('helpful_information_page_description_meta')); ?>">
    <meta name="keywords" content="<?= str_replace("\"", "'", get_field('helpful_information_page_keywords')); ?>">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Template Basic Images Start -->
    <meta property="og:image" content="<?= get_template_directory_uri();?>/path/to/image.jpg">
    <link rel="shortcut icon" href="<?= get_template_directory_uri();?>/img/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="<?= get_template_directory_uri();?>/img/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?= get_template_directory_uri();?>/img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?= get_template_directory_uri();?>/img/favicon/apple-touch-icon-114x114.png">
    <!-- Template Basic Images End -->

    <!-- Custom Browsers Color Start -->
    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#000">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#000">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#000">
    <style>
        .all-item a {
            color: #424242 !important;
        }

        span.current {
            width: 30px;
            height: 30px;
            margin: 0 5px;
            text-align: center;
            font-size: .75rem;
            font-weight: 400;
            line-height: 30px;
            display: inline-block;
            transition: all ease-in .2s;
            background-color: #3ca04f;
            color: #fff;
        }

        a.page-numbers,
        span.dots {
            width: 30px;
            height: 30px;
            margin: 0 5px;
            text-align: center;
            background-color: #f9fafb;
            color: #424242 !important;
            font-size: .75rem;
            font-weight: 400;
            line-height: 30px;
            display: inline-block;
            transition: all ease-in .2s;
        }

        a.next::before {
            content: url(<?= get_template_directory_uri();?>/img/next-post.png);
        }

        a.prev::before {
            content: url(<?= get_template_directory_uri();?>/img/prev-post.png);
            transform: scale(-1, 1);
        }

        .pagination a:hover,
        .pagination a:focus,
        .pagination a:active {
            background-color: #e1e3e6;
            text-decoration: none;
        }

        .display_cat_arch {
            color: #424242 !important;
            text-decoration: none !important;
            cursor: pointer;
        }

        .archive-year,
        .archive-year-span {
            font-size: .8125rem;
            font-weight: 400;
            line-height: 33px;
            color: #9e9e9e !important;
            cursor: pointer;

        }

        .archive-year-span,
        .archive-month-list {
            margin-left: 10px;
        }

        .archive-month-list a {
            line-height: 27px !important;
        }
    </style>


    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="<?php bloginfo('template_url') ?>/js/animate-cat-arch.js"></script>
    <?php wp_head() ?>
</head>

<body>
<!-- Custom HTML -->
<? get_header() ?>
<!-- Content -->
<main>
    <section class="top-block top-helpful-info">
        <h1 class="page-title"><?php the_field('helpful_information_page_title') ?></h1>
        <div class="breadcrumb">
            <ul class="breadcrumbs">
                <?php if(function_exists('bcn_display_list')) { bcn_display_list(); }?>
            </ul>
        </div>
    </section>
    <section class="blog-layaut">
        <div class="wrap">
            <div class="blog">
                <?php
                $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                $the_query_last_news = query_posts(
                    array(
                        'numberposts' => -1,
                        'post_type' => 'tax_helpful_inf',
                        'posts_per_page' => get_field('helpful_information_page_amount_help_inf_per_page'),
                        'paged' => $paged
                    )
                );

                if (have_posts()) {
                    while (have_posts()) {
                        the_post(); ?>
                        <div class="item">
                        <?php if(get_field('news_image')) { ?>
                            <img class="wow fadeInUp" data-wow-duration="1s" src="<?php the_field('news_image') ?>"
                                 alt="">
                            <?php } ?>
                            <div class="text-info wow fadeInUp" data-wow-duration="1s">
                                <div class="top">
                                    <div class="date">
                                        <span><?php echo get_the_date('j'); ?> <?php echo get_the_date('M'); ?></span>
                                        <span><?php echo get_the_date('Y'); ?></span>
                                    </div>
                                    <div class="blog-title"><?php the_title(); ?></div>
                                </div>
                                <div class="text"><?php the_field('news_quote') ?></div>
                                <div class="sub-info">
                                    <?php

                                    $cur_terms = get_the_terms($post->ID, 'category-helpful-information');
                                    if($cur_terms) {
                                        foreach ($cur_terms as $cur_term) {
                                            echo '<span class="themes">' . $cur_term->name . '</span> ';
                                        }
                                    }
                                    ?>
                                    <span class="view"><?php if (function_exists('get_the_views_custom')) {
                                            echo get_the_views_custom();
                                        } ?></span>
                                    <span class="comment"><?php comments_number_ru(); ?></span>
                                </div>
                                <a href="<?php the_permalink(); ?>">ПОДРОБНЕЕ</a>
                            </div>
                        </div>
                        <?php
                    }
                }
                ?>

                <div class="pagination wow fadeInUp" data-wow-duration="1s">
                    <ul>
                        <?php
                        $args_pagination = array(
                            'show_all' => false, // показаны все страницы участвующие в пагинации
                            'end_size' => 1,     // количество страниц на концах
                            'mid_size' => 1,     // количество страниц вокруг текущей
                            'prev_next' => true,  // выводить ли боковые ссылки "предыдущая/следующая страница".
                            'prev_text' => __(''),
                            'next_text' => __(''),
                            'add_args' => false, // Массив аргументов (переменных запроса), которые нужно добавить к ссылкам.
                            'add_fragment' => '',     // Текст который добавиться ко всем ссылкам.
                            'screen_reader_text' => __('Posts navigation'),
                        );

                        the_posts_pagination($args_pagination);
                        wp_reset_query(); ?>
                    </ul>
                </div>
            </div>
            <?php get_sidebar('custom-with-tags') ?>
        </div>
    </section>
</main>
<!-- End content -->
<? get_footer() ?>
