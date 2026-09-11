[Skip to main content](#aws-page-content-main)

AWS Secrets Manager

- [Overview](/secrets-manager/)
- [Features](/secrets-manager/features/)
- [Pricing](/secrets-manager/pricing/)
- [Getting Started](/secrets-manager/getting-started/)
- [Resources](/secrets-manager/)
- More

# AWS Secrets Manager FAQs

- [General](#general--1i5nzf6)
  8
- [Rotation](#rotation--1i5nzf6)
  4
- [Security](#security--1i5nzf6)
  3
- [Billing](#billing--1i5nzf6)
  2

## General

[Open all](#)

### What is AWS Secrets Manager?

### Why should I use AWS Secrets Manager?

### What can I do with AWS Secrets Manager?

### What secrets can I manage in AWS Secrets Manager?

### What secrets can I rotate with AWS Secrets Manager?

### How can my application use these secrets?

### How do I get started with AWS Secrets Manager?

To get started with AWS Secrets Manager:

1.  Identify your secrets and locate where they are used in your applications.
2.  Sign in to the [AWS Management Console](https://console.aws.amazon.com/console/home) using your AWS credentials and navigate to the [Secrets Manager console](https://console.aws.amazon.com/secretsmanager).
3.  Use the Secrets Manager console to upload the secret you identified. Alternatively, you can use the [AWS SDK or AWS CLI](/tools/) to upload a secret (once per secret). You can also write a script to upload multiple secrets.
4.  If your secret is not in use yet, follow the instructions on the console to configure automatic rotation. If applications are using your secret, complete steps (5) and (6) before configuring automatic rotation.
5.  If other users or applications need to retrieve the secret, write an IAM policy to grant permissions to the secret.
6.  Update your applications to retrieve secrets from Secrets Manager.

### In what AWS Regions is AWS Secrets Manager available?

## Rotation

[Open all](#)

### How does AWS Secrets Manager implement secret rotation without impacting applications?

### Will rotating database credentials impact open connections?

### How do I know when AWS Secrets Manager rotates a secret?

### What is managed rotation?

## Security

[Open all](#)

### How does AWS Secrets Manager keep my secrets secure?

### Who can use and manage secrets in AWS Secrets Manager?

### How does AWS Secrets Manager encrypt my secrets?

## Billing

[Open all](#)

### How will I be charged and billed for my use of AWS Secrets Manager?

### Is there a free tier?

## Next steps

[](/secrets-manager/pricing/)

Pricing

## See pricing examples and calculate your costs

Learn more about product pricing

[](https://console.aws.amazon.com/secretsmanager)

Console

## Get started building with AWS Secrets Manager in the AWS Console

Start building in the console
