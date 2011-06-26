{def $root_node=fetch( 'content', 'node', hash( 'node_id', $pagedata.root_node) )
	 $top_menu_items=fetch( 'content', 'list', hash( 'parent_node_id', $root_node.node_id,
	 												 'sort_by', $root_node.sort_array, 'class_filter_type',
	 												 'include', 'class_filter_array',
	 												 ezini( 'MenuContentSettings', 'TopIdentifierList', 'menu.ini' ) ) )
	 $top_menu_items_count = $top_menu_items|count()
	 $item_class = array()
	 $current_node_in_path = first_set($pagedata.path_array[1].node_id, 0  )}
	<!-- #hd -->
	<header id="hd">
		<div class="container_12 realtive">
			<div id="contact-now" class="vcard grid_12">{$pagedesign.data_map.contact_now.data_text}</div>
{include uri='design:page/header/navigation.tpl'}		
{include uri='design:page/header/languages.tpl'}
		</div>
	</header>
	<!-- /#hd -->
{undef $root_node $top_menu_items $item_class $top_menu_items_count $current_node_in_path}