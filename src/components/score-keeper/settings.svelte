<script>
	import { onMount } from 'svelte';
	onMount(() => {
		let tabsContainer = document.querySelector('#tabs');

		let tabTogglers = tabsContainer.querySelectorAll('a');
		console.log(tabTogglers);

		tabTogglers.forEach(function (toggler) {
			toggler.addEventListener('click', function (e) {
				e.preventDefault();

				let tabName = this.getAttribute('href');

				let tabContents = document.querySelector('#tab-contents');

				for (let i = 0; i < tabContents.children.length; i++) {
					tabTogglers[i].parentElement.classList.remove(
						'border-t',
						'border-r',
						'border-l',
						'-mb-px',
						'bg-white'
					);
					tabContents.children[i].classList.remove('hidden');
					if ('#' + tabContents.children[i].id === tabName) {
						continue;
					}
					tabContents.children[i].classList.add('hidden');
				}
				e.target.parentElement.classList.add(
					'border-t',
					'border-r',
					'border-l',
					'-mb-px',
					'bg-white'
				);
			});
		});

		document.getElementById('default-tab').click();
	});
</script>

<div class="rounded mx-auto">
	<!-- Tabs -->
	<ul id="tabs" class="inline-flex pt-2 px-1 w-full border-b">
		<li
			class="bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px"
		>
			<a class="flex" id="default-tab" href="#first">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 px-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
					/>
				</svg>
				Customize</a
			>
		</li>
		<li class="px-4 text-gray-800 font-semibold py-2 rounded-t">
			<a class="flex" href="#second">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 px-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
					/>
				</svg>Collections</a
			>
		</li>
	</ul>

	<!-- Tab Contents -->
	<div id="tab-contents">
		<div id="first" class="p-4">
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Name </label>
				<input
					class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="name"
					type="text"
					placeholder="Scoreboard name"
				/>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Sort By </label>
				<label class="inline-flex items-center">
					<input type="radio" class="form-radio" name="accountType" value="1" />
					<span class="ml-2">Alpabetically</span>
				</label>
				<label class="inline-flex items-center ml-6">
					<input type="radio" class="form-radio" name="accountType" value="2" />
					<span class="ml-2">Highest Score</span>
				</label>
				<label class="inline-flex items-center ml-6">
					<input type="radio" class="form-radio" name="accountType" value="2" />
					<span class="ml-2">Lowest Score</span>
				</label>
			</div>
			<div class="mb-4">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Score options </label>
				<div class="flex flex-row">
					<input
						type="number"
						class="w-1/4 bg-gray-200 shadow hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 mx-1 rounded"
						value="-1"
					/>
					<input
						type="number"
						class="w-1/4 bg-gray-200 shadow hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 mx-1 rounded"
						value="5"
					/>
					<input
						type="number"
						class="w-1/4 bg-gray-200 shadow hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 mx-1 rounded"
						value="10"
					/>
					<input
						type="number"
						class="w-1/4 bg-gray-200 shadow hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 mx-1 rounded"
						value="15"
					/>
				</div>
			</div>
		</div>
		<div id="second" class="hidden p-4">Collections</div>
	</div>
</div>
