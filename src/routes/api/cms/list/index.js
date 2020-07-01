import initClient from "../_contentful/client";

export async function get(_req, res) {
  const client = initClient();

  const entries = await client.getEntries({
    content_type: "list",
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(entries));
}
