<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package tax
 */

?>

<!-- Header -->
<header class="internal">
	<div class="wrap">
		<div class="left-side">
			<a class="logo" href="<?=home_url();?>"><img src="<?php the_field('header_logo_1', 'option') ?>" alt=""></a>
			<div class="phone">
				<p><i class="fa fa-phone" aria-hidden="true"></i><?php the_field('header_phone_1', 'option') ?></p>
				<a href="#callback-form" class="popUp-btn"><?php the_field('header_text_under_phone_1', 'option') ?></a>
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
