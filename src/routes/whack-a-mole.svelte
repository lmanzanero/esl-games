<script>
	import { onMount } from 'svelte';
	let lastHole;
	let timeUp = false;
	let score = 10;
	let isListening = false;

	onMount(() => {
		const holes = document.querySelectorAll('.hole');
		function peep() {
			const hole = randomHole(holes);
			hole.classList.add('up');
			setTimeout(() => {
				hole.classList.remove('up');
				if (!timeUp) peep();
			}, 2000);
		}

		function startGame() {
			timeUp = false;
			score = 0;
			peep();
			console.log('Starting Game');
			setTimeout(() => (timeUp = true), 10000);
		}

		document.querySelector('.start').addEventListener('click', startGame);

		function randomHole(holes) {
			const idx = Math.floor(Math.random() * holes.length);
			const hole = holes[idx];
			if (hole === lastHole) {
				console.log('Ah nah thats the same one bud');
				return randomHole(holes);
			}
			lastHole = hole;
			return hole;
		}

		function randomTime(min, max) {
			return Math.round(Math.random() * (max - min) + min);
		}

		function peep() {
			const time = randomTime(200, 1000);
			const hole = randomHole(holes);
			hole.classList.add('up');
			setTimeout(() => {
				hole.classList.remove('up');
				if (!timeUp) peep();
			}, time);
		}
	});

	function bonk(e) {
		console.log(e.target);
		if (!e.isTrusted) return; // cheater!
		score++;
		this.parentNode.classList.remove('up');
	}
</script>

<svelte:head>
	<!-- elements go here -->
	<title>ESL Whack a Mole</title>
	<meta
		name="description"
		content="A fun interactive, real time Whack a mole game. Use your voice to walk moles and words from your screen!"
	/>
</svelte:head>
<div class="game-container">
	<h1>Whack-a-mole! <span class="score">{score}</span></h1>
	<div class="game">
		<div class="hole up hole1">
			<div class="mole" on:click={bonk} />
		</div>
		<div class="hole hole2">
			<div class="mole" on:click={bonk} />
		</div>
		<div class="hole hole3">
			<div class="mole" on:click={bonk} />
		</div>
		<div class="hole hole4">
			<div class="mole" on:click={bonk} />
		</div>
		<div class="hole hole5">
			<div class="mole" on:click={bonk} />
		</div>
		<div class="hole hole6">
			<div class="mole" on:click={bonk} />
		</div>
	</div>
	<button
		type="button"
		class="flex start justify-center justify-center m-auto px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150"
		on:click={() => (isListening = !isListening)}
	>
		<svg
			class={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${isListening ? 'hidden' : ''}`}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			><circle
				class="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			/><path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/></svg
		>
		{isListening ? 'Start Game' : 'Listening ...'}
	</button>
	<p class="text-center p-4 m-auto text-white text-base font-semibold">
		You Said: <span class="text-green-700">Hello</span>
	</p>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	.game-container {
		height: 100vh;
		width: 100vw;
		background: #00b7ff;
		padding: 0;
		margin: 0;
	}

	h1 {
		text-align: center;
		font-size: 4rem;
		line-height: 1;
		padding: 0.2em;
		font-family: 'Amatic SC', cursive;
	}

	.score {
		background: rgba(255, 255, 255, 0.2);
		padding: 0 2rem;
		border-radius: 1rem;
	}

	.game {
		width: 600px;
		height: 400px;
		display: flex;
		flex-wrap: wrap;
		margin: 4em auto;
	}

	.hole {
		flex: 1 0 33.33%;
		overflow: hidden;
		position: relative;
	}

	.hole:after {
		display: block;
		background: url('/dirt.svg') bottom center no-repeat;
		background-size: contain;
		content: '';
		width: 100%;
		height: 70px;
		position: absolute;
		z-index: 2;
		bottom: -30px;
	}

	.mole {
		background: url('/mole.svg') bottom center no-repeat;
		background-size: 60%;
		position: absolute;
		top: 100%;
		width: 100%;
		height: 100%;
		transition: all 0.4s;
	}

	.hole.up .mole {
		top: 0;
	}
</style>
