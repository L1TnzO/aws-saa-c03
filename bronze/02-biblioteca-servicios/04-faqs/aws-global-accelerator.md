[Skip to main content](#aws-page-content-main)

AWS Global Accelerator

- [Overview](/global-accelerator/)
- [Features](/global-accelerator/features/)
- [Pricing](/global-accelerator/pricing/)
- [FAQs](/global-accelerator/faqs/)
- [Customers](/global-accelerator/customers/)

# AWS Global Accelerator FAQs

- [General](#general--c4j9i2)
  9
- [Benefits](#benefits--c4j9i2)
  2
- [High availability](#high-availability--c4j9i2)
  3
- [Compliance](#compliance--c4j9i2)
  1
- [Bring your own IP](#bring-your-own-ip--c4j9i2)
  7
- [Custom routing](#custom-routing--c4j9i2)
  6
- [Additional questions](#additional-questions--c4j9i2)
  3

## General

[Open all](#)

### What is AWS Global Accelerator?

### What can I do with AWS Global Accelerator?

By using AWS Global Accelerator, you can:

- Associate the static IP addresses provided by AWS Global Accelerator to regional AWS resources or endpoints, such as Network Load Balancers, Application Load Balancers, EC2 Instances, and Elastic IP addresses. The IP addresses are anycast from AWS edge locations so they provide onboarding to the AWS global network close to your users.

&nbsp;

- Easily move endpoints between Availability Zones or AWS Regions without needing to update your DNS configuration or change client-facing applications.

&nbsp;

- Dial traffic up or down for a specific AWS Region by configuring a traffic dial percentage for your endpoint groups. This is especially useful for testing performance and releasing updates.

&nbsp;

- Control the proportion of traffic directed to each endpoint within an endpoint group by assigning weights across the endpoints.

### What performance improvement does AWS Global Accelerator provide?

### How do I get started with AWS Global Accelerator?

You can get started with setting up AWS Global Accelerator by using the API or through the AWS Management Console or by using an AWS CloudFormation template. Because AWS Global Accelerator is a global service, it’s not tied to any specific AWS Region. Here are three easy steps to set up AWS Global Accelerator for your application:

1.  *Create an accelerator*: When you create your accelerator, AWS Global Accelerator provisions two static IP addresses for it. Then you configure one or more listeners to process inbound connections from end clients to your accelerator, based on the protocol and port that you specify.  
     
2.  *Configure endpoint groups*: You choose one or more regional endpoint groups to associate to your accelerator’s listener by specifying the AWS Regions to which you want to distribute traffic. Your listener routes requests to the registered endpoints in this endpoint group. AWS Global Accelerator monitors the health of endpoints within the group using the health check settings defined for each endpoint. You can configure a traffic dial percentage for each endpoint group, which controls the amount of traffic that an endpoint group accepts. By default, the traffic dial is set to 100% for all regional endpoint groups.  
     
3.  *Register endpoints for endpoint groups*: You register one or more regional resources, such as Application Load Balancers, Network Load Balancers, EC2 Instances, or Elastic IP addresses, in each endpoint group. Then you can set weights to choose how much traffic is routed to each endpoint.

### How does AWS Global Accelerator work together with Elastic Load Balancing (ELB)?

### How is AWS Global Accelerator different from Amazon CloudFront?

### Can I use AWS Global Accelerator for my on-premises services?

### Can I deterministically route multiple users to a specific endpoint IP and port behind my accelerator?

### Can I use AWS Global Accelerator for object storage with Amazon S3?

## Benefits

[Open all](#)

### What benefits does AWS Global Accelerator provide?

### I operate only in a single AWS Region. Can I get any benefit from AWS Global Accelerator?

## High availability

[Open all](#)

### How does AWS Global Accelerator make it easy to move to a multi-Region setup?

### How does AWS Global Accelerator help support multi-Region failover?

### How fast will my application failover between AWS Regions?

## Compliance

[Open all](#)

### What compliance certifications does AWS Global Accelerator support?

## Bring your own IP

[Open all](#)

### Can I use my own IP addresses with Global Accelerator?

### Can I advertise an IPv4 pool through Global Accelerator and from the AWS Regions through Amazon EC2?

### How are Global Accelerator’s static IP addresses different from EC2 Elastic IP addresses?

### How many IP ranges can I bring via BYOIP?

### What is the most specific prefix that I can bring via BYOIP?

### Which RIR prefixes can I use for BYOIP?

### Can I convert my Amazon-provided Elastic IP address ranges into Global Accelerator IP addresses and advertise these globally?

## Custom routing

[Open all](#)

### What is a custom routing accelerator?

### How is a custom routing accelerator different from a standard accelerator?

### How does custom routing work?

### What are VPC subnet endpoints?

### How can I monitor whether clients can reach my VPC subnet endpoints through Global Accelerator?

### What if I need to route to more than 64,000 destinations?

## Additional questions

[Open all](#)

### Does AWS Global Accelerator support IPv4 and IPv6?

### What protocols does AWS Global Accelerator support?

### How is AWS Global Accelerator different from a DNS-based traffic management solution?

## Get started

[](/global-accelerator/pricing/)

Pricing

## Learn more about pricing

Learn more

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/9683c48e-c117-42b3-949d-62da59bd9c5d.3c9ba2a7814182b979ba0c8313fbdbbec361602a.jpeg)

[](https://console.aws.amazon.com/)

Console

## Start building in the console

Get started

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/af33e776-47f2-47c7-94c3-ac89017bcb6b.e10e743c9282921abb9dd155d61c4ef9f6c8c44f.jpeg)
