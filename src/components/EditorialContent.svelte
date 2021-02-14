<script>
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
  import { INLINES } from '@contentful/rich-text-types';

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, next) => {
        // If URI path includes a protocol, it's meant to be an external link
        const isAbsoluteURL = RegExp(/^https?:\/\/|^\/\//i).test(node.data.uri);

        if (isAbsoluteURL) {
          return `<a href=${
            node.data.uri
          } rel="external noopener noreferrer" target="_blank">${next(
            node.content
          )}</a>`;
        } else {
          return `<a href=${node.data.uri} sapper:prefetch>${next(
            node.content
          )}</a>`;
        }
      },
    },
  };

  export let content;
</script>

<style>
  .editorial-content {
    line-height: 2;
    @apply text-base;
  }

  @screen md {
    .editorial-content {
      @apply text-lg;
    }
  }

  .editorial-content :global(p) {
    @apply mb-4;
  }

  .editorial-content :global(b) {
    @apply font-bold;
  }

  .editorial-content :global(a) {
    @apply text-magenta;
    transition: color 100ms linear;
  }

  .editorial-content :global(a:hover) {
    @apply text-blue-dark;
  }
</style>

<div class="editorial-content">
  {@html documentToHtmlString(content, options)}
</div>
