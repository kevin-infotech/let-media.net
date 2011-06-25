	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

{let node_metas=fetch(content, node, hash(node_id, $module_result.node_id))}
	<meta name="keywords" content="{$node_metas.object.data_map.meta_keywords.value.keyword_string}">
	<meta name="description" content="{$node_metas.object.data_map.meta_description.content}">
{/let}