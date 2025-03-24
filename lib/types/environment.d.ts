declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WEBHOOK_SECRET: string;
      SHOPIFY_API_VERSION: string;
      // retail
      SHOPIFY_RETAIL_STORE: string;
      SHOPIFY_RETAIL_API_KEY: string;
      // wholesale
      SHOPIFY_WHOLESALE_STORE: string;
      SHOPIFY_WHOLESALE_API_KEY: string;
      // mexico
      SHOPIFY_MEXICO_RETAIL_STORE: string;
      SHOPIFY_MEXICO_RETAIL_API_KEY: string;
      // canada
      SHOPIFY_CANADA_RETAIL_STORE: string;
      SHOPIFY_CANADA_RETAIL_API_KEY: string;
      // barbershop-cart
      SHOPIFY_BARBERSHOP_CART_STORE: string;
      SHOPIFY_BARBERSHOP_CART_API_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
