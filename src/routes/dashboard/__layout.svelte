<script>
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/dbConfig';
	import SideBar from '../../components/sidebar/SideBar.svelte';
	import { onMount } from 'svelte';
	import Header from '../../components/header/Header.svelte';
	onMount(() => {
		if (!supabase.auth.session()) goto('/login');
	});
</script>

<Header />
<div class="flex w-full">
	<SideBar />
	<div class="flex-1 px-5">
		<slot />
	</div>
</div>
