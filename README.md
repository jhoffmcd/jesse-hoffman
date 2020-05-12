# Jesse Hoffman - V2 - The Svelte Edition

## Observations

While working on this Svelte.js/Sapper.js I want to explore things like composition, developer experience, interoperablity, performance, etc. Here are some thoughts.

### Ability to create dynamic `HTML` element types in a component.

This could be useful for a few types of component use cases:
  - `List` components (`ul`, `ol`)
  - `Button` components (`button`, `a`)
  - `Typography` components (`h1-h6`, `p`)

As noted in [this GitHub issue](https://github.com/sveltejs/svelte/pull/3928), this could take the form of something like this.

```html
<svelte:element tag='h1'>I'm a heading</svelte:element>
```

### Composition of styles related to components

If you wanted to extend a components base style, the only real way to do it is to append the class string provided by `$$props.class`, see the `Container` component at `/src/components/Container.svelte`.

It seems there is some discussion of this with no clear resolution reached [here](https://github.com/sveltejs/svelte/issues/2870)
