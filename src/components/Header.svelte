<script>
  import Nav from "../components/Nav.svelte";
  import Container from "../components/Container.svelte";

  export let segment;
</script>

<header>
  <Container class="flex items-center justify-between py-2 md:py-0">
    <div class="flex items-center py-2">
      <div class="px-0 md:px-4">
        <a
          aria-current={segment === undefined ? 'page' : undefined}
          href="."
          class="font-permanent-marker text-xl md:text-2xl">
          Jesse Hoffman
        </a>
      </div>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden md:block">
      <Nav {segment} />
    </div>

    <!-- Mobile Menu Button > -->
    <button class="block md:hidden p-2 w-12 -mr-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g fill="#241F20">
          <path d="M0 0h12v12H0zM18 0h12v12H18zM36 0h12v12H36zM0 18h12v12H0zM18 18h12v12H18zM36 18h12v12H36zM0 36h12v12H0zM18 36h12v12H18zM36 36h12v12H36z"/>
        </g>
      </svg>
    </button>

  </Container>
</header>
