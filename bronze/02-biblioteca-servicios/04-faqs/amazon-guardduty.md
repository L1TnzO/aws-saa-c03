[Skip to main content](#aws-page-content-main)

Amazon GuardDuty

- [Overview](/guardduty/)
- [Features](/guardduty/features/)
- [Pricing](/guardduty/pricing/)
- [Getting started](/guardduty/getting-started/)
- Resources
- More

# Amazon GuardDuty FAQs

- [Service overview](#service-overview--1ss8a4k)
  10
- [Enabling GuardDuty](#enabling-guardduty--1ss8a4k)
  8
- [Activating GuardDuty](#activating-guardduty--1ss8a4k)
  10
- [GuardDuty S3 Protection](#guardduty-s3-protection--1ss8a4k)
  6
- [GuardDuty EKS Protection](#guardduty-eks-protection--1ss8a4k)
  15
- [GuardDuty Runtime Monitoring](#guardduty-runtime-monitoring--1ss8a4k)
  14
- [GuardDuty Malware Protection](#guardduty-malware-protection--1ss8a4k)
  25
- [GuardDuty RDS Protection](#guardduty-rds-protection--1ss8a4k)
  7
- [GuardDuty Lambda Protection](#guardduty-lambda-protection--1ss8a4k)
  5
- [GuardDuty Extended Threat Detection](#guardduty-extended-threat-detection--1ss8a4k)
  12
- [GuardDuty AI Protection](#guardduty-ai-protection--1ss8a4k)
  2

## Service overview

[Open all](#)

### What is Amazon GuardDuty?

### What are the key benefits of GuardDuty?

### How much does GuardDuty cost?

### Does the estimated cost in the GuardDuty payer account show the total aggregated costs for linked accounts, or just that individual payer account?

### Is there a free trial of GuardDuty?

### What are the differences between GuardDuty and Amazon Macie?

### Is GuardDuty a Regional or global service?

### Which Regions does GuardDuty support?

### Which partners work with GuardDuty?

### Does GuardDuty help address Payment Card Industry Security Standard (PCI DSS) requirements?

## Enabling GuardDuty

[Open all](#)

### How do I enable GuardDuty?

### Can I manage multiple accounts with GuardDuty?

### Which data sources does GuardDuty analyze?

### How quickly does GuardDuty start working?

### Do I have to enable CloudTrail, VPC Flow Logs, DNS query logs, or Amazon EKS audit logs for GuardDuty to work?

### Is there any performance or availability impact to enabling GuardDuty on my account?

### Does GuardDuty manage or keep my logs?

### How can I prevent GuardDuty from looking at my logs and data sources?

## Activating GuardDuty

[Open all](#)

### What can GuardDuty detect?

GuardDuty gives you access to built-in detection techniques developed and optimized for the cloud. The detection algorithms are maintained and continually improved upon by GuardDuty engineers. The primary detection categories include the following:

- **Reconnaissance:** Activity suggesting reconnaissance by an attacker, such as unusual API activity, intra-VPC port scanning, unusual patterns of failed login requests, or unblocked port probing from a known bad IP.
- **Instance compromise:** Activity indicating an instance compromise, such as cryptocurrency mining, malware using domain generation algorithms (DGAs), outbound denial of service activity, an unusually high volume of network traffic, unusual network protocols, outbound instance communication with a known malicious IP, temporary Amazon EC2 credentials used by an external IP address, and data exfiltration using DNS.
- **Account compromise: **Common patterns indicative of account compromise, including API calls from an unusual geolocation or anonymizing proxy, attempts to deactivate CloudTrail logging, unusual instance or infrastructure launches, infrastructure deployments in an unusual region, the exfiltration of credentials, suspicious database login activity, and API calls from known malicious IP addresses.
- **Bucket compromise:** Activity indicating a bucket compromise, such as suspicious data access patterns indicating credential misuse, unusual Amazon S3 API activity from a remote host, unauthorized Amazon S3 access from known malicious IP addresses, and API calls to retrieve data in Amazon S3 buckets from a user that had no prior history of accessing the bucket or invoked from an unusual location. GuardDuty continuously monitors and analyzes CloudTrail S3 data events (like GetObject, ListObjects, and DeleteObject) to detect suspicious activity across all of your Amazon S3 buckets.
- **Malware:** GuardDuty can detect the presence of malware—such as trojans, worms, crypto miners, rootkits, or bots—that may be used to compromise your [Amazon EC2 instance or container workloads](https://docs.aws.amazon.com/guardduty/latest/ug/features-malware-protection.html), or that is uploaded to your [Amazon S3 buckets](https://docs.aws.amazon.com/guardduty/latest/ug/gdu-malware-protection-s3.html) or that exists in your AWS Backup data.
- **Container compromise:** Activity identifying possible malicious or suspicious behavior in container workloads is detected by continuously monitoring and profiling [Amazon EKS](/eks/) clusters by analyzing its [Amazon EKS audit logs](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) and container runtime activity in Amazon EKS or [Amazon ECS](/ecs/). 
- **AI workload compromise:** Activity indicating threats to AI workloads, such as anomalous model invocations on Amazon Bedrock or Amazon SageMaker, cost harvesting attacks using stolen credentials to run inference, and prompt injection attempts detected through integration with Amazon Bedrock Guardrails.

Here is a full list of [GuardDuty finding types](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html).

### What is GuardDuty threat intelligence?

### Can I supply my own threat intelligence?

### How are security findings delivered?

### What is the format of GuardDuty findings?

### How long are security findings made available in GuardDuty?

### Can I aggregate GuardDuty findings?

### Can I take automated preventative actions using GuardDuty?

### How are GuardDuty detections developed and managed?

### Can I write custom detections in Amazon GuardDuty?

## GuardDuty S3 Protection

[Open all](#)

### How can I get started with S3 Protection if I am currently using GuardDuty?

### Is there a free trial of GuardDuty S3 Protection?

### If I am a new user to GuardDuty, is S3 Protection enabled by default for my accounts?

### Can I use GuardDuty S3 Protection without enabling the full GuardDuty service (including the analysis of VPC Flow Logs, DNS query logs, and CloudTrail management events)?

### Does GuardDuty monitor all buckets in my account to help protect my Amazon S3 deployment?

### Do I need to turn on CloudTrail S3 data event logging for S3 Protection?

## GuardDuty EKS Protection

[Open all](#)

### How does GuardDuty EKS Protection work?

### What types of threats can GuardDuty EKS Protection detect on my Amazon EKS workloads?

### Do I need to turn on Amazon EKS audit logs?

### Is there a free trial of GuardDuty EKS Protection?

### How can I get started with GuardDuty EKS Protection if I am currently using GuardDuty?

### Is GuardDuty EKS Protection enabled by default for my accounts if I am a new GuardDuty user?

### How do I disable GuardDuty EKS Protection?

### If I disable GuardDuty EKS Protection, how do I enable it again?

### Do I have to enable GuardDuty EKS Protection on each AWS account and Amazon EKS cluster individually?

### Will I be charged if I don’t use Amazon EKS and I enable GuardDuty EKS Protection in GuardDuty?

### Can I enable GuardDuty EKS Protection without enabling the full GuardDuty service (including the analysis of VPC Flow Logs, DNS query logs, and CloudTrail management events)?

### Does GuardDuty EKS Protection monitor Amazon EKS audit logs for Amazon EKS deployments on AWS Fargate?

### Does GuardDuty monitor non-managed Amazon EKS on Amazon EC2 or Amazon EKS Anywhere?

### Will using GuardDuty EKS Protection impact the performance or cost of running containers on Amazon EKS?

### Do I have to enable GuardDuty EKS Protection in each AWS Region individually?

## GuardDuty Runtime Monitoring

[Open all](#)

### How does GuardDuty Runtime Monitoring work?

### How can I get started with Runtime Monitoring if I am currently using GuardDuty?

### Which AWS services does GuardDuty Runtime Monitoring support?

### Which operating models and workloads does GuardDuty Runtime Monitoring support?

### If I am a new user to GuardDuty, is Runtime Monitoring turned on by default for my accounts?

### How does GuardDuty update new agent versions?

### Can I use GuardDuty Runtime Monitoring without activating the full GuardDuty service?

### What are my deployment options for the GuardDuty security agent?

### Is GuardDuty Runtime Monitoring available in all Regions where GuardDuty is currently available?

### Do I have to activate GuardDuty Runtime Monitoring on each AWS account individually?

### Can I modify how I monitor specific clusters in Amazon EKS or Amazon ECS?

### Will I incur GuardDuty Runtime Monitoring charges if I don’t use Amazon EKS, Amazon ECS, or Amazon EC2 and I turn on GuardDuty Runtime Monitoring for one of those workloads?

### Will using GuardDuty Runtime Monitoring impact the performance or cost of running AWS workloads?

### How do I disable GuardDuty Runtime Monitoring?

## GuardDuty Malware Protection

[Open all](#)

### How does Amazon GuardDuty Malware Protection work?

### Which GuardDuty finding types for Amazon EC2 will initiate a malware scan?

### Which resources and file types can GuardDuty Malware Protection scan?

### Which types of threats can GuardDuty Malware Protection detect?

### Do I need to turn on logging for GuardDuty Malware Protection to work?

### How does GuardDuty Malware Protection accomplish scanning without agents?

### Is there a free trial of GuardDuty Malware Protection?

### If I am currently using GuardDuty, how can I get started with GuardDuty Malware Protection?

### If I am a new user to GuardDuty, is Malware Protection for EC2 enabled by default for my accounts?

### How do I disable GuardDuty Malware Protection?

### If I disable GuardDuty Malware Protection, how do I enable it again?

### If no GuardDuty malware scans are performed during a billing period, will there be any charges?

### Does GuardDuty Malware Protection support multi-account management?

### Do I need to make any configuration changes, deploy any software, or modify my AWS deployments to start using Malware Protection for EC2 ?

### Will using GuardDuty Malware Protection impact the performance of running my workloads?

### Do I have to enable GuardDuty Malware Protection in each AWS Region individually?

### How does GuardDuty Malware Protection use encryption?

### Will the Amazon EBS volume replica be analyzed in same Region as the original volume?

### How can I estimate and control spend on GuardDuty Malware Protection?

### Can I keep the Amazon EBS snapshots taken by GuardDuty Malware Protection?

### By default, what is the maximum length of time a replica Amazon EBS volume will be retained?

### Will multiple GuardDuty findings for a single Amazon EC2 instance or container workload that indicate possible malware initiate multiple malware scans?

### If I disable GuardDuty, do I also have to disable the Malware Protection feature?

### Do I need to enable GuardDuty to use GuardDuty Malware Protection for Amazon S3?

### How does GuardDuty Malware Protection for AWS Backup work?

## GuardDuty RDS Protection

[Open all](#)

### How does GuardDuty RDS Protection work?

### How can I get started with threat detection for Aurora databases if I am currently using GuardDuty?

### If I am a new user to GuardDuty, is threat detection for Aurora databases enabled by default for my accounts?

### Can I use GuardDuty RDS Protection without activating the full GuardDuty service (including the analysis of Amazon Virtual Private Cloud (Amazon VPC) Flow Logs, DNS query logs, and AWS CloudTrail management events)?

### Is GuardDuty RDS Protection available in all Regions where GuardDuty is currently available?

### What Amazon Aurora version(s) does GuardDuty RDS Protection support?

### Will using GuardDuty RDS Protection impact the performance or cost of running Aurora databases?

## GuardDuty Lambda Protection

[Open all](#)

### How does Amazon GuardDuty Lambda Protection work?

### How can I get started with GuardDuty Lambda Protection if I am currently using GuardDuty?

### If I am a new user to GuardDuty, is GuardDuty Lambda Protection enabled by default for my accounts?

### Is GuardDuty Lambda Protection available in all Regions where GuardDuty is currently available?

### Will using GuardDuty Lambda Protection impact the performance or cost of running Lambda workloads?

## GuardDuty Extended Threat Detection

[Open all](#)

### What are the new Extended Threat Detection capabilities in Amazon GuardDuty?

### How do the Extended Threat Detection capabilities work?

### What are the key benefits of the Extended Threat Detection capabilities?

The key benefits include:

- Faster threat detection and response with the help of automatically correlated disparate threat signals and fewer security alerts you need to manually analyze
- Improved visibility into attack sequences that span multiple resources and accounts
- Streamline response with prescriptive remediation recommendations based on AWS best practices and MITRE ATT&CK®  tactic and technique mappings

### How do I get started with the Extended Threat Detection capabilities?

### Do I need to enable all GuardDuty protection plans to benefit from Extended Threat Detection?

### What is the pricing for the Extended Threat Detection capabilities?

### How does S3 Protection enhance GuardDuty Extended Threat Detection capabilities?

### What types of attack sequences can GuardDuty detect with S3 Protection enabled? 

### What are the benefits of enabling EKS Protection for GuardDuty Extended Threat Detection?

### How does GuardDuty leverage EKS Protection and Runtime Monitoring to detect EKS-related attack sequences? 

### What are the benefits of enabling Runtime Monitoring for GuardDuty Extended Threat Detection on Amazon EC2?

### What are the benefits of enabling Runtime Monitoring for GuardDuty Extended Threat Detection on Amazon ECS?

## GuardDuty AI Protection

[Open all](#)

### How does GuardDuty AI Protection work?

### Is there a free trial of GuardDuty AI Protection?

## Next steps

[](/guardduty/resources/partners/)

None

## Learn about the benefits of working with AWS Partners, their deep level of expertise, and the partners available for services, products, and solutions.

Learn more

[](/guardduty/resources/partners/)

None

## Learn about the benefits of working with AWS Partners, their deep level of expertise, and the partners available for services, products, and solutions.

Learn more
