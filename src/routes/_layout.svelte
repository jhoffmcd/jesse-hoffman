<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style global>
  @import "../styles/global.css";
</style>

<Header {segment} />

<main class="py-6 md:py-12 overflow-hidden">
  <slot />
</main>

<Footer />
