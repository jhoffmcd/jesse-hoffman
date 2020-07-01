<style>
  header {
    position: relative;
  }

  header::after {
    content: "—";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-family: "Permanent Marker", cursive;
    @apply text-magenta text-5xl;
    line-height: 0;
  }

  @screen md {
    header::after {
      @apply text-magenta text-6xl;
    }
  }
</style>

<header class="mb-12 md:mb-16 lg:mb-20 text-center">
  <slot />
</header>
