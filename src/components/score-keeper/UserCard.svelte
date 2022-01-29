<script>
	import { supabase } from '$lib/dbConfig';

	import { scoreKeeperStore } from '../../stores/score-keeper';

	export let userData;
	let Users;
	scoreKeeperStore.subscribe((data) => (Users = data.users));
	function updateScore(e) {
		if (isNaN(e.target.value)) {
			alert('Value must be number');
			return false;
		}
		//find all scores and update based on username
		const updatedScores = Users.map((user) => {
			if (user.username == userData.username) {
				console.log(e.target.value);
				if (e.target.value.includes('+') || e.target.value.includes('-')) {
					user.score += Number(e.target.value);
				} else {
					user.score = Number(e.target.value);
				}
			}
			return user;
		});
		//return new score object with updatedScores
		scoreKeeperStore.update((store) => Object.assign({}, store, { users: updatedScores }));
	}

	async function removeUser() {
		try {
			// remove from db only if authenticated
			if (supabase.auth.session()) {
				//remove user from db
				const { data, error } = await supabase
					.from('scorekeeper')
					.delete()
					.match({ id: userData.id });
				console.log('Data: ', data, error);
				//remove user from ui
				const updatedScores = Users.filter((user) => user.id != userData.id);
				//return new score object with updatedScores
				scoreKeeperStore.update((store) => Object.assign({}, store, { users: updatedScores }));
				// delete from ui state
			} else {
				//remove user from ui based on name, since no id's are being saved
				const updatedScores = Users.filter((user) => user.username != userData.username);
				//return new score object with updatedScores
				scoreKeeperStore.update((store) => Object.assign({}, store, { users: updatedScores }));
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<div class="bg-blue-500 relative shadow rounded px-4 pt-2 pb-3 m-2">
	<button
		on:click={removeUser}
		type="button"
		class="bg-red-300 absolute top-0 right-0 rounded text-gray-500 hover:text-gray-600 hover:bg-red-400"
	>
		<span class="sr-only">Close menu</span>
		<svg
			class="h-5 w-5"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	</button>
	<label class="block text-grey-darker text-sm font-bold mb-2 pl-1" for="username">
		{userData.username}
	</label>
	<div class="inline-flex">
		<input
			class="shadow p-2 appearance-none border rounded mx-1 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
			id="score"
			type="text"
			placeholder={userData.score}
			value={userData.score}
			on:keyup={updateScore}
		/>
		<button
			on:click={updateScore}
			class="bg-gray-300 shadow hover:bg-gray-400 shadow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
			value="-1"
		>
			-1
		</button>
		<button
			on:click={updateScore}
			class="bg-gray-300 shadow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
			value="+5"
		>
			+5
		</button>
		<button
			on:click={updateScore}
			class="bg-gray-300 shadow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
			value="+10"
		>
			+10
		</button>
		<button
			on:click={updateScore}
			class="bg-gray-300 shadow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
			value="+15"
		>
			+15
		</button>
	</div>
	<!-- <div>
		<input
			class="w-16 shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
			id="score"
			type="text"
			placeholder={userData.score}
		/>
		<button
			on:click={updateScore}
			value="-1"
			class="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white py-2 px-3 rounded"
			type="button"
		>
			-1
		</button>
		<button
			on:click={updateScore}
			value="10"
			class="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white py-2 px-3 rounded"
			type="button"
		>
			+10
		</button>
		<button
			on:click={updateScore}
			value="20"
			class="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white py-2 px-3 rounded"
			type="button"
		>
			+20
		</button>
		<button
			on:click={updateScore}
			value="50"
			class="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-2 text-white py-2 px-3 rounded"
			type="button"
		>
			+50
		</button>
	</div> -->
</div>
