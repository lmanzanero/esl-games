<script>
	import CloseBadge from '../badges/CloseBadge.svelte';
	export let isCorrect;
	export let placeholder = 'Write answer';

	function toggleIsCorrect() {
		return (isCorrect = !isCorrect);
	}
</script>

<div class="flex gap-2">
	<button
		on:click={toggleIsCorrect}
		class="relative p-2 border rounded text-{isCorrect
			? 'green'
			: 'red'}-400 hover:shadow hover:text-{isCorrect ? 'green' : 'red'}-500"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</button>
	<div class="w-full relative">
		<input
			type="text"
			class="relative bg-white border border-purple-500 text-gray-600 placeholder-gray-700 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full py-3 px-2"
			{placeholder}
		/>
	</div>
	<button class="relative p-2 border rounded text-purple-400 hover:shadow hover:text-purple-600">
		<CloseBadge />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
			/>
		</svg>
	</button>
</div>
