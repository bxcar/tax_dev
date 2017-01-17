<?php
/**
 * Template Name: search-online_check-company
 */
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title>Поиск онлайн</title>
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
    <script src='https://maps.googleapis.com/maps/api/js?key=&sensor=false&extension=.js'></script>
    <script>
        google.maps.event.addDomListener(window, 'load', init);
        var map;
        function init() {
            var mapOptions = {
                center: new google.maps.LatLng(50.483787, 30.493169999999964),
                zoom: 15,
                zoomControl: false,
                disableDoubleClickZoom: true,
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: false,
                panControl: false,
                streetViewControl: false,
                draggable : true,
                overviewMapControl: false,
                overviewMapControlOptions: {
                    opened: false,
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
            }
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var locations = [
                ['Tax', 'undefined', 'undefined', 'undefined', 'undefined', 50.483787, 30.493169999999964, 'img/map-icon.png']
            ];
            for (i = 0; i < locations.length; i++) {
                if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
                if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
                if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
                if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
                if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}

                marker = new google.maps.Marker({
                    icon: markericon,
                    position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                    map: map,
                    title: locations[i][0],
                    desc: description,
                    tel: telephone,
                    email: email,
                    web: web
                });
                link = 'img/map-icon.png';
            }
        }
    </script>
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
    <section class="top-block search">
        <h1 class="page-title">Поиск онлайн</h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><span>Поиск онлайн</span></li>
            </ul>
        </div>
    </section>
    <section class="search-info">
        <div class="wrap wow fadeInUp" data-wow-duration="1s">
            <div class="item"><img src="<?php bloginfo('template_url');?>/img/search-online.png" alt=""></div>
            <div class="item">
                <div class="title">Проверить компанию?</div>
                <p>Наш опыт работы с юридическими фирмами в таких юрисдикциях как: Австрия, Великобритания, Кипр, США, Британские Виргинские острова, Сейшелы, Белиз, Панама, Сент-Винсент, Невис, Доминика, Лихтенштейн, Люксембург, Швейцария, дает возможность определить состояние иностранной компании и ее структуру.</p>
                <p>Мы можем предоставить по запросу следующую информацию:</p>
                <ul>
                    <li>Проверка статуса компании;</li>
                    <li>Адрес зарегистрированного офиса;</li>
                    <li>Копии документов компании;</li>
                    <li>Адреса директора и акционера (если доступно);</li>
                    <li>Копии финансовых отчетов (если доступно).</li>
                </ul>
                <p>Необходима информация о регистрационном номере, дате и стране регистрации компании.</p>
            </div>
        </div>
    </section>
    <section class="feadback-form search-form">
        <div class="form-wrap wow fadeInUp" data-wow-duration="1s">
            <div class="title-form">Заполните заявку</div>
            <form action="">
                <input type="text" placeholder="Имя">
                <input type="email" placeholder="Email">
                <textarea name="" placeholder="Текст"></textarea>
                <input type="submit" value="Отправить">
            </form>
        </div>
    </section>
    <section class="search-online search-1 wow fadeInUp" data-wow-duration="1s">
        <div class="title">Другие виды поиска</div>
        <div class="wrap">
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
