<script context="module">
	export async function load({ page, url, params, fetch }) {
		console.log('Url: ', url);
		const post = await fetch(`${page.path}.json`).then((res) => res.json());
		const pagePath = page.path;
		return {
			props: {
				post,
				pagePath
			}
		};
	}
</script>

<script>
	import Footer from '../../components/footer/Footer.svelte';
	import Header from '../../components/header/Header.svelte';

	export let post;
	export let pagePath;
	console.log('Post Data: ', post);
	console.log('Page Path: ', pagePath);
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
	<p class="date">Published: <span>{new Date(post.metaData.date).toLocaleDateString()}</span></p>
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
		font-size: 2em;
		color: cadetblue;
	}
	.date {
		font-size: large;
		font-weight: bold;
		color: dimgray;
	}

	.categories {
		display: flex;
		gap: 0.5em;
	}

	a {
		color: cadetblue;
		font-weight: bold;
	}

	a:hover {
		color: rgb(86, 121, 122);
	}

	article {
		width: 60vw;
		line-height: 1.77778;
		margin: 6em auto;
	}

	:global(article figure img) {
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		border-radius: 0.3em;
		margin-top: 1em;
	}

	:global(article figure figcaption) {
		font-family: monospace;
		text-align: center;
		padding: 1em;
		font-style: italic;
	}

	:global(h2) {
		font-size: 1.5em !important;
		font-weight: bolder !important;
		color: dimgray;
	}
	@media only screen and (max-width: 600px) {
		article {
			width: 90vw;
			margin: 1em;
		}
	}
</style>
