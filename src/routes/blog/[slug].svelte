<script context="module">
	export async function load({ page, fetch }) {
		const post = await fetch(`${page.path}.json`).then((res) => res.json());
		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	export let post;
</script>

{@html post.content.html}
<svelte:head>
	<title>{post.metaData.title}</title>
</svelte:head>
