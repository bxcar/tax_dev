<?php
/**
 * Template Name: special-offer
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title><?php the_field('special_offers_title_meta') ?></title>
    <meta name="description" content="<?php the_field('special_offers_description_meta') ?>">
    <meta name="keywords" content="<?php the_field('special_offers_keywords_meta') ?>">

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
</head>

<body>

<!-- Custom HTML -->
<? get_header() ?>
<!-- Content -->
<main>
    <section class="top-block special-offer">
        <h1 class="page-title"><?php the_field('special_offers_page_title') ?></h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><span>Специальные предложения</span></li>
            </ul>
        </div>
    </section>
    <section class="offer-block">
        <div class="subtitle wow fadeInUp" data-wow-duration="1s">
            <?php the_field('special_offers_page_up_text') ?>
            </div>
        <div class="wrap">

            <?php $special_offers = get_field('special_offers_page_special_offers');
            foreach ($special_offers as $special_offer) {
                ?>
                <a href="<?=$special_offer['about_project_page_oa_adv_number']?>" class="item wow fadeInUp" data-wow-duration="1s">
                <span class="img-block">
                    <img src="<?=$special_offer['special_offers_offer_image']?>" alt="">
                </span>
                    <span class="text"><?=$special_offer['special_offers_page_offer_title']?></span>
                </a>
                <?php
            }
            ?>
        </div>
    </section>
    <section class="feadback-form order-form">
        <div class="form-wrap wow fadeInUp" data-wow-duration="1s">
            <div class="title-form"><?php the_field('special_offers_page_o_title') ?></div>
            <form action="">
                <input type="text" placeholder="<?php the_field('special_offers_o_placeholder1') ?>">
                <input type="email" placeholder="<?php the_field('special_offers_o_placeholder2') ?>">
                <textarea name="" placeholder="<?php the_field('special_offers_o_placeholder3') ?>"></textarea>
                <input type="submit" value="<?php the_field('special_offers_page_o_button_text') ?>">
            </form>
        </div>
    </section>
    <section class="social-block">
        <div class="wrap wow fadeInUp" data-wow-duration="1s">
            <div class="title"><?php the_field('special_offers_social_title') ?></div>
            <div class="social-link">
                <a href="<?php the_field('social_linckedin_link', 'options') ?>" class="linked"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="<?php the_field('social_instagram_link', 'options') ?>" class="inst"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a class="fb" href="<?php the_field('social_facebook_link', 'options') ?>"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="<?php the_field('social_twitter_link', 'options') ?>" class="tw"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </div>
    </section>
</main>
<!-- End content -->
<? get_footer() ?>
