import type { Maybe } from './admin.types.js';

export type NetSuiteItem = {
  title: string;
  descriptionHtml: string;
  vendor: string;
  productType: string;
  tags: string[];
  option: string;
  variants: {
    optionValues: {
      optionName: string;
      name: string;
    }[];
    price: string;
    inventoryItem: {
      sku: string;
      measurement: {
        weight: {
          value: number;
          unit: string;
        };
      };
    };
    barcode: string;
  }[];
};

export type ShopifyProductData = {
  id?: string;
  legacyResourceId?: string;
  title: string;
  descriptionHtml: string;
  vendor: string;
  productType: string;
  productOptions: { name: string; values: { name: string }[] }[];
  tags: string[];
  variants: {
    id?: string;
    barcode: string;
    optionValues: {
      optionName: string;
      name: string;
    }[];
    price: string;
    inventoryItem: {
      sku: string;
      measurement: {
        weight: {
          value: number;
          unit: string;
        };
      };
      tracked: boolean;
    };
    inventoryPolicy: 'DENY';
  }[];
};

export type ShopifyProductResult = {
  id: string;
  legacyResourceId: string;
  title: string;
  descriptionHtml: string;
  vendor: string;
  productType: string;
  tracksInventory: boolean;
  options: { name: string; values: string[] }[];
  tags: string[];
  variants: {
    id: string;
    legacyResourceId: string;
    title: string;
    barcode: Maybe<string> | undefined;
    price: string;
    sku: Maybe<string> | undefined;
    weight: number;
    weightUnit: string;
    compareAtPrice?: string;
  }[];
};
