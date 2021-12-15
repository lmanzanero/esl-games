<svelte:head>
	<!-- elements go here -->
	<title>Wheel of Names</title>
	<meta name="description" content="A fun, free and easy to use spinner to make your class more engaging. Add names or words, and randomly choose one!">
</svelte:head>
<script>
import { wheelStore } from "../stores/wheelOfNames";

import { onMount } from "svelte"; 
import Toast from "../components/notifications/toast.svelte";

 export let users = [];
 let canvas;
 let isModalOpen = false;
 export let isShow = false;

 function toggleModal() { 
		return isModalOpen = !isModalOpen;
 }

 function showToast() { 
	 isShow = true;
 }
 

wheelStore.subscribe(data => users = data.users);

let splitUsers = users.map(user => user.label);
let text = splitUsers.join('\n'); 
function addNames(e) { 
	//update names based on store and textarea 
	const allNames = e.target.value.split('\n'); 
	const structuredNames = allNames.map(name => {
		const wheelName = {
			color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
			label: `${name}`
		}
		return wheelName;
	});
	wheelStore.update(store => Object.assign({}, store, {users: structuredNames}));   
 } 

onMount(() => { 
	const rand = (m, M) => Math.random() * (M - m) + m;
	let tot = $wheelStore.users.length;
	const EL_spin = document.querySelector("#spin");
	const ctx = canvas.getContext('2d');
	const dia = ctx.canvas.width;
	const rad = dia / 2;
	const PI = Math.PI;
	const TAU = 2 * PI;
	let arc = TAU / $wheelStore.users.length;

	const friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard
	let angVel = 0; // Angular velocity
	let ang = 0; // Angle in radians

	const getIndex = () => Math.floor(tot - ang / TAU * tot) % tot;

	function drawSector(sector, i) {
		const ang = arc * i;
		ctx.save();
		// COLOR
		ctx.beginPath();
		ctx.fillStyle = sector.color;
		ctx.moveTo(rad, rad);
		ctx.arc(rad, rad, rad, ang, ang + arc);
		ctx.lineTo(rad, rad);
		ctx.fill();
		// TEXT
		ctx.translate(rad, rad);
		ctx.rotate(ang + arc / 2);
		ctx.textAlign = "right";
		ctx.fillStyle = "#fff";
		ctx.font = "bold 30px sans-serif";
		ctx.fillText(sector.label, rad - 10, 10);
		//
		ctx.restore();
	};

	function rotate() {
		const sector = $wheelStore.users[getIndex()];
		canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
		EL_spin.textContent = !angVel ? "SPIN" : sector.label;
		EL_spin.style.background = sector.color;
	}

	function frame() {
		if (!angVel) return;
		angVel *= friction; // Decrement velocity by friction
		if (angVel < 0.002) angVel = 0; // Bring to stop
		ang += angVel; // Update angle
		ang %= TAU; // Normalize angle
		rotate();
	}

	function engine() {
		frame();
		requestAnimationFrame(engine)
	}

	// INIT
	users.forEach(drawSector); 
	rotate(); // Initial rotation
	engine(); // Start engine
	EL_spin.addEventListener("click", () => {
		if (!angVel) angVel = rand(0.25, 0.35);
	});

	document.querySelector('.spinner').addEventListener("click", () => {
		if (!angVel) angVel = rand(0.25, 0.35);
	});
	
	document.querySelector('textarea').addEventListener("keyup", () => { 
		tot = $wheelStore.users.length;
		arc = TAU / $wheelStore.users.length;
		$wheelStore.users.forEach(drawSector);  
	})
});
 
 
</script>
<div class="container-fluid h-screen">
	<Toast isShow={isShow}/>
	<h1 class="mb-6 text-4xl font-bold text-center text-gray p-3">Wheel of Names</h1>
	<div class="flex justify-evenly flex-row flex-wrap m-auto"> 
		<!-- {JSON.stringify(users)} -->
		<div id="wheelOfFortune" class="w-auto">
			<canvas bind:this={canvas} id="wheel" width="500" height="500"></canvas>
			<div id="spin">SPIN</div> 
		</div>
		<div class="w-1/3 shadow"> 
			<button on:click={toggleModal} class="text-white bg-purple-700 hover:bg-purple-600 hover:text-gray-300 py-2 px-6 m-2 rounded-full flex"> 
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
				</svg>
				<span>Collections</span>
			</button>
			<div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
				<label>Name</label>
					<input type="text" placeholder="Collection Name" class="w-full bg-gray-100 p-2 mt-2 mb-3" />
				<legend class="font-bold tracking-wide text-sm">Names</legend> 
				<textarea bind:value={text} on:keyup={addNames} class="w-full h-64 shadow-inner p-4 border-0  text-left truncate" placeholder="Enter space for new word"></textarea> 
			</div>
			<div class="flex flex-col mt-2 mb:mt-0 md:px-3">
				<button on:click={showToast} class="button save rounded flex justify-center shadow w-full text-white bg-purple-700 hover:bg-purple-600 hover:text-gray-300 p-2 m-1">
					<svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
					</svg>
					Save
				</button>
				<button class="button spinner rounded flex justify-center shadow w-full text-white bg-purple-700 hover:bg-purple-600 hover:text-gray-300 p-2 m-1">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
					</svg>
					Spin
				</button>
			</div>
		</div>
	</div>
	<!-- Modal -->
	<div class={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${!isModalOpen ? "hidden": ""}`} id="modal">
		<div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div class="fixed inset-0 transition-opacity">
				<div class="absolute inset-0 bg-gray-900 opacity-75" />
			</div>
			<span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
			<div class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
				<div class="w-full flex overflow-x-scroll p-2">
					<button class="text-white w-28 bg-purple-700 hover:bg-purple-600 hover:text-gray-300 py-2 px-6 m-auto rounded-full flex"> 
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
						</svg>
						<span>Users</span>
					</button>
					<button class="text-white w-28 bg-purple-700 hover:bg-purple-600 hover:text-gray-300 py-2 px-6 m-auto rounded-full flex"> 
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
						</svg>
						<span>Users</span>
					</button>
					<button class="text-white w-28 bg-purple-700 hover:bg-purple-600 hover:text-gray-300 py-2 px-6 m-2 m-auto rounded-full flex"> 
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
						</svg>
						<span>Users</span>
					</button>
					<button class="text-white w-28 bg-purple-700 hover:bg-purple-600 hover:text-gray-300 py-2 px-6 m-auto rounded-full flex"> 
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
						</svg>
						<span class="">Users</span>
					</button>
					
				</div>
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<label>Name</label>
					<input type="text" placeholder="Collection Name" class="w-full bg-gray-100 p-2 mt-2 mb-3" />
					<legend class="font-bold tracking-wide text-sm">Names</legend> 
					<textarea bind:value={text} on:keyup={addNames} class="w-full h-64 shadow-inner p-4 border-0  text-left truncate" placeholder="Enter space for new word"></textarea> 
				</div>
				<div class="bg-gray-200 px-4 py-3 text-right">
					<button type="button" class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" on:click={toggleModal}><i class="fas fa-times"></i> Cancel</button>
					<button type="button" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i class="fas fa-plus"></i> Update</button>
				</div>
			</div>
		</div>
	</div>
</div>
<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

#wheelOfFortune {
  display: inline-block;
  position: relative; 
  overflow: hidden;  
}

#wheel {
  display: block;  
}

#spin {
  font: 1.5em/0 sans-serif;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 30%;
  margin: -15%;
  background: #fff;
  color: #fff;
  box-shadow: 0 0 0 8px currentColor, 0 0px 15px 5px rgba(0, 0, 0, 0.6);
  border-radius: 50%; 
	transition: 0.8s background;
}

#spin::after {
  content: "";
  position: absolute;
  top: -17px;
  border: 10px solid transparent;
  border-bottom-color: currentColor;
  border-top: none;
}

</style>