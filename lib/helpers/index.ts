import { config } from 'dotenv';
import * as crypto from 'crypto';
config();

export * from './shopify/index.js';

export function verifyRequest(hmac: string, rawBody: string) {
  const key = process.env.SECRET_KEY;
  // const hmac = req.get('X-ShopifyProduct-Hmac-Sha256');
  const hash = crypto
    .createHmac('sha256', key)
    .update(rawBody, 'utf8') // removed hex
    .digest('base64');
  if (hmac === hash) {
    console.log('+++++++++++++++++ REQUEST VERIFIED +++++++++++++++++>');
    return true;
  } else {
    console.log('+++++++++++++++++ ERROR - FORBIDDEN +++++++++++++++++>');
    return false;
  }
}
