<script>
	import { goto } from '$app/navigation';

	import { supabase } from '$lib/dbConfig';

	let email;
	let password;

	const signUpUser = async () => {
		let { user, error } = await supabase.auth.signUp({
			email: email,
			password: password
		});
		console.log(user, error);
		if (error) {
			alert(error.message);
		}
	};
</script>

<div class="flex items-center h-screen w-full">
	<div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
		<span class="block w-full text-xl uppercase font-bold mb-4">Sign up</span>
		<form class="mb-4" on:submit|preventDefault={signUpUser}>
			<div class="mb-4 md:w-full">
				<label for="email" class="block text-xs mb-1">Username or Email</label>
				<input
					class="w-full border rounded p-2 outline-none focus:shadow-outline"
					type="email"
					name="email"
					id="email"
					bind:value={email}
					placeholder="Username or Email"
					required
				/>
			</div>
			<div class="mb-6 md:w-full">
				<label for="password" class="block text-xs mb-1">Password</label>
				<input
					class="w-full border rounded p-2 outline-none focus:shadow-outline"
					type="password"
					name="password"
					id="password"
					bind:value={password}
					placeholder="Password"
					required
				/>
			</div>
			<div class="mb-6 md:w-full">
				<label for="password" class="block text-xs mb-1">Password Confirmation</label>
				<input
					class="w-full border rounded p-2 outline-none focus:shadow-outline"
					type="password"
					name="password"
					id="password"
					bind:value={password}
					placeholder="Password"
					required
				/>
			</div>
			<button
				class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
				>Sign up</button
			>
		</form>
		<a class="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
		<br />
		<a class="text-blue-700 text-center text-sm" href="/login">Already have account?</a>
	</div>
</div>
