[Skip to main content](#aws-page-content-main)

AWS Transfer Family

- [Overview](/aws-transfer-family/?nc=sn&loc=1)
- Features
- [Pricing](/aws-transfer-family/pricing/?nc=sn&loc=3)
- [Getting Started](/aws-transfer-family/getting-started/?nc=sn&loc=4)
- [Resources](/aws-transfer-family/resources/?nc=sn&loc=5)
- More

# AWS Transfer Family FAQs

- [General](#general--26l0p3)
  18
- [Server endpoint options](#server-endpoint-options--26l0p3)
  23
- [Web apps](#web-apps--26l0p3)
  15
- [SFTP connectors](#sftp-connectors--26l0p3)
  21
- [Multi-protocol access](#multi-protocol-access--26l0p3)
  4
- [Identity Provider options for server endpoints](#identity-provider-options-for-server-endpoints--26l0p3)
  16
- [AS2 trading partners](#as2-trading-partners--26l0p3)
  27
- [File processing automation](#file-processing-automation--26l0p3)
  22
- [Amazon S3 access](#amazon-s3-access--26l0p3)
  16
- [Amazon EFS access](#amazon-efs-access--26l0p3)
  19
- [Security and compliance](#security-and-compliance--26l0p3)
  6
- [Monitoring](#monitoring--26l0p3)
  6
- [Billing](#billing--26l0p3)
  6

## General

[Open all](#)

### What is AWS Transfer Family?

### What is SFTP?

### What is FTP?

### What is FTPS?

### What is AS2?

### What are SFTP connectors?

### Why should I use AWS Transfer Family?

### Can I use AWS Transfer Family to build event-driven managed file transfer (MFT) workflows in AWS?

### What are the benefits of using AWS Transfer Family?

### How do I get started with AWS Transfer for SFTP, FTPS, and FTP server endpoints?

### How do I get started with AWS Transfer for AS2?

### How do I get started with AWS Transfer SFTP connectors?

### What is the difference between SFTP and FTPS? Which should I use when?

### What is the difference between the SFTP, FTPS, and AS2 protocols? When should I use the AS2 protocol?

### Can my users continue to use their existing file transfer clients and applications?

### How do I access files stored in an external SFTP site?

### How can I move files from my trading partner's business systems to my S3 bucket?

### Can my users use SCP commands to transfer files using this service?

## Server endpoint options

[Open all](#)

### Can I customize the login banners for users connecting to my Transfer Family server?

### Can I use my corporate domain name (sftp.mycompanyname.com) to access my endpoint?

### Can I set up my server to be accessible to resources only within my VPC?

### Can I use FTP with an internet facing endpoint?

### Can I use FTP without a VPC?

### Can my end users use fixed IP addresses to allowlist  access to my server’s endpoint in their firewalls?

### Can I restrict incoming traffic by end users’ source IP addresses?

### Can I host my server’s endpoint in a shared VPC environment?

### How do I improve performance of file transfers for remotely located end users?

### Can I select which cryptographic algorithms can be used when my end users’ clients connect to my server endpoint?

### Does AWS Transfer Family support quantum-safe exchange of public-keys?

### Can my end users use fixed IP addresses to access my server whose endpoint type is PUBLIC?

### What IP ranges would my end users need to allow list to access my SFTP server’s endpoint type that is PUBLIC?

### Will my AWS Transfer for SFTP server's host key ever change after I create the server?

### What types of SFTP server host keys are supported?

### Can I import keys from my current SFTP server so my users do not have to verify the authenticity of my server again?

### Can multiple host keys be used to verify the authenticity of my SFTP server?

### Which host keys are used to verify authenticity of my SFTP server?

### Can I rotate my SFTP server host keys to ensure secure connections?

### How do my end users’ FTPS clients verify the identity of my FTPS server?

### Do you support active and passive modes of FTPS and FTP?

### Do you support Explicit and Implicit FTPS modes?

### Can I transfer files over FTPS/FTP protocols if I have a firewall or a router configured between the client and the server?

## Web apps

[Open all](#)

### What are AWS Transfer Family web apps?

### How do I get started with Transfer Family web apps?

### Do I need to create a server to create a Transfer Family web app?

### What authentication methods are supported for Transfer Family web apps?

### How can I provision identities from my existing IdPs for my Transfer Family web app?

### Can I use Microsoft Active Directory with my Transfer Family web app?

### Can I connect more than one identity source to IAM Identity Center for my Transfer Family web app?

### How do I set up end-to-end private network connectivity with my Transfer Family web apps? 

### What are the costs associated with using VPC endpoints for web apps?

### Can I customize my Transfer Family web app?

### Which AWS Storage services are supported to transfer files using Transfer Family web apps?

### How do Amazon S3 Access Grants work with Transfer Family web apps?

### What levels of access can I give my users and groups using my Transfer Family web app?

### What actions can my users take with Transfer Family web apps?

### How do web apps relate to Storage Browser for Amazon S3?

## SFTP connectors

[Open all](#)

### What authentication methods are supported to establish connection with remote SFTP servers?

### Which AWS storage services are supported to transfer files using SFTP connectors?

### Which SSH host key algorithms are supported by SFTP connectors?

### What networking options are supported by SFTP connectors when creating connections to remote SFTP servers?

### How do I validate the identity of a remote SFTP server when creating a connection?

### Can I use SFTP connectors to get the remote SFTP server’s public host key to be able to establish connections?

### Can I configure my Amazon S3 buckets and SFTP connectors in separate AWS accounts?

### Can I select which cryptographic algorithms can be used with my SFTP connectors to connect to remote SFTP servers?

### Can I create a SFTP connector in one AWS account and use it to transfer files from a different AWS account?

### How can I check connectivity to the remote server without transferring files?

### What file transfer operations are supported by SFTP connectors?

### How do I retrieve files from remote SFTP servers when the file names are not known in advance?

### How do I track status of my file transfers?

### Can I configure my SFTP connector to present a static IP address to the remote server, so that my business partner can allow list the same in their firewall?

### Can I use SFTP connectors to connect with servers within a private network?

### How do I ensure that all SFTP traffic is routed through the security controls already enforced in my VPC and leverage my current cross-account networking architecture?

### Are there any additional costs associated with using VPC Lattice resources when I create a connector with egress type as VPC Lattice?

### How can I increase the performance of my SFTP connectors?

### Can I schedule my file transfers using SFTP connectors?

### Can I invoke file transfers using SFTP connectors from my state machine in AWS Step Function?

### Can I orchestrate event-driven processing of my files transferred using SFTP connectors?

## Multi-protocol access

[Open all](#)

### Can I enable multiple protocols on the same server endpoint?

### When should I create separate server endpoints for each protocol vs enable the same endpoint for multiple protocols?

### Can I set up the same end user to access the endpoint over multiple protocols?

### Why should I maintain separate credentials for FTP users?

## Identity Provider options for server endpoints

[Open all](#)

### What identity provider options are supported by the service?

### How can I authenticate my users using Service Managed authentication?

### How many SSH keys can I upload per SFTP user? Which key types are supported?

### Is SSH key rotation supported for service managed authentication?

### How do I get started with using Microsoft AD?

### How can I set up my AD users so they have isolated access to different parts of my S3 bucket?

### Can I use Microsoft AD as an identity provider option for all the supported protocols?

### Can I revoke access for enabled AD groups?

### Why should I use the Custom authentication mode?

### What options do I have to integrate my identity provider with an AWS Transfer Family server?

### Can I apply access controls based on the client source IP?

### Can I require multiple methods of authentication when users attempt to connect to my SFTP server?

### Can I use service managed option for password authentication?

### Are anonymous users supported?

### Can I provide access to individual AD users or to all users in a directory?

### Can I use AD to authenticate users using SSH keys?

## AS2 trading partners

[Open all](#)

### How do I receive AS2 messages from my trading partner?

### How do I send AS2 messages to my trading partner?

### Is AWS Transfer Family support for AS2 Drummond Certified?

### How do I uniquely identify my AS2 trading partner?

### Which existing features of AWS Transfer Family are available for AS2? Which features are not available?

### What is non-repudiation and why is it important?

### What are the steps involved in message transmission using the AS2 protocol?

### What are the options available for message transmission?

### Are requesting Message Disposition Notifications (MDN) optional?

### Do you support synchronous (Sync) and asynchronous (Async) MDNs? When should I use which option?

### How do I track and search for payloads and MDNs sent and received?

### Can I archive the received MDNs (as the sender who requested them)?

### How do I notify AWS Transfer Family when a message is ready for delivery to my trading partner’s endpoint?

### Can I isolate each of my trading partners to use different inbound and outbound locations for messages?

### Can I use my trading partner's existing keys and certificates with my AWS Transfer Family AS2 endpoint?

### How do I know when my trading partner’s certificates are expiring?

### Can I connect to my trading partner’s AS2 host that requires me to authenticate using username and password credentials?

### Can I connect to my trading partner’s AS2 sever using static IP addresses?

### Can I send messages to my trading partners AS2 servers using fixed IP addresses?

### Can I receive AS2 messages from my trading partners over a fixed IP enabled endpoint?

### How can I orchestrate processing of AS2 messages received from my trading partners?

### Will my AS2 asynchronous MDN responses use static IP addresses?

### Can I automatically transform the EDI contents of my inbound AS2 messages using AWS B2B Data Interchange?

### How can I automate the sending of AS2 messages to my trading partners?

### Can I archive AS2 messages or MDN responses sent to my trading?

### Can I be notified when outbound AS2 messages fail to send or when inbound AS2 messages fail to process?

### Can I use Transfer Family’s managed workflows to process messages received from my trading partners over AS2?

## File processing automation

[Open all](#)

### What options to I have to automate processing of files transferred using AWS Transfer Family?

### Which Transfer Family operations publish event notifications in Amazon EventBridge?

### What is managed workflows for post-upload processing?

### Why do I need managed workflows?

### What are the benefits of using managed workflows?

### When should I use Amazon EventBridge to orchestrate processing of my transferred files and when should I use AWS Transfer Family managed workflows?

### How do I get started with managed workflows?

### Can I use the same managed workflow across multiple servers?

### What actions can I take on my files using workflows?

### Can I select which file to process at each workflow step?

### Can I use workflows to automatically decrypt files using PGP?

### Can I preserve the originally uploaded file for records retention?

### Can I use managed workflows to dynamically route files to user-specific Amazon S3 folders?

### How do I monitor managed workflows activity?

### I am using AWS Step Functions to orchestrate my file-processing steps. How do AWS Transfer Family managed workflows differ from my current AWS Step Functions set up?

### Can I use managed workflows to customize file delivery notifications?

### Can managed workflows be triggered on partial uploads?

### Which Transfer Family actions are not supported by Managed Workflows?

### Can I trigger workflow actions on user downloads?

### Can I trigger the same workflow on batches of files in a session?

### Can I trigger managed workflows granularly based on which of my users uploaded a file?

### Can I use managed workflows for my Transfer Family web apps?

## Amazon S3 access

[Open all](#)

### How do AWS Transfer Family servers communicate with Amazon S3?

### Why do I need to provide an AWS IAM Role and how is it used?

### Why do I need to provide home directory information for my SFTP/FTPS/FTP users and how is it used?

### I have 100s of SFTP/FTPS/FTP users who have similar access settings but to different portions of my bucket. Can I set them up using the same IAM Role and policy to enable their access?

### How are files stored in my Amazon S3 bucket transferred using AWS Transfer?

### How are Amazon S3 objects stored in my bucket presented to my users?

### What file operations are supported for my SFTP/FTPS/FTP users? What operations are not supported?

### Can I control which operations my users are allowed to perform?

### Can I provide my end users access to more than one Amazon S3 bucket?

### Can I use S3 Access Points with AWS Transfer Family to simplify user access to shared dataset?

### Can I create a server using AWS Account A and map my users to Amazon S3 buckets owned by AWS Account B?

### Can I automate processing of a file once it has been uploaded to Amazon S3?

### How do Amazon S3 event notifications differ from AWS Transfer Family service events in Amazon EventBridge and what should I use to trigger post upload processing of files?

### Can I customize rules for processing based on the user uploading the file?

### It currently takes minutes for my end users to be able to see their S3 directories. Is there a way this can be accelerated?

### Do I also need individual session policies in addition to logical directories to ensure secure access to files for my end users?

## Amazon EFS access

[Open all](#)

### How do I set up my EFS file system to work with AWS Transfer Family?

### How does AWS Transfer Family communicate with Amazon EFS?

### How do I provide access to my users to upload/download files to/from my file systems?

### How are files transferred over the protocols stored in my Amazon EFS file systems?

### What file operations are supported over the protocols when using Amazon S3 and Amazon EFS?

### How can I control which files and folders my users have access to and which operations they are allowed to and not allowed to perform?

### Can I restrict each of my users to access different directories within my file system and only access files within those directories?

### Can I hide the name of the file system from being exposed to my user?

### Are symbolic links supported?

### Can I provide an individual SFTP/FTPS/FTP user access to more than one file system?

### What operating systems can I use to access my EFS file systems via AWS Transfer Family?

### How do I automate processing of a file once it has been uploaded to EFS?

### How do I know which user uploaded a file to EFS?

### Can I use AWS Transfer Family to access a file system in another account?

### What happens if my EFS file system does not have the right policies enabled for cross account access?

### Can I use AWS Transfer Family to access an EFS file system in a different AWS Region?

### Can I use AWS Transfer Family with all EFS storage classes?

### Can my applications use SFTP/FTPS/FTP to concurrently read and write data from/to the same file?

### Will my EFS burst credits be consumed when I access my file systems using AWS Transfer Family?

## Security and compliance

[Open all](#)

### Which protocols should I use for securing data while in-transit over a public network?

### What are my options to encrypt data at rest?

### Which compliance programs does AWS Transfer Family support?

### Is AWS Transfer Family FISMA compliant?

### How does the service ensure integrity of uploaded files?

### What are my options to encrypt/ decrypt files in transit?

## Monitoring

[Open all](#)

### How can I monitor my end users’ and their file transfer activities?

### Can I create consolidated metrics to track users and file transfer activity across multiple servers?

### How do I monitor my workflows?

### How are AWS Transfer Family logs formatted?

### How do I receive notifications for file transfers using AWS Transfer Family?

### Can I send a notification if a workflow file validation check fails?

## Billing

[Open all](#)

### How am I billed for use of the service?

### Will my billing be different if I use the same server endpoint for multiple protocols or use different endpoints for each protocol?

### I have stopped my server. Will I be billed while it is stopped?

### How am I billed for using managed workflows?

### Am I billed hourly for using SFTP connectors?

### Am I billed for data transferred through using web apps?
