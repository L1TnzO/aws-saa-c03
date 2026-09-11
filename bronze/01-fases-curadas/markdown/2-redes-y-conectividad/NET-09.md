> **BRONZE Markdown** — `NET-09` · Servicio: **AWS PrivateLink** · Fase 2 · Dominios examen: D3, D4
> URL oficial: https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html
> Título oficial: AWS PrivateLink concepts - Amazon Virtual Private Cloud

You can use Amazon VPC to define a virtual private cloud (VPC), which is a logically
isolated virtual network. You can allow the clients in your VPC to connect to
destinations outside that VPC. For example, add an internet gateway to the VPC to allow
access to the internet, or add a VPN connection to allow access to your on-premises
network. Alternatively, use AWS PrivateLink to allow the clients in your VPC to connect to
services and resources in other VPCs using private IP addresses, as if those services
and resources were hosted directly in your VPC.

The following are important concepts to understand as you get started using
AWS PrivateLink.

###### Contents

- Architecture diagram (#architecture-diagram)
- Providers (#concepts-service-providers)
- Service or resource consumers (#concepts-service-consumers)
- AWS PrivateLink connections (#privatelink-connections)
- Private hosted zones (#concepts-private-hosted-zones)

## Architecture diagram

The following diagram provides a high-level overview of how AWS PrivateLink works.
Consumers create VPC endpoints to connect to endpoint services and resources that
are hosted by providers.

- ### On this page

Architecture diagram (#architecture-diagram)
- Providers (#concepts-service-providers)
- Service or resource consumers (#concepts-service-consumers)
- AWS PrivateLink connections (#privatelink-connections)
- Private hosted zones (#concepts-private-hosted-zones)

#### Next topic:

Get started

#### Previous topic:

What is AWS PrivateLink?
