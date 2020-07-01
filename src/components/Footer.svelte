<script>
  import Container from '../components/Container.svelte';

  const currentYear = new Date().getFullYear();
</script>

<footer class="text-center text-pink py-6">
  <Container>
    <p>© {currentYear}, Jesse Hoffman.</p>
  </Container>
</footer>
