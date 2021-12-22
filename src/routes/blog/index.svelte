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
	{#each dateSortedPosts as { path, metadata: { title, tags, date, author, image } }}
		<div class="post">
			<div class="img-container">
				<img
					src={image ? image : 'https://esl-games.vercel.app/esl-social.jpg'}
					alt="Esl Blog title"
				/>
			</div>
			<div class="content">
				<div class="categories">
					{#each tags as tag}
						<a class="tag" href={`/tags/${tag}`}>#{tag}</a>
					{/each}
				</div>
				<!-- Slicing to remove ../../ from blog route -->
				<!-- Todo: Add index.json to remove this issue -->
				<a href={`${path.slice(5).replace('.md', '').replace('.svx', '')}`}
					><h1 class="title">{title}</h1></a
				>
				<p class="exerpt">Exerpt</p>
				<div class="author">
					<div class="profile-img">
						<img
							src="https://res.cloudinary.com/daeq8bixw/image/upload/v1622455008/luis_manzanero_edbee4271a.png"
							alt=""
						/>
					</div>
					<div class="name">{author ? author : 'ESL Team'}</div>
					<div class="date">{new Date(date).toLocaleDateString()}</div>
				</div>
			</div>
		</div>
	{/each}
</div>
<Footer />

<style>
	.posts {
		position: relative;
		text-align: center;
		margin: 1em;
	}

	.posts .post {
		box-shadow: 0 10px 30px 0 rgba(100, 103, 105, 0.2);
		height: 200px;
		margin: 1.5em auto;
		width: 70%;
		display: grid;
		grid-template-columns: 250px auto;
		transition: all 0.5s;
		border-radius: 0.3em;
		color: dimgray;
		overflow: hidden;
	}

	.posts .post:hover {
		box-shadow: 0 10px 30px 0 rgba(100, 103, 105, 0.3);
		transition: all 0.5s;
	}

	.post .content .title {
		font-size: 1.3em;
		margin: 0;
		padding: 0;
		color: cadetblue;
		cursor: pointer;
	}

	.post .content .title:hover {
		color: cadetblue;
	}

	.post .content {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		color: var(--bg-accent);
		text-align: left;
		width: auto;
		margin: 0.5em 1em;
		height: 190px;
	}

	.post .content .categories a {
		color: cadetblue;
		padding-right: 0.4em;
	}

	.post .content .categories a:hover {
		text-decoration: underline;
		color: lightblue;
	}

	.post .content .exerpt {
		display: block;
		height: 50px;
		white-space: wrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.post .img-container {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	.post .img-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.5s;
	}

	.post .img-container img:hover {
		width: 103%;
		height: 103%;
		transition: 0.5s;
	}

	.post .author {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.post .author .profile-img {
		width: 35px;
		height: 35px;
		margin: auto 0.1em;
	}

	.post .author .profile-img img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}

	.post .author .name {
		position: relative;
		margin: auto 0.1em;
		cursor: pointer;
		transition: all 0.5s;
	}

	.post .author .name:hover {
		color: lightblue;
		transition: all 0.5s;
	}

	.post .author .date {
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
	}

	@media only screen and (max-width: 600px) {
		.posts {
			width: 100vw;
			margin: 0;
			padding: 0;
		}

		.posts .post {
			display: grid;
			grid-template-rows: 220px auto;
			grid-template-columns: 1fr;
			height: 400px;
			width: 90%;
		}

		.post .content {
			flex-direction: column;
			height: auto;
		}
	}
</style>
