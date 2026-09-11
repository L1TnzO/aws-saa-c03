> **BRONZE Markdown** — `INT-10` · Servicio: **Kinesis Firehose** · Fase 6 · Dominios examen: D3
> URL oficial: https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html
> Título oficial: What is Amazon Data Firehose?

Amazon Data Firehose is a fully managed service for delivering real-time streaming data (http://aws.amazon.com/streaming-data/) to destinations such as
Amazon Simple Storage Service (Amazon S3), Amazon Redshift, Amazon OpenSearch Service, Amazon OpenSearch Serverless, Splunk, Apache Iceberg
Tables, and any custom HTTP endpoint or HTTP endpoints owned by supported third-party
service providers, including Datadog, Dynatrace, LogicMonitor, MongoDB, New Relic,
Coralogix, and Elastic. With Amazon Data Firehose, you don't need to write applications or manage
resources. You configure your data producers to send data to Amazon Data Firehose, and it automatically
delivers the data to the destination that you specified. You can also configure Amazon Data Firehose to
transform your data before delivering it.

For more information about AWS big data solutions, see Big Data on AWS (http://aws.amazon.com/big-data/). For more information about
AWS streaming data solutions, see What is
Streaming Data? (http://aws.amazon.com/streaming-data/)

## Learn key concepts

As you get started with Amazon Data Firehose, you can benefit from understanding the following
concepts.

Firehose stream

The underlying entity of Amazon Data Firehose. You use Amazon Data Firehose by creating a Firehose stream and
then sending data to it. For more information, see Tutorial: Create a Firehose stream from console (./basic-create.html) and Send data to a Firehose stream (./basic-write.html).

Record

The data of interest that your data producer sends to a Firehose stream. A
record can be as large as 1,000 KB.

Data producer

Producers send records to Firehose streams. For example, a web server that
sends log data to a Firehose stream is a data producer. You can also
configure your Firehose stream to automatically read data from an existing Kinesis
data stream, and load it into destinations. For more information, see Send data to a Firehose stream (./basic-write.html).

Buffer size and buffer interval

Amazon Data Firehose buffers incoming streaming data to a certain size or for a certain
period of time before delivering it to destinations. **Buffer
Size** is in MBs and **Buffer Interval** is in
seconds.

## Understand data flow in Amazon Data Firehose

For Amazon S3 destinations, streaming data is delivered to your S3 bucket. If data
transformation is enabled, you can optionally back up source data to another Amazon S3
bucket.

- ### On this page

Learn key concepts (#key-concepts)
- Understand data flow in Amazon Data Firehose (#data-flow-diagrams)

#### Next topic:

Working with AWS SDKs
