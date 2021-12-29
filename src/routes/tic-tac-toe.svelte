<script>
	import Microphone from '../components/microphone/Microphone.svelte';
	import Board from '../components/tic-tac-toe/board.svelte';
	import { calculateWinner, store } from '../stores/tic-tac-toe';

	let status;
	let winner;
	let word;
	let started = false;
	store.subscribe((store) => {
		winner = calculateWinner(store.history[store.history.length - 1].board);
		word = store.word;
		if (winner) {
			status = `Winner: ${winner}`;
		} else {
			status = `Next player: ${store.xIsNext ? 'X' : 'O'}`;
		}
	});

	function clearWord() {
		store.updateWord('Hover and say the word!');
		started = false;
	}
</script>

<svelte:head>
	<!-- elements go here -->
	<title>ESL Tic Tac Toe</title>
	<meta
		name="description"
		content="A fun interactive, real time tic-tac-toe game with voice recongition to for ESL students."
	/>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://esl-games.vercel.app/tic-tac-toe" />
	<meta property="og:title" content="ESL Tic Tac Toer" />
	<meta
		property="og:description"
		content="A fun interactive, real time tic-tac-toe game with voice recongition to for ESL students."
	/>
	<meta property="og:image" content="https://esl-games.vercel.app/tic-tac-toe.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://esl-games.vercel.app/tic-tac-toe" />
	<meta property="twitter:title" content="ESL Tic Tac Toe" />
	<meta
		property="twitter:description"
		content="A fun interactive, real time tic-tac-toe game with voice recongition to for ESL students."
	/>
	<meta property="twitter:image" content="https://esl-games.vercel.app/tic-tac-toe.png" />
</svelte:head>

<div class="game">
	<div class="game-info">
		<div>{status}</div>
	</div>
	<div class="game-words">
		<p>{started ? word : 'Hover and say the word!'}</p>
		<!-- Todo:  - Add Mircophone store or value to evalute words
						  	- disable button and only enable if said word matches
		
		-->
		<Microphone buttonText="Listen" isListening={started} />
	</div>
	<div class="game-board" on:mouseenter={() => (started = true)} on:mouseleave={clearWord}>
		<Board />
	</div>
	<!-- <ol>
		{#each $store.history as step, move}
			<li on:click={() => store.jumpTo(move)}>
				{#if move}
					<button>Go to move # {move}</button>
				{:else}
					<button on:click={() => (started = true)}>Start Game</button>
				{/if}
			</li>
		{/each}
	</ol> -->
</div>

<style>
	.game {
		display: flex;
		background: #00b7ff;
		flex-direction: column;
		justify-content: center;
		font: 14px 'Century Gothic', Futura, sans-serif;
		margin: 0;
		padding: 0;
		height: 100vh;
		width: 100vw;
	}

	.game-info {
		font-size: 2.5em;
		padding: 0.4em;
		font-family: cursive;
		font-weight: bolder;
		background: rgb(100, 62, 190);
		color: rgb(176, 179, 19);
		border-radius: 0.1em;
		text-align: center;
	}

	.game-board {
		margin: auto;
	}

	.game-words {
		display: flex;
		flex-direction: column;
		gap: 1em;
		font-size: 3em;
		color: #404040;
		margin: auto;
	}
	/* ol {
		margin: auto;
		display: flex;
		flex-direction: row;
		list-style: none;
	}

	ol li button {
		border: none;
		background: #404040;
		font-weight: 100;
		padding: 20px;
		margin: 0.4em;
		text-transform: uppercase;
		border-radius: 6px;
		display: inline-block;
		transition: all 0.3s ease 0s;
		box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
	}

	ol li:first-child button {
		background: darkorange;
	}

	ol li button:hover {
		border: none;
		background: #5e5d5d;
		color: antiquewhite;
	} */
</style>
