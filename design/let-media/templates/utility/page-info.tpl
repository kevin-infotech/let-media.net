
<div id="info" class="grid_12">
	<div id="timer"><span id="seconds"></span> s</div>
	
	<div class="grid_6 alpha">
	<h1>$current_node_id</h1>
	{$current_node_id}
	<h1>$site</h1>
	{$site|attribute(show, 1)}
	<h2>$site.http_equiv</h2>
	{$site.http_equiv|attribute(show, 1)}
	<h2>$site.uri</h2>
	{$site.uri|attribute(show, 1)}
	
	<h1>$pagedata</h1>
	{$pagedata|attribute(show, 1)}
	<h2>$pagedata.persistent_variable</h2>
	{$pagedata.persistent_variable|attribute(show, 1)}
	<h2>$pagedata.template_look</h2>
	{$pagedata.template_look|attribute(show, 1)}
	<h2>$pagedata.extra_menu_class_list</h2>
	{$pagedata.extra_menu_class_list|attribute(show, 1)}
	<h2>$pagedata.path_array</h2>
	{$pagedata.path_array|attribute(show, 1)}
	{$pagedata.path_array.0|attribute(show, 1)}
	<h2>$pagedata.path_id_array</h2>
	{$pagedata.path_id_array|attribute(show, 1)}

	<h1>$pagestyle</h1>
	{$pagestyle}
	
	<h1>$assets</h1>
	{$assets}
	
	<h1>$pagedesign</h1>
	{$pagedesign|attribute(show, 1)}

	</div>

	<div class="grid_6 omega">
	<h1>$module_result</h1>
	{$module_result|attribute(show, 1)}
	<h2>$module_result.view_parameters</h2>
	{$module_result.view_parameters|attribute(show, 1)}
	<h2>$module_result.path</h2>
	{$module_result.path|attribute(show, 1)}
	<h2>$module_result.title_path</h2>
	{$module_result.title_path|attribute(show, 1)}
	<h2>$module_result.content_info</h2>
	{$module_result.content_info|attribute(show, 1)}
	<h2>$module_result.template_list</h2>
	{$module_result.template_list|attribute(show, 1)}
	>/div>

</div><!-- #info -->