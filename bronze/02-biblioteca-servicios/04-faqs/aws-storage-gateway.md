[Skip to main content](#aws-page-content-main)

AWS Storage Gateway

- [Overview](/storagegateway/)
- Gateway Services & Features
- [Pricing](/storagegateway/pricing/)
- [Getting Started](/storagegateway/getting-started/)
- [Resources](/storagegateway/resources/)
- More

# AWS Storage Gateway FAQs

- [General](#general--1sup752)
  13
- [Amazon S3 File Gateway](#amazon-s3-file-gateway--1sup752)
  53
- [Amazon FSx File Gateway](#amazon-fsx-file-gateway--1sup752)
  18
- [Tape Gateway](#tape-gateway--1sup752)
  13
- [Volume Gateway](#volume-gateway--1sup752)
  20
- [Hardware Appliance](#hardware-appliance--1sup752)
  12
- [High Availability on VMware](#high-availability-on-vmware--1sup752)
  16
- [Security and Compliance](#security-and-compliance--1sup752)
  14
- [Networking](#networking--1sup752)
  10
- [Performance, Monitoring, and Management](#performance-monitoring-and-management--1sup752)
  9
- [Billing](#billing--1sup752)
  16
- [Support](#support--1sup752)
  6

## General

[Open all](#)

### What is AWS Storage Gateway?

### Why should I use AWS Storage Gateway?

### What use cases does AWS Storage Gateway support?

### How does AWS Storage Gateway provide on-premises applications access to cloud storage?

### How do I use the AWS Storage Gateway service?

### Where can I deploy an AWS Storage Gateway appliance?

### What is Amazon S3 File Gateway?

### What is Amazon FSx File Gateway?

### What is Tape Gateway?

### What is Volume Gateway?

Volume Gateway provides an iSCSI target, which enables you to create block storage volumes and mount them as iSCSI devices from your on-premises or EC2 application servers. The Volume Gateway runs in either a cached or stored mode.

- In the cached mode, your primary data is written to S3, while retaining your frequently accessed data locally in a cache for low-latency access.
- In the stored mode, your primary data is stored locally and your entire dataset is available for low-latency access while asynchronously backed up to AWS.

In either mode, you can take point-in-time snapshots of your volumes, which are stored as Amazon EBS Snapshots in AWS, enabling you to make space-efficient versioned copies of your volumes for data protection, recovery, migration and various other copy data needs.

### What benefits does AWS Storage Gateway provide?

### What AWS Storage Gateway types can I manage through AWS Backup?

### What is the maximum supported size of the local cache per gateway?

## Amazon S3 File Gateway

[Open all](#)

### What is Amazon S3 File Gateway?

### What can I do with Amazon S3 File Gateway?

### What are the benefits of using File Gateway to store data in S3?

### Which Amazon S3 storage classes does S3 File Gateway support?

### What protocols does Amazon S3 File Gateway support?

### How can I create and use a file share?

### What options do I have to configure an NFS file share?

### What options do I have to configure an SMB file share?

### Does Amazon S3 File Gateway support access-based enumeration for SMB file shares?

### Does Amazon S3 File Gateway support integration with on-premises Microsoft Active Directory (AD)?

### Can I export an SMB file share without Active Directory?

### Can I export a mix of NFS and SMB file shares on the same gateway?

### Can I export an NFS and SMB file share on the same bucket?

### How does Amazon S3 File Gateway access my S3 bucket?

### How does my application access my file share?

### How is my file share mapped to my S3 bucket?

### Can I give my file share a custom name?

### Can I change my file share name?

### What is the relationship between files and objects?

### What file system operations are supported by Amazon S3 File Gateway?

### What file system metadata can my client access and where is the metadata stored?

### How do I set the Content-Type for files uploaded to S3?

### What if my bucket already contains objects?

### Can I directly access objects stored in S3 by using Amazon S3 File Gateway?

### How are buckets accessed by the gateway? Are entire bucket or file contents downloaded?

### What metadata can my NFS client access for objects created outside of the gateway?

### What metadata can my SMB client access for objects created outside of the gateway?

### Can I use multiple NFS clients with a single Amazon S3 File Gateway?

### Can I have multiple writers to my S3 bucket?

### Can I have two gateways writing independent data to the same bucket?

### Can I have multiple gateways reading data from the same bucket?

### Can I monitor my file share using Amazon CloudWatch?

### How do I know when my file is uploaded?

### How is a file upload notification different from an S3 event notification?

### How do I know when my working file set is uploaded?

### Can I update my Amazon S3 File Gateway’s view of a bucket to see objects created from an object-based workload or another File Gateway?

### Can I use the gateway to update data in a bucket that belongs to another AWS account?

### Can I use the gateway to access data in Requester Pays S3 buckets?

### How do I create multiple shares per bucket in a gateway?

### How many file shares can I create per gateway?

### Can I change the name of a file share?

### What is the maximum size of an individual file?

### My application checks storage size before copying data. What storage size does the gateway return?

### Can I use Amazon S3 lifecycle, cross-region replication, and S3 event notification with File Gateway?

### Can I use Amazon S3 File Gateway with my backup application?

### Can I use Amazon S3 File Gateway to write files to EFS?

### How does Amazon S3 File Gateway manage the local cache? What data gets stored locally?

### When should I use Amazon S3 File Gateway vs. the S3 API?

### What guidance should I use to provision the size of the gateway’s cache disk? What happens if I provision a smaller cache disk?

### When does data in the cache get evicted?

### Does Amazon S3 File Gateway perform data reduction (deduplication or compression)?

### Can I use Amazon S3 File Gateway with Amazon S3 Transfer Acceleration?

### What sort of encryption does Amazon S3 File Gateway use to protect my data?

## Amazon FSx File Gateway

[Open all](#)

### What is Amazon FSx File Gateway?

### Why should I use Amazon FSx File Gateway?

### How does Amazon FSx File Gateway solve these problems for on-premises applications?

### How do I use Amazon FSx File Gateway?

### What regions is Amazon FSx File Gateway available in?

### How much does Amazon FSx File Gateway cost?

### What protocols does Amazon FSx File Gateway support?

### What is the relationship between files I see in Amazon FSx File Gateway and files I see in Amazon FSx for Windows File Server?

### Does Amazon FSx File Gateway allow me to access the same file shares in AWS?

### How does Amazon FSx File Gateway allow me to manage my Amazon FSx for Windows File Server?

### Can Amazon FSx File Gateway be connected to more than one Amazon FSx for Windows file system?

### What deployment options are supported?

### How do I use my Active Directory to provide credentials?

### Is Amazon FSx File Gateway compatible with my existing Windows Access Controls and Active Directory credentials?

### Is data encrypted in transit?

### How does Amazon FSx File Gateway provide high availability?

### What types of failures are covered by Amazon FSx File Gateway with high availability?

### How many sessions and file shares does Amazon FSx File Gateway support?

## Tape Gateway

[Open all](#)

### What are the benefits of storing virtual tapes in AWS compared to warehousing tapes offsite?

### What Amazon S3 storage classes does Tape Gateway support?

### How much data can I store on a virtual tape?

### How many tapes can the virtual tape library (VTL) hold?

### How much data can I store in tape archives?

### Which S3 storage classes can I retrieve my archived virtual tape to?

### How do I access my data on virtual tapes?

### Will I be able to access the virtual tapes in my virtual tape library using Amazon S3 or Amazon S3 Glacier APIs?

### How do I use Tape Gateway with S3 Glacier Deep Archive storage class?

### Can I move my existing virtual tapes in S3 Glacier to S3 Glacier Deep Archive?

### Can I move a tape in S3 Glacier Deep Archive to S3 Glacier?

### What backup applications can I use with Tape Gateway?

### What sort of encryption does Tape Gateway use to protect my data?

## Volume Gateway

[Open all](#)

### How much volume data can I manage per gateway? What is the maximum size of a volume?

### When I look in Amazon S3 why can’t I see my volume data?

### What sort of encryption does Volume Gateway use to protect my data?

### Can I create an EBS Snapshot from a KMS-encrypted volume?

### Can I create a volume from a KMS-encrypted EBS snapshot?

### Why would I use snapshots?

### What data will my snapshot contain? How do I know when to take a snapshot to ensure my data is backed up?

### How do I restore a snapshot to a gateway?

### Do the AWS Storage Gateway’s volumes need to be un-mounted in order to take a snapshot? Does the snapshot need to complete before the volume can be used again?

### Can I schedule snapshots of my AWS Storage Gateway volumes?

### How long does it take to complete a snapshot?

### Will I be able to access my snapshot data using Amazon S3’s APIs?

### What are the snapshot limits per gateway?

### What are the benefits of using AWS Backup to protect my Volume Gateway volumes?

### How do I protect volumes on Volume Gateway using AWS Backup?

### How do I use AWS Backup to manage backup and retention of my Volume Gateway volumes?

### Does anything change with how I have been using Volume Gateway volumes today?

### If I use AWS Backup, can I also continue to use Volume Gateway snapshot schedules and existing snapshots?

### If I have a KMS-encrypted volume on Volume Gateway, will AWS Backup be able to back up that volume?

### Can I use AWS Backup to create a backup of my Volume Gateway volume in a different region (e.g. cross region)?

## Hardware Appliance

[Open all](#)

### What is the Storage Gateway Hardware Appliance?

### What gateway types and storage interfaces are supported on the hardware appliance?

### Why might I need a hardware appliance?

### What are the hardware appliance models?

### What are the specifications of the hardware appliance?

### Which AWS Regions is the hardware appliance supported in?

### How do I use the hardware appliance?

### Can I run multiple gateways on a single hardware appliance?

### Can I change the type of gateway once it is installed on a hardware appliance?

### Can I add more storage to a Storage Gateway Hardware Appliance after it has been activated?

### Can I add any SSD or hard drive to increase storage capacity for my Storage Gateway Hardware Appliance?

### Does the Storage Gateway Hardware Appliance support RAID?

## High Availability on VMware

[Open all](#)

### How does Storage Gateway provide high availability?

### What environments are enabled for Storage Gateway high availability?

### What does Storage Gateway with high availability cost?

### What types of failures are covered by Storage Gateway with high availability?

### Will NFS and SMB sessions be maintained during a gateway restart?

### Will gateway reads or writes fail during a gateway restart?

### Will Storage Gateway HA still have the ability to restart if its connection to AWS is broken?

### Will I lose data during a gateway restart?

### Do I need to make any changes to my VMware environment to take advantage of the HA feature?

### What does Storage Gateway HA give me that I don't already have if I operate VMware HA?

### Will this be available for VMware Cloud on AWS?

### How will I know if a gateway is capable of high availability and operating in HA-mode?

### What operational visibility will I have during a gateway restart?

### Will I see an availability event in CloudWatch when a gateway restart occurs?

### How will I know when a gateway returns to operation?

### Will I be able to set a service timeout that triggers a gateway restart?

## Security and Compliance

[Open all](#)

### What encryption does AWS Storage Gateway use to protect my data?

### Is AWS Storage Gateway HIPAA eligible?

### Is AWS Storage Gateway PCI compliant?

### Is AWS Storage Gateway FedRAMP compliant?

### Does AWS Storage Gateway support FIPS 140-2 compliant endpoints?

### Which Regions support AWS Storage Gateway FIPS 140-2 compliant endpoints?

### What are the FIPS endpoints for AWS Storage Gateway?

### Is AWS Storage Gateway Hardware Appliance FIPS 140-2 compliant?

### Does File Gateway provide logging to monitor client file access operations?

### Can I monitor client activity for individual file shares?

### What types of file shares are supported by File Gateway audit logs?

### What file operations will I see in File Gateway audit logs?

### How do I access File Gateway audit logs?

### Does Tape Gateway support Write Once Read Many (WORM) capability?

## Networking

[Open all](#)

### Can I use AWS Storage Gateway with AWS Direct Connect?

### Can I route my AWS Storage Gateway internet traffic through a local proxy server?

### Can I deploy a Storage Gateway on my private non-routable network? Does Storage Gateway support AWS PrivateLink?

### Does Storage Gateway support AWS PrivateLink for all types of gateways?

### What is the cost for using VPC endpoints with Storage Gateway?

### How do I activate gateways that are connected to AWS via AWS PrivateLink?

### How can I use PrivateLink with File Gateway?

### Can a File Gateway use a VPC endpoint in one region and access an S3 bucket in another region?

### Can I use AWS PrivateLink with my Storage Gateway Hardware Appliance?

### How can I use PrivateLink with Volume Gateways and Tape Gateways?

## Performance, Monitoring, and Management

[Open all](#)

### What performance can I expect?

### What are the minimum hardware and software requirements for the AWS Storage Gateway?

### What type of data reduction does AWS Storage Gateway perform?

### Does AWS Storage Gateway support network bandwidth throttling?

### How do I monitor my gateway?

### How can I measure the cache performance of my gateway?

### How can I measure the bandwidth used by my gateway?

### How can I create CloudWatch Alarms for my gateway?

### How does the AWS Storage Gateway manage updates?

## Billing

[Open all](#)

### How will I be billed for my use of AWS Storage Gateway?

### How will I be charged for file storage when using a File Gateway?

### How will I be charged for volume or virtual tape storage when using a volume or Tape Gateway?

### How will I be charged for EBS snapshots taken from my AWS Storage Gateway volumes?

### How will I be charged for reading and writing data?

### How will I be charged when retrieving data on an archived virtual tape?

### How will I be charged for deleting an archived virtual tape?

### How am I charged for virtual tapes I store in S3 Glacier Deep Archive?

### How will the virtual tapes I store in Deep Archive Pool, associated with S3 Glacier Deep Archive storage class, show up on my AWS bill and in the AWS Cost Management tool?

### How will I be charged for moving a virtual tape archived in S3 Glacier to S3 Glacier Deep Archive?

### How will I be charged for network data transfer to and from AWS when using AWS Storage Gateway?

### How can I tell how much storage I am going to be billed for?

### When using File Gateway, will I incur S3 request charges?

### Will I incur CloudWatch charges when using File Gateway audit logs?

### When does each monthly billing cycle begin?

### Do your prices include taxes?

## Support

[Open all](#)

### Does AWS Premium Support cover the AWS Storage Gateway?

### What other support options are available?

### Who do I call for support related to the hardware appliance?

### Where do I find the service tag for the hardware appliance (also known as the serial number)?

### What if there is a hardware problem with the hardware appliance?

### What are the warranty terms of the hardware appliance?

## Next Steps

[](/storagegateway/pricing/)

## Learn more about AWS Storage Gateway pricing

Visit the pricing page

[](https://console.aws.amazon.com/storagegateway/)

## Ready to build?

Get started with AWS Storage Gateway

[](https://pages.awscloud.com/ln_NAMER_AWSStorageGateway-Contact-Us.html)

## Have more questions?

Contact us
