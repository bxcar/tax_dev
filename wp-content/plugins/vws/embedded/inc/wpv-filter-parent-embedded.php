<?php
/**
* wpv-filter-parent-embedded.php
*
* @package Views
*
* @since unknown
*/

/**
* -------------------------------------------------
* Filtering by post parent - WordPress hierarchy
* -------------------------------------------------
*/

/**
* wpv_filter_post_parent
*
* Apply the filter by post parent to the View query
*
* @since unknown
*/

add_filter( 'wpv_filter_query', 'wpv_filter_post_parent', 10, 2 );

function wpv_filter_post_parent( $query, $view_settings ) {
    if ( isset( $view_settings['parent_mode'][0] ) ) {
		switch ( $view_settings['parent_mode'][0] ) {
			case 'current_page':
				global $WP_Views;
				$current_page = $WP_Views->get_current_page();
				if ( $current_page ) {
					$query['post_parent'] = $current_page->ID;
				}
				break;
			case 'this_page':
				if (
					isset( $view_settings['parent_id'] )
					&& is_numeric( $view_settings['parent_id'] )
					&& $view_settings['parent_id'] > 0 
				) {
					$query['post_parent'] = $view_settings['parent_id'];
					// Adjust for WPML support
					// 'any' will make WPML manage the 'post_type' this parent belongs to
					$query['post_parent'] = apply_filters( 'translate_object_id', $query['post_parent'], 'any', true, null );
				} else {
					// filter for items with no parents
					$query['post_parent'] = 0;
				}
				break;
			case 'no_parent':
				$query['post_parent'] = 0;
				break;
			case 'shortcode_attribute':
				global $WP_Views;
				if (
					isset( $view_settings['parent_shortcode_attribute'] ) 
					&& '' != $view_settings['parent_shortcode_attribute']
				) {
					$parent_shortcode = $view_settings['parent_shortcode_attribute'];
					$view_attrs = $WP_Views->get_view_shortcodes_attributes();
					if ( 
						isset( $view_attrs[$parent_shortcode] ) 
						&& intval( $view_attrs[$parent_shortcode] ) > 0
					) {
						$query['post_parent'] = intval( $view_attrs[$parent_shortcode] );
						// Adjust for WPML support
						// 'any' will make WPML manage the 'post_type' this parent belongs to
						$query['post_parent'] = apply_filters( 'translate_object_id', $query['post_parent'], 'any', true, null );
					}
				}
				break;
			case 'url_parameter':
				if (
					isset( $view_settings['parent_url_parameter'] ) 
					&& '' != $view_settings['parent_url_parameter']
				) {
					$parent_url_parameter = $view_settings['parent_url_parameter'];
					if ( isset( $_GET[$parent_url_parameter] ) 
						&& $_GET[$parent_url_parameter] != array( 0 ) 
						&& $_GET[$parent_url_parameter] != 0 
					) {
						$post_owner_ids_from_url = $_GET[$parent_url_parameter];
						$post_owner_ids_sanitized = array();
						//$post_owner_ids_final = array();
						if ( is_array( $post_owner_ids_from_url ) ) {
							foreach ( $post_owner_ids_from_url as $id_value ) {
								$id_value = (int) esc_attr( trim( $id_value ) );
								if ( $id_value > 0 ) {
									// Adjust for WPML support
									// 'any' will make WPML manage the 'post_type' this parent belongs to
									$id_value = apply_filters( 'translate_object_id', $id_value, 'any', true, null );
									$post_owner_ids_sanitized[] = $id_value;
								}
							}
						} else {
							$post_owner_ids_from_url = (int) esc_attr( trim( $post_owner_ids_from_url ) );
							if ( $post_owner_ids_from_url > 0 ) {
								// Adjust for WPML support
								// 'any' will make WPML manage the 'post_type' this parent belongs to
								$post_owner_ids_from_url = apply_filters( 'translate_object_id', $post_owner_ids_from_url, 'any', true, null );
								$post_owner_ids_sanitized[] = $post_owner_ids_from_url;
							}
						}
						if ( count( $post_owner_ids_sanitized ) ) {
							$query['post_parent__in'] = $post_owner_ids_sanitized;
						}
					}
				}
				break;
			case 'framework':
				global $WP_Views_fapi;
				if ( $WP_Views_fapi->framework_valid ) {
					if (
						isset( $view_settings['parent_framework'] ) 
						&& '' != $view_settings['parent_framework']
					) {
						$parent_framework = $view_settings['parent_framework'];
						$parent_candidates = $WP_Views_fapi->get_framework_value( $parent_framework, array() );
						$parent_candidates_final = array();
						if ( ! is_array( $parent_candidates ) ) {
							$parent_candidates = explode( ',', $parent_candidates );
						}
						$parent_candidates = array_map( 'esc_attr', $parent_candidates );
						$parent_candidates = array_map( 'trim', $parent_candidates );
						// is_numeric + intval does sanitization
						$parent_candidates = array_filter( $parent_candidates, 'is_numeric' );
						$parent_candidates = array_map( 'intval', $parent_candidates );
						if ( count( $parent_candidates ) ) {
							foreach ( $parent_candidates as $parent_cand ) {
								// Adjust for WPML support
								// 'any' will make WPML manage the 'post_type' this parent belongs to
								$parent_cand = apply_filters( 'translate_object_id', $parent_cand, 'any', true, null );
								$parent_candidates_final[] = $parent_cand;
							}
						}
						if ( count( $parent_candidates_final ) ) {
							$query['post_parent__in'] = $parent_candidates_final;
						}
					}
				}
				break;
		}
    }
    
    return $query;
}

