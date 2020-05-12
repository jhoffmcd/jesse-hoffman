<script>
  import Header from "../components/Header.svelte";
  import Container from "../components/Container.svelte";

  export let segment;
</script>

<style global>
  @import "../styles/global.css";
</style>

<Header {segment} />

<main>
  <Container>
    <slot />
  </Container>
</main>
