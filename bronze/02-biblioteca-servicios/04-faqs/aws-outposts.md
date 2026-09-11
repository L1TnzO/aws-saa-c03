[Skip to main content](#aws-page-content-main)

AWS Outposts racks

- [Overview](/outposts/rack/)
- [Features](/outposts/rack/features/)
- [Pricing](/outposts/rack/pricing/)
- [Hardware Specs](/outposts/rack/hardware-specs/)
- Resources
- More

# AWS Outposts racks FAQs

- [General](#general--1hs32zh)
  10
- [AWS services](#aws-services--1hs32zh)
  12
- [Getting started with ordering and installation](#getting-started-with-ordering-and-installation--1hs32zh)
  4
- [Billing](#billing--1hs32zh)
  1
- [Security and compliance](#security-and-compliance--1hs32zh)
  5
- [Support and maintenance](#support-and-maintenance--1hs32zh)
  7

### General

[Open all](#)

#### Why would I use AWS Outposts racks instead of operating in an AWS Region?

#### Which AWS Regions can Outposts racks be connected to?

#### In which countries and territories are Outposts racks available?

First-generation Outposts racks can be shipped to an installed in the following countries and territories.​

- NA - US, Canada, Mexico
- EMEA - All EU countries, United Kingdom (UK), Switzerland, Norway, Bahrain, the United Arab Emirates (UAE), Israel, South Africa, Gibraltar, Morocco, Nigeria, Kenya, Oman, Kazakhstan, Serbia, Qatar, Egypt, Iceland, Turkey, the Kingdom of Saudi Arabia\*, Senegal, Jordan, Kuwait, Rwanda
- APAC - Australia, New Zealand, Japan, South Korea, Taiwan, Singapore, Indonesia, Malaysia, Thailand, the Philippines, Brunei, India, Vietnam, Bangladesh
- SA - Brazil, Colombia, Argentina, Chile, Peru, Ecuador, Trinidad and Tobago, Uruguay
- CA - Puerto Rico, Costa Rica, Panama, Guatemala, Dominican Republic

Second-generation Multi-rack Outposts​ can be shipped to and installed in the following countries and territories.​

- NA - US, Canada, Mexico
- EMEA - All EU countries, United Kingdom (UK), Bahrain, the United Arab Emirates (UAE), Israel, South Africa, Morocco, Nigeria, Kenya, Oman, Kazakhstan, Serbia, Qatar, Egypt, Iceland, Turkey, the Kingdom of Saudi Arabia\*, Senegal, Jordan, Kuwait, Rwanda
- APAC - Australia, New Zealand, Japan, South Korea, Taiwan, Singapore, Indonesia, Malaysia, Thailand, the Philippines, Brunei, India, Vietnam, Bangladesh
- SA - Brazil, Colombia, Argentina, Chile, Peru, Ecuador, Trinidad and Tobago, Uruguay
- CA - Puerto Rico, Costa Rica, Panama, Dominican Republic

Second-generation Single-rack Outposts​ can be shipped to and installed in the following countries and territories.​

NA - US, Canada, Mexico​  
EMEA - All EU countries, United Kingdom (UK), Bahrain, Israel, South Africa, Nigeria, Kenya, Oman, Kazakhstan, Egypt, the Kingdom of Saudi Arabia\*, Kuwait, Rwanda​  
APAC - Australia, New Zealand, Singapore, Thailand, the Philippines, Brunei, Vietnam, Bangladesh​  
SA - Colombia, Chile, Peru, Ecuador, Trinidad and Tobago, Uruguay​  
CA - Puerto Rico, Costa Rica, Panama, Dominican Republic​  
Support for more countries and territories is coming soon.​

###### \* Customers deploying in the Kingdom of Saudi Arabia may require additional authorization. Contact your AWS Sales Representative to learn more.

#### Can I use Outposts racks with the AWS European Sovereign Cloud?

#### Can I order an Outpost to a country or territory where Outposts racks have not launched and link it back to a supported Region?

#### Can I use Outposts racks when it is not connected to the AWS Region or in a disconnected environment?

#### Can I reuse my existing servers in an Outpost?

#### Is there a software-only version of AWS Outposts racks?

#### Can I order my own hardware that can be installed as part of my Outposts racks?

#### What are the major differences between first-generation Outposts racks and second-generation Outposts racks?

The primary benefits of second-generation Outposts racks include:

- *Simplified scaling and built-in resiliency*: The introduction of the Outposts network rack enables seamless deployment of AWS Outpost racks in on-premises or co-location spaces and enables decoupling of compute and networking. The network rack serves as a traffic aggregation layer and eliminates the need for multiple uplinks between compute racks and on-premises customer managed switches. The network rack also comes with built-in resiliency to handle switch failures, making it easier for customers to architect for high availability of their Outposts network.
- *Supporting the latest in-Region EC2 instance types*: With the new generation of Outposts racks, customers can run the latest generation x86-powered Amazon EC2 instances on-premises, including general purpose M8i and M7i instances, compute optimized C8i and C7i instances, and memory optimized R8i and R7i instances, adding to the choice of fifth-generation comparable Amazon EC2 instances that first-generation Outposts racks already supports today. With M7i, C7i, and R7i instances, customers are able to run a broad range of on-premises workloads with even better performance. C7i, M7i, and R7i instances deliver 2x the vCPU, memory, and network bandwidth and up to 40% better performance compared to C5, M5, and R5 instances on first-generation Outposts racks. C8i, M8i, and R8i instances additionally deliver up to 20% better performance compared to C7i, M7i, and R7i instances on second-generation Outposts racks.
- *New purpose-built Outposts instance types*: Second-generation Outposts racks introduce a new category of Outposts specific Amazon EC2 instances (e.g. Bmn-sf2e and Bmn-cx2) with accelerated networking, designed for ultra-low latency and throughput-intensive workloads. The Outposts accelerated networking instance category includes Bmn-sf2e instances—optimized for ultra-low latency and deterministic networking—and Bmn-cx2 instances—optimized for high throughput and low latency. These bare metal instances feature specialized network accelerator cards directly connected to top-of-rack (TOR) switches, ideally suited for workloads such as financial exchanges, real-time market data distribution, telecom 5G core, and media distribution. 

### AWS services

[Open all](#)

#### Can I create EC2 instances using an EBS backed AMI on my Outposts?

#### Will the second-generation Outposts racks support newer generation of GPU-based EC2 instances?

#### Where are EBS snapshots stored?

#### How do I enforce data residency on Outposts racks using EBS Local Snapshots on Outposts?

#### What use cases are best suited to run on S3 on Outposts?

#### How can I establish network connectivity between my Outpost and the AWS Region?

#### Can Outposts racks support real-time applications with low-latency requirements?

#### Can Outposts racks be used to meet data residency requirements?

#### Is Resource Sharing available on AWS Outposts rack?

#### Which EC2 instances are available on Outposts racks?

#### How can I use Route 53 Resolver on Outposts?

#### Will the second-generation Outposts racks support more AWS services?

### Getting started with ordering and installation

[Open all](#)

#### What are the prerequisites for deploying Outposts racks at my location?

#### What EC2 instances are supported on Single-rack and Multi-rack Outposts?​

#### What are the minimum configurations for Single-rack and Multi-rack Outposts?

#### Multi-rack and Single-rack Outposts comparison:​

### Billing

[Open all](#)

#### What happens at term end?

### Security and compliance

[Open all](#)

#### Do the same compliance certifications for AWS Services today apply for services on Outposts racks?

#### Are AWS Outposts racks GxP Compatible?

#### Who is responsible for the physical security of the Outposts racks at my datacenter?

#### What is AWS Outposts FedRAMP authorization status?

#### Who manages the bare metal EC2 instances and bare metal network fabric in Bmn-sf2 and Bmn-cx2 instances?

### Support and maintenance

[Open all](#)

#### How does AWS maintain AWS Outposts rack infrastructure?

#### What happens when my facility's network connection goes down?

#### What type of control plane information flows back to the parent AWS Region?

#### How does AWS support adding capacity to existing Outposts?

#### Can I scale out by adding additional Single-rack Outposts? ​

#### Can I scale up capacity within a Single-rack Outposts?​

#### How do I migrate from a first-generation Outposts rack to a second-generation Outposts rack?

## How to get started

[](https://pages.awscloud.com/GLOBAL_PM_LN_outposts-features_2020084_7010z000001Lpcl_01.LandingPage.html)

Contact us

## Learn more about AWS Outposts by contacting us directly

Contact us

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/management-and-governance/approved/images/66ac755f-b405-4320-a583-293f737525ff.87ed4f63be9d62da1d76fde7d1094c657fd110bb.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Free tier

## Instantly get access to the AWS Free Tier

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/0ecc02ef-9c29-4da9-8901-89866f339b2b.08bdb34b4b12402bd5dbea13b2c546c722498642.png)

[](https://console.aws.amazon.com/outposts)

Getting started

## Get started with AWS Outposts in the AWS Management Console

Sign in

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/af33e776-47f2-47c7-94c3-ac89017bcb6b.99bbde5d9dccc41c5b4d4c8286e8b22720a59d41.jpeg)
