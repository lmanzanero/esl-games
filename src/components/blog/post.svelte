<script>
	export let data;
	export let path;
</script>

<div class="post">
	<div class="img-container">
		<img
			src={data.image ? data.image : 'https://esl-games.vercel.app/esl-social.jpg'}
			alt="Esl Blog title"
		/>
	</div>
	<div class="content">
		<div class="categories">
			{#each data.tags as tag}
				<a class="tag" href={`/tags/${tag}`}>#{tag}</a>
			{/each}
		</div>
		<!-- Slicing to remove ../../ from blog route -->
		<!-- Todo: Add index.json to remove this issue -->
		<a href={`${path.slice(5).replace('.md', '').replace('.svx', '')}`}
			><h3 class="title">{data.title}</h3></a
		>
		<p class="exerpt">Exerpt</p>
		<div class="author">
			<div class="profile-img">
				<img
					src="https://res.cloudinary.com/daeq8bixw/image/upload/v1622455008/luis_manzanero_edbee4271a.png"
					alt=""
				/>
			</div>
			<div class="name">{data.author ? data.author : 'ESL Team'}</div>
			<div class="date">{new Date(data.date).toLocaleDateString()}</div>
		</div>
	</div>
</div>

<style>
	.post {
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

	.post:hover {
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
		.post {
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
