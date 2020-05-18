<!--
  IMPROVEMENT: Forwading props seems to not be straightforward, there is not standard practice around this.
  See https://github.com/sveltejs/svelte/issues/2870 for details. For now we can access the classes we want to forward
  for this component by accessing the $$props object for this component.
-->
<div class="max-w-screen-xl mx-auto px-4 lg:px-6 {$$props.class || ''}">
  <slot />
</div>
