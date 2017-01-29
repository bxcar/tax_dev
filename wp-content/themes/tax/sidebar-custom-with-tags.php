<?php
if ( ! is_active_sidebar( 'sidebar-custom' ) ) {
    return;
}
?>

<div class="sidebar" style="width: 310px;">
    <div class="search wow fadeInUp" data-wow-duration="1s">
        <form role="search" method="get" id="searchform" action="<?php echo home_url('/') ?>">
            <input style="border-radius: 0;" type="text" value="<?php echo get_search_query() ?>" name="s" id="s"
                   placeholder="Поиск...">
            <input type="hidden" name="post_type" value="tax_helpful_inf"/> <!-- // hidden 'tax_helpful_inf' value -->
            <input type="submit" id="searchsubmit">
        </form>
    </div>
    <div class="category wow fadeInUp" data-wow-duration="1s">
        <div class="sidebar-title">
            <a class="display_cat_arch" id="link-display-cat">
                <?php the_field('helpful_information_page_title_category', 51) ?>&nbsp;
                <img id="transform-right-arrow" src="<?php bloginfo('template_url') ?>/img/right-arrow.png">
            </a>
        </div>
        <ul id="cat-hidden-block" style="display: none">
            <li class="all-item">
                <a href="<?= get_permalink(51); ?>">Все записи</a>
            </li>
            <?php

            $args = array(
                'show_option_all' => '',
                'show_option_none' => __('No categories'),
                'orderby' => 'name',
                'order' => 'DESC',
                'show_last_update' => 0,
                'style' => 'list',
                'show_count' => 0,
                'hide_empty' => 1,
                'use_desc_for_title' => 1,
                'child_of' => 0,
                'feed' => '',
                'feed_type' => '',
                'feed_image' => '',
                'exclude' => '1',
                'exclude_tree' => '',
                'include' => '',
                'hierarchical' => true,
                'title_li' => '',
                'number' => NULL,
                'echo' => 1,
                'depth' => 0,
                'current_category' => '',
                'pad_counts' => 0,
                'taxonomy' => 'category-helpful-information',
                'walker' => 'Walker_Category',
                'hide_title_if_empty' => false,
                'separator' => '<br />',
            );

            wp_list_categories($args);
            ?>
        </ul>
    </div>
</div>