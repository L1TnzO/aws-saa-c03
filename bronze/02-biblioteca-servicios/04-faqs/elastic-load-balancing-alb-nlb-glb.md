[Skip to main content](#aws-page-content-main)

Elastic Load Balancing

- [Overview](/elasticloadbalancing/)
- Features
- [Pricing](/elasticloadbalancing/pricing/)
- [Getting Started](/elasticloadbalancing/getting-started/)
- [FAQs](/elasticloadbalancing/faqs/)
- More

# Elastic Load Balancing FAQs

- [General](#general--1jw7xzg)
  3
- [Application Load Balancer](#application-load-balancer--1jw7xzg)
  53
- [Network Load Balancer](#network-load-balancer--1jw7xzg)
  47
- [Gateway Load Balancer](#gateway-load-balancer--1jw7xzg)
  31
- [Classic Load Balancer](#classic-load-balancer--1jw7xzg)
  16

## General

[Open all](#)

### How do I decide which load balancer to select for my application?

### Can I privately access Elastic Load Balancing APIs from my Amazon Virtual Private Cloud (VPC) without using public IPs?

### Is there an SLA for load balancers?

## Application Load Balancer

[Open all](#)

### Which operating systems does an Application Load Balancer support?

### Which protocols does an Application Load Balancer support?

### Is HTTP/2 Supported on an Application Load Balancer?

### How can I use static IP or PrivateLink on my Application Load Balancer?

### What TCP ports can I use to load balance?

### Is WebSockets supported on an Application Load Balancer?

### Is Request tracing supported on an Application Load Balancer?

### Does a Classic Load Balancer have the same features and benefits as an Application Load Balancer?

### Can I configure my Amazon EC2 instances to accept traffic only from my Application Load Balancers?

### Can I configure a security group for the front end of an Application Load Balancer?

### Can I use the existing APIs that I use with my Classic Load Balancer with an Application Load Balancer?

### How do I manage both Application and Classic Load Balancers simultaneously?

### Can I convert my Classic Load Balancer to an Application Load Balancer (and vice-versa)?

### Can I migrate to Application Load Balancer from Classic Load Balancer?

### Can I use an Application Load Balancer as a Layer-4 load balancer?

### Can I use a single Application Load Balancer for handling HTTP and HTTPS requests?

### Can I get a history of Application Load Balancing API calls made on my account for security analysis and operational troubleshooting purposes?

### Does an Application Load Balancer support HTTPS termination?

### What are the steps to get a SSL certificate?

### How does an Application Load Balancer integrate with AWS Certificate Manager (ACM)?

### Is back-end server authentication supported with an Application Load Balancer?

### How can I enable Server Name Indication (SNI) for my Application Load Balancer?

### Can I associate multiple certificates for the same domain to a secure listener?

Yes, you can associate multiple certificates for the same domain to a secure listener. For example, you can associate:

- ECDSA and RSA certificates
- Certificates with different key sizes (e.g. 2K and 4K) for SSL/TLS certificates
- Single-Domain, Multi-Domain (SAN) and Wildcard certificates

### Is IPv6 supported with an Application Load Balancer?

### How do you set up rules on an Application Load Balancer?

### Are there limits on the resources for an Application Load Balancer?

### How can I protect my web applications behind a load balancer from web attacks?

### Can I load balance to any arbitrary IP address?

### How can I load balance applications distributed across a VPC and on-premises location?

### How can I load balance to EC2-Classic instances?

### How do I enable cross-zone load balancing in Application Load Balancer?

### When should I authenticate users using the Application Load Balancer’s integration with Amazon Cognito vs. the Application Load Balancers’ native support for OpenID Connect (IODC) identity providers (IdPs)?

You should use authentication through Amazon Cognito if:

- You want to provide flexibility to your users to authenticate via social network identities (Google, Facebook, and Amazon) or enterprise identities (SAML) or via your own user directories provided by Amazon Cognito’s User Pool.
- You are managing multiple identity providers including OpenID Connect and want to create a single authentication rule in Application Load Balancer (ALB) that can use Amazon Cognito to federate your multiple identity providers.
- You need to actively manage user profiles with one or more social or OpenID Connect identity providers from one central place. For example, you can put users in groups and add custom attributes to represent user status and control access for paid users.

Alternatively, if you have invested in developing custom IdP solutions and simply want to authenticate with a single OpenID Connect-compatible identity provider, you may prefer using Application Load Balancer’s native OIDC solution.

### What type of redirects does Application Load Balancer support?

### What content types does ALB support for the message body of fixed-response action?

### How does AWS Lambda invocation via Application Load Balancer work?

### Does Lambda invocation via Application Load Balancer support requests over both HTTP and HTTPS protocol?

### In which AWS Regions can I use Lambda functions as targets with the Application Load Balancer?

### Is the Application Load Balancer available in AWS Local Zones?

### How does Application Load Balancer pricing work?

### What is a Load Balancer Capacity Unit (LCU)?

### Will I be billed on Classic Load Balancers by LCU?

### How do I know the number of LCUs an Application Load Balancer is using?

### Will I be billed on all the dimensions in an LCU?

### Will I be billed on partial LCUs?

### Is a free tier offered on an Application Load Balancer for new AWS accounts?

### Can I use a combination of Application Load Balancer and Classic Load Balancer as part of my free tier?

### What are rule evaluations?

### How does the LCU billing work with different certificate types and key sizes?

### Am I charged for regional AWS data transfer when enabling cross-zone load balancing in Application Load Balancer?

### Is user authentication in Application Load Balancer charged separately?

### How do you charge for Application Load Balancer usage with AWS Lambda targets?

### How can I differentiate the bytes processed by Lambda targets versus bytes processed by other targets (Amazon EC2, containers, and on-premises servers)?

### How does the LCU billing work for ALB Target Optimizer?

For traffic to target groups that enable target optimizer, an LCU consists of:

- 12.5 new connections per second.
- 1500 active connections per minute.
- 0.5 GB per hour for Amazon EC2 instances, containers, and IP addresses as targets.
- 500 rule evaluations per second.

## Network Load Balancer

[Open all](#)

### Can I create a TCP or UDP (Layer 4) listener for my Network Load Balancer?

### What are the key features available with the Network Load Balancer?

### Can Network Load Balancer process both TCP and UDP protocol traffic on the same port?

### How does Network Load Balancer compare to what I get with the TCP listener on a Classic Load Balancer?

### Can I migrate to Network Load Balancer from Classic Load Balancer?

### Are there limits on the resources for my Network Load Balancer?

### Can I use the AWS Management Console to set up my Network Load Balancer?

### Can I use the existing API for Classic Load Balancers for my Network Load Balancers?

### Can I create my Network Load Balancer in a single Availability Zone?

### Does Network Load Balancer support DNS regional and zonal fail-over?

### Can I have a Network Load Balancer with a mix of ELB-provided IPs and Elastic IPs or assigned private IPs?

### Can I assign more than one EIP to my Network Load Balancer in each subnet?

### If I remove/delete a Network Load Balancer what will happen to the Elastic IP addresses that were associated with it?

### Does Network Load Balancer support internal load balancers?

### Can the internal Network Load balancer support more than one private IP in each subnet?

### Can I set up Websockets with my Network Load Balancer?

### Can I load balance to any arbitrary IP address?

### Can I use Network Load Balancer to setup AWS PrivateLink?

### What is a UDP flow?

### What is the idle timeout supported by Network Load Balancer?

### What is the benefit of targeting containers behind a load balancer with IP addresses instead of instance IDs?

### How can I load balance applications distributed across a VPC and on-premises location?

### How can I load balance to EC2-Classic instances?

### How do I enable cross-zone load balancing in Network Load Balancer?

### Am I charged for regional AWS data-transfer when I enable cross-zone load balancing in Network Load Balancer?

### Is there any impact of cross-zone load balancing on Network Load Balancer limits?

### Does Network Load Balancer support TLS termination?

### Is source IP is preserved when terminating TLS on Network Load Balancer?

### What are the steps to get a SSL certificate?

### How can I enable Server Name Indication (SNI) for my Network Load Balancer?

### How does the Network Load Balancer integrate with AWS Certificate Manager (ACM) or Identity Access Manager (IAM)?

### Is back-end server authentication supported with Network Load Balancer?

### What are the certificate types supported by Network Load Balancer?

### In which AWS Regions is TLS Termination on Network Load Balancer supported?

### How does Network Load Balancer pricing work?

### What is a Load Balancer Capacity Unit (LCU)?

### What are the LCU metrics for TCP traffic on Network Load Balancer?

The LCU metrics for the TCP traffic are as follows:

- 800 new TCP connections per second.
- 100,000 active TCP connections (sampled per minute).
- 1 GB per hour for Amazon EC2 instances, containers, and IP addresses as targets.

### What are the LCU metrics for UDP traffic on Network Load Balancer?

The LCU metrics for the UDP traffic are as follows:

- 400 new flows per second.
- 50,000 active UDP flows (sampled per minute).
- 1 GB per hour for Amazon EC2 instances, containers, and IP addresses as targets.

### What are the LCU metrics for TLS traffic on Network Load Balancer?

The LCU metrics for the TLS traffic are as follows:

- 50 new TLS connections per second.
- 3,000 active TLS connections (sampled per minute).
- 1 GB per hour for Amazon EC2 instances, containers, and IP addresses as targets.

### Will I be billed on all the dimensions (Processed Bytes, New Flows and Active Flows)?

### Is new connections/flows per sec same as requests/sec?

### Will I be billed on Classic Load Balancers by LCU?

### How do I know the number of LCUs a Network Load Balancer is using?

### Will I be billed on all the dimensions in an LCU?

### Will I be billed on partial LCUs?

### Is a free tier offered on a Network Load Balancer for new AWS accounts?

### Can I use a combination of Network Load Balancer, Application Load Balancer and Classic Load Balancer as part of my free tier?

## Gateway Load Balancer

[Open all](#)

### When should I use Gateway Load Balancer, as opposed to Network Load Balancer or Application Load Balancer?

### Is Gateway Load Balancer deployed per Region or per Availability Zone (AZ)?

### What are the key features available with the Gateway Load Balancer?

### Does Gateway Load Balancer perform TLS termination?

### Does Gateway Load Balancer maintain application state?

### How does Gateway Load Balancer define a flow?

### When should I use 5-tuple, 3-tuple and 2-tuple stickiness on Gateway Load Balancer?

### What is the idle timeout supported by Gateway Load Balancer?

### Does GWLB support fragmentation of packets?

### How does Gateway Load Balancer handle the failure of one virtual appliance instance in a single Availability Zone?

### How does Gateway Load Balancer handle the failure of all virtual appliances within a single AZ?

### Can I configure an appliance to be a target for more than one Gateway Load Balancer?

### What type of listener can I create for my Gateway Load Balancer?

### Are there limits on the resources for my Gateway Load Balancer?

### Can I use the AWS Management Console to set up my Gateway Load Balancer?

### Can I create my Gateway Load Balancer in a single Availability Zone?

### How do I enable cross-zone load balancing in Gateway Load Balancer?

### Am I charged for AWS data-transfer when I enable cross-zone load balancing in Gateway Load Balancer?

### Is there any impact of cross-zone load balancing on Gateway Load Balancer limits?

### How does Gateway Load Balancer pricing work?

### What is a Load Balancer Capacity Unit (LCU)?

### What is the LCU metrics for the Gateway Load Balancer?

The LCU metrics for the TCP traffic is as follows:

- 600 new flows (or connections) per second.
- 60,000 active flows (or connections) (sampled per minute).
- 1 GB per hour for EC2 instances, containers and IP addresses as targets.

### Will I be billed on all the dimensions (Processed Bytes, New Flows and Active Flows)?

### Is new flows (or connections) per second same as requests/sec?

### How do I know the number of LCUs a Gateway Load Balancer is using?

### Will I be billed on partial LCUs?

### Why do I need a Gateway Load Balancer Endpoint?

### How do Gateway Load Balancer Endpoints help with centralization?

### How do Gateway Load Balancer Endpoints work?

### How are PrivateLink Interface endpoints different than Gateway Load Balancer Endpoints?

### How many Gateway Load Balancer Endpoints can I connect to one Gateway Load Balancer?

## Classic Load Balancer

[Open all](#)

### Which operating systems does the Classic Load Balancer support?

### Which protocols does the Classic Load Balancer support?

### What TCP ports can I load balance?

You can perform load balancing for the following TCP ports:

- \[EC2-VPC\] 1-65535
- \[EC2-Classic\] 25, 80, 443, 465, 587, 1024-65535

### Does the Classic Load Balancer support IPv6 traffic?

### Can I configure my Amazon EC2 instances to only accept traffic from Classic Load Balancers?

### Can I configure a security group for the front-end of Classic Load Balancers?

### Can I use a single Classic Load Balancer for handling HTTP and HTTPS requests?

### How many connections will my load balanced Amazon EC2 instances need to accept from each Classic Load Balancer?

### Can I load balance Amazon EC2 instances launched using a Paid AMI?

### Can I use Classic Load Balancers in Amazon Virtual Private Cloud?

### Can I get a history of Classic Load Balancer API calls made on my account for security analysis and operational troubleshooting purposes?

### Do Classic Load Balancers support SSL termination?

### What are the steps to get a SSL certificate?

### How do Classic Load Balancers integrate with AWS Certificate Manager (ACM)?

### How do I enable cross-zone load balancing in Classic Load Balancer?

### Am I charged for regional AWS data-transfer when I enable cross-zone load balancing in Classic Load Balancer?

## Get started

[](/elasticloadbalancing/pricing/)

Pricing

## Learn more about Elastic Load Balancing pricing

Learn more

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/migration/transfer/approved/images/9a605cb9-314c-47f4-a88a-ee7d5ecee185.fe6c7bed51dab1c1c9c4467fa326610dd1a9a7a2.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Getting started

## Sign up for a free account

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](https://console.aws.amazon.com/ec2/v2/home)

Console

## Start building in the console

Sign in

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/2c50fb03-8156-4fb1-9937-1dfed809a9e2.a95880625757ad7557ef377c5654264464059a6b.jpeg)
