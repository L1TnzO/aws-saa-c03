[Skip to main content](#aws-page-content-main)

Amazon Athena

- [Overview](/athena/)
- Features
- [Pricing](/athena/pricing/)
- [Getting started](/athena/getting-started/)
- [Resources](/athena/resources/)
- More

# Amazon Athena FAQs

- [General](#general--10r87kn)
  3
- [Amazon Athena for SQL](#amazon-athena-for-sql--10r87kn)
  7
- [Creating tables, data formats, and partitions](#creating-tables-data-formats-and-partitions--10r87kn)
  11
- [Querying, data formats, and multicloud](#querying-data-formats-and-multicloud--10r87kn)
  8
- [Federated query](#federated-query--10r87kn)
  6
- [Machine learning](#machine-learning--10r87kn)
  8
- [Security and availability](#security-and-availability--10r87kn)
  5
- [Pricing and billing](#pricing-and-billing--10r87kn)
  7
- [Amazon Athena for Apache Spark](#amazon-athena-for-apache-spark--10r87kn)
  5
- [When to use Athena versus other big data services](#when-to-use-athena-versus-other-big-data-services--10r87kn)
  7

## General

[Open all](#)

### What is Amazon Athena?

### What can I do with Athena?

### How do I get started with Athena?

## Amazon Athena for SQL

[Open all](#)

### How do you access Athena?

### What is the underlying technology behind Athena for SQL?

### How does Athena for SQL store table definitions and schema?

### Why should I upgrade to Data Catalog?

[AWS Glue](/glue/) is a fully managed extract, transform, and load (ETL) service. AWS Glue has three main components: 1) a crawler that automatically scans your data sources, identifies data formats, and infers schemas, 2) a fully managed ETL service that allows you to transform and move data to various destinations, and 3) a Data Catalog that stores metadata information about databases and tables either stored in S3 or an [ODBC](https://docs.aws.amazon.com/athena/latest/ug/connect-with-odbc.html)- or [JDBC](https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html)-compliant data store. To use the benefits of AWS Glue, you must upgrade from using Athena’s internal Data Catalog to the Glue Data Catalog.

Benefits of upgrading to the Data Catalog include the following:

- Unified metadata repository: AWS Glue is integrated across various AWS services. AWS Glue supports data stored in Amazon Aurora, Amazon Relational Database Service (RDS) for MySQL, Amazon RDS for PostgreSQL, Amazon Redshift, and S3, as well as MySQL and PostgreSQL databases in your Amazon Virtual Private Cloud (VPC) running on Amazon Elastic Compute Cloud (EC2). AWS Glue provides out-of-the-box integration with Athena, Amazon EMR, Amazon Redshift Spectrum, and applications compatible with Apache Hive metastore.
- Automatic schema and partition recognition: AWS Glue automatically crawls your data sources, identifies data formats, and suggests schemas and transformations. Crawlers can help automate table creation and automatic loading of partitions.

To learn more about the Data Catalog, review the [AWS Glue](/glue/) webpage.

### Is there a step-by-step process to upgrade to the Data Catalog

### In which Regions is Athena available?

### What are the service limits associated with Athena?

## Creating tables, data formats, and partitions

[Open all](#)

### How do I create tables and schemas for my data on S3?

### Which data formats does Athena support?

### Which kinds of data types does Athena support?

### Can I run any Hive Query on Athena?

### What is a SerDe?

SerDe stands for Serializer/Deserializer, which are libraries that tell Hive how to interpret data formats. Hive DDL statements require you to specify a SerDe so that the system knows how to interpret the data that you’re pointing to. Athena uses SerDes to interpret the data read from S3. The concept of SerDes in Athena is the same as the concept used in Hive. Amazon Athena supports the following SerDes:

- Apache Web Logs: "org.apache.hadoop.hive.serde2.RegexSerDe"
- CSV: "org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe"
- TSV: "org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe"
- Custom Delimiters: "org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe"
- Parquet: "org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe"
- Orc: "org.apache.hadoop.hive.ql.io.orc.OrcSerde"
- JSON: “org.apache.hive.hcatalog.data.JsonSerDe” or "org.openx.data.jsonserde.JsonSerDe"

### Can I add my own SerDe to Athena?

### If I created Parquet/ORC files using Spark/Hive, will I be able to query them in Athena?

### If I have data from Amazon Kinesis Data Firehose, how can I query it using Athena?

### Does Athena support data partitioning?

### How do I add new data to an existing table in Athena?

### If I already have large quantities of log data on S3, can I use Athena to query it?

## Querying, data formats, and multicloud

[Open all](#)

### Which kinds of queries does Athena support?

### Can I use QuickSight with Athena?

### Does Athena support other business intelligence (BI) tools and SQL clients?

### How do I access the functions supported by Athena?

### How do I improve the performance of my query?

### Does Athena support user-defined functions (UDFs)?

### What is the user experience when writing a UDF?

### Does Athena support multicloud analytics?

## Federated query

[Open all](#)

### What is a federated query?

### Why should I use federated queries in Athena?

### Which data sources are supported?

### Which use cases does federated query enable?

With Athena, you can use your existing SQL knowledge to extract insights from various data sources without learning a new language, developing scripts to extract (and duplicate) data, or managing infrastructure. Using Amazon Athena, you can perform the following tasks:

- Run on-demand analysis on data spread across multiple data stores using a single tool and SQL dialect.
- Visualize data in BI applications that push complex, multisource joins down to Athena’s distributed compute engine over [ODBC](https://docs.aws.amazon.com/athena/latest/ug/connect-with-odbc.html) and [JDBC](https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html) interfaces.
- Design self-service ETL pipelines and event-based data-processing workflows with Athena integration with AWS Step Functions.
- Unify diverse data sources to produce rich input features for ML model-training workflows.
- Develop user-facing data-as-a-product applications that surface insights across data mesh architectures.
- Support analytics use cases while your organization migrates on-premises sources to AWS.

### Can I use federated query for ETL?

### How do data source connectors work?

## Machine learning

[Open all](#)

### Machine Learning

### Which use cases does Athena support for embedded ML?

### Which ML models can be used with Athena?

### Can I train my ML model using Athena?

### Can I run inference on models deployed on other services such as Comprehend, Forecasting, or Models deployed on my own EC2 cluster?

### What are the performance implications of using Athena queries for SageMaker AI inference?

### Which features does Athena ML support?

### Which ML models can I use?

## Security and availability

[Open all](#)

### How do I control access to my data in Amazon SageMaker

### How do I control access to my data with AWS Lake Formation?

### Can Athena query encrypted data in S3?

### Is Athena highly available?

### Can I provide cross-account access to someone else’s S3 bucket?

## Pricing and billing

[Open all](#)

### How is Athena priced?

### Why do I get charged less when I use a columnar format?

### How do I lower my costs?

### Does Athena charge me for failed queries?

### Does Athena charge me for canceled queries?

### Are there any additional charges associated with Athena?

### Will I be charged for using Data Catalog?

## Amazon Athena for Apache Spark

[Open all](#)

### What is Amazon Athena for Apache Spark?

### Why should I use Athena for Apache Spark?

### How do I start working with Athena for Apache Spark?

### Which Spark version is Athena based on?

### How is Athena for Apache Spark priced?

## When to use Athena versus other big data services

[Open all](#)

### What is the difference between Athena, Amazon EMR, and Amazon Redshift?

### How does the Athena SQL support compare to Redshift, and how do I choose between the two services?

### When should I use Amazon EMR versus Athena?

### How does Athena’s Spark support compare to EMR Serverless for Spark? When would a customer use Spark in Athena instead of EMR Serverless?

### Can I use Athena to query data that I process using Amazon EMR?

### How does federated query in Athena SQL relate to other AWS services?

### How does ML in Athena relate to other AWS services?

## Next steps

[](/athena/pricing/)

Pricing

## Learn more about Amazon Athena pricing

Explore all pricing options offered by Amazon Athena

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Free tier

## Sign up for a free account

Instantly get access to the AWS Free Tier
