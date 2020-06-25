<style>
  :global(.editorial-content) {
    line-height: 2;
    @apply text-base;
  }

  @screen md {
    :global(.editorial-content) {
      @apply text-lg;
    }
  }

  :global(.editorial-content p) {
    @apply mb-4;
  }

  :global(.editorial-content a) {
    @apply text-magenta;
  }
</style>

<div class="editorial-content">
  <slot />
</div>
