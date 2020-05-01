import { createClient } from "contentful";

export async function get(req, res, next) {
  const { query } = req;

  const {
    CONTENTFUL_SPACE,
    CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_ACCESS_TOKEN,
  } = process.env;

  const client = createClient({
    space: CONTENTFUL_SPACE,
    environment: CONTENTFUL_ENVIRONMENT || "development",
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  const entries = await client.getEntries({
    content_type: query.contentType,
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(entries));
}
