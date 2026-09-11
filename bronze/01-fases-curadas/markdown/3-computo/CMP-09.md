> **BRONZE Markdown** — `CMP-09` · Servicio: **Amazon EC2** · Fase 3 · Dominios examen: D2
> URL oficial: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html
> Título oficial: Amazon Machine Images in Amazon EC2

An Amazon Machine Image (AMI) is an image that provides the software that is required to set up
and boot an Amazon EC2 instance. Each AMI also contains a block device mapping that specifies
the block devices to attach to the instances that you launch. You must specify an AMI
when you launch an instance. The AMI must be compatible with the instance type that you
chose for your instance. You can use an AMI provided by AWS, a public AMI, an AMI
that someone else shared with you, or an AMI that you purchased from the AWS Marketplace.

An AMI is specific to the following:

- Region
- Operating system
- Processor architecture
- Root volume type
- Virtualization type

You can launch multiple instances from a single AMI when you require multiple instances with the
same configuration. You can use different AMIs to launch instances when you require
instances with different configurations, as shown in the following diagram.

- ### Related resources

Amazon EC2 Instance Types Guide (https://docs.aws.amazon.com/ec2/latest/instancetypes/)Amazon EBS User Guide (https://docs.aws.amazon.com/ebs/latest/userguide/)Amazon EC2 Developer Guide (https://docs.aws.amazon.com/ec2/latest/devguide/)

#### Next topic:

AMI characteristics

#### Previous topic:

Best practices
