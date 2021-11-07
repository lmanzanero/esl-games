<script> 
import { calculateWinner, store } from '../stores/tic-tac-toe';
import Board from '/src/components/tic-tac-toe/Board.svelte'; 

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
    font-family: cursive;
  }

  .game-board {
    margin: auto;
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
			<button>Go to game start</button>
			{/if}
		</li>
		{/each}
	</ol>
</div>