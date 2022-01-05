<script>
	import { supabase } from '$lib/dbConfig';

	import { scoreKeeperStore } from '../../stores/score-keeper';

	export let userData;
	let Users;
	scoreKeeperStore.subscribe((data) => (Users = data.users));
	function updateScore(e) {
		//find all scores and update based on username
		const updatedScores = Users.map((user) => {
			if (user.username == userData.username) {
				user.score += Number(e.target.value);
			}
			return user;
		});
		//return new score object with updatedScores
		scoreKeeperStore.update((store) => Object.assign({}, store, { users: updatedScores }));
	}

	async function removeUser() {
		try {
			// remove from db only if authenticated
			if (supabase.auth.session().user) {
				//remove user from db
				const { data, error } = await supabase
					.from('scorekeeper')
					.delete()
					.match({ id: userData.id });
				console.log(data, error);
				//remove user from ui
				const updatedScores = Users.filter((user) => user.id != userData.id);
				//return new score object with updatedScores
				scoreKeeperStore.update((store) => Object.assign({}, store, { users: updatedScores }));
				// delete from ui state
			} else {
				//remove user from ui
				const updatedScores = Users.filter((user) => user.id != userData.id);
				//return new score object with updatedScores
				scoreKeeperStore.update((store) => Object.assign({}, store, { users: updatedScores }));
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<div class="bg-white relative shadow-md border rounded px-8 pt-5 pb-7 m-2">
	<button
		on:click={removeUser}
		type="button"
		class="bg-red-200 absolute top-0 right-0 rounded-md p-1 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
	>
		<span class="sr-only">Close menu</span>
		<!-- Heroicon name: outline/x -->
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
	<label class="block text-grey-darker text-sm font-bold mb-2" for="username">
		{userData.username}
	</label>
	<div>
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
	</div>
</div>
