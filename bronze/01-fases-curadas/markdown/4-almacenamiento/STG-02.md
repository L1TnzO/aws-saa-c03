> **BRONZE Markdown** — `STG-02` · Servicio: **Amazon S3** · Fase 4 · Dominios examen: D4
> URL oficial: https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html
> Título oficial: Understanding and managing Amazon S3 storage classes

Each object in Amazon S3 has a storage class associated with it. By default, objects in S3 are stored in the S3 Standard storage class, however Amazon S3 offers a range of other storage classes for the objects that you store. You choose a class
depending on your use case scenario and performance access requirements. Choosing a storage class designed for your use case lets you optimize storage costs, performance, and availability for your objects. All of these storage classes offer high durability.

The following sections provide details of the various storage classes and how to set the
storage class for your objects.

###### Topics

- Storage classes for frequently accessed objects (#sc-freq-data-access)
- Storage class for automatically optimizing data with changing or unknown access patterns (#sc-dynamic-data-access)
- Storage classes for infrequently accessed objects (#sc-infreq-data-access)
- Storage classes for rarely accessed objects (#sc-glacier)
- Storage class for Amazon S3 on Outposts (#s3-outposts)
- Comparing the Amazon S3 storage classes (#sc-compare)
- Setting the storage class of an object (./sc-howtoset.html)
- Amazon S3 analytics – Storage Class Analysis (./analytics-storage-class.html)
- Managing storage costs with Amazon S3 Intelligent-Tiering (./intelligent-tiering.html)
- Understanding S3 Glacier storage classes for long-term data storage (./glacier-storage-classes.html)
- Working with archived objects (./archived-objects.html)

## Storage classes for frequently accessed objects

For performance-sensitive use cases (those that require millisecond access time) and
frequently accessed data, Amazon S3 provides the following storage classes:

- **S3 Standard** (`STANDARD`) – The default storage class. If you
don't specify the storage class when you upload an object, Amazon S3 assigns the S3 Standard
storage class. To help you optimize costs between S3 Standard and S3 Standard-IA you can use Amazon S3 analytics – Storage Class Analysis (./analytics-storage-class.html).
- **S3 Express One Zone** (`EXPRESS_ONEZONE`) – Amazon S3 Express One Zone is a
high-performance, single-zone Amazon S3 storage class that is purpose-built to deliver
consistent, single-digit millisecond data access for your most latency-sensitive
applications. S3 Express One Zone is the lowest latency cloud object storage class available
today, with data access speed up to 10x faster and with request costs 50 percent lower
than S3 Standard. With S3 Express One Zone, your data is redundantly stored on multiple devices
within a single Availability Zone. For more information, see S3 Express One Zone (./directory-bucket-high-performance.html#s3-express-one-zone).
- **Reduced Redundancy
Storage ** (`REDUCED_REDUNDANCY`) – The Reduced Redundancy
Storage (RRS) class is designed for noncritical, reproducible data that can be
stored with less redundancy than the S3 Standard storage class.

###### Important

We recommend not using this storage class. The S3 Standard storage class is more
cost-effective.
For durability, RRS objects have an average annual expected loss of 0.01 percent of
objects. If an RRS object is lost, when requests are made to that object, Amazon S3 returns a
405 error.

## Storage class for automatically optimizing data with changing or unknown access patterns

**S3 Intelligent-Tiering** (`INTELLIGENT_TIERING`) is an Amazon S3 storage class that's
designed to optimize storage costs by automatically moving data to the most cost-effective
access tier, without performance impact or operational overhead. S3 Intelligent-Tiering is the
only cloud storage class that delivers automatic cost savings by moving data on a granular
object level between access tiers when access patterns change. S3 Intelligent-Tiering is the
ideal storage class when you want to optimize storage costs for data that has unknown or
changing access patterns. There are no retrieval fees for S3 Intelligent-Tiering.

For a small monthly object monitoring and automation fee, S3 Intelligent-Tiering monitors
access patterns and automatically moves objects that have not been accessed to lower-cost
access tiers. S3 Intelligent-Tiering delivers automatic storage cost savings in three low-latency
and high-throughput access tiers. For data that can be accessed asynchronously, you can choose
to activate automatic archiving capabilities within the S3 Intelligent-Tiering storage class.
S3 Intelligent-Tiering is designed for 99.9% availability and 99.999999999% durability.

S3 Intelligent-Tiering automatically stores objects in three access tiers:

- **Frequent Access** – Objects that are uploaded or
transitioned to S3 Intelligent-Tiering are automatically stored in the
Frequent Access tier.
- **Infrequent Access** – S3 Intelligent-Tiering
moves objects that have not been accessed in 30 consecutive days to the
Infrequent Access tier.
- **Archive Instant Access** – With
S3 Intelligent-Tiering, any existing objects that have not been accessed for 90 consecutive
days are automatically moved to the Archive Instant Access tier.

In addition to these three tiers, S3 Intelligent-Tiering offers two optional archive access
tiers:

- **Archive Access** – S3 Intelligent-Tiering
provides you with the option to activate the Archive Access tier for data that can be
accessed asynchronously. After activation, the Archive Access tier automatically
archives objects that have not been accessed for a minimum of 90 consecutive days.
- **Deep Archive Access** – S3 Intelligent-Tiering
provides you with the option to activate the Deep Archive Access tier for data that can be
accessed asynchronously. After activation, the Deep Archive Access tier automatically
archives objects that have not been accessed for a minimum of 180 consecutive days.

- ### On this page

Frequently accessed objects (#sc-freq-data-access)
- Automatically optimizing data with changing or unknown access
patterns (#sc-dynamic-data-access)
- Infrequently accessed objects (#sc-infreq-data-access)
- Rarely accessed objects (#sc-glacier)
- Amazon S3 on Outposts (#s3-outposts)
- Comparing storage classes (#sc-compare)
- ### Related resources

Amazon S3 API Reference (https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)AWS CLI commands for Amazon S3 (https://docs.aws.amazon.com/cli/latest/reference/s3/)SDKs & Tools  (https://aws.amazon.com/tools/)

#### Next topic:

Setting the storage class of an object

#### Previous topic:

Billing for Amazon S3 error responses
