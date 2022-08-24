import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

// Fetch Data from Sanity
export const client = createClient({
  projectId: '3jk4lurs',
  dataset: 'production',
  apiVersion: '2021-10-14',
  useCdn: true,
});

export const urlFor = (source) => createImageUrlBuilder(client).image(source);
