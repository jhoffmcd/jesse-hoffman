import initClient from '../_contentful/client';

export async function get(req, res) {
  const {
    params: { slug },
  } = req;

  const client = initClient();

  const entry = await client.getEntries({
    'fields.slug': slug,
    content_type: 'project',
  });

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(entry.items[0]));
}
