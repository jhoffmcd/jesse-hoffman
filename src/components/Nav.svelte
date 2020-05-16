<script>
  export let segment;
</script>

<style>
  nav {
    @apply px-4;
  }

  li {
    display: inline-block;
  }

  [aria-current] {
    position: relative;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    @apply bg-purple-light;
    display: block;
    bottom: -1px;
  }

  a {
    display: block;
    @apply py-4 px-2;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href="./">
        About
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'projects' ? 'page' : undefined}
        href="projects/">
        Projects
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog/">
        Writing
      </a>
    </li>
  </ul>
</nav>
