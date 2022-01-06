<script>
	import { onMount } from 'svelte';
	let selectedTab = 'panel-1';
	onMount(() => {
		const tabs = document.querySelectorAll('.tabs');
		const tab = document.querySelectorAll('.tab');
		const panel = document.querySelectorAll('.tab-content');

		function onTabClick(event) {
			// deactivate existing active tabs and panel
			for (let i = 0; i < tab.length; i++) {
				tab[i].classList.remove('active');
			}

			for (let i = 0; i < panel.length; i++) {
				panel[i].classList.remove('active');
			}

			// activate new tabs and panel
			event.target.classList.add('active');
			let classString = event.target.getAttribute('data-target');
			console.log(classString);
			selectedTab = classString;
			document
				.getElementById('panels')
				.getElementsByClassName(classString)[0]
				.classList.add('active');
		}

		for (let i = 0; i < tab.length; i++) {
			tab[i].addEventListener('click', onTabClick, false);
		}
	});
</script>

<div class="bg-white flex flex-nowrap p-3 gap-2">
	<div class="tabs flex flex-col mt-20 w-42 h-full rounded shadow">
		<button
			data-target="panel-1"
			class="tab active text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none {selectedTab ===
			'panel-1'
				? 'text-blue-500 border-b-2 font-medium border-blue-500'
				: ''}"
		>
			Collections
		</button><button
			data-target="panel-2"
			class="tab ext-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none {selectedTab ===
			'panel-2'
				? 'text-blue-500 border-b-2 font-medium border-blue-500'
				: ''}"
		>
			Classes
		</button><button
			data-target="panel-3"
			class="tab text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none {selectedTab ===
			'panel-3'
				? 'text-blue-500 border-b-2 font-medium border-blue-500'
				: ''}"
		>
			Games
		</button>
	</div>
	<div id="panels" class="w-full bg-white">
		<div class="panel-1 tab-content active py-5">
			<div class="flex justify-between m-2">
				<h3 class="text-4xl font-bold">Collections</h3>
				<button
					class="bg-indigo-600 hover:bg-indigo-700 hover:text-gray-300 group flex items-center rounded-md text-white text-sm font-medium px-4 py-2 mx-2"
				>
					<svg
						class="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
						width="12"
						height="20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
						/>
					</svg>
					New
				</button>
			</div>
			<div class="bg-purple-300 rounded shadow p-2">Hello Collections Box</div>
		</div>
		<div class="panel-2 tab-content py-5 bg-purple-300 rounded shadow">
			<h3 class="text-4xl font-bold">Classes</h3>
		</div>
		<div class="panel-3 tab-content py-5 bg-purple-300 rounded shadow">
			<h3 class="text-4xl font-bold">Games</h3>
		</div>
	</div>
</div>

<style>
	.tab-content {
		display: none;
	}

	.tab-content.active {
		display: block;
	}
</style>
