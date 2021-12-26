<script>
	import { store } from '../../stores/tic-tac-toe';

	export let index;

	$: current = $store.history[$store.stepNumber];
	$: value = current.board[index];
</script>

<button on:click={() => store.move(index)}>{value}</button>

<style>
	button {
		background: rgb(34, 110, 116);
		background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqOuXYcdKqQIcZ0UOyTfajbb7dOvh_21lfw-xRIl8uuUGfwVBSMq9wWFpiWrKTpJ9WBk&usqp=CAU');
		border: 1px solid rgb(176, 179, 19);
		color: aliceblue;
		float: left;
		font-size: 3em;
		font-weight: bold;
		line-height: 34px;
		height: 200px;
		width: 200px;
		margin: 0 auto;
		padding: 0;
		text-align: center;
	}

	button:hover {
		background: rgb(47, 82, 85);
	}

	button:focus {
		outline: none;
	}
</style>
