<script>
	import { scoreKeeperStore } from '../stores/score-keeper';
	import UserCard from '../components/score-keeper/UserCard.svelte';
	import ScoreHeader from '../components/score-keeper/ScoreHeader.svelte';
	import { supabase } from '$lib/dbConfig';

	async function getUserScores() {
		if (supabase.auth.session()) {
			let { data: scorekeeper, error } = await supabase.from('scorekeeper').select('*');
			scoreKeeperStore.set({ users: scorekeeper, canSave: false });
		}
	}
</script>

<svelte:head>
	<!-- elements go here -->
	<title>Score keeper</title>
	<meta
		name="description"
		content="An online tool for scorekeeping, making your online classrooms more engaging, fair, and fun!"
	/>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://esl-games.vercel.app/score-keeper" />
	<meta property="og:title" content="Score Keeper" />
	<meta
		property="og:description"
		content="An online tool for scorekeeping, making your online classrooms more engaging, fair, and fun!"
	/>
	<meta property="og:image" content="https://esl-games.vercel.app/score-keeper.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://esl-games.vercel.app/score-keeper" />
	<meta property="twitter:title" content="Score Keeper" />
	<meta
		property="twitter:description"
		content="An online tool for scorekeeping, making your online classrooms more engaging, fair, and fun!"
	/>
	<meta property="twitter:image" content="https://esl-games.vercel.app/score-keeper.png" />
</svelte:head>
<section class="bg-gray-200 h-screen">
	<ScoreHeader />
	<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 pt-32">
		{#await getUserScores()}
			<p />
			<p class="animate-pulse m-auto">loading...</p>
			<p />
		{:then}
			{#each $scoreKeeperStore.users as user}
				<UserCard userData={user} />
			{/each}
		{/await}
	</div>
</section>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
