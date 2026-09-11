> **BRONZE Markdown** — `INT-03` · Servicio: **Amazon SNS** · Fase 6 · Dominios examen: D2
> URL oficial: https://docs.aws.amazon.com/sns/latest/dg/welcome.html
> Título oficial: What is Amazon SNS? - Amazon Simple Notification Service

Amazon Simple Notification Service (Amazon SNS) is a fully managed service that provides message delivery from
publishers (producers) to subscribers (consumers). Publishers communicate asynchronously
with subscribers by sending messages to a *topic*, which is
a logical access point and communication channel.

## How it works

In SNS, publishers send messages to a topic, which acts as a communication channel.
The topic acts as a logical access point, ensuring messages are delivered to multiple
subscribers across different platforms.

Subscribers to an SNS topic can receive messages through different endpoints,
depending on their use case, such as:

- Amazon SQS
- Lambda
- HTTP(S) endpoints
- Email
- Mobile push notifications
- Mobile text messages (SMS)
- Amazon Data Firehose
- Service providers (For example, Datadog, MongoDB, Splunk)

SNS supports both Application-to-Application (A2A) and Application-to-Person (A2P)
messaging, giving flexibility to send messages between different applications or
directly to mobile phones, email addresses, and more.

- ### On this page

How it works (#how-it-works)
- Accessing Amazon SNS (#welcome-accessing)
- Common Amazon SNS scenarios (#sns-common-scenarios)
- Pricing for Amazon SNS (#welcome-pricing)

#### Next topic:

Amazon SNS features and capabilities
