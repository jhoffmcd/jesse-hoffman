import initClient from "../_contentful/client";

export async function get(req, res) {
  const {
    params: { assetId },
  } = req;

  const client = initClient();

  const asset = await client.getAsset(assetId);

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(asset));
}
