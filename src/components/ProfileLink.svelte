<script>
  export let url;
  export let iconUrl;
  export let iconTitle;
  export let username;
</script>

<style>
  .psuedo-border {
    content: '';
    position: absolute;
    top: -0.5em;
    left: -0.5em;
    right: -0.5em;
    bottom: -0.5em;
    @apply bg-retro;
    z-index: -2;
  }

  .psuedo-border.hover-only {
    @apply bg-blue-green;
    z-index: -1;
    opacity: 0;
    transition: opacity 150ms linear;
  }

  a:hover .psuedo-border.hover-only {
    opacity: 1;
  }
</style>

<a
  rel="external noreferrer noopener"
  target="_blank"
  href={url}
  class="relative m-2">
  <div class="psuedo-border" />

  <div class="flex items-center p-6 bg-white">
    <div class="w-10">
      <img src={iconUrl} alt={iconTitle} />
    </div>
    <div class="px-6 text-lg">{username}</div>
  </div>

  <div class="psuedo-border hover-only" />
</a>
