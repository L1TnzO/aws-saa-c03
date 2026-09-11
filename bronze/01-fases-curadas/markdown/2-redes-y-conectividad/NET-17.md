> **BRONZE Markdown** — `NET-17` · Servicio: **Elastic Load Balancing** · Fase 2 · Dominios examen: D2, D3
> URL oficial: https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html
> Título oficial: What is an Application Load Balancer?

Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2
instances, containers, and IP addresses, in one or more Availability Zones. It monitors the
health of its registered targets, and routes traffic only to the healthy targets. Elastic Load Balancing
scales your load balancer as your incoming traffic changes over time. It can automatically
scale to the vast majority of workloads.

Elastic Load Balancing supports the following load balancers: Application Load Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers.
You can select the type of load balancer that best suits your needs. This guide
discusses Application Load Balancers. For more information about the other load balancers, see the
User Guide for Network Load Balancers (https://docs.aws.amazon.com/elasticloadbalancing/latest/network/), the User Guide for Gateway Load Balancers (https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/), and the User Guide for Classic Load Balancers (https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/).

## Application Load Balancer components

A *load balancer* serves as the single point of contact for
clients. The load balancer distributes incoming application traffic across multiple
targets, such as EC2 instances, in multiple Availability Zones. This increases the
availability of your application. You add one or more listeners to your load
balancer.

A *listener* checks for connection requests from clients, using the
protocol and port that you configure. The rules that you define for a listener determine
how the load balancer routes requests to its registered targets. Each rule consists of a
priority, one or more actions, and one or more conditions. When the conditions for a
rule are met, then its actions are performed. You must define a default rule for each
listener, and you can optionally define additional rules.

Each *target group* routes requests to one or more registered
targets, such as EC2 instances, using the protocol and port number that you specify. You
can register a target with multiple target groups. You can configure health checks on a
per target group basis. Health checks are performed on all targets registered to a
target group that is specified in a listener rule for your load balancer.

The following diagram illustrates the basic components. Notice that each listener
contains a default rule, and one listener contains another rule that routes requests to
a different target group. One target is registered with two target groups.

- ### On this page

Application Load Balancer components (#application-load-balancer-components)
- Application Load Balancer overview (#application-load-balancer-overview)
- Benefits of migrating from a Classic Load Balancer (#application-load-balancer-benefits)
- Related services (#application-load-balancer-related-services)
- Pricing (#application-load-balancer-pricing)

#### Next topic:

Application Load Balancers
