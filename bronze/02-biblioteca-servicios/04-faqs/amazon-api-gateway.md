[Skip to main content](#aws-page-content-main)

Amazon API Gateway

- [Overview](/api-gateway/)
- [Features](/api-gateway/features/)
- [Pricing](/api-gateway/pricing/)
- [Getting Started](/api-gateway/getting-started/)
- [Resources](/api-gateway/resources/)
- More

# Amazon API Gateway FAQs

- [General](#general--wgnlod)
  30
- [Security and Authorization](#security-and-authorization--wgnlod)
  10
- [Management, Metrics and Logging](#management-metrics-and-logging--wgnlod)
  6
- [Throttling and Caching](#throttling-and-caching--wgnlod)
  8
- [Billing](#billing--wgnlod)
  3
- [WebSocket APIs](#websocket-apis--wgnlod)
  9
- [API Gateway Portals](#api-gateway-portals--wgnlod)
  6

## General

[Open all](#)

### What is Amazon API Gateway?

### Why use Amazon API Gateway?

### What API types are supported by Amazon API Gateway?

### How do I get started with HTTP APIs in API Gateway?

### How do I get started with REST APIs in API Gateway?

### When creating RESTful APIs, when should I use HTTP APIs and when should I use REST APIs?

You can build RESTful APIs using both HTTP APIs and REST APIs in Amazon API Gateway.

HTTP APIs are optimized for building APIs that proxy to AWS Lambda functions or HTTP backends, making them ideal for serverless workloads. HTTP APIs are a cheaper and faster alternative to REST APIs, but they do not currently support API management functionality. REST APIs are intended for APIs that require API proxy functionality and API management features in a single solution.

HTTP APIs are ideal for:

1.  Building proxy APIs for AWS Lambda or any HTTP endpoint
2.  Building modern APIs that are equipped with OIDC and OAuth 2 authorization 
3.  Workloads that are likely to grow very large
4.  APIs for latency sensitive workloads

 

REST APIs are ideal for:

 

1.  Customers looking to pay a single price point for an all-inclusive set of features needed to build, manage, and publish their APIs. 

### Which features come standard with HTTP APIs from API Gateway?

### Can I import an OpenAPI definition to create a HTTP API?

### How can I migrate from my current REST API to a HTTP API?

To migrate from your current REST API to a HTTP API in Amazon API Gateway, do the following:

1.  Check that all the features you need are available in HTTP. To see the complete feature list, visit our [documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html). 
2.  Go to your REST API and export the OpenAPI definition from your REST API
3.  Go to your HTTP API and import the OpenAPI definition from the previous step
4.  Test the API functions as expected
5.  Update your clients with the new URL

While your API might work, you may notice some missing features. To identify any missing features, review the **Info**, **Warning**, and **Error** fields from the Import operation. For more information about migrating REST APIs to HTTP APIs, see our [documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-import.html).

### How do I know if my current REST API will work as a HTTP API?

### How do I get started with WebSocket APIs in Amazon API Gateway?

### Can I create HTTPS endpoints?

### What data types can I use with Amazon API Gateway ?

### With what backends can Amazon API Gateway communicate?

### For which client platforms can Amazon API Gateway generate SDKs?

### In which AWS regions is Amazon API Gateway available?

### What can I manage through the Amazon API Gateway console?

### What is a resource?

### What is a method?

### What is a usage plan?

### What is the Amazon API Gateway API lifecycle?

### What is a stage?

### What are stage variables?

### What is a Resource Policy?

### What if I mistakenly deployed to a stage?

### Can I use my Swagger API definitions?

### How do I monetize my APIs on API Gateway?

### How do I document my API on Amazon API Gateway?

### How can I avoid creating redundant copies of error messages and other documentation that recurs frequently in my API?

### Can I restrict access to private APIs to a specific Amazon VPC or VPC endpoint?

## Security and Authorization

[Open all](#)

### How do I authorize access to my APIs?

### How does AWS Signature Version 4 work?

### What is a Lambda authorizer?

### Can Amazon API Gateway generate API keys for distribution to third-party developers?

### How can I address or prevent API threats or abuse?

### Can I verify that it is API Gateway calling my backend?

### Can I use AWS CloudTrail with Amazon API Gateway?

### How does Amazon API Gateway work with an Amazon Virtual Private Cloud (Amazon VPC)?

### Can I restrict access to private APIs to a specific Amazon VPC or VPC endpoint?

### Can I configure my REST APIs in API Gateway to use TLS 1.1 or higher ?

## Management, Metrics and Logging

[Open all](#)

### How can I monitor my Amazon API Gateway APIs?

### Can I set up alarms on the Amazon API Gateway metrics?

### How can I set up metrics for Amazon API Gateway?

### Can I determine which version of the API my customers are using?

### Does Amazon API Gateway provide logging support?

### How quickly are logs available?

## Throttling and Caching

[Open all](#)

### How can I protect my backend systems and applications from traffic spikes?

### Can I throttle individual developers calling my APIs?

### How does throttling help me?

### At which levels can Amazon API Gateway throttle inbound API traffic?

### How are throttling rules applied?

### Does Amazon API Gateway provide API result caching?

### What happens if a large number of end users try to invoke my API simultaneously?

### How do APIs scale?

## Billing

[Open all](#)

### How am I charged for using Amazon API Gateway?

### Who pays for Amazon API Gateway API calls generated by third-party developers?

### If an API response is served by cached data, is it still considered an API call for billing purposes?

## WebSocket APIs

[Open all](#)

### What is WebSocket routing in Amazon API Gateway?

### How can I send messages to connected clients from the backend service?

### How can I authorize access to my WebSocket API in Amazon API Gateway?

### How does my backend service know when a client is connected or disconnected from the WebSocket connection in Amazon API Gateway?

### How can my backend service identify if the client is still connected to the WebSocket connection?

### Can I disconnect a client from my backend service?

### What is the maximum message size supported for WebSocket APIs?

### How am I charged for using WebSocket APIs on Amazon API Gateway?

### If messages on the WebSocket connection fail authentication or authorization, do they still count toward my API usage bill?

## API Gateway Portals

[Open all](#)

### What are API Gateway Portals?

### Why should I use API Gateway Portals?

### Who uses API Gateway Portals?

### What are the prerequisites for using API Gateway Portals?

### How do I get started with API Gateway Portals?

### What regions is API Gateway Portals available in?

## Get started

[](/api-gateway/pricing/)

Pricing

## Learn more about Amazon API Gateway

Visit the pricing page

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/application-integration/approved/images/826a956c-9a4e-47ce-89ca-dd52c2da63ad.4f2e14e9faf5b637e23fd9e3605742d0539022e2.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Getting started

## Ready to get started?

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](/contact-us/)

Contact us

## Have more questions?

Contact us

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/2c50fb03-8156-4fb1-9937-1dfed809a9e2.a95880625757ad7557ef377c5654264464059a6b.jpeg)
