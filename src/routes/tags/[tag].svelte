<script context="module">
	const allPosts = import.meta.glob('../../blog/*.{md,svx}');
	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}
	export const load = async ({ page }) => {
		const posts = await Promise.all(body);
		const tag = page.params.tag;
		const filteredPosts = posts.filter((post) => {
			return post.metadata.tags.includes(tag);
		});
		return {
			props: {
				filteredPosts,
				tag
			}
		};
	};
</script>

<script>
	export let filteredPosts;
	export let tag;
</script>

<svelte:head>
	<!-- elements go here -->
	<title>{tag} - Blog</title>
	<meta
		name="description"
		content="A collection of {tag} blog post from ESL teachers all over the world - sharing their ESL tools, games, and ideas."
	/>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://esl-games.vercel.app/tags/{tag}" />
	<meta property="og:title" content="{tag} - Blog" />
	<meta
		property="og:description"
		content="A collection of {tag} blog post from ESL teachers all over the world - sharing their ESL tools, games, and ideas."
	/>
	<meta property="og:image" content="https://esl-games.vercel.app/esl-social.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://esl-games.vercel.app/tags/{tag}" />
	<meta property="twitter:title" content="Blog" />
	<meta
		property="twitter:description"
		content="A collection of {tag} blog post from ESL teachers all over the world - sharing their ESL tools, games, and ideas."
	/>
	<meta property="twitter:image" content="https://esl-games.vercel.app/esl-social.jpg" />
</svelte:head>

<h1>{tag}</h1>

{#each filteredPosts as { path, metadata: { title } }}
	<li>
		<a href={`${path.slice(5).replace('.md', '').replace('.svx', '')}`}>{title}</a>
	</li>
{/each}
