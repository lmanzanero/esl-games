<script>
	import { supabase } from '$lib/dbConfig';

	import { scoreKeeperStore } from '../../stores/score-keeper';
	import SettingsModal from '../modals/SettingsModal.svelte';
	import Settings from './settings.svelte';

	let newUser = '';
	let Users;
	let isSaving = false;
	let isModalOpen = false;

	function toggleModal() {
		return (isModalOpen = !isModalOpen);
	}
	scoreKeeperStore.subscribe((store) => (Users = store.users));
	async function addUser(e) {
		e.preventDefault();
		//ensure new user is not empty
		if (newUser.length < 1) return alert('Username must not be empty');
		//check user already exists
		if (userExists(newUser)) return alert('User already exists!');
		//add user to authenticated users
		if (supabase.auth.user()) {
			try {
				const { data, error } = await supabase
					.from('scorekeeper')
					.insert({ username: newUser, score: 0, user_id: supabase.auth.user().id });
			} catch (error) {
				console.log(error);
			}
		}
		//add user
		Users.push({
			username: newUser,
			score: 0
		});
		scoreKeeperStore.set({ users: Users, canSave: false });
		newUser = '';
	}

	$: {
		console.log(Users);
		console.log('Can Save: ', $scoreKeeperStore.canSave);
	}

	//finds if user exists
	function userExists(username) {
		return Users.some((user) => user.username == username);
	}

	async function saveData() {
		isSaving = true;
		if (supabase.auth.user()) {
			try {
				const { data, error } = await supabase.from('scorekeeper').upsert(Users);
				if (data) {
					isSaving = false;
				}
			} catch (error) {
				console.log(error);
				isSaving = false;
			}
		} else {
			//mock async saving to db
			setTimeout(() => {
				isSaving = false;
			}, 1000);
		}
	}
</script>

{#if !supabase.auth.user()}
	<div class="bg-indigo-900 px-2 py-4 text-center lg:px-4">
		<div
			class="animate-bounce p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
			role="alert"
		>
			<span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
				>New</span
			>
			<span class="font-semibold mr-2 text-left flex-auto"
				>Create an account and save your data!</span
			>
			<a href="/login">
				<svg
					class="fill-current opacity-75 h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					><path
						d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
					/></svg
				></a
			>
		</div>
	</div>
{/if}
<div
	class="bg-gradient-to-r from-purple-500 to-blue-600 fixed w-full overflow-hidden z-10 h-32 p-2 m-auto shadow"
>
	<h1 class="text-lg font-extrabold text-3xl text-gray-200 text-center mt-3 mb-3">Score Keeper</h1>
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
				class="w-full focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
				type="text"
				aria-label="Add User"
				placeholder="Add User"
			/>
		</form>
		<div class="flex">
			<button
				class="bg-indigo-600 hover:bg-indigo-700 hover:text-gray-300 group flex items-center rounded-md text-white text-sm font-medium px-4 py-2 mx-2"
				on:click={toggleModal}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			</button>
			<button
				class="bg-green-600 hover:bg-green-700 hover:text-gray-300 group flex items-center rounded-md text-white text-sm font-medium px-4 py-2 {$scoreKeeperStore.canSave
					? 'cursor-not-allowed'
					: ''}"
				on:click={saveData}
				disabled={$scoreKeeperStore.canSave}
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
				{isSaving ? 'Saving...' : 'Saved'}
			</button>
		</div>
	</div>
	<SettingsModal {isModalOpen} {toggleModal}>
		<Settings />
	</SettingsModal>
</div>
