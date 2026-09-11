[Skip to main content](#aws-page-content-main)

Amazon EMR

- [Overview](/emr/?nc=sn&loc=1)
- Features
- EMR Workloads
- [Pricing](/emr/pricing/?nc=sn&loc=4)
- Resources
- More

# Amazon EMR FAQs

- [General](#general--ah3z7q)
  5
- [Developing & debugging](#developing-debugging--ah3z7q)
  8
- [EMR Studio](#emr-studio--ah3z7q)
  18
- [Managing data](#managing-data--ah3z7q)
  4
- [Billing](#billing--ah3z7q)
  5
- [Security and Data Access Control](#security-and-data-access-control--ah3z7q)
  4
- [Regions and Availability Zones](#regions-and-availability-zones--ah3z7q)
  6
- [Amazon EMR on Amazon EC2](#amazon-emr-on-amazon-ec2--ah3z7q)
  30
- [EMR Serverless](#emr-serverless--ah3z7q)
  32

## General

[Open all](#)

### What is Amazon EMR?

### Why should I use Amazon EMR?

### How can I deploy and manage Amazon EMR?

### How can I get started with Amazon EMR?

### How reliable is Amazon EMR?

## Developing & debugging

[Open all](#)

### Where can I find code samples?

### How do I develop a data processing application?

### What is the benefit of using the Command Line Tools or APIs vs. AWS Management Console?

### Can I add steps to a cluster that is already running?

### Can I be notified when my cluster is finished?

### Can I terminate my cluster when my steps are finished?

### Does Amazon EMR support third-party software packages?

### Q: What tools are available to me for debugging?

## EMR Studio

[Open all](#)

### Q: What is EMR Studio?

### What can I do with EMR Studio?

### How is EMR Studio different from EMR Notebooks?

There are five main differences.

1.  There is no need to access AWS Management Console for EMR Studio. EMR Studio is hosted outside of the AWS Management Console. This is useful if you do not provide data scientists or data engineers access to the AWS Management Console.

2.  You can use enterprise credentials from your identity provider using AWS IAM Identity Center (successor to AWS SSO) to log in to EMR Studio. 

3.  EMR Studio brings you a notebook first experience. EMR Studio kernels and applications run on EMR clusters, so you get the benefit of distributed data processing using the performance optimized [*Amazon EMR runtime for Apache Spark*](/about-aws/whats-new/2019/11/announcing-emr-runtime-for-apache-spark/). Running code on a cluster is as simple as attaching the notebook to an existing cluster or provisioning a new one.

4.  EMR Studio has a simplified user interface and abstracts hardware configurations. For example, you can setup cluster templates once and use the templates to start new clusters. 

5.  EMR Studio enables a simplified debugging experience so that you can access the native application user interfaces in one place using as few clicks as possible.

### How is EMR Studio different from SageMaker Studio?

### How do I get started with EMR Studio?

### Do I need to log in to the AWS Management Console to use EMR Studio?

### What identity providers are supported for the single sign-on experience in EMR Studio?

### What is a Workspace in EMR Studio?

### In EMR Studio, can I create a workspace or open a workspace without a cluster?

### Can I install custom libraries to use in my notebook code?

### Where are the notebooks saved?

### How do I use version control with my notebook? Can I use repositories like GitHub?

### In EMR Studio, what compute resources can I run notebooks on?

### Can I re-attach a workspace with a different compute resource in EMR Studio?

### Where do I find all my workspaces in EMR Studio?

### What are the IAM policies needed to use EMR Studio?

### Is there any limitations on EMR clusters I can attach my workspace to in EMR Studio?

### Q: What is the cost of using Amazon EMR Studio?

## Managing data

[Open all](#)

### How do I get my data into Amazon S3?

### How do I get logs for terminated clusters?

### Do you compress logs?

### Q: Can I load my data from the internet or somewhere other than Amazon S3?

## Billing

[Open all](#)

### Can Amazon EMR estimate how long it will take to process my input data?

### When does billing of my Amazon EMR cluster begin and end?

### Where can I track my Amazon EMR, Amazon EC2 and Amazon S3 usage?

### How do you calculate the Normalized Instance Hours displayed on the console ?

### Does Amazon EMR support Amazon EC2 On-Demand, Spot, and Reserved Instances?

## Security and Data Access Control

[Open all](#)

### How do I prevent other people from viewing my data during cluster execution?

### Q: How secure is my data?

### Can I get a history of all EMR API calls made on my account for security or compliance auditing?

### How do I control what EMR users can access in Amazon S3?

By default, Amazon EMR application processes use [*EC2 instance profiles*](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-iam-role-for-ec2.html) when they call other AWS services. For multi-tenant clusters, Amazon EMR offers three options to manage user access to Amazon S3 data.

1.  [*Integration with AWS Lake Formation*](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-lake-formation.html) allows you to define and manage fine-grained authorization policies in [*AWS Lake Formation*](/lake-formation/) to access databases, tables, and columns in AWS Glue Data Catalog. You can enforce the authorization policies on jobs submitted through [*Amazon EMR Notebooks*](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks.html) and [*Apache Zeppelin*](https://zeppelin.apache.org/) for interactive EMR Spark workloads, and send auditing events to [*AWS CloudTrail*](/cloudtrail/). By enabling this integration, you also enable federated Single Sign-On to EMR Notebooks or Apache Zeppelin from enterprise identity systems compatible with Security Assertion Markup Language (SAML) 2.0.

2.  [*Native integration with Apache Ranger*](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-apache-ranger.html) allows you to set up a new or an existing Apache Ranger server to define and manage fine-grained authorization policies for users to access databases, tables, and columns of Amazon S3 data via Hive Metastore. [*Apache Ranger*](https://ranger.apache.org/) is an open-source tool to enable, monitor, and manage comprehensive data security across the Hadoop platform.  
      
    This native integration allows you to define three types of authorization policies on the [*Apache Ranger Policy Admin server*](https://cwiki.apache.org/confluence/display/RANGER/Apache+Ranger+0.5.0+Installation#ApacheRanger0.5.0Installation-BuildRangerAdminfromsource). You can set table, column, and row level authorization for Hive, table and column level authorization for Spark, and prefix and object level authorization for Amazon S3. Amazon EMR automatically installs and configures the corresponding Apache Ranger plugins on the cluster. These Ranger plugins sync up with the Policy Admin server for authorization polices, enforce data access control, and send auditing events to [*Amazon CloudWatch Logs*](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html).

3.  [*Amazon EMR User Role Mapper*](https://github.com/awslabs/amazon-emr-user-role-mapper) allows you to leverage AWS IAM permissions to manage accesses to AWS resources. You can create mappings between users (or groups) and custom IAM roles. A user or group can only access the data permitted by the custom IAM role. This feature is currently available through [*AWS Labs*](https://github.com/awslabs/amazon-emr-user-role-mapper).

## Regions and Availability Zones

[Open all](#)

### How does Amazon EMR make use of Availability Zones?

### In what Regions is this Amazon EMR available?

### Q: Is Amazon EMR supported in AWS Local Zones?

### Q: Which Region should I select to run my clusters?

### Can I use EU data in a cluster running in the US region and vice versa?

### Q: What is different about the AWS GovCloud (US) region?

## Amazon EMR on Amazon EC2

[Open all](#)

### What is an Amazon EMR Cluster?

### What are node types in a cluster?

An Amazon EMR cluster has three types of nodes:

1.  Master node: A node that manages the cluster by running software components to coordinate the distribution of data and tasks among other nodes for processing. The master node tracks the status of tasks and monitors the health of the cluster. Every cluster has a master node, and it's possible to create a single-node cluster with only the master node.

2.  Core node: A node with software components that run tasks and store data in the Hadoop Distributed File System (HDFS) on your cluster. Multi-node clusters have at least one core node.

3.  Task node: A node with software components that only runs tasks and does not store data in HDFS. Task nodes are optional.

### Q: What is a cluster step?

### What are different cluster states?

### What are different step states?

### How can I launch a cluster?

### How can I terminate a cluster?

### Does Amazon EMR support multiple simultaneous cluster?

### How does Amazon EMR use Amazon EC2 and Amazon S3?

### Q: How is a computation done in Amazon EMR?

### Which Amazon EC2 instance types does Amazon EMR support?

### How long will it take to run my cluster?

### If the master node in a cluster goes down, can Amazon EMR recover it?

### If another node goes down in a cluster, can Amazon EMR recover from it?

### Can I SSH onto my cluster nodes?

### Q: What is Amazon EMR Bootstrap Actions?

### How can I use Bootstrap Actions?

### How do I configure Hadoop settings for my cluster?

### Can I modify the number of nodes in a running cluster?

### When would I want to use core nodes versus task nodes?

### Why would I want to modify the number of nodes in my running cluster?

### Can I automatically modify the number of nodes between cluster steps?

### Q: How can I allow other IAM users to access my cluster?

### What Amazon EMR resources can I tag?

### Does Amazon EMR tagging support resource-based permissions with IAM Users?

### Q: How many tags can I add to a resource?

### Do my Amazon EMR tags on a cluster show up on each Amazon EC2 instance in that cluster? If I remove a tag on my Amazon EMR cluster, will that tag automatically be removed from each associated EC2 instance?

### How do I get my tags to show up in my billing statement to segment costs?

### How do I tell which Amazon EC2 instances are part of an Amazon EMR cluster?

An Amazon EC2 instance associated with an Amazon EMR cluster will have two system tags:

- aws:elasticmapreduce:instance-group-role=CORE

  - Key = instance-group role ; Value = \[CORE or TASK\];

- aws:elasticmapreduce:job-flow-id=j-12345678

  - Key = job-flow-id ; Value = \[JobFlowID\]

### Q: Can I edit tags directly on the Amazon EC2 instances?

## EMR Serverless

[Open all](#)

### What is Amazon EMR Serverless?

### Who can use EMR Serverless?

### How do I get started with EMR Serverless?

### Q: What EMR releases are supported in EMR Serverless?

### What is the difference between BilledResourceUtilization and TotalResourceUtilization?

### Applications, workers, and jobs Q: What is an application and how can I create it?

### What is a worker?

### Can I specify the minimum and maximum number of workers that my jobs can use?

### When should I create multiple applications?

Consider creating multiple applications when doing any of the following:

1.  Using different open-source frameworks

2.  Using different versions of open-source frameworks for different use cases

3.  Performing A/B testing when upgrading from one version to another

4.  Maintaining separate logical environments for test and production scenarios

5.  Providing separate logical environments for different teams with independent cost controls and usage tracking

6.  Separating different lines-of-business applications

### Q: Can I change default properties of an EMR Serverless application after it is created?

### When should I create an application with a pre-initialized pool of workers?

### How can I include dependencies with jobs that I want to run on EMR Serverless?

### Do EMR Serverless Spark and Hive applications support user-defined functions (UDFs)?

### Can I cancel an EMR Serverless job in case it is running longer than expected?

### Can I add extra storage to the workers?

You can add extra storage to the workers in EMR Serverless by selecting the appropriate storage option during job submission. EMR Serverless offers two ephemeral storage options:

- Standard storage: This option comes with 20 GB of ephemeral storage per worker by default. You can customize this during job submission and increase the storage capacity from 20 GB up to 200 GB per worker.

- Shuffle-optimized Disk storage: This option provides up to 2 TB of ephemeral storage per worker, optimized for shuffle-intensive workloads.

### What are the worker options available in EMR Serverless?

### Can I configure EMR Serverless applications in multiple Availability Zones (AZ)?

### Can I connect to data stores in a different region?

### How do I monitor Amazon EMR Serverless applications and job runs?

### Can I access resources in my Amazon Virtual Private Cloud (VPC)?

### What kind of isolation can I get with an EMR Serverless application?

### Where can I view and manage my account’s vCPU quota?

### How will I know if I reach my vCPU-based account quota?

### How does Amazon EMR Serverless help save costs on big data deployments?

### Is the EMR Serverless cost comparable to Amazon EMR on EC2 Spot Instances?

### Are pre-initialized workers charged even after jobs have run to completion?

### How can I include dependencies with jobs that I want to run on EMR Serverless?

### How can I include dependencies with jobs that I want to run on EMR Serverless?

### What is EMR Serverless’ diskless provisioning capability? 

### How do I monitor and track EMR Serverless’ ability to eliminate local storage provisioning?

### How long is my intermediate data stored with EMR Serverless?

### How does EMR Serverless secure my intermediate data? 

## Next Steps

[](/emr/pricing/)

## Learn more about Amazon EMR pricing

Visit the pricing page

[](https://console.aws.amazon.com/console/home)

## Ready to build?

Get started with Amazon EMR

[](/contact-us/)

## Have more questions?

Contact us
