
<script>
import { onMount } from "svelte";
  let lastHole;
  let timeUp = false;
  let score = 10;  

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
      console.log("Starting Game")
      setTimeout(() => timeUp = true, 10000)
    }

    // startGame();
  })

 
   
  function randomHole(holes) {
    console.log("all holes: ", holes.target);
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('Ah nah thats the same one bud');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }
 

  // function randomTime(min, max) {
  //   return Math.round(Math.random() * (max - min) + min);
  // }

 

  function bonk(e) {
    console.log(e.target);
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    // @ts-ignore
    scoreBoard.textContent = score;
  }
</script>
<div class="game-container">
  <h1>Whack-a-mole! <span class="score">{score}</span></h1>
  <div class="game">
      <div class="hole up hole1">
        <div class="mole" on:click={bonk}></div>
      </div>
      <div class="hole hole2">
        <div class="mole" on:click={bonk}></div>
      </div>
      <div class="hole hole3">
        <div class="mole" on:click={bonk}></div>
      </div>
      <div class="hole hole4">
        <div class="mole" on:click={bonk}></div>
      </div>
      <div class="hole hole5">
        <div class="mole" on:click={bonk}></div>
      </div>
      <div class="hole hole6">
        <div class="mole" on:click={bonk}></div>
      </div> 
  </div> 
  <button class="bg-indigo-600 flex justify-center text-white text-base font-semibold m-auto px-6 py-2 rounded-lg" >Start Game</button>
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
		background: url('dirt.svg') bottom center no-repeat;
		background-size: contain;
		content: '';
		width: 100%;
		height: 70px;
		position: absolute;
		z-index: 2;
		bottom: -30px;
	}

	.mole {
		background: url('mole.svg') bottom center no-repeat;
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
