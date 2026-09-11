[Skip to main content](#aws-page-content-main)

AWS Direct Connect

- [Overview](/directconnect/)
- [Features](/directconnect/features/)
- [Pricing](/directconnect/pricing/)
- Getting Started
- [FAQs](/directconnect/faqs/)
- More

# AWS Direct Connect FAQs

- [General Questions](#general-questions--1f5cnkc)
  7
- [Definitions](#definitions--1f5cnkc)
  14
- [High availability and resilience](#high-availability-and-resilience--1f5cnkc)
  11
- [AWS Direct Connect SiteLink](#aws-direct-connect-sitelink--1f5cnkc)
  14
- [AWS Local Zones](#aws-local-zones--1f5cnkc)
  5
- [Services interoperability](#services-interoperability--1f5cnkc)
  4
- [Link Aggregation Groups](#link-aggregation-groups--1f5cnkc)
  22
- [Billing](#billing--1f5cnkc)
  11
- [Specifications](#specifications--1f5cnkc)
  13
- [VPN connections](#vpn-connections--1f5cnkc)
  3
- [AWS Transit Gateway support](#aws-transit-gateway-support--1f5cnkc)
  14
- [AWS Direct Connect gateway](#aws-direct-connect-gateway--1f5cnkc)
  25
- [Local preference communities](#local-preference-communities--1f5cnkc)
  15
- [AWS Direct Connect Gateway - Private ASN](#aws-direct-connect-gateway-private-asn--1f5cnkc)
  19
- [MACsec](#macsec--1f5cnkc)
  10
- [Maintenance events](#maintenance-events--1f5cnkc)
  7

## General Questions

[Open all](#)

### What is AWS Direct Connect?

### Where is AWS Direct Connect available?

### What is the difference between dedicated and hosted connections?

### How can I get started with AWS Direct Connect?

### Can I use AWS Direct Connect if my network is not present at an AWS Direct Connect location?

### Does AWS act as my "first mile" or "last mile" provider to connect my on-premises locations to AWS?

### How do I request a cross connect at an AWS Direct Connect location?

## Definitions

[Open all](#)

### What is an AWS Direct Connect gateway?

### What is a virtual interface (VIF)?

### What is a virtual private gateway (VGW)?

### What is a link aggregation group (LAG)?

A link aggregation group (LAG) is a logical interface that uses the link aggregation control protocol (LACP) to aggregate multiple dedicated connections at a single AWS Direct Connect endpoint, allowing you to treat them as a single, managed connection. LAGs streamline configuration because the LAG configuration applies to all connections in the group. For details on creating, updating, associating/disassociating, and deleting a LAG refer to the AWS Direct Connect documentation: [Link aggregation groups - AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/lags.html).

- There is no extra charge for using a LAG.
- Dynamic LACP bundles are used; static LACP bundles are not supported.
- VIFs on two different LAGs can be connected to the same VGW. To improve failover times between paths when using multiple LAGs, bidirectional forwarding detection (BFD) is supported.

### What is the AWS Direct Connect Resiliency Toolkit?

### What is the AWS Direct Connect Failover Testing feature?

### What are local preference communities for private virtual interfaces (VIFs)?

### What are local preference communities for private and transit virtual interfaces (VIFs)?

### What is an AWS Direct Connect Gateway — Bring your own private ASN?

### What is a transit virtual interface?

### What is multi-account support for AWS Direct Connect gateway?

### What is MACsec?

### What is AWS Direct Connect SiteLink?

### Does AWS act as my "first mile" or "last mile" provider to connect my on-premises locations to AWS?

## High availability and resilience

[Open all](#)

### Does having a link aggregation group (LAG) make my connection more resilient?

### How do I order connections to AWS Direct Connect for high availability?

### How do I check to see if my connections are terminated on different AWS devices?

### Does AWS Direct Connect offer a Service Level Agreement (SLA)?

### When using the failover test feature, can I configure the duration of the test or cancel the test while it's running?

### Can I see my past test history when using the failover test feature? How long do you keep the test history?

### What happens after a failover test is complete?

### Who can initiate a failover test using the AWS Direct Connect Resiliency Toolkit?

### Can I delete the virtual interface while the failover test for the same virtual interface is in progress?

### Can I run failover tests for any type of virtual interface?

### If I have established IPv4 and IPv6 Border Gateway Protocol sessions, can I run this test for each Border Gateway Protocol session?

## AWS Direct Connect SiteLink

[Open all](#)

### Do I need new AWS Direct Connect connections to use AWS Direct Connect SiteLink, and do they need to be the same type?

### Where and how do I configure AWS Direct Connect SiteLink?

### Does AWS Direct Connect SiteLink require an AWS Direct Connect gateway connection?

### How can I tell what I’m being charged for AWS Direct Connect SiteLink?

### What does a simple two-site network architecture look like with AWS Direct Connect SiteLink?

### How do I implement a hub-and-spoke architecture with AWS Direct Connect SiteLink?

### How do I create a segmented network architecture with AWS Direct Connect SiteLink?

### What types of virtual interfaces (VIFs) are supported by AWS Direct Connect SiteLink?

### Does AWS Direct Connect SiteLink require BGP?

### Does AWS Direct Connect SiteLink support IPv6?

### Does AWS Direct Connect SiteLink support MACsec?

### Is Quality of Service (QoS) supported on AWS Direct Connect SiteLink-enabled virtual interfaces (VIFs)?

### Does AWS Direct Connect SiteLink support local preference BGP communities?

### When should I use AWS Direct Connect SiteLink and when should I use AWS Cloud WAN?

## AWS Local Zones

[Open all](#)

### Can I use AWS Direct Connect to reach resources running in AWS Local Zones?

### How do I configure AWS Local Zones to work with AWS Direct Connect?

### Are there any differences in how AWS Direct Connect connects to an AWS Local Zone compared to a Region?

### Can I use AWS Site-to-Site VPN as a backup for my AWS Direct Connect link to an AWS Local Zone?

### Can I use my current AWS Direct Connect Gateway (DXGW) to associate the Virtual Gateway (VGW)?

## Services interoperability

[Open all](#)

### Can I use the same private network connection with Amazon Virtual Private Cloud (VPC) and other AWS services simultaneously?

### If I’m using Amazon CloudFront and my origin is in my own data center, can I use AWS Direct Connect to transfer the objects stored in my own data center?

### Can I order a port for AWS GovCloud (US) in the AWS Management Console?

### Do AWS Global Accelerator (AGA) public endpoint prefixes get advertised from AWS to on-prem over Direct Connect public virtual interfaces?

## Link Aggregation Groups

[Open all](#)

### What’s the max number of links I can have in a LAG group?

### Are link aggregation groups (LAG) in active/active or active/passive mode?

### Can the maximum transmission unit of a LAG change?

### Can I have my ports configured for active/passive instead of active/active?

### Can I mix interface types and have a mix of 1/10/100/400 Gbps ports in the same LAG?

### What ports types will this be available on?

### Can I LAG hosted connections as well?

### Can I create a LAG out of my existing ports?

### Can I have a LAG that spans multiple AWS Direct Connect devices?

### How do I add links to my LAG once it’s set up?

### You’re out of ports and I have to order a new LAG, but I have Virtual Interfaces (VIFs) configured. How do I move those?

### Can I delete a single port from my LAG?

### Can I delete my LAG all at once?

### If I have only two ports in my LAG can I still delete one?

### Can I order a LAG with only one port?

### Can I convert a LAG back to individual ports?

### Can you create a tool to move my virtual interfaces (VIFs) for me?

### Does the LAG show as a single connection or a collection of connections?

### What does minimum links mean, and why do I have a check box for it when I order my bundle?

### When I associate my existing AWS Direct Connect connection with a LAG, what happens with virtual interfaces (VIFs) already created with a connection?

### Can I set link priority on a specific link?

### Can I have a 40 GE interface on my side that connects to 4x 10 GE on the AWS side?

## Billing

[Open all](#)

### Are there any setup charges or a minimum service term commitment required to use AWS Direct Connect?

### How will I be charged and billed for my use of AWS Direct Connect?

### Will Regional data transfer be billed at the AWS Direct Connect rate?

### What defines billable port-hours for Hosted Connections?

### What is the format for Hosted Connection port-hour charges?

### Which AWS account gets charged for the Data Transfer Out performed over a public virtual interface?

### Which AWS account gets charged for the Data Transfer Out performed over a transit/private virtual interface?

### Does AWS Direct Connect Data Transfer Out include transfers to the internet?

### How does AWS Direct Connect work with consolidated billing?

### How do I cancel the AWS Direct Connect service?

### Do your prices include taxes?

## Specifications

[Open all](#)

### What connection speeds are available?

### Are there limits on the amount of data that I can transfer using AWS Direct Connect?

### Are there limits on the number of routes I can advertise towards AWS using AWS Direct Connect?

### What happens if I advertise more than 100 routes over a Border Gateway Protocol session?

### What are the technical requirements for the connection?

### Can I extend one of my VLANs to the AWS Cloud using AWS Direct Connect?

### What are the technical requirements for virtual interfaces to public AWS services, such as Amazon EC2 and Amazon S3?

- This connection requires the use of the Border Gateway Protocol (BGP) with an Autonomous System Number (ASN) and IP Prefixes. You will need the following information to complete the connection:
- A public or private ASN. If you are using a public ASN, you must own it. If you are using a private ASN, it must be in the 64512 to 65535 range.
- A new unused VLAN tag you select.
- Public IPs (/31 or /30) allocated to the BGP session. RFC 3021 (Using 31-Bit Prefixes on IPv4 Point-to-Point Links) is supported on all Direct Connect virtual interface types.
- By default, Amazon will advertise global public IP prefixes via BGP. You must advertise public IP prefixes (/31 or smaller) that you own or are AWS-provided via BGP. For more details, consult the [AWS Direct Connect User Guide](/directconnect/faqs/).
- See the information that follows below for more details on AWS Direct Connect, Bring Your Own ASN.

### What IP address will be assigned to each end of a virtual interface?

### Can I locate my hardware next to the equipment that powers AWS Direct Connect?

### How do I enable BFD on my AWS Direct Connect connection?

### How do I set up AWS Direct Connect for the AWS GovCloud (US) Region?

### What are the technical requirements for virtual interfaces (VIF) to VPCs?

### Can I establish a Layer 2 connection between VPC and my network?

## VPN connections

[Open all](#)

### How does AWS Direct Connect differ from an IPsec VPN Connection?

### Can I use AWS Direct Connect and a VPN Connection to the same VPC simultaneously?

### Is there any difference to the BGP configuration/setup details outlined for AWS Direct Connect?

## AWS Transit Gateway support

[Open all](#)

### Which AWS Regions offer AWS Direct Connect support for AWS Transit Gateway?

### How do I create transit virtual interface?

### Can I allocate a transit virtual interface in another AWS account?

### Can I attach a transit virtual interface to my Virtual Private Gateway?

### Can I attach a private virtual interface to my AWS Transit Gateway?

### What are the quotas associated with a transit virtual interface?

### I have an existing AWS Direct Connect gateway attached to a private virtual interface, can I attach a transit virtual interface to this AWS Direct Connect gateway?

### Can I associate my AWS Transit Gateway to the AWS Direct Connect gateway attached to a private virtual interface?

### How long does it take to establish an association between AWS Transit Gateway and AWS Direct Connect gateway?

### How many total virtual interfaces can I create per 1 Gbps, 10 Gbps, 100 Gbps, or 400 Gbps dedicated connection?

### Can I create a transit virtual interface on a hosted connection of any speed?

### I have 4x10 Gbps LAG, how many transit virtual interfaces can I create on this link aggregation group (LAG)?

### Does a transit virtual interface support jumbo frames?

### Do you support all the Border Gateway Protocol (BGP) attributes that you support on the private virtual interface for the transit virtual interface?

## AWS Direct Connect gateway

[Open all](#)

### Why is an AWS Direct Connect gateway necessary?

An AWS Direct Connect gateway performs several functions:

- AWS Direct Connect gateway will give you the ability to interface with VPCs in any AWS Region (except the AWS China Region), so you can use your AWS Direct Connect connections to interface with more than one AWS Region.
- You can share a private virtual interface to interface with up to 20 VPCs to reduce the number of Border Gateway Protocol sessions between your on-premises network and AWS deployments.
- By attaching transit virtual interface(s) (VIF) to an AWS Direct Connect gateway and associating AWS Transit Gateway(s) with the Direct Connect gateway, you can share transit virtual interface(s) to connect with more than one AWS Transit Gateways (for information on AWS Direct Connect quotas, refer to the table on [this page](https://docs.aws.amazon.com/directconnect/latest/UserGuide/limits.html)). This can reduce the number of Border Gateway Protocol sessions between your on-premises network and AWS deployments. Once a transit VIF is connected to an AWS Direct Connect Gateway, that Gateway cannot also host another Private VIF - it is dedicated to the transit VIF.
- You can associate multiple virtual private gateways (VGWs, associated with a VPC) to an AWS Direct Connect gateway, as long as the IP CIDR blocks of the Amazon VPC associated with the Virtual Private Gateway do not overlap.

### Can I associate more than one AWS Transit Gateway with an AWS Direct Connect gateway?

### Can I associate VPCs owned by any AWS account with an AWS Direct Connect gateway owned by any AWS account?

### Can I associate AWS Transit Gateway that are owned by any AWS account with an AWS Direct Connect gateway that is owned by any AWS account?

### If I use an AWS Direct Connect gateway, does my traffic to the desired AWS Region go by way of the associated home AWS Region?

### Are there additional fees when using AWS Direct Connect gateway and working with remote AWS Regions?

### Do I need to use the same AWS account with my private/transit virtual interfaces(s), AWS Direct Connect gateway, Virtual Private Gateway, or AWS Transit Gateways in order to use an AWS Direct Connect gateway?

### If I associate virtual private gateways (VGWs) to an AWS Direct Connect gateway, can I continue to use all VPC features?

### I am working with an AWS Direct Connect Partner to get private virtual interface (VIF) provisioned for my account, can I use an AWS Direct Connect gateway?

### Can I connect to VPCs in my local Region?

### What are the quotas associated with an AWS Direct Connect gateway?

### Can virtual private gateways (VGWs, associated with a VPC) be part of more than one AWS Direct Connect gateway?

### Can you attach a private virtual interface (VIF) to more than one AWS Direct Connect gateway?

### Does AWS Direct Connect gateway break existing AWS VPN CloudHub functionality?

### What type of traffic is, and is not, supported by AWS Direct Connect gateway?

### I currently have a VPN in us-east-1 attached to a virtual private gateway (VGW). I want to use AWS VPN CloudHub in us-east-1 between the VPN and a new VIF. Can I do this with AWS Direct Connect gateway?

### I have an existing private virtual interface associated with virtual private gateway (VGW), can I associate my existing private virtual interface with an AWS Direct Connect gateway?

### If I have a virtual private gateway (VGW) attached to a VPN and an AWS Direct Connect gateway, and my AWS Direct Connect circuit goes down, will my VPC traffic route out to the VPN?

### Can I attach a virtual private gateway (VGW) to an AWS Direct Connect gateway if it is not attached to a VPC?

### I have created an AWS Direct Connect gateway with one AWS Direct Connect Private VIF, and three non-overlapping virtual private gateways (VGWs) -- each associated with a VPC. What happens if I detach one of the VGW from the VPC?

### I have created an AWS Direct Connect gateway with one AWS Direct Connect VIF, and three non-overlapping VGW-VPC pairs, what happens if I detach one of the virtual private gateways (VGW) from the AWS Direct Connect gateway?

### Can I send traffic from a VPC that is associated with an AWS Direct Connect gateway to another VPC associated to the same AWS Direct Connect gateway?

### I currently have a VPN in us-east-1 that is attached to a virtual private gateway (VGW). If I associate this VGW to an AWS Direct Connect gateway, can I send traffic from my VPN to a VIF attached to the AWS Direct Connect gateway in a different AWS Region?

### Can I resize a VPC that is associated with an AWS Direct Connect gateway?

### Is there a way to configure an AWS Direct Connect gateway to selectively propagate prefixes to/from VPCs?

## Local preference communities

[Open all](#)

### Can I use this feature for my existing EBGP sessions?

### Will this feature be available on both Public and Private Virtual Interfaces?

### Will this feature work with an AWS Direct Connect gateway?

### Can I verify that communities are being received by AWS?

### What are the supported local preference communities for an AWS Direct Connect private virtual interface?

The following communities are supported for private virtual interface and are evaluated in order of lowest to highest preference. Communities are mutually exclusive. Prefixes marked with the same communities, and bearing identical MED\*, AS_PATH attributes are candidates for multi-pathing.

- 7224:7100 – Low Preference
- 7224:7200 – Medium Preference
- 7224:7300 – High Preference

### What is the default behavior, in case I do not use the supported communities?

### I have two private VIFs on a physical connection at an AWS Direct Connect location; can I use supported communities to influence egress behavior across these two private VIFs?

### Does the local preference communities feature support failover?

### I have already configured my routers with AS_PATH, do I need to change the configuration to use community tags and disrupt my network?

### I have two AWS Direct Connect connections, one is 1 Gbps and another is 10 Gbps, and both are advertising the same prefix. I would like to receive all traffic for this destination across the 10 Gbps AWS Direct Connect connection, but still be able to failover to the 1 Gbps connection. Can local preference communities be used to balance traffic in this scenario?

### How wide will AWS multipath traffic to my network?

### Can I have v4 and v6 BGP sessions running over a single VPN tunnel?

### Is there any difference to the BGP configuration/setup details outlined for AWS Direct Connect?

### Can I terminate my tunnel to an endpoint with an IPv6 address?

### Can I terminate my tunnel to an IPv4 address and run IPv6 BGP sessions over the tunnel?

## AWS Direct Connect Gateway - Private ASN

[Open all](#)

### What is this feature?

### Where are these features available?

### How can I configure/assign my ASN to be advertised as the AWS side ASN?

### Can I use any ASN - public and private?

### Why can't I assign a public ASN for the AWS half of the BGP session?

### What ASN can I choose?

### What will happen if I try to assign a public ASN to the AWS half of the BGP session?

### If I don't provide an ASN for the AWS half of the BGP session, what ASN can I expect from AWS?

### Where can I view the AWS side ASN?

### If I have a public ASN, will it work with a private ASN on the AWS side?

### I have private VIFs already configured and want to set a different AWS side ASN for the BGP session on an existing VIF. How can I make this change?

### I'm attaching multiple private VIFs to a single AWS Direct Connect gateway. Can each VIF have a separate AWS side ASN?

### Can I use different private ASNs for my AWS Direct Connect Gateway and Virtual Private Gateway?

### Can I use same private ASNs for my AWS Direct Connect Gateway and Virtual Private Gateway?

### I'm attaching multiple Virtual Private Gateways with their own private ASN to a single AWS Direct Connect gateway configured with its own private ASN. Which private ASN takes precedence, VGW or AWS Direct Connect Gateway?

### Where can I select my own private ASN?

### I use AWS VPN CloudHub today. Will I have to adjust my configuration in the future?

### I want to select a 32-bit ASN. What is the range of 32-bit private ASNs?

### Once the AWS Direct Connect gateway is created, can I change or modify the AWS side ASN?

## MACsec

[Open all](#)

### Does MACsec replace other encryption technologies I currently use in my network?

### Which type of AWS Direct Connect connections support MACsec?

### Do I need any special hardware to use MACsec?

### Do I need a new AWS Direct Connect connection to use MACsec with my MACsec-capable device?

### Which MACsec cipher suites do you support?

### Why do you only support 256-bit keys?

### Do you require the use of Extended Packet Numbering (XPN)?

### Do you support the use of Secure Channel Identifier (SCI)?

### Do you support IEEE 802.1Q (Dot1q/VLAN) tag offset/dot1q-in-clear?

### Is there an additional charge for MACsec?

## Maintenance events

[Open all](#)

### When will I be informed about maintenance events on Direct Connect?

### How can I get notifications for Direct Connect scheduled maintenance or events?

### Why can’t maintenance be performed on only nights and weekends?

### I received a notice that Direct Connect is performing maintenance at a time that impacts our business. How do I prepare for maintenance on my Direct Connect connection?

When a Direct Connect connection is down for maintenance, that connection can be down from a few minutes to a few hours. To prepare for this downtime, take one of the following actions:

- Request a redundant Direct Connect connection.
- Configure a [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) (virtual private network) connection as a backup.

It's a best practice to shift your traffic to another circuit  during Direct Connect maintenance. To prevent any production traffic disruption, use one of the preceding options before the scheduled maintenance period. You can also use the [AWS Direct Connect Resiliency Toolkit](https://docs.aws.amazon.com/directconnect/latest/UserGuide/resiliency_toolkit.html) to [perform scheduled failover tests](https://docs.aws.amazon.com/directconnect/latest/UserGuide/resiliency_failover.html) and verify the resiliency of your connections.

### Can the maintenance be rescheduled for a different date/time?

### If I have multiple connections to the same Direct Connect location, will all my connections go down during maintenance?

### Do partners coordinate their maintenance schedules with AWS?

## Get started

[](/directconnect/pricing/)

Pricing

## Learn more about AWS Direct Connect pricing

Visit the pricing page

[](/contact-us/)

Contact us

## Have more questions?

Contact us

[](/directconnect/getting-started/)

Getting started

## Ready to build?

Get started
