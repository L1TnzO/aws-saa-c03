> **BRONZE Markdown** — `INT-01` · Servicio: **Amazon SQS** · Fase 6 · Dominios examen: D2
> URL oficial: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html
> Título oficial: What is Amazon Simple Queue Service?

Amazon Simple Queue Service (Amazon SQS) offers a secure, durable, and available hosted queue that lets you
integrate and decouple distributed software systems and components. Amazon SQS offers common
constructs such as dead-letter queues (./sqs-dead-letter-queues.html) and
cost allocation tags (./sqs-queue-tags.html). It provides a generic web
services API that you can access using any programming language that the AWS SDK
supports.

## Benefits of using Amazon SQS

- Security – You control (./security-iam.html) who can
send messages to and receive messages from an Amazon SQS queue. You can choose to
transmit sensitive data by protecting the contents of messages in queues by
using default Amazon SQS managed server-side encryption (SSE), or by using custom
SSE (./sqs-server-side-encryption.html) keys managed in
AWS Key Management Service (AWS KMS).
- Durability – For the safety of your
messages, Amazon SQS stores them on multiple servers. Standard queues support at-least-once message
delivery (./standard-queues-at-least-once-delivery.html), and FIFO queues support exactly-once message
processing (./FIFO-queues-exactly-once-processing.html) and high-throughput (./high-throughput-fifo.html) mode.
- Availability – Amazon SQS uses redundant infrastructure (#sqs-basic-architecture) to provide
highly-concurrent access to messages and high availability for producing and
consuming messages.
- Scalability – Amazon SQS can process each
buffered
request (./sqs-client-side-buffering-request-batching.html) independently, scaling transparently to handle any load
increases or spikes without any provisioning instructions.
- Reliability – Amazon SQS locks your messages
during processing, so that multiple producers can send and multiple consumers
can receive messages at the same time.
- Customization – Your queues don't
have to be exactly alike—for example, you can set a default delay on a queue (./sqs-delay-queues.html). You can
store the contents of messages larger than 1 MiB using Amazon Simple Storage Service (Amazon S3) (./sqs-s3-messages.html) or Amazon DynamoDB, with
Amazon SQS holding a pointer to the Amazon S3 object, or you can split a large message
into smaller messages.

## Basic Amazon SQS architecture

This section describes the components of a distributed messaging system and explains the
lifecycle of an Amazon SQS message.

### Distributed queues

There are three main parts in a distributed messaging system: the **components of
your distributed system**, your **queue** (distributed on Amazon SQS servers), and the **messages
in the queue**.

In the following scenario, your system has several *producers* (components that send messages
to the queue) and *consumers* (components that receive messages from the queue). The queue (which
holds messages A through E) redundantly stores the messages across multiple Amazon SQS servers.

- ### On this page

Benefits of using Amazon SQS (#sqs-benefits)
- Basic architecture (#sqs-basic-architecture)
- Differences between Amazon SQS, Amazon MQ, and Amazon SNS (#sqs-difference-from-amazon-mq-sns)

#### Next topic:

Getting started
