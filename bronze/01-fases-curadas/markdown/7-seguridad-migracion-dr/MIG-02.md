> **BRONZE Markdown** — `MIG-02` · Servicio: **AWS DMS** · Fase 7 · Dominios examen: D3, D4
> URL oficial: https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html
> Título oficial: What is AWS Database Migration Service?

AWS Database Migration Service (AWS DMS) is a cloud service that makes it possible to migrate relational
databases, data warehouses, NoSQL databases, and other types of data stores. You can use AWS DMS
to migrate your data into the AWS Cloud or between combinations of cloud and on-premises setups.

With AWS DMS, you can discover your source data stores, convert your source schemas, and migrate your data.

- To discover your source data infrastructure, you can use DMS Fleet Advisor. This service collects
data from your on-premises database and analytic servers, and builds an inventory of servers, databases,
and schemas that you can migrate to the AWS Cloud.
- To migrate to a different database engine, you can use DMS Schema Conversion. This service automatically
assesses and converts your source schemas to a new target engine. Alternatively, you can download the
AWS Schema Conversion Tool (AWS SCT) to your local PC to convert your source schemas.
- After you convert your source schemas and apply the converted code to your target database,
you can use AWS DMS to migrate your data. You can perform one-time migrations or replicate ongoing changes
to keep sources and targets in sync. Because AWS DMS is a part of the AWS Cloud, you get the cost
efficiency, speed to market, security, and flexibility that AWS services offer.

At a basic level, AWS DMS is a server in the AWS Cloud that runs replication software. You
create a source and target connection to tell AWS DMS where to extract data from and where to
load it. Next, you schedule a task that runs on this server to move your data. AWS DMS creates the tables and
associated primary keys if they don't exist on the target. You can create the target
tables yourself if you prefer. Or you can use DMS Schema Conversion to create some or all
of the target tables, indexes, views, triggers, and so on.

The following diagram illustrates the AWS DMS replication process.

- ### On this page

Migration tasks that AWS DMS performs (#Welcome.Tasks)

#### Next topic:

Terminology and concepts
