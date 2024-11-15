import { config } from 'dotenv';

config();

const stores = {
  retail: {
    store: process.env.SHOPIFY_RETAIL_STORE,
    apiKey: process.env.SHOPIFY_RETAIL_API_KEY,
  },
  wholesale: {
    store: process.env.SHOPIFY_WHOLESALE_STORE,
    apiKey: process.env.SHOPIFY_WHOLESALE_API_KEY,
  },
};

export default stores;
