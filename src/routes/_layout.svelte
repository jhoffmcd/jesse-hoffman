<script>
  import Header from "../components/Header.svelte";

  export let segment;
</script>

<style global>
  @import "../styles/global.css";
</style>

<Header {segment} />

<main>
  <slot />
</main>
