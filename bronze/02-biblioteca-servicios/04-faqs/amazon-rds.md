[Skip to main content](#aws-page-content-main)

Amazon RDS

- [Overview](/rds/)
- Engines
- [Features](/rds/features/)
- [Pricing](/rds/pricing/)
- [Resources](/rds/resources/)
- More

# Amazon RDS FAQs

Easy to manage relational databases optimized for total cost of ownership

[Get started with RDS](/rds/resources/)

[Connect with an RDS specialist](/contact-us/sales-support-rds/)

- [General](#general--yfcwi2)
  6
- [Database instances](#database-instances--yfcwi2)
  8
- [Database engine versions](#database-engine-versions--yfcwi2)
  9
- [Billing](#billing--yfcwi2)
  9
- [Free tier](#free-tier--yfcwi2)
  5
- [Reserved Instances](#reserved-instances--yfcwi2)
  14
- [Hardware and scaling](#hardware-and-scaling--yfcwi2)
  10
- [Automatic backups and database snapshots](#automatic-backups-and-database-snapshots--yfcwi2)
  6
- [Security](#security--yfcwi2)
  19
- [Database configuration](#database-configuration--yfcwi2)
  3
- [Multi-AZ deployments](#multi-az-deployments--yfcwi2)
  17
- [Read replicas](#read-replicas--yfcwi2)
  21
- [Monitoring and metrics](#monitoring-and-metrics--yfcwi2)
  16
- [RDS Proxy](#rds-proxy--yfcwi2)
  8
- [Trusted language extensions for PostgreSQL](#trusted-language-extensions-for-postgresql--yfcwi2)
  12
- [Blue/Green deployments](#bluegreen-deployments--yfcwi2)
  13
- [Optimized writes](#optimized-writes--yfcwi2)
  7
- [Optimized reads](#optimized-reads--yfcwi2)
  5
- [Zero-ETL integrations](#zero-etl-integrations--yfcwi2)
  8

## General

[Open all](#)

### What is Amazon RDS?

### When would I use Amazon RDS vs. Amazon EC2 Relational Database AMIs?

### Are there hybrid or on-premises deployment options for Amazon RDS?

### Can I get help to learn more about and onboard to Amazon RDS?

### How do I set up a connection between an application or a SQL based client running on an Amazon EC2 compute instance and my Amazon RDS database instance/cluster?

### How do I set up a connection between a serverless Lambda application and my Amazon RDS or Amazon Aurora database instance and/or cluster?

## Database instances

[Open all](#)

### What is a database instance (DB instance)?

### How do I create a DB instance?

### How do I access my running DB instance?

### How many DB instances can I run with Amazon RDS?

### How many databases or schemas can I run within a DB instance?

- RDS for Amazon Aurora: No limit imposed by software
- RDS for MySQL: No limit imposed by software
- RDS for MariaDB: No limit imposed by software
- RDS for Oracle: 1 database per instance; no limit on the number of schemas per database imposed by software
- RDS for SQL Server: Up to 100 databases per instance
- RDS for PostgreSQL: No limit imposed by software
- RDS for Db2: Up to 50 database per instance

### How do I import data into an Amazon RDS DB instance?

The following are a number of ways to import data into Amazon RDS:

- MySQL: [mysqldump](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.SmallExisting.html) or [mysqlimport](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.AnySource.html) utilities
- Oracle: [Data Pump](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Procedural.Importing.DataPump.html), [import/export](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Procedural.Importing.ExportImport.html), or [SQL Loader](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Procedural.Importing.SQLLoader.html)
- SQL Server: [Import/Export Wizard](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Procedural.Importing.Snapshots.html), full backup files (.bak), or Bulk Copy Program (BCP)
- PostgreSQL: [pg_dump](https://docs.aws.amazon.com/dms/latest/sql-server-to-aurora-postgresql-migration-playbook/chap-sql-server-aurora-pg.management.exportimport.html)

For more information on data import and export, refer to the [Data Import Guide for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Procedural.Importing.html), the [Data Import Guide for Oracle](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Oracle.Procedural.Importing.html), the [Data Import Guide for SQL Server](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/SQLServer.Procedural.Importing.html), the [Data Import Guide for PostgreSQL](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL.Procedural.Importing.html), or the [Data Import Guide for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-native-db2-tools.html).

In addition, [AWS Database Migration Service](/dms/) can help you securely migrate databases to AWS.

### What is a maintenance window? Will my DB instance be available during maintenance events?

### What should I do if my queries seem to be running slowly?

## Database engine versions

[Open all](#)

### Which relational database engine versions does Amazon RDS support?

For the list of supported database engine versions, please refer to the documentation for each engine:

- [Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Aurora.DatabaseEngineUpdates.html)
- [Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html)
- [Amazon RDS for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html)
- [Amazon RDS for MariaDB](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html)
- [Amazon RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html)
- [Amazon RDS for Oracle](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Oracle.html)
- [Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html)

### How does Amazon RDS distinguish between “major” and “minor” DB engine versions?

Refer to the FAQs page for each Amazon RDS database engine for specifics on version numbering:

- [Amazon RDS for MySQL](/rds/mysql/faqs/)
- [Amazon RDS for MariaDB](/rds/mariadb/faqs/)
- [Amazon RDS for PostgreSQL](/rds/postgresql/faqs/)
- [Amazon RDS for Oracle](/rds/oracle/faqs/)
- [Amazon RDS for SQL Server](/rds/sqlserver/faqs/)
- [Amazon Aurora](https://docs.aws.amazon.com/rds/latest/auroraextendedcontent/aurora-faq.html)
- [Amazon RDS for Db2](/rds/db2/faqs/)

### Does Amazon RDS provide guidelines for support of new DB engine versions?

### How do I specify which supported DB engine version I would like my DB instance to run?

### How do I control if and when the engine version of my DB instance is upgraded to new supported versions?

### Can I test my DB instance with a new version before upgrading?

### Does Amazon RDS provide guidelines for deprecating database engine versions that are currently supported?

- We intend to support major version releases (e.g., MySQL 5.6, PostgreSQL 9.6) for at least 3 years after they are initially supported by Amazon RDS.
- We intend to support minor versions (e.g., MySQL 5.6.37, PostgreSQL 9.6.1) for at least 1 year after they are initially supported by Amazon RDS.

Periodically, we will deprecate major or minor engine versions. Major versions are made available at least until the community end of life for the corresponding community version or the version is no longer receiving software fixes or security updates. For minor versions, this is when a minor version has significant bugs or security issues that have been resolved in a later minor version.

While we strive to meet these guidelines, in some cases we may deprecate specific major or minor versions sooner, such as when there are security issues. In the unlikely event that such cases occur, Amazon RDS will automatically upgrade your database engine to address the issue. Specific circumstances may dictate different timelines depending on the issue being addressed.

### What happens when an Amazon RDS DB engine version is deprecated?

### Why can I not create a particular version?

## Billing

[Open all](#)

### Is Amazon RDS supported on Database Savings Plans?

### How will I be charged and billed for my use of Amazon RDS?

You pay only for what you use and there are no minimum or setup fees. You are billed based on:

- DB instance hours – Based on the class (e.g. db.t2.micro, db.m4.large) of the DB instance consumed. Partial DB instance hours consumed are billed in one-second increments with a 10 minute minimum charge following a billable status change, such as creating, starting, or modifying the DB instance class. For additional details, read our [what's new announcement](/about-aws/whats-new/2019/04/aws-rds-per-second-billing/).
- Storage (per GB per month) – [Storage capacity](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html) you have provisioned to your DB instance. If you scale your provisioned storage capacity within the month, your bill will be pro-rated.
- I/O requests per month – Total number of [storage I/O requests](/blogs/database/planning-i-o-in-amazon-aurora/) you have *(for Amazon RDS Magnetic Storage and Amazon Aurora only)*
- Provisioned IOPS per month – Provisioned IOPS rate, regardless of IOPS consumed *(for Amazon RDS Provisioned IOPS (SSD) Storage only)*
- Backup Storage – Backup storage is the storage associated with your automated database backups and any customer-initiated database snapshots. Increasing your backup retention period or taking additional database snapshots increases the backup storage consumed by your database.
- Data transfer – [Internet data transfer in and out of your DB instance](/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures/).

For Amazon RDS pricing information, please visit the [pricing section on the Amazon RDS product page](/rds/pricing/).

### When does billing of my Amazon RDS DB instances begin and end?

### What defines billable Amazon RDS instance hours?

### How will I be billed for a stopped DB instance?

### How will I be billed for backups storage?

### Why does my additional backup storage cost more than the allocated DB instance storage?

### How will I be billed for Multi-AZ DB instance deployments?

If you specify that your DB instance should be a Multi-AZ deployment, you will be billed according to the Multi-AZ pricing posted on the [Amazon RDS pricing page](/rds/pricing/). Multi-AZ billing is based on:

- Multi-AZ DB instance hours – Based on the class (e.g. db.t2.micro, db.m4.large) of the DB instance consumed. As with standard deployments in a single Availability Zone, Partial DB instance hours consumed are billed in one-second increments with a 10 minutes minimum charge following a billable status change, such as creating, starting, or modifying the DB instance class. If you convert your DB instance deployment between standard and Multi-AZ within a given hour, you will be charged both applicable rates for that hour.
- Provisioned storage (for Multi-AZ DB instance) – If you convert your deployment between standard and Multi-AZ within a given hour, you will be charged the higher of the applicable storage rates for that hour.
- I/O requests per month – Total number of storage I/O requests you have. Multi-AZ deployments consume a larger volume of I/O requests than standard DB instance deployments, depending on your database write/read ratio. Write I/O usage associated with database updates will double as Amazon RDS synchronously replicates your data to the standby DB instance. Read I/O usage will remain the same.
- Backup Storage – Your backup storage usage will not change whether your DB instance is a standard or Multi-AZ deployment. Backups will simply be taken from your standby to avoid I/O suspension on the DB instance primary.
- Data transfer – You are not charged for the data transfer incurred in replicating data between your primary and standby. Internet data transfer in and out of your DB instance is charged the same as with a standard deployment.

### Do your prices include taxes?

## Free tier

[Open all](#)

### What does the AWS Free Tier for Amazon RDS offer?

### For what time period will the AWS Free Tier for Amazon RDS be available to me?

### Can I run more than one DB instance under the AWS Free Usage Tier for Amazon RDS?

### Do I have access to 750 instance hours each of the MySQL, MariaDB, PostgreSQL, and SQL Server Micro DB instances under the AWS Free Tier?

### How am I billed when my instance-hour usage exceeds the Free Tier benefit?

## Reserved Instances

[Open all](#)

### What is a reserved instance (RI)?

### How are reserved instances different from on-demand DB instances?

### How do I purchase and create reserved instances?

### Do reserved instances include a capacity reservation?

### How many reserved instances can I purchase?

### What if I have an existing DB instance that I’d like to cover with a reserved instance?

### If I sign up for a reserved instance, when does the term begin? What happens to my DB instance when the term ends?

### How do I control which DB instances are billed at the reserved instance rate?

### If I scale my DB instance class up or down, what happens to my reservation?

### Can I move a reserved instance from one Region or Availability Zone to another?

### Are reserved instances available for Multi-AZ deployments?

### Are reserved instances available for read replicas?

### Can I cancel a reservation?

### How do the payment options impact my bill?

## Hardware and scaling

[Open all](#)

### How do I determine which initial DB instance class and storage capacity are appropriate for my needs?

### How do I scale the compute resources and/or storage capacity associated with my Amazon RDS Database Instance?

### What is the hardware configuration for Amazon RDS storage?

### Will my DB instance remain available during scaling?

### How can I scale my DB instance beyond the largest DB instance class and maximum storage capacity?

### What is Amazon RDS General Purpose (SSD) storage?

### What is Amazon RDS Provisioned IOPS (SSD) storage?

### What is Amazon RDS magnetic storage?

### How do I choose among the Amazon RDS storage types?

Choose the storage type most suited for your workload.

- [High-performance OLTP workloads](/blogs/database/best-storage-practices-for-running-production-workloads-on-hosted-databases-with-amazon-rds-or-amazon-ec2/): Amazon RDS Provisioned IOPS (SSD) Storage
- Database workloads with moderate I/O requirements: Amazon RDS General Purpose (SSD) Storage

### What are the minimum and maximum IOPS supported by Amazon RDS?

## Automatic backups and database snapshots

[Open all](#)

### What is the difference between automated backups and DB Snapshots?

### Do I need to enable backups for my DB Instance or is it done automatically?

### What is a backup window and why do I need it? Is my database available during the backup window?

### Where are my automated backups and DB snapshots stored and how do I manage their retention?

### Why do I have more automated DB snapshots than the number of days in the retention period for my DB instance?

### What happens to my backups and DB snapshots if I delete my DB instance?

## Security

[Open all](#)

### What is Amazon Virtual Private Cloud (VPC) and how does it work with Amazon RDS?

### How is using Amazon RDS inside a VPC different from using it on the EC2-Classic platform (non-VPC)?

### What is a DB Subnet Group and why do I need one?

### How do I create an Amazon RDS DB Instance in VPC?

### How do I control network access to my DB Instance(s)?

### How do I connect to an Amazon RDS DB Instance in VPC?

DB Instances deployed within a VPC can be accessed by EC2 Instances deployed in the same VPC. If these EC2 Instances are deployed in a public subnet with associated Elastic IPs, you can access the EC2 Instances via the internet. DB Instances deployed within a VPC can be accessed from the Internet or from EC2 Instances outside the VPC via [VPN](/vpn/) or [bastion hosts](/premiumsupport/knowledge-center/rds-connect-using-bastion-host-linux/) that you can launch in your public subnet or using Amazon RDS's Publicly Accessible option:

- To use a bastion host, you will need to set up a public subnet with an EC2 instance that acts as a [SSH Bastion](/blogs/security/securely-connect-to-linux-instances-running-in-a-private-amazon-vpc/). This public subnet must have an internet gateway and routing rules that allow traffic to be directed via the SSH host, which must then forward requests to the private IP address of your Amazon RDS DB instance.
- To use public connectivity, simply create your DB Instances with the Publicly Accessible option set to yes. With Publicly Accessible active, your DB Instances within a VPC will be fully accessible outside your VPC by default. This means you do not need to configure a VPN or bastion host to allow access to your instances.

You can also set up a VPN Gateway that extends your corporate network into your VPC and allows access to the Amazon RDS DB instance in that VPC. Refer to the [Amazon VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html) for more details.

We strongly recommend you use the DNS Name to connect to your DB Instance as the underlying IP address can change (e.g., during failover).

### Can I move my existing DB instances outside VPC into my VPC?

### Can I move my existing DB instances from inside VPC to outside VPC?

### What precautions should I take to ensure that my DB Instances in VPC are accessible by my application?

### Can I change the DB Subnet Group of my DB Instance?

### What is an Amazon RDS primary user account and how is it different from an AWS account?

### What privileges are granted to the primary user for my DB Instance?

### Is there anything different about user management with Amazon RDS?

### Can programs running on servers in my own data center access Amazon RDS databases?

### Can I encrypt connections between my application and my DB Instance using SSL/TLS?

### Can I encrypt data at rest on my Amazon RDS databases?

### How do I control the actions that my systems and users can take on specific Amazon RDS resources?

### I wish to perform security analysis or operational troubleshooting on my Amazon RDS deployment. Can I get a history of all Amazon RDS API calls made on my account?

### Can I use Amazon RDS with applications that require HIPAA compliance?

## Database configuration

[Open all](#)

### How do I choose the right configuration parameters for my DB Instance(s)?

### What are DB Parameter groups? How are they helpful?

### How can I monitor the configuration of my Amazon RDS resources?

## Multi-AZ deployments

[Open all](#)

### What does it mean to run a DB instance as a Multi-AZ deployment?

### What is an Availability Zone?

### What do “primary” and “standby” mean in the context of a Multi-AZ deployment?

### What are the benefits of a Multi-AZ deployment?

### Are there any performance implications of running my DB instance as a Multi-AZ deployment?

### When running my DB instance as a Multi-AZ deployment, can I use the standby for read or write operations?

### How do I set up a Multi-AZ DB instance deployment?

### What happens when I convert my Amazon RDS instance from Single-AZ to Multi-AZ?

For the [RDS for PostgreSQL](/rds/postgresql/)*,* [RDS for MySQL](/rds/mysql/), [RDS for MariaDB](/rds/mariadb/), [RDS for SQL Server](/rds/sqlserver/), [RDS for Oracle](/rds/oracle/)*,* and [RDS for Db2](/rds/db2/) database engines, when you elect to convert your Amazon RDS instance from Single-AZ to Multi-AZ, the following happens:

- A snapshot of your primary instance is taken.
- A new standby instance is created in a different Availability Zone, from the snapshot.
- Synchronous replication is configured between primary and standby instances.

 

As such, there should be no downtime incurred when an instance is converted from Single-AZ to Multi-AZ. However, you might see increased latency while the data on the standby is caught up to match to the primary.

### What events would cause Amazon RDS to initiate a failover to the standby replica?

Amazon RDS detects and automatically recovers from the most common failure scenarios for Multi-AZ deployments so that you can resume database operations as quickly as possible without administrative intervention. Amazon RDS automatically performs a failover in the event of any of the following:

- Loss of availability in primary Availability Zone
- Loss of network connectivity to primary
- Compute unit failure on primary
- Storage failure on primary

Note: When operations such as DB instance scaling or system upgrades, like OS patching, are initiated for Multi-AZ deployments, for enhanced availability they are applied first on the standby prior to automatic failover. As a result, your availability impact is limited only to the time required for automatic failover to complete. Note that Amazon RDS Multi-AZ deployments do not failover automatically in response to database operations, such as long running queries, deadlocks, or database corruption errors.

### Will I be alerted when automatic failover occurs?

### What happens during Multi-AZ failover and how long does it take?

### Can I initiate a “forced failover” for my Multi-AZ DB instance deployment?

### How do I control/configure Multi-AZ synchronous replication?

### Will my standby be in the same Region as my primary?

### Can I see which Availability Zone my primary is currently located in?

### After failover, my primary is now located in a different Availability Zone than my other AWS resources (e.g. EC2 instances). Should I be concerned about latency?

### How do DB Snapshots and automated backups work with my Multi-AZ deployment?

## Read replicas

[Open all](#)

### What does it mean to run a DB Instance as a read replica?

### When would I want to consider using an Amazon RDS read replica?

There are a variety of scenarios where deploying one or more read replicas for a given source DB instance may make sense. Common reasons for deploying a read replica include:

- Scaling beyond the compute or I/O capacity of a single DB instance for read-heavy database workloads. This excess read traffic can be directed to one or more read replicas.
- Serving read traffic while the source DB instance is unavailable. If your source DB Instance cannot take I/O requests (e.g. due to I/O suspension for backups or scheduled maintenance), you can direct read traffic to your read replica(s). For this use case, keep in mind that the data on the read replica may be “stale” since the source DB Instance is unavailable.
- Business reporting or data warehousing scenarios. You may want business reporting queries to run against a read replica rather than your primary, production DB Instance.
- You may use a read replica for disaster recovery of the source DB instance either in the same AWS Region or in another Region.

### Do I need to enable automatic backups on my DB instance before I can create read replicas?

### Which versions of database engines support Amazon RDS read replicas?

### How do I deploy a read replica for a given DB instance?

### How do I connect to my read replica(s)?

### How many read replicas can I create for a given source DB instance?

### Can I create a read replica in an AWS Region different from that of the source DB instance?

### Do Amazon RDS read replicas support synchronous replication?

### Can I use a read replica to enhance database write availability or protect the data on my source DB instance against failure scenarios?

### Can I create a read replica with a Multi-AZ DB instance deployment as its source?

### Can I configure my Amazon RDS read replicas themselves Multi-AZ?

### If my read replica(s) use a Multi-AZ DB instance deployment as a source, what happens if Multi-AZ failover occurs?

### Can I create a read replica of another read replica?

### Can my read replicas only accept database read operations?

### Can I promote my read replica into a “standalone” DB Instance?

### Will my read replica be kept up-to-date with its source DB instance?

Updates to a source DB instance will automatically be replicated to any associated read replicas. However, with supported engines' asynchronous replication technology, a read replica can fall behind its source DB instance for a variety of reasons. Typical reasons include:

- Write I/O volume to the source DB instance exceeds the rate at which changes can be applied to the read replica (this problem is particularly likely to arise if the compute capacity of a read replica is less than the source DB Instance)
- Complex or long-running transactions to the source DB Instance hold up replication to the read replica
- Network partitions or latency between the source DB instance and a read replica

Read Replicas are subject to the strengths and weaknesses of supported engines' native replication. If you are using Read Replicas, you should be aware of the potential for a lag between a Read Replica and its source DB Instance or “inconsistency”.

### How do I see the status of my active read replica(s)?

### I scaled the compute and/or storage capacity of my source DB instance. Should I scale the resources for associated read replica(s) as well?

### How do I delete a read replica? Will it be deleted automatically if its source DB Instance is deleted?

### How much do read replicas cost? When does billing begin and end?

## Monitoring and metrics

[Open all](#)

### What is Amazon CloudWatch Database Insights?

### What is Enhanced Monitoring for Amazon RDS?

### What are the key benefits of CloudWatch Database Insights?

The key benefits of CloudWatch Database Insights include:

1.  **Effortless telemetry collection**: Automatically gathers database metrics, logs, and traces, minimizing set up time

2.  **Curated insights**: Provides pre-built dashboards, alarms, and insights for monitoring and optimizing database performance with minimal configuration needed to get started

3.  **Unified CloudWatch view**: Combines telemetry from multiple databases into one view for simplified monitoring

4.  **AI/ML capabilities**: Uses AI/ML to detect anomalies, reducing manual troubleshooting efforts

5.  **Application context monitoring**: Allows users to correlate database performance with application performance

6.  **Fleet and instance-level views**: Offers both high-level fleet monitoring and detailed instance views for root cause analysis

7.  **Seamless AWS integration**: Integrates with [Amazon CloudWatch Application Signals](/cloudwatch/features/application-observability-apm/) and [AWS X-Ray](/cloudwatch/features/application-observability-apm/), enabling comprehensive observability experience

### Which metrics and processes can I monitor in Enhanced Monitoring?

### Which engines are supported by Enhanced Monitoring?

### Which instance types are supported by Enhanced Monitoring?

### What information can I view on the Amazon RDS dashboard?

### Will all the instances in my Amazon RDS account sample metrics at the same granularity?

### How far back can I see the historical metrics on the Amazon RDS console?

### How can I visualize the metrics generated by Amazon RDS Enhanced Monitoring in CloudWatch?

### When should I use CloudWatch instead of the Amazon RDS console dashboard?

### Can I set up alarms and notifications based on specific metrics?

### How do I integrate Enhanced Monitoring with my tool that I currently use?

### How can I delete historical data?

### What impact does Enhanced Monitoring have on my monthly bills?

### How is CloudWatch Database Insights different from Amazon RDS Performance Insights?

## RDS Proxy

[Open all](#)

### What is Amazon RDS Proxy?

### Why would I use Amazon RDS Proxy?

### What use cases does Amazon RDS Proxy address?

### When should I connect to the database directly versus using Amazon RDS Proxy?

### How will serverless applications benefit from Amazon RDS Proxy?

### Which database engines does Amazon RDS Proxy support?

### How can I enable Amazon RDS Proxy?

### Can I access Amazon RDS Proxy using APIs?

## Trusted language extensions for PostgreSQL

[Open all](#)

### Why should I use Trusted Language Extensions for PostgreSQL?

### What are traditional risks of running extensions in PostgreSQL and how does TLE for PostgreSQL mitigate those risks?

### How does TLE for PostgreSQL relate to/work with other AWS services?

### In what versions of PostgreSQL can I run TLE for PostgreSQL?

### In what Regions is Trusted Language Extensions for PostgreSQL available?

### How much does it cost to run TLE?

### How is TLE for PostgreSQL different from extensions available on Amazon Aurora and Amazon RDS today?

### What are some examples of extensions I could run with TLE for PostgreSQL?

### What programming languages can I use to develop TLE for PostgreSQL?

### How do I deploy a TLE for PostgreSQL extension?

### How do TLE for PostgreSQL extensions communicate with the PostgreSQL database?

### Where can I learn more about the TLE for PostgreSQL open-source project?

## Blue/Green deployments

[Open all](#)

### What engines support Amazon RDS Blue/Green Deployments?

### What versions does Amazon RDS Blue/Green Deployments support?

### What Regions does Amazon RDS Blue/Green Deployments support?

### When should I use Amazon RDS Blue/Green Deployments?

### What is the cost of using Amazon RDS Blue/Green Deployments?

### What kind of changes can I make with Amazon RDS Blue/Green Deployments?

### What is the “blue environment” in Amazon RDS Blue/Green Deployments? What is the “green environment"?

### How do switchovers work with Amazon RDS Blue/Green Deployments?

### Can I use Blue/Green Deployments when I have a blue environment as a subscriber/publisher for a self-managed logical replica?

### After Amazon RDS Blue/Green Deployments switches over, what happens to my old production environment?

### What do Amazon RDS Blue/Green Deployments switchover guardrails check for?

### Do Amazon RDS Blue/Green Deployments support Global Databases, Amazon RDS Proxy, cross-Region read replicas, or cascaded read replicas?

### Can I use Amazon RDS Blue/Green Deployments to rollback changes?

## Optimized writes

[Open all](#)

### How does Amazon RDS Optimized Writes write data files differently than MySQL?

### Which RDS for MySQL database versions support Amazon RDS Optimized Writes?

### Which database instance types support Amazon RDS Optimized Writes? In what Regions are they available?

### When should I use Amazon RDS Optimized Writes?

### Is Amazon RDS Optimized Writes supported on Amazon Aurora MySQL-Compatible Edition?

### Can customers convert their existing Amazon RDS databases to use Amazon RDS Optimized Writes?

### How much are Amazon RDS Optimized Writes?

## Optimized reads

[Open all](#)

### How do Amazon RDS Optimized Reads speed up query performance?

### Which RDS for MySQL and RDS for MariaDB database versions support Amazon RDS Optimized Reads?

### Which database instance types support Amazon RDS Optimized Reads? In what regions are they available?

### When should I use Amazon RDS Optimized Reads?

### Can customers convert their existing Amazon RDS databases to use Amazon RDS Optimized Reads?

## Zero-ETL integrations

[Open all](#)

### What benefits do zero-ETL integrations provide?

### When should I use Amazon RDS zero-ETL integration with Amazon Redshift?

### What is the cost of using RDS for MySQL zero-ETL integration with Amazon Redshift?

### Can I use an Amazon RDS Read Replica to create an Amazon RDS zero-ETL integration?

### Does zero-ETL integration support AWS CloudFormation?

### How does zero-ETL integration handle transactions? Are they atomically committed when replicated?

Amazon RDS zero-ETL integrations atomically replicate transactions to ensure data consistency between the source Amazon RDS database and the target Amazon Redshift cluster or lakehouse in Amazon SageMaker.

Here are some key points about the atomicity of transactions with this integration:

- Only committed transactions in Amazon RDS are replicated to Amazon Redshift or the lakehouse in SageMaker, uncommitted or rolled-back transactions are not applied.
- The integration uses a two-phase commit process to atomically apply each transaction to Amazon Redshift or the lakehouse in SageMaker. Either all data changes in the transaction are applied or if an error occurs none are applied.
- Transaction consistency is maintained between the source and target. After replication, the data for a given transaction will be consistent in Amazon RDS and your target.
- Schema changes through DDL or DML are also atomically applied to maintain integrity.
- The atomic application of transactions ensures no partial transactions or inconsistent data states can occur between the databases.

### In what order are the changes I make on Amazon RDS replicated in my zero-ETL target?

### How are schema changes handled with Amazon RDS zero-ETL integrations with Amazon Redshift?

Here are some key points on how schema changes are handled:

- DDL statements like CREATE TABLE, ALTER TABLE, DROP TABLE, and so on are automatically replicated from Amazon RDS to Amazon Redshift.
- The integration makes the necessary checks and adjustments in Amazon Redshift tables for replicated schema changes. For example, adding a column in RDS for MySQL will add the column in Amazon Redshift.
- The replication and schema sync automatically happen with minimal lag between source and target databases.

Schema consistency is maintained even as DML changes occur in parallel to DDL changes.

## Next steps

[](/rds/resources/)

Resources

## Learn with hands-on training

Get started with RDS

[](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome)

Documentation

## Dive deep on RDS

Read the documentation

[](https://signin.aws.amazon.com/signup?request_type=register)

Free tier

## Sign up for a free account

Try for free

[](https://console.aws.amazon.com/rds)

Console

## Start building in the console

Sign in
