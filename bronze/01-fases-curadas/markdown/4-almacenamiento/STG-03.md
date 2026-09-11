> **BRONZE Markdown** — `STG-03` · Servicio: **Amazon S3** · Fase 4 · Dominios examen: D4
> URL oficial: https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html
> Título oficial: Managing the lifecycle of objects

S3 Lifecycle helps you store objects cost effectively throughout their lifecycle by
transitioning them to lower-cost storage classes, or, deleting expired objects on your
behalf. To manage the lifecycle of your objects, create an *S3 Lifecycle
configuration* for your bucket. An S3 Lifecycle configuration is a set of rules
that define actions that Amazon S3 applies to a group of objects. There are two types of
actions:

- **Transition actions** – These actions define
when objects transition to another storage class. For example, you might choose to
transition objects to the S3 Standard-IA storage class 30 days after creating them,
or archive objects to the S3 Glacier Flexible Retrieval storage class one year after
creating them. For more information, see Understanding and managing Amazon S3 storage classes (./storage-class-intro.html).
There are costs associated with lifecycle transition requests. For pricing
information, see Amazon S3
pricing (https://aws.amazon.com/s3/pricing/).
- **Expiration actions** – These actions define
when objects expire. Amazon S3 deletes expired objects on your behalf. For example, you
might to choose to expire objects after they have been stored for a regulatory
compliance period. For more information, see Expiring objects (./lifecycle-expire-general-considerations.html).
There are potential costs associated with lifecycle expiration only when you
expire objects in a storage class with a minimum storage duration. For more
information, see Minimum storage duration charge (./lifecycle-expire-general-considerations.html#lifecycle-expire-minimum-storage).

- ### On this page

Managing the complete lifecycle of objects (#lifecycle-config-overview-what)
- ### Related resources

Amazon S3 API Reference (https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)AWS CLI commands for Amazon S3 (https://docs.aws.amazon.com/cli/latest/reference/s3/)SDKs & Tools  (https://aws.amazon.com/tools/)

#### Next topic:

Transitioning objects

#### Previous topic:

Restoring an archived object
