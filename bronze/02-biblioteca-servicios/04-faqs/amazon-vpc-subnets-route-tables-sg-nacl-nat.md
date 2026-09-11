[Skip to main content](#aws-page-content-main)

Amazon VPC

- [Overview](/vpc/)
- Features
- [Pricing](/vpc/pricing/)
- [FAQs](/vpc/faqs/)

# Amazon VPC FAQs

- [General Questions](#general-questions--1fg7rww)
  5
- [Billing](#billing--1fg7rww)
  2
- [Connectivity](#connectivity--1fg7rww)
  9
- [IP Addressing](#ip-addressing--1fg7rww)
  16
- [Bring Your Own IP](#bring-your-own-ip--1fg7rww)
  10
- [IP Address Manager](#ip-address-manager--1fg7rww)
  8
- [Topology](#topology--1fg7rww)
  1
- [Security and Filtering](#security-and-filtering--1fg7rww)
  12
- [VPC Traffic Mirroring](#vpc-traffic-mirroring--1fg7rww)
  4
- [Amazon VPC and EC2](#amazon-vpc-and-ec2--1fg7rww)
  18
- [Default VPCs](#default-vpcs--1fg7rww)
  17
- [EC2 Classic](#ec2-classic--1fg7rww)
  6
- [Elastic Network Interfaces](#elastic-network-interfaces--1fg7rww)
  5
- [Peering Connections](#peering-connections--1fg7rww)
  14
- [ClassicLink](#classiclink--1fg7rww)
  10
- [AWS PrivateLink](#aws-privatelink--1fg7rww)
  4
- [Additional Questions](#additional-questions--1fg7rww)
  4
- [VPC Encryption Controls](#vpc-encryption-controls--1fg7rww)
  23

## General Questions

[Open all](#)

### What is Amazon Virtual Private Cloud?

### What are the components of Amazon VPC?

Amazon VPC comprises a variety of objects that will be familiar to customers with existing networks:

- **A Virtual Private Cloud:** A logically isolated virtual network in the AWS cloud. You define a VPC’s IP address space from ranges you select.
- **Subnet:** A segment of a VPC’s IP address range where you can place groups of isolated resources.
- **Internet Gateway:** The Amazon VPC side of a connection to the public Internet.
- **NAT Gateway:** A highly available, managed Network Address Translation (NAT) service for your resources in a private subnet to access the Internet.
- **Virtual private gateway:** The Amazon VPC side of a VPN connection.
- **Peering Connection:** A peering connection enables you to route traffic via private IP addresses between two peered VPCs.
- **VPC Endpoints: **Enables private connectivity to services hosted in AWS, from within your VPC without using an Internet Gateway, VPN, Network Address Translation (NAT) devices, or firewall proxies.
- **Egress-only Internet Gateway:** A stateful gateway to provide egress only access for IPv6 traffic from the VPC to the Internet.

### Why should I use Amazon VPC?

### How do I get started with Amazon VPC?

Your AWS resources are automatically provisioned in a ready-to-use default VPC. You can choose to create additional VPCs by going to the Amazon VPC page in the AWS Management Console and selecting "Start VPC Wizard".

You’ll be presented with four basic options for network architectures. After selecting an option, you can modify the size and IP address range of the VPC and its subnets. If you select an option with Hardware VPN Access, you will need to specify the IP address of the VPN hardware on your network. You can modify the VPC to add or remove secondary IP ranges and gateways, or add more subnets to IP ranges.

The four options are:

1.  Amazon VPC with a single public subnet only
2.  Amazon VPC with public and private subnets
3.  Amazon VPC with public and private subnets and AWS Site-to-Site VPN access
4.  Amazon VPC with a private subnet only and AWS Site-to-Site VPN access

### What are the different types of VPC endpoints available on Amazon VPC?

## Billing

[Open all](#)

### How will I be charged and billed for my use of Amazon VPC?

### What usage charges will I incur if I use other AWS services, such as Amazon S3, from Amazon EC2 instances in my VPC?

## Connectivity

[Open all](#)

### What are the connectivity options for my Amazon VPC?

You may connect your Amazon VPC to:

- The internet (via an internet gateway)
- Your corporate data center using an AWS Site-to-Site VPN connection (via the virtual private gateway)
- Both the internet and your corporate data center (utilizing both an internet gateway and a virtual private gateway)
- Other AWS services (via internet gateway, NAT, virtual private gateway, or VPC endpoints)
- Other Amazon VPCs (via VPC peering connections)

### How do I connect my VPC to the Internet?

### Are there any bandwidth limitations for Internet gateways? Do I need to be concerned about its availability? Can it be a single point of failure?

### How do instances in a VPC access the Internet?

### When is an IP address considered a Public IP address?

### How do instances without public IP addresses access the Internet?

Instances without public IP addresses can access the Internet in one of two ways:

1.  Instances without public IP addresses can route their traffic through a NAT gateway or a NAT instance to access the Internet. These instances use the public IP address of the NAT gateway or NAT instance to traverse the Internet. The NAT gateway or NAT instance allows outbound communication but doesn’t allow machines on the Internet to initiate a connection to the privately addressed instances.
2.  For VPCs with a hardware VPN connection or Direct Connect connection, instances can route their Internet traffic down the virtual private gateway to your existing datacenter. From there, it can access the Internet via your existing egress points and network security/monitoring devices.

### Can I connect to my VPC using a software VPN?

### Does traffic go over the internet when two instances communicate using public IP addresses, or when instances communicate with a public AWS service endpoint?

### How does an AWS Site-to-Site VPN connection work with Amazon VPC?

## IP Addressing

[Open all](#)

### What IP address ranges can I use within my Amazon VPC?

### How do I assign IP address ranges to Amazon VPCs?

### What IP address ranges are assigned to a default Amazon VPC?

### Can I use my IP addresses in VPC and access them over the Internet?

### How large of a VPC can I create?

### Can I change the size of a VPC?

### How many subnets can I create per VPC?

### Is there a limit on how large or small a subnet can be?

### Can I use all the IP addresses that I assign to a subnet?

### How do I assign private IP addresses to Amazon EC2 instances within a VPC?

### Can I change the private IP addresses of an Amazon EC2 instance while it is running and/or stopped within a VPC?

### If an Amazon EC2 instance is stopped within a VPC, can I launch another instance with the same IP address in the same VPC?

### Can I assign IP addresses for multiple instances simultaneously?

### Can I assign any IP address to an instance?

You can assign any IP address to your instance as long as it is:

- Part of the associated subnet's IP address range
- Not reserved by Amazon for IP networking purposes
- Not currently assigned to another interface

### Can I assign multiple IP addresses to an instance?

### Can I assign one or more Elastic IP (EIP) addresses to VPC-based Amazon EC2 instances?

## Bring Your Own IP

[Open all](#)

### What is the Bring Your Own IP feature?

### Why should I use BYOIP?

### What happens if I release a BYOIP Elastic IP?

### In which AWS Regions is BYOIP available?

### Can a BYOIP prefix be shared with multiple VPCs in the same account?

### How many IP ranges can I bring via BYOIP?

### What is the most specific prefix that I can bring via BYOIP?

### Which RIR prefixes can I use for BYOIP?

### Can I bring a reassigned or reallocated prefix?

### Can I move a BYOIP prefix from one AWS Region to another?

## IP Address Manager

[Open all](#)

### What is VPC IP Address Manager (IPAM)?

### Why should you use IPAM?

### What are the key features offered by IPAM?

AWS IPAM provides the following features:  
 

- **Allocate IP addresses for at-scale networks:** IPAM can automate IP address allocations across hundreds of accounts and VPCs based on configurable business rules.  
   
- **Monitor IP usage across your network:** IPAM can monitor IP addresses and enables you to get alerts when IPAM detects potential issues such as depleting IP addresses that can stall network’s growth or overlapping IP addresses that can result in erroneous routing.  
   
- **Troubleshoot your network:** IPAM can help you quickly identify if connectivity issues are due to IP address misconfigurations or other issues.  
   
- **Audit IP addresses:** IPAM automatically retains your IP address monitoring data (up to a maximum of three years). You can use this historical data to do retrospective analysis and audits for your network.

### What are the key components of IPAM?

The following are the key components of IPAM:

- A **scope** is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The **private scope** is intended for all private space. The **public scope** is intended for all public space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict. Within a scope, you create IPAM pools.  
   
- A **pool** is a collection of contiguous IP address ranges (or CIDRs). IPAM pools enable you to organize your IP addresses according to your routing and security needs. You can have multiple pools within a top-level pool. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each. Within IPAM pools, you allocate CIDRs to AWS resources.
- An **allocation** is a CIDR assignment from an IPAM pool to another resource or IPAM pool. When you create a VPC and choose an IPAM pool for the VPC’s CIDR, the CIDR is allocated from the CIDR provisioned to the IPAM pool. You can monitor and manage the allocation with IPAM.

### Does IPAM support Bring Your Own IPs (BYOIPs)?

### Does Amazon Provide Contiguous CIDR Blocks and how do they work with IPAM?

### Can you use Amazon Provided Contiguous IPv6 CIDR blocks without IPAM?

### Can I share my IPAM pools with other accounts?

## Topology

[Open all](#)

### Can I specify which subnet will use which gateway as its default?

## Security and Filtering

[Open all](#)

### How do I secure Amazon EC2 instances running within my VPC?

### What are the differences between security groups in a VPC and network ACLs in a VPC?

### What is the difference between stateful and stateless filtering?

### Can Amazon EC2 instances within a VPC communicate with Amazon EC2 instances not within a VPC?

### Can Amazon EC2 instances within a VPC in one region communicate with Amazon EC2 instances within a VPC in another region?

### Can Amazon EC2 instances within a VPC communicate with Amazon S3?

### Can I monitor the network traffic in my VPC?

### What is Amazon VPC flow logs?

### How can I use VPC flow logs?

### Do VPC flow logs support AWS Transit Gateway?

### Does using Flow Logs impact my network latency or performance?

### How much VPC flow logs cost?

## VPC Traffic Mirroring

[Open all](#)

### What is Amazon VPC traffic mirroring?

### Which resources can be monitored with Amazon VPC traffic mirroring ?

### What type of appliances are supported with Amazon VPC traffic mirroring?

### How is Amazon VPC traffic mirroring different from Amazon VPC flow logs?

## Amazon VPC and EC2

[Open all](#)

### Within which Amazon EC2 region(s) is Amazon VPC available?

### Can a VPC span multiple Availability Zones?

### Can a subnet span Availability Zones?

### How do I specify which Availability Zone my Amazon EC2 instances are launched in?

### How do I determine which Availability Zone my subnets are located in?

### Am I charged for network bandwidth between instances in different subnets?

### When I call DescribeInstances(), do I see all of my Amazon EC2 instances, including those in EC2-Classic and EC2-VPC?

### When I call DescribeVolumes(), do I see all of my Amazon EBS volumes, including those in EC2-Classic and EC2-VPC?

### How many Amazon EC2 instances can I use within a VPC?

### Can I use my existing AMIs in Amazon VPC?

### Can I use my existing Amazon EBS snapshots?

### Can I boot an Amazon EC2 instance from an Amazon EBS volume within Amazon VPC?

### Can I employ Amazon CloudWatch within Amazon VPC?

### Can I employ Auto Scaling within Amazon VPC?

### Can I launch Amazon EC2 Cluster Instances in a VPC?

### What are instance hostnames?

### Can I change the instance hostname of my Amazon EC2 instance?

### Can I use the instance hostnames as DNS hostnames?

## Default VPCs

[Open all](#)

### What is a default VPC?

### What are the benefits of a default VPC?

### What accounts are enabled for default VPC?

### Will I need to know anything about Amazon VPC in order to use a default VPC?

### What are the differences between instances launched in EC2-Classic and EC2-VPC?

### Do I need to have a VPN connection to use a default VPC?

### Can I create other VPCs and use them in addition to my default VPC?

### Can I create additional subnets in my default VPC, such as private subnets?

### How many default VPCs can I have?

### How many default subnets are in a default VPC?

### Can I specify which VPC is my default VPC?

### Can I specify which subnets are my default subnets?

### Can I delete a default VPC?

### Can I delete a default subnet?

### I have an existing EC2-Classic account. Can I get a default VPC?

### I really want a default VPC for my existing EC2 account. Is that possible?

### How are IAM accounts impacted by default VPC?

## EC2 Classic

[Open all](#)

### What is EC2-Classic?

### What’s changing?

### How is my account impacted by the retirement of EC2-Classic?

### What are the benefits of moving from EC2-Classic to Amazon VPC?

### How do I migrate from EC2-Classic to VPC?

To help you migrate your resources, we have published playbooks and built solutions that you will find below. To migrate, you must recreate your EC2-Classic resources in your VPC. First, you can use this [](https://github.com/aws-samples/ec2-classic-resource-finder)[](/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/)[](/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/)script to identify all resources provisioned in EC2-Classic across all regions in an account. You can then use the migration guide for the relevant AWS resources from below:

- [Instances and Security Groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html)
- [Classic Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/migrate-classic-load-balancer.html#migrate-step-by-step-classiclink)
- [Amazon Relational Database Service](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html#USER_VPC.VPC2VPC)
- [AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/vpc-ec2migration.html)
- [Amazon Redshift for migration of DC1 Clusters](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-migrating-from-dc1-to-dc2) and [for other node types](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-upgrading-ds2-cluster-ec2-classic-to-ec2-vpc)
- [AWS Data Pipeline](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-resources-vpc.html#dp-ec2classic-to-vpc) 
- [Amazon EMR](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-vpc-subnet.html) 
- [AWS OpsWorks](https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/aws-opsworks.html)

Besides the above migration guides, we are also offering a highly automated lift-and-shift (rehost) solution, AWS Application Migration Service (AWS MGN), that simplifies, expedites, and reduces the cost of migrating applications. You can find relevant resources about AWS MGN here:

- [Getting started with AWS Application Migration Service](/application-migration-service/) 
- [AWS Application Migration Service on-demand technical training](https://www.aws.training/Details/eLearning?id=71732)
- [Documentation to dive deep into AWS Application Migration Service Features and Functionalities](https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html)
- [Service Architecture and Network Architecture video](https://www.youtube.com/watch?v=ao8geVzmmRo)

For simple individual EC2 instance migrations from EC2-Classic to VPC, besides AWS MGN or the [Instances Migration Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html), you can also use the “AWSSupport-MigrateEC2 ClassicToVPC“ runbook from ”AWS Systems Manager \> Automation“. This runbooks automates the steps that are required to migrate an instance from EC2-Classic to VPC by creating an AMI of the instance in EC2-Classic, creating a new instance from the AMI in VPC, and optionally terminating the EC2-Classic instance.

If you have any questions or concerns, you can contact the AWS Support Team via [AWS Premium Support](/support).  
  
Please Note: If you have AWS resources running on EC2-Classic in multiple AWS regions, we recommend that you turn off EC2-Classic for each of those regions as soon as you have migrated all your resources to VPC in them.

### What are the important dates I should be aware of?

We will take the following two actions ahead of the August 15, 2022 retirement date:

- We will stop issuing 3-year reserved instances (RI) and 1-year RI for the EC2-Classic environment on Oct 30, 2021. RIs already in place on the EC2-Classic environment will not be affected at this time. RIs that are set to expire after 8/15/2022 will need to be modified to use the Amazon VPC environment for the remaining period of the lease. For information on how to modify your RIs, please visit our [document](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html).
- On Aug 15, 2022, we will no longer allow the creation of new instances (Spot or on-demand) or other AWS services in the EC2-Classic environment. Any workloads or services in running state will gradually loose access to all AWS services on EC2-Classic as we retire them beginning August 16, 2022.

## Elastic Network Interfaces

[Open all](#)

### Can I attach or detach one or more network interfaces to an EC2 instance while it’s running?

### Can I attach a network interface in one Availability Zone to an instance in another Availability Zone?

### Can I attach a network interface in one VPC to an instance in another VPC?

### Can I use Elastic Network Interfaces as a way to host multiple websites requiring separate IP addresses on a single instance?

### Can I detach the primary interface (eth0) on my EC2 instance?

## Peering Connections

[Open all](#)

### Can I create a peering connection to a VPC in a different region?

### Can I peer my VPC with a VPC belonging to another AWS account?

### How much do VPC peering connections cost?

### Do I need an Internet Gateway to use peering connections?

### Is VPC peering traffic within the region encrypted?

### If I delete my side of a peering connection, will the other side still have access to my VPC?

### If I peer VPC A to VPC B and I peer VPC B to VPC C, does that mean VPCs A and C are peered?

### What if my peering connection goes down?

### Are there any bandwidth limitations for peering connections?

### Is Inter-Region VPC Peering traffic encrypted?

### How do DNS translations work with Inter-Region VPC Peering?

### Can I reference security groups across an Inter-Region VPC Peering connection?

### Does Inter-Region VPC Peering support IPv6?

### Can Inter-Region VPC Peering be used with EC2-Classic Link?

## ClassicLink

[Open all](#)

### What is ClassicLink?

### What does ClassicLink cost?

### How do I use ClassicLink?

### Does the EC2-Classic instance become a member of the VPC?

### Can I use EC2 public DNS hostnames from my EC2-Classic and EC2-VPC instances to address each other, in order to communicate using private IP?

### Are there any VPCs for which I cannot enable ClassicLink?

### Can traffic from an EC2-Classic instance travel through the Amazon VPC and egress through the Internet gateway, virtual private gateway, or to peered VPCs?

### Does ClassicLink affect the access control between the EC2-Classic instance, and other instances that are in the EC2-Classic platform?

### Will ClassicLink settings on my EC2-Classic instance persist through stop/start cycles?

### Does ClassicLink allow EC2-Classic Security Group rules to reference VPC Security Groups, or vice versa?

## AWS PrivateLink

[Open all](#)

### What is AWS PrivateLink?

### How can I use AWS PrivateLink?

### Which services are currently available on AWS PrivateLink?

### Can I privately access services powered by AWS PrivateLink over AWS Direct Connect?

## Additional Questions

[Open all](#)

### Can I use the AWS Management Console to control and manage Amazon VPC?

### How many VPCs, subnets, Elastic IP addresses, and internet gateways can I create?

### Can I obtain AWS support with Amazon VPC?

### Can I use ElasticFox with Amazon VPC?

## VPC Encryption Controls

[Open all](#)

### What is VPC Encryption Controls?

### What are the two modes of operation?

### Who is this feature designed for?

### How does VPC Encryption Controls work?

### What does Monitor mode allow me to do?

### How can I track encryption status in Monitor mode?

Through:

- VPC flow logs with the encryption-status field
- Console dashboard
- GetVpcResourcesBlockingEncryptionEnforcement command

### Do existing flow logs automatically show encryption status?

### What happens when Enforce mode is enabled?

### Can I enable Enforce mode on an existing VPC immediately?

No, you must first:

- Enable Monitor mode
- Identify non-compliant resources
- Modify or create exclusions for non-compliant resources
- Then switch to Enforce mode

### What if I need to run non-compliant resources in Enforce mode?

### How do I transition from Monitor to Enforce mode?

Follow these steps:

- Review Flow Logs and resource compliance
- Plan necessary resource migrations
- Configure required exclusions when switching to Enforce mode

### Can I switch back from Enforce to Monitor mode?

### How do I verify my VPC is ready for Enforce mode?

### What are the supported exclusions?

There are eight supported exclusions:

- Internet Gateway
- NAT Gateway
- Egress-only Internet Gateway
- VPC Peering connections to encryption un-enforced VPCs
- Virtual Private Gateway
- Lambda functions
- VPC Lattice
- Elastic File System

### What are the possible encryption status values in VPC Flow Logs?

### How can I encrypt traffic between my VPCs in a region?

### How do I enable encryption on a Transit Gateway?

### How does Transit Gateway support encryption with VPC Encryption Controls?

### Will traffic be encrypted end-to-end between VPCs connected via TGW with Encryption Support enabled?

### Can I connect an encryption-enforced VPC to a non-enforced VPC through TGW?

### How do I migrate existing TGW connections to use encryption?

### Can I gradually migrate VPCs to encryption while using TGW?

### Can I connect VPCs belonging to different accounts using Private Link (VPC Endpoints) and be guaranteed that all traffic is encrypted when using VPC Encryption Controls?

## Getting started with Amazon VPC

[](/vpc/details/)

Getting started

## Learn more about Amazon VPC

Visit the product detail page

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/migration/transfer/approved/images/9a605cb9-314c-47f4-a88a-ee7d5ecee185.fe6c7bed51dab1c1c9c4467fa326610dd1a9a7a2.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Getting started

## Ready to get started?

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](/contact-us/)

Contact us

## Have more questions?

Contact us

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/2c50fb03-8156-4fb1-9937-1dfed809a9e2.a95880625757ad7557ef377c5654264464059a6b.jpeg)
