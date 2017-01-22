<?php
/**
 * Template Name: tax_facilities_serv
 */
?>
<?php
// args
$args = array(
    'numberposts' => -1,
    'post_type' => 'tax_facilities_serv',
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

    <title><?php the_field('single_facilities_services_title_meta') ?></title>
    <meta name="description" content="<?php the_field('single_facilities_services_description_meta') ?>">
    <meta name="keywords" content="<?php the_field('single_facilities_services_keywords_meta') ?>">

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
    <style>
        .facilities-services-info blockquote {
            background-color: #fcfcfd;
            padding: 40px 40px 38px;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        .facilities-services-info ul,
        .facilities-services-info ol {
            margin-bottom: 30px;
            list-style: none;
        }

        .facilities-services-info strong {
            font-weight: 700;
        }

        .facilities-services-info li {
            color: #928f8f;
            font-size: .8125rem;
            font-weight: 400;
            line-height: 34px;
        }

        .facilities-services-info li:before {
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

        .facilities-services-info p {
            font-size: .8125rem;
            font-weight: 400;
            color: #928f8f;
            line-height: 22px;
            padding-bottom: 15px;
        }
    </style>

    <?php wp_head() ?>
</head>

<body>

<!-- Custom HTML -->
<? get_header() ?>
<!-- Content -->
<main>
    <section class="top-block facilities-services">
        <h1 class="page-title">Услуги и сервисы</h1>
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html">Главная</a></li>
                <li><a href="facilities-services.html">Услуги и сервисы</a></li>
                <li><span>Консультация по счетам Paypal</span></li>
            </ul>
        </div>
    </section>
    <section class="facilities-services-info">
        <div class="wrap wow fadeInUp" data-wow-duration="1s">
            <div class="item"><img src="<?php the_field('single_facilities_services_page_description_image') ?>" alt=""></div>
            <div class="item">
                <div class="title"><?php the_field('single_facilities_services_page_subtitle') ?></div>
                <?php the_field('single_facilities_services_page_description') ?>
            </div>
        </div>
    </section>
    <section class="feadback-form order-form wow fadeInUp" data-wow-duration="1s">
        <div class="form-wrap">
            <div class="title-form"><?php the_field('single_facilities_services_page_o_title') ?></div>
            <form action="">
                <input type="text" placeholder="<?php the_field('single_facilities_services_page_o_placeholder1') ?>">
                <input type="email" placeholder="<?php the_field('single_facilities_services_page_o_placeholder2') ?>">
                <textarea name="" placeholder="<?php the_field('single_facilities_services_page_o_placeholder3') ?>"></textarea>
                <input type="submit" value="<?php the_field('single_facilities_services_page_o_button_text') ?>">
            </form>
        </div>
    </section>
    <section class="more-services wow fadeInUp" data-wow-duration="1s">
        <div class="title"><?php the_field('single_facilities_services_page_social_title') ?></div>
        <div class="wrap">
            <div class="owl-carousel carousel-4">

                <?php
                $p = get_the_permalink();
                $permalink = $p;


                $args_last_facilities_serv = array(
                    'page_id' => '47',
                );

                // query
                $the_query_last_facilities_serv = new WP_Query($args_last_facilities_serv);
                if ($the_query_last_facilities_serv->have_posts()) {
                    while ($the_query_last_facilities_serv->have_posts()) {
                        $the_query_last_facilities_serv->the_post(); ?>


                        <?php $services = get_field('facilities_and_services_page_services');
                        foreach ($services as $service) {
                            if($permalink == $service['facilities_and_services_page_services_link']) {
                                continue;
                            }
                            ?>
                            <a href="<?=$service['facilities_and_services_page_services_link']?>" class="item">
                            <span class="img-block">
                                <img src="<?=$service['facilities_and_services_page_services_image']?>" alt="">
                            </span>
                                <span class="text">
                                    <?=$service['facilities_and_services_page_services_text']?>
                                </span>
                            </a>
                            <?php
                        }
                        ?>


                    <?php }
                } ?>




                <!--<a href="#" class="item">
                <span class="img-block">
                    <img src="<?php /*bloginfo('template_url');*/?>/img/f-services-1.png" alt="">
                </span>
                    <span class="text">Регистрация торговых марок <br> и получение штрих кодов</span>
                </a>
                <a href="#" class="item">
                <span class="img-block">
                    <img src="<?php /*bloginfo('template_url');*/?>/img/f-services-2.png" alt="">
                </span>
                    <span class="text">Получение <br> Сертификата происхождения <br> в Великобритании</span>
                </a>
                <a href="#" class="item">
                <span class="img-block">
                    <img src="<?php /*bloginfo('template_url');*/?>/img/f-services-3.png" alt="">
                </span>
                    <span class="text">Консультации<br> по счетам Paypal</span>
                </a>
                <a href="#" class="item">
                <span class="img-block">
                    <img src="<?php /*bloginfo('template_url');*/?>/img/f-services-4.png" alt="">
                </span>
                    <span class="text">Получения<br> номера EORI</span>
                </a>
                <a href="#" class="item">
                <span class="img-block">
                    <img src="<?php /*bloginfo('template_url');*/?>/img/f-services-5.png" alt="">
                </span>
                    <span class="text">Аккредитация<br> представительства<br> в Украине</span>
                </a>
                <a href="#" class="item">
                <span class="img-block">
                    <img src="<?php /*bloginfo('template_url');*/?>/img/f-services-6.png" alt="">
                </span>
                    <span class="text">Помощь специалиста по <br> сервису VAT в Европе</span>
                </a>
                <a href="#" class="item">
                <span class="img-block">
                    <img src="<?php /*bloginfo('template_url');*/?>/img/f-services-7.png" alt="">
                </span>
                    <span class="text">Консультации по счетам<br> Interactive Brokers</span>
                </a>-->
            </div>
        </div>
    </section>
</main>
<!-- End content -->
<? get_footer() ?>

<?php endwhile; ?>
<?php endif; ?>

<?php wp_reset_query();     // Restore global post data stomped by the_post(). ?>