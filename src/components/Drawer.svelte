<script>
  import { fade, fly } from 'svelte/transition';
  import { expoIn, expoOut } from 'svelte/easing';

  import { mobileDrawerActive } from '../stores.js';

  import Nav from '../components/Nav.svelte';

  function closeDrawer() {
    mobileDrawerActive.update(() => false);
  }

  let isActive;
  const drawerWidth = 300;

  mobileDrawerActive.subscribe((value) => {
    isActive = value;
  });

  export let segment;
</script>

<style>
  .overlay {
    filter: grayscale(1);
    @apply bg-blue-green;
  }

  .drawer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    @apply bg-retro;
  }
</style>

{#if isActive}
  <div
    in:fly={{ duration: 200, x: drawerWidth, easing: expoOut }}
    out:fly={{ duration: 200, x: drawerWidth, easing: expoIn }}
    class="drawer absolute bg-white top-0 right-0 block md:hidden h-full z-4"
    style={`width: ${drawerWidth}px`}>
    <button
      class="block mt-2 mb-8 ml-2 mr-auto w-12 p-2"
      on:click={closeDrawer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    </button>

    <Nav {segment} orientation="vertical" />
  </div>
  <div
    in:fade={{ duration: 200, easing: expoOut }}
    out:fade={{ duration: 200, easing: expoIn }}
    class="overlay fixed top-0 left-0 w-full h-full block md:hidden z-3
    opacity-75" />
{/if}
