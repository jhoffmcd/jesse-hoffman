<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style global>
  @import "../styles/global.css";
</style>

<Nav {segment} />

<div class="bg-black">test</div>

<main>
  <slot />
</main>
