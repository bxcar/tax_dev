<?php
/**
 * Template Name: search-online_world
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title><?php the_field('search_online_world_page_title_meta') ?></title>
    <meta name="description" content="<?php the_field('search_online_world_page_description_meta') ?>">
    <meta name="keywords" content="<?php the_field('search_online_world_page_keywords') ?>">

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
    <!-- Custom Browsers Color End -->
    <?php wp_head() ?>
    <!--<style>
        .list ul input[type=submit] {
            font-size: .8125rem;
            font-weight: 400;
            color: #928f8f;
            -webkit-transition: all ease-in .25s;
            transition: all ease-in .25s;
            padding: 0;
            background: none;
            border: 0;
            outline: none;
            margin-top: 8px;
            margin-bottom: 8px;
            line-height: 18px;
        }

        .list ul input[type=submit]::before {
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #3ca04f;
            border-radius: 50%;
            margin-right: 22px;
            margin-bottom: 2px;
        }

        .list ul input[type=submit]:hover {
            text-decoration: none;
            color: #2c2c2c;
        }
    </style>-->
</head>

<body>

<!-- Custom HTML -->
<? get_header() ?>
<!-- Content -->
<main>
    <section class="top-block search">
        <h1 class="page-title"><?php the_field('search_online_world_page_title') ?></h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><span>Поиск онлайн</span></li>
            </ul>
        </div>
    </section>
    <section class="search-online-list wow fadeInUp" data-wow-duration="1s">
        <div class="wrap">
            <div class="title">Мир</div>
            <div class="search-list">

                <?php $columns_all = get_field('search_online_world_page_search');
                foreach ($columns_all  as $columns_single) {
                    ?>
                    <div class="list">
                        <ul>
                        <?php
                        foreach ($columns_single['serach_online_world_page_search_column'] as $columns_single_country) {
                            ?>
                            <li>
                                <!--<form role="search" method="get" id="searchform" action="<?php /*echo home_url('/') */?>">
                                    <input style="border-radius: 0;" type="hidden"
                                           value="<?/*=$columns_single_country['serach_online_world_page_search_column_punkt']*/?>"
                                           name="s" id="s"
                                           placeholder="Поиск...">
                                    <input type="submit" id="searchsubmit"
                                           value="<?/*=$columns_single_country['serach_online_world_page_search_column_punkt']*/?>">
                                </form>-->
                                <a href="<?= get_home_url()."/?s=".$columns_single_country['serach_online_world_page_search_column_punkt']?>">
                                    <?=$columns_single_country['serach_online_world_page_search_column_punkt']?>
                                </a>
                            </li>
                            <?php
                        }
                        ?>
                        </ul>
                    </div>
                    <?php
                }
                ?>
            </div>
        </div>
    </section>
</main>
<!-- End content -->
<? get_footer() ?>
