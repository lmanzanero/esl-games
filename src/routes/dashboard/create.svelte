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
</div>
