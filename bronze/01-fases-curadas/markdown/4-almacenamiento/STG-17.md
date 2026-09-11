> **BRONZE Markdown** — `STG-17` · Servicio: **AWS Backup** · Fase 4 · Dominios examen: D1, D2, D4
> URL oficial: https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisawsbackup.html
> Título oficial: What is AWS Backup? - AWS Backup

AWS Backup is a fully-managed service that makes it easy to centralize and automate data
protection across AWS services, in the cloud, and on premises. Using this service, you can
configure backup policies and monitor activity for your AWS resources in one place. It allows
you to automate and consolidate backup tasks that were previously performed service-by-service,
and removes the need to create custom scripts and manual processes. With a few clicks in the
AWS Backup console, you can automate your data protection policies and schedules.

AWS Backup does not govern backups you take in your AWS environment outside of AWS Backup.
Therefore, if you want a centralized, end-to-end solution for business and regulatory compliance
requirements, start using AWS Backup today.

## Feature overview

AWS Backup provides many features and capabilities, including the following.

### Centralized backup management

AWS Backup provides a centralized backup console, a set of backup APIs, and the AWS Command Line Interface
(AWS CLI) to manage backups across the AWS services that your applications use. With AWS Backup,
you can centrally manage backup policies that meet your backup requirements. You can then
apply them to your AWS resources across AWS services, enabling you to back up your
application data in a consistent and compliant manner. The AWS Backup centralized backup console
offers a consolidated view of your backups and backup activity logs, making it easier to
audit your backups and ensure compliance.

### Policy-based backup

With AWS Backup, you can create backup policies known as *backup plans*.
Use these backup plans to define your backup requirements and then apply them to the AWS
resources that you want to protect across the AWS services that you use. You can create
separate backup plans that each meet specific business and regulatory compliance
requirements. This helps ensure that each AWS resource is backed up according to your
requirements. Backup plans make it easy to enforce your backup strategy across your
organization and across your applications in a scalable manner.

For all the configuration options for backup plans, see Backup plan options and configuration (./plan-options-and-configuration.html).

### Tag-based backup policies

You can use AWS Backup to apply backup plans to your AWS resources in a wide variety of
ways, including tagging them. Tagging makes it easier to implement your backup strategy
across all your applications and to ensure that all your AWS resources are backed up and
protected. AWS tags are a great way to organize and classify your AWS resources.
Integration with AWS tags enables you to quickly apply a backup plan to a group of AWS
resources, so that they are backed up in a consistent and compliant manner.

For all the ways you can assign your resources to backup plans, see Select AWS services to backup (./assigning-resources.html).

### Lifecycle management policies

AWS Backup enables you to meet compliance requirements while minimizing backup storage costs
by storing backups in a low-cost cold storage tier. You can configure lifecycle policies
that automatically transition backups from warm storage to cold storage according to a
schedule that you define.

For a list of resources which can be transitioned to cold storage, see
Feature availability by resource (./backup-feature-availability.html#features-by-resource).
For steps to turn on cold storage in your backup plan, see
Lifecycle and storage tiers (./plan-options-and-configuration.html#backup-lifecycle).

### Cross-Region backup

Using AWS Backup, you can copy backups to multiple different AWS Regions on demand or
automatically as part of a scheduled backup plan. Cross-Region backup is particularly
valuable if you have business continuity or compliance requirements to store backups a
minimum distance away from your production data. For more information, see Creating
backup copies across AWS Regions (https://docs.aws.amazon.com/aws-backup/latest/devguide/cross-region-backup.html).

### Cross-account management and cross-account backup

You can use AWS Backup to manage your backups across all AWS accounts inside your AWS Organizations (https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) structure. With cross-account
management, you can automatically use backup policies to apply backup plans across the
AWS accounts within your organization. This makes compliance and data protection efficient
at scale and reduces operational overhead. It also helps eliminate manually duplicating
backup plans across individual accounts. For more information, see Managing
AWS Backup resources across multiple AWS accounts (https://docs.aws.amazon.com/aws-backup/latest/devguide/manage-cross-account.html).

You can also copy backups to multiple different AWS accounts inside your AWS Organizations
management structure. This way, you can "fan in" backups to a single repository account,
then "fan out" backups for greater resilience. Creating backup copies
across AWS accounts (https://docs.aws.amazon.com/aws-backup/latest/devguide/create-cross-account-backup.html).

Before you can use the cross-account management and cross-account backup features, you
must have an existing organization structure configured in AWS Organizations. An
*organizational unit* (OU) is a group of accounts that can be managed
as a single entity. AWS Organizations is a list of accounts that can be grouped into organizational
units and managed as a single entity.

### Auditing and reporting with AWS Backup Audit Manager

AWS Backup Audit Manager helps you simplify data governance and compliance management of your
backups across AWS. AWS Backup Audit Manager provides built-in, customizable controls that you
can align with your organizational requirements. You can also use these controls to
automatically track your backup activities and resources.

AWS Backup Audit Manager can help you locate specific activities and resources that are not
yet compliant with the controls that you defined. It also generates daily reports that you
can use to demonstrate evidence of compliance with your controls over time.

To include your backup compliance alongside your overall compliance posture, you can
automatically import AWS Backup Audit Manager findings into AWS Audit Manager.

### Incremental backups

AWS Backup efficiently stores your periodic backups incrementally for supported resource
types. The first backup of an AWS resource backs up a full copy of your data. For each
successive incremental backup, only the changes to your AWS resources are backed up.
Incremental backups enable you to benefit from the data protection of frequent backups
while minimizing storage costs.

- ### On this page

Feature overview (#feature-overview)
- AWS Backup and native service backups (#native-backup-coexistence)
- Getting started (#what-is-backup-getstarted)
- Supported AWS resources and applications (#supported-resources)
- Pricing (#pricing)

#### Next topic:

AWS Backup feature availability
