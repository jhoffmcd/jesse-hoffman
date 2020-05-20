<script>
  import Nav from "../components/Nav.svelte";
  import Container from "../components/Container.svelte";

  export let segment;
</script>

<header>
  <Container class="flex items-center justify-between">
    <div class="flex items-center py-2">
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
