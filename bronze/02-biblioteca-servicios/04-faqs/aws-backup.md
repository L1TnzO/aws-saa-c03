[Skip to main content](#aws-page-content-main)

AWS Backup

- [Overview](/backup/)
- Features
- [Pricing](/backup/pricing/)
- [Getting Started](/backup/getting-started/)
- [Resources](/backup/resources/)
- More

# AWS Backup FAQs

- [General](#general--1y77pp7)
  10
- [Core concepts](#core-concepts--1y77pp7)
  8
- [Compliance](#compliance--1y77pp7)
  12
- [Write-Once-Read-Many (WORM)](#write-once-read-many-worm--1y77pp7)
  5
- [AWS Backup for Amazon S3](#aws-backup-for-amazon-s3--1y77pp7)
  6
- [AWS Backup support for VMWare](#aws-backup-support-for-vmware--1y77pp7)
  15
- [Logically air-gapped vault](#logically-air-gapped-vault--1y77pp7)
  4
- [Malware protection ](#malware-protection--1y77pp7)
  3

## General

[Open all](#)

### What is AWS Backup?

### How does AWS Backup work?

### Why should I use AWS Backup?

### What are the key features of AWS Backup?

### What can I back up using AWS Backup?

### Can I use AWS Backup to back up on-premises data?

### Can I use AWS Backup to access backups created by services with existing backup capabilities?

### How does AWS Backup work with other AWS services that have backup capabilities?

### How does AWS Backup relate to Amazon Data Lifecycle Manager and when should I use one over the other?

### What monitoring and reporting capabilities are available in the AWS Backup console?

## Core concepts

[Open all](#)

### What is a recovery point?

### What is a backup plan?

### What is a backup vault?

### How does the AWS Backup lifecycle feature work?

### How does encryption work in AWS Backup?

### How do I use access policies in a backup vault to control access to backups?

### What services provide support for AWS Backup advanced features?

### How does delegated administrator work?

## Compliance

[Open all](#)

### What is AWS Backup Audit Manager?

### Why should I use AWS Backup Audit Manager?

### How can I use AWS Backup Audit Manager?

### What is an AWS Backup Audit Manager control and framework?

### How does an AWS Backup Audit Manager control work?

### How can I view the compliance results of my AWS Backup Audit Manager controls and frameworks?

### What kind of reports can I create in AWS Backup Audit Manager?

### How does AWS Backup Audit Manager work with other AWS services?

### How does the AWS Backup restore testing feature work and help with compliance?

### Which compliance programs does AWS Backup support?

### Is AWS Backup PCI compliant?

### Is AWS Backup HIPAA eligible?

## Write-Once-Read-Many (WORM)

[Open all](#)

### What is AWS Backup Vault Lock?

### Why should I use AWS Backup Vault Lock?

### How does AWS Backup Vault Lock differ from S3 Glacier Vault Lock?

### How does AWS Backup Vault Lock work?

### What is legal hold?

## AWS Backup for Amazon S3

[Open all](#)

### How does AWS Backup for S3 work?

### How are these capabilities different from what Amazon S3 provides?

### Can I use an existing backup plan in AWS Backup to start backing up Amazon S3?

### What backup options are available in AWS Backup for Amazon S3?

### How does the low-cost warm storage tier work for S3 backups?

### Are there any prerequisites to creating backups of S3 buckets?

## AWS Backup support for VMWare

[Open all](#)

### How does AWS Backup help with VMware data protection?

### How does AWS Backup support for VMware work?

### Which VMware versions and features do you support using AWS Backup?

### What VMware CloudTM on AWS Outposts deployment use cases do you support?

### Where can I restore VMware backups?

### Can I transition VMware backups to a cold storage tier?

### What backup modes do you support for VMware?

### What level of consistency do you support for VMware backups?

### Does AWS Backup support compression for VMware backups?

### Are my VMware backups encrypted?

### Can I copy VMware backups to another AWS Region?

### Can I copy VMware backups to another AWS account?

### How much network bandwidth do I need to back up VMware VMs to AWS?

### Can I deploy an AWS Backup gateway on my private non-routable network? Does AWS Backup gateway support AWS PrivateLink?

### What is the cost for using VPC endpoints with AWS Backup gateway?

## Logically air-gapped vault

[Open all](#)

### What is a logically air-gapped vault?

### Why should I use logically air-gapped vault?

### How does a logically air-gapped vault work?

### How does Multi-party approval work with AWS Backup logically air-gapped vault?

Multi-party approval for AWS Backup logically air-gapped vault enables customers to authorize access to backups even when the account becomes inaccessible due to inadvertent or intentional events, including malware. The process is compatible with vaults storing both primary backups and backup copies and works in three main steps:

1.  Set up a Multi-party approval team and associate it with your logically air-gapped vault in AWS Backup.
2.  When backup access is needed, an authorized user requests access to the vault.
3.  Approvers can review and vote for the request through the Approval portal, allowing the requester to restore or copy backups for recovery.

This process adds an additional layer of security by enabling multiple authorized individuals to approve access to backups from logically air-gapped vault for recovery. For a more detailed implementation guide, please refer to the [Multi-party approval documentation](https://docs.aws.amazon.com/mpa/latest/userguide/what-is.html) or [implementation blog](/blogs/storage/implementing-multi-party-approval-workflows-for-aws-backup-logically-air-gapped-vaults/).

## Malware protection

[Open all](#)

### What is Amazon GuardDuty Malware Protection for AWS Backup?

### Why should I use Amazon GuardDuty Malware Protection for AWS Backup?

### How does Amazon GuardDuty Malware Protection for AWS Backup work?

## Next Steps

[](/backup/pricing/)

None

## Learn more about pricing

Learn more

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

None

## Sign up for a free account

Sign up

[](https://console.aws.amazon.com/)

Console

## Start building in the console

Sign in
