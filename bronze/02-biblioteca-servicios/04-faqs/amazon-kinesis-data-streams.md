[Skip to main content](#aws-page-content-main)

Amazon Kinesis Data Streams

- [Overview](/kinesis/data-streams/)
- [Features](/kinesis/data-streams/features/)
- [Pricing](/kinesis/data-streams/pricing/)
- [Getting Started](/kinesis/data-streams/getting-started/)
- [Customers](/kinesis/data-streams/customers/)
- More

# Amazon Kinesis Data Streams FAQs

- [General](#general--bg38pt)
  4
- [Key concepts](#key-concepts--bg38pt)
  7
- [Adding data to Kinesis Data Streams](#adding-data-to-kinesis-data-streams--bg38pt)
  5
- [Reading and processing data from Kinesis Data Streams](#reading-and-processing-data-from-kinesis-data-streams--bg38pt)
  9
- [On-demand mode](#on-demand-mode--bg38pt)
  3
- [Data delivery to Amazon S3](#data-delivery-to-amazon-s3--bg38pt)
  4
- [Provisioned mode](#provisioned-mode--bg38pt)
  7
- [Extended and long-term data retention](#extended-and-long-term-data-retention--bg38pt)
  5
- [Managing Kinesis Data Streams](#managing-kinesis-data-streams--bg38pt)
  9
- [Security](#security--bg38pt)
  2
- [Encryption](#encryption--bg38pt)
  14
- [Service Level Agreement](#service-level-agreement--bg38pt)
  2
- [Pricing and billing](#pricing-and-billing--bg38pt)
  5
- [Comparison with other AWS services](#comparison-with-other-aws-services--bg38pt)
  3

### General

[Open all](#)

#### What is Amazon Kinesis Data Streams?

#### What does Kinesis Data Streams manage on my behalf?

#### What can I do with Kinesis Data Streams?

Kinesis Data Streams is useful for rapidly moving data off data producers and then continuously processing the data, whether that means transforming it before emitting to a data store, running real-time metrics and analytics, or deriving more complex data streams for further processing.

The following are typical scenarios for using Kinesis Data Streams:

- **Accelerated log and data feed intake:** Instead of waiting to batch the data, you can have your data producers push data to a Kinesis data stream as soon as the data is produced, preventing data loss in case of producer failure. For example, system and application logs can be continuously added to a data stream and be available for processing within seconds.
- **Real-time metrics and reporting:** You can extract metrics and generate reports from Kinesis data stream data in real time. For example, your Amazon Kinesis application can work on metrics and reporting for system and application logs as the data is streaming in, rather than waiting to receive data batches.
- **Real-time data analytics:** With Kinesis Data Streams, you can run real-time streaming data analytics. For example, you can add clickstreams to your Kinesis data stream and have your Kinesis application run analytics in real time, allowing you to gain insights from your data in minutes instead of hours or days.
- **Log and event data collection:** Collect log and event data from sources such as servers, desktops, and mobile devices. You can then build applications using Amazon Lambda or Amazon Managed Service for Apache Flink to continuously process the data, generate metrics, power live dashboards, and emit aggregated data into stores such as Amazon Simple Storage Service (Amazon S3).
- **Power event-driven applications:** Quickly pair with AWS Lambda to respond or adjust to immediate occurrences within the event-driven applications in your environment, at any scale.

#### How do I use Kinesis Data Streams?

### Key concepts

[Open all](#)

#### What is a shard, producer, and consumer in Kinesis Data Streams?

#### What is a record?

#### What is a partition key?

#### What is a sequence number?

#### What are On-demand Standard and On-demand Advantage modes?

#### How do I choose between On-demand Standard and On-demand Advantage mode?

#### Can I switch between On-demand Standard and On-demand Advantage mode?

### Adding data to Kinesis Data Streams

[Open all](#)

#### How do I add data to my Amazon Kinesis data stream?

#### What is the difference between PutRecord and PutRecords?

#### What is Amazon Kinesis Producer Library (KPL)?

#### What is Amazon Kinesis Agent?

#### What data is counted against the data throughput of an Amazon Kinesis data stream during a PutRecord or PutRecords call?

### Reading and processing data from Kinesis Data Streams

[Open all](#)

#### What is a consumer, and what are different consumer types offered by Kinesis Data Streams?

#### How I can process data captured and stored in Kinesis Data Streams?

#### What is Amazon Kinesis Client Library (KCL)?

#### What is the SubscribeToShard API?

#### What is enhanced fan-out?

#### When should I use enhanced fan-out?

#### How is enhanced fan-out used by a consumer?

#### Can I have some consumers using enhanced fan-out, and other not?

#### Do I need to use enhanced fan-out if I want to use SubscribeToShard?

### On-demand mode

[Open all](#)

#### What are the default throughput quotas to write data into data stream using on-demand mode?

#### How do data streams scale in on-demand mode to handle increase in write throughput?

#### What are the throughput limits for reading data from streams in on-demand mode?

### Data delivery to Amazon S3

[Open all](#)

#### What are the data delivery options from Kinesis Data Streams to Amazon S3 and Amazon S3 tables? 

#### What is streaming table?

#### What is Amazon S3 general-purpose delivery? 

#### How can I configure streaming tables and Amazon S3 delivery, and how is it priced? 

### Provisioned mode

[Open all](#)

#### What is provisioned mode?

#### What are the limits of Kinesis Data Streams in provisioned mode?

#### How do I scale capacity of Kinesis Data Streams in provisioned mode?

#### How do I decide the throughput of my Amazon Kinesis data stream in provisioned mode?

#### What is the maximum throughput I can request for my Amazon Kinesis data stream in provisioned mode?

#### What happens if the capacity limits of an Amazon Kinesis data stream are exceeded while the data producer adds data to the data stream in provisioned mode?

#### What happens if the capacity limits of an Amazon Kinesis data stream are exceeded while the Amazon Kinesis application reads data from the data stream in provisioned mode?

### Extended and long-term data retention

[Open all](#)

#### What is the retention period supported by Kinesis Data Streams?

#### Can I use the existing Kinesis Data Streams APIs to read data older than seven days?

#### Are there any new APIs to further assist in reading old data?

#### When do I use the API enhancements?

#### Does Kinesis Data Streams support schema registration?

### Managing Kinesis Data Streams

[Open all](#)

#### How do I change the throughput of my Amazon Kinesis data stream in provisioned mode?

#### How long does it take to change the throughput of my Amazon Kinesis data stream running in provisioned mode using UpdateShardCount or the AWS Management Console?

#### Does Kinesis Data Streams remain available when I change the throughput of my Kinesis data stream in provisioned mode or when the scaling happens automatically in on-demand mode?

#### How do I monitor the operations and performance of my Amazon Kinesis data stream?

#### How do I manage and control access to my Amazon Kinesis data stream?

#### How do I share access to my data stream with another account?

#### How do I log API calls made to my Amazon Kinesis data stream for security analysis and operational troubleshooting?

#### How do I effectively manage my Amazon Kinesis Data Streams resources and the costs associated with them?

#### How do I warm the throughput of my Amazon Kinesis data stream in On-demand Advantage mode?

### Security

[Open all](#)

#### When I use Kinesis Data Streams, how secure is my data?

#### Can I privately access Kinesis Data Streams APIs from my Amazon Virtual Private Cloud (Amazon VPC) without using public IPs?

### Encryption

[Open all](#)

#### Can I encrypt the data I put into a Kinesis data stream?

#### Why should I use server-side encryption instead of client-side encryption?

You might choose server-side encryption over client-side encryption for any of the following reason:

- It is hard to enforce client-side encryption.
- They want a second layer of security on top of client-side encryption.
- It is hard to implement client-side key management schemes.

#### What is server-side encryption?

#### Is there a server-side encryption getting started guide?

#### Does server-side encryption interfere with how my applications interact with Kinesis Data Streams?

Possibly. It depends on the key you use for encryption and the permissions governing access to the key.

- If you use the AWS-managed KMS key for Kinesis (key alias = aws/kinesis) your applications will not be impacted by enabling or disabling encryption with this key.
- If you use a different KMS key, like a custom AWS KMS key or one you imported into the AWS KMS service, and if your producers and consumers of a data stream do not have permission to use the KMS key used for encryption, then your PUT and GET requests will fail. Before you can use server-side encryption you must configure AWS KMS key policies to allow encryption and decryption of messages. For examples and more information about AWS KMS permissions, see AWS KMS API Permissions: Actions and Resources Reference in the AWS Key Management Service Developer Guide or the permissions guidelines in the Kinesis Data Streams [server-side encryption user documentation](https://docs.aws.amazon.com/streams/latest/dev/server-side-encryption.html).

#### Is there an additional cost associated with the use of server-side encryption?

#### Which AWS regions offer server-side encryption for Kinesis Data Streams?

#### How do I start, update, or remove server-side encryption from a data stream?

#### What encryption algorithm is used for server-side encryption?

#### If I encrypt a data stream that already has data written to it, either in plain text or ciphertext, will all of the data in the data stream be encrypted or decrypted if I update encryption?

#### What does server-side encryption for Kinesis Data Streams encrypt?

#### Is server-side encryption a shard specific feature or a stream specific feature?

#### Can I change the KMS key that is used to encrypt a specific data stream?

#### Is Kinesis Data Streams available in the AWS Free Tier?

### Service Level Agreement

[Open all](#)

#### What does the Kinesis Data Streams SLA guarantee?

#### How do I know if I qualify for a SLA Service Credit?

### Pricing and billing

[Open all](#)

#### How does Kinesis Data Streams pricing work?

#### How does Kinesis Data Streams pricing work in On-demand Standard mode?

#### How does Kinesis Data Streams pricing work in On-demand Advantage mode?

#### How does Kinesis Data Streams pricing work in provisioned mode?

With provisioned mode, you specify the number of shards necessary for your application based on its write and read request rate. A shard is a unit of capacity that provides 1 MB/second of write and 2 MB/second of read throughout. You’re charged for each shard at an hourly rate. You also pay for records written into your Kinesis data stream. You incur additional charges when you use optional features such as Extended retention and Enhanced Fan-Out.

Following are two core dimensions and three optional dimensions in Kinesis Data Streams provisioned mode:

- Hourly Shard cost determined by the number of shards within your Amazon Kinesis data stream.
- PUT Payload Unit cost determined by the number of 25 KB payload units that your data producers add to your data stream.

Optional:

- Extended data retention is an optional cost determined by the number of shard hours incurred by your data stream. When extended data retention is enabled, you pay the extended retention rate for each shard in your stream.
- Long-term data retention is an optional cost with two cost dimensions: long-term data storage and long-term data retrieval. Long-term data storage reflects the numbers of GB-months data is stored for the period greater than seven days and up to 365 days. Long-term data retrieval reflects the number of GBs of data retrieved that has been stored for more than seven days.
- Enhanced fan-out is an optional cost with two cost dimensions: consumer-shard hours and data retrievals. Consumer-shard hours reflect the number of shards in a stream multiplied by the number of consumers using enhanced fan-out. Data retrievals are determined by the number of GBs delivered to consumers using enhanced fan-out.

For more information about Kinesis Data Streams costs, see [Amazon Kinesis Data Streams Pricing](/kinesis/data-streams/pricing/).

#### How is a consumer-shard hour calculated for Enhanced Fan-Out usage in provisioned mode?

### Comparison with other AWS services

[Open all](#)

#### When should I use Kinesis Data Streams and when should I use Amazon Managed Streaming for Apache Kafka (Amazon MSK)?

Kinesis Data Streams and Amazon MSK are both popular data streaming platforms that help you build your own streaming workloads that process data for specialized needs. Both services are scalable, secure, and highly available. They can both be deployed to run streaming use cases such as real-time web and log analytics, personalizing customer experiences, event-driven architectures, IoT analytics, and real-time fraud detection. When choosing between the two, it is important to consider your specific use case and requirements. Here are some factors to consider:

**Familiarity**

-  If you are new to streaming technologies, use Kinesis Data Streams.
- If you have existing applications that are running on Apache Kafka, use MSK. MSK has an existing Kafka migration program (KMP) and a migration guide to make the migration experience easy.

**Preference for open-source**

- If you have a preference for using open-source technologies, our recommendation is to use MSK. Both MSK and MSK Connect are fully compatible with open-source Apache Kafka and Kafka Connect, respectively.

#### How does Kinesis Data Streams differ from Amazon SQS?

#### When should I use Kinesis Data Streams, and when should I use Amazon SQS?

We recommend Kinesis Data Streams for use cases with requirements that are similar to the following:

- **Routing related records to the same record processor (as in streaming MapReduce).** For example, counting and aggregation are simpler when all records for a given key are routed to the same record processor.
- **Ordering of records.** For example, you want to transfer log data from the application host to the processing/archival host while maintaining the order of log statements.
- **Ability for multiple applications to consume the same stream concurrently.** For example, you have one application that updates a real-time dashboard and another that archives data to Amazon Redshift. You want both applications to consume data from the same stream concurrently and independently.
- **Ability to consume records in the same order a few hours later.** For example, you have a billing application and an audit application that runs a few hours behind the billing application. Because Kinesis Data Streams stores data for up to 365 days, you can run the audit application up to 365 days behind the billing application.

We recommend Amazon SQS for use cases with requirements that are similar to the following:

- **Messaging semantics (such as message-level ack/fail) and visibility timeout.** For example, you have a queue of work items and want to track the successful completion of each item independently. Amazon SQS tracks the ack/fail so the application doesn’t have to maintain a persistent checkpoint/cursor. Amazon SQS will delete acked messages and redeliver failed messages after a configured visibility timeout.
- **Individual message delay.** For example, you have a job queue and need to schedule individual jobs with a delay. With Amazon SQS, you can configure individual messages to have a delay of up to 15 minutes.
- **Dynamically increasing concurrency/throughput at read time.** For example, you have a work queue and want to add more readers until the backlog is cleared. With Kinesis Data Streams, you can scale up to a sufficient number of shards (note, however, that you’ll need to provision enough shards ahead of time).
- **Using the ability of Amazon SQS to scale transparently.** For example, you buffer requests and the load changes as a result of occasional load spikes or the natural growth of your business. Because each buffered request can be processed independently, Amazon SQS can scale transparently to handle the load without any provisioning instructions from you.

## Next steps

[](/kinesis/data-streams/pricing/)

Pricing

### Learn more about Kinesis Data Streams pricing

Visit the pricing page

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Console

### Ready to get started?

Sign up
