[Skip to main content](#aws-page-content-main)

Amazon SQS

- [Overview](/sqs/)
- [Features](/sqs/features/)
- [Pricing](/sqs/pricing/)
- [Getting Started](https://prod.aem-author.marketing.aws.dev/editor.html/sqs/getting-started/)
- [Resources](/sqs/resources/)
- More

# Amazon SQS FAQs

- [Overview](#overview--1kknyrp)
  7
- [Billing](#billing--1kknyrp)
  7
- [Features, functionality, and interfaces](#features-functionality-and-interfaces--1kknyrp)
  21
- [FIFO queues](#fifo-queues--1kknyrp)
  13
- [Fair Queues](#fair-queues--1kknyrp)
  12
- [Security and reliability](#security-and-reliability--1kknyrp)
  5
- [Server-Side encryption (SSE)](#server-side-encryption-sse--1kknyrp)
  11
- [Compliance](#compliance--1kknyrp)
  2
- [Limits and restrictions](#limits-and-restrictions--1kknyrp)
  9
- [Queue sharing](#queue-sharing--1kknyrp)
  7
- [Service access and regions](#service-access-and-regions--1kknyrp)
  4
- [Dead-letter queues](#dead-letter-queues--1kknyrp)
  4

## Overview

[Open all](#)

### What are the benefits of Amazon SQS over homegrown or packaged message queuing systems?

### How is Amazon SQS different from Amazon Simple Notification Service (SNS)?

### How is Amazon SQS different from Amazon MQ?

### Does Amazon SQS provide message ordering?

### Does Amazon SQS guarantee delivery of messages?

### How is Amazon SQS different from Amazon Kinesis Streams?

### Does Amazon use Amazon SQS for its own applications?

## Billing

[Open all](#)

### How much does Amazon SQS cost?

### What can I do with the Amazon SQS Free Tier?

### Will I be charged for all Amazon SQS requests?

### Do Amazon SQS batch operations cost more than other requests?

### How will I be charged and billed for my use of Amazon SQS?

There are no initial fees to begin using Amazon SQS. At the end of the month, your credit card will be automatically charged for the month’s usage.

You can view your charges for the current billing period at any time on the AWS website:

1.  Log into your AWS account.
2.  Under **Your Web Services Account**, select **Account Activity**.

### How can I track and manage the costs associated with my Amazon SQS queues?

### Do your prices include taxes?

## Features, functionality, and interfaces

[Open all](#)

### Can I use Amazon SQS with other AWS services?

### How can I interact with Amazon SQS?

### What API actions are available for Amazon SQS?

### Who can perform operations on a message queue?

### Can I use Java Message Service (JMS) with Amazon SQS?

### How does Amazon SQS identify messages?

### How does Amazon SQS handle messages that can't be processed?

### What is a visibility timeout?

### Does Amazon SQS support message metadata?

### How can I determine the time-in-queue value?

### What is the typical latency for Amazon SQS?

### For anonymous access, what is the value of the SenderId attribute for a message?

### What is Amazon SQS long polling?

### Is there an additional charge for using Amazon SQS long polling?

### When should I use Amazon SQS long polling, and when should I use Amazon SQS short polling?

### What value should I use for my long-poll timeout?

### What is the AmazonSQSBufferedAsyncClient for Java?

The AmazonSQSBufferedAsyncClient for Java provides an implementation of the AmazonSQSAsyncClient interface and adds several important features:

- Automatic batching of multiple SendMessage, DeleteMessage, or ChangeMessageVisibility requests without any required changes to the application
- Prefetching of messages into a local buffer that allows your application to immediately process messages from Amazon SQS without waiting for the messages to be retrieved

Working together, automatic batching and prefetching increase the throughput and reduce the latency of your application while reducing your costs by making fewer Amazon SQS requests. For more information, see [Client-Side Buffering and Request Batching](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/buffering.html) in the *Amazon SQS Developer Guide*.

### Where can I download the AmazonSQSBufferedAsyncClient for Java?

### Do I have to rewrite my application to use the AmazonSQSBufferedAsyncClient for Java?

### How can I subscribe Amazon SQS message queues to receive notifications from Amazon SNS topics?

1.  In the Amazon SQS console, select an Amazon SQS standard queue.
2.  Under Queue Actions, select Subscribe Queue to SNS Topic from the drop-down list.
3.  In the dialog box, select the topic from the Choose a Topic drop-down list, and click Subscribe.

For more information, see [Subscribing a Queue to an Amazon SNS Topic](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqssubscribe.html) in the *Amazon SQS Developer Guide*.

### Can I delete all messages in a message queue without deleting the message queue itself?

## FIFO queues

[Open all](#)

### What regions are FIFO queues available in?

### How many copies of a message will I receive?

### Are the Amazon SQS queues I used previously changing to FIFO queues?

### Can I convert my existing standard queue to a FIFO queue?

### Are Amazon SQS FIFO queues backwards-compatible?

### With which AWS or external services are Amazon SQS FIFO queues compatible?

Some AWS or external services that send notifications to Amazon SQS might not be compatible with FIFO queues, despite allowing you to set a FIFO queue as a target.

The following features of AWS services aren't currently compatible with FIFO queues:

- [Auto Scaling Lifecycle Hooks](https://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
- [AWS IoT Rule Actions](http://docs.aws.amazon.com/iot/latest/developerguide/iot-rule-actions.html)
- [AWS Lambda Dead Letter Queues](http://docs.aws.amazon.com/lambda/latest/dg/dlq.html)

For information about compatibility of other services with FIFO queues, see your service documentation.

### Are Amazon SQS FIFO queues compatible with the Amazon SQS Buffered Asynchronous Client, the Amazon SQS Extended Client Library for Java, or the Amazon SQS Java Message Service (JMS) Client?

### Which AWS CloudWatch metrics do Amazon SQS FIFO queues support?

FIFO queues support all metrics that standard queues support. For FIFO queues, all approximate metrics return accurate counts. For example, the following AWS CloudWatch metrics are supported:

- ApproximateNumberOfMessagesDelayed - The number of messages in the queue that are delayed and not available for reading immediately.
- ApproximateNumberOfMessagesVisible - The number of messages available for retrieval from the queue.
- ApproximateNumberOfMessagesNotVisible - The number of messages that are in flight (sent to a client but have not yet been deleted or have not yet reached the end of their visibility window).

### What are message groups?

### Do Amazon SQS FIFO queues support multiple producers?

### Do Amazon SQS FIFO queues support multiple consumers?

### What is the throughput quota for an Amazon SQS FIFO queue?

### Are there any limits specific to FIFO queue attributes?

## Fair Queues

[Open all](#)

### What are Amazon SQS fair queues?

### When should I use fair queues?

### How do I get started with fair queues?

### What is a tenant in fair queues?

### How are fair queues different from FIFO queues in mitigating noisy neighbor events?

### Do fair queues affect my queue's throughput?

### How do fair queues work?

### Do fair queues limit the per-tenant consumption rate?

### How can I monitor fair queues?

### How can I stop using fair queues?

### Do I need to add message group IDs to all messages?

### What regions are fair queues available in?

## Security and reliability

[Open all](#)

### How reliable is the storage of my data in Amazon SQS?

### How can I secure the messages in my message queues?

### Why are there separate ReceiveMessage and DeleteMessage operations?

### Can a deleted message be received again?

### What happens if I issue a DeleteMessage request on a previously-deleted message?

## Server-Side encryption (SSE)

[Open all](#)

### What are the benefits of SSE for Amazon SQS?

### Can I use SNS, Cloud Watch Events and S3 Events with encrypted queues?

### What regions are queues with SSE available in?

### How do I enable SSE for a new or existing Amazon SQS queue?

### What Amazon SQS queue types can use SSE?

### What permissions do I need to use SSE with Amazon SQS?

### Are there any charges for using SSE with Amazon SQS?

### What does SSE for Amazon SQS encrypt and how is it encrypted?

SSE encrypts the body of a message in an Amazon SQS queue.

SSE doesn't encrypt the following components:

- Queue metadata (queue name and attributes)
- Message metadata (message ID, timestamp, and attributes)
- Per-queue metrics

Amazon SQS generates [data keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#data-keys) based on the AWS-managed customer master key (CMK) for Amazon SQS or a custom CMK to provide [envelope encryption](http://docs.aws.amazon.com/kms/latest/developerguide/workflow.html#envelope_encryption) and decryption of messages for a configurable time period (from 1 minute to 24 hours).

For more information, see [What Does SSE for Amazon SQS Encrypt?](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-encryption-what-does-sse-encrypt) in the *Amazon SQS Developer Guide.*

### What algorithm does SSE for Amazon SQS use to encrypt messages?

### Does SSE limit the transactions per second (TPS) or number of queues that can be created with Amazon SQS?

SSE doesn't limit the throughput (TPS) of Amazon SQS. The number of SSE queues that you can create is limited by the following:

- The [data key reuse period](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms) (1 minute to 24 hours).
- The AWS KMS per-account quota (100 TPS by default).
- The number of IAM users or accounts that access queues.
- The existence of a large backlog (a larger backlog requires more AWS KMS calls).

For example, let's assume the following:

- You set your data key reuse period to 5 minutes (300 seconds).
- Your KMS account has a default AWS KMS TPS quota of 100 TPS.
- You use an Amazon SQS queue without a backlog and with 1 IAM user for SendMessage or ReceiveMessage actions to all queues.

In this case, you can calculate the theoretical maximum of Amazon SQS queues with SSE as follows:

**300 seconds × 100 TPS / 1 IAM user = 30,000 queues**

### How can I estimate my AWS KMS usage costs?

## Compliance

[Open all](#)

### Is Amazon SQS PCI DSS certified?

### Is Amazon SQS HIPAA-eligible?

## Limits and restrictions

[Open all](#)

### How long can I keep my messages in Amazon SQS message queues?

### How do I configure Amazon SQS to support longer message retention?

### How do I configure the maximum message size for Amazon SQS?

### What kind of data can I include in a message?

### How large can Amazon SQS message queues be?

### How many message queues can I create?

### Is there a size limit on the name of Amazon SQS message queues?

### Are there restrictions on the names of Amazon SQS message queues?

### Can I reuse a message queue name?

## Queue sharing

[Open all](#)

### How do I share a message queue?

You can associate an access policy statement (and specify the permissions granted) with the message queue to be shared. Amazon SQS provides APIs for creating and managing access policy statements:

- AddPermission
- RemovePermission
- SetQueueAttributes
- GetQueueAttributes

For more information, see the *[Amazon SQS API Reference](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/Welcome.html)*.

### Who pays for shared queue access?

### How do I identify another AWS user I want to share a message queue with?

### What do I need to provide to an AWS user I want to share a message queue with?

### Does Amazon SQS support anonymous access?

### When should I use the permissions API?

### When should I use the SetQueueAttributes operation with JSON objects?

## Service access and regions

[Open all](#)

### What regions is Amazon SQS available in?

### Can I share messages between queues in different regions?

### Is there a pricing difference between regions?

### What is the pricing structure between various regions?

## Dead-letter queues

[Open all](#)

### What are dead-letter queues?

### How do dead-letter queues work?

### How does the dead-letter queue redrive to source queue work?

### Can I use a dead letter queue with FIFO queues?

## Get started with Amazon SQS

[](/sqs/pricing/)

None

## Learn more about Amazon SQS pricing

Visit the pricing page

[](https://console.aws.amazon.com/console/home)

None

## Ready to build?

Get started with Amazon SQS

[](/contact-us/)

None

## Have more questions?

Contact us
