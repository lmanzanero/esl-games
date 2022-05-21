<script>
	import Question from '../../components/questions/Question.svelte';
	import Switch from '../../components/common/Switch.svelte';
	import QuizModal from '../../components/modals/QuizModal.svelte';
	import QuestionEditor from '../../components/questions/QuestionEditor.svelte';
	let isPrivate = false;
	let isModalOpen = false;

	function toggleModal() {
		return (isModalOpen = !isModalOpen);
	}
</script>

<div class="bg-white">
	<QuizModal {isModalOpen} {toggleModal}>
		<QuestionEditor />
	</QuizModal>
	<div class="flex justify-between bg-purple-300 rounded shadow p-3">
		<h3 class="text-4xl font-bold">Create a Collection</h3>
		<div class="flex justify-center items-center gap-2">
			<Switch bind:checked={isPrivate} />
			<p class="text-gray-600 font-bold">{isPrivate ? 'Private' : 'Public'}</p>
			<button
				class="bg-white w-28 py-2 ml-6 rounded-lg shadow-lg font-bold text-purple-500 hover:bg-gray-200"
				>Save</button
			>
		</div>
	</div>
	<div class="flex my-4 gap-3">
		<div
			class="w-1/2 flex flex-col items-center justify-center gap-5 bg-purple-300 p-3 shadow border-2 border-dotted border-gray-600 rounded"
		>
			<h3 class="text-2xl font-bold">Add Cover Image</h3>
			<p class="text-lg">Drag and Drop an Image...less than 2.5mb</p>

			<div class="flex justify-around gap-3">
				<label
					class="w-40 flex flex-row p-2 gap-3 items-center justify-center bg-white text-blue rounded-lg shadow-lg text-xs border border-blue cursor-pointer hover:bg-blue hover:text-gray-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-purple-400"
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
					<span class="mt-2 text-base leading-normal">Gallery</span>
					<input type="file" class="hidden" />
				</label>
				<label
					class="w-40 flex flex-row p-2 gap-3 items-center justify-center bg-white text-blue rounded-lg shadow-lg text-xs border border-blue cursor-pointer hover:bg-blue hover:text-gray-600"
				>
					<svg
						class="w-8 h-8 text-purple-400"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
						/>
					</svg>
					<span class="mt-2 text-base leading-normal">File</span>
					<input type="file" class="hidden" />
				</label>
				<label
					class="w-40 flex flex-row p-2 gap-3 items-center justify-center bg-white text-blue rounded-lg shadow-lg text-xs border border-blue cursor-pointer hover:bg-blue hover:text-gray-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 text-purple-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
						/>
					</svg>
					<span class="mt-2 text-base leading-normal">Url</span>
					<input type="file" class="hidden" />
				</label>
			</div>
		</div>
		<div class="flex-1 h-72 bg-purple-300 px-3 py-5 rounded shadow">
			<div class="mb-6">
				<label for="username-success" class="block mb-2 text-sm font-medium text-gray-600"
					>Name (required)</label
				>
				<input
					type="text"
					id="username-success"
					class="bg-white border border-gray-500 text-gray-600 placeholder-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full py-4 px-2"
					placeholder="Add a descriptive title"
				/>
				<!-- <p class="mt-2 text-sm text-green-600 dark:text-green-500">
					<span class="font-medium">Alright!</span> Username available!
				</p> -->
			</div>
			<div>
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
					>Your message</label
				>
				<textarea
					id="message"
					rows="3"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
					placeholder="Leave a comment..."
				/>
				<p class="mt-2 text-sm text-red-600">
					<span class="font-medium">Oops!</span> Please keep under 50 words!
				</p>
			</div>
		</div>
	</div>
	<div class="w-full flex flex-col gap-5 my-4 p-3 bg-purple-300 shadow">
		<h4 class="text-3xl font-bold text-center">Create Method</h4>
		<div class="flex flex-row flex-wrap justify-around">
			<button
				on:click={toggleModal}
				class="w-64 bg-white hover:bg-gray-100 shadow-lg text-gray-800 font-bold py-4 px-8 rounded inline-flex gap-3 items-center"
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
				class="w-64 bg-white hover:bg-gray-100 shadow-lg text-gray-800 font-bold py-4 px-8 rounded inline-flex gap-3 items-center"
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
				class="w-64 bg-white hover:bg-gray-100 shadow-lg text-gray-800 font-bold py-4 px-8 rounded inline-flex gap-3 items-center"
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
	<p class="w-full flex gap-3 justify-center text-2xl text-gray-600 pl-4">
		No Questions Yet <svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</p>
	<Question question="Where is pluto?" />
	<Question question="Where is Mars?" />
</div>
