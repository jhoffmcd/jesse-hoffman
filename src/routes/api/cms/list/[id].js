import initClient from "../_contentful/client";

export async function get(req, res) {
  const {
    params: { id },
  } = req;

  const client = initClient();

  const entry = await client.getEntries({
    "sys.id": id,
    content_type: "list",
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(entry.items[0]));
}
