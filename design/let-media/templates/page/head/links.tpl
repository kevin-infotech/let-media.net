	<link rel="shortcut icon" href="{$assets-global}/img/favicon.ico">
	<link rel="apple-touch-icon" href="{$assets-global}/img/apple-touch-icon.png">
	<link rel="alternate" type="application/rss+xml" title="RSS" href="{$pagedesign.data_map.rss_feed.data_text|ezurl(no)}" />
	<link rel="sitemap" type="application/xml" title="{'%sitetitle: Sitemap'|i18n('global/head',,hash('%sitetitle',$site.title))|wash}" href="/sitemap.xml">
	<link rel="home" href={"/"|ezurl} title="{'%sitetitle: Home Page'|i18n('global/head',,hash('%sitetitle',$site.title))|wash}">
	<link rel="index" href={"/sitemap/"|ezurl} title="{'%sitetitle: Index Page'|i18n('global/head',,hash('%sitetitle',$site.title))|wash}">
	<link rel="search" href={"/search/"|ezurl} title="{'%sitetitle: Search'|i18n('global/head',,hash('%sitetitle',$site.title))|wash}">
	<link rel="copyright" href="http://www.kevin-infotech.com/" title="{'Kevin InfoTech'|i18n('global/copyright')}">
	<link rel="author" href="http://www.kevin-morgan.org/" title="{'Kevin MORGAN'|i18n('global/copyright')}">

{if $enable_dev}
{include uri='design:utility/page-timer.tpl'}
{/if}
	<script src="{$assets-global}/js/lib/head-0.9.6.js"></script>
	<link rel="stylesheet" href="{$assets-global}/../min/b=global/css&f=html5-reset.css,html5-typography.css,css3.css,clearfix.css,gs.12.css">
	<link rel="stylesheet" href="{$assets-site}/css/global.css">
	<link rel="stylesheet" href="{$assets-site}/css/widget.css">