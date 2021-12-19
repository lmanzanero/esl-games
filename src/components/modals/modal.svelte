<script>
	export let isModalOpen;
	export let toggleModal;
	let names = '';
	let canSubmit = true;

	function addNames() {
		console.log(names);
		//convert string to array
		let namesArr = names.split('\n');
	}

	$: {
		if (names.split('\n').length >= 6) {
			canSubmit = false;
		} else {
			canSubmit = true;
		}
	}
</script>

<!-- Modal -->
<div
	class={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${!isModalOpen ? 'hidden' : ''}`}
	id="modal"
>
	<div
		class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"
	>
		<div class="fixed inset-0 transition-opacity">
			<div class="absolute inset-0 bg-gray-900 opacity-75" />
		</div>
		<span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
		<div
			class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-headline"
		>
			<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<!-- <label>Name</label>
				<input type="text" placeholder="Collection Name" class="w-full bg-gray-100 p-2 mt-2 mb-3" /> -->
				<legend class="font-bold tracking-wide text-sm py-2"
					>Words <span class="text-red-400">Notice: Feature not available yet!</span></legend
				>
				<textarea
					bind:value={names}
					class="w-full h-64 shadow-inner p-4 border-0  text-left truncate"
					placeholder="Enter space for new word"
				/>
			</div>
			<div class="w-full flex overflow-x-scroll p-2" />
			<div class="bg-gray-200 px-4 py-3 text-right">
				<button
					type="button"
					class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
					on:click={toggleModal}><i class="fas fa-times" /> Cancel</button
				>
				<button
					on:click={addNames}
					type="button"
					class="py-2 px-4 bg-blue-500 text-white rounded mr-2 {canSubmit
						? 'cursor-not-allowed'
						: ''} disabled:opacity-75"
					disabled={canSubmit}><i class="fas fa-plus" /> Update</button
				>
			</div>
		</div>
	</div>
</div>