/**
* wpv_filter_parent_requires_current_page
*
* Check if the current filter by post parent needs info about the current page
*
* @since unknown
*/

add_filter( 'wpv_filter_requires_current_page', 'wpv_filter_parent_requires_current_page', 10, 2 );

function wpv_filter_parent_requires_current_page( $state, $view_settings ) {
	if ( $state ) {
		return $state;
	}
    if ( isset( $view_settings['parent_mode'][0] ) ) {
        if ( $view_settings['parent_mode'][0] == 'current_page' ) {
            $state = true;
        }
    }
    return $state;
}

/**
* wpv_filter_parent_requires_framework_values
*
* Check if the current filter by post parent needs info about the framework values
*
* @since 1.10
*/

add_filter( 'wpv_filter_requires_framework_values', 'wpv_filter_parent_requires_framework_values', 10, 2 );

function wpv_filter_parent_requires_framework_values( $state, $view_settings ) {
	if ( $state ) {
		return $state;
	}
    if ( isset( $view_settings['parent_mode'][0] ) ) {
        if ( $view_settings['parent_mode'][0] == 'framework' ) {
            $state = true;
        }
    }
    return $state;
}

/**
* wpv_filter_register_post_parent_filter_shortcode_attributes
*
* Register the filter by post IDs on the method to get View shortcode attributes
*
* @since 1.10
*/

add_filter( 'wpv_filter_register_shortcode_attributes_for_posts', 'wpv_filter_register_post_parent_filter_shortcode_attributes', 10, 2 );

function wpv_filter_register_post_parent_filter_shortcode_attributes( $attributes, $view_settings ) {
	if (
		isset( $view_settings['parent_mode'] ) 
		&& isset( $view_settings['parent_mode'][0] ) 
		&& $view_settings['parent_mode'][0] == 'shortcode_attribute' 
	) {
		$attributes[] = array (
			'query_type'	=> $view_settings['query_type'][0],
			'filter_type'	=> 'post_parent',
			'filter_label'	=> __( 'Post parent', 'wpv-views' ),
			'value'			=> 'post_parent',
			'attribute'		=> $view_settings['parent_shortcode_attribute'],
			'expected'		=> 'numberlist',
			'placeholder'	=> '10',
			'description'	=> __( 'Please type a post ID to get its native children', 'wpv-views' )
		);
	}
	return $attributes;
}

