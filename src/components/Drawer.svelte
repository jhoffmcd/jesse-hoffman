<script>
  import { mobileDrawerActive } from '../stores.js';

  import Nav from "../components/Nav.svelte";

  function closeDrawer() {
		mobileDrawerActive.update(active => false)
  }

  let isActive;

	const unsubscribe = mobileDrawerActive.subscribe(value => {
		isActive = value;
	});

  export let segment;
</script>

<style>
  .drawer {
    --drawer-width: 300px;

    width: var(--drawer-width);
    transform: translateX(var(--drawer-width));
    transition: transform 200ms cubic-bezier(.15,.83,.24,.97)
  }

  .drawer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    @apply bg-retro;
  }

  .drawer.is-active {
    transform: translateX(0);
  }
</style>

<div class={`drawer fixed bg-white top-0 right-0 block md:hidden h-full z-3 ${isActive ? 'is-active' : ''}`}>
  <button class="block mt-2 mb-8 ml-2 mr-auto w-12 p-2" on:click={closeDrawer}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/>
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  </button>

  <Nav {segment} orientation="vertical" />
</div>
