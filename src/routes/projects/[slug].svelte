<script context="module">
  export async function preload(page) {
    try {
      const { slug } = page.params;
      const res = await this.fetch(`api/cms/projects/${slug}`);
      const {
        fields: {
          title,
          description,
          tech,
          roles,
          featuredImage,
          url,
          company,
          client,
        },
      } = await res.json();

      return {
        title,
        description,
        tech,
        roles,
        featuredImage,
        url,
        company,
        client,
      };
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
  export let company;
  export let client;

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
  <Container class="mb-6">
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
        {#if company}
          <div class="inline-block px-2 bg-gold text-lg">
            {#if client}Client:{:else}Company:{/if}
            {company}
          </div>
        {/if}
      </div>
    </header>

    <div class="md:hidden text-left">
      <h1 class="mb-2">{title}</h1>
      {#if company}
        <div class="inline-block px-2 bg-gold">
          {#if client}Client:{:else}Company:{/if}
          {company}
        </div>
      {/if}
    </div>
  </Container>

  <Container class="mb-10 md:mb-12 text-center">
    {#if url}
      <Button {url} external={true}>Visit Project</Button>
    {:else}
      <svg
        class="inline-block w-10 text-red fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12
          2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902
          7.902 0 014 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0
          0120 12c0 4.42-3.58 8-8 8z" />
      </svg>
      <span>This project is no longer alive... 😭</span>
    {/if}
  </Container>

  <Container>
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-12">
      <aside class="col-span-1 order-2 md:order-1">
        <SectionHeader>Tech</SectionHeader>
        <ul class="grid grid-cols-2 gap-6 mb-8">
          {#if tech.length > 0}
            {#each tech as tech}
              <li class="flex flex-col items-center text-center">{tech}</li>
            {/each}
          {:else}No tech{/if}
        </ul>

        <SectionHeader>Role</SectionHeader>
        <ul class="grid grid-cols-2 gap-6 mb-8">
          {#if roles.length > 0}
            {#each roles as role}
              <li class="flex flex-col items-center text-center">{role}</li>
            {/each}
          {:else}No tech{/if}
        </ul>

      </aside>

      <article class="md:col-span-2 mb-12 order-1 md:order-2">
        <h2>Description</h2>
        {description}
      </article>
    </div>
  </Container>
</section>
