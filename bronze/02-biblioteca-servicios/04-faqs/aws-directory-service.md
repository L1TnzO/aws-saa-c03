[Skip to main content](#aws-page-content-main)

AWS Directory Service

- [Overview](/directoryservice/)
- [Features](/directoryservice/features/)
- [Pricing](/directoryservice/pricing/)
- [Getting Started](/directoryservice/getting-started/)
- [FAQs](/directoryservice/faqs/)

# AWS Directory Service FAQs

- [General](#general--1ycn9vh)
  11
- [AWS Managed Microsoft AD](#aws-managed-microsoft-ad--1ycn9vh)
  21
- [Multi-region replication](#multi-region-replication--1ycn9vh)
  10
- [Seamless domain join](#seamless-domain-join--1ycn9vh)
  4
- [IAM integration](#iam-integration--1ycn9vh)
  1
- [Compliance](#compliance--1ycn9vh)
  3

## General

[Open all](#)

### What is AWS Directory Service?

### What can I do with AWS Directory Service?

### How do I create a directory?

### Can I join an existing Amazon EC2 instance to an AWS Directory Service directory?

### Are APIs supported for AWS Directory Service?

### Does AWS Directory Service support CloudTrail logging?

### Can I receive notifications when the status of my directory changes?

### How much does AWS Directory Service cost?

### Can I tag my directory?

### In which AWS regions is AWS Directory Service available?

### What versions of Server Message Block (SMB) protocol does AWS Managed Microsoft AD support?

## AWS Managed Microsoft AD

[Open all](#)

### How do I create an AWS Managed Microsoft AD directory?

### How are AWS Managed Microsoft AD directories deployed?

### Can I configure the storage, CPU, or memory parameters of my AWS Managed Microsoft AD directory?

### How do I manage users and groups for AWS Managed Microsoft AD?

### How are my administrative permissions different between AWS Managed Microsoft AD and running Active Directory in my own Amazon EC2 Windows instances?

### Can I use Microsoft Network Policy Server (NPS) with AWS Managed Microsoft AD?

### Does AWS Managed Microsoft AD support schema extensions?

### Which applications are compatible with AWS Managed Microsoft AD?

Compatible with Standard, Enterprise, and Hybrid editions:

- Amazon EC2 Instances

&nbsp;

- Amazon FSx for Windows File Server

&nbsp;

- Amazon RDS for MySQL 

&nbsp;

- Amazon RDS for Oracle

&nbsp;

- Amazon RDS for PostgreSQL

&nbsp;

- Amazon RDS for SQL Server

&nbsp;

- Amazon RDS for Db2 

Compatible with Standard and Enterprise editions:

- Amazon QuickSight

&nbsp;

- Amazon Chime

&nbsp;

- Amazon Connect 

&nbsp;

- Amazon WorkMail

&nbsp;

- Amazon WorkSpaces

&nbsp;

- AWS IAM Identity Center

&nbsp;

- AWS Client VPN 

&nbsp;

- AWS Management Console

Note that not all configurations of these applications may be supported.

### Which third party software is compatible with AWS Managed Microsoft AD?

AWS Managed Microsoft AD is based on actual Active Directory and provides the broadest range of native AD tools and third-party apps support such as:

- Active Directory-Based Activation (ADBA)

&nbsp;

- Active Directory Certificate Services (AD CS): Enterprise Certificate Authority

&nbsp;

- Active Directory Federation Services (AD FS) 

&nbsp;

- Active Directory Users and Computers (ADUC)

&nbsp;

- Application Server (.NET)

&nbsp;

- Azure Active Directory (Azure AD)

&nbsp;

- Azure Active Directory (AD) Connect 

&nbsp;

- Distributed File System Replication (DFSR)

&nbsp;

- Distributed File System Namespaces (DFSN)

&nbsp;

- Microsoft Remote Desktop Services Licensing Server

&nbsp;

- Microsoft SharePoint Server 

&nbsp;

- Microsoft SQL Server (including SQL Server Always On Availability Groups)

&nbsp;

- Microsoft System Center Configuration Manager (SCCM)

&nbsp;

- Microsoft Windows and Windows Server OS

&nbsp;

- Office 365 

&nbsp;

- Active Directory Certificate Services (AD CS): Certificate Enrollment Web Service (Hybrid edition only)

&nbsp;

- Microsoft Exchange Server (Hybrid editions only)

### Which third party software is NOT compatible with AWS Managed Microsoft AD?

- Active Directory Certificate Services (AD CS): Certificate Enrollment Web Service (Standard and Enterprise editions only)

&nbsp;

- Microsoft Exchange Server (Standard and Enterprise editions only)

### Can I migrate my existing, on-premises Microsoft Active Directory to AWS Managed Microsoft AD?

### Can I configure conditional forwarders and trusts in the Directory Service console?

### Can I add additional domain controllers manually to my AWS Managed Microsoft AD?

### Can I use Microsoft Office 365 with user accounts managed in AWS Managed Microsoft AD?

### Can I use Security Assertion Markup Language (SAML) 2.0–based authentication with cloud applications using AWS Managed Microsoft AD?

### Can I encrypt communication between my applications and AWS Managed Microsoft AD using LDAPS?

### Can I encrypt LDAP communications between AWS applications and my self-managed AD using AWS Managed Microsoft AD?

### How does AWS Managed Microsoft AD address Microsoft advisory ADV190023, which describes changes to default LDAP security settings on AD domain controllers?

### How many users, groups, computers, and total objects does AWS Managed Microsoft AD support?

### Can I use AWS Managed Microsoft AD as a primary directory?

### Can I use AWS Managed Microsoft AD as a resource forest?

## Multi-region replication

[Open all](#)

### What is multi-region replication?

### How do I add an AWS Region to my directory?

### How does multi-region replication work when I add a new AWS Region?

### Can I share my directory with other AWS accounts in the new AWS Region?

### Can I add more domain controllers do my directory in the new AWS Region?

### How do I monitor the directory status across multiple AWS Regions?

### How do I monitor the directory security logs across multiple AWS Regions?

### Can I rename my directory’s AD site name?

### Can I remove an AWS Region from my directory?

### What AWS applications and services are compatible with multi-region application?

## Seamless domain join

[Open all](#)

### What is seamless domain join?

### How do I join an instance seamlessly to a domain?

### Can I join existing EC2 for Windows Server instances seamlessly to a domain?

### Which distributions and versions of Linux does the seamless domain join feature support?

## IAM integration

[Open all](#)

### How does AWS Directory Service enable single sign-on (SSO) to the AWS Management Console?

## Compliance

[Open all](#)

### Can I use AWS Managed Microsoft AD for AWS Cloud workloads that are subject to compliance standards?

### How can I access compliance and security reports?

### What is the AWS Shared Responsibility Model?

## Next steps

[](/directoryservice/pricing/)

Pricing

## Learn more about Directory Service pricing

See pricing examples and calculate your costs

[](https://console.aws.amazon.com/directoryservice/home)

Console

## Get started building with AWS Directory Service in the AWS

Start building in the console
