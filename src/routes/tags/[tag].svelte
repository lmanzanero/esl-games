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
	export const load = async ({ params }) => {
		const posts = await Promise.all(body);
		const tag = params.tag;
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
	import Post from '../../components/blog/post.svelte';

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
<div class="posts">
	{#each filteredPosts as { path, metadata }}
		<Post data={metadata} {path} />
		<!-- <li>
	<a href={`${path.slice(5).replace('.md', '').replace('.svx', '')}`}>{title}</a>
</li> -->
	{/each}
</div>

<style>
	.posts {
		position: relative;
		text-align: center;
		margin: 1em;
	}

	@media only screen and (max-width: 600px) {
		.posts {
			width: 100vw;
			margin: 0;
			padding: 0;
		}
	}
</style>
