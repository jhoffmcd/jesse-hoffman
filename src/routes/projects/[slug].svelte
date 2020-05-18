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
  import Typography from "../../components/Typography.svelte";
  import Container from "../../components/Container.svelte";

  export let featuredImage;
  export let title;
  export let description;

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
      class="relative mb-10 md:mb-12 lg:mb-16"
      style="--aspect-ratio:{imageWidth}/{imageHeight}">
      <img
        class="absolute top-0 left-0 z-1 transform scale-95"
        src={imageSrc}
        title={imageTitle}
        alt={imageDescription} />
      <div class="corner absolute top-0 w-1/4 h-32 bg-retro z-0" />
      <div class="title absolute right-0 z-2 py-6 px-12 bg-gold text-right">
        <Typography tag="h1">{title}</Typography>
      </div>
    </header>
  </Container>

  <Container size="small">
    <div>{description}</div>
  </Container>
</section>
