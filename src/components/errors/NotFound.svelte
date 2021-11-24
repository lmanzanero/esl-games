<script>
import Footer from "../footer/Footer.svelte";

  export let title;
</script>
<div class="container mx-auto h-screen flex flex-wrap content-center">
  <div class="m-auto">
    <h1 class="mb-6 text-4xl font-bold text-center text-gray animate-bounce">Page Not Found</h1>
    <p class="text-center text-gray">{title}</p>
  </div>
</div>
<Footer/>
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>