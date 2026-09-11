[Skip to main content](#aws-page-content-main)

AWS DataSync

- [Overview](/datasync/)
- [Features](/datasync/features/)
- [Pricing](/datasync/pricing/)
- [Getting Started](/datasync/getting-started/)
- [Resources](/datasync/resources/)
- More

# AWS DataSync FAQs

- [General](#general--1le7o3i)
  3
- [Data movement](#data-movement--1le7o3i)
  8
- [Usage](#usage--1le7o3i)
  15
- [Moving to and from AWS Storage](#moving-to-and-from-aws-storage--1le7o3i)
  37
- [Performance](#performance--1le7o3i)
  5
- [Security and compliance](#security-and-compliance--1le7o3i)
  9
- [When to choose AWS DataSync](#when-to-choose-aws-datasync--1le7o3i)
  5

## General

[Open all](#)

### What is AWS DataSync?

### Why should I use AWS DataSync?

### What problem does AWS DataSync solve for me?

## Data movement

[Open all](#)

### Where can I move data to and from?

### How do I use AWS DataSync to migrate data to AWS?

### How do I use AWS DataSync to archive cold data?

### How do I use AWS DataSync to replicate data to AWS for business continuity?

### How do I use AWS DataSync for recurring transfers between on-premises and AWS for ongoing workflows?

### Can I use AWS DataSync to copy data from other clouds to AWS?

### Can I use AWS DataSync to build my data lake?

### How do I use AWS DataSync to transfer data between AWS Storage services?

## Usage

[Open all](#)

### How do I get started moving my data with AWS DataSync?

### How do I deploy an AWS DataSync agent?

### What are the resource requirements for the AWS DataSync agent?

### How do I start an AWS DataSync data transfer task?

### What is the difference between Basic mode and Enhanced mode tasks?

### How does AWS DataSync ensure my data is copied correctly?

### How can I audit and monitor the status of data being transferred by AWS DataSync?

### Can I filter the files and folders that AWS DataSync transfers?

### How is using a manifest file different from using include filters?

### Can I configure AWS DataSync to transfer on a schedule?

### Does AWS DataSync preserve the directory structure when copying files?

### What happens if an AWS DataSync task is interrupted?

### Can I use AWS DataSync with AWS Direct Connect?

### Does AWS DataSync support VPC endpoints using AWS PrivateLink?

### How do I configure AWS DataSync to use VPC endpoints?

## Moving to and from AWS Storage

[Open all](#)

### Which AWS Storage services are supported by AWS DataSync?

### Can I copy my data into Amazon S3 Glacier Instant Retrieval, Amazon S3 Glacier Flexible Retrieval (formerly S3 Glacier), Amazon S3 Glacier Deep Archive, or other S3 storage classes?

### Can I copy data out of S3 Standard-IA and S3 One Zone-IA storage classes?

### Can I copy data out of Amazon S3 Glacier Instant Retrieval. Amazon S3 Glacier Flexible Retrieval (formerly S3 Glacier) and Amazon S3 Glacier Deep Archive?

### How does AWS DataSync access my Amazon S3 bucket?

### How does AWS DataSync convert files and folders to or from objects in Amazon S3?

### What object metadata is preserved when transferring objects between self-managed object storage or Azure Blob Storage and Amazon S3?

### What object metadata is preserved when transferring objects between Amazon S3 buckets?

### Which Amazon S3 request and storage costs apply when using S3 storage classes with AWS DataSync?

### Can I copy object data to and from Amazon S3 buckets on AWS Outposts?

### How does AWS DataSync access my Amazon EFS file system?

### Can I use AWS DataSync with all Amazon EFS storage classes?

### How do I use AWS DataSync with Amazon EFS file system resource policies?

### Can I use AWS DataSync to replicate my Amazon EFS file system to a different AWS Region?

### What metadata is preserved when copying data between an NFS share and Amazon EFS, or between two Amazon EFS file systems?

### What metadata is preserved when copying data between HDFS and Amazon EFS?

### How does AWS DataSync access my Amazon FSx for Windows File Server file system?

### What Windows metadata is transferred when copying between an SMB share to Amazon FSx for Windows File Server file system, or between two Amazon FSx file systems?

### Can I use AWS DataSync to replicate my Amazon FSx for Windows File Server file system to a different AWS Region?

### How does AWS DataSync access my Amazon FSx for Lustre file system?

### What metadata is preserved when either copying data between an NFS share or Amazon EFS file system and Amazon FSx for Lustre, or between two Amazon FSx for Lustre file systems?

### Can I use AWS DataSync to migrate data from one FSx for Lustre file system to another?

### Can I use AWS DataSync to replicate my Amazon FSx for Lustre file system to a different AWS Region?

### Will DataSync copy the striping or layout settings when copying from one Amazon FSx for Lustre file system to another?

### How does AWS DataSync access my Amazon FSx for OpenZFS file system?

### What metadata is preserved when either copying data between an NFS share or Amazon EFS file system and Amazon FSx for OpenZFS, or between two Amazon FSx for OpenZFS file systems?

### Can I use AWS DataSync to migrate data from one FSx for OpenZFS file system to another?

### Can I use AWS DataSync to replicate my Amazon FSx for OpenZFS file system to a different AWS Region?

### How does AWS DataSync access my Amazon FSx for Netapp ONTAP file system?

### Which protocol versions can AWS DataSync use with Amazon FSx for NetApp ONTAP?

### Does AWS DataSync preserve file system metadata when copying data to or from my Amazon FSx for NetApp ONTAP file system?

### Which protocol should I use when migrating my data to Amazon FSx for NetApp ONTAP?

### Can I use AWS DataSync to access the same Amazon FSx for NetApp ONTAP file system using different protocols?

### Can I use AWS DataSync to transfer data to or from Amazon FSx for NetApp ONTAP iSCSI LUNs?

### Can I use AWS DataSync to copy data from one Amazon FSx for NetApp ONTAP file system to another?

### Can I use AWS DataSync to replicate my Amazon FSx for NetApp ONTAP file system to a different file system in another AWS Region?

### How do I configure AWS DataSync to not copy snapshot directories?

## Performance

[Open all](#)

### How fast can AWS DataSync copy my file system to AWS?

### Can I control the amount of network bandwidth that an AWS DataSync task uses?

### How can I monitor the performance of AWS DataSync?

### Will AWS DataSync affect the performance of my source file system?

### How do I scale data transfers with AWS DataSync?

## Security and compliance

[Open all](#)

### Is my data encrypted while being transferred and stored?

### How does AWS DataSync access my NFS server or SMB file share?

### How does AWS DataSync access HDFS on my Hadoop cluster?

### How does AWS DataSync access my self-managed or cloud object storage that supports the Amazon S3 protocol?

### How does AWS DataSync access my Azure Blob Storage containers?

### Does AWS DataSync require setting up a VPN to connect to my destination storage?

### How do my AWS DataSync agents securely connect to AWS?

### How is my AWS DataSync agent patched and updated?

### Which compliance programs does AWS DataSync support?

## When to choose AWS DataSync

[Open all](#)

### How is AWS DataSync different from using command line tools such as rsync or the Amazon S3 command line interface?

### To transfer objects between my buckets, when do I use AWS DataSync, when do I use S3 Replication, and when do I use S3 Batch Operations?

### When do I use AWS DataSync and when do I use AWS Storage Gateway?

### When do I use AWS DataSync, and when do I use Amazon S3 Transfer Acceleration?

### When do I use AWS DataSync and when do I use AWS Transfer Family?

## Get started

[](/datasync/features/?pg=ln&sec=hs)

None

## Explore features

Explore features

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/migration/transfer/approved/images/ed8bff7d-fd4b-44e6-9814-b431ff72ef0a.cd08109a789f48d08cc9d86bdc5c9865734af6a7.png)

[](/datasync/customers/?pg=ln&sec=hs)

None

## Check out customer stories

Check out customer stories

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/migration/transfer/approved/images/eacbf2a8-85ad-48df-94e0-6e099b5726da.8ee68beff4e305fbc0f76719df09f28d0cc4f261.png)

[](/blogs/storage/tag/aws-datasync/?pg=ln&sec=hs)

Documentation

## Read the blog

Read the blog

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/migration/transfer/approved/images/188022fa-19d3-4f11-8ce2-bfedbe01c4b3.d0b2e0def23af8287628e19ade99bdb516783b21.png)
