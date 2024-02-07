import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "xpqk54oz",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-02-07", // use current date (YYYY-MM-DD) to target the latest API version
});

export { client };
