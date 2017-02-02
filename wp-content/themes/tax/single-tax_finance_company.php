<?php
/**
 * Template Name: tax_finance_company
 */
?>
<?php
// args
$args = array(
    'numberposts' => -1,
    'post_type' => 'tax_finance_company',
    'p' => get_the_ID()
);


// query
$the_query = new WP_Query($args);
if ($the_query->have_posts()):
while ($the_query->have_posts()) :
$the_query->the_post(); ?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title><?php the_field('tax_finance_companies_title_meta') ?></title>
    <meta name="description" content="<?php the_field('tax_finance_companies_description_meta') ?>">
    <meta name="keywords" content="<?php the_field('tax_finance_companies_keywords_meta') ?>">

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
    <? wp_head(); ?>
    <style>
        .content-wrap blockquote {
            background-color: #fcfcfd;
            padding: 40px 40px 38px;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        .content-wrap ul,
        .content-wrap ol {
            margin-bottom: 30px;
            list-style: none;
        }

        .content-wrap strong {
            font-weight: 700;
        }

        .content-wrap li {
            color: #928f8f;
            font-size: .8125rem;
            font-weight: 400;
            line-height: 34px;
        }

        .content-wrap ul li:before {
            content: '';
            width: 6px;
            height: 6px;
            background-color: #3ca04f;
            display: inline-block;
            margin-bottom: 2px;
            margin-right: 23px;
            -webkit-border-radius: 50%;
            border-radius: 50%;
        }

        .content-wrap ul li ol li:before {
            display: none !important;
        }

        .content-wrap ul li ol li {
            list-style-type: decimal !important;
        }

        .content-wrap p {
            font-size: .8125rem;
            font-weight: 400;
            color: #928f8f;
            line-height: 22px;
            padding-bottom: 15px;
        }
    </style>
</head>

<body>
<!-- Custom HTML -->
<?php get_header() ?>
<!-- Content -->
<main>
    <section class="top-block top-finance-companies">
        <h1 class="page-title"><?php the_field('tax_finance_companies_title_page') ?></h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><a href="finance-companies.html">Предложения </a></li>
                <li><span>Финансовык компании</span></li>
            </ul>
        </div>
    </section>
    <section class="fin-companies-info">
        <div class="subtitle wow fadeInUp" data-wow-duration="1s"><?php the_field('tax_finance_companies_title_company') ?></div>
        <div class="fin-companies-img wow fadeInUp" data-wow-duration="1s">
            <img src="<?php the_field('tax_finance_companies_image') ?>" alt="">
            <style>
                .fin-companies-img #pulse-dot {
                    top: -webkit-calc(<?php the_field('tax_finance_companies_image_puls_y_coordinat'); ?>% - 6px);
                    top: calc(<?php the_field('tax_finance_companies_image_puls_y_coordinat'); ?>% - 6px);
                    left: -webkit-calc(<?php the_field('tax_finance_companies_image_puls_x_coordinate'); ?>% - 4px);
                    left: calc(<?php the_field('tax_finance_companies_image_puls_x_coordinate'); ?>% - 4px)
                }
            </style>
            <div id="pulse-dot">
                <div class="dot"></div>
                <div class="pulse"></div>
            </div>
        </div>
        <div class="wrap content-wrap">
                <?php the_content(); ?>
        </div>
    </section>
</main>
<!-- End content -->
<?php get_footer(); ?>

<?php endwhile; ?>
<?php endif; ?>

<?php wp_reset_query();     // Restore global post data stomped by the_post(). ?>
