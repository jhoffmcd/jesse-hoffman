import initClient from "../_contentful/client";

export async function get(req, res) {
  const {
    params: { assetId },
  } = req;

  const client = initClient();

  const assets = await client.getAssets();

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(assets));
}
