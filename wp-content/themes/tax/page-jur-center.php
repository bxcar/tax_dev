<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">

    <title>Удобные флаги</title>
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
</head>

<body>

<!-- Custom HTML -->
<!-- Header -->
<header class="internal">
    <div class="wrap">
        <div class="left-side">
            <a class="logo" href="index.html"><img src="img/logo.png" alt=""></a>
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
    <section class="top-block top-jur-center">
        <h1 class="page-title">Центр юрисдикций</h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><span>Центр Юрисдикци </span></li>
            </ul>
        </div>
    </section>
    <section class="flags-info jur-center-info">
        <div class="wrap wow fadeInUp" data-wow-duration="1s">
            <div class="item">
                <div class="title-item">Азия</div>
                <a href="jur-center-vnutr.html">Гонконг</a>
                <a href="jur-center-vnutr.html">Сингапур</a>

                <div class="title-item">Африка</div>
                <a href="jur-center-vnutr.html">Маврикий</a>
                <a href="jur-center-vnutr.html">Мадейра</a>
                <a href="jur-center-vnutr.html">Сейшельские острова</a>

                <div class="title-item">КАРИБСКИЙ РЕГИОН</div>
                <a href="jur-center-vnutr.html">Багамские острова</a>
                <a href="jur-center-vnutr.html">Британская Ангилья</a>
                <a href="jur-center-vnutr.html">Британские Виргинские острова</a>
                <a href="jur-center-vnutr.html">Сент Винсент и Гренадины</a>
            </div>
            <div class="item">
                <div class="title-item">Европа</div>
                <a href="jur-center-vnutr.html">Австрия</a>
                <a href="jur-center-vnutr.html">Великобритания</a>
                <a href="jur-center-vnutr.html">Гибралтар</a>
                <a href="jur-center-vnutr.html">Дания</a>
                <a href="jur-center-vnutr.html">Ирландия</a>
                <a href="jur-center-vnutr.html">Лихтенштейн</a>
                <a href="jur-center-vnutr.html">Люксембург</a>
                <a href="jur-center-vnutr.html">Мальта</a>
                <a href="jur-center-vnutr.html">Остров Мэн</a>
                <a href="jur-center-vnutr.html">Швейцария</a>
                <a href="jur-center-vnutr.html">Кипр</a>

            </div>
            <div class="item">
                <div class="title-item">Северная Америка</div>
                <a href="jur-center-vnutr.html">Белиз</a>
                <a href="jur-center-vnutr.html">Британские Виргинские острова</a>
                <a href="jur-center-vnutr.html">Доминика</a>
                <a href="jur-center-vnutr.html">Невис</a>
                <a href="jur-center-vnutr.html"> Панама</a>
                <a href="jur-center-vnutr.html">Сент Люсия</a>

                <div class="title-item">Об Удобных флагах</div>
                <a href="jur-center-vnutr.html">Маршалловые острова</a>
                <a href="jur-center-vnutr.html">Новая Зеландия</a>
                <a href="jur-center-vnutr.html">Самоа</a>
            </div>
        </div>
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
    <section class="more-services more-flags more-jur-center wow fadeInUp" data-wow-duration="1s">
        <div class="title">Другие Предложения</div>
        <div class="wrap">
            <div class="owl-carousel carousel-5">
                <div>
                    <a href="#" class="item">
                <span class="img-block">
                    <img src="img/flag-1.png" alt="">
                </span>
                        <span class="text">Специальные <br> предложения</span>
                    </a>
                </div>
                <div>
                    <a href="#" class="item">
                <span class="img-block">
                    <img src="img/flag-2.png" alt="">
                </span>
                        <span class="text">Удобные <br> флаги</span>
                    </a>
                </div>
                <div>
                    <a href="#" class="item">
                    <span class="img-block">
                        <img src="img/flag-3.png" alt="">
                    </span>
                        <span class="text">Центры <br> Юрисдикций</span>
                    </a>
                </div>
                <div>
                    <a href="#" class="item">
                <span class="img-block">
                    <img src="img/flag-4.png" alt="">
                </span>
                    <span class="text">Финансовые <br> компании</span>
                </a>
                </div>
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
    {"src" : "js/libs.min.js", "async" : false},
    {"src" : "js/common.js", "async" : false}
]};!function(t,n,r){"use strict";var c=function(t){if("[object Array]"!==Object.prototype.toString.call(t))return!1;for(var r=0;r<t.length;r++){var c=n.createElement("script"),e=t[r];c.src=e.src,c.async=e.async,n.body.appendChild(c)}return!0};t.addEventListener?t.addEventListener("load",function(){c(r.scripts);},!1):t.attachEvent?t.attachEvent("onload",function(){c(r.scripts)}):t.onload=function(){c(r.scripts)}}(window,document,scr);
</script>
<!-- Optimized loading JS End -->

</body>
</html>
