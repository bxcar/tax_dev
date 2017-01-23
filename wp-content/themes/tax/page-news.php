<?php
/**
 * Template Name: news
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title><?php the_field('business_news_page_title_meta') ?></title>
    <meta name="description" content="<?php the_field('business_news_page_description_meta') ?>">
    <meta name="keywords" content="<?php the_field('business_news_page_keywords') ?>">

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
    <style>
        .current-cat a {
            color: #424242 !important;
        }
    </style>
    
    <?php wp_head() ?>
</head>

<body>
<!-- Custom HTML -->
<? get_header() ?>
<!-- Content -->
<main>
    <section class="top-block top-news">
        <h1 class="page-title"><?php the_field('business_news_page_title') ?></h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><span>Новости</span></li>
            </ul>
        </div>
    </section>
    <section class="blog-layaut">
        <div class="wrap">
            <div class="blog">
                <div class="item">
                    <img class="wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/news-1.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">24 <span>окт</span></div>
                            <div class="blog-title">В МИУ планируют снизить размер речных сборов</div>
                        </div>
                        <div class="text">В Министерстве инфраструктуры Украины (МИУ) хотят снизить размер речных сборов и пересмотреть методику их начисления. Об этом идет речь в законопроекте "О внутреннем водном транспорте" №2475а , который планируется подать на рассмотрение в Верховную Раду в середине ноября.</div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="news-vnutr.html">ПОДРОБНЕЕ</a>
                    </div>
                </div>
                <div class="item">
                    <img class=" wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/news-2.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">24 <span>окт</span></div>
                            <div class="blog-title">Бельгия готова подписать соглашение о ЗСТ между Евросоюзом и Канадой</div>
                        </div>
                        <div class="text">В Министерстве инфраструктуры Украины (МИУ) хотят снизить размер речных сборов и пересмотреть методику их начисления. Об этом идет речь в законопроекте "О внутреннем водном транспорте" №2475а , который планируется подать на рассмотрение в Верховную Раду в середине ноября.</div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="news-vnutr.html">ПОДРОБНЕЕ</a>
                    </div>
                </div>
                <div class="item">
                    <img class=" wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/news-3.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">24 <span>окт</span></div>
                            <div class="blog-title">Свободный рынок: США выдавливают у себя импортную сталь</div>
                        </div>
                        <div class="text">В Министерстве инфраструктуры Украины (МИУ) хотят снизить размер речных сборов и пересмотреть методику их начисления. Об этом идет речь в законопроекте "О внутреннем водном транспорте" №2475а , который планируется подать на рассмотрение в Верховную Раду в середине ноября.</div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="news-vnutr.html">ПОДРОБНЕЕ</a>
                    </div>
                </div>
                <div class="item">
                    <img class=" wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/news-4.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">24 <span>окт</span></div>
                            <div class="blog-title">Forbes назвал топ-10 налогоплательщиков Украины</div>
                        </div>
                        <div class="text">В Министерстве инфраструктуры Украины (МИУ) хотят снизить размер речных сборов и пересмотреть методику их начисления. Об этом идет речь в законопроекте "О внутреннем водном транспорте" №2475а , который планируется подать на рассмотрение в Верховную Раду в середине ноября.</div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="news-vnutr.html">ПОДРОБНЕЕ</a>
                    </div>
                </div>
                <div class="item">
                    <img class=" wow fadeInUp" data-wow-duration="1s" src="<?php bloginfo('template_url');?>/img/news-5.jpg" alt="">
                    <div class="text-info wow fadeInUp" data-wow-duration="1s">
                        <div class="top">
                            <div class="date">24 <span>окт</span></div>
                            <div class="blog-title">В Германии бастуют бортпроводники Eurowings и Germanwings</div>
                        </div>
                        <div class="text">В Министерстве инфраструктуры Украины (МИУ) хотят снизить размер речных сборов и пересмотреть методику их начисления. Об этом идет речь в законопроекте "О внутреннем водном транспорте" №2475а , который планируется подать на рассмотрение в Верховную Раду в середине ноября.</div>
                        <div class="sub-info">
                            <span class="author">Автор</span>
                            <span class="themes">Экономика</span>
                            <span class="view">10 просмотров</span>
                            <span class="comment">2 комментария</span>
                        </div>
                        <a href="news-vnutr.html">ПОДРОБНЕЕ</a>
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
<!--            --><?php //get_sidebar('sidebar-custom');?>
            <div class="sidebar">
                <div class="search wow fadeInUp" data-wow-duration="1s">
                    <form  role="search" method="get" id="searchform" action="<?php echo home_url( '/' ) ?>">
                        <input type="text"  value="<?php echo get_search_query() ?>" name="s" id="s"
                               placeholder="Поиск...">
                        <input type="submit" id="searchsubmit">
                    </form>
                </div>
                <div class="category wow fadeInUp" data-wow-duration="1s">
                    <div class="sidebar-title"><?php the_field('business_news_page_title_category') ?></div>
                    <ul>
                        <?php

                        $args = array(
                            'show_option_all'    => '',
                            'show_option_none'   => __('No categories'),
                            'orderby'            => 'name',
                            'order'              => 'DESC',
                            'show_last_update'   => 0,
                            'style'              => 'list',
                            'show_count'         => 0,
                            'hide_empty'         => 0,
                            'use_desc_for_title' => 1,
                            'child_of'           => 0,
                            'feed'               => '',
                            'feed_type'          => '',
                            'feed_image'         => '',
                            'exclude'            => '1',
                            'exclude_tree'       => '',
                            'include'            => '',
                            'hierarchical'       => true,
                            'title_li'           => '',
                            'number'             => NULL,
                            'echo'               => 1,
                            'depth'              => 0,
                            'current_category'   => 5,
                            'pad_counts'         => 0,
                            'taxonomy'           => 'category',
                            'walker'             => 'Walker_Category',
                            'hide_title_if_empty' => false,
                            'separator'          => '<br />',
                        );

                        wp_list_categories( $args );
                        ?>
                    </ul>
                </div>
                <div class="pop-news wow fadeInUp" data-wow-duration="1s">
                    <div class="sidebar-title"><?php the_field('business_news_page_title_popular_news') ?></div>
                    <a href="#" class="item">
                        <img src="<?php bloginfo('template_url');?>/img/p-news-1.jpg" alt="">
                        <p>Власти ухудшили прогноз роста экономики</p>
                        <div class="date">21 октября / Экономика </div>
                    </a>
                    <a href="#" class="item">
                        <img src="<?php bloginfo('template_url');?>/img/p-news-2.jpg" alt="">
                        <p>Прибыль Samsung упала на 30% из-за Galaxy Note 7</p>
                        <div class="date">20 октября / Новости компаний</div>
                    </a>
                    <a href="#" class="item">
                        <img src="<?php bloginfo('template_url');?>/img/p-news-3.jpg" alt="">
                        <p>Торги на биржах США завершились ростом</p>
                        <div class="date">19 октября / Финансы</div>
                    </a>
                </div>
                <div class="archive wow fadeInUp" data-wow-duration="1s">
                    <div class="sidebar-title"><?php the_field('business_news_page_title_archive') ?></div>
                    <ul>
                        <li><a href="#">Сентябрь</a></li>
                        <li class="active"><a href="#">Август</a></li>
                        <li><a href="#">Июль</a></li>
                        <li><a href="#">Июнь</a></li>
                        <li><a href="#">Май</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</main>
<!-- End content -->
<? get_footer() ?>