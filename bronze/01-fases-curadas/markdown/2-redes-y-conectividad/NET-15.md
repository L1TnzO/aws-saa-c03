> **BRONZE Markdown** — `NET-15` · Servicio: **AWS Global Accelerator** · Fase 2 · Dominios examen: D3, D4
> URL oficial: https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html
> Título oficial: What is AWS Global Accelerator?

AWS Global Accelerator is a service in which you create *accelerators* to improve the performance
of your applications for local and global users. Depending on the type of accelerator you choose, you can
gain additional benefits:

- With a standard accelerator, you can improve availability of your internet applications
that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic over the AWS
global network to endpoints in the nearest Region to the client.
- With a custom routing accelerator, you can map one or more users to a specific destination among
many destinations.

Global Accelerator is a global service that supports endpoints in multiple AWS Regions. To determine if Global Accelerator or
other services are currently supported in a specific AWS Region, see the
AWS
Regional Services List (https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/).

By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses
are anycast from the AWS edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack, Global Accelerator provides
a total of four addresses: two static IPv4 addresses and two static IPv6 addresses. For IPv4, instead of using the addresses
that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges that you
bring to Global Accelerator (BYOIP).


#### Next topic:

Components
