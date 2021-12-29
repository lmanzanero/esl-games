<script>
	import { store } from '../../stores/tic-tac-toe';

	export let index;
	export let background;
	$: current = $store.history[$store.stepNumber];
	$: value = current.board[index];
</script>

<button
	style="background-image: url({background}); background-position:{'center center'}; background-size:{'cover'};"
	on:click={() => store.move(index)}>{value}</button
>

<style>
	button {
		background: rgb(34, 110, 116);
		border: 1px solid rgb(176, 179, 19);
		float: left;
		font-size: 3em;
		font-weight: bold;
		line-height: 34px;
		height: 120px;
		width: 120px;
		margin: 0 auto;
		padding: 0;
		text-align: center;
	}

	button:hover {
		background: rgb(47, 82, 85, 0.3);
		background-image: none;
	}

	button:focus {
		outline: none;
	}
</style>
