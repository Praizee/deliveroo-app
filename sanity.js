import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// const client = createClient({});

const sanityClient = createClient({
  projectId: "4haowx6q",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2022-03-07", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default sanityClient;
