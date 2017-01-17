<?php
/**
 * Template Name: services
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title>Услуги и цены</title>
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
    <section class="top-block top-services">
        <h1 class="page-title">Услуги и цены</h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><span>Услуги и цены</span></li>
            </ul>
        </div>
    </section>
    <section class="services-page">
        <div class="title">Услуги</div>
        <div class="wrap wow fadeInUp" data-wow-duration="1s">
            <a href="service-vnutr.html" class="item">
                <div class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/services-1.png" alt="">
                </div>
                <p>Оффшорные компании</p>
            </a>
            <a href="service-vnutr.html" class="item">
                <div class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/services-2.png" alt="">
                </div>
                <p>Европейские компании</p>
            </a>
            <a href="service-vnutr.html" class="item">
                <div class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/services-3.png" alt="">
                </div>
                <p>Компании США и Канады</p>
            </a>
        </div>
    </section>
    <section class="footnote wow fadeInUp" data-wow-duration="1s">
            <p>Информация в этом разделе не является предложением о продаже или предложением в приобретении услуг и предоставленна только в ознокомительных целях. Использование информации в любой юрисдикции, где это запрещено законом, может повлечь за собой преследование по соответствующим статьям существующего законодательства. Консультации предоставляются нерезидентам Украины или выезжающим за рубеж.</p>
    </section>
    <section class="feadback-form flags-form">
        <div class="form-wrap wow fadeInUp" data-wow-duration="1s">
            <div class="title-form">Получить консультацию</div>
            <form action="">
                <input type="text" placeholder="Имя">
                <input type="email" placeholder="Email">
                <textarea name="" placeholder="Текст"></textarea>
                <input type="submit" value="Отправить">
            </form>
        </div>
    </section>
    <section class="facilities-services-block wow fadeInUp" data-wow-duration="1s">
        <div class="title">Услуги и сервисы</div>
        <div class="wrap">
            <a href="facilities-services-vnutr.html" class="item">
                <span class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/f-services-1.png" alt="">
                </span>
                <span class="text">Регистрация торговых марок <br> и получение штрих кодов</span>
            </a>
            <a href="facilities-services-vnutr.html" class="item">
                <span class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/f-services-2.png" alt="">
                </span>
                <span class="text">Получение <br> Сертификата происхождения <br> в Великобритании</span>
            </a>
            <a href="facilities-services-vnutr.html" class="item">
                <span class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/f-services-3.png" alt="">
                </span>
                <span class="text">Консультации<br> по счетам Paypal</span>
            </a>
            <a href="facilities-services-vnutr.html" class="item">
                <span class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/f-services-4.png" alt="">
                </span>
                <span class="text">Получения<br> номера EORI</span>
            </a>
            <a href="facilities-services-vnutr.html" class="item">
                <span class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/f-services-5.png" alt="">
                </span>
                <span class="text">Аккредитация<br> представительства<br> в Украине</span>
            </a>
            <a href="#" class="item">
                <span class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/f-services-6.png" alt="">
                </span>
                <span class="text">Помощь специалиста по <br> сервису VAT в Европе</span>
            </a>
            <a href="facilities-services-vnutr.html" class="item">
                <span class="img-block">
                    <img src="<?php bloginfo('template_url');?>/img/f-services-7.png" alt="">
                </span>
                <span class="text">Консультации по счетам<br> Interactive Brokers</span>
            </a>
        </div>
    </section>
</main>
<!-- End content -->
<? get_footer() ?>