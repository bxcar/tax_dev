<?php
/**
 * Template Name: search-online
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title>Search online</title>
    <meta name="description" content="">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Template Basic Images Start -->
    <meta property="og:image" content="path/to/image.jpg">
    <link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
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
</head>

<body>

<!-- Custom HTML -->
<? get_header() ?>
<!-- Content -->
<main>
    <section class="top-block search">
        <h1 class="page-title">Поиск онлайн</h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><span>Поиск онлайн</span></li>
            </ul>
        </div>
    </section>
    <section class="search-online">
        <div class="wrap wow fadeInUp" data-wow-duration="1s">
            <a href="" class="item">
                <div class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/search-1.png" alt="">
                </div>
                <p>Проверить компанию?</p>
            </a>
            <a href="" class="item">
                <div class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/search-2.png" alt="">
                </div>
                <p>Мир</p>
            </a>
            <a href="" class="item">
                <div class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/search-3.png" alt="">
                </div>
                <p>США</p>
            </a>
        </div>
    </section>
</main>
<!-- End content -->
<? get_footer() ?>
