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
  import Typography from "../components/Typography.svelte";

  export let projects;
</script>

<style>
  header {
    position: relative;
  }

  header::after {
    content: "—";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-family: "Permanent Marker", cursive;
    @apply text-magenta text-5xl;
    line-height: 0;
  }

  @media md {
    header::after {
      @apply text-magenta text-6xl;
    }
  }
</style>

<svelte:head>
  <title>Jesse Hoffman</title>
</svelte:head>

<section>
  <header class="mb-8 md:mb-10 lg:mb-12 text-center">
    <Typography tag="h1">Projects</Typography>
  </header>
</section>

{#if projects.length > 0}
  <ul>
    {#each projects as { fields: { title } }}
      <li>{title}</li>
    {/each}
  </ul>
{:else}Sorry, no projects for you{/if}
