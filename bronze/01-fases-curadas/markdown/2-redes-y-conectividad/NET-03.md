> **BRONZE Markdown** — `NET-03` · Servicio: **Amazon VPC** · Fase 2 · Dominios examen: D2, D3, D4
> URL oficial: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html
> Título oficial: Configure route tables - Amazon Virtual Private Cloud

A *route table* serves as the traffic controller for your virtual private cloud (VPC).
Each route table contains a set of rules, called *routes*, that determine where network
traffic from your subnet or gateway is directed. When you create a VPC, we also create the main route
table for the VPC. You can create additional route tables for your VPC, so that you have more granular
control over the network paths for your VPC.

You can use route tables to specify which networks your VPC can communicate with, such as other VPCs
or on-premises networks. Each route specifies a destination (CIDR block or prefix list) and a target
(such as an internet gateway, NAT gateway, VPC peering connection, or VPN connection). Traffic is
routed to targets based on its destination IP address. Route tables enable you to create complex
networking architectures that include public subnets, private subnets, VPN-only subnets, and isolated
subnets.

###### Contents

- Route table concepts (./RouteTables.html)
- Subnet route tables (./subnet-route-tables.html)
- Gateway route tables (./gateway-route-tables.html)
- Route priority (./route-tables-priority.html)
- Example routing options (./route-table-options.html)
- Create a route table and routes (./create-vpc-route-table.html)
- Manage subnet route tables (./WorkWithRouteTables.html)
- Replace the main route table (./Route_Replacing_Main_Table.html)
- Associate a route table with a gateway (./associate-route-table-gateway.html)
- Replace or restore the target for a local route (./replace-local-route-target.html)
- Advanced routing (./advanced-routing.html)
- Troubleshoot reachability issues (./route-table-routes-troubleshoot.html)

Document Conventions
Subnet CIDR reservations
Route table concepts


Thanks for letting us know we're doing a good job!

If you've got a moment, please tell us what we did right so we can do more of it.


Thanks for letting us know this page needs work. We're sorry we let you down.

If you've got a moment, please tell us how we can make the documentation better.

- ### Related resources

VPC Peering Guide (https://docs.aws.amazon.com/vpc/latest/peering/)Amazon VPC Transit Gateways (https://docs.aws.amazon.com/vpc/latest/tgw/)Amazon EC2 Developer Guide (https://docs.aws.amazon.com/ec2/latest/devguide/)

#### Next topic:

Route table concepts

#### Previous topic:

Subnet CIDR reservations
