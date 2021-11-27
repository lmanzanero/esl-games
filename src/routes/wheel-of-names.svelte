<svelte:head>
	<!-- elements go here -->
	<title>Wheel of Names</title>
	<meta name="description" content="A fun, free and easy to use spinner to make your class more engaging. Add names or words, and randomly choose one!">
</svelte:head>
<script>
import { wheelStore } from "../stores/wheelOfNames";

import { onMount } from "svelte";
import { each } from "svelte/internal";

 export let users;

	const sectors = [
  {color:"#f82", label:"User 0"},
  {color:"#0bf", label:"User 1"},
  {color:"#fb0", label:"User 2"},
  {color:"#0fb", label:"User 3"},
  {color:"#b0f", label:"User 4"},
  {color:"#f0b", label:"User 5"},
  {color:"#bf0", label:"User 6"},
	{color:"#fb5", label:"User 7"},
	{color:"#bf0", label:"User 8"},
	{color:"#fb5", label:"User 9"},
];

wheelStore.subscribe(data => users = data.users);

console.log(users);
onMount(() => {
	const rand = (m, M) => Math.random() * (M - m) + m;
	const tot = sectors.length;
	const EL_spin = document.querySelector("#spin");
	const ctx = document.querySelector("#wheel").getContext('2d');
	const dia = ctx.canvas.width;
	const rad = dia / 2;
	const PI = Math.PI;
	const TAU = 2 * PI;
	const arc = TAU / sectors.length;

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
		const sector = sectors[getIndex()];
		ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
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
	sectors.forEach(drawSector);
	rotate(); // Initial rotation
	engine(); // Start engine
	EL_spin.addEventListener("click", () => {
		if (!angVel) angVel = rand(0.25, 0.35);
	});

	document.querySelector('.spinner').addEventListener("click", () => {
		if (!angVel) angVel = rand(0.25, 0.35);
	});
});
 
</script>
<div class="container-fluid h-screen">
	<h1 class="mb-6 text-4xl font-bold text-center text-gray p-3">Wheel of Names</h1>
	<div class="flex justify-evenly flex-row flex-wrap m-auto"> 
			<!-- <img
			class="rounded-lg h-96 m-auto"
			src="https://wheel-decide.com/assets/img/giphy.gif"
			alt="Wheel of names"
		/> -->
		<div id="wheelOfFortune" class="w-auto">
			<canvas id="wheel" width="500" height="500"></canvas>
			<div id="spin">SPIN</div> 
		</div>
		<div class="w-1/3 shadow"> 
			<button class="text-white bg-purple-700 hover:bg-purple-600 hover:text-gray-300 py-2 px-6 m-2 rounded-full flex"> 
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
				</svg>
				<span>Collections</span>
			</button>
			<div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
				<legend class="font-bold tracking-wide text-sm">Description</legend> 
				<textarea class="w-full shadow-inner p-4 border-0" placeholder="Enter space for new word">
					<!-- {#each users as user}
						{user}
      		{/each} -->
				</textarea> 
			</div>
			<div class="flex flex-col mt-2 mb:mt-0 md:px-3">
				<button class="button rounded flex justify-center shadow w-full text-white bg-purple-700 hover:bg-purple-600 hover:text-gray-300 p-2 m-1">
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