import initClient from '../_contentful/client';

export async function get(_req, res) {
  const client = initClient();

  const entries = await client.getEntries({
    content_type: 'project',
  });

  // Simple sort by 'sortOrder field'
  entries.items.sort((a, b) => a.fields.sortOrder > b.fields.sortOrder ? 1 : 0);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(entries));
}
