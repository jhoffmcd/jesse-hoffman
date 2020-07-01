<script context="module">
  export async function preload(page) {
    try {
      const { slug } = page.params;
      const res = await this.fetch(`api/cms/projects/${slug}`);
      const { fields } = await res.json();
      return { ...fields };
    } catch (err) {
      console.error(err);
    }
  }
</script>

<script>
  import Container from '../../components/Container.svelte';
  import SectionHeader from '../../components/SectionHeader.svelte';
  import Button from '../../components/Button.svelte';

  export let featuredImage;
  export let title;
  export let description;
  export let tech;
  export let roles;
  export let url;

  export const imageSrc = featuredImage.fields.file.url;
  export const imageTitle = featuredImage.fields.title;
  export const imageDescription = featuredImage.fields.description;
  export const imageWidth = featuredImage.fields.file.details.image.width;
  export const imageHeight = featuredImage.fields.file.details.image.height;
</script>

<style>
  .title {
    bottom: -2.5%;
  }

  .corner {
    left: 1.25%;
  }
</style>

<section>
  <Container>
    <header
      class="relative mb-4 md:mb-12 lg:mb-20"
      style="--aspect-ratio:{imageWidth}/{imageHeight}">
      <img
        class="absolute top-0 left-0 z-1 transform scale-95"
        src={imageSrc}
        title={imageTitle}
        alt={imageDescription} />
      <div class="corner absolute top-0 w-1/4 h-32 bg-retro z-0" />
      <div
        class="title hidden md:block absolute right-0 z-2 py-6 px-12 bg-gold
        text-right">
        <h1 class="mb-0">{title}</h1>
      </div>
    </header>

    <div class="md:hidden text-left">
      <h1>{title}</h1>
    </div>
  </Container>

  <Container>
    <Button {url} external={true}>Visit Project</Button>
  </Container>

  <Container>
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-12">
      <aside class="col-span-1 order-2">
        <SectionHeader>Tech</SectionHeader>
        <ul>
          {#if tech.length > 0}
            {#each tech as tech}
              <li>{tech}</li>
            {/each}
          {:else}No tech{/if}
        </ul>

        <SectionHeader>Role</SectionHeader>
        <ul>
          {#if roles.length > 0}
            {#each roles as role}
              <li>{role}</li>
            {/each}
          {:else}No tech{/if}
        </ul>

      </aside>

      <article class="md:col-span-2 mb-12 order-1">
        <h2>Description</h2>
        {description}
      </article>
    </div>
  </Container>

  <!-- <Container size="small">
    <div>{description}</div>
  </Container> -->
</section>
