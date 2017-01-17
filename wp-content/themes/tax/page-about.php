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
<? get_header() ?>
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
<? get_footer() ?>