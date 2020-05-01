<script context="module">
  export async function preload() {
    try {
      const res = await this.fetch("api/cms/entries");
      const { items: posts } = await res.json();
      return { posts };
    } catch (err) {
      console.error(err);
    }
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Jesse Hoffman</title>
</svelte:head>

<p>Lets see if we can get some blog posts</p>

{#if posts.length > 0}
  <ul>
    {#each posts as { fields: { title } }}
      <li>{title}</li>
    {/each}
  </ul>
{:else}Sorry, no posts for you{/if}
