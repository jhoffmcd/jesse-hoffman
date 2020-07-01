<script context="module">
  export async function preload() {
    try {
      const content = await this.fetch('api/cms/pages/about');

      const { fields: { pageHeading, body, gallery } } = await content.json();

      return { pageHeading, body, gallery };
    } catch (err) {
      console.error(err);
    }
  }
</script>

<script>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  import Container from "../components/Container.svelte";
  import PageHeader from "../components/PageHeader.svelte";
  import EditorialContent from "../components/EditorialContent.svelte";
  import ProfileLink from "../components/ProfileLink.svelte";

  export let gallery;
  export let pageHeading;
  export let body;

  export const profileAsset = gallery[0].fields.file;
</script>

<style>
  .corner-1 {
    height: 25%;
  }

  .corner-2 {
    height: 50%;
  }

  .line-1, .line-2, .line-3 {
    width: 4px;
    height: 20%;
    right: 9%;
    transform: skewX(-45deg);
  }

  .line-1 {
    bottom: 21%;
  }

  .line-2 {
    bottom: calc(21% - 20px);
  }

  .line-3 {
    bottom: calc(21% - 40px);
  }

  .profiles {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
</style>

<svelte:head>
  <title>Jesse Hoffman | Engineering Manager | Technical Consultant</title>
</svelte:head>

<Container>
  <div class="md:grid grid-cols-3 grid-rows-1 gap-20 mb-12">
    <div class="col-span-1">
      <div class="relative max-w-xs mx-auto mb-8 md:mb-0" style={`--aspect-ratio:${profileAsset.details.image.width / profileAsset.details.image.height}`}>
        <img class="z-1 transform scale-95" alt="Jesse Hoffman Profile" src={profileAsset.url} />
        <div class="corner-1 absolute top-0 left-0 w-1/4 bg-blue-green z-0" />
        <div class="corner-2 absolute bottom-0 right-0 w-1/2 bg-retro z-0" />

        <div class="line-1 absolute bg-blue-light z-2" />
        <div class="line-2 absolute bg-gold z-2" />
        <div class="line-3 absolute bg-magenta z-2" />
      </div>
    </div>
    <div class="col-span-2">
      <h1>{pageHeading}</h1>
      <EditorialContent>{@html documentToHtmlString(body)}</EditorialContent>
    </div>
  </div>

  <PageHeader>
    <h2>Also Seen At...</h2>
  </PageHeader>

  <div class="profiles grid gap-12">
    <ProfileLink />
    <ProfileLink />
    <ProfileLink />
    <ProfileLink />
  </div>
</Container>
