<script>
	import { scoreKeeperStore } from '../../stores/score-keeper';

	let newUser = '';
	let Users;
	scoreKeeperStore.subscribe((store) => (Users = store.users));
	function addUser(e) {
		e.preventDefault();
		//ensure new user is not empty
		if (newUser.length < 1) return alert('Username must not be empty');
		//check user already exists
		if (userExists(newUser)) return alert('User already exists!');
		//add user
		Users.push({
			username: newUser,
			score: 0
		});
		scoreKeeperStore.set({ users: Users });
		newUser = '';
	}

	$: {
		console.log(Users);
	}

	//finds if user exists
	function userExists(username) {
		return Users.some((user) => user.username == username);
	}
</script>

<div class="bg-white fixed w-full overflow-hidden z-10 h-32 m-auto shadow">
	<h1 class="text-lg leading-6 font-medium text-black text-center mt-3 mb-3">Score Keeper</h1>
	<div class="flex justify-center">
		<form on:submit={addUser} class="relative">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
				/>
			</svg>
			<input
				bind:value={newUser}
				class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
				type="text"
				aria-label="Add User"
				placeholder="Add User"
			/>
		</form>
		<div class="flex">
			<button
				class="bg-indigo-600 hover:bg-indigo-700 hover:text-gray-300 group flex items-center rounded-md text-white text-sm font-medium px-4 py-2 mx-2"
			>
				<svg
					class="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
					width="12"
					height="20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
					/>
				</svg>
				New
			</button>
			<button
				class="bg-green-600 hover:bg-green-700 hover:text-gray-300 group flex items-center rounded-md text-white text-sm font-medium px-4 py-2"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
					width="20"
					height="20"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
				Save
			</button>
		</div>
	</div>
</div>
