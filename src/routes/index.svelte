<script>
	import Header from '../components/header/Header.svelte';
	import Footer from '../components/footer/Footer.svelte';
</script>

<svelte:head>
	<!-- elements go here -->
	<title>ESL Real-Time Games - Online classroom games, tools, and activities!</title>
	<meta
		name="description"
		content="A collection of real time online games, tools, and activities to use in your classroom or to practice to learn English!"
	/>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://esl-games.vercel.app/" />
	<meta
		property="og:title"
		content="ESL Real-Time Games - Online classroom games, tools, and activities!"
	/>
	<meta
		property="og:description"
		content="A collection of real time online games, tools, and activities to use in your classroom or to practice to learn English!"
	/>
	<meta property="og:image" content="https://esl-games.vercel.app/esl-social.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://esl-games.vercel.app/" />
	<meta
		property="twitter:title"
		content="ESL Real-Time Games - Online classroom games, tools, and activities!"
	/>
	<meta
		property="twitter:description"
		content="A collection of real time online games, tools, and activities to use in your classroom or to practice to learn English!"
	/>
	<meta property="twitter:image" content="https://esl-games.vercel.app/esl-social.jpg" />
</svelte:head>
<Header />
<section style="background-color: #667eea">
	<div class="container mx-auto px-6 text-center py-20">
		<h1 class="mb-6 text-4xl font-bold text-center text-white">ESL Real-Time Games</h1>
		<h3 class="my-4 text-2xl text-white">
			A collection of games, tools, and activities to use for your classroom!
		</h3>
		<a class="flex justify-center" href="https://github.com/lmanzanero/esl-games" target="_blank">
			<button
				class="bg-white flex justify-center font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-dark hover:bg-gray-200"
			>
				Contribute
				<svg
					aria-hidden="true"
					class="mx-2 octicon octicon-mark-github"
					height="24"
					version="1.1"
					viewBox="0 0 16 16"
					width="24"
					><path
						fill-rule="evenodd"
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					/>
				</svg>
			</button></a
		>
	</div>
</section>

<!-- Features -->
<section class="container mx-auto px-6 p-10">
	<h2 class="text-4xl font-bold text-center text-gray-800 mb-8">Games & Tools</h2>
	<div class="flex items-center flex-wrap my-5">
		<div class="w-full md:w-1/2 pr-10">
			<h4 class="text-3xl text-gray-800 font-bold mb-3">Score Keeper</h4>
			<p class="text-gray-600 mb-8">
				An online tool for scorekeeping, making your online classrooms more engaging, fair, and fun!
				Enter student or participants names, adjust their scores accordingly, rank each player, and
				keep track of everyone's score!
			</p>
			<a href="/score-keeper" class="text-indigo-600 hover:text-indigo-700">Demo &rarr;</a>
		</div>
		<div class="w-full md:w-1/2">
			<img
				class="rounded-lg h-96 m-1 object-cover shadow-lg"
				src="score-keeper.png"
				alt="Score Keeper - ESL Real Time Game"
				title="Esl Score Keeper"
			/>
		</div>
	</div>
	<div class="flex items-center flex-wrap my-5">
		<div class="w-full md:w-1/2">
			<img
				class="rounded-lg h-96 m-auto object-cover shadow-lg"
				src="tic-tac-toe.png"
				alt="Tic Tac Toe - ESL Real Time Game"
				title="Esl Tic Tac Toe"
			/>
		</div>
		<div class="w-full md:w-1/2 pl-10">
			<h4 class="text-3xl text-gray-800 font-bold mb-3">Tic-Tic-Toe</h4>
			<p class="text-gray-600 mb-8">
				A fun interactive, real time tic-tac-toe game with voice recongition to for ESL students.
				This game allows students to pactice their vocabulary using word they have been learning in
				class. Pair students and have them play using their voice!
			</p>
			<a href="/tic-tac-toe" class="text-indigo-600 hover:text-indigo-700">Demo &rarr;</a>
		</div>
	</div>
	<div class="flex items-center flex-wrap my-5">
		<div class="w-full md:w-1/2 pr-10">
			<h4 class="text-3xl text-gray-800 font-bold mb-3">Whack a mole</h4>
			<p class="text-gray-600 mb-8">
				A fun interactive, real time Whack a mole game. Use your voice to walk moles and words from
				your screen! Student can say each and whack the words from their screen. Let's see which
				student can whack the most moles in a round!
			</p>
			<a href="/whack-a-mole" class="text-indigo-600 hover:text-indigo-700">Demo &rarr;</a>
		</div>
		<div class="w-full md:w-1/2">
			<img
				class="rounded-lg h-96 m-auto object-cover shadow-lg"
				src="whack-a-mole.png"
				alt="Whack a Mole - ESL Real Time Game"
				title="Esl Whack a mole"
			/>
		</div>
	</div>
	<div class="flex items-center flex-wrap my-5">
		<div class="w-full md:w-1/2">
			<img
				class="rounded-lg h-96 m-auto object-cover shadow-lg"
				src="wheel-of-names.png"
				alt="Wheel of names"
				title="Wheel of names"
			/>
		</div>
		<div class="w-full md:w-1/2 pl-10">
			<h4 class="text-3xl text-gray-800 font-bold mb-3">Wheel of Names</h4>
			<p class="text-gray-600 mb-8">
				A fun, free and easy to use spinner to make your class more engaging. Add names or words,
				and spin the wheel to randomly choose one!
			</p>
			<a href="/wheel-of-names" class="text-indigo-600 hover:text-indigo-700">Demo &rarr;</a>
		</div>
	</div>
	<div class="container mx-auto px-6 text-center py-10">
		<a href="/games">
			<button
				class="bg-indigo-600 text-gray-300 font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-indigo-500"
			>
				View More
			</button>
		</a>
	</div>
</section>
<Footer />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
