[Skip to main content](#aws-page-content-main)

Amazon Elastic Block Store

- [Overview](/ebs/)
- Features
- [Pricing](/ebs/snapshots/faqs/)
- Volume Types
- [Resources](/ebs/resources/)
- More

# Amazon EBS FAQs

- [General](#general--194833s)
  10
- [Performance](#performance--194833s)
  19
- [Snapshots](#snapshots--194833s)
  20
- [Encryption](#encryption--194833s)
  10
- [Billing and metering](#billing-and-metering--194833s)
  3
- [Multi-Attach](#multi-attach--194833s)
  4

## General

[Open all](#)

### Are Amazon EBS volume and snapshot ID lengths changing in 2018?

### What happens to my data when an Amazon EC2 instance terminates?

### What kind of performance can I expect from Amazon EBS volumes?

### Which volume should I choose?

###  Since io2 Block Express provides higher volume durability, should I still take snapshots and plan to replicate io2 Block Express volumes across Availability Zones (AZs) for high durability?

### What are best practices for high availability on Amazon EBS?

### How do I modify the capacity, performance, or type of an existing EBS volume?

### Are EBS Standard Volumes still available?

### Are Provisioned IOPS SSD (io2 Block Express and io1) volumes available for all Amazon EC2 instance types?

### How do I create a copy of a volume?

## Performance

[Open all](#)

### What level of performance consistency can I expect to see from my io2 Block Express volumes?

### What level of performance latency can I expect to see from my io2 Block Express volumes? 

### Does the I/O size of my application reads and writes affect the rate of IOPS I get from my Provisioned IOPS SSD (io2 Block Express) volumes?

### What factors can affect the performance consistency I see with io2 Block Express?

### What level of performance consistency can I expect to see from my HDD-backed volumes?

### Does the I/O size of my application reads and writes affect the rate of throughput I get from my HDD-backed volumes?

### What factors can affect the performance consistency of my HDD-backed volumes?

### Can I stripe multiple volumes together to get better performance?

### How does Amazon EBS handle issues like storage contention?

### What level of performance consistency can I expect to see from my General Purpose SSD (gp3 and gp2) volumes?

### What level of performance latency can I expect to see from my General Purpose SSD (gp3 and gp2) volumes?

### Do General Purpose SSD (gp3) volumes have burst?

### How does burst work on General Purpose SSD (gp2) volumes?

### What is EBS Block Express?

### What workloads are suited for io2 Block Express?

### Why should I use Provisioned Rate for Volume Initialization?

### How do I use Provisioned Rate for Volume Initialization?

### What workloads are suited for General Purpose SSD gp3 volumes?

### Does creating a copy of a volume affect the performance of the source volume?

## Snapshots

[Open all](#)

### How can I use EBS direct APIs for Snapshots?

This feature can be used via the following APIs that can be called using AWS CLI or via AWS SDK.

- List Snapshot Blocks: The ListSnapshotBlocks API operation returns the block indexes and block tokens for blocks in the specified snapshot.
- List Changed Blocks: The ListChangedBlocks API operation returns the block indexes and block tokens for blocks that are different between two specified snapshots of the same volume/snapshot lineage.
- Get Snapshot Blocks: The GetSnapshotBlock API operation returns the data in a block for the specified snapshot ID, block index, and block token.
- Start Snapshot: The StartSnapshot operation starts a snapshot, either as an incremental snapshot of an existing one or as a new snapshot. The started snapshot remains in a pending state until it is completed using the CompleteSnapshot action.
- Put Snapshot Block: The PutSnapshot operation adds data in the form of individual blocks to a started snapshot that is in a pending state. You must specify a Base64-encoded SHA256 checksum for the block of data transmitted. The service validates the checksum after the transmission is completed. The request fails if the checksum computed by service doesn’t match what you speciﬁed.
- Complete Snapshot: The CompleteSnapshot operation completes a started snapshot that is in a pending state. The snapshot is then changed to a completed state.

 

For more information, please refer to [technical documentation](https://docs.aws.amazon.com/ebs/latest/APIReference/Welcome.html).

###  What block sizes are supported by GetSnapshotBlock and PutSnapshotBlock APIs?

### Will I be able to access my snapshots using the regular Amazon S3 API?

### Do volumes need to be un-mounted to take a snapshot?

### Does it take longer to snapshot an entire 16 TB volume as compared to an entire 1 TB volume?

### Are snapshots versioned? Can I read an older snapshot to do a point-in-time recovery?

### How can I discover Amazon EBS snapshots that are shared with me?

### How can I find which Amazon EBS Snapshots are shared globally?

### How can I find a list of Amazon public datasets stored in Amazon EBS Snapshots?

### When would I use Fast Snapshot Restore (FSR)?

### Does enabling FSR for my snapshot speed up snapshot creation?

### How do I enable Fast Snapshot Restore (FSR)?

### How do I use Fast Snapshot Restore (FSR)?

### How many concurrent volumes can I create and what happens when I surpass this limit?

### How do I know when a volume was created from an FSR-enabled snapshot?

### What happens to FSR when I delete a snapshot?

### Can I enable FSR for public and private snapshots shared with me?

### How am I billed for enabling FSR on a snapshot shared with me?

### What happens to the FSR for a shared snapshot when the owner of the snapshot stops sharing the snapshot or deletes it?

### How do I automate application-consistent EBS Snapshots?

## Encryption

[Open all](#)

### What is Amazon EBS encryption?

### What is the AWS Key Management Service (KMS)?

### Why should I use EBS encryption?

### How are my Amazon EBS encryption keys managed?

### Does EBS encryption support boot volumes?

### Can I create an encrypted data volume at the time of instance launch?

### Can I create additional encrypted data volumes at the time of instance launch that are not part of the AMI?

### Can I launch an encrypted EBS instance from an unencrypted AMI?

### Can I share encrypted snapshots and AMIs with other accounts?

### Can I ensure that all new volumes created are always encrypted?

## Billing and metering

[Open all](#)

### Will I be billed for the IOPS provisioned on a Provisioned IOPS volume when it is disconnected from an instance?

### Do your prices include taxes?

### Why should I use Provisioned Rate for Volume Initialization?

## Multi-Attach

[Open all](#)

### Is there an additional fee to enable Multi-Attach?

### Can I boot an EC2 instance using a Multi-Attach enabled volume?

### What happens if all of my attached instances do not have the ‘deleteOnTermination’ flag set?

### Can my application use Multi-Attach?

## Next Steps

[](/ebs/pricing/?nc=nsb&pg=faq)

Pricing

## Learn more about Amazon EBS pricing

Visit the pricing page

![](https://d1.awsstatic.com/device-a-industry-image-assets/aerospace-satellites/aerospace-satellites_1200/studio/Industry-Aerospace-Satallites_Studio_100_1200.a3241641b6d51724f23383ffa03199e78d6b1718.jpg)

[](https://console.aws.amazon.com/console/home)

Getting started

## Ready to build?

Get started with Amazon EBS

![](https://d1.awsstatic.com/device-a-industry-image-assets/aerospace-satellites/aerospace-satellites_1200/studio/Industry-Aerospace-Satallites_Studio_66_1200.079ad034e2f8551970f30f374ed73b9c5f4f9816.jpg)

[](/contact-us/)

Contact us

## Have more questions?

Contact us

![](https://d1.awsstatic.com/device-a-industry-image-assets/aerospace-satellites/aerospace-satellites_1200/studio/Industry-Aerospace-Satallites_Studio_99_1200.5edb1e4b6b28cdfa760519f868708a3f303d8dfd.jpg)
