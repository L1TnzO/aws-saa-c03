[Skip to main content](#aws-page-content-main)

AWS License Manager

- [Overview](/license-manager/)
- [Features](/license-manager/features/)
- [Pricing](/license-manager/pricing/)
- [Customers](/license-manager/customers/)
- [Resources](/license-manager/resources/)
- More

# AWS License Manager FAQs

- [General](#general--1dpntcm)
  7
- [Compliance](#compliance--1dpntcm)
  1
- [Managed entitlements](#managed-entitlements--1dpntcm)
  8
- [Automated discovery](#automated-discovery--1dpntcm)
  8
- [User-based license subscriptions](#user-based-license-subscriptions--1dpntcm)
  4
- [Linux subscriptions](#linux-subscriptions--1dpntcm)
  6
- [Pricing](#pricing--1dpntcm)
  1

## General

[Open all](#)

### How does License Manager work?

License Manager provides you with the flexibility and control to manage license and subscription usage to match your organizational structure and processes. License Manager can be set in different configurations to address specific business needs. Here are four steps to get started with License Manager:

1.  **Define licensing rules**: Administrators work with the relevant stakeholders (for example, business or compliance teams) in your organization to carefully review licensing agreements, and create licensing rules in License Manager. Licensing rules contain settings that are configured to reflect the terms of your enterprise agreement.
2.  **Enforce licensing rules**: After rules are created, they can be applied in several different ways to track license usage and compliance. Administrators can attach the rules to the organization’s specific Amazon Machine Images (AMIs), create [AWS CloudFormation templates](/cloudformation/aws-cloudformation-templates/), use Amazon Elastic Compute Cloud (EC2) launch templates, or attach them to applications in the [AWS Service Catalog](/servicecatalog/). After the rules are created and attached to the relevant instances to be deployed, end users in your organization can launch AWS resources such as Amazon EC2 instances with the certainty they are licensed correctly. Administrators can track usage through License Manager’s built-in dashboard. License Manager flags any resources that are not compliant with the predefined rules.
3.  **Discover usage of software installed on AWS and on-premises environments**: License Manager integrates seamlessly with [AWS Systems Manager,](/systems-manager/) helping discovery of any software installed on your AWS resources. With Systems Manager, you can manage instances running on AWS and in your on-premises data center through a single interface. Systems Manager securely communicates with a lightweight agent installed on your servers to initiate management tasks. This helps you manage resources for Windows and Linux operating systems running on [EC2](/ec2/) or on-premises. After the instances are attached to License Manager, administrators can search for any operating system or application software through a single pane across AWS resources and on-premises servers. You can apply your licensing rules to the discovered software and track all the applications through the built-in dashboard.
4.  **Discover and track commercial Linux subscriptions:** Onboard to License Manager Linux subscriptions to get information subscriptions associated with Red Hat Enterprise Linux (RHEL), SUSE Linux Enterprise Server (SLES), and Ubuntu Pro. Discovery is via instance metadata and does not require use of AWS Systems Manager. Use License Manager settings to configure cross account and cross region discovery from within a single account, and delegate another account to act as a License administrator. Connect License Manager with Red Hat Subscription Manager (RHSM) to get detailed information on RHEL use, and see when an instance has more than one subscription defined.

### What types of software licenses and subscriptions can I track using License Manager?

### Which AWS services are supported through License Manager?

### Does License Manager support tracking license usage on Amazon Relational Database Service (RDS)?

### Does License Manager support tracking license usage outside of AWS?

### How does License Manager work with Organizations?

### How can I use the benefits of License Manager with bring your own license (BYOL) products purchased from AWS Marketplace?

## Compliance

[Open all](#)

### How does License Manager help me stay compliant?

## Managed entitlements

[Open all](#)

### As an administrator, how do I use License Manager managed entitlements with purchases in AWS Marketplace?

### As an administrator, can I use managed entitlements with other AWS services?

### As an administrator, can I use managed entitlements to manage software licenses on AWS and on-premises deployments?

### As an administrator, can I track and govern license use across my AWS Organization?

### As a software vendor, how do I onboard directly to License Manager for licenses sold outside of AWS Marketplace?

### As a software vendor, can I enforce that customers are using licenses in compliance with my terms?

### As a software vendor, how do I use License Manager managed entitlements for software a service (SaaS) software?

### As a software vendor, how do I use License Manager on-premises without using AWS Identity?

## Automated discovery

[Open all](#)

### How do I get started with automated discovery?

### How do I set up tags, and search using these tags?

### Can I search license Included instances as well?

### Can I combine a tag-based search with other search filters?

### How does automated discovery help you track uninstalled software?

### Do I need to opt in to use the automated accounting feature?

### If I install the software again, what happens?

### What if my vendor agreement says that the licenses are node-locked and that I need to consider them as consumed even if I uninstall?

## User-based license subscriptions

[Open all](#)

### How can I get started with user-based license subscriptions?

Here are steps to get started. For more information on the prerequisites, see our  
documentation.

- Step 1: Configure AWS Directory Service for Microsoft Active Directory.
- Step 2: Subscribe to a product in AWS Marketplace or the EC2 Console.
- Step 3: Launch an instance.
- Step 4: Associate users to an instance.
- Step 5: Connect to a user-based subscription instance

### How do user-based license subscriptions work?

### If the same user connects to different EC2 instances, does it count as multiple users?

### Which instances support license included Microsoft Office and Visual Studio on EC2?

## Linux subscriptions

[Open all](#)

### What is Linux subscriptions in License Manager?

### What Linux subscriptions does License Manager discover and track?

### How can I get started with Linux subscriptions in License Manager?

### What is RHSM Discovery?

### How can I set up notifications based on Linux subscription usage?

### Can I convert an instance from Ubuntu LTS to Ubuntu Pro?

## Pricing

[Open all](#)

### Are there additional charges attached with using AWS License Manager?

## How to get started

[](/license-manager/)

Getting started

## Learn more about AWS License Manager

Learn more

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/compute/approved/images/7397dbfc-dd40-4c33-b89b-22380afe96fa.5e77bce639cb3090ffb4b4f309b6fe1bc51f8418.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Getting started

## Sign up for a free account

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](https://console.aws.amazon.com/)

Console

## Start building in the console

Sign in

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/2c50fb03-8156-4fb1-9937-1dfed809a9e2.a95880625757ad7557ef377c5654264464059a6b.jpeg)
