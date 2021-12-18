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
	import Footer from '../../components/footer/Footer.svelte';
	import Header from '../../components/header/Header.svelte';

	export let post;
</script>

<svelte:head>
	<title>{post.metaData.title}</title>
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
		margin: auto;
	}
</style>
