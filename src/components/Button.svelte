
<script>
  export let url;
  export let external = false;
</script>

<div class="text-right mb-6">
  <a class="inline-flex items-center px-3 border-2 border-magenta" href={url} target={external ? "_blank" : null} rel={external ? "external noopener noreferrer" : null}>
    <span class="pr-3">
      <slot />
    </span>
    <svg class="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="retroGradient" gradientTransform="rotate(90)">
          <stop offset="0%"  stop-color="#b64bcd" />
          <stop offset="33%" stop-color="#da5ad2" />
          <stop offset="66%" stop-color="#dc94ba" />
          <stop offset="100%" stop-color="#f2d067" />
        </linearGradient>
      </defs>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path fill="url('#retroGradient')" d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
    </svg>
  </a>
</div>
