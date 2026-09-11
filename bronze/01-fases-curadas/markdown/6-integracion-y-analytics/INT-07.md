> **BRONZE Markdown** — `INT-07` · Servicio: **Amazon MQ** · Fase 6 · Dominios examen: D2
> URL oficial: https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html
> Título oficial: What is Amazon MQ? - Amazon MQ

Amazon MQ is a managed message broker service for Apache ActiveMQ (https://activemq.apache.org/) Classic
and RabbitMQ (https://www.rabbitmq.com/) that manages the setup, operation, and maintenance of message brokers.
You can create a new Amazon MQ broker using industry standard messaging protocols,
or migrate existing message brokers to Amazon MQ without rewriting messaging code.

A *broker* is a message broker environment running on Amazon MQ.
It is the basic building block of Amazon MQ.
A *message* broker allows software applications and components
to communicate using various programming languages, operating systems, and formal messaging protocols.
You can use Amazon MQ brokers for communication between large scale,
cloud native applications and components.

###### Topics

- Amazon MQ features (#amazonmq-features)
- How can I get started with Amazon MQ? (#get-started)
- How can I provide feedback to Amazon MQ? (#amazon-mq-we-want-to-hear-from-you)

## Amazon MQ features

**Managed maintenance and version upgrades**

Amazon MQ performs maintenance (./maintaining-brokers.html) and
version upgrades (./upgrading-brokers.html)
for a message broker during your scheduled maintenance window (./maintaining-brokers.html).

**Monitor brokers with CloudWatch**

Amazon MQ is integrated with Amazon CloudWatch (./security-logging-monitoring.html)
so you can view and analyze metrics for your brokers and queues.
You can view and analyze metrics from the Amazon MQ console, the CloudWatch console, command line, and API.
Metrics are automatically collected and pushed to CloudWatch every minute.

**Security**

Amazon MQ provides encryption (./data-protection.html) of your messages at rest and in transit.
Connections to the broker use SSL, and access can be restricted to
a private endpoint within your Amazon VPC.
Additionally, you can use AWS Identity and Access Management (./security-iam.html) (IAM) to control the actions your
IAM users and groups can take on specific Amazon MQ brokers.

**Quorum queues for RabbitMQ on Amazon MQ**

Quorum queues (./quorum-queues.html) are a replicated queue type made up of a leader node (primary replica) and follower nodes (other replicas).
Each node is in a different availability zone, so if one node is temporarily unavailable,
message delivery continues with a newly elected leader replica in another availability zone.
Quorum queues are useful for handling poison messages,
which occur when a message fails and is requeued multiple times.

**Cross-Region data replication for ActiveMQ on Amazon MQ **

Cross-Region data replication (./crdr-for-active-mq.html) (CRDR) allows for asynchronous message replication from
the primary broker in a primary AWS Region to the replica broker in a replica Region.
By issuing a failover request to the Amazon MQ API,
the current replica broker is promoted to the primary broker role,
and the current primary broker is demoted to the replica role.

## How can I get started with Amazon MQ?

To get started with *ActiveMQ on Amazon MQ*, review the following documentation:

- Getting started: Creating and connecting to an ActiveMQ broker (./getting-started-activemq.html)
- Deployment options for Amazon MQ for ActiveMQ brokers (./amazon-mq-broker-architecture.html)
- ActiveMQ tutorials (./activemq-on-amazon-mq.html)
- Amazon MQ for ActiveMQ best practices (./best-practices-activemq.html)

To get started with *RabbitMQ on Amazon MQ*, review the following documentation:

- Getting started: Creating and connecting to a RabbitMQ broker (./getting-started-rabbitmq.html)
- Deployment options for Amazon MQ for RabbitMQ brokers (./rabbitmq-broker-architecture.html)
- RabbitMQ tutorials (./rabbitmq-on-amazon-mq.html)
- Amazon MQ for RabbitMQ best practices (./best-practices-rabbitmq.html)

To learn about Amazon MQ REST APIs, see the *Amazon MQ REST API Reference (https://docs.aws.amazon.com/amazon-mq/latest/api-reference/)*.

To learn about Amazon MQ AWS CLI commands, see Amazon MQ in the
*AWS CLI Command Reference* (https://docs.aws.amazon.com/cli/latest/reference/mq/).

## How can I provide feedback to Amazon MQ?

We welcome and encourage your feedback on the documentation.
You can use the thumbs up and thumbs down icons on the right hand side to submit feedback, or
you can use the
"Provide feedback" form linked below.

To contact the Amazon MQ team, use the Amazon MQ Discussion
Forum (https://forums.aws.amazon.com/forum.jspa?forumID=279).

Document Conventions
Setting up


Thanks for letting us know we're doing a good job!

If you've got a moment, please tell us what we did right so we can do more of it.


Thanks for letting us know this page needs work. We're sorry we let you down.

If you've got a moment, please tell us how we can make the documentation better.

- ### On this page

Amazon MQ features (#amazonmq-features)
- How can I get started with Amazon MQ? (#get-started)
- How can I provide feedback to Amazon MQ? (#amazon-mq-we-want-to-hear-from-you)

#### Next topic:

Setting up
