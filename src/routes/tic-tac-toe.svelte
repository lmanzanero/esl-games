<script>
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
		<p>{started ? word : 'Say the words you see!'}</p>
		<br />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class={`h-7 w-7 m-auto p-1 rounded bg-green-500 ${started ? 'animate-pulse' : ''}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
			/>
		</svg>
	</div>
	<div class="game-board">
		<Board />
	</div>
	<ol>
		{#each $store.history as step, move}
			<li on:click={() => store.jumpTo(move)}>
				{#if move}
					<button>Go to move # {move}</button>
				{:else}
					<button on:click={() => (started = true)}>Start Game</button>
				{/if}
			</li>
		{/each}
	</ol>
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
		font-size: 3em;
		padding: 0.4em;
		font-family: cursive;
		font-weight: bolder;
		box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
		background: rgb(34, 110, 116);
		color: rgb(176, 179, 19);
		border-radius: 0.1em;
	}

	.game-board {
		margin: auto;
		box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
	}
	.game-info {
		margin: auto;
	}

	.game-words {
		margin: auto;
		font-size: 3em;
		color: #404040;
	}
	ol {
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
	}
</style>
