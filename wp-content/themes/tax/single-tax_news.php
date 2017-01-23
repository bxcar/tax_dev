<?php
/**
 * Template Name: tax_news
 */
?>
<?php
// args
$args = array(
    'numberposts' => -1,
    'post_type' => 'tax_news',
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
    <title><?php the_field('news_page_title_meta'); ?></title>

    <meta name="description" content="<?php the_field('news_page_description_meta'); ?>">
    <meta name="keywords" content="<?php the_field('news_page_keywords_meta'); ?>">

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
        .news-content blockquote {
            background-color: #fcfcfd;
            padding: 40px 40px 38px;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        .news-content ul,
        .news-content ol {
            margin-bottom: 30px;
            list-style: none;
        }

        .news-content strong {
            color: #424242;
            font-size: .9375rem;
            font-weight: 700;
            line-height: 26px;
            padding: 10px 0;
            font-family: georgia, sans-serif;
        }

        .news-content li {
            color: #928f8f;
            font-size: .8125rem;
            font-weight: 400;
            line-height: 34px;
        }

        .news-content li:before {
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
    </style>
    <?php wp_head() ?>
</head>

<body>
<!-- Custom HTML -->
<? get_header() ?>
<!-- Content -->
<main>
    <section class="top-block top-news">
        <h1 class="page-title"><?php the_field('news_page_title'); ?></h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="<?php home_url(); ?>">Главная</a></li>
                <li><span>Новости</span></li>
            </ul>
        </div>
    </section>
    <section class="blog-layaut">
        <div class="wrap">
            <div class="blog">
                <div class="item">
                    <img class="wow fadeInUp" data-wow-duration="1s"
                         src="<?php the_field('news_image'); ?>" alt="">
                    <div class="text-info">
                        <div class="top wow fadeInUp" data-wow-duration="1s">
                            <div class="date"><?php echo get_the_date('j'); ?> <span><?php echo get_the_date('M'); ?></span></div>
                            <div class="blog-title">
                                <?php the_title(); ?>
                            </div>
                        </div>

                        <div class="text wow fadeInUp news-content" data-wow-duration="1s">
                            <?php the_content(); ?>
                        </div>
                    </div>
                </div>
                <div class="social-block wow fadeInUp" data-wow-duration="1s">
                    <div class="author-thema"><?php the_field('news_author') ?> / Экономика</div>
                    <div class="share">
                        <div class="share-title">Поделиться:</div>
                        <div class="link">
                            <a href="<?php the_field('social_facebook_link', 'options') ?>"><i class="fa fa-facebook"
                                                                                               aria-hidden="true"></i></a>
                            <a href="<?php the_field('social_google_link', 'options') ?>"><i class="fa fa-google-plus"
                                                                                             aria-hidden="true"></i></a>
                            <a href="<?php the_field('news_social_twitter_link', 'options') ?>"><i class="fa fa-twitter"
                                                                                                   aria-hidden="true"></i></a>
                            <a href="<?php the_field('news_social_vk_link', 'options') ?>"><i class="fa fa-vk"
                                                                                              aria-hidden="true"></i></a>
                            <a href="<?php the_field('news_social_linckedin_link', 'options') ?>"><i
                                    class="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div class="prev-next-post wow fadeInUp" data-wow-duration="1s">
                    <a href="" class="prev">Предыдущая новость</a>
                    <a href="" class="next">Следующая новость</a>
                </div>
                <div class="news-front more-news wow fadeInUp" data-wow-duration="1s">
                    <div class="title"><?php the_field('news_list_title') ?></div>
                    <div class="wrap">
                        <div class="owl-carousel carousel-2">
                            <?php
                            $args_last_news = array(
                                'numberposts' => -1,
                                'post_type' => 'tax_news',
                                'posts_per_page' => 4
                            );

                            // query
                            $the_query_last_news = new WP_Query($args_last_news);
                            if ($the_query_last_news->have_posts()) {
                                while ($the_query_last_news->have_posts()) {
                                    $the_query_last_news->the_post(); ?>
                                    <div class="item">
                                        <div class="item-wrap">
                                            <div class="date"><?= get_the_date('j F Y') ?></div>
                                            <p><?php the_title(); ?></p>
                                            <a href="<?php the_permalink(); ?>"></a>
                                        </div>
                                    </div>
                                <?php }
                            } ?>
                        </div>
                    </div>
                </div>
                <div class="comment-block wow fadeInUp" data-wow-duration="1s">
                    <div class="title"><?php the_field('news_comment_title') ?></div>
                    <div class="top-comment-info">
                        <div class="quantity">(4) комментария / (1) Ответ</div>
                    </div>
                    <div class="comment">
                        <div class="comment-wrap">
                            <div class="user-img"><img src="<?php bloginfo('template_url'); ?>/img/user-1.jpg"
                                                       alt="">
                            </div>
                            <a href="#" class="answer-link">Ответить</a>
                            <div class="name">Сергей Чепоров</div>
                            <div class="date">18 октября 2016</div>
                            <div class="text">Принцип восприятия непредвзято создает паллиативный интеллект,
                                условно.
                                Концепция ментально оспособляет закон внешнего мира. Сомнение раскладывает на
                                элементы
                                неоднозначный структурализм. Смысл жизни профанирует принцип восприятия, отрицая
                                очевидное. Жизнь философски ассоциирует напряженный постмодернизм. Объект
                                деятельности
                                означает конфликт. Согласно предыдущему, конфликт, в рамках сегодняшних
                                воззрений, ясен
                                не всем.
                            </div>
                        </div>
                    </div>
                    <div class="comment answer">
                        <div class="comment-wrap">
                            <div class="user-img"><img
                                    src="<?php bloginfo('template_url'); ?>/img/user-default.jpg"
                                    alt=""></div>
                            <a href="#" class="answer-link">Ответить</a>
                            <div class="name">Олег Лепендин</div>
                            <div class="date">18 октября 2016</div>
                            <div class="text">Принцип восприятия непредвзято создает паллиативный интеллект,
                                условно.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="leave-comment wow fadeInUp" data-wow-duration="1s">
                    <div class="form-title"><?php the_field('news_comment_leave_form_title') ?></div>
                    <div class="form-wrap">
                        <input type="text" placeholder="Имя">
                        <input type="email" placeholder="Email">
                        <textarea name="" id="" cols="20" rows="5" placeholder="Текст"></textarea>
                        <input type="submit" placeholder="ОТПРАВИТЬ">
                    </div>
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
                <div class="pop-news wow fadeInUp" data-wow-duration="1s">
                    <div class="sidebar-title">Популярные новости</div>
                    <a href="#" class="item">
                        <img src="<?php bloginfo('template_url'); ?>/img/p-news-1.jpg" alt="">
                        <p>Власти ухудшили прогноз роста экономики</p>
                        <div class="date">21 октября / Экономика</div>
                    </a>
                    <a href="#" class="item">
                        <img src="<?php bloginfo('template_url'); ?>/img/p-news-2.jpg" alt="">
                        <p>Прибыль Samsung упала на 30% из-за Galaxy Note 7</p>
                        <div class="date">20 октября / Новости компаний</div>
                    </a>
                    <a href="#" class="item">
                        <img src="<?php bloginfo('template_url'); ?>/img/p-news-3.jpg" alt="">
                        <p>Торги на биржах США завершились ростом</p>
                        <div class="date">19 октября / Финансы</div>
                    </a>
                </div>
                <div class="archive wow fadeInUp" data-wow-duration="1s">
                    <div class="sidebar-title">Арихив новостей</div>
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

<?php endwhile; ?>
<?php endif; ?>

<?php wp_reset_query();     // Restore global post data stomped by the_post(). ?>
