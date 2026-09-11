[Skip to main content](#aws-page-content-main)

AWS Audit Manager

- [Overview](/audit-manager/)
- [Features](/audit-manager/features/)
- [Pricing](/audit-manager/pricing/)
- [Getting started](/audit-manager/getting-started/)
- [FAQs](/audit-manager/faqs/)

# AWS Audit Manager FAQs

- [General](#general--3rjdyx)
  13
- [Core Concepts](#core-concepts--3rjdyx)
  7
- [Getting started](#getting-started--3rjdyx)
  3
- [Working in AWS Audit Manager](#working-in-aws-audit-manager--3rjdyx)
  9

## General

[Open all](#)

### What is AWS Audit Manager?

### What are the key benefits of AWS Audit Manager?

- **Easily map your AWS usage to controls** - AWS Audit Manager provides prebuilt frameworks that include mappings of AWS resources to control requirements for well-known industry standards and regulations, such as the Health Insurance Portability and Accountability Act (HIPAA), the General Data Protection Regulation (GDPR), and the Payment Card Industry Data Security Standard (PCI DSS).
- **Save time with automated collection of evidence** - AWS Audit Manager saves you time by automatically collecting and organizing evidence as defined by each control requirement.
- **Streamline collaboration across teams** - AWS Audit Manager helps you streamline audit stakeholder collaboration. For example, the delegation feature enables you to assign controls in your assessment to a subject matter expert to review.
- **Be continually prepared to produce audit-ready reports** - The evidence Audit Manager continuously collects and securely stores becomes a record containing the information needed to demonstrate compliance with the requirements specified by a control.
- **Ensure assessment report and evidence integrity** - AWS Audit Manager stores evidence in its own managed storage repository with read-only permissions to your end-users. When you generate audit-ready reports, Audit Manager produces a report file checksum so you can validate that the report evidence remains unaltered.

### How does AWS Audit Manager help me audit my usage of AWS?

### When should I use AWS Audit Manager?

### When do I use AWS Audit Manager and AWS Security Hub?

### What is the pricing structure of AWS Audit Manager?

### Does AWS Audit Manager absolve my liability under compliance standards or regulations, such as PCI DSS and GDPR?

### Is AWS Audit Manager a regional or global service?

### What regions does AWS Audit Manager support?

### What is the list of prebuilt frameworks offered by AWS Audit Manager

### Where does AWS Audit Manager store evidence data?

### How long does AWS Audit Manager store evidence data?

### What are the service quotas for AWS Audit Manager?

- Number of active assessments per account: 100 
- Number of custom controls per account: 500 
- Number of custom frameworks per account: 100

To learn more, see [Understanding quotas and restrictions for AWS Audit Manager](https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html). 

## Core Concepts

[Open all](#)

### What is a framework?

A framework can be a collection of pre-built and/or customer-defined controls. These controls are organized and grouped in accordance to the requirements of a specified compliance or industry standard such as PCI DSS, HIPAA, GDPR, or internal risk governance guiding principles.

### What is a control?

A control is a prescriptive description that explains how to implement a procedure to conform to a given rule, such as a compliance requirement. It provides a reasonable assurance that the resources used by your organization operate as intended, that data is reliable, and that your organization is in compliance with applicable laws and regulations.

### What is a custom control?

AWS Audit Manager enables you to define your own controls to collect evidence from specific data sources to help you meet unique compliance requirements.

A common control collects evidence that can support a range of overlapping compliance obligations. Each common control consists of one or more core controls that collects evidence from a predefined group of AWS managed data sources. AWS updates these underlying data sources for you when regulations and standards change and new data sources are identified.

### What is an assessment?

### What is a resource assessment?

A resource assessment is a process that collects, stores, and manages evidence, which you can use to assess risk and compliance with industry standards and regulations. When you define and launch an assessment based on an assessment framework, Audit Manager will execute a resource assessment for each individual resource, such as your Amazon EC2 instances, Amazon RDS instances, Amazon S3 buckets, or Amazon VPC subnets.

### What is evidence?

Evidence is a record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence could be a change activity triggered by a user, or a system configuration snapshot.

### What is an assessment report?

## Getting started

[Open all](#)

### How do I get started with AWS Audit Manager?

### Does AWS Audit Manager help manage evidence across multiple AWS accounts?

### How do I specify the scope of an assessment for my audit?

## Working in AWS Audit Manager

[Open all](#)

### How does AWS Audit Manager help me manage audits?

### How can I review an assessment?

### How do I delegate to a domain expert to review controls on my behalf?

### How do I create a custom framework?

### How do I create a custom control?

### What are the control data sources from which I can automatically collect evidence?

AWS Audit Manager can automatically collect evidence from four data source types:

- **AWS CloudTrail – **Capture user activity from your CloudTrail logs, such as an S3 bucket encryption policy change. The result is imported as user activity evidence.
- **AWS Security Hub** – Collect findings from Security Hub, such as a Security Hub check that relates to a PCI DSS control. The result is imported as compliance check evidence.
- **AWS Config** – Collect rule evaluations directly from AWS Config, such as an AWS Config rule that relates to a HIPAA control. The result is imported as compliance check evidence.
- **AWS API calls** – Capture a resource snapshot, such as an EC2 instance configuration. The response is imported as configuration data evidence.

When you configure a custom control in Audit Manager, we recommend that you select** AWS managed sources**. These are predefined groupings of data sources that represent a common control or a core control. Whenever an AWS managed source is updated, the same updates are automatically applied to all custom controls that use these sources.

Alternatively, you can select **Customer managed sources** and define your own data sources. This gives you the flexibility to add manual evidence, or collect automated evidence from a business-specific resource such as a custom AWS Config rule.

### What is the frequency of evidence collection in Audit Manager?

In AWS Audit Manager, the frequency of evidence collection depends on the type of the evidence, explained as below:

- The configuration data evidence type, which includes snapshots of the resource configuration, is captured directly from AWS services (e.g. EC2, S3, RDS, VPC, etc.) on a daily, weekly, or monthly frequency. You can configure this frequency in Audit Manager.
- The user activity evidence type is captured from AWS CloudTrail logs when triggered by changes to resource configurations.
- The compliance check evidence type, which includes results from AWS Security Hub and/or AWS Config, is captured on a frequency defined in those two services. It can be a periodic basis or triggered by changes to resource configurations.

### How does Audit Manager work with other services?

### How does Audit Manager work with AWS Partners and third-party tools?

## Get started

[](/audit-manager/pricing/)

Pricing

## Learn more about product pricing

Learn more

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/migration/transfer/approved/images/9a605cb9-314c-47f4-a88a-ee7d5ecee185.fe6c7bed51dab1c1c9c4467fa326610dd1a9a7a2.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Free tier

## Instantly get access to the AWS Free Tier

Sign up for a free account

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](https://console.aws.amazon.com/auditmanager/home)

Console

## Start building on the console

Sign in

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/2c50fb03-8156-4fb1-9937-1dfed809a9e2.a95880625757ad7557ef377c5654264464059a6b.jpeg)
