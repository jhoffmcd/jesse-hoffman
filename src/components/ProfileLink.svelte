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

<a rel="external" href="#" class="relative m-2">
  <div class="psuedo-border" />

  <div class="flex items-center p-6 bg-white">
    <div class="w-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 512 512">
        <path fill-rule="nonzero" d="M473.305-1.353c20.88 0 37.885 16.533 37.885 36.926v438.251c0 20.393-17.005 36.954-37.885 36.954H36.846c-20.839 0-37.773-16.561-37.773-36.954V35.573c0-20.393 16.934-36.926 37.773-36.926h436.459zm-37.829 436.389V301.002c0-65.822-14.212-116.427-91.12-116.427-36.955 0-61.739 20.263-71.867 39.476h-1.04V190.64h-72.811v244.396h75.866V314.158c0-31.883 6.031-62.773 45.554-62.773 38.981 0 39.468 36.461 39.468 64.802v118.849h75.95zM150.987 190.64H74.953v244.396h76.034V190.64zM112.99 69.151c-24.395 0-44.066 19.735-44.066 44.047 0 24.318 19.671 44.052 44.066 44.052 24.299 0 44.026-19.734 44.026-44.052 0-24.312-19.727-44.047-44.026-44.047z"/>
      </svg>
    </div>
    <div class="px-6 text-lg">jhoffmcd</div>
  </div>

  <div class="psuedo-border hover-only" />
</a>
