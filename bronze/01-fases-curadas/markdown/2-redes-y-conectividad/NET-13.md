> **BRONZE Markdown** — `NET-13` · Servicio: **Amazon Route 53** · Fase 2 · Dominios examen: D2
> URL oficial: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html
> Título oficial: Choosing a routing policy - Amazon Route 53

When you create a record, you choose a routing policy, which determines how Amazon Route 53 responds to queries:

- **Simple routing policy** – Use for a single resource that
performs a given function for your domain, for example, a web server that serves
content for the example.com website. You can use simple routing to create
records in a private hosted zone.
- **Failover routing policy** – Use when you want to
configure active-passive failover. You can use failover routing to create
records in a private hosted zone.
- **Geolocation routing policy** – Use when you want to
route traffic based on the location of your users. You can use geolocation
routing to create records in a private hosted zone.
- **Geoproximity routing policy** – Use when you want to route traffic
based on the location of your resources and, optionally, shift traffic from resources in one location
to resources in another location. You can use geoproximity routing to create records in a private hosted zone.
- **Latency routing policy** – Use when you have resources
in multiple AWS Regions and you want to route traffic to the Region that
provides the best latency. You can use latency routing to create records in a
private hosted zone.
- **IP-based routing policy** – Use when you want to route
traffic based on the location of your users, and have the IP addresses that the
traffic originates from.
- **Multivalue answer routing policy** – Use when you want
Route 53 to respond to DNS queries with up to eight healthy records selected at
random. You can use multivalue answer routing to create records in a private
hosted zone.
- **Weighted routing policy** – Use to route traffic to
multiple resources in proportions that you specify. You can use weighted
routing to create records in a private hosted zone.

###### Topics

- Simple routing (./routing-policy-simple.html)
- Failover routing (./routing-policy-failover.html)
- Geolocation routing (./routing-policy-geo.html)
- Geoproximity routing (./routing-policy-geoproximity.html)
- Latency-based routing (./routing-policy-latency.html)
- IP-based routing (./routing-policy-ipbased.html)
- Multivalue answer routing (./routing-policy-multivalue.html)
- Weighted routing (./routing-policy-weighted.html)
- How Amazon Route 53 uses EDNS0 to estimate the location of a user (./routing-policy-edns0.html)

Document Conventions
Working with records
Simple routing


Thanks for letting us know we're doing a good job!

If you've got a moment, please tell us what we did right so we can do more of it.


Thanks for letting us know this page needs work. We're sorry we let you down.

If you've got a moment, please tell us how we can make the documentation better.


#### Next topic:

Simple routing

#### Previous topic:

Working with records
