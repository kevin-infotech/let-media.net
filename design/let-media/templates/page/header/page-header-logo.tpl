{if and(is_set( $DesignKeys:used.url_alias), $DesignKeys:used.url_alias|count|ge(1) )}{def $avail_translation = language_switcher($DesignKeys:used.url_alias)}{else}{def $avail_translation = language_switcher( $site.uri.original_uri)}{/if}
		<ul id="languages">

{foreach $avail_translation as $siteaccess => $lang}
			<li{if $siteaccess|eq($access_type.name)} class="current_siteaccess"{/if}><a href={$lang.url|ezurl}>{$lang.text|wash}</a></li>

{/foreach}
		</ul>