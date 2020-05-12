<script>
  import Nav from "../components/Nav.svelte";
  import Hex from "../components/Hex.svelte";
  import Container from "../components/Container.svelte";
  import Typography from "../components/Typography.svelte";

  export let segment;
</script>

<header class="border-b border-b-solid border-purple-light">
  <Container class="flex items-center justify-between">
    <div class="flex items-center">
      <Hex />
      <div class="px-4">
        <Typography tag="h1">Jesse Hoffman</Typography>
      </div>
    </div>
    <Nav {segment} />
  </Container>
</header>
