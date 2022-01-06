<script>
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/dbConfig';
	import { onMount } from 'svelte';
	import Header from '../../components/header/Header.svelte';
	onMount(() => {
		if (!supabase.auth.session()) goto('/login');
	});
</script>

<Header />
