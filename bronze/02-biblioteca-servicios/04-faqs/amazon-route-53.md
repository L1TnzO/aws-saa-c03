[Skip to main content](#aws-page-content-main)

Amazon Route 53

- [Overview](/route53/)
- Features
- [Pricing](/route53/pricing/)
- [Resources](/route53/resources/)
- [FAQs](/route53/faqs/)

# Amazon Route 53 FAQs

- [Getting Started](#getting-started--1737wdr)
  14
- [Domain Name Systems (DNS)](#domain-name-systems-dns--1737wdr)
  24
- [DNS Routing Policies](#dns-routing-policies--1737wdr)
  11
- [Traffic Flow](#traffic-flow--1737wdr)
  10
- [Private DNS](#private-dns--1737wdr)
  10
- [Health Checks and DNS Failover](#health-checks-and-dns-failover--1737wdr)
  32
- [Domain Name Registration](#domain-name-registration--1737wdr)
  23
- [Route 53 VPC Resolver](#route-53-vpc-resolver--1737wdr)
  11
- [Route 53 Resolver DNS Firewall](#route-53-resolver-dns-firewall--1737wdr)
  7
- [Route 53 Profiles](#route-53-profiles--1737wdr)
  7
- [Route 53 Global Resolver](#route-53-global-resolver--1737wdr)
  20

## Getting Started

[Open all](#)

### What is a Domain Name System (DNS) Service?

### What is Amazon Route 53?

### What can I do with Amazon Route 53?

### How do I get started with Amazon Route 53?

Amazon Route 53 has a simple web service interface that lets you get started in minutes. Your DNS records are organized into “hosted zones” that you configure with the AWS Management Console or Route 53’s API. To use Route 53, you simply:

- Subscribe to the service by clicking on the sign-up button on the [service page](/route53/).
- If you already have a domain name: 
  - Use the AWS Management Console or the CreateHostedZone API to create a hosted zone that can store DNS records for your domain. Upon creating the hosted zone, you receive four Route 53 name servers across four different Top-Level Domains (TLDs) to help ensure a high level of availability.
  - Additionally, you can transfer your domain name to Route 53’s management via either the AWS Management Console or the API.
- If you don't already have a domain name: 
  - Use the AWS Management Console or the API to register your new domain name.
  - Route 53 automatically creates a hosted zone that stores DNS records for your domain. You also receive four Route 53 name servers across four different Top-Level Domains (TLDs) to help ensure a high level of availability.
- Your hosted zone will be initially populated with a basic set of DNS records, including four virtual name servers that will answer queries for your domain. You can add, delete or change records in this set by using the AWS Management Console or by calling the ChangeResourceRecordSet API. A list of supported DNS records is available [here](/route53/faqs/#which_dns_records_are_supported).
- If your domain name is not managed by Route 53, you will need to inform the registrar with whom you registered your domain name to update the name servers for your domain to the ones associated with your hosted zone. If your domain name is managed by Route 53 already, your domain name will be automatically associated with the name servers hosting your zone.

### How does Amazon Route 53 provide high availability and low latency?

### What are the DNS server names for the Amazon Route 53 service?

### What is the difference between a Domain and a Hosted Zone?

### What is the price of Amazon Route 53?

### What types of access controls can I set for the management of my Domains on Amazon Route 53?

### I have subscribed for Amazon Route 53 but when I try to use the service it says "The AWS Access Key ID needs a subscription for the service."

### When is my hosted zone charged?

### Why do I see two charges for the same hosted zone in the same month?

### Does Amazon Route 53 provide query logging capability?

### Does Amazon Route 53 offer a Service Level Agreement (SLA)?

## Domain Name Systems (DNS)

[Open all](#)

### Does Amazon Route 53 use an anycast network?

### Is there a limit to the number of hosted zones I can manage using Amazon Route 53?

### How can I import a zone into Route 53?

### Can I create multiple hosted zones for the same domain name?

### Does Amazon Route 53 also provide website hosting?

### Which DNS record types does Amazon Route 53 support?

Amazon Route 53 currently supports the following DNS record types:

- A (address record)
- AAAA (IPv6 address record)
- CNAME (canonical name record)
- CAA (certification authority authorization)
- MX (mail exchange record)
- NAPTR (name authority pointer record)
- NS (name server record)
- PTR (pointer record)
- SOA (start of authority record)
- SPF (sender policy framework)
- SRV (service locator)
- TXT (text record)
- Amazon Route 53 also offers alias records, which are an Amazon Route 53-specific extension to DNS. You can create alias records to route traffic to selected AWS resources, including Amazon Elastic Load Balancing load balancers, Amazon CloudFront distributions, AWS Elastic Beanstalk environments, API Gateways, VPC interface endpoints, and Amazon S3 buckets that are configured as websites. Alias record typically have a type of A or AAAA, but they work like a CNAME record. Using an alias record, you can map your record name (example.com) to the DNS name for an AWS resource (elb1234.elb.amazonaws.com). Resolvers see the A or AAAA record and the IP address of the AWS resource.

We anticipate adding additional record types in the future.

### Does Amazon Route 53 support wildcard entries? If so, what record types support them?

### What is the default TTL for the various record types and can I change these values?

### Can I use 'Alias' records with my sub-domains?

### Are changes to resource record sets transactional?

### Can I associate multiple IP addresses with a single record?

### How quickly will changes I make to my DNS settings on Amazon Route 53 propagate globally?

Amazon Route 53 is designed to propagate updates you make to your DNS records to its world-wide network of authoritative DNS servers within 60 seconds under normal conditions. A change is successfully propagated world-wide when the API call returns an INSYNC status listing.

Note that caching DNS resolvers are outside the control of the Amazon Route 53 service and will cache your resource record sets according to their time to live (TTL). The INSYNC or PENDING status of a change refers only to the state of Route 53’s authoritative DNS servers.

### Can I see a history of my changes and other operations on my Route 53 resources?

### Can I use AWS CloudTrail logs to roll back changes to my hosted zones?

No. We recommend that you do not use CloudTrail logs to roll back changes to your hosted zones, because reconstruction of your zone change history using your CloudTrail logs may be incomplete.

Your AWS CloudTrail logs can be used for the purposes of security analysis, resource change tracking, and compliance auditing.

### Does Amazon Route 53 support DNSSEC?

### Does Amazon Route 53 support IPv6?

### Can I point my zone apex (example.com versus www.example.com) at my Elastic Load Balancer?

### Can I point my zone apex (example.com versus www.example.com) at my website hosted on Amazon S3?

### Can I point my zone apex (example.com versus www.example.com) at my Amazon CloudFront distribution?

### Can I point my zone apex (example.com versus www.example.com) at my AWS Elastic Beanstalk environment?

### Can I point my zone apex (example.com versus www.example.com) at my Amazon API Gateway?

### Can I point my zone apex (example.com versus www.example.com) at my Amazon VPC endpoint?

### How can I use Amazon Route 53 with Amazon Simple Storage Service (Amazon S3) and Amazon CloudFront?

For websites delivered via Amazon CloudFront or static websites hosted on Amazon S3, you can use the Amazon Route 53 service to create an Alias record for your domain which points to the CloudFront distribution or S3 website bucket. For S3 buckets not configured to host static websites, you can create a CNAME record for your domain and the S3 bucket name. In all cases, note that you will also need to configure your S3 bucket or your CloudFront distribution respectively with the alternate domain name entry to completely establish the alias between your domain name and the AWS domain name for your bucket or distribution.

For CloudFront distributions and S3 buckets configured to host static websites, we recommend creating an ‘Alias’ record that maps to your CloudFront distribution or S3 website bucket, instead of using CNAMEs. Alias records have two advantages: first, unlike CNAMEs, you can create an Alias record for your zone apex (e.g. example.com, instead of www.example.com), and second, queries to Alias records are free of charge.

### Why does the DNS Query Test Tool return a response different than the dig or nslookup commands?

## DNS Routing Policies

[Open all](#)

### Does Amazon Route 53 support Weighted Round Robin (WRR)?

### What is Amazon Route 53's Latency Based Routing (LBR) feature?

### How do I get started using Amazon Route 53's Latency Based Routing (LBR) feature?

### What is the price for Amazon Route 53's Latency Based Routing (LBR) feature?

### What is Amazon Route 53's Geo DNS feature?

### How do I get started using Amazon Route 53's Geo DNS feature?

### When using Geo DNS, do I need a "global" record? When would Route 53 return this record?

### Can I have a Geo DNS record for a continent and different Geo DNS records for countries within that continent? Or a Geo DNS record for a country and Geo DNS records for states within that country?

### What is the price for Route 53's Geo DNS feature?

### What is the difference between Latency Based Routing and Geo DNS?

### Does Amazon Route 53 support multiple values in response to DNS queries?

## Traffic Flow

[Open all](#)

### What is Amazon Route 53 Traffic Flow?

### What is the difference between a traffic policy and a policy record?

### Can I use the same policy to manage routing for more than one DNS name?

### Can I create an Alias record pointing to a DNS name that is managed by a traffic policy?

### Is there a charge for traffic policies that don’t have a policy record?

### How am I billed for using Amazon Route 53 Traffic Flow?

### What are the advanced query types supported in Amazon Route 53 Traffic Flow?

### How does a traffic policy using geoproximity rule route DNS traffic?

### How does the geoproximity bias value of an endpoint affect DNS traffic routing to other endpoints?

### Can I use bias for other Traffic Flow rules?

## Private DNS

[Open all](#)

### What is Private DNS?

### Can I use Amazon Route 53 to manage my organization’s private IP addresses?

### How do I set up Private DNS?

### Do I need connectivity to the outside Internet in order to use Private DNS?

### Can I still use Private DNS if I’m not using VPC?

### Can I use the same private Route 53 hosted zone for multiple VPCs?

### Can I associate VPCs and private hosted zones that I created under different AWS accounts?

### Will Private DNS work across AWS regions?

### Can I configure DNS Failover for Private DNS hosted zones?

### Can I use Private DNS to block domains and DNS names that I don’t want to be reached from within my VPC?

## Health Checks and DNS Failover

[Open all](#)

### What is DNS Failover?

### How do I get started with DNS Failover?

### Does DNS Failover support Elastic Load Balancers (ELBs) as endpoints?

### Can I configure a backup site to be used only when a health check fails?

### What DNS record types can I associate with Route 53 health checks?

### Can I health check an endpoint if I don’t know its IP address?

### One of my endpoints is outside AWS. Can I set up DNS Failover on this endpoint?

### If failover occurs and I have multiple healthy endpoints remaining, will Route 53 consider the load on my healthy endpoints when determining where to send traffic from the failed endpoint?

### How many consecutive health check observations does an endpoint need to fail to be considered “failed”?

### When my failed endpoint becomes healthy again, how is the DNS failover reversed?

### What is the interval between health check observations?

### How much load should I expect a health check to generate on my endpoint (for example, a web server)?

### Do Route 53 health checks follow HTTP redirects?

### What is the sequence of events when failover happens?

### Do I need to adjust the TTL for my records in order to use DNS Failover?

### What happens if all of my endpoints are unhealthy?

### Can I use DNS Failover without using Latency Based Routing (LBR)?

### Can I configure a health check on a site accessible only via HTTPS?

### Do HTTPS health checks validate the endpoint’s SSL certificate?

### Do HTTPS health checks support Server Name Indication (SNI)?

### How can I use health checks to verify that my web server is returning the correct content?

### How do I see the status of a health check that I’ve created?

### How can I measure the performance of my application’s endpoints using Amazon Route 53?

### How can I be notified if one of my endpoints starts failing its health check?

### I created an alarm for my health check, but I need to re-send the confirmation email for the alarm's SNS topic. How can I re-send this email?

### I’m using DNS Failover with Elastic Load Balancers (ELBs) as endpoints. How can I see the status of these endpoints?

### For Alias records pointing to Amazon S3 Website buckets, what is being health checked when I set Evaluate Target Health to “true”?

### What is the cost to use CloudWatch metrics for my Route 53 health checks?

### Can I configure DNS Failover based on internal health metrics, such as CPU load, network, or memory?

### My web server is receiving requests from a Route 53 health check that I did not create. How can I stop these requests?

### If I specify a domain name as my health check target, will Amazon Route 53 check over IPv4 or IPv6?

### Where can I find the IPv6 address ranges for Amazon Route 53’s DNS servers and health checkers?

## Domain Name Registration

[Open all](#)

### Can I register domain names with Amazon Route 53?

### What Top Level Domains (“TLDs”) do you offer?

### How can I register a domain name with Route 53?

### How long does it take to register a domain name?

### How long is my domain name registered for?

### What information do I need to provide to register a domain name?

### Why do I need to provide personal information to register a domain?

### Does Route 53 offer privacy protection for domain names I have registered?

### Where can I find the requirements for specific TLDs?

### What name servers are used to register my domain name?

### Will I be charged for my name servers?

### What is Amazon Registrar, Inc. and what is a registrar of record?

### Who is Gandi?

### Which top-level domains does Amazon Route 53 register through Amazon Registrar and which ones does it register through Gandi?

### What is Whois? Why is my information shown in Whois?

### How do I transfer my domain name to Route 53?

### How do I transfer my existing domain name registration to Amazon Route 53 without disrupting my existing web traffic?

### How do I check on the status of my transfer request?

### What do I do if my transfer wasn’t successful?

### How do I transfer my domain name to a different registrar?

### Is there a limit to the number of domains I can manage using Amazon Route 53?

### Does Amazon Route 53 DNS support DNSSEC?

### How do I transfer a domain registration that has DNSSEC enabled to Amazon Route 53?

## Route 53 VPC Resolver

[Open all](#)

### What is Amazon Route 53 VPC Resolver?

### What is recursive DNS?

### What are conditional forwarding rules?

### What are Route 53 Resolver endpoints?

### How do I share rules across accounts?

### What happens if I decide to stop sharing rules with other accounts?

### What regions are available for Route 53 VPC Resolver?

### Does regional support for Route 53 VPC Resolver mean that all of Amazon Route 53 is now regional?

### How can I use Route 53 VPC Resolver on Outposts?

### How do I get started with Route 53 VPC Resolver?

### Does Route 53 Resolver endpoints support DNS over HTTPS (DoH)?

## Route 53 Resolver DNS Firewall

[Open all](#)

### What is Amazon Route 53 Resolver DNS Firewall?

### When should I use Route 53 Resolver DNS Firewall?

### How does Amazon Route 53 Resolver DNS Firewall differ from other firewall offerings on AWS and the AWS Marketplace?

### Can Amazon Route 53 Resolver DNS Firewall manage security across multiple AWS accounts?

### How much does Amazon Route 53 Resolver DNS Firewall cost?

### Which AWS tools can I use to log and monitor my Amazon Route 53 Resolver DNS Firewall activity?

### How do Amazon Route 53 Resolver 53 DNS Firewall and AWS Network Firewall differ in protection against malicious DNS query threats?

## Route 53 Profiles

[Open all](#)

### What are Route 53 Profiles?

### Are Route 53 Profiles integrated with AWS Resource Access Manager (AWS RAM)?

### Can I set permissions on Route 53 Profiles such that only certain users, like administrators, can modify them?

### How many VPCs can be associated to a single profile?

### Can I create more than one Route 53 Profile per AWS account?

### What Route 53 resources and configurations can I manage using Route 53 Profiles?

### Can I share a Route 53 Profile across AWS Regions?

## Route 53 Global Resolver

[Open all](#)

### What’s the difference between Global Resolver and VPC Resolver?

### What is Route 53 Global Resolver?

### Who should use Route 53 Global Resolver?

### Why should customers use Route 53 Global Resolver?

### How do customers get started?

### Can Global Resolver be used with VPN? 

### Is Global Resolver a global service?

### How can customers authenticate their end user devices with Global Resolver?

### How does token-based authentication work?

### How does ACL-based allowlisting work?

### How does DNS filtering work in Global Resolver?

### What are Managed Domain Lists?

### Does Global Resolver help block advanced DNS threats?

### Can customers resolve private hosted zones (PHZs) on Amazon VPCs through Global Resolver? 

### Does Global Resolver support Domain Name System Security Extensions (DNSSEC)?

### Which regions will be supported by Global Resolver?

### Will EDNS Client Subnet be supported?

### How will Global Resolver mitigate DDoS threats?

### Do customers need to separately onboard with related Route 53 services before using Global Resolver?

### Can I add or remove AWS Regions from my Global Resolver configuration?

## Get started

[](/route53/pricing/)

Pricing

## Learn more about Amazon Route 53 pricing

Learn more

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/management-and-governance/approved/images/66ac755f-b405-4320-a583-293f737525ff.2bf413a16b287b508ea92730e9ad77a892ce29d5.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html?nc2=h_ct&src=header_signup)

Getting started

## Sign up for a free account

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](https://console.aws.amazon.com/route53/home)

Console

## Start building in the console

Sign in

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/2c50fb03-8156-4fb1-9937-1dfed809a9e2.a95880625757ad7557ef377c5654264464059a6b.jpeg)
