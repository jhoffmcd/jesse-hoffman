<script context="module">
  // export async function preload() {
  //   try {
  //     const res = await this.fetch('api/cms/posts');
  //     const { items: posts } = await res.json();
  //     return { posts };
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
</script>

<script>
  import Container from '../components/Container.svelte';
  import PageHeader from '../components/PageHeader.svelte';

  // export let posts;
</script>

<style>
  .placeholder {
    height: 600px;
  }
</style>

<svelte:head>
  <title>Jesse Hoffman | Writing</title>
</svelte:head>

<Container>
  <section>
    <PageHeader>
      <h1>Writing</h1>
    </PageHeader>
  </section>

  <h2 class="text-center">🚧 Writing still in progress. 🚧</h2>

  <!-- {#if posts.length > 0}
    <ul>
      {#each posts as { fields: { title } }}
        <li>{title}</li>
      {/each}
    </ul>
  {:else}Sorry, no posts for you{/if} -->

  <div class="placeholder" />
</Container>
