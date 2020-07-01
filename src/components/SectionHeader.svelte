<style>
  .colored-box-gold {
    top: 3px;
    right: -5px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }

  .colored-box-magenta {
    top: -5px;
    right: 3px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }
</style>

<div class="relative text-center">
  <h3 class="relative inline-block bg-white px-4 py-2 border z-1">
    <slot />
    <div class="colored-box-gold absolute h-full border border-gold z-2" />
    <div
      class="colored-box-magenta absolute h-full border border-magenta z-0" />
  </h3>
  <div class="absolute left-0 inset-y-1/2 h-px w-full bg-black z-0" />
</div>
