<script>
	import NamesInput from '../components/whack-a-mole/NamesInput.svelte';
	import { onMount } from 'svelte';
	import Modal from '../components/modals/modal.svelte';
	import { whackaMoleStore } from '../stores/whack-a-mole';
	import { supabase } from '$lib/dbConfig';
	let lastHole;
	let timeUp = false;
	let score = 0;
	let isListening = false;
	let canStart = false;
	let isModalOpen = false;
	let speech = '';

	function toggleModal() {
		return (isModalOpen = !isModalOpen);
	}

	$: {
		console.log(speech);
		if ($whackaMoleStore.names.split('\n').length >= 6) {
			canStart = true;
		} else {
			canStart = false;
		}
	}
	onMount(() => {
		const holes = document.querySelectorAll('.hole');
		let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const recognition = new SpeechRecognition();
		recognition.interimResults = true;
		recognition.continuous = true;
		recognition.addEventListener('result', (e) => {
			const transcript = Array.from(e.results)
				.map((result) => result[0])
				.map((result) => result.transcript)
				.join('');
			speech = transcript.split(' ').at(-1);
		});
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
			speech = '';
			peep();
			recognition.start();
			setTimeout(() => {
				timeUp = true;
				isListening = false;
				recognition.stop();
			}, 10000);
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

		function randomWord(words) {
			return words.split('\n')[Math.floor(Math.random() * words.split('\n').length)];
		}

		function peep() {
			const time = randomTime(200, 2000);
			const hole = randomHole(holes);
			hole.children[0].textContent = randomWord($whackaMoleStore.names);
			hole.classList.add('up');
			setTimeout(() => {
				hole.classList.remove('up');
				if (!timeUp) peep();
				if (speech.toLowerCase().includes(hole.children[0].textContent.toLowerCase())) score++;
			}, time);
		}
	});

	function bonk(e) {
		if (!e.isTrusted) return; // cheater!
		score++;
		speech = '';
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
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://esl-games.vercel.app/whack-a-mole" />
	<meta property="og:title" content="ESL Whack a Mole" />
	<meta
		property="og:description"
		content="A fun interactive, real time Whack a mole game. Use your voice to walk moles and words from your screen!"
	/>
	<meta property="og:image" content="https://esl-games.vercel.app/whack-a-mole.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://esl-games.vercel.app/whack-a-mole" />
	<meta property="twitter:title" content="ESL Whack a Mole" />
	<meta
		property="twitter:description"
		content="A fun interactive, real time Whack a mole game. Use your voice to walk moles and words from your screen!"
	/>
	<meta property="twitter:image" content="https://esl-games.vercel.app/whack-a-mole.png" />
</svelte:head>
<svelte:window />
{#if !supabase.auth.user()}
	<div class="bg-indigo-900 text-center py-4 lg:px-4">
		<div
			class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
			role="alert"
		>
			<span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
				>New</span
			>
			<span class="font-semibold mr-2 text-left flex-auto"
				>Create an account and save your data!</span
			>
			<a href="/login">
				<svg
					class="fill-current opacity-75 h-4 w-4"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					><path
						d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
					/></svg
				></a
			>
		</div>
	</div>
{/if}
<div class="game-container">
	<h1>Whack-a-mole! <span class="score">{score}</span></h1>
	<div class="game">
		<div class="hole up hole1">
			<div class="mole" on:click={bonk}>Carrots</div>
		</div>
		<div class="hole hole2">
			<div class="mole" on:click={bonk}>Red</div>
		</div>
		<div class="hole hole3">
			<div class="mole" on:click={bonk}>Christmas</div>
		</div>
		<div class="hole hole4">
			<div class="mole" on:click={bonk}>Phone</div>
		</div>
		<div class="hole hole5">
			<div class="mole" on:click={bonk}>Pizza</div>
		</div>
		<div class="hole hole6">
			<div class="mole" on:click={bonk}>Cookie</div>
		</div>
	</div>
	<div class="flex w-full m-auto md:w-1/4">
		<button
			type="button"
			class="flex start justify-center justify-center m-auto px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 {isListening ||
			!canStart
				? 'cursor-not-allowed'
				: ''}"
			on:click={() => (isListening = !isListening)}
			disabled={isListening || !canStart}
		>
			<svg
				class={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${!isListening ? 'hidden' : ''}`}
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
			{!isListening ? 'Start Game' : 'Listening ...'}
		</button>
		<button
			on:click={toggleModal}
			class="flex start justify-center justify-center m-auto px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150"
			>Edit Words</button
		>
	</div>
	<p class="text-center p-4 m-auto text-white text-base font-semibold">
		You Said: <span class="text-green-700">{speech}</span>
	</p>
</div>
<Modal {isModalOpen} {toggleModal}>
	<NamesInput />
</Modal>

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
		margin: 2em auto;
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
		background-size: 50%;
		position: absolute;
		top: 100%;
		width: 100%;
		height: 100%;
		color: #2c394b;
		text-align: center;
		font-size: larger;
		font-weight: bolder;
		transition: all 0.4s;
	}

	.hole.up .mole {
		top: 0;
	}

	@media only screen and (max-width: 600px) {
		h1 {
			text-align: center;
			font-size: 2rem;
			line-height: 1;
			padding: 0.2em;
			font-family: 'Amatic SC', cursive;
		}
		.game {
			display: grid;
			grid-template-columns: 1fr 1fr;
			width: 100%;
		}

		.mole {
			background: url('/mole.svg') bottom center no-repeat;
			background-size: 30%;
			position: absolute;
			top: 100%;
			width: 100%;
			height: 100%;
			color: #2c394b;
			text-align: center;
			font-size: larger;
			font-weight: bolder;
			transition: all 0.4s;
		}

		.hole.up .mole {
			top: 0;
		}
	}
</style>
