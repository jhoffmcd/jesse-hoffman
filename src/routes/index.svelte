<script context="module">
  export async function preload() {
    try {
      const pageContentRes = await this.fetch(`api/cms/pages/about`);

      const { fields: { pageHeading, body, gallery } } = await pageContentRes.json();

      return { pageHeading, body, gallery };
    } catch (err) {
      console.error(err);
    }
  }
</script>

<script>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

  import Container from "../components/Container.svelte";

  export let pageHeading;
  export let body;
  export let gallery;
</script>

<style>
  .visual-1 {
    width: 50%;
    height: 50%;
    right: 50%;
    bottom: 50%;
  }

  .visual-2 {
    width: 30%;
    height: 30%;
    left: 50%;
    bottom: 50%;
  }

  .visual-3 {
    width: 20%;
    height: 20%;
    right: 50%;
    top: 50%;
  }

  .visual-4 {
    width: 40%;
    height: 40%;
    left: 50%;
    top: 50%;
  }

  .main-profile-image {
    transform: scaleX(-1);
  }
</style>

<svelte:head>
  <title>Jesse Hoffman | Engineering Manager | Technical Consultant</title>
</svelte:head>

<Container>
  <div class="grid grid-cols-12 gap-20">
    <div class="col-span-4">
      <img class="main-profile-image" alt="Jesse Hoffman Profile" src={asset1Url} />
    </div>
    <div class="col-span-8">
      <h1>{pageHeading}</h1>
      <div>{@html documentToHtmlString(body)}</div>
    </div>
    <!-- <div class="col-span-4">

    </div>

    <div class="col-span-7 col-start-6">

      <div style="--aspect-ratio: 1/1; justify-self: end;">
        <div class="w-full">
          <div class="visual-1 absolute bg-cover bg-no-repeat bg-center" style={`background-image: url("${asset1Url}")`} />
          <div class="visual-2 absolute bg-purple-medium" />
          <div class="visual-3 absolute bg-magenta" />
          <div class="visual-4 absolute bg-cover bg-no-repeat bg-center" style={`background-image: url("${asset2Url}")`} />
        </div>
      </div>

    </div> -->
  </div>
</Container>
