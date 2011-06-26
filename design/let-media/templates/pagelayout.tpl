<!DOCTYPE html>
<html class="no-js" lang="{$site.http_equiv.Content-language|wash}">

<head>

{def $user_hash = concat( $current_user.role_id_list|implode( ',' ), ',', $current_user.limited_assignment_value_list|implode(',') )}
{if is_set( $extra_cache_key )|not}{def $extra_cache_key = ''}{/if}
{cache-block keys=array( $module_result.uri, $current_user.contentobject_id, $extra_cache_key )}
{def $pagedata         = ezpagedata()
     $pagestyle        = $pagedata.css_classes
     $assets           = '//kit.com'
     $assets-global    = '//kit.com/global'
     $assets-site      = '//assets.let-media.net/let-media'
     $locales          = fetch('content', 'translation_list')
     $pagedesign       = $pagedata.template_look
     $current_node_id  = $pagedata.node_id
     $enable_dev       = false()}

{include uri='design:page/head/head.tpl'}

</head>

<body id="{$pagedata.class_identifier}" class="{$access_type.name}">

{include uri='design:page/header/header.tpl'}

	<!-- #bd -->
	<div id="bd" class="clearfix">

	{cache-block keys=array( $module_result.uri, $user_hash, $extra_cache_key )}

	{if and( $pagedata.website_toolbar, $pagedata.is_edit|not)}
		{include uri='design:page_toolbar.tpl'}
	{/if}

	{/cache-block}
	
	{if ne($pagedata.class_identifier, home)}
	{include uri='design:page/body/breadcrumbs.tpl'}
	{/if}

{/cache-block}

{$module_result.content}

	</div>
	<!-- /#bd -->

{cache-block keys=array( $module_result.uri, $user_hash, $access_type.name, $extra_cache_key )}

{include uri='design:page/footer/footer.tpl'}
{include uri='design:page/foot/foot.tpl'}

{if $enable_dev}
{include uri='design:utility/page-info.tpl'}
{/if}

{/cache-block}

<!--DEBUG_REPORT-->

</body>

</html>