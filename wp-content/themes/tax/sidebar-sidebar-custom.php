<?php
if ( ! is_active_sidebar( 'sidebar-custom' ) ) {
    return;
}
?>

<!--<aside id="secondary" class="widget-area" role="complementary">-->
<div class="sidebar">
<!--    --><?php //dynamic_sidebar( 'sidebar-custom' ); ?>

    <?php if ( !dynamic_sidebar('sidebar-custom') ) : ?>
        <li>{static sidebar item 1}</li>
        <li>{static sidebar item 2}</li>
    <?php endif; ?>
</div>
<!--</aside>-->
<!-- #secondary -->