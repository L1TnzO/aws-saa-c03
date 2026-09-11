> **BRONZE Markdown** — `STG-10` · Servicio: **Amazon S3** · Fase 4 · Dominios examen: D4
> URL oficial: https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html
> Título oficial: Using Requester Pays general purpose buckets for storage transfers and usage

In general, bucket owners pay for all Amazon S3 storage and data transfer costs that are
associated with their bucket. However, you can configure a general purpose bucket to be a *Requester Pays* bucket. With Requester Pays buckets, the
requester instead of the bucket owner pays the cost of the request and the data download
from the bucket. The bucket owner always pays the cost of storing data.

Typically, you configure buckets to be Requester Pays buckets when you want to share data
but not incur charges associated with others accessing the data. For example, you might use
Requester Pays buckets when making available large datasets, such as zip code directories,
reference data, geospatial information, or web crawling data.

- ### On this page

How Requester Pays charges work (#ChargeDetails)
- ### Related resources

Amazon S3 API Reference (https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)AWS CLI commands for Amazon S3 (https://docs.aws.amazon.com/cli/latest/reference/s3/)SDKs & Tools  (https://aws.amazon.com/tools/)

#### Next topic:

Configuring Requester Pays

#### Previous topic:

Speed Comparison tool
