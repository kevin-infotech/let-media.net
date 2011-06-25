	<form id="filter" class="shadow" action="">
		<fieldset class="search">

			<input id="search_field" name="search[name_like]" title="Find by game title" type="text" value="" />
			<a alt='Reset search' href='#none' id='clear-search'>Clear Search</a>
		</fieldset>
		<fieldset class="sort">
			<a href='#none' id='recent' title='Recent Releases'>Recent Releases</a>
			<a href='#none' id='older' title='Older Releases'>Older Releases</a>
			<input class='filter_input' id='date_input' name='date_sort' type='hidden' />
			<a alt='Reset sort' href='#none' id='clear-sort'>Clear Sort</a>
		</fieldset>
		<fieldset class="filter">
			<select id="search_publisher_like_" name="search[publisher_like][]">
				<option value="">All Publishers</option>
				<option value="Alex Tinti">Alex Tinti</option>
				<option value="Alien After All">Alien After All</option>
				<option value="Astro Ape Studios, LLC">Astro Ape Studios, LLC</option>
				<option value="Atakama Labs">Atakama Labs</option>
				<option value="Atrophy Studios">Atrophy Studios</option>
				<option value="Backflip Studios">Backflip Studios</option>
				<option value="BigStack Studios">BigStack Studios</option>
				<option value="Bonus Level">Bonus Level</option>
				<option value="Venan Entertainment">Venan Entertainment</option>
			</select>
			<select id="search_category_like" name="search[category_like]" unique="true">
				<option value="twitter">Twitter</option>
				<option value="word">Word</option>
			</select>
			<select id='status' name='status_like'>
				<option value=''>All Games</option>
				<option value='ready'>Plus+ Ready</option>
				<option value='soonplus'>Coming Soon to Plus+</option>
				<option value='soonapp'>Coming Soon to the App Store</option>
			</select>
			<a alt='Reset filters' href='#none' id='clear-filters'>Clear Filters</a>
		</fieldset>
	</form>