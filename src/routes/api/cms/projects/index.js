import initClient from '../_contentful/client';

export async function get(_req, res) {
  const client = initClient();

  const entries = await client.getEntries({
    content_type: 'project',
  });

  // Simple sort by 'sortOrder field'
  entries.items.sort((a, b) => {
    if (a.fields.sortOrder > b.fields.sortOrder) {
      return 1;
    } else {
      return 0;
    }
  })

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(entries));
}
