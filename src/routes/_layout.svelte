<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />

<div class="bg-black">test</div>

<main>
  <slot />
</main>
