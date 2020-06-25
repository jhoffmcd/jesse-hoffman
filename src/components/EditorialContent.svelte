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
  }
</style>

<div class="editorial-content">
  <slot />
</div>
