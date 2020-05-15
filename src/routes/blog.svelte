<script context="module">
  export async function preload() {
    try {
      const res = await this.fetch("api/cms/entries/?contentType=blogPost");
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

<style>
  .placeholder {
    height: 600px;
  }
</style>

<svelte:head>
  <title>Jesse Hoffman</title>
</svelte:head>

<!-- {#if posts.length > 0}
  <ul>
    {#each posts as { fields: { title } }}
      <li>{title}</li>
    {/each}
  </ul>
{:else}Sorry, no posts for you{/if} -->
<div class="placeholder" />
