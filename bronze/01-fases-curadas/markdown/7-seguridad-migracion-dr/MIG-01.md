> **BRONZE Markdown** — `MIG-01` · Servicio: **Whitepaper DR** · Fase 7 · Dominios examen: D2
> URL oficial: https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
> Título oficial: Disaster recovery options in the cloud

Disaster recovery strategies available to you within AWS can be broadly categorized into
four approaches, ranging from the low cost and low complexity of making backups to more complex
strategies using multiple active Regions. Active/passive strategies use an active site (such as
an AWS Region) to host the workload and serve traffic. The passive site (such as a different AWS
Region) is used for recovery. The passive site does not actively serve traffic until a failover
event is triggered.

It is critical to regularly assess and test your disaster recovery strategy so that you
have confidence in invoking it, should it become necessary. Use AWS Resilience Hub (https://aws.amazon.com/resilience-hub/) to continuously validate and track the
resilience of your AWS workloads, including whether you are likely to meet your RTO and RPO
targets.

- ### On this page

Backup and restore (#backup-and-restore)
- Pilot light (#pilot-light)
- Warm standby (#warm-standby)
- Multi-site active/active (#multi-site-activeactive)

#### Next topic:

Detection

#### Previous topic:

Disaster recovery is different in the cloud
