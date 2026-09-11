> **BRONZE Markdown** — `CMP-08` · Servicio: **Amazon EC2** · Fase 3 · Dominios examen: D4
> URL oficial: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html
> Título oficial: Hibernate your Amazon EC2 instance

When you hibernate an instance, Amazon EC2 signals the operating system to perform hibernation
(suspend-to-disk). Hibernation saves the contents from the instance memory (RAM) to your
Amazon Elastic Block Store (Amazon EBS) root volume. Amazon EC2 persists the instance's EBS root volume and any
attached EBS data volumes. When your instance is started:

- The EBS root volume is restored to its previous state
- The RAM contents are reloaded
- The processes that were previously running on the instance are resumed
- Previously attached data volumes are reattached and the instance retains its
instance ID

You can hibernate an instance only if it's enabled
for hibernation (./enabling-hibernation.html) and it meets the hibernation prerequisites (./hibernating-prerequisites.html).

If an instance or application takes a long time to bootstrap and build a memory footprint
to become fully productive, you can use hibernation to pre-warm the instance. To
pre-warm the instance, you:

1. Launch it with hibernation enabled.
2. Bring it to a desired state.
3. Hibernate it so that it's ready to be resumed to the desired state whenever
needed.

You're not charged for instance usage for a hibernated instance when it is in the
`stopped` state or for data transfer when the contents of the RAM are
transferred to the EBS root volume. You are charged for storage of any EBS volumes,
including storage for the RAM contents.

If you no longer need an instance, you can terminate it at any time, including when it is
in a `stopped` (hibernated) state. For more information, see Terminate Amazon EC2 instances (./terminating-instances.html).

###### Contents

- How it works (./instance-hibernate-overview.html)
- Prerequisites (./hibernating-prerequisites.html)
- Configure a Linux AMI to support hibernation (./hibernation-enabled-AMI.html)
- Enable instance
hibernation (./enabling-hibernation.html)
- Disable KASLR on an instance (Ubuntu only) (./hibernation-disable-kaslr.html)
- Hibernate an instance (./hibernating-instances.html)
- Start a hibernated
instance (./hibernating-resuming.html)
- Troubleshoot (./troubleshoot-instance-hibernate.html)

Document Conventions
Enable stop protection
How it works


Thanks for letting us know we're doing a good job!

If you've got a moment, please tell us what we did right so we can do more of it.


Thanks for letting us know this page needs work. We're sorry we let you down.

If you've got a moment, please tell us how we can make the documentation better.

- ### Related resources

Amazon EC2 Instance Types Guide (https://docs.aws.amazon.com/ec2/latest/instancetypes/)Amazon EBS User Guide (https://docs.aws.amazon.com/ebs/latest/userguide/)Amazon EC2 Developer Guide (https://docs.aws.amazon.com/ec2/latest/devguide/)

#### Next topic:

How it works

#### Previous topic:

Enable stop protection
