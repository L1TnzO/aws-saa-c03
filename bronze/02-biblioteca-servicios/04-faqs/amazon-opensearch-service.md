[Skip to main content](#aws-page-content-main)

Amazon OpenSearch Service

- [Overview](/opensearch-service/)
- Features
- [Pricing](/opensearch-service/pricing/)
- Getting Started
- Resources
- More

# Amazon OpenSearch Service FAQs

- [General](#general--uynvkb)
  9
- [Setup and configuration](#setup-and-configuration--uynvkb)
  19
- [Administration](#administration--uynvkb)
  47
- [Multi-AZ with Standby](#multi-az-with-standby--uynvkb)
  6
- [Service Level Agreement](#service-level-agreement--uynvkb)
  2
- [Cross-cluster search](#cross-cluster-search--uynvkb)
  7
- [Cross-cluster replication](#cross-cluster-replication--uynvkb)
  5
- [Name change](#name-change--uynvkb)
  4
- [Upgrades](#upgrades--uynvkb)
  11
- [Extended Support](#extended-support--uynvkb)
  20
- [Zero-ETL Integrations](#zero-etl-integrations--uynvkb)
  10

## General

[Open all](#)

### What is Amazon OpenSearch Service?

### Which OpenSearch and Elasticsearch versions does Amazon OpenSearch Service support?

### What is an Amazon OpenSearch Service domain?

### What does Amazon OpenSearch Service manage on my behalf?

### Does Amazon OpenSearch Service support the open-source Elasticsearch and OpenSearch APIs?

### What are the Availability Zone (AZ) deployment options available on Amazon OpenSearch Service?

### In which regions does Amazon OpenSearch Service offer three AZ deployments?

### How can Amazon OpenSearch Service be used for resources running on premises or on other clouds?

### Does size flexibility apply to Opensearch Reserved nodes?

## Setup and configuration

[Open all](#)

### Can I create and modify my Amazon OpenSearch Service domain through the Amazon OpenSearch Service console?

### Does Amazon OpenSearch Service support Amazon VPC?

### Can I use CloudFormation Templates to provision Amazon OpenSearch Service domains?

### Does Amazon OpenSearch Service support configuring dedicated master nodes?

### Can I create multiple Elasticsearch or OpenSearch indices within a single Amazon OpenSearch Service domain?

### How do I ingest data into my Amazon OpenSearch Service domain?

Amazon OpenSearch Service supports three options for data ingestion:

- For large data volumes, we recommend Amazon Kinesis Data Firehose, a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also transform, batch and compress the data before loading it.
- Amazon OpenSearch Service supports integration with Logstash. You can configure your Amazon OpenSearch Service domain as the data store for all logs arriving from your Logstash implementation.
- You can use native Elasticsearch (up to version 7.10) or OpenSearch APIs, such as the index and bulk APIs, to load data into your domain.

### Does Amazon OpenSearch Service support integration with Logstash?

### Does Amazon OpenSearch Service support integration with Kibana?

### What storage options are available with Amazon OpenSearch Service?

### What types of EBS volumes does Amazon OpenSearch Service support?

### Is there a limit on the amount of storage that can be allocated to an Amazon OpenSearch Service domain?

### How are dedicated master instances distributed across AZs?

### What is the recommended AZ configuration for production workloads?

### How can I configure my domain for three AZ deployment?

### Is there a fee for enabling three AZ deployment?

### I no longer see the “zone awareness” option in my console. Is my domain no longer zone aware?

### How does Amazon OpenSearch Service handle instance failures and AZ disruptions?

### If I have only one replica for the indices in my domain, should I use two or three AZs?

### How do I leverage three AZ deployment for my VPC domain?

## Administration

[Open all](#)

### Can programs running on servers in my own data center access my Amazon OpenSearch Service domains?

### How can I migrate data from my existing OpenSearch/Elasticsearch cluster to a new Amazon OpenSearch Service domain?

### How can I scale an Amazon OpenSearch Service domain?

### Does scaling my Amazon OpenSearch Service domain require downtime?

### Does Amazon OpenSearch Service support cross-zone replication?

### Does Amazon OpenSearch Service expose any performance metrics through Amazon CloudWatch?

### I wish to perform security analysis or operational troubleshooting of my Amazon OpenSearch Service deployment. Can I get a history of all the Amazon OpenSearch Service API calls made on my account?

### What is a snapshot?

### Why would I need snapshots?

### Does Amazon OpenSearch Service provide automated snapshots?

### How long are the automated daily hourly snapshots stored by Amazon OpenSearch Service?

### Is there a charge for the automated daily hourly snapshots?

### Can I create additional snapshots of my Amazon OpenSearch Service domains as needed?

### Can snapshots created by the manual snapshot process be used to recover a domain in the event of a failure?

### What happens to my snapshots when I delete my Amazon OpenSearch Service domain?

### What types of OpenSearch/Elasticsearch logs are exposed by Amazon OpenSearch Service?

### What are slow logs?

Slow logs are log files that help track the performance of various stages in an operation. OpenSearch and Elasticsearch exposes two kinds of slow logs:

- Index Slow Logs – These logs provide insights into the indexing process and can be used to fine-tune the index setup.
- Search Slow Logs – These logs provide insights into how fast or slow queries and fetches are performing. These logs help fine tune the performance of any kind of search operation on OpenSearch or Elasticsearch.

For complete details on slow logs, please refer to [OpenSearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules-slowlog.html).

### How can I enable slow logs on Amazon OpenSearch Service?

### Can I only enable slow logs for specific indices?

### Does turning on slow logs in Amazon OpenSearch Service automatically enable logging for all indexes?

### If I turn off the slow logs in Amazon OpenSearch Service, does it mean that log files are no longer being generated?

### Can I change the granularity of logging?

### Will enabling slow logs or error logs cost me anything?

### What kinds of error logs are exposed by Amazon OpenSearch Service?

### How can I enable error logs on Amazon OpenSearch Service?

### Can I enable error logs for only specific indices?

### Are error logs available for all versions of Elasticsearch supported by Amazon OpenSearch Service?

### Is there any limit on the size of each log entry?

### What is the recommended best practice for using slow logs?

### How can I consume logs from CloudWatch Logs?

### Are slow logs available for all versions of OpenSearch and Elasticsearch supported by Amazon OpenSearch Service?

### Will the cluster have any down time when logging is turned on or off?

### Which Elasticsearch and OpenSearch versions does the in-place upgrade feature support?

### My domain runs a version of Elasticsearch older than 5.x. How do I upgrade those domains?

### Will my domain be offline while the in-place upgrade is in progress?

### How can I check if my domain’s Elasticsearch version can be upgraded?

### What are the tests done by Amazon OpenSearch Service to validate my domains upgrade eligibility?

### Can I update my domain configuration while the version upgrade is in progress?

### What happens to the automated system snapshot when the in-place version upgrade is in progress?

### How does Amazon OpenSearch Service safeguard against issues that can crop up during version upgrades?

### What happens if the system encounters issues while performing the in-place version upgrade?

### Can I view the history of upgrades on my domain?

### Can I pause or cancel the version upgrade after it has been triggered?

### Can I run in-place version upgrade on multiple domains in parallel?

### How long does the in-place version upgrade take?

### Can I just upgrade the domain quickly without retaining any of the data?

### Can I downgrade to previous version if I’m not comfortable with the new version?

## Multi-AZ with Standby

[Open all](#)

### What is Multi-AZ with Standby?

### What are the pre-requisites for creating or updating a cluster with Multi-AZ with Standby?

To enable Multi-AZ with Standby, managed clusters need to meet the following conditions:

- Run OpenSearch 1.3 or more recent version.
- Deploy in AWS Regions with 3-AZ. Currently, AWS North California region does not support 3-AZ and are therefore not suitable for Multi-AZ with Standby.
- Number of data nodes needs to be in multiples of three.
- Number of data copies (primary + replica) should be in multiples of three.
- Follow sizing guidelines for the leader (recommended size based on number of nodes,  number of shards, and number of mappings in your cluster).

### What are the failure scenarios covered and not covered by the feature?

With Multi-AZ with Standby, Amazon OpenSearch Service detects and automatically recovers from some of the infrastructure failures. Amazon OpenSearch Service automatically fails over from active to standby nodes in under a minute when any of the following events occur:

- Loss of one active AZ or all nodes in an active AZ
- Loss of connectivity to one active AZ
- Instance hardware failure in the active AZ
- Storage failure on a node in the active AZ

Currently Multi-AZ with Standby does not cover the following events:

- Loss of master Quorum, as recovery from this event can take several minutes
- Loss of multiple Availability Zones
- Loss of connectivity to a Region
- Loss of more than 50% nodes in more than one AZ
- Downtime caused due to insufficient compute or storage as a result of change in workload characteristics
- Downtime caused due to rouge queries
- Loss of one or more services that Amazon OpenSearch Service depends on like ARPS and ALB
- Downtime of OpenSearch Dashboard during version upgrades

### Do managed clusters that use Multi-AZ with Standby need to be sized differently? How do we size managed clusters for Multi-AZ with Standby?

### Does choosing Multi-AZ with Standby mean I no longer have to ensure my cluster is properly sized and resourced for my workload?

### Will I incur additional cost if I use Multi-AZ with Standby?

## Service Level Agreement

[Open all](#)

### What does the Amazon OpenSearch Service SLA guarantee?

### How do I know if I qualify for a SLA Service Credit?

## Cross-cluster search

[Open all](#)

### What is cross-cluster search?

### What are the minimum requirements for a domain to participate in cross-cluster search?

Domains participating in a cross-cluster search needs to meet the following criteria:

- Participating domains should be on OpenSearch or Elasticsearch version 6.8 and above
- Participating domains need to have encryption in transit enabled
- Participating domains need to have Fine Grained Access Control (FGAC) enabled
- Participating domains versions should adhere to the same rules as rolling version upgrade

### What are the instance types that support cross-cluster search?

Cross-cluster search is currently supported on the following instance types

- i2, i3 family
- r3, r4, r5 family
- m4, m5 family
- c4, c5, family
- Graviton family

### What are the instance types that do not support cross-cluster search?

### Can domains in two different AWS accounts participate in cross-cluster search?

### Can domains in two different AWS regions participate in cross-cluster search?

### How can I start using cross-cluster search?

## Cross-cluster replication

[Open all](#)

### What is cross-cluster replication?

### What are the minimum requirements for a domain to participate in cross-cluster replication?

Domains participating in a cross-cluster replications needs to meet the following criteria:

- Participating domains should be on Elasticsearch version 7.10
- Participating domains need to have encryption in transit enabled
- Participating domains need to have Fine Grained Access Control (FGAC) enabled
- Participating domains versions should adhere to the same rules as rolling version upgrade

### Can domains in two different AWS Regions participate in cross-cluster replication?

### Does cross-cluster replication support Ultrawarm and Cold Storage?

### What are the charges for cross-cluster replication?

## Name change

[Open all](#)

### Why did the name change to Amazon OpenSearch Service from Amazon Elasticsearch Service?

### Do I, as a customer, have to take any action as part of this name change?

### Do I have to move to the new SDK to upgrade to OpenSearch 1.0?

### Are there any changes to pricing with this name change?

## Upgrades

[Open all](#)

### I'm using the Elasticsearch engine in Amazon OpenSearch Service. Why should I upgrade to the OpenSearch 1.x engine? What are the benefits for me?

### Will I have downtime if I upgrade?

### What versions of OpenSearch and Elasticsearch does OpenSearch Service support?

### Is AWS deprecating older versions of Elasticsearch Service?

### Will the upgrade trigger a BG?  If not, what is the process for upgrading our nodes?

### I want to move to Amazon OpenSearch Service 1.x to take advantage of AWS Graviton2 instances, but I am locked in with my existing reserved instances (RIs).  How can you help?

### What should I plan for before initiating an upgrade to Amazon OpenSearch Service 1.x or greater?

### Can I continue to use my existing clients, data collection, and data ingestion tools with Amazon OpenSearch Service 1.x?

### I'm running Elasticsearch version 5.x or earlier. What’s my best upgrade path?

### Are there any partners that can help me with my upgrade?

### Will Amazon OpenSearch Service remain compatible with Elasticsearch in the future? What’s the plan for the future?

## Extended Support

[Open all](#)

### What is Standard Support and Extended Support?

### Do we need to opt-in for Extended Support?

### What are the charges for Extended Support and when do they start?

### How do I calculate Extended Support charges for my domains?

### How do I avoid Extended Support charges?

### What happens to versions whose Extended Support was originally set to end on November 7, 2026?

### Will my domains be isolated (no access) on November 7, 2026?

### Which versions get 3 years extended support and which version get 1 year?

### What version should I upgrade to?

### What happens after Extended Support ends for a version?

### Can I create new domains on versions that are in Extended Support?

### How do I upgrade my domain to a newer version?

### What fixes are included in Extended Support?

### What happens when a version reaches End of Standard Support?

### Can I still use my domains after Standard Support ends?

### What is a Normalized Instance Hour (NIH)?

### Do you support in-place upgrades to a new version without downtime?

### Can we extend support further beyond the Extended Support end date?

### What happens after the end of Extended Support period?

### Are there any restrictions when a domain is running a version on Extended Support? For example, can I provision new instances or create new domains?

## Zero-ETL Integrations

[Open all](#)

### Why should I use the zero-ETL integration of Amazon OpenSearch Service with Amazon DynamoDB?

### How does this zero-ETL integration replicate data from Amazon DynamoDB to Amazon OpenSearch Service?

### How does data transformation work from while moving data from Amazon DynamoDB to Amazon OpenSearch Service?

### What security permissions are required for using the zero-ETL integration for DynamoDB?

### How can I monitor the state of my integration between Amazon DynamoDB and Amazon OpenSearch Service?

### How does Amazon OpenSearch Service zero-ETL integration with Amazon S3 work?

### How can I get started using Amazon OpenSearch zero-ETL integration with Amazon S3?

### How does Amazon OpenSearch Service zero-ETL integration with Amazon S3 pricing work?

### What integration options does Amazon OpenSearch Service have with Amazon Security Lake?

### How do I get started with Amazon OpenSearch Service and Security Lake integration?

## Get started with Amazon OpenSearch Service

[](/opensearch-service/pricing/)

Pricing

## Learn more about Amazon OpenSearch Service pricing

Visit the pricing page

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/cloud-financial-management/approved/images/92b923af-8fb4-431b-800d-84ecb6e67398.144bada9556225e2f8dfa572959bbd04d013acfb.jpeg)

[](/opensearch-service/pricing/)

Console

## Ready to build?

Get started with Amazon OpenSearch Service

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/compute/approved/images/7c490010-740a-430f-9900-9f4488d7ace4.b43b615ae65f941a6ed2a0327fcfd3189638b790.jpeg)
