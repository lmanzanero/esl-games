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
			<button class="text-white bg-purple-700 hover:bg-purple-600 hover:text-gray-300 py-2 px-6 m-2 rounded-full flex"> 
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
				<button class="button rounded flex justify-center shadow w-full text-white bg-purple-700 hover:bg-purple-600 hover:text-gray-300 p-2 m-1">
					<svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
					</svg>
					Save
				</button>
				<button class="button rounded flex justify-center shadow w-full text-white bg-purple-700 hover:bg-purple-600 hover:text-gray-300 p-2 m-1">
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
</style>