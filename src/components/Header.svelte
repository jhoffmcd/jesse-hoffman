<script>
  import Nav from "../components/Nav.svelte";
  import Hex from "../components/Hex.svelte";
  import Container from "../components/Container.svelte";

  export let segment;
</script>

<header>
  <Container>
    <Hex />
    <Nav {segment} />
  </Container>
</header>
