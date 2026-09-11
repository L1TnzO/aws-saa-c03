[Skip to main content](#aws-page-content-main)

AWS AppSync

- [Overview](/appsync/)
- [Features](/appsync/product-details/)
- [Pricing](/appsync/pricing/)
- Resources
- [FAQs](/appsync/faqs/)
- More

# AWS AppSync FAQs

- [AppSync GraphQL](#appsync-graphql--1m83921)
  16
- [AppSync Events](#appsync-events--1m83921)
  5

## AppSync GraphQL

[Open all](#)

### Do I need to know GraphQL to get started?

### What type of data sources can I use with AWS AppSync?

### How do I write my AWS AppSync business logic?

### How do I verify the behavior of my JavaScript code?

### Should I use JavaScript resolvers to access my data sources directly? Or should I use a Lambda data source to handle my business logic?

### Does AWS AppSync support API federation?

### Can I use AWS AppSync with my existing AWS resources?

### How is data secured with AWS AppSync?

### Can I make my data real-time with AWS AppSync?

### How can I do complex queries with AWS AppSync?

### What AWS Regions are available for AWS AppSync?

### Can I import existing Amazon DynamoDB tables?

### Can AWS AppSync create a database for me?

### What clients can I use to connect my application to my AppSync API?

You can use any HTTP or GraphQL client to connect to a GraphQL API on AppSync. We do recommend using the [Amplify](https://aws-amplify.github.io/) clients which are optimized to connect to the AppSync backend. There are some options depending on your application's use case:

- For DynamoDB data sources, use the DataStore category in the Amplify client. It provides the best developer experience and built-in conflict detection and resolution.
- For non-DynamoDB data sources in scenarios where you have no offline requirements, use the API (GraphQL) category in the Amplify client.
- For non-DynamoDB data sources in scenarios where you have offline requirements, use the AppSync SDK.

### Can I use my own domain name to access my AppSync GraphQL endpoint?

### Can I create private APIs with AppSync?

## AppSync Events

[Open all](#)

### What is an event?

### What is a channel?

### What is a namespace?

### I need to transform my events when they are published. Is that possible?

### What is an Event Handler?

## Getting started

[](https://console.aws.amazon.com/appsync/home/)

Blog

## Ready to get started?

Open the AWS AppSync console

[](/appsync/pricing/)

Blog

## Learn more about AWS AppSync Customers

Visit the customer page

[](/contact-us/)

Blog

## Have more questions?

Contact us
