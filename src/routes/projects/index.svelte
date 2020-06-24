<script context="module">
  export async function preload() {
    try {
      const res = await this.fetch("api/cms/projects");
      const { items: projects } = await res.json();
      return { projects };
    } catch (err) {
      console.error(err);
    }
  }
</script>

<script>
  import Typography from "../../components/Typography.svelte";
  import Container from "../../components/Container.svelte";

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

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    @apply gap-12;
  }

  .thumbnail-link:hover img {
    transform: scale(0.97);
  }
</style>

<svelte:head>
  <title>Jesse Hoffman</title>
</svelte:head>

<Container>
  <section>
    <header class="mb-10 md:mb-12 lg:mb-16 text-center">
      <Typography tag="h1">Projects</Typography>
    </header>

    {#if projects.length > 0}
      <ul>
        {#each projects as { fields: { title, slug, thumbnailImage } }}
          <li>
            <a
              href="projects/{slug}/"
              class="thumbnail-link hover:text-purple">
              <div class="relative mb-4" style="--aspect-ratio:400/300">
                <img
                  class="thumbnail absolute top-0 left-0 z-1 transform scale-95
                  origin-top-left transition duration-150 ease-in-out"
                  src={thumbnailImage.fields.file.url}
                  title={thumbnailImage.fields.title}
                  alt={thumbnailImage.fields.description} />
                <div
                  class="absolute top-0 left-0 w-full h-full bg-retro z-0
                  transform scale-95 origin-bottom-right" />
              </div>
              <div
                class="text-lg text-right transition duration-150 ease-in-out">
                {title}
              </div>
            </a>
          </li>
        {/each}
      </ul>
    {:else}Sorry, no projects for you!{/if}

  </section>
</Container>