/**
* wpv_filter_register_post_parent_filter_url_parameters
*
* Register the filter by post IDs on the method to get View URL parameters
*
* @since 1.11
*/

add_filter( 'wpv_filter_register_url_parameters_for_posts', 'wpv_filter_register_post_parent_filter_url_parameters', 10, 2 );

function wpv_filter_register_post_parent_filter_url_parameters( $attributes, $view_settings ) {
	if (
		isset( $view_settings['parent_mode'] ) 
		&& isset( $view_settings['parent_mode'][0] ) 
		&& $view_settings['parent_mode'][0] == 'url_parameter' 
	) {
		$attributes[] = array (
			'query_type'	=> $view_settings['query_type'][0],
			'filter_type'	=> 'post_parent',
			'filter_label'	=> __( 'Post parent', 'wpv-views' ),
			'value'			=> 'post_parent',
			'attribute'		=> $view_settings['parent_url_parameter'],
			'expected'		=> 'numberlist',
			'placeholder'	=> '10',
			'description'	=> __( 'Please type a post ID to get its native children', 'wpv-views' )
		);
	}
	return $attributes;
}

/**
* -------------------------------------------------
* Filtering by taxonomy term parent
* -------------------------------------------------
*/

/**
* wpv_filter_taxonomy_parent
*
* Apply child_of settings to Views listing taxonomy terms
*
* @since 1.12
*/

add_filter( 'wpv_filter_taxonomy_query', 'wpv_filter_taxonomy_parent', 20, 3 );

function wpv_filter_taxonomy_parent( $tax_query_settings, $view_settings, $view_id ) {
	$parent_id = null;
    if (
		isset( $view_settings['taxonomy_parent_mode'] ) 
		&& isset( $view_settings['taxonomy_parent_mode'][0] ) 
	) {
		switch ( $view_settings['taxonomy_parent_mode'][0] ) {
			case 'current_view':
				global $WP_Views;
				$parent_id = $WP_Views->get_parent_view_taxonomy();
				break;
			case 'current_archive_loop':
				if ( 
					is_category() 
					|| is_tag() 
					|| is_tax() 
				) {
					$queried_object = get_queried_object();
					$parent_id = $queried_object->term_id;
				}
				break;
			case 'this_parent':
				$parent_id = $view_settings['taxonomy_parent_id'];
				if ( 
					isset( $view_settings['taxonomy_type'][0] ) 
					&& ! empty( $parent_id ) 
				) {
					// WordPress 4.2 compatibility - split terms
					$candidate_term_id_splitted = wpv_compat_get_split_term( $parent_id, $view_settings['taxonomy_type'][0] );
					if ( $candidate_term_id_splitted ) {
						$parent_id = $candidate_term_id_splitted;
					}
					// Adjust for WPML support
					$parent_id = apply_filters( 'translate_object_id', $parent_id, $view_settings['taxonomy_type'][0], true, null );
				}
				break;
		}
    }
	if ( $parent_id !== null ) {
		global $WPVDebug;
        $tax_query_settings['child_of'] = $parent_id;
        $WPVDebug->add_log( 'filters', "Filter by parent with ID {$parent_id}", 'filters', 'Filter by parent term' );
    }
	
	return $tax_query_settings;
}

/**
* wpv_filter_taxonomy_parent_post_query
*
* If we added a child_of setting to the query of a View listing taxonomy terms, we have a filter by parent.
* Note that child_of returns all descendants and not only direct children.
* We adjust this here.
*
* @since 1.12
*/

add_filter( 'wpv_filter_taxonomy_post_query', 'wpv_filter_taxonomy_parent_post_query', 20, 4 );

function wpv_filter_taxonomy_parent_post_query( $items, $tax_query_settings, $view_settings, $view_id ) {
	if ( isset( $tax_query_settings['child_of'] ) ) {
		$parent_id = $tax_query_settings['child_of'];
		foreach( $items as $index => $item ) {
			if ( $item->parent != $parent_id ) {
				unset( $items[$index] );
			}
		}
	}
	return $items;
}