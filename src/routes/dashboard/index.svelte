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

<!-- Slot -->
<div class="bg-white">
	<div class="flex justify-between m-2">
		<h3 class="text-4xl font-bold">Dashboard</h3>
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
	<div class="p-2">
		<h3 class="text-center text-3xl py-6">You need to create a collection to host a game!</h3>
		<div class="flex flex-row gap-12 justify-center">
			<button
				class="rounded bg-purple-500 text-gray-300 rounded shadow-md p-4 hover:text-white hover:shadow-lg"
			>
				Create a Collections
			</button>
			<button
				class="rounded bg-blue-400 text-gray-200 rounded shadow-md p-4 hover:text-white  hover:shadow-lg"
			>
				Discover Collections
			</button>
		</div>

		<div class="text-center my-6">
			<a class="underline text-blue-400 hover:text-blue-600" href="#"> Learn from Tutorial </a>
		</div>
	</div>
</div>
