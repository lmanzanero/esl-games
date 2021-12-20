<script>
	import { whackaMoleStore } from '../../stores/whack-a-mole';
</script>

<!-- <label>Name</label>
<input type="text" placeholder="Collection Name" class="w-full bg-gray-100 p-2 mt-2 mb-3" /> -->
<legend class="font-bold tracking-wide text-sm py-2"
	>Words <span class="text-red-400">Notice: Feature not available yet!</span></legend
>
<textarea
	bind:value={$whackaMoleStore.names}
	class="w-full h-64 shadow-inner p-4 border-0  text-left truncate"
	placeholder="Enter space for new word"
/>
