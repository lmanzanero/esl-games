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
	export const load = async () => {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	import Post from '../../components/blog/post.svelte';
	import Footer from '../../components/footer/Footer.svelte';
	import Header from '../../components/header/Header.svelte';

	export let posts;
	// @ts-ignore
	const dateSortedPosts = posts.slice().sort((post1, post2) => {
		// @ts-ignore
		return new Date(post2.metadata.date) - new Date(post1.metadata.date);
	});
</script>

<svelte:head>
	<!-- elements go here -->
	<title>blog</title>
	<meta
		name="description"
		content="A collection of blog post from ESL teachers all over the world - sharing their ESL tools, games, and ideas."
	/>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://esl-games.vercel.app/blog" />
	<meta property="og:title" content="Blog" />
	<meta
		property="og:description"
		content="A collection of blog post from ESL teachers all over the world - sharing their ESL tools, games, and ideas."
	/>
	<meta property="og:image" content="https://esl-games.vercel.app/esl-social.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://esl-games.vercel.app/blog" />
	<meta property="twitter:title" content="Blog" />
	<meta
		property="twitter:description"
		content="A collection of blog post from ESL teachers all over the world - sharing their ESL tools, games, and ideas."
	/>
	<meta property="twitter:image" content="https://esl-games.vercel.app/esl-social.jpg" />
</svelte:head>
<Header />
<h1 class="mb-6 text-4xl font-bold text-center text-gray-700">Blog</h1>
<p class="my-4 text-center text-gray-500">
	A collection of blog post from ESL teachers all over the world - sharing their ESL tools, games,
	and ideas.
</p>
<div class="posts">
	{#each dateSortedPosts as { path, metadata }}
		<Post data={metadata} {path} />
	{/each}
</div>
<Footer />

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
