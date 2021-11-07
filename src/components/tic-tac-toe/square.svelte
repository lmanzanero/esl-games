<script>
import { store } from "../../stores/tic-tac-toe";


export let index;

$: current = $store.history[$store.stepNumber]
$: value = current.board[index];
</script>

<style>
button {
  background: rgb(34, 110, 116);
  border: 1px solid rgb(176, 179, 19);
  color: aliceblue;
  float: left;
  font-size: 3em;
  font-weight: bold;
  line-height: 34px;
  height: 100px;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  width: 100px;
}

button:hover {
  background: rgb(47, 82, 85)
}

button:focus {
  outline: none;
}
</style>

<button on:click={ () => store.move(index) }>{ value }</button> 