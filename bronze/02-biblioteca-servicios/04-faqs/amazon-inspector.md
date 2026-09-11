[Skip to main content](#aws-page-content-main)

Amazon Inspector

- [Overview](/inspector/?nc=sn&loc=1)
- [Features](/inspector/features/?nc=sn&loc=2)
- [Pricing](/inspector/pricing/?nc=sn&loc=3)
- Resources
- [FAQs](/inspector/faqs/?nc=sn&loc=6)
- More

# Amazon Inspector FAQs

- [General](#general--1ycn9vh)
  9
- [Getting started](#getting-started--1ycn9vh)
  8
- [Working with Amazon Inspector](#working-with-amazon-inspector--1ycn9vh)
  33

## General

[Open all](#)

### What is Amazon Inspector?

### What are the key benefits of Amazon Inspector?

Amazon Inspector removes the operational overhead associated with deploying and configuring a vulnerability management solution by allowing you to deploy Amazon Inspector across all accounts with a single step. Additional benefits include:

- Automated discovery and continual scanning that delivers near real-time vulnerability findings

- Central management, configuration, and view of findings for all your organization’s accounts by setting a Delegated Administrator (DA) account

- A highly contextualized and meaningful Amazon Inspector risk score for each finding to help you set more accurate response priorities

- An intuitive Amazon Inspector dashboard for coverage metrics, including accounts, Amazon EC2 instances, Lambda functions, and container images in Amazon ECR and within CI/CD tools, and code repositories within your Source Code Management (SCM) platform, in near-real time.

- Maximize vulnerability assessment coverage by seamlessly scanning EC2 instances, switching between agent-based and agentless scanning.

- Centrally manage software bill of materials (SBOM) exports for all monitored resources. 

- Integration with AWS Security Hub and Amazon EventBridge to automate workflows and ticket routing

### How do I migrate from Amazon Inspector Classic to the new Amazon Inspector?

### How is Amazon Inspector different from Amazon Inspector Classic?

Amazon Inspector has been rearchitected and rebuilt to create a new vulnerability management service. Here are the key enhancements over Amazon Inspector Classic:

- **Built for scale:** The new Amazon Inspector is built for scale and the dynamic cloud environment. There’s no limit to the number of instances or images that can be scanned at a time.

- **Support for container images and Lambda functions:** The new Amazon Inspector also scans container images residing in Amazon ECR and within CI/CD tools, and Lambda functions for software vulnerabilities. Container-related findings are also pushed to the Amazon ECR console.

- **Support for multi-account management:** The new Amazon Inspector is integrated with AWS Organizations, allowing you to delegate an administrator account for Amazon Inspector for your organization. This Delegated Administrator (DA) account is a centralized account that consolidates all findings and can configure all member accounts.

- **AWS Systems Manager Agent:** With the new Amazon Inspector, you no longer need to install and maintain a standalone Amazon Inspector agent on all of your Amazon EC2 instances. The new Amazon Inspector uses the widely deployed AWS Systems Manager Agent (SSM Agent), which removes that need.

- **Automated and continual scanning:** The new Amazon Inspector automatically detects all newly launched Amazon EC2 instances, Lambda functions, and eligible container images pushed to Amazon ECR and immediately scans them for software vulnerabilities and unintended network exposure. When an event occurs that may introduce a new vulnerability, the involved resources are automatically rescanned. Events that initiate rescanning a resource include installing a new package in an EC2 instance, installing a patch, and when a new common vulnerabilities and exposures (CVE) that impacts the resource is published.

- **Amazon Inspector risk score:** The new Amazon Inspector calculates an Inspector risk score by correlating up-to-date CVE information with temporal and environmental factors such as network accessibility and exploitability information to add context to help prioritize your findings.

- **Vulnerability assessment coverage:** The new Amazon Inspector enhances vulnerability assessment by seamlessly scanning EC2 instances and switching between agent-based and agentless scanning.

- **Software bill of materials (SBOM) export:** The new Amazon Inspector centrally manages and exports SBOM for all monitored resources. 

- **Scan your code repositories:** The new Amazon Inspector with it’s native integration to GitHub and GitLab, helps you rapidly identify and prioritize security vulnerabilities and misconfigurations across your application source-code, dependencies, and infrastructure as code (IaC).

### Can I use Amazon Inspector and Amazon Inspector Classic simultaneously in the same account?

### How is the Amazon Inspector container image scanning service for Amazon Elastic Container Registry (ECR) different than the Amazon ECR native container image scanning solution?

### What is the pricing for Amazon Inspector?

### Is there a free trial for Amazon Inspector?

### In what Regions is Amazon Inspector available?

## Getting started

[Open all](#)

### How do I get started?

### What is an Amazon Inspector finding?

### Can I manage Amazon Inspector using my AWS Organizations structure?

### How do I delegate an administrator for the Amazon Inspector service?

### Do I have to activate specific scanning types (that is, Amazon EC2 scanning, Lambda functions scanning, or Amazon ECR container image scanning)?

### Do I need any agents to use Amazon Inspector?

### How can I install and configure the Amazon Systems Manager Agent?

### How do I know which Amazon ECR repositories are configured for scanning? And how do I manage which repositories should be configured for scanning?

## Working with Amazon Inspector

[Open all](#)

### How do I know if my resources are being actively scanned?

### How often are the automated rescans performed?

All scans are automatically performed based on events. All workloads are initially scanned upon discovery and subsequently rescanned.

- For Amazon EC2 instances: For SSM agent-based scans, rescans are started when a new software package is installed or uninstalled on an instance, when a new CVE is published, and after a vulnerable package is updated (to confirm there are no additional vulnerabilities). For agentless scans, scans are performed every 24 hours.

- For Amazon ECR container images: Automated re-scans are started for eligible container images when a new CVE affecting an image is published. The automated rescans for container images are based on the rescan durations configured for image last in use date and push date in the Amazon Inspector console or APIs. If the push date of an image is less than the configured “Push date rescan duration” and image last in use date is within the configured “last in use rescan duration”, the container image will continue to be monitored and automated rescans are started when a new CVE affecting an image is published. Available re-scan duration configurations for image last in use date are 14 days (by default), 30 days, 60 days, 90 days, or 180 days. The rescan duration configurations for image pull date are 14 days (by default), 30 days, 60 days, 180 days or Lifetime.

- For Lambda functions: All new Lambda functions are initially assessed upon discovery, and continually reassessed when there is an update to the Lambda function or a new CVE is published.

- For Code Repositories: All new code repositories are assessed as per the default configuration settings. If periodic scans and/or change-based scans are configured, the repositories will be scanned as per the configured triggers. There are no CVE based automated re-scans triggered.

### How long are container images continually rescanned with Amazon Inspector?

Container images residing in Amazon ECR repositories that are configured for continual scanning are scanned for the duration configured in the Amazon Inspector console or APIs. Available rescan duration configurations for image last in use date are 14 days (by default), 30 days, 60 days, 90 days, or 180 days. The rescan duration configurations for image pull date are 14 days (by default), 30 days, 60 days, 180 days, or Lifetime.

 

- When Amazon Inspector ECR scanning is activated, Amazon Inspector only picks up images pushed in last 14 days for scanning, but continually scans them for the rescan duration configured for last in use and push date. i.e, 14 days (by default), 30 days, 60 days, 90 days, or 180 days. If the push date of an image is less than the configured “Push date rescan duration” AND image has last in use date within the configured “last in use rescan duration”, the container image will continue to be monitored and automated rescans are started when a new CVE affecting an image is published. For example, when activating Amazon Inspector ECR scanning, Amazon Inspector will pick up images pushed in the last 14 days for scanning. However post-activation, if you select 30 days rescan duration for both push date and last in use date configurations, Amazon Inspector will continue to scan the images if they were pushed in the last 30 days or have been last in use on running container at least once in the last 30 days. If an image hasn’t been push or last in use on a running container in the last 30 days, Amazon Inspector will stop monitoring it.

- All images pushed to ECR after Amazon Inspector ECR scanning is activated are continually scanned for the duration configured in “Last in use date rescan duration” and “Push date rescan duration”. Available rescan duration configurations for image push date are 14 days (by default), 30 days, 60 days, 90 days, 180 days, or lifetime. The rescan duration configurations for image last in use date are 14 days (by default), 30 days, 60 days, 90 days or 180 days. The automated re-scan duration is calculated based on last push or last in use date of a container image. For example, after activating Amazon Inspector ECR scanning, if you select 180 days rescan duration for both push data and last in use date configurations, Amazon Inspector will continue to scan the images if they were pushed in the last 180 days or have been last in use on a running container at least once in the last 180 days. However, if an image hasn’t been pushed or last in use on a running container in the last 180 days, Amazon Inspector will stop monitoring it.

- If the image is in “scan eligibility expired” state, you can pull the image to bring it back under Amazon Inspector monitoring. The image will be continually scanned for the push and pull date rescan durations configured from the last pulled date.

### Can I exclude my resources from being scanned?

- **For Amazon EC2 instances**: Yes, an EC2 instance can be excluded from scanning by adding a resource tag. You can use the key ‘InspectorEc2Exclusion’, and value is \<optional\>.

- **For container images residing in Amazon ECR**: Yes. Although you can select which Amazon ECR repositories are configured for scanning, all images within a repository will be scanned. You can create inclusion rules to select which repositories should be scanned.

- **For Lambda functions:** Yes, a Lambda function can be excluded from scanning by adding a resource tag. For standard scanning, use the key 'InspectorExclusion' and the value 'LambdaStandardScanning'. For code scanning, use the key 'InspectorCodeExclusion' and the value 'LambdaCodeScanning'.

- **For Code Security:** Yes, you can select which code repositories are configured for scanning. You can create inclusion rules to select which repositories should be scanned within your scan configurations.

### How do I use Amazon Inspector to assess my Lambda functions for security vulnerabilities?

### If a Lambda function has multiple versions, which version will Amazon Inspector assess?

### Can I activate Lambda code scanning without activating Lambda standard scanning?

### How does changing the SSM inventory collection frequency from the default 30 minutes to 12 hours impact the continual scanning by Amazon Inspector?

### What is Amazon Inspector risk score?

### How is a finding severity determined?

### How do suppression rules work?

### How can I export my findings, and what do they include?

### How can I export SBOM for my resources, and what do they include?

### How do I enable agentless scanning for my account?

### What is the frequency for agentless scans?

### Where can I see which instances are being scanned using agent vs agentless when I’m using hybrid scan mode for EC2 scanning?

### Is it possible for member accounts in a multi-account setup to modify the scan mode for EC2 scanning for their respective accounts?

### How do I integrate Amazon Inspector in my CI/CD tools for container image scanning?

### Do I need to enable Amazon Inspector to use Amazon Inspector CI/CD integration for container image scanning?

### Can I scan my private Amazon EC2 instances by setting up Amazon Inspector as a VPC endpoint?

### Which operating systems does Amazon Inspector support?

### Which programming language packages does Amazon Inspector support for container image scanning?

### Will Amazon Inspector work with instances that use Network Address Translation (NAT)?

### I use a proxy for my instances. Will Amazon Inspector work with these instances?

### Can Amazon Inspector be integrated with other AWS services for logging and notifications?

### Does Amazon Inspector offer “CIS Operating System Security Configuration Benchmarks” scans?

### Does Amazon Inspector work with AWS Partner solutions?

### Can I deactivate Amazon Inspector?

### Can I suspend Amazon Inspector?

### What are the core capabilities of Amazon Inspector code security features?

### How does Amazon Inspector integrate with existing development workflows?

### What scan types are supported for Amazon Inspector Code Security?

### What is a default scan configuration for Amazon Inspector Code Security?

## Next steps

[](/inspector/customers/?refid=83add82a-8e52-4837-bc73-c323da62d78c)

Customers

## See how global companies are using Amazon Inspector to automate software vulnerability management

Visit the customer page

[](https://console.aws.amazon.com/inspector/home)

Console

## Get started building with Amazon Inspector in the AWS Management Console

Sign in
