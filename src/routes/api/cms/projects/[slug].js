import initClient from '../_contentful/client';
const {
  richTextFromMarkdown,
} = require('@contentful/rich-text-from-markdown');

export async function get(req, res) {
  const {
    params: { slug },
  } = req;

  const client = initClient();

  const entry = await client.getEntries({
    'fields.slug': slug,
    content_type: 'project',
  });

  // Replace markdown description with html description
  const description = await richTextFromMarkdown(entry.items[0].fields.description)
  entry.items[0].fields.description = description;

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(entry.items[0]));
}
