<script>
  export let size = "35px";
</script>

<style>
  div {
    width: var(--size);
    height: var(--size);
    @apply bg-retro;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
</style>

<div style="--size: {size}" />
