> **BRONZE Markdown** — `NET-05` · Servicio: **Amazon VPC** · Fase 2 · Dominios examen: D1
> URL oficial: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html
> Título oficial: Control subnet traffic with network access control lists

A *network access control list (ACL)* allows or denies specific inbound
or outbound traffic at the subnet level. You can use the default network ACL for your VPC, or
you can create a custom network ACL for your VPC with rules similar to your security group
rules. Custom network ACLs add an additional layer of security to your VPC.

There is no additional charge for using network ACLs.

The following diagram shows a VPC with two subnets. Each subnet has a network ACL. When
traffic enters the VPC (for example, from a peered VPC, VPN connection, or the internet), the
router sends the traffic to its destination. Network ACL A determines which traffic destined for
subnet 1 is allowed to enter subnet 1, and which traffic destined for a location outside subnet
1 is allowed to leave subnet 1. Similarly, network ACL B determines which traffic is allowed to
enter and leave subnet 2.

- ### On this page

Network ACL basics (#nacl-basics)
- ### Related resources

VPC Peering Guide (https://docs.aws.amazon.com/vpc/latest/peering/)Amazon VPC Transit Gateways (https://docs.aws.amazon.com/vpc/latest/tgw/)Amazon EC2 Developer Guide (https://docs.aws.amazon.com/ec2/latest/devguide/)

#### Next topic:

Network ACL rules

#### Previous topic:

Share security groups with AWS Organizations
