> **BRONZE Markdown** — `STG-06` · Servicio: **Amazon S3** · Fase 4 · Dominios examen: D1, D2
> URL oficial: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html
> Título oficial: Retaining multiple versions of objects with S3 Versioning

Versioning in Amazon S3 is a means of keeping multiple variants of an object in the same bucket.
You can use the S3 Versioning feature to preserve, retrieve, and restore every version of
every object stored in your buckets. With versioning you can recover more easily from both
unintended user actions and application failures. After versioning is enabled for a bucket,
if Amazon S3 receives multiple write requests for the same object simultaneously, it stores all
of those objects.

Versioning-enabled buckets can help you recover objects from accidental deletion or
overwrite. For example, if you delete an object, Amazon S3 inserts a delete marker instead of
removing the object permanently. The delete marker becomes the current object version. If
you overwrite an object, it results in a new object version in the bucket. You can always
restore the previous version. For more information, see Deleting object versions from a versioning-enabled bucket (./DeletingObjectVersions.html).

By default, S3 Versioning is disabled on buckets, and you must explicitly enable it. For
more information, see Enabling versioning on buckets (./manage-versioning-examples.html).

- ### On this page

Unversioned, versioning-enabled, and versioning-suspended buckets (#versioning-states)
- Using S3 Versioning with S3 Lifecycle (#versioning-lifecycle)
- ### Related resources

Amazon S3 API Reference (https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)AWS CLI commands for Amazon S3 (https://docs.aws.amazon.com/cli/latest/reference/s3/)SDKs & Tools  (https://aws.amazon.com/tools/)

#### Next topic:

S3 Versioning

#### Previous topic:

Monitoring and logging
