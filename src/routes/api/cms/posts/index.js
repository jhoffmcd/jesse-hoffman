import initClient from "../_contentful/client";

export async function get(req, res) {
  const {
    query: { contentType },
  } = req;

  const client = initClient();

  const entries = await client.getEntries({
    content_type: "blogPost",
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(entries));
}
