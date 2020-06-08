<script context="module">
  export async function preload() {
    try {
      const res = await this.fetch(`api/cms/pages/about`);
      const { fields } = await res.json();
      return { pageHeading: fields.pageHeading, body: fields.body };
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
</script>

<style>
  .grid-visual {
    display: grid;
    grid-template-columns: repeat(12, [col-start] 1fr);
  }

  .grid-visual-1 {
    grid-column: col-start / span 6;
  }

  .grid-visual-2 {
    grid-column: col-start 7 / span 6;
  }

  .boxes {
    width: 100%;
    height: 100%;
    background: lightblue;
  }

  .box-1 {
    background: red;
  }
</style>

<svelte:head>
  <title>Jesse Hoffman | Engineering Manager | Technical Consultant</title>
</svelte:head>

<Container>
  <div class="grid-visual">
    <div class="grid-visual-1">
      <h1>{pageHeading}</h1>
    </div>
    <div class="grid-visual-2">
      <!-- {@html documentToHtmlString(body)} -->
      <div class="boxes">
        <div class="box-1" style="--aspect-ratio: 4/3"></div>
        <div class="box-2"></div>
        <div class="box-3"></div>
        <div class="box-4"></div>
      </div>
    </div>
    <!-- <div class="grid-visual-3"></div> -->
  </div>
</Container>
