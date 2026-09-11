[Skip to main content](#aws-page-content-main)

Amazon S3

- [Overview](/s3/?nc=sn&loc=1)
- Features
- Storage classes
- [Pricing](/s3/pricing/?nc=sn&loc=4)
- [Security](/s3/security/?nc=sn&loc=5)
- More

# Amazon S3 FAQs

- [General S3 FAQs](#general-s3-faqs--huazgs)
  20
- [AWS Regions](#aws-regions--huazgs)
  7
- [Billing](#billing--huazgs)
  10
- [S3 Tables](#s3-tables--huazgs)
  19
- [S3 Vectors](#s3-vectors--huazgs)
  12
- [S3 Files](#s3-files--huazgs)
  15
- [Amazon S3 and IPv6](#amazon-s3-and-ipv6--huazgs)
  4
- [S3 Event Notifications](#s3-event-notifications--huazgs)
  5
- [Amazon S3 Transfer Acceleration](#amazon-s3-transfer-acceleration--huazgs)
  12
- [Security](#security--huazgs)
  14
- [S3 Access Grants](#s3-access-grants--huazgs)
  19
- [S3 Access Points](#s3-access-points--huazgs)
  13
- [Durability & Data Protection](#durability-data-protection--huazgs)
  24
- [Storage Classes](#storage-classes--huazgs)
  2
- [S3 Intelligent-Tiering](#s3-intelligent-tiering--huazgs)
  15
- [S3 Standard](#s3-standard--huazgs)
  2
- [S3 Express One Zone](#s3-express-one-zone--huazgs)
  16
- [S3 Standard-Infrequent Access (S3 Standard-IA)](#s3-standard-infrequent-access-s3-standard-ia--huazgs)
  8
- [S3 One Zone-Infrequent Access (S3 One Zone-IA)](#s3-one-zone-infrequent-access-s3-one-zone-ia--huazgs)
  6
- [Amazon S3 Glacier Instant Retrieval storage class](#amazon-s3-glacier-instant-retrieval-storage-class--huazgs)
  8
- [Amazon S3 Glacier Flexible Retrieval storage class](#amazon-s3-glacier-flexible-retrieval-storage-class--huazgs)
  10
- [Amazon S3 Glacier Deep Archive](#amazon-s3-glacier-deep-archive--huazgs)
  10
- [S3 on Outposts](#s3-on-outposts--huazgs)
  1
- [Storage Management](#storage-management--huazgs)
  30
- [Storage Analytics & Insights](#storage-analytics-insights--huazgs)
  13
- [Query in Place](#query-in-place--huazgs)
  4
- [Replication](#replication--huazgs)
  32
- [Data processing](#data-processing--huazgs)
  9
- [Data Access](#data-access--huazgs)
  21
- [Storage Browser for Amazon S3](#storage-browser-for-amazon-s3--huazgs)
  9

### General S3 FAQs

[Open all](#)

#### What is Amazon S3?

#### What can I do with Amazon S3?

#### How can I get started using Amazon S3?

#### What can I do with Amazon S3 that I cannot do with an on-premises solution?

#### What kind of data can I store in Amazon S3?

#### How much data can I store in Amazon S3?

#### What is an S3 general purpose bucket?

#### What is an S3 directory bucket?

#### What is an S3 table bucket?

#### What is an S3 vector bucket?

#### What is the difference between a general purpose bucket, a directory bucket, a table bucket, and a vector bucket?

#### What does Amazon do with my data in Amazon S3?

#### Does Amazon store its own data in Amazon S3?

#### How is Amazon S3 data organized?

#### How do I interface with Amazon S3?

#### How reliable is Amazon S3?

#### How will Amazon S3 perform if traffic from my application suddenly spikes?

#### Does Amazon S3 offer a Service Level Agreement (SLA)?

#### What is the consistency model for Amazon S3?

#### Why does strong read-after-write consistency help me?

### AWS Regions

[Open all](#)

#### Where is my data stored?

#### Why should I use Amazon S3 storage classes for AWS Dedicated Local Zones?

#### Why should I use Amazon S3 in AWS Local Zones?

#### What is an AWS Region?

#### What is an AWS Availability Zone (AZ)?

#### How do I decide which AWS Region to store my data in?

#### In which parts of the world is Amazon S3 available?

### Billing

[Open all](#)

#### How much does Amazon S3 cost?

#### How will I be charged and billed for my use of Amazon S3?

#### Why do prices vary depending on which Amazon S3 Region I choose?

#### How am I charged for using Versioning?

#### How am I charged for accessing Amazon S3 through the AWS Management Console?

#### How am I charged if my Amazon S3 buckets are accessed from another AWS account?

#### Do your prices include taxes?

#### Will I incur any data transfer out to the internet charges when I move my data out of AWS?

#### I want to move my data out of AWS. How do I request free data transfer out to the internet?

#### Why do I have to request AWS’ pre-approval for free data transfer out to the internet before moving my data out of AWS?

### S3 Tables

[Open all](#)

#### What are Amazon S3 Tables?

#### Why should I use S3 Tables?

#### How do table buckets work?

#### How do I get started with S3 Tables?

#### How do I create and delete tables in my table bucket?

#### How do I query my tables?

#### What performance can I expect from S3 Tables?

#### Can I manually overwrite or delete an object in my table bucket?

#### How do table bucket permissions work?

#### Do table buckets support concurrent writes to a single table?

#### What table and data formats do table buckets support?

#### What table maintenance operations are offered by table buckets?

#### Can I track and audit changes made to my tables?

#### Do table buckets support encryption at rest for my table data?

#### How much does it cost to use S3 Tables?

#### How does compaction work for S3 Tables?

#### How does snapshot management work for S3 Tables?

#### How does unreferenced file removal work for S3 Tables?

#### How does S3 Tables replication work?

### S3 Vectors

[Open all](#)

#### How do I get started with S3 Vectors?

#### How do I create a vector index in a vector bucket?

#### How do I add vector data to my vector index?

#### How do I retrieve vectors and its associated metadata?

#### How do I query my vector data?

#### What are the durability and availability characteristics of S3 Vectors?

#### What query performance can I expect with S3 Vectors?

#### What recall can I expect when querying S3 Vectors?

#### How can I see a list of vectors in a vector index?

#### How much does it cost to use S3 Vectors?

#### Can I use S3 Vectors as my vector store in Amazon Bedrock Knowledge Bases?

#### Can I use S3 Vectors with Amazon OpenSearch Service?

### S3 Files

[Open all](#)

#### What is Amazon S3 Files? 

#### Why should I use S3 Files?

#### How does S3 Files work?

#### What performance can I expect from S3 Files?

#### How do I get started using S3 Files with my compute resources?

#### What S3 storage classes are supported by S3 Files?

#### How do file permissions work in S3 Files?

#### How is my data encrypted in an S3 file system?

#### How does S3 Files handle the differences between how data is updated on a file system and how it’s updated on S3?

#### How does S3 Files import data and export changes between the file system and the associated S3 bucket?

#### What consistency do S3 file systems provide when mounted across multiple compute resources?

#### How does S3 Files manage data consistency and handle conflicts between S3 bucket and file system operations?

#### What is the durability of S3 Files data?

#### How can I monitor S3 Files?

#### When should I use S3 Files, Amazon EFS, or Amazon FSx?

### Amazon S3 and IPv6

[Open all](#)

#### What is IPv6?

#### What can I do with IPv6?

#### How do I get started with IPv6 on Amazon S3?

#### Should I expect a change in Amazon S3 performance when using IPv6?

### S3 Event Notifications

[Open all](#)

#### What are Amazon S3 Event Notifications?

#### What can I do with Amazon S3 Event Notifications?

#### What is included in Amazon S3 Event Notifications?

#### How do I set up Amazon S3 Event Notifications?

#### What does it cost to use Amazon S3 Event Notifications?

### Amazon S3 Transfer Acceleration

[Open all](#)

#### What is S3 Transfer Acceleration?

#### How do I get started with S3 Transfer Acceleration?

#### How fast is S3 Transfer Acceleration?

#### Who should use S3 Transfer Acceleration?

#### How secure is S3 Transfer Acceleration?

#### What if S3 Transfer Acceleration is not faster than a regular Amazon S3 transfer?

#### Can I use S3 Transfer Acceleration with multipart uploads?

#### How should I choose between S3 Transfer Acceleration and Amazon CloudFront’s PUT/POST?

#### Can S3 Transfer Acceleration complement AWS Direct Connect?

#### Can S3 Transfer Acceleration complement AWS Storage Gateway or a third-party gateway?

#### Can S3 Transfer Acceleration complement third-party integrated software?

#### Is S3 Transfer Acceleration HIPAA eligible?

### Security

[Open all](#)

#### How secure is my data in Amazon S3?

#### How can I control access to my data stored on Amazon S3?

#### Does Amazon S3 support data access auditing?

#### What options do I have for encrypting data stored on Amazon S3?

#### Can I comply with European data privacy regulations using Amazon S3?

#### Where is my object and object metadata stored in AWS Local Zones?

#### What is an Amazon VPC Endpoint for Amazon S3?

#### Can I allow a specific Amazon VPC Endpoint access to my Amazon S3 bucket?

#### What is AWS PrivateLink for Amazon S3?

#### How do I get started with interface VPC endpoints for S3?

#### When should I choose gateway VPC endpoints versus AWS PrivateLink-based interface VPC endpoints?

#### Can I use both Interface Endpoints and Gateway Endpoints for S3 in the same VPC?

#### What is Amazon Macie and how can I use it to secure my data?

#### What is IAM Access Analyzer for Amazon S3 and how does it work?

### S3 Access Grants

[Open all](#)

#### What are Amazon S3 Access Grants?

#### Why should I use S3 Access Grants?

#### How do I get started with S3 Access Grants?

#### What types of identity are supported for S3 Access Grants permission grants?

#### What are the different access levels that S3 Access Grants offers?

#### Can I customize my access levels?

#### Are there any quotas for S3 Access Grants?

#### Is there any performance impact for data access when I use S3 Access Grants?

#### What other AWS services are required to use S3 Access Grants?

#### Does S3 Access Grants require client-side modifications?

#### Since client-side modifications are necessary, what AWS services and third-party applications are integrated with S3 Access Grants out-of-box today?

#### Is S3 Access Grants a replacement for AWS IAM?

#### Does S3 Access Grants work with KMS?

#### How do I view and manage my S3 Access Grants permission grants?

#### Can you grant public access to data with S3 Access Grants?

#### How can I audit requests that were authorized via S3 Access Grants?

#### How is S3 Access Grants priced?

#### What is the relationship between S3 Access Grants and Lake Formation?

#### Is S3 Access Grants integrated with IAM Access Analyzer?

### S3 Access Points

[Open all](#)

#### What are Amazon S3 Access Points?

#### Why should I use an access point?

#### How Do S3 Access Points attached to FSx for NetApp ONTAP and FSx for OpenZFS file systems work?

#### How do S3 Access Points work?

#### Is there a quota on how many S3 Access Points I can create?

#### When using an access point, how are requests authorized?

#### How do I write access point policies?

#### How is restricting access to specific VPCs using network origin controls on access points different from restricting access to VPCs using the bucket policy?

#### Can I enforce a “No internet data access” policy for all access points in my organization?

#### Can I completely disable direct access to a bucket using the bucket hostname?

#### Can I replace or remove an access point from a bucket?

#### What is the cost of Amazon S3 Access Points?

#### How do I get started with S3 Access Points?

### Durability & Data Protection

[Open all](#)

#### How durable is Amazon S3?

#### How is Amazon S3 designed for 99.999999999% durability?

#### Is data stored in a One Zone storage class protected against damage or loss of the Availability Zone?

#### How does Amazon S3 go beyond 99.999999999% durability?

#### With such high durability, do I still need to back up my critical data?

#### What capabilities does Amazon S3 provide to protect my data against accidental or malicious deletes?

#### What checksum algorithms does Amazon S3 support for data integrity checking?

#### What is Versioning?

#### Why should I use Versioning?

#### How do I start using Versioning?

#### How does Versioning protect me from accidental deletion of my objects?

#### Can I set up a trash, recycle bin, or rollback window on my Amazon S3 objects to recover from deletes and overwrites?

#### How can I ensure maximum protection of my preserved versions?

#### How am I charged for using Versioning?

#### What is Amazon S3 Object Lock?

#### How does Amazon S3 Object Lock work?

#### What are the retention types in S3 Object Lock?

#### How does enabling S3 Object Lock for existing buckets impact the objects already existing in the buckets?

#### Can I disable S3 Object Lock after I have enabled it?

#### How do I get started with replicating objects from buckets with S3 Object Lock enabled?

#### Do I need additional permissions to replicate objects from buckets with S3 Object Lock enabled?

#### Are there any limitations for using S3 Replication while replicating from S3 Object Lock buckets?

#### How can I replicate existing objects from S3 Object Lock enabled buckets?

#### What is the retention status of the replicas of source objects protected with S3 Object Lock?

### Storage Classes

[Open all](#)

#### What are the Amazon S3 storage classes?

#### How do I decide which S3 storage class to use?

### S3 Intelligent-Tiering

[Open all](#)

#### What is S3 Intelligent-Tiering?

#### How does S3 Intelligent-Tiering work?

#### Why would I choose to use S3 Intelligent-Tiering?

#### What performance does S3 Intelligent-Tiering offer?

#### What performance do the optional Archive Access and Deep Archive Access tiers provide?

#### How durable and available is S3 Intelligent-Tiering?

#### How do I get my data into S3 Intelligent-Tiering?

#### How am I charged for S3 Intelligent-Tiering?

#### Is there a charge to retrieve data from S3 Intelligent-Tiering?

#### How do I activate S3 Intelligent-Tiering archive access tiers?

#### How do I access an object from the Archive Access or Deep Archive Access tiers in the S3 Intelligent-Tiering storage class?

#### How do I know in which S3 Intelligent-Tiering access tier my objects are stored in?

#### Can I lifecycle objects from S3 Intelligent-Tiering to another storage class?

#### Is there a minimum duration for S3 Intelligent-Tiering?

#### Is there a minimum billable object size for S3 Intelligent-Tiering?

### S3 Standard

[Open all](#)

#### What is S3 Standard?

#### Why would I choose to use S3 Standard?

### S3 Express One Zone

[Open all](#)

#### What is the Amazon S3 Express One Zone storage class?

#### Why would I choose to use the Amazon S3 Express One Zone storage class?

#### How do I get started with the Amazon S3 Express One Zone storage class?

#### How can I import data into the Amazon S3 Express One Zone storage class?

#### How many Availability Zones are Amazon S3 Express One Zone objects stored in?

#### What performance does the Amazon S3 Express One Zone storage class provide?

#### How does the Amazon S3 Express One Zone storage class achieve high performance?

#### How many transactions per second (TPS) does an S3 directory bucket support?

#### What happens to an S3 directory bucket with no request activity for an extended period of time?

#### How should I plan for my application’s throughput needs with the S3 Express One Zone storage class?

#### How is request authorization different with Amazon S3 Express One Zone compared to other S3 storage classes?

#### How reliable is the Amazon S3 Express One Zone storage class?

#### How is the Amazon S3 Express One Zones storage class designed to provide 99.95% availability?

#### How am I charged for Amazon S3 Express One Zone?

#### Are there any additional Data Transfer charges for using the Amazon S3 Express One Zone storage class within the same Region?

#### Are there any additional networking charges for using Gateway VPC endpoints with the Amazon S3 Express One Zone storage class?

### S3 Standard-Infrequent Access (S3 Standard-IA)

[Open all](#)

#### What is S3 Standard-Infrequent Access?

#### Why would I choose to use S3 Standard-IA?

#### What performance does S3 Standard-IA offer?

#### How do I get my data into S3 Standard-IA?

#### What charges will I incur if I change the storage class of an object from S3 Standard-IA to S3 Standard with a COPY request?

#### Is there a minimum storage duration charge for S3 Standard-IA?

#### Is there a minimum object storage charge for S3 Standard-IA?

#### Can I tier objects from S3 Standard-IA to S3 One Zone-IA or to the S3 Glacier Flexible Retrieval storage class?

### S3 One Zone-Infrequent Access (S3 One Zone-IA)

[Open all](#)

#### What is S3 One Zone-IA storage class?

#### What use cases are best suited for S3 One Zone-IA storage class?

#### What performance does S3 One Zone-IA storage offer?

#### How durable is the S3 One Zone-IA storage class?

#### Is an S3 One Zone-IA “Zone” the same thing as an AWS Availability Zone?

#### How much disaster recovery protection do I forgo by using S3 One Zone-IA?

### Amazon S3 Glacier Instant Retrieval storage class

[Open all](#)

#### What is the S3 Glacier Instant Retrieval storage class?

#### Why would I choose to use S3 Glacier Instant Retrieval?

#### How available and durable is S3 Glacier Instant Retrieval?

#### What performance does S3 Glacier Instant Retrieval offer?

#### How do I get my data into S3 Glacier Instant Retrieval?

#### Is there a minimum storage duration charge for Amazon S3 Glacier Instant Retrieval?

#### Is there a minimum object size charge for Amazon S3 Glacier Instant Retrieval?

#### How am I charged for S3 Glacier Instant Retrieval?

### Amazon S3 Glacier Flexible Retrieval storage class

[Open all](#)

#### What is the S3 Glacier Flexible Retrieval storage class?

#### Why would I choose to use S3 Glacier Flexible Retrieval storage class?

#### How do I get my into S3 Glacier Flexible Retrieval?

#### How can I retrieve my objects that are archived in S3 Glacier Flexible Retrieval and will I be notified when the object is restored?

#### How long will it take to restore my objects archived in Amazon S3 Glacier Flexible Retrieval?

#### How is my storage charge calculated for Amazon S3 objects archived to S3 Glacier Flexible Retrieval?

#### Are there minimum storage duration and minimum object storage charges for Amazon S3 Glacier Flexible Retrieval?

#### How much does it cost to retrieve data from Amazon S3 Glacier Flexible Retrieval?

#### Does Amazon S3 provide capabilities for archiving objects to lower cost storage classes?

#### What is the backend infrastructure supporting the S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive storage class?

### Amazon S3 Glacier Deep Archive

[Open all](#)

#### What is the Amazon S3 Glacier Deep Archive storage class?

#### What use cases are best suited for the S3 Glacier Deep Archive storage class?

#### How does the S3 Glacier Deep Archive storage class differ from the S3 Glacier Instant Retrieval, and S3 Glacier Flexible Retrieval storage classes?

#### How do I get started using S3 Glacier Deep Archive?

#### How do you recommend migrating data from my existing tape archives to S3 Glacier Deep Archive?

#### How can I retrieve my objects stored in S3 Glacier Deep Archive?

#### How am I charged for using S3 Glacier Deep Archive?

#### How will S3 Glacier Deep Archive usage show up on my AWS bill and in the AWS Cost Management tool?

#### Are there minimum storage duration and minimum object storage charges for S3 Glacier Deep Archive?

#### How does S3 Glacier Deep Archive integrate with other AWS Services?

### S3 on Outposts

[Open all](#)

#### What is Amazon S3 on Outposts?

### Storage Management

[Open all](#)

#### What are S3 object tags?

#### Why should I use object tags?

#### How can I update the object tags on my objects?

#### How much do object tags cost?

#### How do I get started with Storage Class Analysis?

#### Why should I use Amazon S3 Metadata?

#### How does S3 Metadata work?

#### How do I get started with S3 Metadata?

#### Where are my S3 Metadata tables stored?

#### What are the different types of S3 Metadata tables?

#### How soon are changes from my bucket reflected in S3 Metadata?

#### Can I combine S3 Metadata tables with my own metadata?

#### What are annotations?

#### How do annotations differ from object tags and user-defined metadata?

#### What is S3 Inventory?

#### How do I get started with S3 Inventory?

#### How am I charged for using S3 Inventory?

#### What is S3 Batch Operations?

#### How do I get started with S3 Batch Operations?

#### What AWS electronic storage services have been assessed based on financial services regulations?

#### What AWS documentation supports the SEC 17a-4(f)(2)(i) and CFTC 1.31(c) requirement for notifying my regulator?

#### How do I get started with S3 CloudWatch Metrics?

#### What alarms can I set on my storage metrics?

#### How am I charged for using  S3 CloudWatch Metrics?

#### What is S3 Lifecycle management?

#### How do I set up an S3 Lifecycle management policy?

#### How can I use Amazon S3 Lifecycle management to help lower my Amazon S3 storage costs?

#### How much does it cost to use S3 Lifecycle management?

#### Why would I use an S3 Lifecycle policy to expire incomplete multipart uploads?

#### Can I set up Amazon S3 Event Notifications to send notifications when S3 Lifecycle transitions or expires objects?

### Storage Analytics & Insights

[Open all](#)

#### What features are available to analyze my storage usage on Amazon S3?

#### What is Amazon S3 Storage Lens?

#### How does S3 Storage Lens work?

#### What are the key questions that can be answered using S3 Storage Lens metrics?

#### What metrics are available in S3 Storage Lens?

#### What are my dashboard configuration options?

#### How much historical data is available in S3 Storage Lens?

#### Can I view metrics for all prefixes with S3 Storage Lens?

#### How will I be charged for S3 Storage Lens?

#### What is the difference between S3 Storage Lens and S3 Inventory?

#### What is the difference between S3 Storage Lens and S3 Storage Class Analysis (SCA)?

#### What is Storage Class Analysis?

#### How often is the Storage Class Analysis updated?

### Query in Place

[Open all](#)

#### What is "Query in Place" functionality?

#### How do I query my data in Amazon S3?

#### What is Amazon Athena?

#### What is Amazon Redshift Spectrum?

### Replication

[Open all](#)

#### What is Amazon S3 Replication?

#### What is Amazon S3 Cross-Region Replication (CRR)?

#### What is Amazon S3 Same-Region Replication (SRR)?

#### What is Amazon S3 Batch Replication?

#### How do I enable Amazon S3 Replication (Cross-Region Replication and Same-Region Replication)?

#### How do I use S3 Batch Replication?

#### Can I use S3 Replication with S3 Lifecycle rules?

#### Can I use S3 Replication to replicate to more than one destination bucket?

#### Can I use replication across AWS accounts to protect against malicious or accidental deletion?

#### Will my object tags be replicated if I use Cross-Region Replication?

#### Can I replicate delete markers from one bucket to another?

#### Can I replicate data from other AWS Regions to China? Can a customer replicate from one China Region bucket outside of China Regions?

#### Can I replicate existing objects?

#### Can I re-try replication if object fail to replicate initially?

#### What encryption types does S3 Replication support?

#### What is the pricing for cross account data replication?

#### What is Amazon S3 Replication Time Control?

#### How do I enable Amazon S3 Replication Time Control?

#### Can I use S3 Replication Time Control to replicate data within and between China Regions?

#### What are Amazon S3 Replication metrics and events?

#### How do I enable Amazon S3 Replication metrics and events?

#### Can I use Amazon S3 Replication metrics and events to track S3 Batch Replication?

#### What is the Amazon S3 Replication Time Control Service Level Agreement (SLA)?

#### What is the pricing for S3 Replication and S3 Replication Time Control?

#### What are S3 Multi-Region Access Points?

#### Why should I use S3 Multi-Region Access Points?

#### How do S3 Multi-Region Access Points work?

#### What is the difference between S3 Cross-Region Replication (S3 CRR) and S3 Multi-Region Access Points?

#### How much do S3 Multi-Region Access Points cost?

#### Can I use Requester Pays with S3 Multi-Region Access Points?

#### How is S3 Transfer Acceleration different than S3 Multi-Region Access Points?

#### How do I get started with S3 Multi-Region Access Points and failover controls?

### Data processing

[Open all](#)

#### What is S3 Object Lambda?

#### Why should I use S3 Object Lambda?

#### How does S3 Object Lambda work?

#### How do I get started with S3 Object Lambda?

#### What kinds of operations can I perform with S3 Object Lambda?

#### Which S3 request types does S3 Object Lambda support?

#### What will happen when a S3 Object Lambda function fails?

#### Does S3 Object Lambda affect the S3 availability SLA or S3 durability?

#### How much does S3 Object Lambda cost?

### Data Access

[Open all](#)

#### What is Mountpoint for Amazon S3?

#### When should I use Mountpoint for Amazon S3?

#### What file system operations does Mountpoint for Amazon S3 support?

#### How do I get started with Mountpoint for Amazon S3?

#### How am I charged for Mountpoint for Amazon S3?

#### What performance can I expect from Mountpoint for Amazon S3?

#### How do I monitor Mountpoint for Amazon S3?

#### How can I control access to my data when using Mountpoint for Amazon S3?

#### Does Mountpoint for Amazon S3 support POSIX-style metadata, such as user ID, group ID, and permission fields?

#### Does Mountpoint for Amazon S3 support access over AWS PrivateLink?

#### Does Mountpoint for Amazon S3 support access over gateway VPC endpoints?

#### Can I access Amazon S3 from Amazon Elastic Kubernetes Service (Amazon EKS) pods?

#### What is Storage Browser for Amazon S3?

#### Why should I use Storage Browser for S3?

#### How do I get started with Storage Browser for S3?

#### How do I use AWS managed authorization with Storage Browser for S3?

#### How do I apply custom authorization with Storage Browser for S3?

#### How can I audit access to data through Storage Browser for S3?

#### What can my end users do with Storage Browser for S3?

#### Does Storage Browser for S3 support prefix or object renaming?

#### Can I customize the look and feel of Storage Browser for S3?

### Storage Browser for Amazon S3

[Open all](#)

#### What is Storage Browser for Amazon S3?

#### Why should I use Storage Browser for S3?

#### How do I get started with Storage Browser for S3?

#### How do I use AWS managed authorization with Storage Browser for S3?

#### How do I apply custom authorization with Storage Browser for S3?

#### How can I audit access to data through Storage Browser for S3?

#### What can my end users do with Storage Browser for S3?

#### Does Storage Browser for S3 support prefix or object renaming?

#### Can I customize the look and feel of Storage Browser for S3?

## Ready to get started?

[](/s3/features/)

## Check out the product features

Learn more

[](/free/)

## Sign up for an AWS account

Sign up

[](https://console.aws.amazon.com/)

## Start building in the console

Get started
