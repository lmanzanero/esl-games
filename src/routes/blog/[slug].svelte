<!-- <script context="module">
  const allPosts = import.meta.glob("../../blog/*.{md,svx}");
  let body = [];
  for (let path in allPosts) {
    body.push(
      allPosts[path]().then(({ metadata }) => {
        return { path, metadata };
      })
    );
  }
  export const load = async ({ page }) => {
    const posts = await Promise.all(body);
    const { slug } = page.params;
    console.log(posts[0]);
    console.log(slug);
    const filteredPosts = posts.filter((post) => {
      return post.metadata.tags.includes(slug);
    });
    return {
      props: {
        filteredPosts,
        slug,
      },
    };
  };
</script>

<script>
  export let filteredPosts;
  export let tag;
</script> -->
