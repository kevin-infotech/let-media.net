
	<div id="breadcrumbs" class="container_12 clearfix">
		<nav class="grid_12">{foreach $pagedata.path_array as $path}{if $path.url}<a href={cond( is_set( $path.url_alias ), $path.url_alias, $path.url )|ezurl}>{$path.text|wash}</a>{else}{$path.text|wash}{/if}{delimiter} &raquo; {/delimiter}{/foreach}</nav>
	</div><!-- #breadcrumbs -->