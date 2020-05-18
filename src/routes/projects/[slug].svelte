<script context="module">
  export async function preload(page) {
    try {
      const { slug } = page.params;
      const res = await this.fetch(
        `api/cms/entries/${slug}/?contentType=project`
      );
      const { fields } = await res.json();
      return { ...fields };
    } catch (err) {
      console.error(err);
    }
  }
</script>

<script>
  export let featuredImage;
  export let title;

  export const imageSrc = featuredImage.fields.file.url;
  export const imageTitle = featuredImage.fields.title;
  export const imageDescription = featuredImage.fields.description;
  export const imageWidth = featuredImage.fields.file.details.image.width;
  export const imageHeight = featuredImage.fields.file.details.image.height;
</script>

<div class="relative" style={`--aspect-ratio:${imageWidth}/${imageHeight}`}>
  <img
    class="absolute top-0 left-0 z-1 transform scale-95"
    src={imageSrc}
    title={imageTitle}
    alt={imageDescription} />
  <div>{title}</div>
</div>
