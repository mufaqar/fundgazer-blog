import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

// Fetch Data from Sanity
export const client = createClient({
  projectId: 'oqiio9tb',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: false,
});

export const urlFor = (source) => createImageUrlBuilder(client).image(source);
