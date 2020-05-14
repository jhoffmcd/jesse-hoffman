<script>
  import Nav from "../components/Nav.svelte";
  import Hex from "../components/Hex.svelte";
  import Container from "../components/Container.svelte";

  export let segment;
</script>

<style>
  /* header {
    position: relative;
  }

  header::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    @apply bg-retro;
  } */
</style>

<header>
  <Container class="flex items-center justify-between">
    <div class="flex items-center py-2">
      <!-- <Hex /> -->
      <div class="px-4">
        <a
          aria-current={segment === undefined ? 'page' : undefined}
          href="."
          class="font-permanent-marker text-xl md:text-2xl">
          Jesse Hoffman
        </a>
      </div>
    </div>
    <Nav {segment} />
  </Container>
</header>
