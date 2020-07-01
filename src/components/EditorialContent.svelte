<style>
  .editorial-content {
    line-height: 2;
    @apply text-base;
  }

  @screen md {
    .editorial-content {
      @apply text-lg;
    }
  }

  .editorial-content :global(p) {
    @apply mb-4;
  }

  .editorial-content :global(a) {
    @apply text-magenta;
    transition: color 100ms linear;
  }

  .editorial-content :global(a:hover) {
    @apply text-blue-dark;
  }
</style>

<div class="editorial-content">
  <slot />
</div>
