<svelte:head>
	<!-- elements go here -->
	<title>ESL Tic Tac Toe</title>
	<meta name="description" content="A fun interactive, real time tic-tac-toe game with voice recongition to for ESL students.">
</svelte:head>
<script> 
import Board from '../components/tic-tac-toe/board.svelte';
import { calculateWinner, store } from '../stores/tic-tac-toe'; 

	let status;
	let winner;
	store.subscribe(store => {
		winner = calculateWinner(store.history[store.history.length - 1].board);
		if (winner) {
			status = `Winner: ${winner}`;
		} else {
			status = `Next player: ${store.xIsNext ? 'X' : 'O'}`;
		}
	});

</script>

<style>
	.game {
    display: flex; 
    background: #00b7ff;
		flex-direction: column;
    justify-content: center; 
		font: 14px "Century Gothic", Futura, sans-serif;
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
	ol {
		margin: auto;
    display: flex;
    flex-direction: row;
    list-style: none;
	}

  ol li button {
    border: none;
    background: #404040;
    color: #ffffff !important;
    font-weight: 100;
    padding: 20px;
    margin: 0.4em;
    text-transform: uppercase;
    border-radius: 6px;
    display: inline-block;
    transition: all 0.3s ease 0s;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  ol li:first-child button{
    background: darkorange;
  }

  ol li button:hover {
    border: none;
    background: #5e5d5d;
    color: antiquewhite;
  }
</style>

<div class='game'>
  <div class='game-info'>
		<div>{status}</div>
	</div>
	<div class='game-board'>
	  <Board/>
	</div>
	<ol>
		{#each $store.history as step, move}
		<li on:click="{ () => store.jumpTo(move) }">
			{#if move}
			<button>Go to move # { move }</button>
			{:else}
			<button>Start Game</button>
			{/if}
		</li>
		{/each}
	</ol>
</div>