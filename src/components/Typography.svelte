<script>
  export let tag;
</script>

<!--
  IMPROVEMENT: Ideally we would be able to dynamically create the elemnent type with something like <svelte:element tag="h1">.
  See https://github.com/sveltejs/svelte/pull/3928 for progress
-->
{#if tag === 'h1'}
  <h1 class="text-2xl">
    <slot />
  </h1>
{:else if tag === 'h2'}
  <h2>
    <slot />
  </h2>
{:else}
  <p>
    <slot />
  </p>
{/if}
