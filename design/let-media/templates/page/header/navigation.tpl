{if and(is_set( $DesignKeys:used.url_alias), $DesignKeys:used.url_alias|count|ge(1) )}{def $avail_translation = language_switcher($DesignKeys:used.url_alias)}{else}{def $avail_translation = language_switcher( $site.uri.original_uri)}{/if}
<ul id="nav" class="dropmenu">
	<li class="haschildren">
		<a id="nav-category" href="#">Category<span class="arrow"></span></a>
		<div style="z-index: 1; display: none;" class="submenu shadow">
			<p>e-Business, e-Commerce, e-Marketing, Internet Public Relations, e-Service, Application Development
			Kevin InfoTech is a world leading Internet Information Technology & e-Business Agency. Focus on helping our clients roll out their e-Business strategy through professional ECM, CRM, e-Commerce, e-Marketing(Article Marketing, Internet Advertising, Email Direct Marketing, Search Engine Marketing, Social Media Marketing, and Affiliate Marketing), Internet Public Relations (Interactive Public Relations and Online Reputation Management), SNS, and e-Service solutions. The served clients are famous multinational corporations and leading local enterprises, including SONY, McKinsey, Deutsche Bank, Coca Cola, Disney, Estee Lauder, Grand Hyatt Hotel, Shanghai Stock Exchange, Changhong Electrics and so on.e-Business, e-Commerce, e-Marketing, Internet Public Relations, e-Service, Application Development</p>
		</div>
	</li>
</ul> 