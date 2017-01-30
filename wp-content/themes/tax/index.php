<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package tax
 */
?>

<!DOCTYPE html>
<html>

<head>

	<meta charset="utf-8">

	<title><?php bloginfo('name');?></title>
	<meta name="description" content="">

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
	<?php wp_head() ?>
</head>

<body>
<!-- Custom HTML -->
<!-- Header -->
<header>
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
	<section class="head-block">
		<video autoplay loop muted class="bgvideo" id="bgvideo">
			<source src="<?php bloginfo('template_url');?>/video/Final_Dark_WEB.mp4" type="video/mp4"></source>
		</video>
		<div class="after-v-bg"></div>
		<div class="wrap">
			<h1>Бизнес — <br> в любой точке мира!</h1>
			<a href="#">узнать как</a>
			<div class="icon-scroll"></div>
		</div>
	</section>
	<section class="our-services">
		<div class="wrap">
			<div class="title wow fadeInUp" data-wow-duration="1s">НАШИ УСЛУГИ</div>
			<div class="text wow fadeInUp" data-wow-duration="1s">Информация в этом разделе не является предложением о
				продаже или предложением в приобретении услуг и предоставленна только в ознокомительных целях.
				Использование информации в любой юрисдикции, где это запрещено законом, может повлечь за собой
				преследование по соответствующим статьям существующего законодательства. Консультации предоставляются
				нерезидентам Украины или выезжающим за рубеж.
			</div>
			<div class="services wow fadeInUp" data-wow-duration="1s">
				<a href="services.html" class="item">
					<img src="<?php bloginfo('template_url');?>/img/service-1.png" alt="">
					<p><span>01</span>Оффшорные компании</p>
				</a>
				<a href="services.html" class="item">
					<img src="<?php bloginfo('template_url');?>/img/service-2.png" alt="">
					<p><span>02</span>Европейские компании</p>
				</a>
				<a href="services.html" class="item">
					<img src="<?php bloginfo('template_url');?>/img/service-3.png" alt="">
					<p><span>03</span>Компании США, Канады</p>
				</a>
			</div>
		</div>
	</section>
	<section class="special-offer">
		<div class="offer-title wow fadeInUp" data-wow-duration="1s">Специальные предложения</div>
		<div class="wrap wow fadeInUp" data-wow-duration="1s">
			<div class="owl-carousel carousel-1">
				<div class="item">
					<div class="item-wrap">
						<p>Регистрация оффшорных компаний за 72 часа.</p>
						<a href="special-offer-vnutr.html">ПОДРОБНЕЕ<img src="<?php bloginfo('template_url');?>/img/right-arrow.png" alt=""></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<p>Компании в Гонконге со счетом в HSBC Bank</p>
						<a href="special-offer-vnutr.html">ПОДРОБНЕЕ<img src="<?php bloginfo('template_url');?>/img/right-arrow.png" alt=""></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<p>Регистрация и сопровождение компаний в Великобритании</p>
						<a href="special-offer-vnutr.html">ПОДРОБНЕЕ <img src="<?php bloginfo('template_url');?>/img/right-arrow.png" alt=""></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<p>Регистрация оффшорных компаний за 72 часа.</p>
						<a href="#">ПОДРОБНЕЕ<img src="<?php bloginfo('template_url');?>/img/right-arrow.png" alt=""></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<p>Компании в Гонконге со счетом в HSBC Bank</p>
						<a href="#">ПОДРОБНЕЕ<img src="<?php bloginfo('template_url');?>/img/right-arrow.png" alt=""></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<p>Регистрация и сопровождение компаний в Великобритании</p>
						<a href="#">ПОДРОБНЕЕ <img src="<?php bloginfo('template_url');?>/img/right-arrow.png" alt=""></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="results">
		<div class="wrap">
			<div class="results-title wow fadeInUp" data-wow-duration="1s">РЕЗУЛЬТАТЫ В ЦИФРАХ</div>
			<div class="result-items wow fadeInUp" data-wow-duration="1s">
				<div class="item">
					<div class="number">20</div>
					<p>Более 20 лет успешного опытав сфере регистрации и обслуживания компаний </p>
					<div class="number">01</div>
					<p>Офис в мировом финансовом центре в Лондоне, компании в Лондоне за 1 час
					</p>
				</div>
				<div class="item">
					<div class="number">72</div>
					<p>Возможность регистрации
						офшорных компаний за 72 часа
					</p>
					<div class="number">30</div>
					<p>Возможность регистрации компании
						в более 30 различных странах мира
					</p>
				</div>
				<div class="item bank">
					<img src="<?php bloginfo('template_url');?>/img/bank.png" alt="">
					<p>Возможность открытия счета в самых крупных мировых банках</p>
				</div>
			</div>
		</div>
	</section>
	<section class="our-work">
		<div class="wrap">
			<div class="title wow fadeInUp" data-wow-duration="1s">КАК МЫ РАБОТАЕМ</div>
			<div class="work-item wow fadeInUp" data-wow-duration="1s">
				<div class="rotate-wrap">
					<div class="item">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
								<path d="M16.613 13.785c.873-1.387 1.387-3.024 1.387-4.785 0-4.971-4.029-9-9-9s-9 4.029-9 9 4.029 9 9 9c1.761 0 3.397-.513 4.785-1.387l7.387 7.387 2.828-2.828-7.387-7.387zm-6.613 2.135v-3.92h-2v3.92c-3.059-.44-5.479-2.861-5.92-5.92h3.92v-2h-3.92c.441-3.059 2.861-5.479 5.92-5.92v3.92h2v-3.92c3.059.44 5.479 2.861 5.92 5.92h-3.92v2h3.92c-.441 3.059-2.861 5.479-5.92 5.92z"/>
							</svg>
						</div>
						<div class="shema">
							<div class="circle"></div>
							<div class="rectangle"></div>
						</div>
						<p>Определяем цели и задачи<br> для регистрации компании</p>
					</div>
					<div class="item">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="61" height="83" viewBox="0 0 24 24">
								<path d="M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm6.681 17c-.573 0-1.04-.467-1.04-1.042 0-.576.467-1.042 1.04-1.042.576 0 1.042.466 1.042 1.042 0 .575-.466 1.042-1.042 1.042zm.034-10c1.644 0 2.81 1.015 2.79 2.666-.015 1.134-.705 1.878-1.259 2.477-.832.896-.766 1.336-.766 1.941h-1.644c0-1.311-.045-1.84 1.174-2.999.469-.446.839-.799.788-1.493-.048-.66-.599-1.004-1.118-1.004-.883 0-1.26.785-1.26 1.746h-1.647c0-2.212 1.262-3.334 2.942-3.334z"/>
							</svg>
						</div>
						<div class="shema">
							<div class="circle"></div>
							<div class="rectangle"></div>
						</div>
						<p>Выбираем название и<br> юрисдикцию компании</p>
					</div>
					<div class="item">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="57" height="69" viewBox="0 0 24 24">
								<path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-10v-1h10v1zm0-4h-10v1h10v-1zm0-3h-10v1h10v-1z"/>
							</svg>
						</div>
						<div class="shema">
							<div class="circle"></div>
							<div class="rectangle"></div>
						</div>
						<p>Консультируем в отношении<br> ведения бухгалтерии и<br> налогового планирования</p>
					</div>
					<div class="item">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="99" height="73" viewBox="0 0 24 24">
								<path d="M19.5 11c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.696-.697.991.94 2.116-2.169.696.696-2.811 2.867zm-15.031-2.484h5v1h-5v-1zm8-1h-8v-1h8v1zm1.502 4h-11.002c-.276 0-.5-.224-.5-.5v-6.5h12.82c1.184-1.23 2.842-2 4.68-2 .886 0 1.729.179 2.5.501v-3.501c0-1.104-.896-2-2-2h-18c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h12.82c-.553-.576-1.006-1.251-1.318-2zm-11.502-11.5c0-.276.224-.5.5-.5h17c.276 0 .5.224.5.5v1.5h-18v-1.5z"/>
							</svg>
						</div>
						<div class="shema">
							<div class="circle"></div>
							<div class="rectangle"></div>
						</div>
						<p>Выбираем банк для<br>
							открытия счета</p>
					</div>
					<div class="item">
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="73" height="67" viewBox="0 0 24 24">
								<path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm-3.5 10c0 .829-.671 1.5-1.5 1.5-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5zm5 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5c.829 0 1.5-.671 1.5-1.5s-.671-1.5-1.5-1.5z"/>
							</svg>
						</div>
						<div class="shema">
							<div class="circle"></div>
							<div class="rectangle"></div>
						</div>
						<p>Консультируем в отношении<br> дальнейшего <br>администрирования компании</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="advanteges">
		<div class="wrap">
			<div class="item">
				<div class="title wow fadeInUp" data-wow-duration="1s">НАШИ ПРЕИМУЩЕСТВА</div>
				<p class="wow fadeInUp" data-wow-duration="1s"><span>01</span>Мы помогаем вести бизнес без налогов,
					а не ищем пути уклонения от них.</p>
				<p class="wow fadeInUp" data-wow-duration="1s"><span>02</span>Мы не предлагаем стандартных решений,
					к каждому клиенту ищем индивидуальный подход.</p>
				<p class="wow fadeInUp" data-wow-duration="1s"><span>03</span>Оперативность в выполнении поставленных
					задач.</p>
				<p class="wow fadeInUp" data-wow-duration="1s"><span>04</span>Отсутствие скрытых расходов.</p>
				<p class="wow fadeInUp" data-wow-duration="1s"><span>05</span>Информация обо всех текущих изменениях
					в законодательстве.</p>
			</div>
		</div>
	</section>
	<section class="helpful-info">
		<div class="wrap">
			<div class="title wow fadeInUp" data-wow-duration="1s">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</div>
			<div class="info-item wow fadeInUp" data-wow-duration="1s">
				<div class="item">
					<a href="helpful-information-vnutr.html">Что нарушают компании из США?</a>
				</div>
				<div class="item">
					<a href="helpful-information-vnutr.html">Перечень оффшорных территорий,<br> Министерство Финансов РФ</a>
				</div>
				<div class="item">
					<a href="helpful-information-vnutr.html">Морские юридические услуги в Панаме</a>
				</div>
				<div class="item">
					<a href="helpful-information-vnutr.html">Возможности оффшорных компаний</a>
				</div>
				<div class="item">
					<a href="helpful-information-vnutr.html">Инструкция о порядке выдачи<br> индивидуальных лицензий No
						478</a>
				</div>
				<div class="item">
					<a href="helpful-information-vnutr.html">Государственная пошлина на Кипре</a>
				</div>
			</div>
			<div class="see-more">
				<a href="helpful-information.html">ПОКАЗАТЬ БОЛЬШЕ</a>
			</div>
		</div>
	</section>
	<section class="feadback-form">
		<div class="form-wrap">
			<div class="title-form wow fadeInUp" data-wow-duration="1s">НАПИСАТЬ НАМ</div>
			<form action="" class="wow fadeInUp" data-wow-duration="1s">
				<input type="text" placeholder="Имя">
				<input type="email" placeholder="Email">
				<textarea name="" placeholder="Текст"></textarea>
				<input type="submit" value="Отправить">
			</form>
		</div>
	</section>
	<section class="news-front">
		<div class="title wow fadeInUp" data-wow-duration="1s">НОВОСТИ</div>
		<div class="wrap wow fadeInUp" data-wow-duration="1s">
			<div class="owl-carousel carousel-2">
				<div class="item">
					<div class="item-wrap">
						<div class="date">29 июня 2016</div>
						<p>Британские Виргинские о-ва: новые требований для Регулируемых компаний и Взаимных фондов</p>
						<a href="news-vnutr.html"></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<div class="date">27 января 2016</div>
						<p>Британские Виргинские о-ва: новые требований для Регулируемых компаний и Взаимных фондов</p>
						<a href="news-vnutr.html"></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<div class="date">29 июня 2016</div>
						<p>Британские Виргинские о-ва: новые требований для Регулируемых компаний и Взаимных фондов</p>
						<a href="news-vnutr.html"></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<div class="date">27 января 2016</div>
						<p>Британские Виргинские о-ва: новые требований для Регулируемых компаний и Взаимных фондов</p>
						<a href="news-vnutr.html"></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<div class="date">29 июня 2016</div>
						<p>Британские Виргинские о-ва: новые требований для Регулируемых компаний и Взаимных фондов</p>
						<a href="news-vnutr.html"></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<div class="date">27 января 2016</div>
						<p>Британские Виргинские о-ва: новые требований для Регулируемых компаний и Взаимных фондов</p>
						<a href="news-vnutr.html"></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<div class="date">29 июня 2016</div>
						<p>Британские Виргинские о-ва: новые требований для Регулируемых компаний и Взаимных фондов</p>
						<a href="news-vnutr.html"></a>
					</div>
				</div>
				<div class="item">
					<div class="item-wrap">
						<div class="date">27 января 2016</div>
						<p>Британские Виргинские о-ва: новые требований для Регулируемых компаний и Взаимных фондов</p>
						<a href="news-vnutr.html"></a>
					</div>
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
<script>var scr = {
		"scripts": [
			{"src": "<?php bloginfo('template_url');?>/js/libs.min.js", "async": false},
			{"src": "<?php bloginfo('template_url');?>/js/common.js", "async": false}
		]
	};
	!function (t, n, r) {
		"use strict";
		var c = function (t) {
			if ("[object Array]" !== Object.prototype.toString.call(t))return !1;
			for (var r = 0; r < t.length; r++) {
				var c = n.createElement("script"), e = t[r];
				c.src = e.src, c.async = e.async, n.body.appendChild(c)
			}
			return !0
		};
		t.addEventListener ? t.addEventListener("load", function () {
			c(r.scripts);
		}, !1) : t.attachEvent ? t.attachEvent("onload", function () {
			c(r.scripts)
		}) : t.onload = function () {
			c(r.scripts)
		}
	}(window, document, scr);
</script>
<!-- Optimized loading JS End -->
<?php wp_footer() ?>
</body>
</html>


