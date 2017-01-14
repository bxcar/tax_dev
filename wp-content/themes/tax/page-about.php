<?php
/**
 * Template Name: about
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title>О проекте</title>
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
            <a class="logo" href="index.html"><img src="<?php bloginfo('template_url');?>/img/logo.png" alt=""></a>
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
            <ul>
                <li><a href="index.html">ГЛАВНАЯ</a></li>
                <li><a href="about.html">О ПРОЕКТЕ</a></li>
                <li><a href="services.html">Услуги и цены</a></li>
                <li><a href="contacts.html">Контакты</a></li>
            </ul>
        </div>
    </div>
</header>
<!-- End header -->
<!-- Content -->
<main>
    <section class="top-block">
        <h1 class="page-title">О ПРОЕКТЕ</h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><span>О проекте</span></li>
            </ul>
        </div>
    </section>
    <section class="about-project-info">
        <div class="wrap wow fadeInUp" data-wow-duration="1s">
            <div class="title">Tax.ua - это</div>
            <p>Сайт посвящен вопросам налогового планирования, создания и функционирования корпоративных структур различного профиля, холдингов и финансовых компаний, защитой имущества, персонального банкинга. Вы всегда получите самые свежие новости по изменению оффшорного законодательства, а также найдёте уникальный материал собранный со всех уголков земного шара.</p>
            <p>Оффшор — один из самых известных и эффективных методов налогового планирования. Основой этого метода являются законодательства многих стран, частично или полностью освобождающие от налоговых сборов компании, владельцы которых — иностранные лица. Оффшорная компания, является обществом с ограниченной ответственностью или акционерным обществом, но в отличие от местных предпринимательских товариществ, такая компания полностью освобождена от уплаты налогов или платит низкие налоги в стране регистрации.</p>
            <a href="#">Обращайтесь к нам в любое время!</a>
        </div>
    </section>
    <section class="project-map">
        <div class="wrap wow fadeInUp" data-wow-duration="1s">
            <div class="item">
                <div class="number">1,8<span>млрд. грн</span></div>
                <div class="text">Самая большая стоимость<br> застрахованного объекта</div>
            </div>
            <div class="item">
                <div class="number">1,23<span>млрд. грн</span></div>
                <div class="text">Портфель страхования отдела личных<br> продуктов покрывает риски свыше<br>
                    1,23 млрд. грн.</div>
            </div>
            <div class="item">
                <div class="number">85<span>млрд. грн</span></div>
                <div class="text">Отдел возмещения убытков закрыл<br> 816 убытков на общую сумму<br>
                    39 млн грн.</div>
            </div>
        </div>
    </section>
    <section class="advanteges internal">
        <div class="wrap">
            <div class="item wow fadeInUp" data-wow-duration="1s">
                <div class="title">НАШИ	ПРЕИМУЩЕСТВА</div>
                <p><span>01</span>Мы помогаем вести бизнес без налогов,
                    а не ищем пути уклонения от них.</p>
                <p><span>02</span>Мы не предлагаем стандартных решений,
                    к каждому клиенту ищем индивидуальный подход.</p>
                <p><span>03</span>Оперативность в выполнении поставленных задач.</p>
                <p><span>04</span>Отсутствие скрытых расходов.</p>
                <p><span>05</span>Информация обо всех текущих изменениях
                    в законодательстве.</p>
            </div>
        </div>
    </section>
    <section class="social-block">
        <div class="wrap wow fadeInUp" data-wow-duration="1s">
            <div class="title">Мы в соцсетях</div>
            <div class="social-link">
                <a href="" class="linked"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="" class="inst"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a class="fb" href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="" class="tw"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </div>
    </section>
</main>
<!-- End content -->
<!-- Footer -->
<footer class="wow fadeInUp" data-wow-duration="1s">
    <div class="wrap">
        <div class="footer-top">
            <div class="item">
                <div class="title">МЕНЮ</div>
                <ul>
                    <li>
                        <a href="index.html">Главная</a>
                    </li>
                    <li>
                        <a href="about.html">О проекте</a>
                    </li>
                    <li>
                        <a href="services.html">Услуги и цены</a>
                    </li>
                    <li>
                        <a href="contacts.html">Контакты</a>
                    </li>
                </ul>
            </div>
            <div class="item">
                <div class="title">ПРЕДЛОЖЕНИЯ</div>
                <ul>
                    <li>
                        <a href="special-offer.html">Специальные предложения</a>
                    </li>
                    <li>
                        <a href="jur-center.html">Центр юрисдикции</a>
                    </li>
                    <li>
                        <a href="finance-companies.html">Финансовые компании</a>
                    </li>
                    <li>
                        <a href="convenience-flags.html">Удобные флаги</a>
                    </li>
                </ul>
            </div>
            <div class="item">
                <div class="title">НОВОСТИ</div>
                <ul>
                    <li>
                        <a href="news.html">Новости бизнеса</a>
                    </li>
                    <li>
                        <a href="facilities-services.html">Услуги и сервисы</a>
                    </li>
                    <li>
                        <a href="helpful-information.html">Полезная информация</a>
                    </li>
                    <li>
                        <a href="search-online.html">Поиск онлайн</a>
                    </li>
                </ul>
            </div>
            <div class="item subscribe">
                <div class="title">ПОДПИСАТЬСЯ НА РАССЫЛКУ</div>
                <form action="">
                    <input type="email" placeholder="Введите Email">
                    <input type="submit" placeholder="">
                </form>
                <div class="social-block small">
                    <div class="title">Мы в соцсетях</div>
                    <div class="social-link">
                        <a href="" class="linked"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a href="" class="inst"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a class="fb" href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="" class="tw"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>© Проект «Tax.ua», 2002—2016.</p>
            <a href="http://dizz.in.ua/ru">Сделано в Dizz.</a>
        </div>
    </div>
</footer>
<!-- Optimized loading JS Start -->
<script>var scr = {"scripts":[
    {"src" : "<?php bloginfo('template_url');?>/js/libs.min.js", "async" : false},
    {"src" : "<?php bloginfo('template_url');?>/js/common.js", "async" : false}
]};!function(t,n,r){"use strict";var c=function(t){if("[object Array]"!==Object.prototype.toString.call(t))return!1;for(var r=0;r<t.length;r++){var c=n.createElement("script"),e=t[r];c.src=e.src,c.async=e.async,n.body.appendChild(c)}return!0};t.addEventListener?t.addEventListener("load",function(){c(r.scripts);},!1):t.attachEvent?t.attachEvent("onload",function(){c(r.scripts)}):t.onload=function(){c(r.scripts)}}(window,document,scr);
</script>
<!-- Optimized loading JS End -->
<?php wp_footer() ?>
</body>
</html>
