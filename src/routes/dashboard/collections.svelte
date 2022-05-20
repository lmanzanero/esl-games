<script>
	import CollectionCard from '../../components/dashboard/CollectionCard.svelte';
</script>

<div class="bg-white">
	<div class="flex justify-between bg-purple-300 rounded shadow p-3">
		<h3 class="text-4xl font-bold">Collections</h3>
		<div class="font-sans rounded text-black bg-blue-400 flex items-center justify-center">
			<div class="border-4 border-blue-300 rounded overflow-hidden flex">
				<input type="text" class="px-4 py-2" placeholder="Search..." />
				<button class="flex items-center justify-center px-4">
					<svg
						class="h-4 w-4 text-gray-300 "
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						><path
							d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>
	<div class="flex flex-row flex-wrap justify-between gap-2">
		<CollectionCard />
		<CollectionCard />
		<CollectionCard />
		<CollectionCard />
	</div>
</div>
