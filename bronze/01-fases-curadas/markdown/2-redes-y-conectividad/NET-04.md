> **BRONZE Markdown** — `NET-04` · Servicio: **Amazon VPC** · Fase 2 · Dominios examen: D1
> URL oficial: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html
> Título oficial: Control traffic to your AWS resources using security groups

A *security group* controls the traffic that is allowed to reach and leave
the resources that it is associated with. For example, after you associate a security group
with an EC2 instance, it controls the inbound and outbound traffic for the instance.

When you create a VPC, it comes with a default security group. You can create additional
security groups for a VPC, each with their own inbound and outbound rules. You can specify
the source, port range, and protocol for each inbound rule. You can specify the destination,
port range, and protocol for each outbound rule.

The following diagram shows a VPC with a subnet, an internet gateway, and a security group.
The subnet contains an EC2 instance. The security group is assigned to the instance.
The security group acts as a virtual firewall. The only traffic that reaches the instance
is the traffic allowed by the security group rules. For example, if the security group
contains a rule that allows ICMP traffic to the instance from your network, then you
could ping the instance from your computer. If the security group does not contain a
rule that allows SSH traffic, then you could not connect to your instance using SSH.

- ### On this page

Security group basics (#security-group-basics)
- Security group example (#security-group-example-details)
- ### Related resources

VPC Peering Guide (https://docs.aws.amazon.com/vpc/latest/peering/)Amazon VPC Transit Gateways (https://docs.aws.amazon.com/vpc/latest/tgw/)Amazon EC2 Developer Guide (https://docs.aws.amazon.com/ec2/latest/devguide/)

#### Next topic:

Security group rules

#### Previous topic:

Infrastructure security
