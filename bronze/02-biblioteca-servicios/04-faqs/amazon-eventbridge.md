[Skip to main content](#aws-page-content-main)

Amazon EventBridge

- [Overview](/eventbridge/)
- Features
- [Pricing](/eventbridge/pricing/)
- [Resources](/eventbridge/resources/)
- [FAQs](/eventbridge/faqs/)
- More

# Amazon EventBridge FAQs

- [Overview](#overview--jt348y)
  11
- [Limits and performance](#limits-and-performance--jt348y)
  5
- [Schema Registry](#schema-registry--jt348y)
  11
- [Pipes](#pipes--jt348y)
  11
- [Scheduler](#scheduler--jt348y)
  14
- [Global endpoints](#global-endpoints--jt348y)
  16
- [Cost and billing](#cost-and-billing--jt348y)
  2
- [Architecture and design](#architecture-and-design--jt348y)
  4
- [Integrations](#integrations--jt348y)
  4

## Overview

[Open all](#)

### What is Amazon EventBridge?

### How can I get started using EventBridge?

### Can I publish my own events to EventBridge?

### What is the format of an event?

### How do I filter which events are delivered to a target?

### How do I secure access to EventBridge?

### Which AWS services are integrated as event sources for Amazon EventBridge?

### Which AWS services are integrated as event targets for EventBridge?

### What is EventBridge Archive and Replay Events?

### What is EventBridge API Destinations?

### What is a Connection for an API destination? How do I set up API destinations?

## Limits and performance

[Open all](#)

### What are the service limits?

### What is the latency that I can expect between sending and receiving an event?

### Does EventBridge support resource tagging?

### What throughput can I expect from EventBridge?

### Does EventBridge have a Service Level Agreement?

## Schema Registry

[Open all](#)

### What is a schema?

### What is a schema registry?

### What is the schema discovery feature?

### Can I discover schemas from events delivered across other accounts?

### How much does the schema registry cost?

### How does the schema registry reduce the amount of code I need to write?

The Schema registry reduces the amount of code by enabling you to do the following:

- Identify schema automatically for any events sent to your EventBridge event bus, and store them in the registry, saving you from having to manage your event schema manually.
- Write applications that handle events on your bus, generate and download code bindings for schema to use strong-typed objects directly in your code.

Code bindings reduce the overhead for de-seralization, validation, and guesswork for your event handler.

### Why should I use the schema registry?

### Which IDEs does the schema registry support?

### Can I use schema with the AWS Serverless Application Model (SAM)?

### In which languages can I generate code from my schemas?

### In which AWS Regions is the schema registry available?

The EventBridge schema registry is available in the following Regions:

- US East (Ohio and N. Virginia)
- US West (N. California and Oregon)
- Asia Pacific (Hong Kong, Mumbai, Seoul, Singapore, Sydney, and Tokyo)
- Canada (Central)
- Europe (Frankfurt, Ireland, London, Paris, and Stockholm)
- South America (São Paulo)

## Pipes

[Open all](#)

### What is Amazon EventBridge Pipes?

### How do I get started with EventBridge Pipes?

### What are the possible event sources for EventBridge Pipes?

### How does transformation and enrichment work?

### Do I need to use an EventBridge event bus to use EventBridge Pipes?

### What is the difference between EventBridge event bus and EventBridge Pipes?

### How is EventBridge Pipes different from AWS Lambda’s Event Source Mapping (ESM)?

### Does EventBridge Pipes provide ordering guarantees?

### Does EventBridge Pipes support batching events?

### Can I get a history of EventBridge Pipes API calls made on my account for security analysis and operational troubleshooting purposes?

### What does EventBridge Pipes cost?

## Scheduler

[Open all](#)

### What is Amazon EventBridge Scheduler?

### How do I get started with EventBridge Scheduler?

### What is the difference between EventBridge Scheduler and Scheduled Rules?

### When should I use EventBridge Scheduled Rules or EventBridge Scheduler?

### How does this feature work with other AWS services?

### How do I update my schedules?

### Does EventBridge Scheduler support all time zones?

### How does EventBridge Scheduler verify scheduled delivery?

### Is EventBridge Scheduler's delete upon completion applicable to all scheduling patterns?

### Can I update my schedule after delete upon completion has been set?

### What happens if I disable a schedule with delete upon completion activated before it's scheduled invocation?

### What happens if my recurring schedule set with delete after completion has no end date?

### Can I schedule a task for services outside of AWS, like my on-premises server or external SaaS products?

### What does EventBridge Scheduler Cost?

## Global endpoints

[Open all](#)

### What are global endpoints?

### Why should I use global endpoints?

### How does global endpoint improve the availability of my applications?

### What type of applications are well suited for global endpoints?

### What metrics should I use to failover my global endpoint?

### Should I use metrics from my subscriber to failover my global endpoint?

### What is the expected Recovery Time Objective (RTO) and Recovery Point Objective (RPO)?

### Should I turn on replication?

### What’s the best practice for managing quotas in both my Regions?

### Is there an easier way to replicate my architecture in my secondary Region?

### Can I use any account, any Region, and any bus for my secondary architecture?

### Do global endpoints work with AWS events from CloudTrail, S3, and other AWS services?

### Do you support latency-based routing?

### How much do global endpoints cost?

### Will I be charged for replication?

### In which Regions are global endpoints available?

Global endpoints are available in the following Regions:

- US East (Ohio and N. Virginia)
- US West (N. California and Oregon),
- Asia Pacific (Mumbai, Osaka, Seoul, Singapore, Sydney and Tokyo)
- Canada (Central)
- Europe (Frankfurt, Ireland, London, Paris and Stockholm)
- South America (São Paulo)

## Cost and billing

[Open all](#)

### What does EventBridge cost?

### Will I be charged for events sent by a partner to an event source that does not have an event bus attached?

## Architecture and design

[Open all](#)

### Can I have a target that sends events to another account?

### Can I use CloudFormation with EventBridge?

### When should I use EventBridge and when should I use SNS?

### When do I use EventBridge vs. AppFabric?

## Integrations

[Open all](#)

### Why would I integrate my SaaS application with EventBridge?

### My SaaS company would be a great event source. How do I get on-boarded?

### How much effort will be required for an SaaS vendor to integrate with EventBridge?

### Which SaaS integrations are supported?
