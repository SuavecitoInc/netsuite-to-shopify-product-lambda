## Bundling Dependencies

> Examples of how to bundle a Lambda Funciton Within an AWS CDK Construct

Inline Code in CDK Construct

```typescript
const fn = new lambda.Function(this, 'ProductCreate', {
  runtime: lambda.Runtime.NODEJS_LATEST,
  handler: 'index.handler',
  code: lambda.Code.fromInline(`
    exports.handler = async (event) => {
      console.log('event: ', event)
    };
  `),
  memorySize: 512,
  timeout: cdk.Duration.seconds(30),
  environment: {
    SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || '2024-07',
    SECRET_KEY: process.env.SECRET_KEY || '',
    SHOPIFY_RETAIL_STORE: process.env.SHOPIFY_RETAIL_STORE || '',
    SHOPIFY_RETAIL_API_KEY: process.env.SHOPIFY_RETAIL_API_KEY || '',
    SHOPIFY_WHOLESALE_STORE: process.env.SHOPIFY_WHOLESALE_STORE || '',
    SHOPIFY_WHOLESALE_API_KEY: process.env.SHOPIFY_WHOLESALE_API_KEY || '',
  },
});
```

Separate File in CDK Construct

```typescript
const fn = new lambda.Function(this, 'ProductCreate', {
  runtime: lambda.Runtime.NODEJS_LATEST,
  handler: 'index.handler',
  code: lambda.Code.fromAsset(
    `${path.resolve(__dirname)}/lambda-handler/index.js`
  ),
  memorySize: 512,
  timeout: cdk.Duration.seconds(30),
  environment: {
    SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || '2024-07',
    SECRET_KEY: process.env.SECRET_KEY || '',
    SHOPIFY_RETAIL_STORE: process.env.SHOPIFY_RETAIL_STORE || '',
    SHOPIFY_RETAIL_API_KEY: process.env.SHOPIFY_RETAIL_API_KEY || '',
    SHOPIFY_WHOLESALE_STORE: process.env.SHOPIFY_WHOLESALE_STORE || '',
    SHOPIFY_WHOLESALE_API_KEY: process.env.SHOPIFY_WHOLESALE_API_KEY || '',
  },
});
```

Bundle Lambda Function and dependencies as one file with ESBuild

```bash
esbuild lib/lambda-handler/index.ts --bundle --platform=node --target=node20 --external:aws-sdk --outfile=lambda/build/index.js
```

```typescript
const fn = new lambda.Function(this, 'ProductCreate', {
  runtime: lambda.Runtime.NODEJS_LATEST,
  handler: 'index.handler',
  code: lambda.Code.fromAsset(path.join(__dirname, '../lambda/build')),
  memorySize: 512,
  timeout: cdk.Duration.seconds(30),
  environment: {
    SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || '2024-07',
    SECRET_KEY: process.env.SECRET_KEY || '',
    SHOPIFY_RETAIL_STORE: process.env.SHOPIFY_RETAIL_STORE || '',
    SHOPIFY_RETAIL_API_KEY: process.env.SHOPIFY_RETAIL_API_KEY || '',
    SHOPIFY_WHOLESALE_STORE: process.env.SHOPIFY_WHOLESALE_STORE || '',
    SHOPIFY_WHOLESALE_API_KEY: process.env.SHOPIFY_WHOLESALE_API_KEY || '',
  },
});
```

Bundle Lambda Function and dependencies as one file before deploying

```typescript
const fn = new lambda.NodejsFunction(this, 'ProductCreate', {
  handler: 'index.handler',
  code: lambda.Code.fromAsset(path.join(__dirname, '../lambda/build')),
  memorySize: 512,
  timeout: cdk.Duration.seconds(30),
  environment: {
    SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || '2024-07',
    SECRET_KEY: process.env.SECRET_KEY || '',
    SHOPIFY_RETAIL_STORE: process.env.SHOPIFY_RETAIL_STORE || '',
    SHOPIFY_RETAIL_API_KEY: process.env.SHOPIFY_RETAIL_API_KEY || '',
    SHOPIFY_WHOLESALE_STORE: process.env.SHOPIFY_WHOLESALE_STORE || '',
    SHOPIFY_WHOLESALE_API_KEY: process.env.SHOPIFY_WHOLESALE_API_KEY || '',
  },
});
```
