import initClient from '../_contentful/client';

export async function get(_req, res) {
  const client = initClient();

  const assets = await client.getAssets();

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(assets));
}
