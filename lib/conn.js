import { createClient } from "next-sanity";

// Fetch Data from Sanity
export const client = createClient({
  projectId: "3jk4lurs",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: true,
});
