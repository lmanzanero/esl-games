<svelte:head>
	<!-- elements go here -->
	<title>Wheel of Names</title>
	<meta name="description" content="A fun, free and easy to use spinner to make your class more engaging. Add names or words, and randomly choose one!">
</svelte:head>
<div class="container-fluid h-screen">
	<h1 class="mb-6 text-4xl font-bold text-center text-gray p-3">ESL Real-Time Games</h1>
	<div class="flex justify-center flex-row m-auto">
		<div class="w-1/2">
			<img
			class="rounded-lg h-96 m-auto"
			src="https://wheel-decide.com/assets/img/giphy.gif"
			alt="Wheel of names"
		/>
	</div>
		<div class="w-1/3 shadow"> 
			<button class="bg-purple-500 text-white py-2 px-6 m-2 rounded-full flex"> 
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
				</svg>
				<span>Collections</span>
			</button>
			<div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
				<legend class="font-bold tracking-wide text-sm">Description</legend> 
				<textarea class="w-full shadow-inner p-4 border-0" placeholder="Enter space for new word" rows="6"></textarea> 
			</div>
			<div class="flex flex-col mt-2 mb:mt-0 md:px-3">
				<button class="button rounded shadow w-full bg-purple-300 p-2 m-1">
					Save
				</button>
				<button class="button rounded shadow w-full bg-purple-300 p-2 m-1">
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
</style>