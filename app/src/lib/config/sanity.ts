import { createClient, ClientConfig } from '@sanity/client';
import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
  SANITY_SECRET_TOKEN,
} from './env';
import { SanityClient } from 'next-sanity';

/**
 * Sanity Client Configuration Options
 *
 * Configuration options required for creating the Sanity client instance.
 *
 * @type {ClientConfig}
 * @property {string} projectId - The project ID for your Sanity project.
 * @property {string} dataset - The dataset to be used in the Sanity project.
 * @property {boolean} useCdn - Whether to use the Content Delivery Network (CDN) for fetching data.
 * @property {string} apiVersion - The version of the Sanity API to use.
 * @property {string} token - The authentication token for accessing the Sanity project.
 */

const config: ClientConfig = {
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true,
  apiVersion: SANITY_API_VERSION,
  token: SANITY_SECRET_TOKEN,
};
/**
 * Sanity Client Instance
 *
 * The 'Client' Sanity client instance is created using the provided configuration options.
 * This instance can be used to interact with the Sanity API for data fetching and manipulation.
 *
 * @type {SanityClient}
 * @see {@link https://www.sanity.io/docs Sanity Client Documentation}
 */
const Client: SanityClient = createClient(config);

/**
 * Exported Sanity Client Instance
 *
 * The 'Client' Sanity client instance is exported for use in other parts of the application.
 *
 * @type {SanityClient}
 */
export { Client };
