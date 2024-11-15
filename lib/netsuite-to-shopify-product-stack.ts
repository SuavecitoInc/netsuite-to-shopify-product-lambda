import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'node:path';
import { environment } from './config/environment';

export class NetsuiteToShopifyProductStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const fn = new lambda.Function(this, 'ProductCreate', {
      runtime: lambda.Runtime.NODEJS_LATEST,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda/build')),
      memorySize: 512,
      timeout: cdk.Duration.seconds(30),
      environment,
    });
    // define the api gateway resource
    const endpoint = new apigw.LambdaRestApi(this, `ProductCreateApi`, {
      handler: fn,
      restApiName: `ProductCreate`,
      proxy: false,
    });

    // define the /product resource with a post method
    const productCreateResource = endpoint.root.addResource('product');
    productCreateResource.addMethod('POST');
  }
}
