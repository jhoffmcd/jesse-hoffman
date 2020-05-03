<script context="module">
  export async function preload() {
    try {
      const res = await this.fetch("api/cms/entries/?contentType=project");
      const { items: projects } = await res.json();
      return { projects };
    } catch (err) {
      console.error(err);
    }
  }
</script>

<script>
  export let projects;
</script>

<svelte:head>
  <title>Jesse Hoffman</title>
</svelte:head>

<p>Lets see if we can get some blog projects</p>

{#if projects.length > 0}
  <ul>
    {#each projects as { fields: { title } }}
      <li>{title}</li>
    {/each}
  </ul>
{:else}Sorry, no projects for you{/if}
