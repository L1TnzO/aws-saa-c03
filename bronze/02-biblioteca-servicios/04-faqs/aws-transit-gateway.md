[Skip to main content](#aws-page-content-main)

AWS Transit Gateway

- [Overview](/transit-gateway/)
- [Features](/transit-gateway/features/)
- [Pricing](/transit-gateway/pricing/)
- [Resources](/transit-gateway/resources/)
- [FAQs](/transit-gateway/faqs/)
- More

# AWS Transit Gateway FAQs

- [General](#general--1hs32zh)
  12
- [Performance and limits](#performance-and-limits--1hs32zh)
  1
- [Security and compliance](#security-and-compliance--1hs32zh)
  1
- [Feature interoperability](#feature-interoperability--1hs32zh)
  8
- [Network Manager](#network-manager--1hs32zh)
  17

## General

[Open all](#)

### In which AWS Regions is AWS Transit Gateway available?

### How do I control which Amazon Virtual Private Clouds (VPCs) can communicate with each other?

### How does routing work in AWS Transit Gateway?

### How are routes propagated into the AWS Transit Gateway?

There are 2 ways that routes get propagated in the AWS Transit Gateway:

1.  *Routes propagated to/from on-premises networks*: When you connect VPN or Direct Connect Gateway, routes will propagate between the AWS Transit Gateway and your on-premises router using Border Gateway Protocol (BGP).
2.  *Routes Propagated to/from Amazon VPCs*:  When you attach an Amazon VPC to an AWS Transit Gateway or resize an attached Amazon VPC, the Amazon VPC Classless Inter-Domain Routing (CIDR) will propagate into the AWS Transit Gateway route table using internal APIs (not BGP). CIDR is a method for allocating IP addresses and IP routing to slow the growth of routing tables on routers across the Internet, and to help slow the rapid exhaustion of IPv4 addresses. Routes in the AWS Transit Gateway route table will not be propagated to the Amazon VPC’s route table. The VPC owner needs to create a static route to send Traffic to the AWS Transit Gateway.

Peering attachments between Transit Gateways do not support route propagation. You need to create static routes in Transit gateway route tables to send traffic on peering attachments.

### Can I connect Amazon VPCs with identical CIDRs?

### What is AWS Transit Gateway Connect?

### Which AWS partners support AWS Transit Gateway Connect?

### What types of appliances work with AWS Transit Gateway Connect?

### Can I create Connect attachments with an existing AWS Transit Gateway?

### Does AWS Transit Gateway Connect support static routes?

### Are the BGP sessions established over the GRE tunnel?

### Can I associate a route table to the Connect attachment?

## Performance and limits

[Open all](#)

### What are the default limits or quotas for AWS Transit Gateway?

## Security and compliance

[Open all](#)

### With which compliance programs does AWS Transit Gateway conform?

## Feature interoperability

[Open all](#)

### Can I associate my AWS Transit Gateway with a Direct Connect gateway in a different account?

### I want to associate my Transit Gateway to a Direct Connect gateway. Can I use the same Autonomous System Number (ASN) for the Direct Connect gateway and the Transit Gateway?

### Which attachment types can I use to route multicast traffic?

### Does AWS Transit Gateway Connect support IPv6?

### Can I use different address families for the GRE tunnel and BGP addresses?

### Does AWS Transit Gateway support IGMP for multicast?

### Can I have both IGMP and static members in the same multicast domain?

### Can I share a Transit Gateway for multicast?

## Network Manager

[Open all](#)

### What is AWS Transit Gateway Network Manager?

### How do I set up AWS Transit Gateway Network Manager?

Use the following steps to set up and manage Transit Gateway Network Manager:

- *Create a new ‘global network’*, initially an empty object.
- *Register your AWS Transit Gateways* from any AWS Region.
- *Add on-premises resources/cloud resources*: Input information about your on-premises/cloud devices, sites, links, connections, Connect peers and the Site-to-Site VPN connections with which they are associated.
- *Monitor your global network*: through Network Manager’s visualizations, events, and metrics.

### Which AWS partners are supporting AWS Transit Gateway Network Manager?

### What is a global network?

### What resources are automatically included in the global network when I register an AWS Transit Gateway?

### How can I visualize the resources and connections in my global network?

### How does AWS Transit Gateway Network Manager help me monitor my global network?

### What metrics are available in AWS Transit Gateway Network Manager?

### What network events are available in AWS Transit Gateway Network Manager?

### How do AWS partners support AWS Transit Gateway Network Manager?

### How do I automatically connect using a partner SD-WAN device?

### What is Route Analyzer?

### Does Route Analyzer send data packets to analyze the route?

### Can I use the Route Analyzer on my existing Transit Gateways?

### Can I use the Route Analyzer to analyze routes in VPC route tables?

### Can I use the Route Analyzer to analyze security group rules and network ACL rules in VPC?

### I have a middlebox appliance attached to my transit gateway; will this feature work with this type of network architecture?

## Get started

[](/transit-gateway/pricing/)

Pricing

## Learn more about product pricing

Learn more

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/2c50fb03-8156-4fb1-9937-1dfed809a9e2.a95880625757ad7557ef377c5654264464059a6b.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Getting started

## Sign up for a free account

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](https://console.aws.amazon.com/vpc/home)

Console

## Start building in the console

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/9683c48e-c117-42b3-949d-62da59bd9c5d.3c9ba2a7814182b979ba0c8313fbdbbec361602a.jpeg)
