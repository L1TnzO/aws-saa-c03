[Skip to main content](#aws-page-content-main)

Amazon CloudWatch

- [Overview](/cloudwatch/)
- Features
- [Pricing](/cloudwatch/pricing/)
- [Getting Started](/cloudwatch/getting-started/)
- [FAQs](/cloudwatch/faqs/)
- More

# Amazon CloudWatch FAQs

- [General](#general--1jqsdt6)
  15
- [Pricing](#pricing--1jqsdt6)
  7
- [Cross-account observability](#cross-account-observability--1jqsdt6)
  4
- [Application Performance Monitoring (APM)](#application-performance-monitoring-apm--1jqsdt6)
  6
- [X-Ray traces](#x-ray-traces--1jqsdt6)
  8
- [Container Monitoring](#container-monitoring--1jqsdt6)
  16
- [Database Insights](#database-insights--1jqsdt6)
  3
- [Internet Monitoring](#internet-monitoring--1jqsdt6)
  5
- [Lambda Monitoring](#lambda-monitoring--1jqsdt6)
  3
- [Network Monitoring](#network-monitoring--1jqsdt6)
  4
- [Digital Experience Monitoring](#digital-experience-monitoring--1jqsdt6)
  6
- [Metrics analytics](#metrics-analytics--1jqsdt6)
  2
- [AWS resource and custom metrics monitoring](#aws-resource-and-custom-metrics-monitoring--1jqsdt6)
  24
- [Log monitoring](#log-monitoring--1jqsdt6)
  13
- [Log management](#log-management--1jqsdt6)
  6
- [Log analytics](#log-analytics--1jqsdt6)
  16
- [Logs anomaly detection](#logs-anomaly-detection--1jqsdt6)
  4
- [Logs Live Tail](#logs-live-tail--1jqsdt6)
  8
- [Logs data protection](#logs-data-protection--1jqsdt6)
  3
- [Alarms](#alarms--1jqsdt6)
  5
- [Dashboards](#dashboards--1jqsdt6)
  5

## General

[Open all](#)

### What is Amazon CloudWatch?

### How can I send my data to Amazon CloudWatch?

### What can I use to access CloudWatch?

### Which operating systems does Amazon CloudWatch support?

### What access management policies can I implement for CloudWatch?

### What platforms does the CloudWatch Logs Agent support?

### Does the CloudWatch Logs Agent support IAM roles?

### What is Amazon CloudWatch Logs Insights?

### How can I get started with CloudWatch Logs Insights?

### What is Amazon CloudWatch Anomaly Detection?

### How can I get started with Amazon CloudWatch Anomaly Detection?

### What is Amazon CloudWatch Contributor Insights?

### How can I get started with CloudWatch Contributor Insights?

### What is Amazon CloudWatch Synthetics?

### How can I get started with CloudWatch Synthetics?

## Pricing

[Open all](#)

### How much does Amazon CloudWatch cost?

### Does the Amazon CloudWatch monitoring charge change depending on which type of Amazon EC2 instance I monitor?

### Do your prices include taxes?

### Why does my AWS monthly bill for CloudWatch appear different between July 2017 and previous months?

### How is CloudWatch Logs Insights priced?

### Does CloudWatch Logs Insights charge me for cancelled queries?

### Does CloudWatch Logs Insights charge me for failed queries?

## Cross-account observability

[Open all](#)

### What is cross-account observability in CloudWatch?

### How do I get started with cross-account observability?

### What CloudWatch monitoring features can I use across multiple AWS accounts?

### Can I still use CloudWatch cross-account, cross-Region features on my console?

## Application Performance Monitoring (APM)

[Open all](#)

### What is Amazon CloudWatch Application Signals with complete visibility into application transaction spans?

### How do I get started with Amazon CloudWatch Application Signals?

### How does Amazon CloudWatch Application Signals help me monitor business-critical applications?

### When do I use Amazon CloudWatch Application Signals?

### When do I use Amazon CloudWatch Application Insights?

### What is Amazon CloudWatch Application Signals?

## X-Ray traces

[Open all](#)

### What are X-Ray traces?

X-Ray traces help developers analyze and debug production, distributed applications, providing an end-to-end view of requests as they travel through the application.

X-Ray makes it easy for you to:

1.  Create a service map: X-Ray tracks requests to map services used, showing connections, dependency trees, and issues across Availability Zones or Regions.

2.  Identify errors and bugs: X-Ray analyzes response codes to automatically surface bugs, enabling easy debugging without reproduction.

3.  Build custom analysis and visualization apps: X-Ray's query APIs allow creating apps that leverage the data it records.

### What are core concepts in X-Ray? E.g., traces, segment

A set of data points sharing the same trace ID as a request travels through application services.

- **Segment**: Data encapsulating a single component of a distributed application, including system-defined and user-defined data.

- **Annotation**: System-defined or user-defined metadata associated with a segment.

- **Errors**: System annotations on segments for calls that result in errors, including messages, stack traces, and source details.

- **Sampling**: X-Ray collects data for a statistically significant number of requests, not every single one, for performance and cost-effectiveness.

- **X-Ray Daemon**: A service that collects traces and sends them to X-Ray, simplifying the process compared to direct API usage.

### How do I get started with X-Ray

### What types of applications can I use with X-Ray?

### Which AWS services can I use with X-Ray?

### What code changes do I need to make to my application to use X-Ray?

### Does X-Ray provide an API?

### Does AWS X-Ray log events to AWS CloudTrail?

## Container Monitoring

[Open all](#)

### What is CloudWatch Container Insights with OpenTelemetry?

### What is CloudWatch Container Insights?

### What is CloudWatch Container Insights with enhanced observability (Classic)?

### How can I monitor my container level health and performance?

### Does Container Insights provide visibility at the control plane level?

### What is the difference between Container Insights with and without enhanced observability (Classic)?

### Can I decide which EKS or ECS clusters I want to use Container Insights enhanced observability for?

### How can I get started with CloudWatch Container Insights?

### Which container services does enhanced observability (Classic) support?

### How is CloudWatch Container Insights priced?

### Are all Prometheus metrics types supported for the Public Beta?

### What is Prometheus and why do I want to collect Prometheus metrics in CloudWatch?

### How does metric storage retention work for Prometheus metrics?

### Is the storage retention configurable for Prometheus metrics high cardinality events ingested as CloudWatch Logs?

### Do you support PromQL as a query language?

### How does pricing work when ingesting Prometheus metrics from my container environments?

## Database Insights

[Open all](#)

### What is Amazon CloudWatch Database Insights?

### How do you get started with Amazon CloudWatch Database Insights?

### How is CloudWatch Database Insights different from RDS Performance Insights?

- RDS Performance Insights is a standard database performance tuning and monitoring feature which allows customers to assess the load on their databases in a pre-built dashboard, one instance at a time.
- CloudWatch Database Insights includes RDS Performance Insights capabilities. It is an advanced comprehensive database observability feature that is designed for DevOps engineers and database administrators (DBAs) to troubleshoot database and their supporting applications at scale. It provides fleet-level views, integration with application performance monitoring (APM) via [Application Signals](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html), correlation of database metrics with logs and events, and visualization of SQL query statistics.

## Internet Monitoring

[Open all](#)

### What is Amazon CloudWatch Internet Monitor?

### How can I get started with Internet Monitor?

### What are the components of Internet Monitor?

### How much does Internet Monitor cost?

### Which AWS Regions is Internet Monitor available in?

## Lambda Monitoring

[Open all](#)

### What is CloudWatch Lambda Insights?

### How can I get started with CloudWatch Lambda Insights?

### How is CloudWatch Lambda Insights priced?

## Network Monitoring

[Open all](#)

### What is Amazon CloudWatch Network Monitor?

### What 3 metrics does Network Monitor vend?

### How much does Network Monitor cost?

### How can I get started with Network Monitor?

## Digital Experience Monitoring

[Open all](#)

### What is Amazon CloudWatch Digital Experience Monitoring (DEM)?

### What is Amazon CloudWatch RUM?

### How can I get started with CloudWatch RUM?

### What is Amazon CloudWatch Synthetics?

### How can I get started with CloudWatch Synthetics?

### When should I use AWS AppConfig?

## Metrics analytics

[Open all](#)

### What is Amazon CloudWatch Metrics Insights?

### How can I get started with CloudWatch Metrics Insights?

## AWS resource and custom metrics monitoring

[Open all](#)

### What can I measure with Amazon CloudWatch Metrics?

### What is the retention period of all metrics?

### What is the minimum resolution for the data that Amazon CloudWatch receives and aggregates?

### Can I delete any metrics?

### Will I lose the metrics data if I disable monitoring for an Amazon EC2 instance?

### Can I query metrics from other data sources such as hybrid and multicloud workloads, Amazon RDS and S3, or my own custom data?

### Can I access the metrics data for a terminated Amazon EC2 instance or a deleted Elastic Load Balancer?

### How do I start querying metrics from multiple data sources?

### Why does the graphing of the same time window look different when I view the metrics in five-minute and one-minute periods?

### What is a Custom Metric?

### What resolution can I get from a Custom Metric?

### What metrics are available at high resolution?

### Are high-resolution custom metrics priced differently than regular custom metrics?

### When would I use a Custom Metric over having my program emit a log to CloudWatch Logs?

### What statistics can I view and graph in CloudWatch?

### What is CloudWatch Application Insights for .NET and SQL Server?

### What are the benefits of using CloudWatch Application Insights for .NET and SQL Server?

### How do I get started with monitoring using CloudWatch Application Insights for .NET and SQL Server?

### What is CloudWatch Metric Streams?

### Why should I use CloudWatch Metric Streams?

### How can I create and manage CloudWatch Metric Streams?

### Can I manage metrics to be included in my CloudWatch Metric Stream?

### What formats does CloudWatch Metric Streams support?

### Can I monitor the cost and volume of data delivered by CloudWatch Metric Streams?

## Log monitoring

[Open all](#)

### What log monitoring does Amazon CloudWatch provide?

### What are Amazon CloudWatch Vended Logs?

### Is CloudWatch Logs available in all regions?

### How much does CloudWatch Logs cost?

### What kinds of things can I do with my logs and Amazon CloudWatch?

### What types of data can I send to Amazon CloudWatch Logs from my EC2 instances running Microsoft SQL Server and Microsoft Windows Server?

### How frequently does the CloudWatch Logs Agent send data?

### What log formats does CloudWatch Logs support?

### What if I configure the CloudWatch Logs Agent to send non-text log data?

### How do I start monitoring my logs with CloudWatch Logs?

### What is the syntax of Metric Filter patterns?

### How do I know that a Metric Filter pattern I specified will match my log events?

### Can I use regular expressions with my log data?

## Log management

[Open all](#)

### How do I retrieve my log data?

### How do I search my logs?

### How long does CloudWatch Logs store my log data?

### What is Amazon CloudWatch Logs Standard?

### What is Amazon CloudWatch Logs Infrequent Access (Logs-IA)?

### How do I enable Amazon CloudWatch Logs Infrequent Access (Logs-IA)?

## Log analytics

[Open all](#)

### What options do I have to analyze my data?

### What permissions do I need to access Logs Insights?

### What logs can I query with CloudWatch Logs Insights?

### Which query language does CloudWatch Logs Insights support?

With CloudWatch Logs Insights, you can interactively search and analyze your log data in Amazon CloudWatch Logs. You can perform queries to help you more efficiently and effectively respond to operational issues.  
  
CloudWatch Logs Insights supports three query languages that you can use for your queries:

- A purpose-built Logs Insights query language (Logs Insights QL) with a few but powerful commands. You can write commands to retrieve one or more log fields, find log events that match one or more search criteria, aggregate your log data, and extract ephemeral fields from your text-based logs
- OpenSearch Service Piped Processing Language (PPL). OpenSearch PPL enables you to analyze your logs using a set of commands delimited by pipes (\|). With PPL, you can query, and analyze data using piped-together commands, making it easier to understand and compose complex queries and use commands to filter and aggregate data, and a rich set of math, string, date, conditional functions for analysis.
- OpenSearch Service Structured Query Language (SQL). With OpenSearch SQL queries you can analyze your logs in a declarative manner. With OpenSearch SQL, you can use commands such as SELECT, FROM, WHERE, GROUP BY, HAVING, and various other Spark SQL commands and functions. You can execute JOINs across log groups, correlate data using subqueries, and use a rich set of JSON, mathematical, string, conditional, and other Spark SQL functions to analyze your logs.

Logs Insights offers in-product help in the form of sample queries, command descriptions, and query auto-completion to help you get started. You can find additional details about the query language [here](https://docs.aws.amazon.com/console/cloudwatch/logs/querylanguages).

### What are the service limits for CloudWatch Logs Insights?

### What regions is CloudWatch Logs Insights available in?

### What type of queries does CloudWatch Logs Insights support?

### What query commands and functions can I use with CloudWatch Logs Insights?

### What data visualizations can I use with CloudWatch Logs Insights?

### Can I use regular expressions with CloudWatch Logs Insights?

### How do I escape special characters with CloudWatch Logs Insights queries?

### Why do certain log fields have a “@” sign and others don’t?

### Can I query historical logs with CloudWatch Logs Insights?

### Can I search for log events from a specific log stream?

### Today I use an AWS Partner ISV solution to analyze my logs from CloudWatch. What does CloudWatch Logs Insights change for me?

### How will I benefit from having access to query capabilities of CloudWatch Logs Insights through an AWS ISV Partner solution?

## Logs anomaly detection

[Open all](#)

### What is Amazon CloudWatch Logs Anomaly Detection?

### Why should I use Amazon CloudWatch Logs Anomaly Detection?

### What types of logs are supported?

### When should I use Amazon CloudWatch Anomaly Detection and when I should use Amazon DevOps Guru?

## Logs Live Tail

[Open all](#)

### What is Amazon CloudWatch Logs Live Tail?

### Why should I use Cloudwatch Logs Live Tail?

### How does Live tail integrate or interact with other AWS or third-party services?

### What permissions do I need to access Live Tail?

### What are the service limits for Live Tail?

### What AWS Regions is Live Tail available in?

### What type of filtering does CloudWatch Logs Live Tail support?

### Can I view historical logs with Live Tail?

## Logs data protection

[Open all](#)

### What is data protection in Amazon CloudWatch Logs?

### Why should I use data protection in CloudWatch Logs?

### What kind of sensitive data can I protect in CloudWatch Logs?

## Alarms

[Open all](#)

### What types of CloudWatch Alarms can be created?

### What actions can I take from a CloudWatch Alarm?

### What thresholds can I set to trigger a CloudWatch Alarm?

### My CloudWatch Alarm is constantly in the Alarm state, what did I do wrong?

### How long can I view my Alarm history?

## Dashboards

[Open all](#)

### What is CloudWatch Dashboards?

### How do I get started with CloudWatch Dashboards?

### What are the advantages of Automatic Dashboards?

### Do the dashboards support auto refresh?

### Can I share my dashboard?

## Get started with Amazon CloudWatch

[](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#/getStarted)

Getting started

## Get started with Amazon CloudWatch

Visit the Amazon CloudWatch console

[](/cloudwatch/pricing/)

Pricing

## Learn more about Amazon CloudWatch Pricing

Visit the pricing page

[](/contact-us/)

Contact us

## Have more questions?

Contact us
