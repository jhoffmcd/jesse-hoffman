<script context="module">
  export async function preload() {
    const response = await this.fetch("api/cms/entries");
  }
</script>

<!-- <script>
  export let posts;
</script> -->

<!-- <style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style> -->

<!-- <script context="module">
  export async function preload(page, session) {
    console.log(page, sessions);
    return { page };
  }
</script> -->
<!-- <script>
  export let page;
</script> -->
<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<!-- <h1>Great success!</h1>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p> -->

<p>Lets see if we can get some blog posts</p>

<!-- <ul>
  {#each posts as { fields }}
    <li>{fields.title}</li>
  {/each}
</ul> -->
