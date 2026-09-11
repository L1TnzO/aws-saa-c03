[Skip to main content](#aws-page-content-main)

Amazon Redshift

- [Overview](/redshift/)
- Features
- Pricing
- [Solutions](/redshift/solutions/)
- Resources

# Amazon Redshift FAQs

[Get started with Amazon Redshift](https://console.aws.amazon.com/redshift/home)

- [General](#general--fl8aft)
  18
- [Amazon SageMaker SQL analytics](#amazon-sagemaker-sql-analytics--fl8aft)
  7
- [Serverless](#serverless--fl8aft)
  12
- [Data ingestion and loading](#data-ingestion-and-loading--fl8aft)
  8
- [Data sharing](#data-sharing--fl8aft)
  3
- [Scalability and concurrency](#scalability-and-concurrency--fl8aft)
  4
- [Security](#security--fl8aft)
  5
- [Availability and durability](#availability-and-durability--fl8aft)
  5
- [Querying and analytics](#querying-and-analytics--fl8aft)
  11
- [Zero-ETL integrations](#zero-etl-integrations--fl8aft)
  8
- [Backup and restore](#backup-and-restore--fl8aft)
  4
- [Monitoring and maintenance](#monitoring-and-maintenance--fl8aft)
  2

## General

[Open all](#)

### What is Amazon Redshift?

### What are the top reasons customers choose Amazon Redshift?

### How does Amazon Redshift simplify data warehouse and analytics management?

### What are the deployment options for Amazon Redshift?

### How do I get started with Amazon Redshift?

### How does the performance of Amazon Redshift compare to that of other data warehouses?

### Can I get help to learn more about and onboard to Amazon Redshift?

### What is Amazon Redshift managed storage?

### How do I use Amazon Redshift’s managed storage?

### How can I run queries from Redshift for the data stored in the AWS Data Lake?

### When should I consider using RA3 instances?

Consider choosing RA3 node types in these cases:

- You need the flexibility to scale and pay for compute separate from storage.
- You query a fraction of your total data.
- Your data volume is growing rapidly or is expected to grow rapidly.
- You want the flexibility to size the cluster based only on your performance needs.

As the scale of data continues to grow, reaching petabytes, the amount of data you ingest into your Amazon Redshift data warehouse is also growing. You might be looking for ways to cost-effectively analyze all your data. With new Amazon Redshift RA3 instances with managed storage, you can choose the number of nodes based on your performance requirements, and pay only for the managed storage that you use. This gives you the flexibility to size your RA3 cluster based on the amount of data you process daily without increasing your storage costs. Built on the AWS Nitro System, RA3 instances with managed storage use high performance SSDs for your hot data and Amazon S3 for your cold data, providing ease of use, cost-effective storage, and fast query performance.

### What feature can I use for location-based analytics?

### How does Athena’s SQL support compare to Redshift, and how do I choose between the two services?

### Does size flexibility apply to Redshift Reserved node?

### What are Amazon Redshift RG instances?

### How do Amazon Redshift RG instances differ from previous generation instances?

### How does this service work with other AWS services?

### What happens to my existing Redshift Spectrum queries when I move to RG instances?

## Amazon SageMaker SQL analytics

[Open all](#)

### What are the benefits of using Amazon Redshift in SageMaker for SQL analytics?

### Do I have to migrate my data from Amazon S3 or existing Amazon Redshift data warehouse to use SageMaker for SQL analytics?

### How do I load data and get started using SageMaker for SQL analytics?

### What is the experience of SageMaker query books?

### How can I share my SQL queries or data models in SageMaker?

### What is the pricing model for SQL analytics in SageMaker?

### What is the SLA for SQL Analytics in Amazon SageMaker?

## Serverless

[Open all](#)

### What is Amazon Redshift Serverless?

### How do I get started with Amazon Redshift Serverless

### What are the benefits of using Amazon Redshift Serverless?

### How does Amazon Redshift Serverless work with other AWS services?

### What use cases can I handle with Amazon Redshift Serverless?

### What are Serverless Reservations?

### What term lengths are available for serverless reservations?

### How do I determine the right reservation size for my workload?

### What happens if my usage exceeds my reserved capacity?

### Can I modify or cancel my reservation after purchase?

### Do reservations work across multiple AWS accounts?

### How are reservations billed?

## Data ingestion and loading

[Open all](#)

### How do I load data into my Amazon Redshift data warehouse?

### How is Redshift auto-copy different than the copy command?

Redshift auto-copy provides the ability to automate copy statements by tracking Amazon S3 folders and ingesting new files without customer intervention. Without auto-copy, a copy statement immediately starts the file ingestion process for existing files. Auto-copy extends the existing copy command and provides the ability to

1.  Automate file ingestion process by monitoring specified Amazon S3 paths for new files
2.  Re-use copy configurations, reducing the need to create and run new copy statements for repetitive ingestion tasks
3.  Keep track of loaded files to avoid data duplication.

### How do I get started with Redshift auto-copy?

### What are the use cases for Amazon Redshift integration for Apache Spark?

The key use cases include:

- Customers using Amazon EMR and AWS Glue to run Apache Spark jobs that access and load data into Amazon Redshift as part of the data ingestion and transformation pipelines (batch and streaming)
- Customers using Amazon SageMaker to perform machine learning using Apache Spark and must access data stored in Amazon Redshift for feature engineering and transformation.
- Amazon Athena customers using Apache Spark to perform interactive analysis on data in Amazon Redshift.

### What are the benefits of Amazon Redshift integration for Apache Spark?

The benefits of this integration are

- Ease of use for getting started and running Apache Spark applications on data in Amazon Redshift without having to worry about manual steps involved to setup and maintain uncertified versions of the Spark;
- Convenience of using Apache Spark from various AWS services such as Amazon EMR, AWS Glue, Amazon Athena, and Amazon SageMaker with Amazon Redshift with minimal configuration;
- Improved performance while running Apache Spark applications on Amazon Redshift.

### When should I use Amazon Aurora Zero-ETL to Amazon Redshift instead of Federated Querying?

### How does Amazon Aurora Zero-ETL to Amazon Redshift relate to/work with other AWS services?

### How does Streaming Ingestion work?

## Data sharing

[Open all](#)

### What are the use cases for data sharing?

Key use cases include:

- A central ETL cluster sharing data with many BI/analytics clusters to provide read workload isolation and optional charge-ability.
- A data provider sharing data to external consumers.
- Sharing common datasets such as customers, products across different business groups and collaborating for broad analytics and data science.
- Decentralizing a data warehouse to simplify management.
- Sharing data between development, test, and production environments.
- Accessing Redshift data from other AWS analytic services.

### What are cross-database queries in Amazon Redshift?

### Who are the primary users of AWS Data Exchange?

## Scalability and concurrency

[Open all](#)

### How do I scale the size and performance of my Amazon Redshift data warehouse cluster?

### Will my data warehouse cluster remain available during scaling?

### What is Elastic Resize and how is it different from Concurrency Scaling?

### Can I access the Concurrency Scaling clusters directly?

## Security

[Open all](#)

### How does Amazon Redshift keep my data secure?

### Does Redshift support granular access controls?

### Does Amazon Redshift support data masking or data tokenization?

### Does Amazon Redshift support single sign-on?

### Does Amazon Redshift support multi-factor authentication (MFA)?

## Availability and durability

[Open all](#)

### What happens to my data warehouse cluster availability and data durability in the event of individual node failure?

### What happens to my data warehouse cluster availability and data durability if my data warehouse cluster's Availability Zone (AZ) has an outage?

### Why should I use a Redshift Multi-AZ deployment?

### What is RPO and RTO? What RPO and RTO are supported with a Multi-AZ deployment?

### How does Redshift Multi-AZ compare to the existing Redshift Relocation feature?

## Querying and analytics

[Open all](#)

### Are Amazon Redshift and Redshift Spectrum compatible with my preferred business intelligence software package and ETL tools?

### What data formats and compression formats does Amazon Redshift Spectrum support?

### What happens if a table in my local storage has the same name as an external table?

### I use a Hive Metastore to store metadata about my S3 data lake. Can I use Redshift Spectrum?

### How do I get a list of all external database tables created in my cluster?

### Does Redshift support the ability to use Machine Learning with SQL?

### Does Amazon Redshift provide an API to query data?

### What types of credentials can I use with Amazon Redshift Data API?

### Can I use Amazon Redshift Data API from AWS CLI?

### Is the Redshift Data API integrated with other AWS services?

### Do I have to pay separately for using the Amazon Redshift Data API?

## Zero-ETL integrations

[Open all](#)

### What is zero-ETL?

### What ETL challenges does zero-ETL integration solve?

The zero-ETL integrations solve many of the existing data movement challenges in traditional ETL processes, including:

- Increased system complexity due to intricate data-mapping rules, error handling, and security requirements
- Additional costs from growing data volumes, infrastructure upgrades, and maintenance
- Delayed time to analytics, AI, and ML due to custom code development and deployment, causing missed opportunities for real-time use cases.

### What are the benefits of zero-ETL?

- Increased agility: Zero-ETL simplifies data architecture and reduces data-engineering efforts. It allows for the inclusion of new data sources without the need to reprocess large amounts of data. This flexibility enhances agility, supporting data-driven decision-making and rapid innovation.
- Cost-efficiency: Zero-ETL uses data integration technologies that are cloud-native and scalable, allowing businesses to optimize costs based on actual usage and data-processing needs. Organizations reduce infrastructure costs, development efforts, and maintenance overheads.
- Fast time to insights: Traditional ETL processes often involve periodic batch updates, resulting in delayed data availability. Zero-ETL integrations, on the other hand, provides near real-time data access, to help provide fresher data for analytics, AI/ML, and reporting. You get more accurate and timely insights for use cases like real-time dashboards, optimized gaming experience, data-quality monitoring, and customer behavior analysis. Organizations can make data-driven predictions with more confidence, improve customer experiences, and promote data-driven insights across the business.

### What zero-ETL integrations are available from AWS today?

**At re:Invent 2024, we announced the following four zero-ETL integrations:**

- Amazon SageMaker Lakehouse and Amazon Redshift support for zero-ETL integrations from applications
- Amazon DynamoDB zero-ETL integration with Amazon SageMaker Lakehouse
- Amazon OpenSearch Service zero-ETL integration with Amazon CloudWatch Logs
- Amazon OpenSearch Service zero-ETL integration with Amazon Security Lake

**Since the launch of zero-ETL integrations, we have introduced seven integrations:**

- [Amazon Aurora MySQL zero-ETL integration with Amazon Redshift](/rds/aurora/zero-etl/)
- [Amazon Aurora PostgreSQL zero-ETL integration with Amazon Redshift](/about-aws/whats-new/2024/10/amazon-aurora-postgresql-zero-etl-integration-redshift-generally-available/)
- [Amazon Relational Database Service (Amazon RDS) for MySQL zero-ETL integration with Amazon Redshift](/about-aws/whats-new/2024/09/amazon-rds-mysql-zero-etl-integration-redshift-generally-available/)
- [Amazon DynamoDB zero-ETL integration with Amazon OpenSearch Service](/about-aws/whats-new/2023/11/amazon-dynamodb-zero-etl-integration-amazon-opensearch-service/)
- [Amazon DocumentDB zero-ETL integration with Amazon OpenSearch Service](/about-aws/whats-new/2024/05/amazon-documentdb-zero-etl-integration-opensearch-service/)
- [Amazon OpenSearch Service zero-ETL integration with Amazon Simple Storage Service (Amazon S3)](/about-aws/whats-new/2024/05/amazon-opensearch-zero-etl-integration-s3/)
- [Amazon DynamoDB zero-ETL integration with Amazon Redshift](/about-aws/whats-new/2024/10/amazon-dynamodb-zero-etl-integration-redshift/)

### What is the pricing model for zero-ETL?

### Where can I learn more about zero-ETL and this new feature?

### How are schema changes handled with zero-ETL integration?

Here are some key points on how schema changes are handled:

- DDL statements, such as CREATE TABLE, ALTER TABLE, DROP TABLE and so on are automatically replicated from Aurora to Amazon Redshift.
- The integration makes the necessary checks and adjustments in Amazon Redshift tables for replicated schema changes. For example, adding a column in Aurora will add the column in Amazon Redshift.
- The replication and schema changes automatically happen in real time with minimal lag between source and target databases.
- Schema consistency is maintained even as DML changes occur in parallel to DDL changes.

### How do I run transformations on my data using zero-ETL integration?

## Backup and restore

[Open all](#)

### How does Amazon Redshift backup my data? How do I restore my cluster from a backup?

### How do I manage the retention of my automated backups and snapshots?

### What happens to my backups if I delete my data warehouse cluster?

### How do I back up and restore my Amazon Redshift data using AWS Backup?

## Monitoring and maintenance

[Open all](#)

### How do I monitor the performance of my Amazon Redshift data warehouse cluster?

### What is a maintenance window? Will my data warehouse cluster be available during software maintenance?

## Get started with Amazon Redshift

[](/redshift/pricing/)

None

## Learn more about Amazon Redshift pricing

Visit the pricing page

[](https://console.aws.amazon.com/console/home)

None

## Ready to build?

Get started with Amazon Redshift

[](/contact-us/sales-support-redshift/)

None

## Have more questions?

Contact us
