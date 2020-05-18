import initClient from "../_contentful/client";

export async function get(req, res) {
  const {
    query: { contentType },
    params: { slug },
  } = req;

  const client = initClient();

  const entry = await client.getEntries({
    "fields.slug": slug,
    content_type: contentType,
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(entry.items[0]));
}
