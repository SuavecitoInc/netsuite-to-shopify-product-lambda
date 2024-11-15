# NetSuite to Shopify Product - Lambda

> This is an AWS Lambda to create Shopify Products from NetSuite Items. It leverages the AWS Cloud Development Kit (CDK) for streamlined deployment on AWS.

This is the "backend" for the [NetSuite Item to Shopify Product - SuiteLet](https://github.com/SuavecitoInc/netsuite-item-to-shopify-product-suitelet).

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template

## Useful resources

- https://docs.aws.amazon.com/lambda/latest/dg/lambda-cdk-tutorial.html

### Define the AWS CDK stack

A CDK stack is a collection of one or more constructs, which define AWS resources. Each CDK stack represents an AWS CloudFormation stack in your CDK app.

To define your CDK, stack follow the instructions for your preferred programming language. This stack defines the following:

- The function's logical name: ProductCreate
- The location of the function code, specified in the code property. For more information, see Handler code in the AWS Cloud Development Kit (AWS CDK) API Reference.
- The REST API's logical name: ProductCreateApi
- The API Gateway endpoint's logical name: ApiGwEndpoint

## Setup

Environmental Variables

`.env`

```bash
# shopify
SHOPIFY_API_VERSION=2024-07 # shopify admin api version
SECRET_KEY= # random string used for hash / digest
SHOPIFY_RETAIL_STORE= # the shopify store name without the .myshopify.com
SHOPIFY_RETAIL_API_KEY= # shopify admin api token
SHOPIFY_WHOLESALE_STORE= # the shopify store name without the .myshopify.com
SHOPIFY_WHOLESALE_API_KEY= # shopify admin api token
...
...
```

Create `lib/config/config.ts`

```bash
cp lib/config/example.config.ts lib/config/config.ts
```

or create file with:

```typescript
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
```

[Dependency Bundling](./BUNDLE.md)

## Deploy

```bash
npm run build
cdk synth
cdk deploy # endpoint will be in output
# destroy if needed
cdk destroy
```
