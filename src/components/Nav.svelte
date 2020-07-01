<script>
  import { goto } from '@sapper/app';

  import { mobileDrawerActive } from '../stores.js';

  function closeDrawer() {
    if (mobileDrawerActive) {
      mobileDrawerActive.update(() => false);
    }
  }

  async function handleClick(href, evt) {
    evt.preventDefault();
    await goto(href);
    closeDrawer();
  }

  export let segment;
  export let orientation = 'horizontal';
</script>

<style>
  nav {
    @apply px-4;
  }

  li {
    display: inline-block;
  }

  nav.vertical li {
    width: 100%;
  }

  [aria-current] {
    position: relative;
  }

  [aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    @apply bg-purple;
    display: block;
    bottom: -1px;
  }

  a {
    display: block;
    @apply py-4 px-2;
  }
</style>

<nav class={orientation}>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href="./"
        on:click={(evt) => handleClick('./', evt)}>
        About
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'projects' ? 'page' : undefined}
        href="projects/"
        on:click={(evt) => handleClick('projects/', evt)}>
        Projects
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog/"
        on:click={(evt) => handleClick('blog/', evt)}>
        Writing
      </a>
    </li>
  </ul>
</nav>
