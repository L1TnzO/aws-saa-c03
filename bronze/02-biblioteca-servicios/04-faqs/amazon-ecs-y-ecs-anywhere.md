[Skip to main content](#aws-page-content-main)

Amazon Elastic Container Service

- [Overview](/ecs/)
- Features
- [Pricing](/ecs/pricing/)
- [Getting Started](/ecs/getting-started/)
- [Resources](/ecs/resources/)
- More

# Amazon ECS FAQs

- [General](#general--g1iyyn)
  5
- [Using Amazon ECS](#using-amazon-ecs--g1iyyn)
  17
- [Security and Compliance](#security-and-compliance--g1iyyn)
  8
- [Service Level Agreement](#service-level-agreement--g1iyyn)
  2
- [ECS Managed Instances](#ecs-managed-instances--g1iyyn)
  11
- [Amazon ECS Express Mode](#amazon-ecs-express-mode--g1iyyn)
  5

## General

[Open all](#)

### What is Amazon Elastic Container Service (ECS)?

### Why should I use Amazon ECS?

### What role does Amazon ECS play within AWS?

### What is the pricing for Amazon ECS?

There is no additional charge for Amazon ECS. You pay for AWS resources (for example, Amazon EC2 instances, AWS Fargate resources or Amazon EBS volumes) you create to store and run your application. You only pay for what you use, as you use it; there are no minimum fees and no upfront commitments. There are two different charge models for Amazon ECS. Amazon ECS on AWS Outposts follows the same model as Amazon EC2 Launch Type. 

- **Amazon EC2 Launch Type Model: **There is no additional charge for Amazon EC2 launch type. You pay for AWS resources (such as Amazon EC2 instances or Amazon EBS volumes) you create to store and run your application. You only pay for what you use, as you use it; there are no minimum fees and no upfront commitments. See detailed pricing information on the [Amazon EC2 pricing page](/ec2/pricing/).
- **AWS Fargate Launch Type Model: **With AWS Fargate, you pay for the amount of vCPU and memory resources that your containerized application requests. vCPU and memory resources are calculated from the time your container images are pulled until the Amazon ECS Task terminates, rounded up to the nearest second. A minimum charge of one minute applies. See detailed pricing information on the [AWS Fargate pricing page](/fargate/pricing/?nc=sn&loc=2).

### How is Amazon ECS different from AWS Lambda?

## Using Amazon ECS

[Open all](#)

### How do I get started using Amazon ECS?

### What is an Amazon ECS task?

### How do I run applications and services on Amazon ECS?

### How does Amazon ECS support autoscaling of applications?

### What compute options are available with Amazon ECS?

Amazon ECS enables you to run a wide variety of applications with the same experience and tooling across a diverse set of compute options:

- [AWS Fargate](/fargate/): AWS Fargate is a serverless, pay-as-you-go compute engine. It removes the burden of server provisioning, cluster management, and orchestration. Amazon ECS uses containers provisioned by AWS Fargate to automatically scale, load balance, and manage scheduling of your containers for availability, providing an easier way to build and operate containerized applications.
- [Amazon EC2](/ec2/): With Amazon on ECS on EC2, you own the EC2 instances and have complete control over all aspects of infrastructure management. For instance, you can select specific EC2 instance types or customize the underlying operating system. You can use Auto Scaling Group Capacity Providers to manage the scaling of EC2 instances.
- On-premises virtual machines (VM) or servers:
  - Amazon ECS Anywhere provides support for registering an external instance such as an on-premises server or virtual machine (VM), to your Amazon ECS cluster. 
  - The capacity can be located in any of the following AWS resources:    
    - Availability Zones
    - Local Zones
    - Wavelength Zones
    - AWS Regions
    - AWS Outposts

### Does Amazon ECS support the autoscaling of compute infrastructure?

### What are Amazon ECS Capacity Providers?

### Does Amazon ECS support batch jobs?

### Can I use my own Amazon Machine Image (AMI)?

### How can I configure my container instances to pull from Amazon Elastic Container Registry (ECR)?

### When should I use Amazon ECS with AWS Fargate?

### How does Amazon ECS support ingress traffic?

### What networking options does Amazon ECS support?

Amazon ECS supports Docker networking and integrates with Amazon VPC to provide isolation for containers. This gives you control over how containers connect with other services and external traffic. With Amazon ECS, you can choose between four networking modes for your containers that cater towards different use cases:

- VPC Mode: This mode assigns each running Amazon ECS task a dedicated elastic networking interface, allowing containers full networking features in a VPC, just like Amazon EC2 instances.
- Bridge Mode: This mode creates a Linux bridge that connects all containers running on the host in a local virtual network, which can be accessed through the host's default network connection.
- Host Mode: This mode adds containers directly to the host’s network stack, exposing containers on the host's network with no isolation.
- None: This mode disables external networking for containers.

### How does Amazon ECS support service-to-service communication?

- **Service Connect: **Amazon ECS Service Connect simplifies service discovery, connectivity, and traffic observability for Amazon ECS. It helps you build applications faster by letting you focus on the application code and not on your networking infrastructure. You can use Amazon ECS Service Connect to define logical names for your service endpoints and use them in your client applications to connect to dependencies. Amazon ECS Service Connect helps send your traffic to healthy endpoints and provides rich traffic telemetry in the Amazon ECS console and in Amazon CloudWatch. Native Amazon ECS deployments are more robust with Amazon ECS Service Connect, as it supports automatic connection draining that helps your client applications switch to a new version of the service endpoint without encountering traffic errors. With Amazon ECS Service Connect, you can:
  - Set the way client applications connect to their dependencies in just one step
  - Write and operate resilient distributed applications with logical naming
  - Monitor and distribute traffic between Amazon ECS tasks without deploying and configuring load balancers
  - Deploy services faster and deliver seamless integration of Amazon ECS microservices comprising an application
- **Service Discovery: **Amazon ECS is integrated with [AWS Cloud Map](/cloud-map/) to make it easy for your containerized services to discover and connect with each other. AWS Cloud Map is a cloud resource discovery service that lets you define custom names for your application resources. It increases your application availability because your web service will always discover the most up-to-date locations of these dynamically changing resources.

### How does Amazon ECS provide observability for applications?

- **Monitoring**
  - You can monitor your Amazon ECS resources using Amazon CloudWatch, which collects and processes raw data from Amazon ECS into readable, near real-time metrics. These statistics are recorded for a period of two weeks so that you can access historical information and gain a better perspective on how your clusters or services are performing. There is no additional charge for this. To learn more, please visit, [Amazon ECS CloudWatch metrics](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html).
  - For enhanced metrics, use CloudWatch Container Insights to collect, aggregate, and summarize metrics and logs from your containerized applications and microservices, available for your Amazon ECS clusters running on Amazon EC2 and AWS Fargate. CloudWatch automatically collects metrics for many resources, such as CPU, memory, disk, and network. Container Insights also provides diagnostic information, such as container restart failures, to help you isolate issues and resolve them quickly. For Amazon ECS, Container Insights collects metrics at the cluster, task and service levels on both Linux and Windows Server instances. It can collect metrics at the instance-level only on Linux instances.Network metrics are available only for containers in bridge network mode and awsvpc network mode. They are not available for containers in host network mode. To learn more, please visit, [Using Container Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html).
- **Logging**
  - Amazon ECS allows you to record all your Amazon ECS API calls and have the log files delivered to you through [AWS CloudTrail](/cloudtrail/). The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by Amazon ECS. CloudTrail provides you a history of API calls made from the AWS Management Console, AWS SDKs, and AWS CLI. It enables security analysis, resource change tracking, and compliance auditing.
- **AWS Config**
  - [AWS Config](/config/) integrates with Amazon ECS to provide you visibility into your configuration of AWS resources in your AWS account. AWS Config allows users to monitor and track how resources were configured, how they relate to one another, and how the configurations and relationships change over time. AWS Config enables you to simplify compliance and security, operational troubleshooting, and resource administration.
- **Third Party**
  - Amazon ECS supports an entire ecosystem of third-party observability vendors by embracing open container standards. For more information view the [Amazon ECS Partners page](/ecs/partners/).

### How can I monitor cost information for my Amazon ECS tasks running on AWS Fargate?

### How can I monitor cost information for my Amazon ECS tasks running on Amazon EC2 instances?

## Security and Compliance

[Open all](#)

### How does Amazon ECS isolate containers belonging to different customers?

Amazon ECS schedules containers for execution on customer-controlled Amazon EC2 instances or with AWS Fargate and builds on the same isolation controls and compliance settings available for Amazon EC2 customers. Your compute instances are located in a Virtual Private Cloud (VPC) with an IP range that you specify. You decide which instances are exposed to the Internet and which remain private.

- Your Amazon EC2 instances use an IAM role to access the Amazon ECS service.
- Your Amazon ECS tasks use an IAM role to access services and resources.
- Your Amazon ECS tasks running on AWS Fargate run in isolated virtual machines.
- Security Groups and networks ACLs allow you to control inbound and outbound network access to and from your instances.
- You can connect your existing IT infrastructure to resources in your VPC using industry-standard encrypted IPsec VPN connections.
- You can provision your Amazon EC2 resources as Dedicated Instances. Dedicated Instances are Amazon EC2 Instances that run on hardware dedicated to a single customer for additional isolation.

### Can I apply additional security configuration and isolation frameworks to my container instances?

### Can I segregate workloads with different security requirements across different environments?

### Does Amazon ECS support retrieving container images from a private or internal source?

### How do I configure IAM roles for Amazon ECS tasks?

### With which compliance programs does Amazon ECS conform?

### Can I use Amazon ECS for Protected Health Information (PHI) and other HIPAA-regulated workloads?

### Can I use Amazon ECS for US Government-regulated workloads or processing sensitive Controlled Unclassified Information (CUI)?

## Service Level Agreement

[Open all](#)

### What does the Amazon ECS SLA guarantee?

### How do I know if I qualify for a SLA Service Credit?

## ECS Managed Instances

[Open all](#)

### What is Amazon ECS Managed Instances?

### How can I get started with Amazon ECS Managed Instances?

### How does Amazon ECS Managed Instances work?

### What is AWS responsible for in ECS clusters using Amazon ECS Managed Instances?

### What is the difference between Amazon ECS Managed Instances and Amazon ECS with AWS Fargate?

### How does Amazon ECS Managed Instances help keep my infrastructure secure and up to date?

### How does Amazon ECS Managed Instances help with cost optimization?

### What networking modes does Amazon ECS Managed Instances support?

### Can I see and configure the EC2 instances launched by Amazon ECS Managed Instances?

### Does Amazon ECS Managed Instances support advanced container capabilities?

### How can I observe the actions Amazon ECS Managed Instances takes on my infrastructure?

## Amazon ECS Express Mode

[Open all](#)

### What is Amazon ECS Express Mode?

### How can I get started?

### How does Amazon ECS Express Mode work? 

### Can I have access to resources created by Amazon ECS Express Mode after deployment? 

### How much does Amazon ECS Express Mode cost?

## Get started with Amazon ECS

[](https://console.aws.amazon.com/ecs/home?region=us-east-1#/getStarted)

None

## Get started with Amazon ECS

Visit the Amazon ECS console

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

None

## Ready to build?

Sign up

[](/contact-us/)

None

## Have more questions?

Contact us
