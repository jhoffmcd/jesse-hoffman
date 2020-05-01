import { createClient } from "contentful";

export async function get(req, res, next) {
  const {
    CONTENTFUL_SPACE,
    CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_ACCESS_TOKEN,
  } = process.env;

  const client = createClient({
    space: CONTENTFUL_SPACE,
    environment: CONTENTFUL_ENVIRONMENT,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ foo: "bar" }));
}
