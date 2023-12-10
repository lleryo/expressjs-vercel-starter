import dotenv from 'dotenv';


dotenv.config({ path: '.env' });

/**
 * AWS Access Key ID
 *
 * Represents the AWS Access Key ID used for authentication.
 * Ensure that the corresponding environment variable (AWS_ACCESS_KEY_ID) is set with the appropriate value.
 *
 * @example
 * // Setting AWS_ACCESS_KEY_ID in .env file
 * AWS_ACCESS_KEY_ID=your_access_key_id
 */
export const AWS_ACCESS_KEY_ID = String(process.env.AWS_ACCESS_KEY_ID);
if (!AWS_ACCESS_KEY_ID) {
  throw new Error(
    'AWS_ACCESS_KEY_ID is required in the environment variables.'
  );
}
/**
 * AWS Secret Access Key
 *
 * Represents the AWS Secret Access Key used for authentication.
 * Ensure that the corresponding environment variable (AWS_SECRET_ACCESS_KEY) is set with the appropriate value.
 *
 * @example
 * // Setting AWS_SECRET_ACCESS_KEY in .env file
 * AWS_SECRET_ACCESS_KEY=your_secret_access_key
 */
export const AWS_SECRET_ACCESS_KEY = String(process.env.AWS_SECRET_ACCESS_KEY);
if (!AWS_SECRET_ACCESS_KEY) {
  throw new Error(
    'AWS_SECRET_ACCESS_KEY is required in the environment variables.'
  );
}
/**
 * AWS Region
 *
 * Represents the AWS Region used for configuration.
 * Ensure that the corresponding environment variable (AWS_REGION) is set with the appropriate value.
 *
 * @example
 * // Setting AWS_REGION in .env file
 * AWS_REGION=your_aws_region
 */
export const AWS_REGION = String(process.env.AWS_REGION);
if (!AWS_REGION) {
  throw new Error('AWS_REGION is required in the environment variables.');
}
/**
 * Sanity Secret Token
 *
 * Represents the Sanity Secret Token used for authentication.
 * Ensure that the corresponding environment variable (SANITY_SECRET_TOKEN) is set with the appropriate value.
 *
 * @example
 * // Setting SANITY_SECRET_TOKEN in .env file
 * SANITY_SECRET_TOKEN=your_sanity_secret_token
 */
export const SANITY_SECRET_TOKEN = String(process.env.SANITY_SECRET_TOKEN);
if (!SANITY_SECRET_TOKEN) {
  throw new Error(
    'SANITY_SECRET_TOKEN is required in the environment variables.'
  );
}

/**
 * Sanity API Version
 *
 * Represents the Sanity API Version used for configuration.
 * Ensure that the corresponding environment variable (SANITY_API_VERSION) is set with the appropriate value.
 *
 * @example
 * // Setting SANITY_API_VERSION in .env file
 * SANITY_API_VERSION=your_sanity_api_version
 */
export const SANITY_API_VERSION = String(process.env.SANITY_API_VERSION);
if (!SANITY_API_VERSION) {
  throw new Error(
    'SANITY_API_VERSION is required in the environment variables.'
  );
}
/**
 * Sanity Project ID
 *
 * Represents the Sanity Project ID used for configuration.
 * Ensure that the corresponding environment variable (SANITY_PROJECT_ID) is set with the appropriate value.
 *
 * @example
 * // Setting SANITY_PROJECT_ID in .env file
 * SANITY_PROJECT_ID=your_sanity_project_id
 */
export const SANITY_PROJECT_ID = String(process.env.SANITY_PROJECT_ID);
if (!SANITY_PROJECT_ID) {
  throw new Error(
    'SANITY_PROJECT_ID is required in the environment variables.'
  );
}

/**
 * Sanity Dataset
 *
 * Represents the Sanity Dataset used for configuration.
 * Ensure that the corresponding environment variable (SANITY_DATASET) is set with the appropriate value.
 *
 * @example
 * // Setting SANITY_DATASET in .env file
 * SANITY_DATASET=your_sanity_dataset
 */
export const SANITY_DATASET = String(process.env.SANITY_DATASET);
if (!SANITY_DATASET) {
  throw new Error('SANITY_DATASET is required in the environment variables.');
}
