<script context="module">
	export async function load({ page, fetch }) {
		const post = await fetch(`${page.path}.json`).then((res) => res.json());
		const pagePath = page.path;
		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import Footer from '../../components/footer/Footer.svelte';
	import Header from '../../components/header/Header.svelte';

	export let post;
	export let pagePath;
</script>

<svelte:head>
	<title>{post.metaData.title}</title>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://esl-games.vercel.app/{pagePath}" />
	<meta property="og:title" content={post.metaData.title} />
	<meta
		property="og:description"
		content="A collection of real time online games, tools, and activities to use in your classroom or to practice to learn English!"
	/>
	<meta property="og:image" content="https://esl-games.vercel.app/esl-social.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://esl-games.vercel.app/{pagePath}" />
	<meta property="twitter:title" content={post.metaData.title} />
	<meta
		property="twitter:description"
		content="A collection of real time online games, tools, and activities to use in your classroom or to practice to learn English!"
	/>
	<meta property="twitter:image" content="https://esl-games.vercel.app/esl-social.jpg" />
</svelte:head>
<Header />
<article>
	<h1>{post.metaData.title}</h1>
	<p>Published: <span>{new Date(post.metaData.date).toLocaleDateString()}</span></p>
	<div class="categories">
		{#each post.metaData.tags as tag}
			<a class="tag" href={`/tags/${tag}`}>#{tag}</a>
		{/each}
	</div>
	{@html post.content.html}
</article>
<Footer />

<style>
	h1 {
		font-weight: bolder;
	}
	article {
		width: 60vw;
		line-height: 1.77778;
		font-weight: 400;
		margin: 6em auto;
	}
</style>
