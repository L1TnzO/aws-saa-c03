[Skip to main content](#aws-page-content-main)

Amazon DocumentDB

- [Overview](/documentdb/)
- Features
- [Pricing](/documentdb/pricing/)
- Resources
- [FAQs](/documentdb/faqs/)
- More

# Amazon DocumentDB (with MongoDB compatibility) FAQs

[Get started with Amazon DocumentDB](/documentdb/resources/)

[Connect with an AWS specialist](/contact-us/sales-support/)

- [General](#general--10dnb4y)
  15
- [Serverless](#serverless--10dnb4y)
  7
- [Performance and scaling](#performance-and-scaling--10dnb4y)
  3
- [Pricing](#pricing--10dnb4y)
  6
- [Elastic Clusters](#elastic-clusters--10dnb4y)
  9
- [Backup and restore](#backup-and-restore--10dnb4y)
  12
- [Resiliency](#resiliency--10dnb4y)
  12
- [Security and compliance](#security-and-compliance--10dnb4y)
  6
- [Major version upgrade](#major-version-upgrade--10dnb4y)
  4
- [Generative AI](#generative-ai--10dnb4y)
  8
- [Zero-ETL integration](#zero-etl-integration--10dnb4y)
  7

## General

[Open all](#)

### What is Amazon DocumentDB (with MongoDB compatibility)?

### What use cases are well suited for a document database like Amazon DocumentDB?

### What does "MongoDB compatibility" mean?

### What MongoDB API versions is Amazon DocumentDB 8.0 compatible with?

### Is Amazon DocumentDB restricted by the MongoDB SSPL license?

### How can I migrate data from an existing MongoDB database to Amazon DocumentDB?

### Do I need to change client drivers to use Amazon DocumentDB?

### Does Amazon DocumentDB support ACID transactions?

### Is Amazon DocumentDB subject to MongoDB's end of life (EOL) schedule?

### How do I access my Amazon DocumentDB instance?

### Why are Amazon RDS permissions and resources required to use Amazon DocumentDB?

### What instance types does Amazon DocumentDB offer?

### How do I try Amazon DocumentDB?

### Does Amazon DocumentDB have an SLA?

### What is open source DocumentDB and how is it different from Amazon DocumentDB?

## Serverless

[Open all](#)

### What is Amazon DocumentDB Serverless?

### Which versions of Amazon DocumentDB support Serverless?

### Can I switch between Serverless and provisioned instances?

### Can I explicitly set the capacity of an Amazon DocumentDB Serverless cluster?

### Can I start using Amazon DocumentDB Serverless with provisioned instances in my existing Amazon DocumentDB instance?

### Which Amazon DocumentDB features does Amazon DocumentDB Serverless support?

### How am I billed for Amazon DocumentDB Serverless?

## Performance and scaling

[Open all](#)

### What type of performance can I expect from Amazon DocumentDB?

### How does Amazon DocumentDB scale?

### What are the minimum and maximum storage limits of an Amazon DocumentDB instance?

## Pricing

[Open all](#)

### How much does Amazon DocumentDB cost and in which AWS Regions is it available?

### Does Amazon DocumentDB have a free tier and can you get started for free?

### Is Amazon DocumentDB supported on Database Savings Plans?

### Why should I use Amazon DocumentDB I/O-Optimized?

### Can I switch back and forth between the I/O-Optimized and standard storage configurations?

### With Amazon DocumentDB I/O-Optimized, do I continue paying for the I/Os required for replicating data across regions with Global Clusters?

## Elastic Clusters

[Open all](#)

### How do I get started with Elastic Clusters?

### How does Elastic Clusters work?

### What types of sharding does Elastic Clusters support?

### How is Elastic Clusters different from MongoDB sharding?

### Do I need to make any changes to my application to use Elastic Clusters?

### Can I convert my existing Amazon DocumentDB instance to Elastic Clusters?

### How do I define a shard key?

### How does Elastic Clusters relate to other AWS services?

### Can I migrate my existing MongoDB sharded workloads to Elastic Clusters?

## Backup and restore

[Open all](#)

### How do I enable backups for my cluster?

### Can I take cluster snapshots and keep them around as long as I want?

### If my instance fails, what is my recovery path?

### What happens to my automated backups and cluster snapshots if I delete my cluster?

### What happens to my automated backups and cluster snapshots if I delete my account?

### Can I share my snapshots with another AWS account?

### Will I be billed for shared snapshots?

### Can I automatically share snapshots?

### Can I share my Amazon DocumentDB snapshots across different regions?

### Can I share an encrypted Amazon DocumentDB snapshot?

### Can I use Amazon DocumentDB snapshots outside of the service?

### What happens to my backups if I delete my cluster?

## Resiliency

[Open all](#)

### How does Amazon DocumentDB improve my cluster’s fault tolerance to disk failures?

### How does Amazon DocumentDB improve recovery time after a database crash?

### What kind of replicas does Amazon DocumentDB support?

### Can I have cross-region replicas with Amazon DocumentDB?

### Can I prioritize certain replicas as failover targets over others?

### Can I modify priority tiers for instances after they have been created?

### Can I prevent certain replicas from being promoted to the primary instance?

### How does Amazon DocumentDB assure high availability of my cluster?

### How can I improve upon the availability of a single Amazon DocumentDB instance?

### What happens during failover and how long does it take?

[Failover](https://docs.aws.amazon.com/documentdb/latest/developerguide/failover.html) is automatically handled by Amazon DocumentDB so that your applications can resume database operations as quickly as possible without manual administrative intervention.

- If you have an Amazon DocumentDB replica instance in the same or a different Availability Zone, when failing over, Amazon DocumentDB flips the canonical name record (CNAME) for your instance to point at the healthy replica, which is in turn promoted to become the new primary. Start-to-finish, failover typically completes within 30 seconds. 
- If you do not have an Amazon DocumentDB replica instance (i.e. a single instance cluster), Amazon DocumentDB will attempt to create a new instance in the same Availability Zone as the original instance. This replacement of the original instance is done on a best-effort basis and may not succeed, for example, if there is an issue that is broadly affecting the Availability Zone. 

Your application should retry database connections in the event of connection loss.

### Do I have a primary instance and an Amazon DocumentDB replica instance actively taking read traffic and a failover occurs, what happens?

### How far behind the primary will my replicas be?

## Security and compliance

[Open all](#)

### Can I use Amazon DocumentDB in Amazon Virtual Private Cloud (Amazon VPC)?

### Does Amazon DocumentDB support role-based access control (RBAC)?

### How do the existing MongoDB authentication modes work with Amazon DocumentDB?

### Does Amazon DocumentDB support encrypting my data-at-rest?

### Can I encrypt an existing unencrypted cluster?

### What compliance certifications does Amazon DocumentDB meet?

## Major version upgrade

[Open all](#)

### What is in-place major version upgrade?

### Why should I use in-place MVU?

### What is the downtime when upgrading with in-place MVU?

### What engine versions does in-place MVU support today?

## Generative AI

[Open all](#)

### What is vector search?

### Why should I use vector search for Amazon DocumentDB?

### Which versions of Amazon DocumentDB support vector search?

### How does implementation of semantic search differ from keyword search with Amazon DocumentDB?

### What is the cost associated with using vector search for Amazon DocumentDB?

### How can I use my data in Amazon DocumentDB to build machine learning models?

### Why should I use no-code machine learning with Amazon DocumentDB and Amazon SageMaker Canvas?

### What is the cost associated with using Amazon DocumentDB as a data source in Amazon SageMaker Canvas to build machine learning models?

## Zero-ETL integration

[Open all](#)

### Why should I use the zero-ETL integration of Amazon DocumentDB with Amazon OpenSearch Service?

### When I want to perform vector search for my generative AI use case, when should I use Amazon DocumentDB native vector search capabilities versus zero-ETL integration with Amazon OpenSearch Service?

### How does the zero-ETL integration replicate data from Amazon DocumentDB to Amazon OpenSearch Service?

### How does data transformation work while moving data from Amazon DocumentDB to Amazon OpenSearch Service?

### What options do I have if I don’t want to use the transformation logic provided by Amazon OpenSearch Ingestion?

### What security permissions are required for using the zero-ETL integration for Amazon OpenSearch?

### How can I monitor the state of my integration between Amazon DocumentDB and Amazon OpenSearch Service?

## Next steps

[](/documentdb/resources/)

Resources

## Learn with hands-on training

Get started with DocumentDB

[](https://docs.aws.amazon.com/documentdb)

Documentation

## Dive deep on Amazon DocumentDB

Read the documentation

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Free tier

## Sign up for a free account

Try for free

[](https://console.aws.amazon.com/docdb)

Console

## Start building in the console

Sign in
