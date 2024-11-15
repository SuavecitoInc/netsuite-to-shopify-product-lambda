import { config } from 'dotenv';

config();

export const env = {
  SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || '2024-07',
  SECRET_KEY: process.env.SECRET_KEY || '',
  SHOPIFY_RETAIL_STORE: process.env.SHOPIFY_RETAIL_STORE || '',
  SHOPIFY_RETAIL_API_KEY: process.env.SHOPIFY_RETAIL_API_KEY || '',
  SHOPIFY_WHOLESALE_STORE: process.env.SHOPIFY_WHOLESALE_STORE || '',
  SHOPIFY_WHOLESALE_API_KEY: process.env.SHOPIFY_WHOLESALE_API_KEY || '',
};

export const stores = {
  retail: {
    store: process.env.SHOPIFY_RETAIL_STORE,
    apiKey: process.env.SHOPIFY_RETAIL_API_KEY,
  },
  wholesale: {
    store: process.env.SHOPIFY_WHOLESALE_STORE,
    apiKey: process.env.SHOPIFY_WHOLESALE_API_KEY,
  },
};
