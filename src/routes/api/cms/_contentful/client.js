import { createClient } from "contentful";

const initClient = () => {
  const {
    CONTENTFUL_SPACE,
    CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_ACCESS_TOKEN,
  } = process.env;

  return createClient({
    space: CONTENTFUL_SPACE,
    environment: CONTENTFUL_ENVIRONMENT || "development",
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });
};

export default initClient;
