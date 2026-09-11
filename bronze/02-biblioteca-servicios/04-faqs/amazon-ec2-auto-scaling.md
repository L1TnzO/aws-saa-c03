[Skip to main content](#aws-page-content-main)

Amazon EC2 Auto Scaling

- [Overview](/ec2/autoscaling/)
- [Features](/ec2/autoscaling/features/)
- [Pricing](/ec2/autoscaling/pricing/)
- [Getting Started](/ec2/autoscaling/getting-started/)
- [Resources](/ec2/autoscaling/resources/)
- More

# Amazon EC2 Auto Scaling FAQs

- [General](#general--sp3ge2)
  26
- [Replacing Impaired Instances](#replacing-impaired-instances--sp3ge2)
  5
- [Security](#security--sp3ge2)
  3
- [Cost Optimization](#cost-optimization--sp3ge2)
  7
- [Pricing](#pricing--sp3ge2)
  1

## General

[Open all](#)

### Q: What is Amazon EC2 Auto Scaling?

### Q. When should I use Amazon EC2 Auto Scaling vs. AWS Auto Scaling?

### Q: How is Predictive Scaling Policy different from Predictive Scaling of AWS Auto Scaling plan?

### Q: What are the benefits of using Amazon EC2 Auto Scaling?

### Q: What is fleet management and how is it different from dynamic scaling?

### Q: What is target tracking?

### Q: What is an EC2 Auto Scaling group (ASG)?

### Q: What happens to my Amazon EC2 instances if I delete my ASG?

### Q: How do I know when EC2 Auto Scaling is launching or terminating the EC2 instances in an EC2 Auto Scaling group?

### Q: What is a launch configuration?

### Q: How many instances can an EC2 Auto Scaling group have?

### Q: What happens if a scaling activity causes me to reach my Amazon EC2 limit of instances?

### Q: Can EC2 Auto Scaling groups span multiple AWS regions?

### Q: How can I implement changes across multiple instances in an EC2 Auto Scaling group?

### Q: If I have data installed in an EC2 Auto Scaling group, and a new instance is dynamically created later, is the data copied over to the new instances?

### Q: When I create an EC2 Auto Scaling group from an existing instance, does it create a new AMI (Amazon Machine Image)?

### Q: How does Amazon EC2 Auto Scaling balance capacity?

### Q: What are lifecycle hooks?

### Q: What are the characteristics of an “unhealthy” instance?

### Q: Can I customize a health check?

### Q: Can I suspend health checks (for example, to evaluate unhealthy instances)?

### Q: Which health check type should I select?

### Q: Can I use Amazon EC2 Auto Scaling for health checks and to replace unhealthy instances if I’m not using Elastic Load Balancing (ELB)?

### Q: Do the Elastic Load Balancing (ELB) health checks work with Application Load Balancers and Network Load Balancers? Will an instance be marked as unhealthy if any target group associated with it becomes unhealthy?

### Q: Is there any way to use Amazon EC2 Auto Scaling to only add a volume without adding an instance?

### Q: What does the term “stateful instances” refer to?

## Replacing Impaired Instances

[Open all](#)

### Q: How does Amazon EC2 Auto Scaling replace an impaired instance?

### Q: How do I control which instances Amazon EC2 Auto Scaling terminates when scaling in, and how do I protect data on an instance?

### Q: How long is the turn-around time for Amazon EC2 Auto Scaling to spin up a new instance at inService state after detecting an unhealthy server?

### Q: If Elastic Load Balancing (ELB) determines that an instance is unhealthy, and moved offline, will the previous requests sent to the failed instance be queued and rerouted to other instances within the group?

### Q: If you don’t use Elastic Load Balancing (ELB) how would users be directed to the other servers in a group if there was a failure?

## Security

[Open all](#)

### Q: How do I control access to Amazon EC2 Auto Scaling resources?

Amazon EC2 Auto Scaling integrates with [AWS Identity and Access Management](/iam/) (IAM), a service that enables you to do the following:

- Create users and groups under your organization's AWS account
- Assign unique security credentials to each user under your AWS account
- Control each user's permissions to perform tasks using AWS resources
- Allow the users in another AWS account to share your AWS resources
- Create roles for your AWS account and define the users or services that can assume them
- Use existing identities for your enterprise to grant permissions to perform tasks using AWS resources

For example, you could create an IAM policy that grants the Managers group permission to use only the *DescribeAutoScalingGroups*, *DescribeLaunchConfigurations*, *DescribeScalingActivities*, and *DescribePolicies* API operations. Users in the Managers group could then use those operations with any Amazon EC2 Auto Scaling groups and launch configurations. With Amazon EC2 Auto Scaling resource-level permissions, you can restrict access to a particular EC2 Auto Scaling group or launch configuration.

For more information, see the [Controlling Access to Your Auto Scaling Resources](https://docs.aws.amazon.com/autoscaling/latest/userguide/control-access-using-iam.html) section of the Amazon EC2 Auto Scaling user guide.

### Q: Can you define a default admin password on Windows instances with Amazon EC2 Auto Scaling?

### Q: Are CloudWatch agents automatically installed on EC2 instances when you create an Amazon EC2 Auto Scaling group?

## Cost Optimization

[Open all](#)

### Q: Can I create a single ASG to scale instances across different purchase options?

### Q: Can I use ASGs to launch and manage just Spot Instances or just On-Demand instances and RIs?

### Q: Can I have a base capacity with On-Demand instances and RIs, and scale my ASG out on Spot instances?

### Q: Can I modify the configuration of an ASG to update the different properties pertaining to combining purchasing models and specifying multiple instance types?

### Q: Can I use RI discounts with On-Demand Instances in an ASG?

### Q: Can I specify instances of different sizes (CPU cores, memory) in my Auto Scaling group?

### Q: What if the instance types I like are not available in an Availability Zone?

## Pricing

[Open all](#)

### Q: What are the costs for using Amazon EC2 Auto Scaling?

## Get started

[](/ec2/autoscaling/features/)

None

## Learn more about Amazon EC2 Auto Scaling features

Learn more

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/compute/approved/images/7c490010-740a-430f-9900-9f4488d7ace4.b43b615ae65f941a6ed2a0327fcfd3189638b790.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Getting started

## Ready to get started?

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/0ecc02ef-9c29-4da9-8901-89866f339b2b.43893f92a65dabfe5aca9d988c1579046af15e7c.png)

## Did you find what you were looking for today?

Let us know so we can improve the quality of the content on our pages.

Yes

No
