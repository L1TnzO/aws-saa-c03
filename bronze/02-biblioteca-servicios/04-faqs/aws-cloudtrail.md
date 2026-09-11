[Skip to main content](#aws-page-content-main)

AWS CloudTrail

- [Overview](/cloudtrail/)
- [Features](/cloudtrail/features/)
- [Pricing](/cloudtrail/pricing/)
- [Getting Started](/cloudtrail/getting-started/)
- [Resources](/cloudtrail/resources/)
- More

# AWS CloudTrail FAQs

- [General](#general--1kknyrp)
  3
- [Getting started](#getting-started--1kknyrp)
  9
- [Services and Region support](#services-and-region-support--1kknyrp)
  3
- [Applying a trail to all Regions](#applying-a-trail-to-all-regions--1kknyrp)
  6
- [Multiple trails](#multiple-trails--1kknyrp)
  3
- [Security and expiration](#security-and-expiration--1kknyrp)
  3
- [Event message, timeliness, and delivery frequency](#event-message-timeliness-and-delivery-frequency--1kknyrp)
  7
- [Data events](#data-events--1kknyrp)
  4
- [Network activity events](#network-activity-events--1kknyrp)
  2
- [Delegated administrator](#delegated-administrator--1kknyrp)
  3
- [CloudTrail Insights](#cloudtrail-insights--1kknyrp)
  6
- [CloudTrail Lake](#cloudtrail-lake--1kknyrp)
  22
- [Log file aggregation](#log-file-aggregation--1kknyrp)
  1
- [Integration with CloudWatch Logs](#integration-with-cloudwatch-logs--1kknyrp)
  7
- [CloudTrail log file encryption using AWS KMS](#cloudtrail-log-file-encryption-using-aws-kms--1kknyrp)
  4
- [CloudTrail log file integrity validation](#cloudtrail-log-file-integrity-validation--1kknyrp)
  7
- [CloudTrail Processing Library](#cloudtrail-processing-library--1kknyrp)
  3
- [Pricing](#pricing--1kknyrp)
  6
- [Partners](#partners--1kknyrp)
  2
- [Other](#other--1kknyrp)
  1

## General

[Open all](#)

### What is AWS CloudTrail?

### What are the benefits of CloudTrail?

### Who should use CloudTrail?

## Getting started

[Open all](#)

### If I am a new AWS customer or existing AWS customer and don’t have CloudTrail set up, do I need to enable or set up anything to view my account activity?

### Does the CloudTrail Event History show all account activity within my account?

### What search filters can I use to view my account activity?

### Can I use the lookup-events CLI command even if I don’t have a trail configured?

### What additional CloudTrail features are available after creating a trail?

### Can I restrict user access from viewing the CloudTrail Event History?

### Is there any cost associated with CloudTrail Event History being enabled on my account upon creation?

### Can I turn off CloudTrail Event History for my account?

### What advantages does AWS CloudTrail and Amazon CloudWatch direct integration offer?

## Services and Region support

[Open all](#)

### What services are supported by CloudTrail?

### Are API calls made from the AWS Management Console recorded?

### Where are my log files stored and processed before they are delivered to my S3 bucket?

## Applying a trail to all Regions

[Open all](#)

### What does it mean to apply a trail to all AWS Regions?

### What are the benefits of applying a trail to all Regions?

### How do I apply a trail to all Regions?

### What happens when I apply a trail to all Regions?

### Can I apply an existing trail to all Regions?

### How long will it take for CloudTrail to replicate the trail configuration to all Regions?

## Multiple trails

[Open all](#)

### How many trails can I create in a Region?

### What is the benefit of creating multiple trails in a Region?

### Does CloudTrail support resource-level permissions?

## Security and expiration

[Open all](#)

### How can I secure my CloudTrail log files?

### Where can I download a sample S3 bucket policy and an SNS topic policy?

### How long can I store my activity log files?

## Event message, timeliness, and delivery frequency

[Open all](#)

### What information is available in an event?

### How long does it take CloudTrail to deliver an event for an API call?

### How often will CloudTrail deliver log files to my S3 bucket?

### Can I be notified when new log files are delivered to my S3 bucket?

### I believe one of my log files has multiple duplicate events. How do I know which events are unique?

### What happens if CloudTrail is turned on for my account but my S3 bucket is not configured with the correct policy?

### Is it possible to receive duplicate events?

## Data events

[Open all](#)

### What are data events?

### How can I consume data events?

### What are S3 data events? How do I record them?

### What are Lambda data events? How do I record them?

## Network activity events

[Open all](#)

### What are network activity events?

### How are network activity events for VPC endpoints different from VPC Flow Logs?

## Delegated administrator

[Open all](#)

### Can I add a delegated administrator to my organization?

### Who is the owner of an organization trail or event data store at the organizational level created by a delegated admin?

### In which Regions is delegated administrator support available?

## CloudTrail Insights

[Open all](#)

### What are CloudTrail Insights events?

### What type of activity does CloudTrail Insights help identify?

### How does CloudTrail Insights work with other AWS services that use anomaly detection?

### Do I need to have CloudTrail set up in order for CloudTrail Insights to work?

### What kinds of events does CloudTrail Insights monitor?

### How do I get started?

## CloudTrail Lake

[Open all](#)

### Why should I use CloudTrail Lake?

### How does this feature relate to and work with other AWS services?

### How can I ingest events from sources outside of AWS, such as custom applications, third-party applications, or other public clouds?

### When do you recommend using AWS Config advanced query instead of CloudTrail Lake for querying configuration items from AWS Config?

### If I enable ingestion of configuration items from AWS Config today into CloudTrail Lake, will CloudTrail Lake ingest my historical configuration items (generated before the creation of CloudTrail Lake) or collect only the newly recorded configuration items?

### Can I always know which user made a particular configuration change by querying CloudTrail Lake?

### If I've used trails before, can I bring existing CloudTrail logs into my existing or new CloudTrail Lake event data store?

### Does this import capability impact the original trail in S3?

### After I enable the CloudTrail Lake feature, how long do I need to wait to begin writing queries?

### What are some of the common security and operational use cases that I can solve using CloudTrail Lake?

### How do I get started with CloudTrail Lake?

### I created an event data store with seven-year retention pricing. Will I be able to migrate the same event data store to the one-year extendable retention pricing option? What happens to my existing data in the event data store that was ingested based on seven-year retention pricing?

### I created an event data store with one-year extendable retention pricing. Will I be able to migrate the same event data store to the seven-year retention pricing option?

### Why is the retention period for CloudTrail Lake calculated based on event-time and not based on ingestion-time to CloudTrail Lake?

### If I ingest a historical CloudTrail event from S3 to CloudTrail Lake, and I have the event data store retention period configured to 1 year, will this event always be stored in CloudTrail Lake for 1 year from the time of ingestion?

### What type of events from CloudTrail Lake can I visualize on dashboards today?

### Are dashboards enabled at an account level or event data store level?

### What charges are incurred when I enable CloudTrail Lake dashboards?

### Can I create custom dashboards today?

### What use cases do CloudTrail Lake pre-curated dashboards support?

CloudTrail Lake offers a suite of pre-curated dashboards that cater to diverse use cases spanning security, compliance, operations, and resource management. These ready-to-use dashboards are tailored for specific scenarios, providing immediate value across various aspects of cloud governance:

- For security monitoring, dashboards like the "Security Monitoring Dashboard" help track critical security events, including access denied events, failed login attempts, and destructive actions.
- To support compliance efforts, the "IAM Activity Dashboard" provides visibility into changes to IAM entities, helping identify unintended IAM actions and potential compliance issues.
- Cloud operations teams can utilize the "Error Analysis Dashboard" to identify and troubleshoot service throttling errors and other operational issues across services.
- For resource management, the "Resource Changes Dashboard" provides visibility into trends in provisioning, deletion, and modifications across AWS resources, including changes made through CloudFormation and manually.
- Organizations can benefit from the "Organizations Activity Dashboard", which provides insights into account management, access patterns, and policy changes.
- Service-specific dashboards for EC2, Lambda, DynamoDB, and S3 offer detailed visibility into both management and data plane activities for these services.

### What additional information can I add to my CloudTrail management and data events?

### What are the delivery guarantees for additional information in enriched events?

You can enrich your management and data events with resource tags and IAM global condition keys. The availability of this additional information depends on various factors including resource state, timing of tag changes, and IAM policy evaluation.

CloudTrail will update AWS resource tags information on a best-effort basis. In the cases where tags information is not available to CloudTrail at the time an AWS API call is made on the tagged resource, CloudTrail will not include this information in the corresponding CloudTrail event. CloudTrail uses Resource Groups Tagging API (RGTA) to retrieve tag information.  
There are a few scenarios where resource tags in CloudTrail events do not have the most updated values or not present.  

- A resource tag is added or updated on an AWS resource after it is created. When a tag is modified on an AWS resource, there is a brief delay before CloudTrail captures and displays the new tag value in its events. This delay occurs because CloudTrail uses a distributed computing model called [eventual consistency](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-data-consistency.html).
- CloudTrail events for resource deletions may not include tag information. This is because the resource could be deleted before CloudTrail can retrieve the associated tags.
- CloudTrail events are delayed due to a service issue. In such cases, CloudTrail will not include resource tag information. CloudTrail events that are delayed because of such issues include an "[addendum](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-record-contents.html)" field that shows information about why the event is delayed.

CloudTrail will update IAM global condition keys, including Principal Tags, as API actions are authorized, and CloudTrail events are generated. However, it's crucial to understand that CloudTrail will only include a global condition key in an event if that key was evaluated as part of the IAM policy during the authorization process. Simply configuring CloudTrail to include a condition key doesn't guarantee its presence in every event. If you've set up CloudTrail to include a specific global condition key but don't see it in an event, this indicates that the particular key wasn't relevant to the IAM policy evaluation for that action - in other words, the IAM policy being evaluated didn't use that condition key in its logic. 

## Log file aggregation

[Open all](#)

### I have multiple AWS accounts. I would like log files for all the accounts to be delivered to a single S3 bucket. Can I do that?

## Integration with CloudWatch Logs

[Open all](#)

### What is CloudTrail integration with CloudWatch Logs?

### What are the benefits of CloudTrail integration with CloudWatch Logs?

### How do I turn on CloudTrail integration with CloudWatch Logs?

### What happens when I turn on CloudTrail integration with CloudWatch Logs?

### In which AWS Regions is CloudTrail integration with CloudWatch Logs supported?

### How does CloudTrail deliver events containing account activity to my CloudWatch Logs?

### What charges do I incur once I turn on CloudTrail integration with CloudWatch Logs?

## CloudTrail log file encryption using AWS KMS

[Open all](#)

### What is the benefit of CloudTrail log file encryption using server-side Encryption with AWS KMS?

### I have an application that ingests and processes CloudTrail log files. Do I need to make any changes to my application?

### How do I configure CloudTrail log file encryption?

### What charges do I incur once I configure encryption using SSE-KMS?

## CloudTrail log file integrity validation

[Open all](#)

### What is CloudTrail log file integrity validation?

### What is the benefit of the CloudTrail log file integrity validation?

### How do I enable CloudTrail log file integrity validation?

### What happens once I turn on the log file integrity validation feature?

### Where are the digest files delivered to?

### How can I validate the integrity of a log file or digest file delivered by CloudTrail?

### I aggregate all my log files across all Regions and multiple accounts into one single S3 bucket. Will the digest files be delivered to the same S3 bucket?

## CloudTrail Processing Library

[Open all](#)

### What is the CloudTrail Processing Library?

### What functionality does CloudTrail Processing Library provide?

### What software do I need to start using the CloudTrail Processing Library?

## Pricing

[Open all](#)

### How do I get charged for CloudTrail trails?

### If I have only one trail with management events, and apply it to all Regions, will I incur charges?

### If I enable data events on an existing trail with free management events, will I get charged?

### How do I get charged for CloudTrail Lake?

### Can I calculate my estimated CloudTrail Lake ingestion usage if I know my historical CloudTrail usage in trails?

### How do I get charged for delivering CloudTrail events directly to CloudWatch Logs?

## Partners

[Open all](#)

### How do the AWS Partner Solutions help me analyze the events recorded by CloudTrail?

### How can I onboard an integration to CloudTrail Lake as an available source?

## Other

[Open all](#)

### Will turning on CloudTrail impact the performance of my AWS resources or increase API call latency?

## Next steps

[](/cloudtrail/partners/)

Partners

## Learn more about AWS CloudTrail partners

Learn more

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/management-and-governance/approved/images/66ac755f-b405-4320-a583-293f737525ff.2bf413a16b287b508ea92730e9ad77a892ce29d5.jpeg)

[](https://console.aws.amazon.com/cloudtrail/home)

Console

## Get started building with CloudTrail in the AWS Management Console

Sign in

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/0ecc02ef-9c29-4da9-8901-89866f339b2b.43893f92a65dabfe5aca9d988c1579046af15e7c.png)

[](/contact-us/)

Contact us

## Explore CloudTrail support options

Contact us

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/be6bb18c-e958-472e-be9e-f387d1b2ad33.d293c7a93885ac126615839263b22ccf0599834e.jpeg)
