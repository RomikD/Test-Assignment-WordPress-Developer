<?php
//Get global values
global $post;

get_header();

// Get template for post without making lot moves with current file
get_template_part('/templates/tpl.post', 'page');

get_footer();

?>