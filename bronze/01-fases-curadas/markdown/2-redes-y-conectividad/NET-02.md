> **BRONZE Markdown** — `NET-02` · Servicio: **Amazon VPC** · Fase 2 · Dominios examen: D1, D3
> URL oficial: https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html
> Título oficial: Subnets for your VPC - Amazon Virtual Private Cloud

A *subnet* is a range of IP addresses in your VPC.
You can create AWS resources, such as EC2 instances, in specific subnets.

###### Contents

- Subnet basics (#subnet-basics)
- Subnet security (#subnet-security)
- Create a subnet (./create-subnets.html)
- Add or remove an IPv6 CIDR block from your subnet (./subnet-associate-ipv6-cidr.html)
- Modify the IP addressing attributes of your subnet (./subnet-public-ip.html)
- Subnet CIDR reservations (./subnet-cidr-reservation.html)
- Route tables (./VPC_Route_Tables.html)
- Middlebox routing wizard (./middlebox-routing-console.html)
- Delete a subnet (./subnet-deleting.html)

## Subnet basics

Each subnet must reside entirely within one Availability Zone and cannot span zones. By
launching AWS resources in separate Availability Zones, you can protect your applications
from the failure of a single Availability Zone.

###### Contents

- Subnet IP address range (#subnet-ip-address-range)
- Subnet types (#subnet-types)
- Subnet diagram (#subnet-diagram)
- Subnet routing (#subnet-routing)
- Subnet settings (#subnet-settings)

### Subnet IP address range

When you create a subnet, you specify its IP addresses, depending on the configuration of
the VPC:

- IPv4 only – The subnet has an IPv4 CIDR block but does
not have an IPv6 CIDR block. Resources in an IPv4-only subnet must communicate over IPv4.
- Dual stack – The subnet has both an IPv4 CIDR block and
an IPv6 CIDR block. The VPC must have both an IPv4 CIDR block and an IPv6 CIDR
block. Resources in a dual-stack subnet can communicate over IPv4 and IPv6.
- IPv6 only – The subnet has an IPv6 CIDR block but does
not have an IPv4 CIDR block. The VPC must have an IPv6 CIDR block. Resources in an IPv6-only
subnet must communicate over IPv6.

###### Note

Resources in IPv6-only subnets are assigned IPv4 link-local addresses from CIDR block
169.254.0.0/16. These addresses are used to communicate with services
that are available only in the VPC. For examples, see Link-local addresses (https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#link-local-addresses) in the *Amazon EC2 User Guide*.

For more information, see IP addressing for your VPCs and subnets (./vpc-ip-addressing.html).

### Subnet types

The subnet type is determined by how you configure routing for your subnets. For
example:

- Public subnet – The subnet has a direct
route to an internet gateway (./VPC_Internet_Gateway.html).
Resources in a public subnet can access the public internet.
- Private subnet – The subnet does not have a
direct route to an internet gateway. Resources in a private subnet require a
NAT device (./vpc-nat.html) to access the public
internet.
- VPN-only subnet – The subnet has a route to a
Site-to-Site VPN connection (https://docs.aws.amazon.com/vpn/latest/s2svpn/) through a virtual private
gateway. The subnet does not have a route to an internet gateway.
- Isolated subnet – The subnet has no
routes to destinations outside its VPC. Resources in an isolated subnet can
only access or be accessed by other resources in the same VPC.
- EVS subnet – This type of subnet is created using Amazon EVS. For more information, see VLAN subnet (https://docs.aws.amazon.com/evs/latest/userguide/concepts.html#concepts-evs-network) in the *Amazon EVS User Guide*.

### Subnet diagram

The following diagram shows a VPC with subnets in two Availability Zones and an
internet gateway. Each Availability Zone has a public subnet and a private subnet.

- ### On this page

Subnet basics (#subnet-basics)
- Subnet security (#subnet-security)
- ### Related resources

VPC Peering Guide (https://docs.aws.amazon.com/vpc/latest/peering/)Amazon VPC Transit Gateways (https://docs.aws.amazon.com/vpc/latest/tgw/)Amazon EC2 Developer Guide (https://docs.aws.amazon.com/ec2/latest/devguide/)

#### Next topic:

Create a subnet

#### Previous topic:

Generate IaC from console actions
