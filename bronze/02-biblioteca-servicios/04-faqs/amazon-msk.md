[Skip to main content](#aws-page-content-main)

Amazon Managed Streaming for Apache Kafka

- [Overview](/msk/)
- Features
- [Pricing](/msk/pricing/)
- [Getting Started](/msk/getting-started/)
- [Migrations](/msk/migrations/)
- More

# FAQs

- [General](#general--17rnx60)
  10
- [Resources](#resources--17rnx60)
  12
- [Amazon MSK Provisioned](#amazon-msk-provisioned--17rnx60)
  3
- [Standard brokers](#standard-brokers--17rnx60)
  1
- [Express brokers](#express-brokers--17rnx60)
  9
- [Amazon MSK Serverless](#amazon-msk-serverless--17rnx60)
  9
- [Migrating to Amazon MSK](#migrating-to-amazon-msk--17rnx60)
  12
- [Supported versions](#supported-versions--17rnx60)
  2
- [Networking](#networking--17rnx60)
  5
- [Encryption](#encryption--17rnx60)
  4
- [Access Management](#access-management--17rnx60)
  7
- [Monitoring, metrics, logging, and tagging](#monitoring-metrics-logging-and-tagging--17rnx60)
  10
- [Metadata Management](#metadata-management--17rnx60)
  6
- [Integrations](#integrations--17rnx60)
  1
- [Replication](#replication--17rnx60)
  17
- [Scaling](#scaling--17rnx60)
  5
- [Pricing and availability](#pricing-and-availability--17rnx60)
  5
- [Compliance](#compliance--17rnx60)
  1
- [Service Level Agreement](#service-level-agreement--17rnx60)
  2

## General

[Open all](#)

### What is Amazon Managed Streaming for Apache Kafka (Amazon MSK)?

### What is Apache Kafka?

### What is streaming data?

### What is Kafka Connect?

### What are Apache Kafka’s primary capabilities?

The three key capabilities of Apache Kafka are as follows:

- Apache Kafka stores streaming data in a fault-tolerant way, providing a buffer between producers and consumers. It stores events as a continuous series of records and preserves the order in which the records were produced.
- Apache Kafka allows many data producers—such as websites, IoT devices, and Amazon Elastic Compute Cloud (Amazon EC2) instances—to continually publish streaming data and categorize it using Apache Kafka topics. Multiple data consumers (such as machine learning applications, AWS Lambda functions, and microservices) read from these topics at their own rate, similar to a message queue or enterprise messaging system.
- Data consumers can process data from Apache Kafka topics on a first-in-first-out basis, preserving the order data was produced.

### What are the key concepts of Apache Kafka?

### When should I use Apache Kafka?

### Does Amazon MSK support schema registration?

### What does Amazon MSK do?

### What are the data delivery options to Amazon S3 and Amazon S3 Tables?

## Resources

[Open all](#)

### How can I configure data delivery to Amazon S3 and Amazon S3 Tables?

### How do I create my first MSK cluster?

### What resources are within a cluster?

### What are brokers?

### What broker instance sizes can I provision on an MSK cluster?

### Do I need to provision and pay for broker boot volumes?

### When I create an Apache Kafka cluster, do the underlying resources (such as Amazon EC2 instances) show up in my Amazon EC2 console?

### What do I need to provision within an MSK cluster?

### How does data replication work in Amazon MSK?

### Can I change the default broker configurations or upload a cluster configuration to Amazon MSK?

### How do I create topics?

### What are the deployment options of Amazon MSK?

## Amazon MSK Provisioned

[Open all](#)

### What is MSK Provisioned?

### Does Amazon MSK support M7g clusters?

### Can I configure custom domain names on my MSK Provisioned cluster?

## Standard brokers

[Open all](#)

### What are Standard brokers?

## Express brokers

[Open all](#)

### What are Express brokers?

### What are the key benefits of Express brokers?

- **No storage management**: Express brokers eliminate the need to provision or manage any storage resources. You get elastic, virtually unlimited, pay-as-you-go, and fully managed storage. For high throughput use cases, you do not need to reason about the interactions between compute instances and storage volumes and the associated throughput bottlenecks. These capabilities simplify cluster management and eliminate storage management operational overhead.
- **Intelligent rebalancing**: All new Express brokers are enabled with Intelligent rebalancing by default and at no additional cost. Intelligent rebalancing makes it effortless for customers to execute automatic partition balancing operations when scaling their Kafka clusters up or down. Intelligent Rebalancing maximizes the capacity utilization of MSK Express-based clusters by optimally rebalancing Kafka resources on them for better performance, eliminating the need for customers to manage partitions themselves or via third-party tools. Intelligent Rebalancing performs these operations up to 180 times faster compared to Standard brokers.
- **Faster scaling**: Express brokers allow you to scale your cluster and move partitions faster than on Standard brokers. This capability is crucial when you need to scale out your cluster to handle upcoming load spikes or scale in your cluster to reduce cost. See the sections on expanding your cluster, removing brokers, reassigning partitions, and setting up LinkedIn’s Cruise Control for rebalancing for more details on scaling your cluster.
- **Higher throughput**: Express brokers offer up to 3x more throughput per broker than Standard brokers. For example, you can safely write data at up to 500 MBps with each m7g.16xlarge sized Express broker compared to 153.8 MBps on the equivalent Standard broker (both numbers assume sufficient bandwidth allocation towards background operations, such as replication and rebalancing).
- **Configured for high resilience**: Express brokers automatically offer various best practices pre-configured to improve your cluster’s resilience. These include guardrails on critical Apache Kafka configurations, throughput quotas, and capacity reservation for background operations and unplanned repairs. These capabilities make it safer and easier to run large scale Apache Kafka applications. See the sections on Express broker configurations and Amazon MSK Express broker quota for more details.
- **No Maintenance windows**: There are no maintenance windows for Express brokers. Amazon MSK automatically updates your cluster hardware on an ongoing basis. See Amazon MSK Express brokers for more details.
- **Data delivery to Amazon S3 and Apache Iceberg tables**: Express brokers supports serverless data delivery to streaming tables for Apache Iceberg on Amazon S3 Tables. This capability can reduce the cost of ingesting and delivering Apache Kafka data to Apache Iceberg with Amazon S3 Tables by up to 60% and reduces downstream query costs by up to 30% versus self-managed Apache Kafka alternatives. In addition to S3 Tables, you can deliver Kafka data to general purpose Amazon S3 buckets in source data format.

### How can I optimize my cost with Express brokers?

### Which Apache Kafka APIs and tools can I use with Express brokers?

### Which Kafka configurations do I need to customize for Express brokers?

### Which encryption options are available with Express brokers?

### What are the Amazon MSK feature differences between Standard and Express brokers?

### Can I move my existing Kafka workload to Express brokers?

### How should I choose between Standard and Express MSK Provisioned broker types?

## Amazon MSK Serverless

[Open all](#)

### What is MSK Serverless?

### Does MSK Serverless automatically balance partitions within a cluster?

### How much data throughput capacity does MSK Serverless support?

### What security features does MSK Serverless offer?

### How can producers and consumers access my MSK Serverless clusters?

### Which Regions is MSK Serverless available in?

### Which authentication types does MSK Serverless support?

### How do I process data in my MSK Serverless cluster?

### How does MSK Serverless ensure high availability?

## Migrating to Amazon MSK

[Open all](#)

### Can I migrate data within my existing Apache Kafka cluster to Amazon MSK?

### Why should I use MSK Replicator to migrate data?

### Which source Kafka environments does MSK Replicator support?

### How do I get started with data migration?

### How do I establish connectivity?

### How does MSK Replicator handle authentication and authorization?

### Is data encrypted in transit?

### How can I monitor migration progress?

### How can I migrate clients?

### Does MSK Replicator support rollbacks?

### Which features are supported during migration?

### Does MSK Replicator preserve offsets for stateful applications?

## Supported versions

[Open all](#)

### Are Apache Kafka version upgrades supported?

### What versions of Apache Kafka are supported?

## Networking

[Open all](#)

### Does Amazon MSK run in an Amazon VPC?

### How will the brokers in my Amazon MSK cluster be made accessible to clients within my VPC?

### Is it possible to connect to my cluster over the public internet?

### Is the connection between my clients and an Amazon MSK cluster private?

### How do I connect to my Amazon MSK cluster from inside AWS network but outside the cluster’s Amazon VPC?

## Encryption

[Open all](#)

### Can I encrypt data in my MSK cluster?

### Is data encrypted in transit between brokers within an MSK cluster?

### Is data encrypted in transit between my Apache Kafka clients and Amazon MSK?

### Is data encrypted in transit as it moves between brokers and metadata nodes in an MSK cluster?

## Access Management

[Open all](#)

### How do I control cluster authentication and Apache Kafka API authorization?

For serverless clusters, you can use IAM access control for both authentication and authorization. For provisioned clusters, you have the following options:

- [IAM access control](https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html) for both AuthN/AuthZ (recommended)
- TLS certificate authentication for AuthN and access control lists for AuthZ
- SASL/SCRAM for AuthN and access control lists for AuthZ

Amazon MSK recommends using IAM access control. It is the easiest to use and, because it defaults to least privilege access, the most secure option.

### How does authorization work in Amazon MSK?

### How can I authenticate and authorize a client at the same time?

### How do I control service API actions?

### Can I enable IAM access control for an existing cluster?

### Can I use IAM access control outside of Amazon MSK?

### How do I provide cross-account access permissions to a Kafka client in an AWS account different from my Amazon MSK account to connect privately to my MSK cluster?

## Monitoring, metrics, logging, and tagging

[Open all](#)

### How do I monitor the performance of my clusters or topics?

### What is the cost for the different CloudWatch monitoring levels?

### What monitoring tools are compatible with Open Monitoring with Prometheus?

### How do I monitor the health and performance of clients?

### Can I tag Amazon MSK resources?

### How do I monitor consumer lag?

### How much does it cost to publish the consumer lag metric to CloudWatch?

### How do I access Apache Kafka broker logs?

### What is the logging level for broker logs?

### Can I log the use of Apache Kafka resource APIs, such as create topic?

## Metadata Management

[Open all](#)

### What is Apache ZooKeeper?

### Does Amazon MSK use Apache ZooKeeper?

### What is Apache KRaft?

### Are there any API changes required to use KRaft mode on Amazon MSK compared to ZooKeeper mode?

### I have tools that connect to ZooKeeper; how will these work for KRaft clusters without ZooKeeper?

### Can I host more partitions per broker on KRaft-based clusters than ZooKeeper-based clusters?

## Integrations

[Open all](#)

### What AWS services does Amazon MSK integrate with?

Amazon MSK integrates with the following AWS services:

- [Amazon S3](/s3/) using data delivery to Amazon S3 from Amazon MSK Express brokers in a no-code manner
- [Amazon VPC](/vpc/) for network isolation and security
- [Amazon CloudWatch](/cloudwatch/) for metrics
- [AWS KMS](/kms/) for storage volume encryption
- [IAM](/iam/) for authentication and authorization of Apache Kafka and service APIs
- [AWS Lambda](/blogs/compute/using-amazon-msk-as-an-event-source-for-aws-lambda/) for Amazon MSK event sourcing
- [AWS IoT](/about-aws/whats-new/2020/12/aws-iot-core-adds-the-ability-to-deliver-data-to-apache-kafka-clusters/)  Core for IoT event sourcing
- *[AWS Glue Schema Registry](/about-aws/whats-new/2020/11/control-evolution-data-streams-using-aws-glue-schema-registry/)* for controlling the evolution of schemas used by Apache Kafka applications
- [AWS CloudTrail](/cloudtrail/) for AWS API logs
- [AWS Certificate Manager](/certificate-manager/) for private CAs used for client TLS authentication
- [AWS CloudFormation](/cloudformation/) for describing and provisioning Amazon MSK clusters using code
- [Amazon Managed Service for Apache Flink](/managed-service-apache-flink/) for fully managed Apache Flink applications that process streaming data
- [Amazon Managed Service for Apache Flink Studio](/managed-service-apache-flink/studio/) for interactively streaming SQL on Apache Kafka
- [AWS Secrets Manager](/secrets-manager/) for client credentials used for SASL/SCRAM authentication

Amazon MSK Serverless integrates with the following AWS services:

- [Amazon S3](/s3/) using MSK Connect for delivering data to Amazon S3 from MSK serverless
- [Amazon VPC](/vpc/) for network isolation and security
- [Amazon CloudWatch](/cloudwatch/) for metrics
- [IAM](/iam/) for authentication and authorization of Apache Kafka and service APIs
- [AWS Glue Schema Registry](/about-aws/whats-new/2020/11/control-evolution-data-streams-using-aws-glue-schema-registry/) for controlling the evolution of schemas used by Apache Kafka applications
- [AWS CloudTrail](/cloudtrail/) for AWS API logs
- [AWS PrivateLink](/privatelink/) for private connectivity

## Replication

[Open all](#)

### What is Amazon MSK Replicator?

### How do I use MSK Replicator?

### Which type of Kafka clusters are supported by MSK Replicator?

### Can I specify which topics I want to replicate?

### Does MSK Replicator replicate topic settings and consumer group offsets?

### Do I need to scale the replication when my ingress throughput changes?

### Can I replicate data across MSK clusters in different AWS accounts?

### How can I monitor the replication?

### How can I use replication to increase the resiliency of my streaming application across Regions?

### Can I use MSK Replicator to replicate data from one cluster to multiple clusters or replicate data from many clusters to one?

### How does MSK Replicator connect to the source and target MSK clusters?

### How much replication latency should I expect with MSK Replicator?

### Can I keep topic names the same with MSK Replicator?

Yes, MSK Replicator supports keeping topic names identical between source and target clusters. You can configure MSK Replicator to replicate topics without adding a prefix, allowing topics in the target cluster to maintain the same names as in the source cluster.  
  
With the capability, you have the flexibility to choose whether to:

- **Use identical topic names** for simplified consumer configuration and seamless failover scenarios
- **Use prefixed topic names** (the original behavior) to clearly distinguish replicated topics and avoid naming conflicts

You can configure this setting when creating or updating your replicator. The prefix that will be added to topic names (if you choose to use prefixes) can be found under the sourceKafkaClusterAlias field using the DescribeReplicator API or on the Replicator details page in the Amazon MSK console.

### Can I replicate existing data on the source cluster?

### Can replication result in throttling consumers on the source cluster?

### Can I compress data before writing to the target cluster?

### Can I compress data before writing to the target cluster?

## Scaling

[Open all](#)

### How can I scale up storage in my cluster?

### How does tiered storage work?

### Can I scale the number of brokers in an existing cluster?

### Can I scale the broker size in an existing cluster?

### How do I balance partitions across brokers?

## Pricing and availability

[Open all](#)

### How does Amazon MSK pricing work?

### Do I pay for data transfer as a result of data replication?

### In what Regions is Amazon MSK available?

### How does data transfer pricing work?

### Does Amazon MSK offer Reserved Instance pricing?

## Compliance

[Open all](#)

### What compliance programs are in scope for Amazon MSK?

Amazon MSK is compliant with or eligible for the following programs:

- HIPAA eligible

&nbsp;

- PCI

&nbsp;

- ISO

&nbsp;

- SOC 1, 2, and 3

For a complete list of AWS services and compliance programs, see [AWS Services in Scope by Compliance Program](/compliance/services-in-scope/).

## Service Level Agreement

[Open all](#)

### What does the Amazon MSK SLA guarantee?

### How do I know if I qualify for an SLA Service Credit?

## Get started with Amazon MSK

[](/msk/pricing/)

Pricing

## Calculate your costs

Pricing

[](https://docs.aws.amazon.com/msk/latest/developerguide/getting-started.html)

Getting started

## Set up your Kafka cluster on Amazon MSK

Review the getting started guide

[](https://signin.aws.amazon.com/signin?redirect_uri=https://us-east-1.console.aws.amazon.com/msk/home)

Console

## Run your Apache kafka cluster on Amazon MSK

Sign in the the Amazon MSK console
