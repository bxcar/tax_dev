<?php
if ( ! is_active_sidebar( 'sidebar-custom' ) ) {
    return;
}
?>

<div class="sidebar">
    <div class="search wow fadeInUp" data-wow-duration="1s">
        <form role="search" method="get" id="searchform" action="<?php echo home_url('/') ?>">
            <input type="text" value="<?php echo get_search_query() ?>" name="s" id="s"
                   placeholder="Поиск...">
            <input type="hidden" name="post_type" value="tax_news"/> <!-- // hidden 'tax_news' value -->
            <input type="submit" id="searchsubmit">
        </form>
    </div>
    <div class="category wow fadeInUp" data-wow-duration="1s">
        <div class="sidebar-title">
            <a class="display_cat_arch" id="link-display-cat">
                <?php the_field('business_news_page_title_category', 55) ?>&nbsp;
                <img id="transform-right-arrow" src="<?php bloginfo('template_url') ?>/img/right-arrow.png">
            </a>
        </div>
        <ul id="cat-hidden-block">
            <li class="all-item">
                <a href="<?= get_permalink(55); ?>">Все новости</a>
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
                'taxonomy' => 'customcat_for_tax_news',
                'walker' => 'Walker_Category',
                'hide_title_if_empty' => false,
                'separator' => '<br />',
            );

            wp_list_categories($args);
            ?>
        </ul>
    </div>
    <div class="pop-news wow fadeInUp" data-wow-duration="1s">
        <div class="sidebar-title"><?php the_field('business_news_page_title_popular_news', 55) ?></div>
        <?php

        //default popular news displayed randomly
        if (!get_field('business_news_page_sidebar_popular_news', 55)) {

            $args_popular_news = array(
                'post_type' => 'tax_news', //slag
                'posts_per_page' => 3,
                'orderby' => 'rand'
            );
            $popular_news = new WP_Query($args_popular_news);

            //loop
            $i = 0;
            if ($popular_news->have_posts()) :
                $result = object_to_array($popular_news);

                while ($popular_news->have_posts()) :
                    $popular_news->the_post();
                    //display list
                    ?>
                    <a href="<?php the_permalink(); ?>" class="item">
                        <img width="70" height="70" src="<?php the_field('news_image') ?>" alt="">
                        <p><?php the_title(); ?></p>
                        <div class="date"><?php echo get_the_date('j'); ?>
                            &nbsp;<?php echo get_the_date('M');

                            $cur_terms = get_the_terms($post->ID, 'customcat_for_tax_news');
                            echo ' / ' . $cur_terms[0]->name;
                            ?>
                        </div>
                    </a>
                    <?php
                endwhile;
            endif;
            wp_reset_postdata(); // return global variables to state of main query
        }

        //if pupular news defined in admin panel than displayed defined popular news
        else {
            $popular_news_all = get_field('business_news_page_sidebar_popular_news', 55);

            foreach ($popular_news_all as $popular_news_single) {

                $args_popular_news = array(
                    'post_type' => 'tax_news' //slag
                );
                $popular_news = new WP_Query($args_popular_news);

                //loop
                $i = 0;
                if ($popular_news->have_posts()) :
                    $result = object_to_array($popular_news);

                    while ($popular_news->have_posts()) :
                        $popular_news->the_post();
                        if (get_the_permalink() == $popular_news_single['business_news_page_sidebar_popular_news_single']) {
                            //display list
                            ?>
                            <a href="<?php the_permalink(); ?>" class="item">
                                <img width="70" height="70" src="<?php the_field('news_image') ?>" alt="">
                                <p><?php the_title(); ?></p>
                                <div
                                    class="date"><?php echo get_the_date('j'); ?>
                                    &nbsp;<?php echo get_the_date('M');

                                    $cur_terms = get_the_terms($post->ID, 'customcat_for_tax_news');
                                    echo ' / ' . $cur_terms[0]->name;
                                    ?>
                                </div>
                            </a>
                            <?php
                        }
                    endwhile;
                endif;
                wp_reset_postdata(); // return global variables to state of main query
            }
        }
        ?>
    </div>
    <div class="archive wow fadeInUp" data-wow-duration="1s">
        <div class="sidebar-title">
            <a class="display_cat_arch" id="link-display-arch">
                <?php the_field('business_news_page_title_archive', 55) ?>&nbsp;
                <img id="transform-right-arrow-arch"
                     src="<?php bloginfo('template_url') ?>/img/right-arrow.png">
            </a>
        </div>
        <ul id="arch-hidden-block" style="display: none;">
            <?php wp_custom_archive_new('tax_news'); ?>
        </ul>
    </div>
</div>