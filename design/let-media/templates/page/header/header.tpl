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
			<nav id="nav-main" class="grid_12">
				{if $pagedesign.data_map.logo.content.is_valid|not()}<a id="logo" href={"/"|ezurl} title="{$pagedesign.data_map.name.data_text}">{ezini('SiteSettings','SiteName')|wash}</a>
				{else}<a id="logo" href={"/"|ezurl} title="{$pagedesign.data_map.name.data_text}"><img src={$pagedesign.data_map.logo.content[original].full_path|ezroot} alt="{$pagedesign.data_map.logo.content[original].text}" width="{$pagedesign.data_map.logo.content[original].width}" height="{$pagedesign.data_map.logo.content[original].height}" /></a>{/if}
			
				<ul>{if $top_menu_items_count}{foreach $top_menu_items as $key => $item}{set $item_class = cond($current_node_in_path|eq($item.node_id), array("selected"), array())}{if $key|eq(0)}{set $item_class = $item_class|append("firstli")}{/if}{if $top_menu_items_count|eq( $key|inc )}{set $item_class = $item_class|append("lastli")}{/if}{if $item.node_id|eq( $current_node_id )}{set $item_class = $item_class|append("current")}{/if}{if eq( $item.class_identifier, 'link')}<li{if $item_class} class="{$item_class|implode(" ")}"{/if}><a {if eq( $ui_context, 'browse' )}href={concat("content/browse/", $item.node_id)|ezurl}{else}href={$item.data_map.location.content|ezurl}{if and( is_set( $item.data_map.open_in_new_window ), $item.data_map.open_in_new_window.data_int )} rel="external"{/if}{/if} title="{$item.data_map.location.data_text|wash}">{if $item.data_map.location.data_text}{$item.data_map.location.data_text|wash()}{else}{$item.data_map.short_name|wash()}{/if}</a></li>{else}<li{if $item_class} class="{$item_class|implode(" ")}"{/if}><a href={if eq( $ui_context, 'browse' )}{concat("content/browse/", $item.node_id)|ezurl}{else}{$item.url_alias|ezurl}{/if}>{$item.data_map.short_name.content|wash()}</a></li>{/if}{/foreach}{/if}</ul>
			</nav>
{include uri='design:page/header/languages.tpl'}
		</div>
	</header>
	<!-- /#hd -->
{undef $root_node $top_menu_items $item_class $top_menu_items_count $current_node_in_path}