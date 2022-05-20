<script>
	import Switch from '../../components/common/Switch.svelte';
	let isPrivate = false;
</script>

<div class="bg-white">
	<div class="flex justify-between bg-purple-300 rounded shadow p-3">
		<h3 class="text-4xl font-bold">Create a Collection</h3>
		<div class="flex justify-center items-center gap-2">
			<Switch bind:checked={isPrivate} />
			<p class="text-gray-600 font-bold">{isPrivate ? 'Private' : 'Public'}</p>
		</div>
	</div>
	<div class="flex my-4 gap-3">
		<div class="w-1/3 bg-purple-300 p-3 shadow">Add Cover Image</div>
		<div class="flex-1 bg-purple-300 p-3 shadow">Basic Info</div>
	</div>
	<div class="w-full flex flex-col gap-5 my-4 p-3 bg-purple-300 shadow">
		<h4 class="text-3xl font-bold text-center">Create Method</h4>
		<div class="flex flex-row flex-wrap justify-around">
			<button
				class="w-64 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded inline-flex gap-3 items-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-10 w-10 text-purple-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
					/>
				</svg>
				<div class="flex flex-col text-left">
					<p class="text-2xl font-bold text-g.ray-600">Manual</p>
					<p class="text-gray-600 truncate">Start from scratch</p>
				</div>
			</button>
			<button
				class="w-64 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded inline-flex gap-3 items-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-10 w-10 text-purple-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
					/>
				</svg>
				<div class="flex flex-col text-left">
					<p class="text-2xl font-bold text-gray-600">Import</p>
					<p class="text-gray-600">Quick and Easy</p>
				</div>
			</button>
			<button
				class="w-64 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-8 rounded inline-flex gap-3 items-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-10 w-10 text-purple-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
						clip-rule="evenodd"
					/>
				</svg>
				<div class="flex flex-col text-left">
					<p class="text-2xl font-bold text-gray-600">Spreadsheet</p>
					<p class="text-gray-600">Custom Import</p>
				</div>
			</button>
		</div>
	</div>
</div>
