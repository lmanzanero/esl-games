 
<svelte:head>
	<!-- elements go here -->
	<title>ESL Words Sorter</title>
	<meta name="description" content="A real time game to build and match sentences using darg and drop sorting.">
</svelte:head>
<script> 
  let correctSentences = [
    {sentence: "They are playing at the park"}
  ];
	let list = [{name: "They", id: 0}, {name: "playing", id: 1},
							{name: "at the park", id: 2}, {name: "are", id: 3}];
  let hovering = false;
  let isListening = false;
  let isCorrect = false;

  const drop = (event, target) => {
    event.dataTransfer.dropEffect = 'move'; 
    const start = parseInt(event.dataTransfer.getData("text/plain"));
    const newTracklist = list
    const sentence = []; 
    if (start < target) {
      newTracklist.splice(target + 1, 0, newTracklist[start]);
      newTracklist.splice(start, 1);
    } else {
      newTracklist.splice(target, 0, newTracklist[start]);
      newTracklist.splice(start + 1, 1);
    }
    list = newTracklist
    hovering = null
    const listToSentence = Object.values(list); 
    listToSentence.forEach(word => {
      sentence.push(word.name);
    }) 
    const fixedSentence = sentence.join(' ');
    if(correctSentences[0].sentence === fixedSentence){
      console.log("matches");
      isCorrect = true;
      isListening = true;
    }  else {
      isCorrect = false;
      isListening = false;
    }
  }

  const dragstart = (event, i) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    const start = i;
    event.dataTransfer.setData('text/plain', start);
  }

</script>

<div class="text-center max-w-2xl mx-auto p-3">
  <h1 class="text-3xl md:text-4xl font-medium mb-2">ESL Words Sorter</h1>
   <div class="flex justify-center">
    <button class="bg-blue-500 text-white py-2 px-6 m-2 rounded-full">Start</button>
    <button on:click="{() => isListening = true}" class="bg-blue-500 text-white py-2 px-6 m-2 rounded-full {isListening ? 'animate-pulse' : ''}"> 
      <svg xmlns="http://www.w3.org/2000/svg" class="{isListening ? 'animate-ping h-4 w-4' : 'h-6 w-6'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    </button>
   </div>
  <div class="mt-4 flex justify-center">
    <img src="https://en.pimg.jp/060/269/387/1/60269387.jpg" alt="mockup" class="d-block rounded shadow-md">
  </div>
</div>
<div class="list {isCorrect ? 'bg-green-400' : 'bg-red-400'}">
  {#each list as n, index  (n.name)}
    <div
			 class="list-item"   
       draggable={true} 
       on:dragstart={event => dragstart(event, index)}
       on:drop|preventDefault={event => drop(event, index)} 
       ondragover="return false"
       on:dragenter={() => hovering = index}
       class:is-active={hovering === index}>
       {n.name}	
    </div>
  {/each}
</div>

<style>
  @tailwind base;
	@tailwind components;
	@tailwind utilities;


  .list {
    display: flex;
    flex-direction: row;
    justify-content: center; 
    border-radius: 4px;
    width: fit-content; 
    margin: auto;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }

  .list-item {
    display: flex;
    padding: 0.5em 1em;
    margin: 1em 0.3em;
    height: 100%;
    background: wheat;
    border-radius: 0.3em;
  }

  .list-item.is-active {
    background:sandybrown;
    color: #fff;
  }
</style>