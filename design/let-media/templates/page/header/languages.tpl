{if and(is_set($DesignKeys:used.url_alias), $DesignKeys:used.url_alias|count|ge(1) )}{def $avail_translation = language_switcher($DesignKeys:used.url_alias)}{else}{def $avail_translation = language_switcher( $site.uri.original_uri)}{/if}<div id="languages" class="grid_12">
			<span id="switch" title="{foreach $avail_translation as $siteaccess => $lang}{if eq($siteaccess, $access_type.name)}{$lang.text|wash}{/if}{/foreach}" class="grid_12 right openLeft orange disno">

{foreach $avail_translation as $siteaccess => $lang}
{if ne($siteaccess, $access_type.name)}
				<li><a class="{$siteaccess}" href={$lang.url|ezurl}>{$lang.text|wash}</a></li>

{/if}
{/foreach}
			</span>
		<div>
