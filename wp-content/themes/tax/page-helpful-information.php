<?php
/**
 * Template Name: helpful-information
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title>Полезная информация</title>
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
<!-- Header -->
<header class="internal">
    <div class="wrap">
        <div class="left-side">
            <a class="logo" href="<?=home_url();?>"><img src="<?php bloginfo('template_url');?>/img/logo.png" alt=""></a>
            <div class="phone">
                <p><i class="fa fa-phone" aria-hidden="true"></i>+38 (044) 249-72-22</p>
                <a href="#callback-form" class="popUp-btn">Закзазать звонок</a>
                <div class="hidden">
                    <div class="feadback-form" id="callback-form">
                        <div class="form-wrap">
                            <div class="title-form">Заказать обратный звонок</div>
                            <form action="">
                                <input type="text" placeholder="Имя">
                                <input type="email" placeholder="Email">
                                <textarea name="" placeholder="Текст"></textarea>
                                <input type="submit" value="Отправить">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu">
            <?php wp_nav_menu(array('theme_location' => 'menu-1', 'menu_class'=> '', 'container' => 'false')); ?>
        </div>
    </div>
</header>
<!-- End header -->
<!-- Content -->
<main>
    <section class="top-block top-helpful-info">
        <h1 class="page-title">Полезная информация</h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><span>Полезная информация</span></li>
            </ul>
        </div>
    </section>
    <section class="blog-layaut">
        <div class="wrap">
            <div class="blog">
                <div class="item">
                    <img class="wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/helpful-1.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">24 <span>окт</span></div>
                            <div class="blog-title">Гонконг: Новый Закон о Компаниях</div>
                        </div>
                        <div class="text">Отмена Меморандума об учреждении. Меморандум, который был обязателен в соответствии с действующим законодательством, будет отменен. Положения существующего Меморандума компании (например, статья, определяющая цели компании) будут считаться положениями Устава компании, за исключением того, что ...</div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="helpful-information-vnutr.html">ПОДРОБНЕЕ</a>
                    </div>
                </div>
                <div class="item">
                    <img class="wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/helpful-2.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">24 <span>окт</span></div>
                            <div class="blog-title">Регистрация компаний в Канаде</div>
                        </div>
                        <div class="text">На фоне недавнего мирового банковского кризиса и давления Организации экономического сотрудничества и развития на оффшорные юрисдикции, инвесторы развивающегося рынка и организации, занимающиеся минимизацией налогов на имущество, все чаще стремятся найти стабильную и надежную юрисдикцию для ...</div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="helpful-information-vnutr.html">ПОДРОБНЕЕ</a>
                    </div>
                </div>
                <div class="item">
                    <img class="wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/helpful-3.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">24 <span>окт</span></div>
                            <div class="blog-title">Государственная пошлина на Кипре</div>
                        </div>
                        <div class="text">Государственная пошлина для кипрских компаний появилась в 2011 году. Такое решение было принято Парламентом Республики Кипр, как одна из мер по улучшению кипрской экономики, закон вступил в силу в 2012 году, и с этого момента, все компании, зарегистрированные на Кипре должны уплачивать ежегодный сбор за ...</div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="helpful-information-vnutr.html">ПОДРОБНЕЕ</a>
                    </div>
                </div>
                <div class="item">
                    <img class="wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/helpful-4.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">23<span>окт</span></div>
                            <div class="blog-title">Панама: Акции на предъявителя – изъятие из обращения</div>
                        </div>
                        <div class="text">Выпуск акций на предъявителя стал возможен с момента принятия в 1927 году Панамского закона о корпорациях.В отличие от именных акций (которые выдаются на имя физического или юридического лица), в сертификатах акций на предъявителя не указывают данные физического или юридического лица, являющихся ...</div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="helpful-information-vnutr.html">ПОДРОБНЕЕ</a>
                    </div>
                </div>
                <div class="item">
                    <img class="wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/helpful-5.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">01<span>окт</span></div>
                            <div class="blog-title">Морские юридические услуги в Панаме</div>
                        </div>
                        <div class="text">Крупнейший торговый флот в мире (по размещению и вместимости судов) уверенно ходит под панамским флагом. Владельцы огромных судоходных компаний, а также яхт и прогулочных судов, выбирают Панаму для регистрации из-за многочисленных преимуществ в Судовом реестре, которые она предлагает. С помощью ... </div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="helpful-information-vnutr.html">ПОДРОБНЕЕ</a>
                    </div>
                </div>
                <div class="pagination wow fadeInUp" data-wow-duration="1s">
                    <ul>
                        <li><a href="#" class="prev"></a></li>
                        <li class="active"><span class="page-num">1</span></li>
                        <li><a href="#" class="page-num">2</a></li>
                        <li><a href="#" class="page-num">3</a></li>
                        <li><a href="#" class="page-num">4</a></li>
                        <li><a href="#" class="next"></a></li>
                    </ul>
                </div>
            </div>
            <div class="sidebar">
                <div class="search wow fadeInUp" data-wow-duration="1s">
                    <form action="">
                        <input type="text" placeholder="Поиск...">
                        <input type="submit">
                    </form>
                </div>
                <div class="category wow fadeInUp" data-wow-duration="1s">
                    <div class="sidebar-title">Категории</div>
                    <ul>
                        <li><a href="#">Экономика</a></li>
                        <li class="active"><a href="#">Новости компаний</a></li>
                        <li><a href="#">Финансы</a></li>
                        <li><a href="#">Недвижимость</a></li>
                        <li><a href="#">Налоги</a></li>
                        <li><a href="#">Индексы</a></li>
                    </ul>
                </div>
                <div class="tags wow fadeInUp" data-wow-duration="1s">
                    <div class="sidebar-title">Тэги</div>
                    <div class="tag">Новый закон</div>
                    <div class="tag">Полезная информация</div>
                    <div class="tag">Налоги</div>
                    <div class="tag">Финансы</div>
                    <div class="tag">Удобные флаги</div>
                </div>
            </div>
        </div>
    </section>
</main>
<!-- End content -->
<? get_footer() ?>
