<script context="module">
  export function load({ error, status }) {
      return {
          props: {
              title: `${status}: ${error.message}`
          }
      };
  }
</script>

<script>
import NotFound from "../components/errors/NotFound.svelte";

  export let title;
</script>
<NotFound title={title}/>