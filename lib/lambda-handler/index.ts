import { shopifyProduct, verifyRequest } from '../helpers/index';
import { createShopifyProductUrl } from '../utils/shopify';
import type { NetSuiteItem } from '../types/index';

type EventBody = {
  shopifyStore: string;
  product: NetSuiteItem;
};

export const handler = async (event: any) => {
  console.log('event:', event);
  const hmac = event.headers['X-ShopifyProduct-Hmac-Sha256'];
  console.log('hmac:', hmac);
  const rawBody = event.body;
  console.log('rawBody:', rawBody);
  if (!verifyRequest(hmac, rawBody)) {
    return {
      body: JSON.stringify({ error: 'Request verification failed' }),
      statusCode: 403,
    };
  }

  const body = JSON.parse(event.body);
  const { shopifyStore, product } = body as EventBody;

  try {
    const response = await shopifyProduct(shopifyStore, product);
    return {
      body: JSON.stringify({
        product: {
          url: createShopifyProductUrl(shopifyStore, response),
          legacyResourceId: response,
        },
      }),
      statusCode: 200,
    };
  } catch (err: any) {
    console.error(err);
    return {
      body: JSON.stringify({ error: err.message }),
      statusCode: 500,
    };
  }
};
