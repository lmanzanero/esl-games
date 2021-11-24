<svelte:head>
	<!-- elements go here -->
	<title>Score keeper</title>
	<meta name="description" content="An online tool for scorekeeping, making your online classrooms more engaging, fair, and fun!">
  	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://esl-games.vercel.app/">
	<meta property="og:title" content="Score Keeper">
	<meta property="og:description" content="An online tool for scorekeeping, making your online classrooms more engaging, fair, and fun!">
	<meta property="og:image" content="https://esl-games.vercel.app/score-keeper.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://esl-games.vercel.app/">
	<meta property="twitter:title" content="Score Keeper">
	<meta property="twitter:description" content="An online tool for scorekeeping, making your online classrooms more engaging, fair, and fun!">
	<meta property="twitter:image" content="https://esl-games.vercel.app/score-keeper.png">
</svelte:head>
<script>
import UserCard from "/src/components/score-keeper/UserCard.svelte";

 
</script> 
<section class="h-screen px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
  <header class="flex items-center justify-center">
    <h1 class="text-lg leading-6 font-medium text-black">Score Keeper</h1>
  </header>
  <form class="flex justify-center">
     <div class="relative">
      <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter user" placeholder="Filter user" />
     </div>
    <div class="flex">
      <button class="bg-indigo-600 hover:bg-indigo-700 hover:text-gray-300 group flex items-center rounded-md text-white text-sm font-medium px-4 py-2 mx-2">
        <svg class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="12" height="20" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"/>
        </svg>
        New
      </button>
      <button class="bg-green-600 hover:bg-green-700 hover:text-gray-300 group flex items-center rounded-md text-white text-sm font-medium px-4 py-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
         Save
      </button>
    </div>
  </form> 
     <div class="grid grid-cols-3 gap-4">
       <UserCard/>
       <UserCard/>
       <UserCard/>
     </div>
</section>
<style>
  @tailwind base;
  @tailwind components;
	@tailwind utilities;
</style>