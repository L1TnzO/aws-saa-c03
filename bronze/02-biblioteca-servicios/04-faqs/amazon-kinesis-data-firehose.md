[Skip to main content](#aws-page-content-main)

Amazon Data Firehose

- [Overview](/firehose/)
- [Features](/firehose/features/)
- [Pricing](/firehose/pricing/)
- [Partners](/firehose/partners/)
- [Customers](/firehose/customers/)
- More

# Amazon Data Firehose FAQs

- [General and Streaming ETL Concepts](#general-and-streaming-etl-concepts--14o7x18)
  9
- [Data Sources](#data-sources--14o7x18)
  21
- [Data Transformation and Format Conversion](#data-transformation-and-format-conversion--14o7x18)
  6
- [Built-in Data Transformation for Amazon S3](#built-in-data-transformation-for-amazon-s3--14o7x18)
  3
- [Data Delivery and Destinations](#data-delivery-and-destinations--14o7x18)
  25
- [Troubleshooting and managing Firehose streams](#troubleshooting-and-managing-firehose-streams--14o7x18)
  14
- [Pricing and billing](#pricing-and-billing--14o7x18)
  4
- [Service Level Agreement](#service-level-agreement--14o7x18)
  2

## General and Streaming ETL Concepts

[Open all](#)

### What is Streaming ETL?

### What is Amazon Data Firehose?

### What is a source in Firehose?

### What is a destination in Firehose?

### What does Firehose manage on my behalf?

### How do I use Firehose?

After you sign up for Amazon Web Services, you can start using Firehose with the following steps:

- Create an Firehose stream through the [Firehose Console](https://console.aws.amazon.com/kinesis/home) or the [CreateDeliveryStream](http://docs.aws.amazon.com/firehose/latest/APIReference/API_CreateDeliveryStream.html) operation. You can optionally configure an AWS Lambda function in your Firehose stream to prepare and transform the raw data before loading the data.
- Configure your data producers to continuously send data to your Firehose stream using the [Amazon Kinesis Agent](https://docs.aws.amazon.com/firehose/latest/dev/writing-with-agents.html) or the [Firehose API](https://docs.aws.amazon.com/firehose/latest/dev/writing-with-sdk.html).
- Firehose automatically and continuously loads your data to the destinations you specify.

### What is a Firehose stream in Firehose?

### What is a record in Firehose?

### What are the limits of Firehose?

## Data Sources

[Open all](#)

### What programming languages or platforms can I use to access Firehose API?

### What is Amazon Kinesis Agent?

### Where do I get Amazon Kinesis Agent?

You can download and install Kinesis Agent using the following command and link:

- On Amazon Linux: sudo yum install –y aws-kinesis-agent
- On Red Hat Enterprise Linux: sudo yum install –y https://s3.amazonaws.com/streaming-data-agent/aws-kinesis-agent-latest.amzn1.noarch.rpm
- From GitHub: [awlabs/amazon-kinesis-agent](https://github.com/awslabs/amazon-kinesis-agent)
- On Windows: https://docs.aws.amazon.com/kinesis-agent-windows/latest/userguide/getting-started.html#getting-started-installation

### What is the difference between PutRecord and PutRecordBatch operations?

### How do I add data to my Firehose stream from my Amazon MSK?

### What are the key benefits of Amazon MSK and Firehose Integration?

### What types of Amazon MSK endpoints are supported with Firehose?

### Can you connect Firehose to Amazon MSK cluster in a different AWS account?

### What is the checkpoint time to start consuming data from Amazon MSK topic?

### How do I add data to my Firehose stream from my Kinesis Data Stream?

### How often does Firehose read data from my Kinesis stream?

### From where does Firehose read data when my Kinesis Data Stream is configured as the source of my Firehose stream?

### Can I configure my Kinesis Data Stream to be the source of multiple Firehose stream?

### Can I still add data to Firehose stream through Kinesis Agent or Firehose’s PutRecord and PutRecordBatch operations when my Kinesis Data Stream is configured as source?

### How do I add data to my Firehose stream from AWS IoT?

### How can I stream my VPC flow logs to Firehose?

### How do I add data to my Firehose stream from CloudWatch Logs?

### How do I add data to my Firehose stream from CloudWatch Events?

### How do I add data to my Amazon Data Firehose stream from AWS Eventbridge?

### What kind of encryption can I use?

### What is the IAM role that I need to specify while creating a Firehose stream?

## Data Transformation and Format Conversion

[Open all](#)

### How do I prepare and transform raw data in Firehose?

### What compression format can I use?

### How does compression work when I use the CloudWatch Logs subscription feature?

### How do I return prepared and transformed data from my AWS Lambda function back to Amazon Data Firehose?

All transformed records from Lambda must be returned to Firehose with the following three parameters; otherwise, Firehose will reject the records and treat them as data transformation failure.

- recordId: Firehose passes a recordId along with each record to Lambda during the invocation. Each transformed record should be returned with the exact same recordId. Any mismatch between the original recordId and returned recordId will be treated as data transformation failure.  
   
- result: The status of transformation result of each record. The following values are allowed for this parameter: “Ok” if the record is transformed successfully as expected. “Dropped” if your processing logic intentionally drops the record as expected. “ProcessingFailed” if the record is not able to be transformed as expected. Firehose treats returned records with “Ok” and “Dropped” statuses as successfully processed records, and the ones with “ProcessingFailed” status as unsuccessfully processed records when it generates SucceedProcessing.Records and SucceedProcessing.Bytes metrics.  
   
- data: The transformed data payload after based64 encoding.

### What is error logging?

### What is source record backup?

## Built-in Data Transformation for Amazon S3

[Open all](#)

### When should I use Firehose dynamic partitioning?

### How do I setup dynamic partitioning with Firehose?

### What kind of transformations and data processing can I do with dynamic partitioning and with partitioning keys?

## Data Delivery and Destinations

[Open all](#)

### Can I keep a copy of all the raw data in my S3 bucket?

### How often does Firehose deliver data to my Amazon S3 bucket?

### How is buffer size applied if I choose to compress my data?

### What privilege is required for the Amazon Redshift user that I need to specify while creating a Firehose stream?

### What do I need to do if my Amazon Redshift instance is within a VPC?

### Why do I need to provide an Amazon S3 bucket while choosing Amazon Redshift as destination?

### Is it possible for a single Firehose stream to deliver data to multiple Snowflake tables?

### What delivery model does Firehose use when delivering data to Snowflake streaming?

### What is the minimum latency for delivering to Snowflake streaming using Firehose?

### What is Amazon OpenSearch Service?

### What is index rotation for Amazon OpenSearch Service destination?

### Why do I need to provide an Amazon S3 bucket when choosing Amazon OpenSearch Service as destination?

### Can I change the configurations of my Firehose stream after it’s created?

### Can I use a Firehose stream in one account to deliver my data into an Amazon OpenSearch Service domain VPC destination in a different account?

### Can I use a Firehose stream in one region to deliver my data into an Amazon OpenSearch Service domain VPC destination in a different region?

### How often does Firehose deliver data to my Amazon OpenSearch domain?

### What is the manifests folder in my Amazon S3 bucket?

### How do backed up OpenSearch documents look like in my Amazon S3 bucket?

### Can a single Firehose stream deliver data to multiple Amazon S3 buckets?

### Can a single Firehose stream deliver data to multiple Amazon Redshift instances or tables?

### Can a single Firehose stream deliver data to multiple Amazon OpenSearch Service domains or indexes?

### How does Amazon Data Firehose deliver data to my Amazon OpenSearch Service domain into a VPC?

### Is it possible for a single Firehose stream to deliver data to multiple Apache Iceberg tables?

### Does Firehose support connecting to the AWS Glue Data Catalog in a different account, or in a different AWS region?

### Can I use Data Transformation feature using Lambda when delivering to Apache Iceberg tables?

## Troubleshooting and managing Firehose streams

[Open all](#)

### Why do I get throttled when sending data to my Amazon Data Firehose stream?

### Why do I see duplicated records in my Amazon S3 bucket, Amazon Redshift table, Amazon OpenSearch index, or Splunk clusters?

### What happens if data delivery to my Amazon S3 bucket fails?

### What happens if data delivery to my Amazon Redshift instance fails?

### What happens if data delivery to my Amazon OpenSearch domain fails?

### What happens if there is a data transformation failure?

There are two types of failure scenarios when Firehose attempts to invoke your Lambda function for data transformation:

- The first type is when the function invocation fails for reasons such as reaching network timeout, and hitting Lambda invocation limits. Under these failure scenarios, Firehose retries the invocation for three times by default and then skips that particular batch of records. The skipped records are treated as unsuccessfully processed records. You can configure the number of invocation re-trials between 0 and 300 using the CreateDeliveryStream and UpdateDeliveryStream APIs. For this type of failure, you can also use Firehose’s error logging feature to emit invocation errors to CloudWatch Logs. For more information, see [Monitoring with Amazon CloudWatch Logs](https://docs.aws.amazon.com/firehose/latest/dev/monitoring-with-cloudwatch-logs.html).  
   
- The second type of failure scenario occurs when a record’s transformation result is set to “ProcessingFailed” when it is returned from your Lambda function. Firehose treats these records as unsuccessfully processed records. For this type of failure, you can use Lambda’s logging feature to emit error logs to CloudWatch Logs. For more information, see [Accessing Amazon CloudWatch Logs for AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions-logs.html).

For both types of failure scenarios, the unsuccessfully processed records are delivered to your S3 bucket in the processing_failed folder.

### Why is the size of delivered S3 objects larger than the buffer size I specified in my Firehose stream configuration?

### What is the errors folder in my Amazon S3 bucket?

### What is the opensearch_failed folder in my Amazon S3 bucket?

### What is the processing_failed folder in my Amazon S3 bucket?

### How do I monitor the operations and performance of my Amazon Data Firehose stream?

### How do I monitor data transformation and delivery failures of my Amazon Data Firehose stream?

### How do I manage and control access to my Amazon Data Firehose stream?

### How do I log API calls made to my Amazon Data Firehose stream for security analysis and operational troubleshooting?

## Pricing and billing

[Open all](#)

### Is Firehose available in the AWS Free Tier?

### How much does Firehose cost?

### When I use PutRecordBatch operation to send data to Amazon Data Firehose, how is the 5KB roundup calculated?

### Does Firehose cost include Amazon S3, Amazon Redshift, Amazon OpenSearch Service, and AWS Lambda costs?

## Service Level Agreement

[Open all](#)

### What does the Amazon Data Firehose SLA guarantee?

### How do I know if I qualify for a SLA Service Credit?

## Get started

[](/kinesis/data-firehose/pricing/)

Pricing

## Learn more about Amazon Data Firehose pricing

Learn more

[](/contact-us/)

Contact us

## Have more questions?

Contact us
