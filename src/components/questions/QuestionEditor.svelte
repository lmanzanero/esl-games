<script>
	import CloseBadge from '../badges/CloseBadge.svelte';
	import Answer from './Answer.svelte';
</script>

<div class="flex flex-col">
	<h3 class="p-2 text-gray-600">Question</h3>
	<div class="flex gap-2">
		<button class="relative p-2 border rounded text-purple-400 hover:shadow hover:text-purple-600">
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
			<CloseBadge />
		</button>
		<button class="relative p-2 border rounded text-purple-400 hover:shadow hover:text-purple-600"
			><svg
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
					d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
				/>
			</svg>
			<CloseBadge />
		</button>
		<input
			type="text"
			class="bg-white border border-purple-500 text-gray-600 placeholder-gray-700 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full py-3 px-2"
			placeholder="Write Question..."
		/>
	</div>
	<div class="flex flex-col gap-3">
		<h3 class="p-2 text-gray-600">Answers</h3>
		<!-- AnswerEditor -->
		<Answer isCorrect={true} />
		<Answer isCorrect={false} />
		<Answer isCorrect={false} placeholder="Answer (Optional)" />
		<Answer isCorrect={false} placeholder="Answer (Optional)" />
	</div>
</div>
