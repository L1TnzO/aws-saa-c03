[Skip to main content](#aws-page-content-main)

AWS VPN

- [Overview](/vpn/)
- Features
- [Pricing](/vpn/pricing/)
- [FAQs](/vpn/faqs/)
- [Resources](/vpn/resources/)

# AWS VPN FAQs

## Why AWS VPN?

### 

AWS VPN is comprised of two services: AWS Site-to-Site VPN and AWS Client VPN. AWS Site-to-Site VPN enables you to securely connect your on-premises network or branch office site to your Amazon Virtual Private Cloud (Amazon VPC). AWS Client VPN enables you to securely connect users to AWS or on-premises networks.

- [General questions](#general-questions--1ohno8a)
  2
- [Billing](#billing--1ohno8a)
  2
- [AWS Site-to-Site VPN setup and management](#aws-site-to-site-vpn-setup-and-management--1ohno8a)
  2
- [AWS Site-to-Site VPN connectivity](#aws-site-to-site-vpn-connectivity--1ohno8a)
  34
- [AWS Accelerated Site-to-Site VPN](#aws-accelerated-site-to-site-vpn--1ohno8a)
  11
- [AWS Site-to-Site VPN visibility and monitoring](#aws-site-to-site-vpn-visibility-and-monitoring--1ohno8a)
  4
- [AWS Client VPN setup and management](#aws-client-vpn-setup-and-management--1ohno8a)
  2
- [AWS Client VPN connectivity](#aws-client-vpn-connectivity--1ohno8a)
  6
- [AWS Client VPN authentication and authorization](#aws-client-vpn-authentication-and-authorization--1ohno8a)
  13
- [AWS Client VPN visibility and monitoring](#aws-client-vpn-visibility-and-monitoring--1ohno8a)
  4
- [VPN clients](#vpn-clients--1ohno8a)
  13
- [Virtual private gateway](#virtual-private-gateway--1ohno8a)
  26

## General questions

[Open all](#)

### What is a Client VPN endpoint?

### What is a target network?

## Billing

[Open all](#)

### What defines billable VPN connection-hours?

### Do your prices include taxes?

## AWS Site-to-Site VPN setup and management

[Open all](#)

### Can I use the AWS Management Console to control and manage AWS Site-to-Site VPN?

### What are the default limits or quota on Site-to-Site VPNs?

## AWS Site-to-Site VPN connectivity

[Open all](#)

### What are the VPN connectivity options for my VPC?

### How do instances without public IP addresses access the Internet?

### How does an AWS Site-to-Site VPN connection work with Amazon VPC?

### What is IPSec?

### Which customer gateway devices can I use to connect to Amazon VPC?

### Which Diffie-Hellman groups do you support?

### What algorithms does AWS propose when an IKE rekey is needed?

### What customer gateway devices are known to work with Amazon VPC?

### If my device is not listed, where can I go for more information about using it with Amazon VPC?

### What is the approximate maximum throughput of a Site-to-Site VPN connection?

### Is there an aggregated throughput limit for Virtual Private Gateway?

### What factors affect the throughput of my VPN connection?

### What is the approximate maximum packets per second of a Site-to-Site VPN connection?

### What tools are available to me to help troubleshoot my Site-to-Site VPN configuration?

### How do I connect a VPC to my corporate datacenter?

### Can I NAT my customer gateway behind a router or firewall?

### What IP address do I use for my customer gateway address?

### How do I disable NAT-T on my connection?

### How many IPsec security associations can be established concurrently per tunnel?

### Can I advertise my VPC public IP address range to the internet and route the traffic through my datacenter, via the Site-to-Site VPN, and to my VPC?

### What is the maximum number of routes that my VPN connection will advertise to my customer gateway device?

### What is the maximum number of routes that can be advertised to my VPN connection from my customer gateway device?

### Do VPN connections support IPv6 traffic?

### Which side of the VPN tunnel initiates the Internet Key Exchange (IKE) session?

### Do VPN connections support private IP addresses?

### Are there any differences between public and private IP VPN protocol interactions?

### Do I require a Transit gateway for Private IP VPN?

### Do private IP VPNs support static routing and BGP?

### What is the Transit gateway route-table association and propagation behavior for the private IP VPN attachments?

### What throughput can I get with Private IP VPN?

### Can I ECMP traffic across a private IP VPN and public IP VPN connections?

### What is the MTU (Maximum Transmission Unit) of Private IP VPN?

### Can a private IP VPN be associated with a different owner account than Transit gateway account owner?

### In which AWS Regions is AWS Site-to-Site VPN service and Private IP VPN feature available?

## AWS Accelerated Site-to-Site VPN

[Open all](#)

### Why should I use Accelerated Site-to-Site VPN?

### How can I create an Accelerated Site-to-Site VPN?

### How do I find out whether my existing VPN connection is an Accelerated Site-to-Site VPN?

### How can I convert my existing Site-to-Site VPN to an Accelerated Site-to-Site VPN?

### Is Accelerated Site-to-Site VPN supported for both virtual gateway and AWS Transit Gateway?

### Does an Accelerated Site-to-Site VPN connection offer two tunnels for high availability?

### Are there any protocol differences between Accelerated and non-Accelerated Site-to-Site VPN tunnels?

### Does Accelerated Site-to-Site VPN offer two network zones for high availability?

### Is Accelerated Site-to-Site VPN an option in AWS Global Accelerator?

### Can I use Accelerated VPN over public AWS Direct Connect virtual interfaces?

### In which AWS Regions is Accelerated Site-to-Site VPN available?

## AWS Site-to-Site VPN visibility and monitoring

[Open all](#)

### What logs are supported for AWS Site-to-Site VPN?

### Are Site-to-Site VPN logs offered for VPN connections to both Transit Gateways and Virtual Gateways?

### Can I enable the Site-to-Site VPN logs on my existing VPN connections?

### What happens when I enable Site-to-Site VPN logs to my existing VPN connection?

## AWS Client VPN setup and management

[Open all](#)

### How do I setup AWS Client VPN?

### What should an end user do to setup a connection?

## AWS Client VPN connectivity

[Open all](#)

### How do I enable connectivity to other networks?

### Can the Client VPN endpoint belong to a different account from the associated subnet?

### Can I access resources in a VPC within a different region different from the region in which I setup the TLS session, using a Private IP address?

### What transport protocols are supported by Client VPN?

### Does AWS Client VPN support split tunnel?

### Can a resource initiate connection to a user's device using Client VPN?

## AWS Client VPN authentication and authorization

[Open all](#)

### What authentication mechanisms does AWS Client VPN support?

### Can I use an on-premises Active Directory service to authenticate users?

### Does AWS Client VPN support mutual authentication?

### Can I blacklist client certificates?

### Does AWS Client VPN support the ability for a customer to bring their own certificate?

### Does AWS Client VPN integrate with AWS Certificate Manager (ACM) to generate server certificates?

### Does AWS Client VPN support posture assessment?

### Does AWS Client VPN support Multi-Factor Authentication (MFA)?

### How does AWS Client VPN support authorization?

### Does AWS Client VPN support security group?

### How do I use security group to restrict access to my applications for only Client VPN connections?

### In Federated Authentication, can I modify the IDP metadata document?

### Can I use a 3rd party OpenVPN client to connect to a Client VPN Endpoint configured with federated authentication?

## AWS Client VPN visibility and monitoring

[Open all](#)

### What logs are supported for AWS Client VPN?

### Does Client VPN support Amazon VPC Flow Logs in the endpoint?

### Can I monitor active connections?

### Can I monitor by endpoint using CloudWatch?

## VPN clients

[Open all](#)

### How do I deploy the free software client for AWS Client VPN?

### What is the additional price to use the software client of AWS Client VPN?

### What type of devices and operating system versions are supported?

### Do my connection profiles synchronize between all of my devices?

### Do I need admin permission on my device to run the software client of AWS Client VPN?

### What VPN protocol is used by the client of AWS Client VPN?

### Will all the features supported by AWS Client VPN service be supported using the software client?

### Does the software client of AWS Client VPN allow LAN access when connected?

### What authentication capabilities does the software client support?

### What type of client logging will be supported by AWS Client VPN?

### Can I mix the software client of AWS Client VPN and standards based OpenVPN clients connecting to AWS Client VPN endpoint?

### Where can I download the software client of AWS Client VPN?

### Can I run multiple types of VPN clients on one device?

## Virtual private gateway

[Open all](#)

### What is this feature?

### What is the cost of using this feature?

### How can I configure/assign my ASN to be advertised as Amazon side ASN?

### What ASN did Amazon assign prior to this feature?

### Can I use any ASN – public and private?

### Why can’t I assign a public ASN for the Amazon half of the BGP session?

### What ASN can I choose?

### What will happen if I try to assign a public ASN to the Amazon half of the BGP session?

### If I don’t provide an ASN for the Amazon half of the BGP session, what ASN can I expect Amazon to assign to me?

### Where can I view the Amazon side ASN?

### If I have a public ASN, will it work with a private ASN on the AWS side?

### I have private VIFs already configured and want to set a different Amazon side ASN for the BGP session on an existing VIF. How can I make this change?

### I have VPN connections already configured and want to modify the Amazon side ASN for the BGP session of these VPNs. How can I make this change?

### I already have a virtual gateway and a private VIF/VPN connection configured using an Amazon assigned public ASN of 7224. If Amazon automatically generates the ASN for the new private virtual gateway, what Amazon side ASN will I be assigned?

### I have a virtual gateway and a private VIF/VPN connection configured using an Amazon assigned public ASN. I want to use the same Amazon assigned public ASN for the new private VIF/VPN connection I’m creating. How do I do this?

### I have a virtual gateway and a private VIF/VPN connection configured using an Amazon assigned public ASN of 7224. If Amazon auto generates the ASN for the new private VIF/VPN connection using the same virtual gateway, what Amazon side ASN will I be assigned?

### I’m attaching multiple private VIFs to a single virtual gateway. Can each VIF have a separate Amazon side ASN?

### I’m creating multiple VPN connections to a single virtual gateway. Can each VPN connection have a separate Amazon side ASN?

### Where can I select my own ASN?

### I use CloudHub today. Will I have to adjust my configurations in the future?

### I want to select a 32-bit ASN. What is the range of 32-bit private ASNs?

### Once the virtual gateway is created, can I change or modify the Amazon side ASN?

### Is there a new API to configure/assign the Amazon side ASN?

### Is there a new API to view the Amazon side ASN?

### What ASNs can I use to configure my Customer Gateway (CGW)?

### I want to use 32-bit ASN for my Customer Gateway. Is 32-bit private range ASN supported?

## Get started

[](/vpn/pricing/)

Pricing

## Learn more about product pricing

Learn more

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/8e4dd20b-86ff-4ea8-ad6b-e90b1e61e09c.d157e9381a2de5c6d246aa21bb8555078b0e0a52.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Getting started

## Get started with a free account

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](https://console.aws.amazon.com/vpc/home#VpnConnections:sort=VpnConnectionId)

Console

## Start building with the console

Get started

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/2c50fb03-8156-4fb1-9937-1dfed809a9e2.a95880625757ad7557ef377c5654264464059a6b.jpeg)
