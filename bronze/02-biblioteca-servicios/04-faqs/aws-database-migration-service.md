[Skip to main content](#aws-page-content-main)

AWS Database Migration Service

- [Overview](/dms/?nc=sn&loc=1)
- [Features](/dms/features/)
- [Pricing](/dms/pricing/?nc=sn&loc=3)
- [Resources](/dms/resources/)
- [FAQs](/dms/faqs/)
- More

# AWS Database Migration Service FAQs

[Get started with DMS](/dms/resources/)

[Connect with an AWS specialist](/contact-us/sales-support/)

- [General](#general--1m2novr)
  9
- [Supported sources and target engines](#supported-sources-and-target-engines--1m2novr)
  5
- [Schema conversion](#schema-conversion--1m2novr)
  3
- [Serverless](#serverless--1m2novr)
  4
- [Lifecycle policy](#lifecycle-policy--1m2novr)
  13

## General

[Open all](#)

### What is AWS Database Migration Service?

### How do I get started with AWS Database Migration Service?

### How much does AWS DMS cost?

### Is AWS DMS supported on Database Savings Plans?

### How much does AWS DMS Schema Conversion cost?

### What are the database migration steps when using AWS Database Migration Service?

### Is the database migration process using AWS DMS different for continuous data replication?

### Can I monitor the progress of a database migration task?

### How do I integrate AWS Database Migration Service with other applications?

## Supported sources and target engines

[Open all](#)

### What source databases and target databases does AWS Database Migration Service support?

AWS Database Migration Service (DMS) supports a range of homogeneous and heterogeneous data replications.

Either the source or the target database (or both) need to reside in RDS or on EC2. Replication between on-premises to on-premises databases is not supported.

- [Supported DMS sources](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.Sources.html)
- [Supported DMS targets](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.Targets.html)

### What sources and targets engines does AWS DMS Serverless support?

### What sources and targets does AWS DMS Schema Conversion support?

### What sources and targets does AWS Schema Conversion Tool support?

### What sources and targets does AWS DMS homogeneous data migrations support?

## Schema conversion

[Open all](#)

### Will AWS Database Migration Service help me convert my Oracle PL/SQL and SQL Server T-SQL code to Amazon RDS for MySQL and Amazon RDS for PostgreSQL stored procedures?

### Does AWS Database Migration Service migrate the database schema for me?

Yes, when you need to use a more customizable schema migration process (for example, when you are migrating your production database and need to move your stored procedures and secondary database objects), you can use the built-in Schema Conversion feature of AWS DMS for heterogeneous migrations. Alternative options include downloading AWS Schema Conversion Tool or using the schema export tools native to the source engine, if you are doing homogeneous migrations such as:

1.  SQL Server Management Studio's Import and Export Wizard.
2.  Oracle's SQL Developer Database Export tool or script the export using the dbms_metadata package.
3.  MySQL's Workbench Migration Wizard.

### How are AWS Database Migration Service (AWS DMS) and AWS Schema Conversion Tool (AWS SCT) related?

## Serverless

[Open all](#)

### What is AWS DMS Serverless?

### Can I use AWS DMS Serverless for continuous replication?

### Which DMS feature should I use for homogeneous database migrations?

### Is AWS DMS homogeneous data migration serverless?

## Lifecycle policy

[Open all](#)

### What is the AWS DMS support lifecycle policy?

### What is the purpose of the support lifecycle policy?

### What are the support timelines for AWS DMS releases?

### How are the timelines communicated?

### When did the AWS DMS release support lifecycle policy go into effect?

### What is a preferred DMS version?

### How do you define the latest preferred AWS DMS version?

### Is the support policy term the same for major and minor version of DMS?

### Will AWS DMS automatically update my instance to latest preferred version?

### How do I enable auto-upgrade?

### What happens to your task during the upgrade?

### I have instances on a version that is not covered in support. How does this affect my existing instances and jobs? What do you recommend as next steps?

### Who can I reach out to if I need more information?

## Next steps

[](/dms/resources/)

Resources

## Learn with hands-on training

Get started with DMS

[](https://docs.aws.amazon.com/dms/)

Documentation

## Dive deep on DMS

Read the documentation

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Free tier

## Sign up for a free account

Try for free

[](https://us-east-2.console.aws.amazon.com/dms/v2)

Console

## Start building in the console

Sign in
