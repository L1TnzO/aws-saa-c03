# _fetch_log.md — Log de descarga de la capa bronze (SAA-C03)

Generado: 2026-09-11T01:52:24+00:00

## Resumen

- URLs registradas: **767**
- Descargas correctas: **729**
- Intentos fallidos definitivos: **38**
- Archivos en disco (html/md/pdf): **1448**
- Fragmentos consolidados: 6 (fragment-batch-1.json, fragment-batch-2.json, fragment-batch-3.json, fragment-batch-4.json, fragment-batch-5.json, fragment-manual.json)

Estrategia de descarga: curl con 3 reintentos (backoff 1.5s, 3s) + segunda pasada manual por lotes + pase de reparación con URLs alternativas descubiertas vía index.md oficiales de docs.aws.amazon.com.

## Fallos definitivos documentados (tras varios intentos)

Las siguientes URLs NO pudieron descargarse tras todos los reintentos. Se documenta cada caso con el motivo verificado:

### AWS Application Discovery Service — faq
- URL: https://aws.amazon.com/application-discovery/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Artifact — faq
- URL: https://aws.amazon.com/artifact/faqs/
- Intentos: 2
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Auto Scaling — docs
- URL: https://docs.aws.amazon.com/autoscaling/userguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Budgets — docs
- URL: https://docs.aws.amazon.com/awsaccountbilling/latest/budgets-userguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Budgets — faq
- URL: https://aws.amazon.com/aws-cost-management/faqs/aws-budgets/
- Intentos: 2
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Budgets — faq
- URL: https://aws.amazon.com/aws-budgets/faqs/
- Intentos: 2
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Client VPN — faq
- URL: https://aws.amazon.com/vpn/client-vpn/faqs/
- Intentos: 2
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS CloudTrail — docs
- URL: https://docs.aws.amazon.com/cloudtrail/latest/userguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Command Line Interface — faq
- URL: https://aws.amazon.com/cli/faqs/
- Intentos: 2
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Compute Optimizer — docs
- URL: https://docs.aws.amazon.com/compute-optimizer/latest/dg/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Cost Management (Cost Explorer + CUR) — faq
- URL: https://aws.amazon.com/aws-cost-management/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Data Pipeline — faq
- URL: https://aws.amazon.com/datapipeline/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Firewall Manager — docs
- URL: https://docs.aws.amazon.com/fms/latest/developerguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Global Accelerator — docs
- URL: https://docs.aws.amazon.com/global-accelerator/latest/developerguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Lake Formation — docs
- URL: https://docs.aws.amazon.com/lake-formation/latest/dt/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Management Console — faq
- URL: https://aws.amazon.com/console/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Migration Hub — faq
- URL: https://aws.amazon.com/migration-hub/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Shield (Standard y Advanced) — docs
- URL: https://docs.aws.amazon.com/waf/latest/shieldref/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Site-to-Site VPN — docs
- URL: https://docs.aws.amazon.com/vpn/latest/s2vvpn/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Snow Family — docs
- URL: https://docs.aws.amazon.com/snowball/latest/developerguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### AWS Snow Family — faq
- URL: https://aws.amazon.com/snow/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS Systems Manager — faq
- URL: https://aws.amazon.com/systems-manager/faqs/
- Intentos: 2
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### AWS X-Ray — faq
- URL: https://aws.amazon.com/xray/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### Amazon Aurora (y Aurora Serverless) — faq
- URL: https://aws.amazon.com/rds/aurora/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### Amazon CloudWatch — docs
- URL: https://docs.aws.amazon.com/cloudwatch/latest/monitoring/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### Amazon Comprehend — docs
- URL: https://docs.aws.amazon.com/comprehend/latest/ug/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### Amazon EKS (y EKS Anywhere / EKS Distro) — docs
- URL: https://docs.aws.amazon.com/eks-anywhere/latest/developerguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### Amazon EKS (y EKS Anywhere / EKS Distro) — docs
- URL: https://docs.aws.amazon.com/eks-distro/latest/userguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### Amazon Elastic File System (EFS) — faq
- URL: https://aws.amazon.com/efs/faqs/
- Intentos: 2
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### Amazon Elastic Transcoder — docs
- URL: https://docs.aws.amazon.com/elastic-transcoder/latest/developerguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### Amazon FSx (Lustre, Windows, ONTAP, OpenZFS) — faq
- URL: https://aws.amazon.com/fsx/faqs/
- Intentos: 2
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### Amazon Forecast — faq
- URL: https://aws.amazon.com/forecast/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### Amazon Inspector — docs
- URL: https://docs.aws.amazon.com/inspector/latest/userguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### Amazon Macie — faq
- URL: https://aws.amazon.com/macie/faqs/
- Intentos: 2
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### Amazon QLDB — docs
- URL: https://docs.aws.amazon.com/qldb/latest/developerguide/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### Amazon QLDB — faq
- URL: https://aws.amazon.com/qldb/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

### Overview of Amazon Web Services (whitepaper) — docs
- URL: https://docs.aws.amazon.com/whitepapers/latest/aws-overview-introduction/welcome.html
- Intentos: 5
- Motivo: HTTP 404 o soft-404

### VMware Cloud on AWS — faq
- URL: https://aws.amazon.com/vmware/faqs/
- Intentos: 1
- Motivo: sin contenido FAQ válido o redirect fuera de /faqs

## Disposición de cada fallo (verificación adicional del agente principal)

- **AWS Budgets (FAQ)**: AWS retiró la página FAQ de Budgets: aws.amazon.com/aws-cost-management/faqs/aws-budgets/ devuelve 404 y aws.amazon.com/aws-budgets/faqs/ redirige a la página de producto. El contenido de presupuestos está cubierto por la guía oficial AWS Cost Management User Guide (descargada en bronze/05-docs/cost-management/).
- **AWS Snow Family (FAQ)**: aws.amazon.com/snow/faqs/ redirige a la página de producto aws.amazon.com/snowball/ (sin contenido FAQ). El contenido está cubierto por la AWS Snowball Edge Developer Guide (descargada en bronze/05-docs/migration-snow/).
- **AWS Data Pipeline (FAQ)**: aws.amazon.com/datapipeline/faqs/ redirige a la página de AWS Glue (servicio sucesor). Documentado como FAQ retirada.
- **Amazon Aurora (FAQ original)**: aws.amazon.com/rds/aurora/faqs/ redirige oficialmente a https://docs.aws.amazon.com/rds/latest/auroraextendedcontent/aurora-faq.html — descargada en bronze/04-faqs/aurora-faq.html + .md (REPARADO).
- **AWS Systems Manager (FAQ)**: aws.amazon.com/systems-manager/faqs/ devuelve 404 — FAQ retirada por AWS. Contenido cubierto por Systems Manager User Guide (descargada).
- **AWS Command Line Interface (FAQ)**: aws.amazon.com/cli/faqs/ devuelve 404 — FAQ retirada por AWS. Contenido cubierto por AWS CLI User Guide (descargada).
- **AWS Artifact (FAQ)**: aws.amazon.com/artifact/faqs/ devuelve 404 — FAQ retirada por AWS. Contenido cubierto por AWS Artifact User Guide (descargada).
- **AWS Client VPN (FAQ)**: aws.amazon.com/vpn/client-vpn/faqs/ devuelve 404 — FAQ retirada. Contenido cubierto por la guía Client VPN Administrator Guide (descargada, ruta corregida).
- **Amazon Macie (FAQ)**: REPARADO en segunda pasada: aws.amazon.com/macie/faq/ (singular) funciona — descargada.
- **Amazon EFS (FAQ)**: REPARADO en segunda pasada: aws.amazon.com/efs/faq/ (singular) funciona — descargada.
- **AWS Management Console (FAQ)**: REPARADO: aws.amazon.com/console/faqs/ redirige a aws.amazon.com/console/faq-console/ (página vigente) — descargada.
- **Amazon FSx (FAQ)**: REPARADO: la FAQ vigente es aws.amazon.com/fsx/windows/faqs/ — descargada.
- **AWS Cost Management (FAQ)**: aws.amazon.com/aws-cost-management/faqs/ redirige a la página de producto (sin FAQ). Contenido cubierto por la guía AWS Cost Management User Guide (descargada).
- **Amazon Forecast (FAQ)**: aws.amazon.com/forecast/faqs/ redirige a la página de producto (sin FAQ). Documentado como retirada.
- **AWS Migration Hub (FAQ) / AWS Application Discovery (FAQ)**: Ambas redirigen a aws.amazon.com/transform/ (AWS Migration Hub Transformer, producto sucesor). Documentadas como retiradas.
- **AWS X-Ray (FAQ)**: aws.amazon.com/xray/faqs/ redirige a CloudWatch Application Observability — X-Ray está siendo consolidado en CloudWatch (anuncio oficial 2025). Documentado.
- **VMware Cloud on AWS (FAQ)**: aws.amazon.com/vmware/faqs/ redirige a la página de producto (sin FAQ); el servicio pasó a control de Broadcom. Documentado.
- **AWS Lake Formation (docs)**: REPARADO: ruta oficial actual es docs.aws.amazon.com/lake-formation/latest/dg/ (antes /dt/) — descargada.
- **AWS Global Accelerator (docs)**: REPARADO: ruta oficial actual es docs.aws.amazon.com/global-accelerator/latest/dg/ (antes /developerguide/) — descargada.
- **AWS Site-to-Site VPN (docs)**: REPARADO: ruta correcta docs.aws.amazon.com/vpn/latest/s2svpn/ — descargada.
- **Amazon Inspector (docs)**: REPARADO: ruta oficial actual docs.aws.amazon.com/inspector/latest/user/ — descargada.
- **AWS Auto Scaling (docs)**: REPARADO: guía vigente docs.aws.amazon.com/autoscaling/application/userguide/ (Application Auto Scaling) — descargada.
- **Amazon CloudWatch (docs)**: REPARADO: ruta vigente docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ — descargada.
- **Amazon Comprehend (docs)**: REPARADO: ruta oficial actual docs.aws.amazon.com/comprehend/latest/dg/ — descargada.
- **AWS Compute Optimizer (docs)**: REPARADO: ruta oficial actual docs.aws.amazon.com/compute-optimizer/latest/ug/ — descargada.
- **AWS Shield (docs)**: REPARADO: la documentación de Shield es un capítulo de la WAF Developer Guide (docs.aws.amazon.com/waf/latest/developerguide/) — descargada con keywords Shield/DDoS.
- **AWS Snow Family (docs)**: REPARADO: ruta oficial actual docs.aws.amazon.com/snowball/latest/developer-guide/ (con guion) — descargada.
- **AWS CloudTrail (docs)**: REPARADO: ruta vigente docs.aws.amazon.com/awscloudtrail/latest/userguide/ — descargada.
- **AWS Budgets (docs)**: REPARADO: la documentación de Budgets es parte de la AWS Cost Management User Guide — descargada con keywords de presupuesto.
- **Amazon Detective (docs)**: REPARADO: ruta oficial actual docs.aws.amazon.com/detective/latest/userguide/ — descargada.
- **Amazon QLDB (docs+FAQ)**: NO DISPONIBLE: Amazon QLDB fue dado de baja (end-of-life anunciado por AWS); sus URLs de documentación devuelven 404 o redirigen a contenido de Aurora. Servicio in-scope del examen pero documentación retirada oficialmente. Se cubre conceptualmente en la capa silver.
- **Amazon EKS Anywhere / EKS Distro (docs)**: NO DISPONIBLE en docs.aws.amazon.com: sus guías viven en sitios oficiales externos (anywhere.eks.amazonaws.com y distro.eks.amazonaws.com). El contenido EKS principal está cubierto por la Amazon EKS User Guide (descargada).
- **AWS Firewall Manager (docs)**: Rutas probadas (fms/latest/developerguide, fms/latest/userguide, fms/latest/ug) devuelven 404. NO DISPONIBLE en el momento de la descarga. Contenido parcialmente cubierto por AWS WAF Developer Guide (descargada; FMS se menciona en el ecosistema WAF).
- **Amazon Elastic Transcoder (docs+FAQ)**: Servicio en proceso de retiro por AWS; sus URLs devuelven 404. Documentado como retirado oficialmente.
- **Overview of Amazon Web Services (whitepaper)**: Whitepaper ARCHIVADO por AWS (toc-contents.json 404). Documentado como retirado.

## Detalle de descargas correctas

### AWS Amplify
- `docs` · Connecting a custom domain · [05-docs/mobile-amplify/custom-domains.md](05-docs/mobile-amplify/custom-domains.md) · <https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html>
- `docs` · Migrating a Next.js 11 SSR app to Amplify Hosting compute · [05-docs/mobile-amplify/update-app-nextjs-version.md](05-docs/mobile-amplify/update-app-nextjs-version.md) · <https://docs.aws.amazon.com/amplify/latest/userguide/update-app-nextjs-version.html>
- `docs` · What is AWS Amplify Hosting? · [05-docs/mobile-amplify/welcome.md](05-docs/mobile-amplify/welcome.md) · <https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html>
- `faq` · FAQ oficial · [04-faqs/aws-amplify.md](04-faqs/aws-amplify.md) · <https://aws.amazon.com/amplify/faqs/>

### AWS AppSync
- `docs` · Using subscriptions for real-time data applications · [05-docs/integration-appsync/aws-appsync-real-time-data.md](05-docs/integration-appsync/aws-appsync-real-time-data.md) · <https://docs.aws.amazon.com/appsync/latest/devguide/aws-appsync-real-time-data.html>
- `docs` · Defining enhanced subscriptions filters · [05-docs/integration-appsync/aws-appsync-real-time-enhanced-filtering.md](05-docs/integration-appsync/aws-appsync-real-time-enhanced-filtering.md) · <https://docs.aws.amazon.com/appsync/latest/devguide/aws-appsync-real-time-enhanced-filtering.html>
- `docs` · GraphQL and AWS AppSync architecture · [05-docs/integration-appsync/graphql-overview.md](05-docs/integration-appsync/graphql-overview.md) · <https://docs.aws.amazon.com/appsync/latest/devguide/graphql-overview.html>
- `docs` · Resolvers · [05-docs/integration-appsync/resolver-components.md](05-docs/integration-appsync/resolver-components.md) · <https://docs.aws.amazon.com/appsync/latest/devguide/resolver-components.html>
- `docs` · What is AWS AppSync · [05-docs/integration-appsync/what-is-appsync.md](05-docs/integration-appsync/what-is-appsync.md) · <https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html>
- `faq` · FAQ oficial · [04-faqs/aws-appsync.md](04-faqs/aws-appsync.md) · <https://aws.amazon.com/appsync/faqs/>

### AWS Application Discovery Service
- `docs` · What is AWS Application Discovery Service? · [05-docs/migration-appdiscovery/what-is-appdiscovery.md](05-docs/migration-appdiscovery/what-is-appdiscovery.md) · <https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html>

### AWS Application Migration Service (MGN)
- `docs` · Configuring launch settings · [05-docs/migration-mgn/configuring-target-gs.md](05-docs/migration-mgn/configuring-target-gs.md) · <https://docs.aws.amazon.com/mgn/latest/ug/configuring-target-gs.html>
- `docs` · Launching a test instance · [05-docs/migration-mgn/launching-test-gs.md](05-docs/migration-mgn/launching-test-gs.md) · <https://docs.aws.amazon.com/mgn/latest/ug/launching-test-gs.html>
- `docs` · Replication template · [05-docs/migration-mgn/replication-settings-template.md](05-docs/migration-mgn/replication-settings-template.md) · <https://docs.aws.amazon.com/mgn/latest/ug/replication-settings-template.html>
- `docs` · What Is AWS Transform MGN? · [05-docs/migration-mgn/what-is-mgn.md](05-docs/migration-mgn/what-is-mgn.md) · <https://docs.aws.amazon.com/mgn/latest/ug/what-is-mgn.html>
- `faq` · FAQ oficial · [04-faqs/aws-application-migration-service-mgn.md](04-faqs/aws-application-migration-service-mgn.md) · <https://aws.amazon.com/application-migration-service/faqs/>

### AWS Artifact
- `docs` · Downloading reports · [05-docs/security-artifact/downloading-documents.md](05-docs/security-artifact/downloading-documents.md) · <https://docs.aws.amazon.com/artifact/latest/ug/downloading-documents.html>
- `docs` · Managing agreements · [05-docs/security-artifact/managing-agreements.md](05-docs/security-artifact/managing-agreements.md) · <https://docs.aws.amazon.com/artifact/latest/ug/managing-agreements.html>
- `docs` · What is AWS Artifact? · [05-docs/security-artifact/what-is-aws-artifact.md](05-docs/security-artifact/what-is-aws-artifact.md) · <https://docs.aws.amazon.com/artifact/latest/ug/what-is-aws-artifact.html>

### AWS Audit Manager
- `docs` · Examples of controls · [05-docs/security-auditmanager/examples-of-controls.md](05-docs/security-auditmanager/examples-of-controls.md) · <https://docs.aws.amazon.com/audit-manager/latest/userguide/examples-of-controls.html>
- `docs` · Supported frameworks · [05-docs/security-auditmanager/framework-overviews.md](05-docs/security-auditmanager/framework-overviews.md) · <https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-overviews.html>
- `docs` · Tutorial for Audit Owners: Creating an assessment · [05-docs/security-auditmanager/tutorial-for-audit-owners.md](05-docs/security-auditmanager/tutorial-for-audit-owners.md) · <https://docs.aws.amazon.com/audit-manager/latest/userguide/tutorial-for-audit-owners.html>
- `docs` · What is AWS Audit Manager? · [05-docs/security-auditmanager/what-is.md](05-docs/security-auditmanager/what-is.md) · <https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html>
- `faq` · FAQ oficial · [04-faqs/aws-audit-manager.md](04-faqs/aws-audit-manager.md) · <https://aws.amazon.com/audit-manager/faqs/>

### AWS Auto Scaling
- `docs` · Predictive scaling · [05-docs/compute-autoscaling/application-auto-scaling-predictive-scaling.md](05-docs/compute-autoscaling/application-auto-scaling-predictive-scaling.md) · <https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-predictive-scaling.html>
- `docs` · Target tracking scaling policies · [05-docs/compute-autoscaling/application-auto-scaling-target-tracking.md](05-docs/compute-autoscaling/application-auto-scaling-target-tracking.md) · <https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html>
- `docs` · What is Application Auto Scaling? · [05-docs/compute-autoscaling/what-is-application-auto-scaling.md](05-docs/compute-autoscaling/what-is-application-auto-scaling.md) · <https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html>
- `faq` · FAQ oficial · [04-faqs/aws-auto-scaling.md](04-faqs/aws-auto-scaling.md) · <https://aws.amazon.com/autoscaling/faqs/>

### AWS Backup
- `docs` · Backup plans · [05-docs/storage-backup/about-backup-plans.md](05-docs/storage-backup/about-backup-plans.md) · <https://docs.aws.amazon.com/aws-backup/latest/devguide/about-backup-plans.html>
- `docs` · AWS Backup Audit Manager · [05-docs/storage-backup/aws-backup-audit-manager.md](05-docs/storage-backup/aws-backup-audit-manager.md) · <https://docs.aws.amazon.com/aws-backup/latest/devguide/aws-backup-audit-manager.html>
- `docs` · Cross-account backup · [05-docs/storage-backup/create-cross-account-backup.md](05-docs/storage-backup/create-cross-account-backup.md) · <https://docs.aws.amazon.com/aws-backup/latest/devguide/create-cross-account-backup.html>
- `docs` · On-demand backups · [05-docs/storage-backup/recov-point-create-on-demand-backup.md](05-docs/storage-backup/recov-point-create-on-demand-backup.md) · <https://docs.aws.amazon.com/aws-backup/latest/devguide/recov-point-create-on-demand-backup.html>
- `docs` · Backup creation, maintenance, and restore · [05-docs/storage-backup/recovery-points.md](05-docs/storage-backup/recovery-points.md) · <https://docs.aws.amazon.com/aws-backup/latest/devguide/recovery-points.html>
- `docs` · Backup vaults · [05-docs/storage-backup/vaults.md](05-docs/storage-backup/vaults.md) · <https://docs.aws.amazon.com/aws-backup/latest/devguide/vaults.html>
- `docs` · What is AWS Backup? · [05-docs/storage-backup/whatisbackup.md](05-docs/storage-backup/whatisbackup.md) · <https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html>
- `faq` · FAQ oficial · [04-faqs/aws-backup.md](04-faqs/aws-backup.md) · <https://aws.amazon.com/backup/faqs/>

### AWS Batch
- `docs` · Compute environments for AWS Batch · [05-docs/compute-batch/compute-environments.md](05-docs/compute-batch/compute-environments.md) · <https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html>
- `docs` · Getting started with Fargate orchestration using the Wizard · [05-docs/compute-batch/getting-started-fargate.md](05-docs/compute-batch/getting-started-fargate.md) · <https://docs.aws.amazon.com/batch/latest/userguide/getting-started-fargate.html>
- `docs` · Add the Single job queue widget · [05-docs/compute-batch/single-job-queue.md](05-docs/compute-batch/single-job-queue.md) · <https://docs.aws.amazon.com/batch/latest/userguide/single-job-queue.html>
- `docs` · What is AWS Batch? · [05-docs/compute-batch/what-is-batch.md](05-docs/compute-batch/what-is-batch.md) · <https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html>
- `faq` · FAQ oficial · [04-faqs/aws-batch.md](04-faqs/aws-batch.md) · <https://aws.amazon.com/batch/faqs/>

### AWS Budgets
- `docs` · Viewing and creating budgets using billing views · [05-docs/cost-budgets/access-data-budgets.md](05-docs/cost-budgets/access-data-budgets.md) · <https://docs.aws.amazon.com/cost-management/latest/userguide/access-data-budgets.html>
- `docs` · Forecasting · [05-docs/cost-budgets/ce-forecast.md](05-docs/cost-budgets/ce-forecast.md) · <https://docs.aws.amazon.com/cost-management/latest/userguide/ce-forecast.html>
- `docs` · Receiving budget alerts in chat applications · [05-docs/cost-budgets/sns-alert-chime.md](05-docs/cost-budgets/sns-alert-chime.md) · <https://docs.aws.amazon.com/cost-management/latest/userguide/sns-alert-chime.html>

### AWS Certificate Manager (ACM)
- `docs` · What is AWS Certificate Manager? · [05-docs/security-acm/acm-overview.md](05-docs/security-acm/acm-overview.md) · <https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html>
- `docs` · Configure automatic renewal events · [05-docs/security-acm/configure-auto-renewals-events.md](05-docs/security-acm/configure-auto-renewals-events.md) · <https://docs.aws.amazon.com/acm/latest/userguide/configure-auto-renewals-events.html>
- `docs` · Certificate validation · [05-docs/security-acm/domain-ownership-validation.md](05-docs/security-acm/domain-ownership-validation.md) · <https://docs.aws.amazon.com/acm/latest/userguide/domain-ownership-validation.html>
- `docs` · Imported certificates · [05-docs/security-acm/import-certificate.md](05-docs/security-acm/import-certificate.md) · <https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html>
- `docs` · Choosing how to issue certificates with AWS · [05-docs/security-acm/service-options.md](05-docs/security-acm/service-options.md) · <https://docs.aws.amazon.com/acm/latest/userguide/service-options.html>
- `faq` · FAQ oficial · [04-faqs/aws-certificate-manager-acm.md](04-faqs/aws-certificate-manager-acm.md) · <https://aws.amazon.com/certificate-manager/faqs/>

### AWS Client VPN
- `docs` · Create an endpoint security group rule · [05-docs/network-clientvpn/client-auth-rule-create.md](05-docs/network-clientvpn/client-auth-rule-create.md) · <https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/client-auth-rule-create.html>
- `docs` · Authorization rules · [05-docs/network-clientvpn/cvpn-working-rules.md](05-docs/network-clientvpn/cvpn-working-rules.md) · <https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-rules.html>
- `docs` · What is AWS Client VPN? · [05-docs/network-clientvpn/what-is.md](05-docs/network-clientvpn/what-is.md) · <https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/what-is.html>

### AWS CloudFormation
- `docs` · What is CloudFormation? · [05-docs/mgmt-cloudformation/welcome.md](05-docs/mgmt-cloudformation/welcome.md) · <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html>
- `docs` · Drift-aware change sets · [05-docs/mgmt-cloudformation/drift-aware-change-sets.md](05-docs/mgmt-cloudformation/drift-aware-change-sets.md) · <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/drift-aware-change-sets.html>
- `docs` · Creating your first stack · [05-docs/mgmt-cloudformation/gettingstarted-walkthrough.md](05-docs/mgmt-cloudformation/gettingstarted-walkthrough.md) · <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/gettingstarted.walkthrough.html>
- `docs` · Custom resources · [05-docs/mgmt-cloudformation/template-custom-resources.md](05-docs/mgmt-cloudformation/template-custom-resources.md) · <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html>
- `docs` · Working with templates · [05-docs/mgmt-cloudformation/template-guide.md](05-docs/mgmt-cloudformation/template-guide.md) · <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-guide.html>
- `docs` · Update stacks using change sets · [05-docs/mgmt-cloudformation/using-cfn-updating-stacks-changesets.md](05-docs/mgmt-cloudformation/using-cfn-updating-stacks-changesets.md) · <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html>
- `docs` · Continue rolling back an update · [05-docs/mgmt-cloudformation/using-cfn-updating-stacks-continueupdaterollback.md](05-docs/mgmt-cloudformation/using-cfn-updating-stacks-continueupdaterollback.md) · <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html>
- `docs` · Managing stacks with StackSets · [05-docs/mgmt-cloudformation/what-is-cfnstacksets.md](05-docs/mgmt-cloudformation/what-is-cfnstacksets.md) · <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/what-is-cfnstacksets.html>
- `faq` · FAQ oficial · [04-faqs/aws-cloudformation.md](04-faqs/aws-cloudformation.md) · <https://aws.amazon.com/cloudformation/faqs/>

### AWS CloudHSM
- `docs` · cluster · [05-docs/security-cloudhsm/cloudhsm-cli-cluster.md](05-docs/security-cloudhsm/cloudhsm-cli-cluster.md) · <https://docs.aws.amazon.com/cloudhsm/latest/userguide/cloudhsm_cli-cluster.html>
- `docs` · Users in AWS CloudHSM · [05-docs/security-cloudhsm/hsm-users.md](05-docs/security-cloudhsm/hsm-users.md) · <https://docs.aws.amazon.com/cloudhsm/latest/userguide/hsm-users.html>
- `docs` · What is AWS CloudHSM? · [05-docs/security-cloudhsm/introduction.md](05-docs/security-cloudhsm/introduction.md) · <https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html>
- `docs` · Use key store with keytool · [05-docs/security-cloudhsm/using-keystore-with-keytool-5.md](05-docs/security-cloudhsm/using-keystore-with-keytool-5.md) · <https://docs.aws.amazon.com/cloudhsm/latest/userguide/using_keystore_with_keytool_5.html>
- `faq` · FAQ oficial · [04-faqs/aws-cloudhsm.md](04-faqs/aws-cloudhsm.md) · <https://aws.amazon.com/cloudhsm/faqs/>

### AWS CloudTrail
- `docs` · What Is AWS CloudTrail? · [05-docs/mgmt-cloudtrail/cloudtrail-user-guide.md](05-docs/mgmt-cloudtrail/cloudtrail-user-guide.md) · <https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html>
- `docs` · Moving from member account trails to organization trails · [05-docs/mgmt-cloudtrail/creating-an-organizational-trail-best-practice.md](05-docs/mgmt-cloudtrail/creating-an-organizational-trail-best-practice.md) · <https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-best-practice.html>
- `docs` · How CloudTrail works · [05-docs/mgmt-cloudtrail/how-cloudtrail-works.md](05-docs/mgmt-cloudtrail/how-cloudtrail-works.md) · <https://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html>
- `docs` · Working with CloudTrail Insights · [05-docs/mgmt-cloudtrail/logging-insights-events-with-cloudtrail.md](05-docs/mgmt-cloudtrail/logging-insights-events-with-cloudtrail.md) · <https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html>
- `docs` · View event history · [05-docs/mgmt-cloudtrail/tutorial-event-history.md](05-docs/mgmt-cloudtrail/tutorial-event-history.md) · <https://docs.aws.amazon.com/awscloudtrail/latest/userguide/tutorial-event-history.html>
- `faq` · FAQ oficial · [04-faqs/aws-cloudtrail.md](04-faqs/aws-cloudtrail.md) · <https://aws.amazon.com/cloudtrail/faqs/>

### AWS Command Line Interface
- `docs` · About the AWS CLI · [05-docs/mgmt-cli/cli-chap-welcome.md](05-docs/mgmt-cli/cli-chap-welcome.md) · <https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html>

### AWS Compute Optimizer
- `docs` · What is Compute Optimizer? · [05-docs/mgmt-compute-optimizer/what-is-compute-optimizer.md](05-docs/mgmt-compute-optimizer/what-is-compute-optimizer.md) · <https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html>
- `faq` · FAQ oficial · [04-faqs/aws-compute-optimizer.md](04-faqs/aws-compute-optimizer.md) · <https://aws.amazon.com/compute-optimizer/faqs/>

### AWS Config
- `docs` · What Is AWS Config? · [05-docs/mgmt-config/whatisconfig.md](05-docs/mgmt-config/whatisconfig.md) · <https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html>
- `docs` · Resource Management · [05-docs/mgmt-config/aws-config-landing-page.md](05-docs/mgmt-config/aws-config-landing-page.md) · <https://docs.aws.amazon.com/config/latest/developerguide/aws-config-landing-page.html>
- `docs` · Example Rules Evaluation Started Notification · [05-docs/mgmt-config/config-rules-evaluation-started.md](05-docs/mgmt-config/config-rules-evaluation-started.md) · <https://docs.aws.amazon.com/config/latest/developerguide/config-rules-evaluation-started.html>
- `docs` · Example Compliance Change Notification · [05-docs/mgmt-config/example-config-rule-compliance-notification.md](05-docs/mgmt-config/example-config-rule-compliance-notification.md) · <https://docs.aws.amazon.com/config/latest/developerguide/example-config-rule-compliance-notification.html>
- `docs` · Configuration Recorder · [05-docs/mgmt-config/stop-start-recorder.md](05-docs/mgmt-config/stop-start-recorder.md) · <https://docs.aws.amazon.com/config/latest/developerguide/stop-start-recorder.html>
- `faq` · FAQ oficial · [04-faqs/aws-config.md](04-faqs/aws-config.md) · <https://aws.amazon.com/config/faqs/>

### AWS Control Tower
- `docs` · Account Factory · [05-docs/mgmt-controltower/account-factory.md](05-docs/mgmt-controltower/account-factory.md) · <https://docs.aws.amazon.com/controltower/latest/userguide/account-factory.html>
- `docs` · Expectations for landing zone configuration · [05-docs/mgmt-controltower/getting-started-configure.md](05-docs/mgmt-controltower/getting-started-configure.md) · <https://docs.aws.amazon.com/controltower/latest/userguide/getting-started-configure.html>
- `docs` · How controls work · [05-docs/mgmt-controltower/how-controls-work.md](05-docs/mgmt-controltower/how-controls-work.md) · <https://docs.aws.amazon.com/controltower/latest/userguide/how-controls-work.html>
- `docs` · What Is AWS Control Tower? · [05-docs/mgmt-controltower/what-is-control-tower.md](05-docs/mgmt-controltower/what-is-control-tower.md) · <https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html>
- `faq` · FAQ oficial · [04-faqs/aws-control-tower.md](04-faqs/aws-control-tower.md) · <https://aws.amazon.com/controltower/faqs/>

### AWS Cost Management (Cost Explorer + CUR)
- `docs` · Creating a Savings Plans budget · [05-docs/cost-management/create-savingsplans-budget.md](05-docs/cost-management/create-savingsplans-budget.md) · <https://docs.aws.amazon.com/cost-management/latest/userguide/create-savingsplans-budget.html>
- `docs` · Knowing the differences between Billing and Cost Explorer data · [05-docs/cost-management/differences-billing-data-cost-explorer-data.md](05-docs/cost-management/differences-billing-data-cost-explorer-data.md) · <https://docs.aws.amazon.com/cost-management/latest/userguide/differences-billing-data-cost-explorer-data.html>
- `docs` · Use AWS Billing and Cost Management for AWS · [05-docs/cost-management/what-is-costmanagement.md](05-docs/cost-management/what-is-costmanagement.md) · <https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html>

### AWS Data Exchange
- `docs` · What is AWS Data Exchange? · [05-docs/analytics-data-exchange/what-is.md](05-docs/analytics-data-exchange/what-is.md) · <https://docs.aws.amazon.com/data-exchange/latest/userguide/what-is.html>
- `faq` · FAQ oficial · [04-faqs/aws-data-exchange.md](04-faqs/aws-data-exchange.md) · <https://aws.amazon.com/data-exchange/faqs/>

### AWS Data Pipeline
- `docs` · What is AWS Data Pipeline? · [05-docs/analytics-data-pipeline/what-is-datapipeline.md](05-docs/analytics-data-pipeline/what-is-datapipeline.md) · <https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/what-is-datapipeline.html>

### AWS DataSync
- `docs` · Setting bandwidth limits · [05-docs/migration-datasync/configure-bandwidth.md](05-docs/migration-datasync/configure-bandwidth.md) · <https://docs.aws.amazon.com/datasync/latest/userguide/configure-bandwidth.html>
- `docs` · Creating a task for transferring data · [05-docs/migration-datasync/create-task-how-to.md](05-docs/migration-datasync/create-task-how-to.md) · <https://docs.aws.amazon.com/datasync/latest/userguide/create-task-how-to.html>
- `docs` · Do I need an agent? · [05-docs/migration-datasync/do-i-need-datasync-agent.md](05-docs/migration-datasync/do-i-need-datasync-agent.md) · <https://docs.aws.amazon.com/datasync/latest/userguide/do-i-need-datasync-agent.html>
- `docs` · Network interfaces for data transfers · [05-docs/migration-datasync/required-network-interfaces.md](05-docs/migration-datasync/required-network-interfaces.md) · <https://docs.aws.amazon.com/datasync/latest/userguide/required-network-interfaces.html>
- `docs` · Scheduling your task · [05-docs/migration-datasync/task-scheduling.md](05-docs/migration-datasync/task-scheduling.md) · <https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html>
- `docs` · What is AWS DataSync? · [05-docs/migration-datasync/what-is-datasync.md](05-docs/migration-datasync/what-is-datasync.md) · <https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html>
- `faq` · FAQ oficial · [04-faqs/aws-datasync.md](04-faqs/aws-datasync.md) · <https://aws.amazon.com/datasync/faqs/>

### AWS Database Migration Service
- `docs` · Sources · [05-docs/migration-dms/chap-introduction-sources.md](05-docs/migration-dms/chap-introduction-sources.md) · <https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.Sources.html>
- `docs` · Targets · [05-docs/migration-dms/chap-introduction-targets.md](05-docs/migration-dms/chap-introduction-targets.md) · <https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.Targets.html>
- `docs` · CDC for SQL Server as a Source · [05-docs/migration-dms/chap-source-sqlserver-cdc.md](05-docs/migration-dms/chap-source-sqlserver-cdc.md) · <https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.CDC.html>
- `docs` · Continuous replication tasks · [05-docs/migration-dms/chap-task-cdc.md](05-docs/migration-dms/chap-task-cdc.md) · <https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html>
- `docs` · What is AWS Database Migration Service? · [05-docs/migration-dms/welcome.md](05-docs/migration-dms/welcome.md) · <https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html>
- `faq` · FAQ oficial · [04-faqs/aws-database-migration-service.md](04-faqs/aws-database-migration-service.md) · <https://aws.amazon.com/dms/faqs/>

### AWS Device Farm
- `docs` · What is AWS Device Farm? · [05-docs/mobile-devicefarm/welcome.md](05-docs/mobile-devicefarm/welcome.md) · <https://docs.aws.amazon.com/devicefarm/latest/developerguide/welcome.html>
- `faq` · FAQ oficial · [04-faqs/aws-device-farm.md](04-faqs/aws-device-farm.md) · <https://aws.amazon.com/device-farm/faqs/>

### AWS Direct Connect
- `docs` · MAC security (MACsec) · [05-docs/network-directconnect/macsec.md](05-docs/network-directconnect/macsec.md) · <https://docs.aws.amazon.com/directconnect/latest/UserGuide/MACsec.html>
- `docs` · What is Direct Connect? · [05-docs/network-directconnect/welcome.md](05-docs/network-directconnect/welcome.md) · <https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html>
- `docs` · Dedicated and hosted connections · [05-docs/network-directconnect/workingwithconnections.md](05-docs/network-directconnect/workingwithconnections.md) · <https://docs.aws.amazon.com/directconnect/latest/UserGuide/WorkingWithConnections.html>
- `docs` · Connection options · [05-docs/network-directconnect/connection-options.md](05-docs/network-directconnect/connection-options.md) · <https://docs.aws.amazon.com/directconnect/latest/UserGuide/connection_options.html>
- `docs` · Get started with MACsec on a dedicated connection · [05-docs/network-directconnect/create-macsec-dedicated.md](05-docs/network-directconnect/create-macsec-dedicated.md) · <https://docs.aws.amazon.com/directconnect/latest/UserGuide/create-macsec-dedicated.html>
- `docs` · Link aggregation groups (LAGs) · [05-docs/network-directconnect/lags.md](05-docs/network-directconnect/lags.md) · <https://docs.aws.amazon.com/directconnect/latest/UserGuide/lags.html>
- `docs` · Private virtual interface routing example · [05-docs/network-directconnect/private-transit-vif-example.md](05-docs/network-directconnect/private-transit-vif-example.md) · <https://docs.aws.amazon.com/directconnect/latest/UserGuide/private-transit-vif-example.html>
- `docs` · AWS Direct Connect Resiliency Toolkit · [05-docs/network-directconnect/resiliency-toolkit.md](05-docs/network-directconnect/resiliency-toolkit.md) · <https://docs.aws.amazon.com/directconnect/latest/UserGuide/resiliency_toolkit.html>
- `faq` · FAQ oficial · [04-faqs/aws-direct-connect.md](04-faqs/aws-direct-connect.md) · <https://aws.amazon.com/directconnect/faqs/>

### AWS Directory Service
- `docs` · AD Connector · [05-docs/security-directory/directory-ad-connector.md](05-docs/security-directory/directory-ad-connector.md) · <https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_ad_connector.html>
- `docs` · AWS Managed Microsoft AD · [05-docs/security-directory/directory-microsoft-ad.md](05-docs/security-directory/directory-microsoft-ad.md) · <https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html>
- `docs` · Simple AD · [05-docs/security-directory/directory-simple-ad.md](05-docs/security-directory/directory-simple-ad.md) · <https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html>
- `docs` · Editing the trust relationship for an existing role · [05-docs/security-directory/edit-trust.md](05-docs/security-directory/edit-trust.md) · <https://docs.aws.amazon.com/directoryservice/latest/admin-guide/edit_trust.html>
- `docs` · What is AWS Directory Service? · [05-docs/security-directory/what-is.md](05-docs/security-directory/what-is.md) · <https://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html>
- `faq` · FAQ oficial · [04-faqs/aws-directory-service.md](04-faqs/aws-directory-service.md) · <https://aws.amazon.com/directoryservice/faqs/>

### AWS Elastic Beanstalk
- `docs` · What is AWS Elastic Beanstalk? · [05-docs/compute-beanstalk/welcome.md](05-docs/compute-beanstalk/welcome.md) · <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html>
- `docs` · Web server environments · [05-docs/compute-beanstalk/concepts-webserver.md](05-docs/compute-beanstalk/concepts-webserver.md) · <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts-webserver.html>
- `docs` · Configuration · [05-docs/compute-beanstalk/environments-cfg-autoscaling-configuration-approaches.md](05-docs/compute-beanstalk/environments-cfg-autoscaling-configuration-approaches.md) · <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-autoscaling-configuration-approaches.html>
- `faq` · FAQ oficial · [04-faqs/aws-elastic-beanstalk.md](04-faqs/aws-elastic-beanstalk.md) · <https://aws.amazon.com/elasticbeanstalk/faqs/>

### AWS Fargate
- `faq` · FAQ oficial · [04-faqs/aws-fargate.md](04-faqs/aws-fargate.md) · <https://aws.amazon.com/fargate/faqs/>

### AWS Firewall Manager
- `faq` · FAQ oficial · [04-faqs/aws-firewall-manager.md](04-faqs/aws-firewall-manager.md) · <https://aws.amazon.com/firewall-manager/faqs/>

### AWS Global Accelerator
- `docs` · Adjust traffic flow with traffic dials · [05-docs/network-globalaccelerator/about-endpoint-groups-traffic-dial.md](05-docs/network-globalaccelerator/about-endpoint-groups-traffic-dial.md) · <https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-traffic-dial.html>
- `docs` · Endpoint groups for standard accelerators · [05-docs/network-globalaccelerator/about-endpoint-groups.md](05-docs/network-globalaccelerator/about-endpoint-groups.md) · <https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups.html>
- `docs` · Listeners for standard accelerators · [05-docs/network-globalaccelerator/about-listeners.md](05-docs/network-globalaccelerator/about-listeners.md) · <https://docs.aws.amazon.com/global-accelerator/latest/dg/about-listeners.html>
- `docs` · Create a standard accelerator · [05-docs/network-globalaccelerator/getting-started-standard.md](05-docs/network-globalaccelerator/getting-started-standard.md) · <https://docs.aws.amazon.com/global-accelerator/latest/dg/getting-started-standard.html>
- `docs` · What is AWS Global Accelerator? · [05-docs/network-globalaccelerator/what-is-global-accelerator.md](05-docs/network-globalaccelerator/what-is-global-accelerator.md) · <https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html>
- `faq` · FAQ oficial · [04-faqs/aws-global-accelerator.md](04-faqs/aws-global-accelerator.md) · <https://aws.amazon.com/global-accelerator/faqs/>

### AWS Glue
- `docs` · Using an AWS Glue crawler · [05-docs/analytics-glue/add-crawler.md](05-docs/analytics-glue/add-crawler.md) · <https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html>
- `docs` · Review IAM permissions needed for ETL jobs · [05-docs/analytics-glue/getting-started-min-privs-job.md](05-docs/analytics-glue/getting-started-min-privs-job.md) · <https://docs.aws.amazon.com/glue/latest/dg/getting-started-min-privs-job.html>
- `docs` · Job · [05-docs/analytics-glue/glue-etl-scala-apis-glue-util-job.md](05-docs/analytics-glue/glue-etl-scala-apis-glue-util-job.md) · <https://docs.aws.amazon.com/glue/latest/dg/glue-etl-scala-apis-glue-util-job.html>
- `docs` · Tracking processed data using job bookmarks · [05-docs/analytics-glue/monitor-continuations.md](05-docs/analytics-glue/monitor-continuations.md) · <https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html>
- `docs` · Getting started with the AWS Glue Data Catalog · [05-docs/analytics-glue/start-data-catalog.md](05-docs/analytics-glue/start-data-catalog.md) · <https://docs.aws.amazon.com/glue/latest/dg/start-data-catalog.html>
- `docs` · What is AWS Glue? · [05-docs/analytics-glue/what-is-glue.md](05-docs/analytics-glue/what-is-glue.md) · <https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html>
- `faq` · FAQ oficial · [04-faqs/aws-glue.md](04-faqs/aws-glue.md) · <https://aws.amazon.com/glue/faqs/>

### AWS Health Dashboard
- `docs` · What is AWS Health? · [05-docs/mgmt-health/what-is-aws-health.md](05-docs/mgmt-health/what-is-aws-health.md) · <https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html>

### AWS IAM Identity Center (SSO)
- `docs` · Confirm your identity sources · [05-docs/security-identitycenter/confirm-identity-source.md](05-docs/security-identitycenter/confirm-identity-source.md) · <https://docs.aws.amazon.com/singlesignon/latest/userguide/confirm-identity-source.html>
- `docs` · Permission sets · [05-docs/security-identitycenter/permissionsetsconcept.md](05-docs/security-identitycenter/permissionsetsconcept.md) · <https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html>
- `docs` · Identity Center directory · [05-docs/security-identitycenter/quick-start-default-idc.md](05-docs/security-identitycenter/quick-start-default-idc.md) · <https://docs.aws.amazon.com/singlesignon/latest/userguide/quick-start-default-idc.html>
- `docs` · What is IAM Identity Center? · [05-docs/security-identitycenter/what-is.md](05-docs/security-identitycenter/what-is.md) · <https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html>
- `faq` · FAQ oficial · [04-faqs/aws-iam-identity-center-sso.md](04-faqs/aws-iam-identity-center-sso.md) · <https://aws.amazon.com/single-sign-on/faqs/>

### AWS Identity and Access Management (IAM)
- `docs` · IAM users · [05-docs/security-iam/cli-authentication-user.html](05-docs/security-iam/cli-authentication-user.html) · <https://docs.aws.amazon.com/IAM/latest/UserGuide/cli-authentication-user.html>
- `docs` · About the AWS CLI · [05-docs/security-iam/cli-chap-welcome.html](05-docs/security-iam/cli-chap-welcome.html) · <https://docs.aws.amazon.com/IAM/latest/UserGuide/cli-chap-welcome.html>
- `docs` · IAM roles · [05-docs/security-iam/cli-configure-role.html](05-docs/security-iam/cli-configure-role.html) · <https://docs.aws.amazon.com/IAM/latest/UserGuide/cli-configure-role.html>
- `docs` · Amazon EC2 Security Groups · [05-docs/security-iam/cli-services-ec2-sg.html](05-docs/security-iam/cli-services-ec2-sg.html) · <https://docs.aws.amazon.com/IAM/latest/UserGuide/cli-services-ec2-sg.html>
- `docs` · IAM Access Analyzer · [05-docs/security-iam/cli-accessanalyzer-code-examples.html](05-docs/security-iam/cli-accessanalyzer-code-examples.html) · <https://docs.aws.amazon.com/IAM/latest/UserGuide/cli_accessanalyzer_code_examples.html>
- `docs` · AWS Outposts · [05-docs/security-iam/cli-outposts-code-examples.html](05-docs/security-iam/cli-outposts-code-examples.html) · <https://docs.aws.amazon.com/IAM/latest/UserGuide/cli_outposts_code_examples.html>
- `faq` · FAQ oficial · [04-faqs/aws-identity-and-access-management-iam.md](04-faqs/aws-identity-and-access-management-iam.md) · <https://aws.amazon.com/iam/faqs/>

### AWS Key Management Service (KMS)
- `docs` · ConnectCustomKeyStore · [05-docs/security-kms/ct-connect-keystore.md](05-docs/security-kms/ct-connect-keystore.md) · <https://docs.aws.amazon.com/kms/latest/developerguide/ct-connect-keystore.html>
- `docs` · Grants · [05-docs/security-kms/grants.md](05-docs/security-kms/grants.md) · <https://docs.aws.amazon.com/kms/latest/developerguide/grants.html>
- `docs` · Key policies · [05-docs/security-kms/key-policies.md](05-docs/security-kms/key-policies.md) · <https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html>
- `docs` · Multi-Region keys · [05-docs/security-kms/multi-region-keys-overview.md](05-docs/security-kms/multi-region-keys-overview.md) · <https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html>
- `docs` · AWS Key Management Service · [05-docs/security-kms/overview.md](05-docs/security-kms/overview.md) · <https://docs.aws.amazon.com/kms/latest/developerguide/overview.html>
- `docs` · Enable automatic key rotation · [05-docs/security-kms/rotating-keys-enable.md](05-docs/security-kms/rotating-keys-enable.md) · <https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable.html>
- `faq` · FAQ oficial · [04-faqs/aws-key-management-service-kms.md](04-faqs/aws-key-management-service-kms.md) · <https://aws.amazon.com/kms/faqs/>

### AWS Lake Formation
- `docs` · What is AWS Lake Formation? · [05-docs/analytics-lake-formation/what-is-lake-formation.md](05-docs/analytics-lake-formation/what-is-lake-formation.md) · <https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html>
- `faq` · FAQ oficial · [04-faqs/aws-lake-formation.md](04-faqs/aws-lake-formation.md) · <https://aws.amazon.com/lake-formation/faqs/>

### AWS Lambda
- `docs` · Aliases · [05-docs/serverless-lambda/configuration-aliases.md](05-docs/serverless-lambda/configuration-aliases.md) · <https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html>
- `docs` · Configuring reserved concurrency · [05-docs/serverless-lambda/configuration-concurrency.md](05-docs/serverless-lambda/configuration-concurrency.md) · <https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html>
- `docs` · Environment variables · [05-docs/serverless-lambda/configuration-envvars.md](05-docs/serverless-lambda/configuration-envvars.md) · <https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html>
- `docs` · Memory · [05-docs/serverless-lambda/configuration-memory.md](05-docs/serverless-lambda/configuration-memory.md) · <https://docs.aws.amazon.com/lambda/latest/dg/configuration-memory.html>
- `docs` · Extensions · [05-docs/serverless-lambda/lambda-extensions.md](05-docs/serverless-lambda/lambda-extensions.md) · <https://docs.aws.amazon.com/lambda/latest/dg/lambda-extensions.html>
- `docs` · Quotas · [05-docs/serverless-lambda/lambda-managed-instances-quotas.md](05-docs/serverless-lambda/lambda-managed-instances-quotas.md) · <https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-quotas.html>
- `docs` · Runtimes · [05-docs/serverless-lambda/lambda-runtimes.md](05-docs/serverless-lambda/lambda-runtimes.md) · <https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html>
- `docs` · Layers · [05-docs/serverless-lambda/nodejs-layers.md](05-docs/serverless-lambda/nodejs-layers.md) · <https://docs.aws.amazon.com/lambda/latest/dg/nodejs-layers.html>
- `docs` · Configuring provisioned concurrency · [05-docs/serverless-lambda/provisioned-concurrency.md](05-docs/serverless-lambda/provisioned-concurrency.md) · <https://docs.aws.amazon.com/lambda/latest/dg/provisioned-concurrency.html>
- `docs` · Runtime version updates · [05-docs/serverless-lambda/runtimes-update.md](05-docs/serverless-lambda/runtimes-update.md) · <https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html>
- `docs` · SnapStart · [05-docs/serverless-lambda/snapstart.md](05-docs/serverless-lambda/snapstart.md) · <https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html>
- `docs` · Invocation · [05-docs/serverless-lambda/troubleshooting-invocation.md](05-docs/serverless-lambda/troubleshooting-invocation.md) · <https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting-invocation.html>
- `docs` · What is AWS Lambda? · [05-docs/serverless-lambda/welcome.md](05-docs/serverless-lambda/welcome.md) · <https://docs.aws.amazon.com/lambda/latest/dg/welcome.html>
- `faq` · FAQ oficial · [04-faqs/aws-lambda.md](04-faqs/aws-lambda.md) · <https://aws.amazon.com/lambda/faqs/>

### AWS License Manager
- `docs` · What is AWS License Manager? · [05-docs/mgmt-license-manager/license-manager.md](05-docs/mgmt-license-manager/license-manager.md) · <https://docs.aws.amazon.com/license-manager/latest/userguide/license-manager.html>
- `faq` · FAQ oficial · [04-faqs/aws-license-manager.md](04-faqs/aws-license-manager.md) · <https://aws.amazon.com/license-manager/faqs/>

### AWS Management Console
- `faq` · FAQ oficial · [04-faqs/aws-management-console.html](04-faqs/aws-management-console.html) · <https://aws.amazon.com/console/faq-console/>

### AWS Migration Hub
- `docs` · What Is AWS Migration Hub? · [05-docs/migration-hub/whatishub.md](05-docs/migration-hub/whatishub.md) · <https://docs.aws.amazon.com/migrationhub/latest/ug/whatishub.html>

### AWS Network Firewall
- `docs` · Firewall policy settings · [05-docs/security-networkfirewall/firewall-policy-settings.md](05-docs/security-networkfirewall/firewall-policy-settings.md) · <https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-policy-settings.html>
- `docs` · Stateless and stateful rules engines · [05-docs/security-networkfirewall/firewall-rules-engines.md](05-docs/security-networkfirewall/firewall-rules-engines.md) · <https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-rules-engines.html>
- `docs` · Managing your rule groups · [05-docs/security-networkfirewall/rule-groups.md](05-docs/security-networkfirewall/rule-groups.md) · <https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups.html>
- `docs` · Suricata compatible rule strings · [05-docs/security-networkfirewall/stateful-rule-groups-suricata.md](05-docs/security-networkfirewall/stateful-rule-groups-suricata.md) · <https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-suricata.html>
- `docs` · Working with stateless rule groups · [05-docs/security-networkfirewall/stateless-rule-groups-standard.md](05-docs/security-networkfirewall/stateless-rule-groups-standard.md) · <https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateless-rule-groups-standard.html>
- `docs` · What is Network Firewall? · [05-docs/security-networkfirewall/what-is-aws-network-firewall.md](05-docs/security-networkfirewall/what-is-aws-network-firewall.md) · <https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html>
- `faq` · FAQ oficial · [04-faqs/aws-network-firewall.md](04-faqs/aws-network-firewall.md) · <https://aws.amazon.com/network-firewall/faqs/>

### AWS Organizations
- `docs` · Management account · [05-docs/mgmt-organizations/orgs-manage-accounts-management.md](05-docs/mgmt-organizations/orgs-manage-accounts-management.md) · <https://docs.aws.amazon.com/organizations/latest/userguide/orgs-manage_accounts_management.html>
- `docs` · What is AWS Organizations? · [05-docs/mgmt-organizations/orgs-introduction.md](05-docs/mgmt-organizations/orgs-introduction.md) · <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html>
- `docs` · Managing accounts in an organization · [05-docs/mgmt-organizations/orgs-manage-accounts.md](05-docs/mgmt-organizations/orgs-manage-accounts.md) · <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html>
- `docs` · Account invitations · [05-docs/mgmt-organizations/orgs-manage-accounts-invites.md](05-docs/mgmt-organizations/orgs-manage-accounts-invites.md) · <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html>
- `docs` · Service control policies · [05-docs/mgmt-organizations/orgs-manage-policies-scps.md](05-docs/mgmt-organizations/orgs-manage-policies-scps.md) · <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html>
- `faq` · FAQ oficial · [04-faqs/aws-organizations.md](04-faqs/aws-organizations.md) · <https://aws.amazon.com/organizations/faqs/>

### AWS Outposts
- `docs` · Requirements for Outposts racks · [05-docs/compute-outposts/outposts-requirements.md](05-docs/compute-outposts/outposts-requirements.md) · <https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html>
- `docs` · What is AWS Outposts? · [05-docs/compute-outposts/what-is-outposts.md](05-docs/compute-outposts/what-is-outposts.md) · <https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html>
- `faq` · FAQ oficial · [04-faqs/aws-outposts.md](04-faqs/aws-outposts.md) · <https://aws.amazon.com/outposts/faqs/>

### AWS PrivateLink
- `docs` · Create an interface endpoint · [05-docs/network-privatelink/create-interface-endpoint.md](05-docs/network-privatelink/create-interface-endpoint.md) · <https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html>
- `docs` · Gateway endpoints · [05-docs/network-privatelink/gateway-endpoints.md](05-docs/network-privatelink/gateway-endpoints.md) · <https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html>
- `docs` · Configure an interface endpoint · [05-docs/network-privatelink/interface-endpoints.md](05-docs/network-privatelink/interface-endpoints.md) · <https://docs.aws.amazon.com/vpc/latest/privatelink/interface-endpoints.html>
- `docs` · What is AWS PrivateLink? · [05-docs/network-privatelink/what-is-privatelink.md](05-docs/network-privatelink/what-is-privatelink.md) · <https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html>
- `faq` · FAQ oficial · [04-faqs/aws-privatelink.md](04-faqs/aws-privatelink.md) · <https://aws.amazon.com/privatelink/faqs/>

### AWS Proton
- `docs` · What is AWS Proton? · [05-docs/mgmt-proton/welcome.md](05-docs/mgmt-proton/welcome.md) · <https://docs.aws.amazon.com/proton/latest/userguide/Welcome.html>
- `faq` · FAQ oficial · [04-faqs/aws-proton.md](04-faqs/aws-proton.md) · <https://aws.amazon.com/proton/faqs/>

### AWS Resource Access Manager (RAM)
- `docs` · Managing permissions in AWS RAM · [05-docs/security-ram/security-ram-permissions.md](05-docs/security-ram/security-ram-permissions.md) · <https://docs.aws.amazon.com/ram/latest/userguide/security-ram-permissions.html>
- `docs` · What is AWS RAM? · [05-docs/security-ram/what-is.md](05-docs/security-ram/what-is.md) · <https://docs.aws.amazon.com/ram/latest/userguide/what-is.html>
- `docs` · Viewing principals you share with · [05-docs/security-ram/working-with-sharing-view-principals.md](05-docs/security-ram/working-with-sharing-view-principals.md) · <https://docs.aws.amazon.com/ram/latest/userguide/working-with-sharing-view-principals.html>
- `docs` · Viewing resource shares you created · [05-docs/security-ram/working-with-sharing-view-rs.md](05-docs/security-ram/working-with-sharing-view-rs.md) · <https://docs.aws.amazon.com/ram/latest/userguide/working-with-sharing-view-rs.html>
- `faq` · FAQ oficial · [04-faqs/aws-resource-access-manager-ram.html](04-faqs/aws-resource-access-manager-ram.html) · <https://aws.amazon.com/ram/faqs/>

### AWS Secrets Manager
- `docs` · Access Secrets Manager · [05-docs/security-secretsmanager/asm-access.md](05-docs/security-secretsmanager/asm-access.md) · <https://docs.aws.amazon.com/secretsmanager/latest/userguide/asm_access.html>
- `docs` · What is Secrets Manager? · [05-docs/security-secretsmanager/intro.md](05-docs/security-secretsmanager/intro.md) · <https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html>
- `docs` · Multi-region replication · [05-docs/security-secretsmanager/replicate-secrets.md](05-docs/security-secretsmanager/replicate-secrets.md) · <https://docs.aws.amazon.com/secretsmanager/latest/userguide/replicate-secrets.html>
- `docs` · Alternating users rotation · [05-docs/security-secretsmanager/tutorials-rotation-alternating.md](05-docs/security-secretsmanager/tutorials-rotation-alternating.md) · <https://docs.aws.amazon.com/secretsmanager/latest/userguide/tutorials_rotation-alternating.html>
- `faq` · FAQ oficial · [04-faqs/aws-secrets-manager.md](04-faqs/aws-secrets-manager.md) · <https://aws.amazon.com/secrets-manager/faqs/>

### AWS Security Hub
- `docs` · Insights · [05-docs/security-securityhub/securityhub-insights.md](05-docs/security-securityhub/securityhub-insights.md) · <https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-insights.html>
- `docs` · Service-Managed Standard: AWS Control Tower · [05-docs/security-securityhub/service-managed-standard-aws-control-tower.md](05-docs/security-securityhub/service-managed-standard-aws-control-tower.md) · <https://docs.aws.amazon.com/securityhub/latest/userguide/service-managed-standard-aws-control-tower.html>
- `docs` · Standards · [05-docs/security-securityhub/standards-view-manage.md](05-docs/security-securityhub/standards-view-manage.md) · <https://docs.aws.amazon.com/securityhub/latest/userguide/standards-view-manage.html>
- `docs` · What are Security Hub and Security Hub CSPM? · [05-docs/security-securityhub/what-are-securityhub-services.md](05-docs/security-securityhub/what-are-securityhub-services.md) · <https://docs.aws.amazon.com/securityhub/latest/userguide/what-are-securityhub-services.html>
- `faq` · FAQ oficial · [04-faqs/aws-security-hub.md](04-faqs/aws-security-hub.md) · <https://aws.amazon.com/security-hub/faqs/>

### AWS Serverless Application Repository
- `docs` · What Is the AWS Serverless Application Repository? · [05-docs/compute-sar/what-is-serverlessrepo.md](05-docs/compute-sar/what-is-serverlessrepo.md) · <https://docs.aws.amazon.com/serverlessrepo/latest/devguide/what-is-serverlessrepo.html>

### AWS Service Catalog
- `docs` · Getting started with an CloudFormation product · [05-docs/mgmt-servicecatalog/getstarted-cfn.md](05-docs/mgmt-servicecatalog/getstarted-cfn.md) · <https://docs.aws.amazon.com/servicecatalog/latest/adminguide/getstarted-CFN.html>
- `docs` · Step 5: Add a template constraint · [05-docs/mgmt-servicecatalog/getstarted-constraint.md](05-docs/mgmt-servicecatalog/getstarted-constraint.md) · <https://docs.aws.amazon.com/servicecatalog/latest/adminguide/getstarted-constraint.html>
- `docs` · Step 3: Create a portfolio · [05-docs/mgmt-servicecatalog/getstarted-portfolio.md](05-docs/mgmt-servicecatalog/getstarted-portfolio.md) · <https://docs.aws.amazon.com/servicecatalog/latest/adminguide/getstarted-portfolio.html>
- `docs` · What Is Service Catalog? · [05-docs/mgmt-servicecatalog/introduction.md](05-docs/mgmt-servicecatalog/introduction.md) · <https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html>
- `faq` · FAQ oficial · [04-faqs/aws-service-catalog.md](04-faqs/aws-service-catalog.md) · <https://aws.amazon.com/servicecatalog/faqs/>

### AWS Shield (Standard y Advanced)
- `docs` · Setting up SRT support · [05-docs/security-shield/authorize-srt.md](05-docs/security-shield/authorize-srt.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/authorize-srt.html>
- `docs` · Anti-DDoS rule group · [05-docs/security-shield/aws-managed-rule-groups-anti-ddos.md](05-docs/security-shield/aws-managed-rule-groups-anti-ddos.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-anti-ddos.html>
- `docs` · Protection groups · [05-docs/security-shield/ddos-protection-groups.md](05-docs/security-shield/ddos-protection-groups.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/ddos-protection-groups.html>
- `docs` · AWS Shield · [05-docs/security-shield/shield-chapter.md](05-docs/security-shield/shield-chapter.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html>
- `faq` · FAQ oficial · [04-faqs/aws-shield-standard-y-advanced.md](04-faqs/aws-shield-standard-y-advanced.md) · <https://aws.amazon.com/shield/faqs/>

### AWS Site-to-Site VPN
- `docs` · Device with BGP · [05-docs/network-s2svpn/generic-troubleshooting.md](05-docs/network-s2svpn/generic-troubleshooting.md) · <https://docs.aws.amazon.com/vpn/latest/s2svpn/Generic_Troubleshooting.html>
- `docs` · What is AWS Site-to-Site VPN? · [05-docs/network-s2svpn/vpc-vpn.md](05-docs/network-s2svpn/vpc-vpn.md) · <https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html>
- `docs` · VPN tunnel options · [05-docs/network-s2svpn/vpntunnels.md](05-docs/network-s2svpn/vpntunnels.md) · <https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html>
- `docs` · Accelerated VPN connections · [05-docs/network-s2svpn/accelerated-vpn.md](05-docs/network-s2svpn/accelerated-vpn.md) · <https://docs.aws.amazon.com/vpn/latest/s2svpn/accelerated-vpn.html>
- `docs` · Customer gateway options · [05-docs/network-s2svpn/cgw-options.md](05-docs/network-s2svpn/cgw-options.md) · <https://docs.aws.amazon.com/vpn/latest/s2svpn/cgw-options.html>
- `faq` · FAQ oficial · [04-faqs/aws-site-to-site-vpn.md](04-faqs/aws-site-to-site-vpn.md) · <https://aws.amazon.com/vpn/faqs/>

### AWS Snow Family
- `docs` · Export jobs · [05-docs/migration-snow/exporttype.md](05-docs/migration-snow/exporttype.md) · <https://docs.aws.amazon.com/snowball/latest/developer-guide/exporttype.html>
- `docs` · Monitoring the import status · [05-docs/migration-snow/monitor-status.md](05-docs/migration-snow/monitor-status.md) · <https://docs.aws.amazon.com/snowball/latest/developer-guide/monitor-status.html>
- `docs` · AWS Snowball Edge availability change · [05-docs/migration-snow/snowball-edge-availability-change.md](05-docs/migration-snow/snowball-edge-availability-change.md) · <https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-edge-availability-change.html>
- `docs` · Prerequisites for using Snowball Edge · [05-docs/migration-snow/snowball-prereqs.md](05-docs/migration-snow/snowball-prereqs.md) · <https://docs.aws.amazon.com/snowball/latest/developer-guide/snowball-prereqs.html>
- `docs` · What is Snowball Edge? · [05-docs/migration-snow/whatisedge.md](05-docs/migration-snow/whatisedge.md) · <https://docs.aws.amazon.com/snowball/latest/developer-guide/whatisedge.html>

### AWS Step Functions
- `docs` · Choosing workflow type · [05-docs/integration-stepfunctions/choosing-workflow-type.md](05-docs/integration-stepfunctions/choosing-workflow-type.md) · <https://docs.aws.amazon.com/step-functions/latest/dg/choosing-workflow-type.html>
- `docs` · State machines · [05-docs/integration-stepfunctions/concepts-statemachines.md](05-docs/integration-stepfunctions/concepts-statemachines.md) · <https://docs.aws.amazon.com/step-functions/latest/dg/concepts-statemachines.html>
- `docs` · Map · [05-docs/integration-stepfunctions/state-map.md](05-docs/integration-stepfunctions/state-map.md) · <https://docs.aws.amazon.com/step-functions/latest/dg/state-map.html>
- `docs` · Invoke Synchronous Express Workflows through API Gateway · [05-docs/integration-stepfunctions/synchronous-execution.md](05-docs/integration-stepfunctions/synchronous-execution.md) · <https://docs.aws.amazon.com/step-functions/latest/dg/synchronous-execution.html>
- `docs` · Using CDK to create a Standard workflow · [05-docs/integration-stepfunctions/tutorial-lambda-state-machine-cdk.md](05-docs/integration-stepfunctions/tutorial-lambda-state-machine-cdk.md) · <https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-lambda-state-machine-cdk.html>
- `docs` · What is Step Functions? · [05-docs/integration-stepfunctions/welcome.md](05-docs/integration-stepfunctions/welcome.md) · <https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html>
- `faq` · FAQ oficial · [04-faqs/aws-step-functions.md](04-faqs/aws-step-functions.md) · <https://aws.amazon.com/step-functions/faqs/>

### AWS Storage Gateway
- `docs` · docs · [05-docs/storage-gateway/welcome.html](05-docs/storage-gateway/welcome.html) · <https://docs.aws.amazon.com/storagegateway/latest/userguide/welcome.html>
- `faq` · FAQ oficial · [04-faqs/aws-storage-gateway.md](04-faqs/aws-storage-gateway.md) · <https://aws.amazon.com/storagegateway/faqs/>

### AWS Systems Manager
- `docs` · OpsCenter · [05-docs/mgmt-systemsmanager/opscenter.md](05-docs/mgmt-systemsmanager/opscenter.md) · <https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html>
- `docs` · Automation dispatch role · [05-docs/mgmt-systemsmanager/cloud-connector-automation-dispatch-role.md](05-docs/mgmt-systemsmanager/cloud-connector-automation-dispatch-role.md) · <https://docs.aws.amazon.com/systems-manager/latest/userguide/cloud-connector-automation-dispatch-role.html>
- `docs` · Sample scenario for using the InstallOverrideList parameter · [05-docs/mgmt-systemsmanager/patch-manager-override-lists.md](05-docs/mgmt-systemsmanager/patch-manager-override-lists.md) · <https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-override-lists.html>
- `docs` · Patch Manager · [05-docs/mgmt-systemsmanager/patch-manager.md](05-docs/mgmt-systemsmanager/patch-manager.md) · <https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager.html>
- `docs` · Run Command · [05-docs/mgmt-systemsmanager/run-command.md](05-docs/mgmt-systemsmanager/run-command.md) · <https://docs.aws.amazon.com/systems-manager/latest/userguide/run-command.html>
- `docs` · Automation · [05-docs/mgmt-systemsmanager/systems-manager-automation.md](05-docs/mgmt-systemsmanager/systems-manager-automation.md) · <https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html>
- `docs` · Update just-in-time node access session preferences · [05-docs/mgmt-systemsmanager/systems-manager-just-in-time-node-access-session-preferences.md](05-docs/mgmt-systemsmanager/systems-manager-just-in-time-node-access-session-preferences.md) · <https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-just-in-time-node-access-session-preferences.html>
- `docs` · State Manager · [05-docs/mgmt-systemsmanager/systems-manager-state.md](05-docs/mgmt-systemsmanager/systems-manager-state.md) · <https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html>
- `docs` · What is AWS Systems Manager? · [05-docs/mgmt-systemsmanager/what-is-systems-manager.md](05-docs/mgmt-systemsmanager/what-is-systems-manager.md) · <https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html>

### AWS Transfer Family
- `docs` · Create an SFTP-enabled server · [05-docs/migration-transfer/create-server-sftp.md](05-docs/migration-transfer/create-server-sftp.md) · <https://docs.aws.amazon.com/transfer/latest/userguide/create-server-sftp.html>
- `docs` · Get started with server endpoints · [05-docs/migration-transfer/getting-started.md](05-docs/migration-transfer/getting-started.md) · <https://docs.aws.amazon.com/transfer/latest/userguide/getting-started.html>
- `docs` · Create and use SFTP connectors · [05-docs/migration-transfer/sftp-connectors-tutorial.md](05-docs/migration-transfer/sftp-connectors-tutorial.md) · <https://docs.aws.amazon.com/transfer/latest/userguide/sftp-connectors-tutorial.html>
- `docs` · Transfer Family for SFTP, FTPS, FTP · [05-docs/migration-transfer/sftp-for-transfer-family.md](05-docs/migration-transfer/sftp-for-transfer-family.md) · <https://docs.aws.amazon.com/transfer/latest/userguide/sftp-for-transfer-family.html>
- `docs` · Configure a Transfer Family server endpoint · [05-docs/migration-transfer/tf-server-endpoint.md](05-docs/migration-transfer/tf-server-endpoint.md) · <https://docs.aws.amazon.com/transfer/latest/userguide/tf-server-endpoint.html>
- `docs` · What is AWS Transfer Family? · [05-docs/migration-transfer/what-is-aws-transfer-family.md](05-docs/migration-transfer/what-is-aws-transfer-family.md) · <https://docs.aws.amazon.com/transfer/latest/userguide/what-is-aws-transfer-family.html>
- `faq` · FAQ oficial · [04-faqs/aws-transfer-family.md](04-faqs/aws-transfer-family.md) · <https://aws.amazon.com/aws-transfer-family/faqs/>

### AWS Transit Gateway
- `docs` · Accept a shared attachment · [05-docs/network-tgw/acccept-tgw-attach.md](05-docs/network-tgw/acccept-tgw-attach.md) · <https://docs.aws.amazon.com/vpc/latest/tgw/acccept-tgw-attach.html>
- `docs` · How transit gateways work · [05-docs/network-tgw/how-transit-gateways-work.md](05-docs/network-tgw/how-transit-gateways-work.md) · <https://docs.aws.amazon.com/vpc/latest/tgw/how-transit-gateways-work.html>
- `docs` · Multicast on transit gateways · [05-docs/network-tgw/tgw-multicast-overview.md](05-docs/network-tgw/tgw-multicast-overview.md) · <https://docs.aws.amazon.com/vpc/latest/tgw/tgw-multicast-overview.html>
- `docs` · Add a route to a transit gateway route table · [05-docs/network-tgw/tgw-peering-add-route.md](05-docs/network-tgw/tgw-peering-add-route.md) · <https://docs.aws.amazon.com/vpc/latest/tgw/tgw-peering-add-route.html>
- `docs` · Peering attachments · [05-docs/network-tgw/tgw-peering.md](05-docs/network-tgw/tgw-peering.md) · <https://docs.aws.amazon.com/vpc/latest/tgw/tgw-peering.html>
- `docs` · VPN attachments · [05-docs/network-tgw/tgw-vpn-attachments.md](05-docs/network-tgw/tgw-vpn-attachments.md) · <https://docs.aws.amazon.com/vpc/latest/tgw/tgw-vpn-attachments.html>
- `docs` · What is AWS Transit Gateway? · [05-docs/network-tgw/what-is-transit-gateway.md](05-docs/network-tgw/what-is-transit-gateway.md) · <https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html>
- `faq` · FAQ oficial · [04-faqs/aws-transit-gateway.md](04-faqs/aws-transit-gateway.md) · <https://aws.amazon.com/transit-gateway/faqs/>

### AWS Trusted Advisor
- `faq` · FAQ oficial · [04-faqs/aws-trusted-advisor.md](04-faqs/aws-trusted-advisor.md) · <https://aws.amazon.com/premiumsupport/technology/trusted-advisor/faqs/>

### AWS WAF
- `docs` · Bot Control rule group · [05-docs/security-waf/aws-managed-rule-groups-bot.md](05-docs/security-waf/aws-managed-rule-groups-bot.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html>
- `docs` · Using managed rule group statements · [05-docs/security-waf/waf-rule-statement-type-managed-rule-group.md](05-docs/security-waf/waf-rule-statement-type-managed-rule-group.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-managed-rule-group.html>
- `docs` · Using rate-based rule statements · [05-docs/security-waf/waf-rule-statement-type-rate-based.md](05-docs/security-waf/waf-rule-statement-type-rate-based.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html>
- `docs` · Configuring CAPTCHA, challenge, and tokens · [05-docs/security-waf/web-acl-captcha-challenge-token-domains.md](05-docs/security-waf/web-acl-captcha-challenge-token-domains.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-captcha-challenge-token-domains.html>
- `docs` · Creating a protection pack (web ACL) · [05-docs/security-waf/web-acl-creating.md](05-docs/security-waf/web-acl-creating.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-creating.html>
- `docs` · Managing rule group behavior · [05-docs/security-waf/web-acl-rule-group-settings.md](05-docs/security-waf/web-acl-rule-group-settings.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-rule-group-settings.html>
- `docs` · What are AWS WAF, Shield Advanced, AWS Shield network security director and Firewall Manager? · [05-docs/security-waf/what-is-aws-waf.md](05-docs/security-waf/what-is-aws-waf.md) · <https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html>
- `faq` · FAQ oficial · [04-faqs/aws-waf.md](04-faqs/aws-waf.md) · <https://aws.amazon.com/waf/faqs/>

### AWS Wavelength
- `docs` · Available Wavelength Zones · [05-docs/compute-wavelength/available-wavelength-zones.md](05-docs/compute-wavelength/available-wavelength-zones.md) · <https://docs.aws.amazon.com/wavelength/latest/developerguide/available-wavelength-zones.html>
- `docs` · Carrier gateways · [05-docs/compute-wavelength/carrier-gateways.md](05-docs/compute-wavelength/carrier-gateways.md) · <https://docs.aws.amazon.com/wavelength/latest/developerguide/carrier-gateways.html>
- `docs` · What is AWS Wavelength? · [05-docs/compute-wavelength/what-is-wavelength.md](05-docs/compute-wavelength/what-is-wavelength.md) · <https://docs.aws.amazon.com/wavelength/latest/developerguide/what-is-wavelength.html>
- `faq` · FAQ oficial · [04-faqs/aws-wavelength.md](04-faqs/aws-wavelength.md) · <https://aws.amazon.com/wavelength/faqs/>

### AWS Well-Architected Tool
- `docs` · Defining a workload · [05-docs/mgmt-watool/define-workload.md](05-docs/mgmt-watool/define-workload.md) · <https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html>
- `docs` · What is AWS Well-Architected Tool? · [05-docs/mgmt-watool/intro.md](05-docs/mgmt-watool/intro.md) · <https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html>
- `docs` · Lenses · [05-docs/mgmt-watool/lenses.md](05-docs/mgmt-watool/lenses.md) · <https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses.html>
- `docs` · Generate a workload report · [05-docs/mgmt-watool/workloads-report.md](05-docs/mgmt-watool/workloads-report.md) · <https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-report.html>
- `faq` · FAQ oficial · [04-faqs/aws-well-architected-tool.html](04-faqs/aws-well-architected-tool.html) · <https://aws.amazon.com/well-architected-tool/faqs/>

### AWS X-Ray
- `docs` · What is AWS X-Ray? · [05-docs/devtools-xray/aws-xray.md](05-docs/devtools-xray/aws-xray.md) · <https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html>
- `docs` · Custom subsegments · [05-docs/devtools-xray/scorekeep-subsegments.md](05-docs/devtools-xray/scorekeep-subsegments.md) · <https://docs.aws.amazon.com/xray/latest/devguide/scorekeep-subsegments.html>
- `docs` · Segment documents · [05-docs/devtools-xray/xray-api-segmentdocuments.md](05-docs/devtools-xray/xray-api-segmentdocuments.md) · <https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html>
- `docs` · Sampling · [05-docs/devtools-xray/xray-console-sampling.md](05-docs/devtools-xray/xray-console-sampling.md) · <https://docs.aws.amazon.com/xray/latest/devguide/xray-console-sampling.html>

### Amazon API Gateway
- `docs` · Usage plans · [05-docs/mobile-apigateway/api-gateway-api-usage-plans.md](05-docs/mobile-apigateway/api-gateway-api-usage-plans.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html>
- `docs` · Cache settings · [05-docs/mobile-apigateway/api-gateway-caching.md](05-docs/mobile-apigateway/api-gateway-caching.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html>
- `docs` · HTTP API tutorials · [05-docs/mobile-apigateway/api-gateway-http-tutorials.md](05-docs/mobile-apigateway/api-gateway-http-tutorials.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-http-tutorials.html>
- `docs` · Throttling · [05-docs/mobile-apigateway/api-gateway-request-throttling.md](05-docs/mobile-apigateway/api-gateway-request-throttling.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html>
- `docs` · WebSocket API tutorials · [05-docs/mobile-apigateway/api-gateway-websocket-tutorials.md](05-docs/mobile-apigateway/api-gateway-websocket-tutorials.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-websocket-tutorials.html>
- `docs` · Use Lambda authorizers · [05-docs/mobile-apigateway/apigateway-use-lambda-authorizer.md](05-docs/mobile-apigateway/apigateway-use-lambda-authorizer.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html>
- `docs` · Choose a Lambda integration tutorial · [05-docs/mobile-apigateway/getting-started-with-lambda-integration.md](05-docs/mobile-apigateway/getting-started-with-lambda-integration.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-lambda-integration.html>
- `docs` · Choose between REST APIs and HTTP APIs · [05-docs/mobile-apigateway/http-api-vs-rest.md](05-docs/mobile-apigateway/http-api-vs-rest.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html>
- `docs` · Set up a stage · [05-docs/mobile-apigateway/set-up-stages.md](05-docs/mobile-apigateway/set-up-stages.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-stages.html>
- `docs` · What is Amazon API Gateway? · [05-docs/mobile-apigateway/welcome.md](05-docs/mobile-apigateway/welcome.md) · <https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html>
- `faq` · FAQ oficial · [04-faqs/amazon-api-gateway.md](04-faqs/amazon-api-gateway.md) · <https://aws.amazon.com/api-gateway/faqs/>

### Amazon AppFlow
- `docs` · Adobe Analytics · [05-docs/integration-appflow/connectors-adobeanalytics.md](05-docs/integration-appflow/connectors-adobeanalytics.md) · <https://docs.aws.amazon.com/appflow/latest/userguide/connectors-adobeanalytics.html>
- `docs` · Flows · [05-docs/integration-appflow/flows.md](05-docs/integration-appflow/flows.md) · <https://docs.aws.amazon.com/appflow/latest/userguide/flows.html>
- `docs` · What is Amazon AppFlow? · [05-docs/integration-appflow/what-is-appflow.md](05-docs/integration-appflow/what-is-appflow.md) · <https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html>
- `faq` · FAQ oficial · [04-faqs/amazon-appflow.html](04-faqs/amazon-appflow.html) · <https://aws.amazon.com/appflow/faqs/>

### Amazon Athena
- `docs` · Work with connectors for Spark · [05-docs/analytics-athena/connectors-spark.md](05-docs/analytics-athena/connectors-spark.md) · <https://docs.aws.amazon.com/athena/latest/ug/connectors-spark.html>
- `docs` · Create a table from query results (CTAS) · [05-docs/analytics-athena/ctas.md](05-docs/analytics-athena/ctas.md) · <https://docs.aws.amazon.com/athena/latest/ug/ctas.html>
- `docs` · Use a workgroup · [05-docs/analytics-athena/query-results-specify-location-workgroup.md](05-docs/analytics-athena/query-results-specify-location-workgroup.md) · <https://docs.aws.amazon.com/athena/latest/ug/query-results-specify-location-workgroup.html>
- `docs` · Tables, databases, and data catalogs · [05-docs/analytics-athena/understanding-tables-databases-and-the-data-catalog.md](05-docs/analytics-athena/understanding-tables-databases-and-the-data-catalog.md) · <https://docs.aws.amazon.com/athena/latest/ug/understanding-tables-databases-and-the-data-catalog.html>
- `docs` · What is Amazon Athena? · [05-docs/analytics-athena/what-is.md](05-docs/analytics-athena/what-is.md) · <https://docs.aws.amazon.com/athena/latest/ug/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-athena.md](04-faqs/amazon-athena.md) · <https://aws.amazon.com/athena/faqs/>

### Amazon Aurora (y Aurora Serverless)
- `docs` · Cluster endpoints · [05-docs/db-aurora/aurora-endpoints-cluster.md](05-docs/db-aurora/aurora-endpoints-cluster.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Endpoints.Cluster.html>
- `docs` · What is Aurora? · [05-docs/db-aurora/chap-auroraoverview.md](05-docs/db-aurora/chap-auroraoverview.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html>
- `docs` · High availability · [05-docs/db-aurora/concepts-aurorahighavailability.md](05-docs/db-aurora/concepts-aurorahighavailability.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html>
- `docs` · Aurora global databases · [05-docs/db-aurora/concepts-aurora-fea-regions-db-eng-feature-globaldatabase.md](05-docs/db-aurora/concepts-aurora-fea-regions-db-eng-feature-globaldatabase.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.Aurora_Fea_Regions_DB-eng.Feature.GlobalDatabase.html>
- `docs` · Aurora serverless · [05-docs/db-aurora/concepts-aurora-fea-regions-db-eng-feature-serverlessv2.md](05-docs/db-aurora/concepts-aurora-fea-regions-db-eng-feature-serverlessv2.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.Aurora_Fea_Regions_DB-eng.Feature.ServerlessV2.html>
- `docs` · Adding Aurora Replicas · [05-docs/db-aurora/aurora-replicas-adding.md](05-docs/db-aurora/aurora-replicas-adding.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-replicas-adding.html>
- `docs` · Using Babelfish for Aurora PostgreSQL · [05-docs/db-aurora/babelfish.md](05-docs/db-aurora/babelfish.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/babelfish.html>

### Amazon CloudFront
- `docs` · Cache behavior settings · [05-docs/network-cloudfront/downloaddistvaluescachebehavior.md](05-docs/network-cloudfront/downloaddistvaluescachebehavior.md) · <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesCacheBehavior.html>
- `docs` · Origin settings · [05-docs/network-cloudfront/downloaddistvaluesorigin.md](05-docs/network-cloudfront/downloaddistvaluesorigin.md) · <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistValuesOrigin.html>
- `docs` · Get started with a standard distribution · [05-docs/network-cloudfront/gettingstarted-simpledistribution.md](05-docs/network-cloudfront/gettingstarted-simpledistribution.md) · <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.SimpleDistribution.html>
- `docs` · What is Amazon CloudFront? · [05-docs/network-cloudfront/introduction.md](05-docs/network-cloudfront/introduction.md) · <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html>
- `docs` · Restrict content with signed URLs and signed cookies · [05-docs/network-cloudfront/privatecontent.md](05-docs/network-cloudfront/privatecontent.md) · <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html>
- `docs` · Requirements for using SSL/TLS certificates with CloudFront · [05-docs/network-cloudfront/cnames-and-https-requirements.md](05-docs/network-cloudfront/cnames-and-https-requirements.md) · <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html>
- `docs` · Differences between CloudFront Functions and Lambda@Edge · [05-docs/network-cloudfront/edge-functions-choosing.md](05-docs/network-cloudfront/edge-functions-choosing.md) · <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-choosing.html>
- `docs` · Use field-level encryption to help protect sensitive data · [05-docs/network-cloudfront/field-level-encryption.md](05-docs/network-cloudfront/field-level-encryption.md) · <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html>
- `docs` · Use Origin Shield · [05-docs/network-cloudfront/origin-shield.md](05-docs/network-cloudfront/origin-shield.md) · <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html>
- `faq` · FAQ oficial · [04-faqs/amazon-cloudfront.md](04-faqs/amazon-cloudfront.md) · <https://aws.amazon.com/cloudfront/faqs/>

### Amazon CloudWatch
- `docs` · Dashboards · [05-docs/mgmt-cloudwatch/cloudwatch-dashboards.md](05-docs/mgmt-cloudwatch/cloudwatch-dashboards.md) · <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html>
- `docs` · Container Insights · [05-docs/mgmt-cloudwatch/containerinsights.md](05-docs/mgmt-cloudwatch/containerinsights.md) · <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html>
- `docs` · What is Amazon CloudWatch? · [05-docs/mgmt-cloudwatch/whatiscloudwatch.md](05-docs/mgmt-cloudwatch/whatiscloudwatch.md) · <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html>
- `docs` · Graph metrics manually on a dashboard · [05-docs/mgmt-cloudwatch/add-old-metrics-to-graph.md](05-docs/mgmt-cloudwatch/add-old-metrics-to-graph.md) · <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/add_old_metrics_to_graph.html>
- `docs` · Log alarms · [05-docs/mgmt-cloudwatch/alarm-log.md](05-docs/mgmt-cloudwatch/alarm-log.md) · <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-log.html>
- `docs` · Adding an alarm from a different account to a cross-account dashboard · [05-docs/mgmt-cloudwatch/create-alarm-xaxr-dashboard.md](05-docs/mgmt-cloudwatch/create-alarm-xaxr-dashboard.md) · <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/create-alarm-xaxr-dashboard.html>
- `docs` · Install the CloudWatch agent with the Amazon CloudWatch Observability EKS add-on or the Helm chart · [05-docs/mgmt-cloudwatch/install-cloudwatch-observability-eks-addon.md](05-docs/mgmt-cloudwatch/install-cloudwatch-observability-eks-addon.md) · <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Observability-EKS-addon.html>
- `faq` · FAQ oficial · [04-faqs/amazon-cloudwatch.md](04-faqs/amazon-cloudwatch.md) · <https://aws.amazon.com/cloudwatch/faqs/>

### Amazon Cognito
- `docs` · Verifying a JSON Web Token · [05-docs/security-cognito/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.md](05-docs/security-cognito/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.md) · <https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html>
- `docs` · Sign up a user with a user pool that requires MFA · [05-docs/security-cognito/cognito-identity-provider-example-cognito-identity-provider-scenario-signupuserwithmfa-sec.md](05-docs/security-cognito/cognito-identity-provider-example-cognito-identity-provider-scenario-signupuserwithmfa-sec.md) · <https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity-provider_example_cognito-identity-provider_Scenario_SignUpUserWithMfa_section.html>
- `docs` · Adaptive authentication · [05-docs/security-cognito/cognito-user-pool-settings-adaptive-authentication.md](05-docs/security-cognito/cognito-user-pool-settings-adaptive-authentication.md) · <https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html>
- `docs` · Linking federated users · [05-docs/security-cognito/cognito-user-pools-identity-federation-consolidate-users.md](05-docs/security-cognito/cognito-user-pools-identity-federation-consolidate-users.md) · <https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html>
- `docs` · Getting started with user pools · [05-docs/security-cognito/getting-started-user-pools.md](05-docs/security-cognito/getting-started-user-pools.md) · <https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-user-pools.html>
- `docs` · Getting started with identity pools · [05-docs/security-cognito/getting-started-with-identity-pools.md](05-docs/security-cognito/getting-started-with-identity-pools.md) · <https://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-identity-pools.html>
- `docs` · Hosted UI (classic) branding · [05-docs/security-cognito/hosted-ui-classic-branding.md](05-docs/security-cognito/hosted-ui-classic-branding.md) · <https://docs.aws.amazon.com/cognito/latest/developerguide/hosted-ui-classic-branding.html>
- `docs` · What is Amazon Cognito? · [05-docs/security-cognito/what-is-amazon-cognito.md](05-docs/security-cognito/what-is-amazon-cognito.md) · <https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html>
- `faq` · FAQ oficial · [04-faqs/amazon-cognito.md](04-faqs/amazon-cognito.md) · <https://aws.amazon.com/cognito/faqs/>

### Amazon Comprehend
- `docs` · What is Amazon Comprehend? · [05-docs/ml-comprehend/what-is.md](05-docs/ml-comprehend/what-is.md) · <https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-comprehend.md](04-faqs/amazon-comprehend.md) · <https://aws.amazon.com/comprehend/faqs/>

### Amazon Detective
- `docs` · docs · [05-docs/security-detective/welcome.html](05-docs/security-detective/welcome.html) · <https://docs.aws.amazon.com/detective/latest/adminguide/welcome.html>
- `docs` · What is Detective? · [05-docs/security-detective/what-is-detective.md](05-docs/security-detective/what-is-detective.md) · <https://docs.aws.amazon.com/detective/latest/userguide/what-is-detective.html>
- `faq` · FAQ oficial · [04-faqs/amazon-detective.md](04-faqs/amazon-detective.md) · <https://aws.amazon.com/detective/faqs/>

### Amazon DocumentDB
- `docs` · Connecting as a replica set · [05-docs/db-documentdb/connect-to-replica-set.md](05-docs/db-documentdb/connect-to-replica-set.md) · <https://docs.aws.amazon.com/documentdb/latest/developerguide/connect-to-replica-set.html>
- `docs` · Managing instance classes · [05-docs/db-documentdb/db-instance-classes.md](05-docs/db-documentdb/db-instance-classes.md) · <https://docs.aws.amazon.com/documentdb/latest/developerguide/db-instance-classes.html>
- `docs` · Managing clusters and instances · [05-docs/db-documentdb/managing-documentdb.md](05-docs/db-documentdb/managing-documentdb.md) · <https://docs.aws.amazon.com/documentdb/latest/developerguide/managing-documentdb.html>
- `docs` · What is Amazon DocumentDB · [05-docs/db-documentdb/what-is.md](05-docs/db-documentdb/what-is.md) · <https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-documentdb.md](04-faqs/amazon-documentdb.md) · <https://aws.amazon.com/documentdb/faqs/>

### Amazon DynamoDB
- `docs` · Managing throughput capacity with auto scaling · [05-docs/db-dynamodb/autoscaling.md](05-docs/db-dynamodb/autoscaling.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html>
- `docs` · Backup and restore · [05-docs/db-dynamodb/backup-and-restore.md](05-docs/db-dynamodb/backup-and-restore.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Backup-and-Restore.html>
- `docs` · In-memory acceleration with DAX · [05-docs/db-dynamodb/dax.md](05-docs/db-dynamodb/dax.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html>
- `docs` · Working with global tables · [05-docs/db-dynamodb/globaltables.md](05-docs/db-dynamodb/globaltables.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html>
- `docs` · Core components · [05-docs/db-dynamodb/howitworks-corecomponents.md](05-docs/db-dynamodb/howitworks-corecomponents.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.CoreComponents.html>
- `docs` · DynamoDB table classes · [05-docs/db-dynamodb/howitworks-tableclasses.md](05-docs/db-dynamodb/howitworks-tableclasses.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.TableClasses.html>
- `docs` · What is Amazon DynamoDB? · [05-docs/db-dynamodb/introduction.md](05-docs/db-dynamodb/introduction.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html>
- `docs` · Working with secondary indexes · [05-docs/db-dynamodb/secondaryindexes.md](05-docs/db-dynamodb/secondaryindexes.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html>
- `docs` · Time to Live (TTL) · [05-docs/db-dynamodb/ttl.md](05-docs/db-dynamodb/ttl.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html>
- `docs` · Partition key design · [05-docs/db-dynamodb/bp-partition-key-design.md](05-docs/db-dynamodb/bp-partition-key-design.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-partition-key-design.html>
- `docs` · DynamoDB maximum throughput for on-demand tables · [05-docs/db-dynamodb/on-demand-capacity-mode-max-throughput.md](05-docs/db-dynamodb/on-demand-capacity-mode-max-throughput.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode-max-throughput.html>
- `docs` · DynamoDB on-demand capacity mode · [05-docs/db-dynamodb/on-demand-capacity-mode.md](05-docs/db-dynamodb/on-demand-capacity-mode.md) · <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html>
- `faq` · FAQ oficial · [04-faqs/amazon-dynamodb.md](04-faqs/amazon-dynamodb.md) · <https://aws.amazon.com/dynamodb/faqs/>

### Amazon EC2
- `docs` · Amazon Machine Images · [05-docs/compute-ec2/amis.md](05-docs/compute-ec2/amis.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html>
- `docs` · Hibernate · [05-docs/compute-ec2/hibernate.md](05-docs/compute-ec2/hibernate.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html>
- `docs` · What is Amazon EC2? · [05-docs/compute-ec2/concepts.md](05-docs/compute-ec2/concepts.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html>
- `docs` · Use Capacity Reservations with placement groups · [05-docs/compute-ec2/cr-cpg.md](05-docs/compute-ec2/cr-cpg.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cr-cpg.html>
- `docs` · Dedicated Hosts · [05-docs/compute-ec2/dedicated-hosts-overview.md](05-docs/compute-ec2/dedicated-hosts-overview.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html>
- `docs` · Instance metadata · [05-docs/compute-ec2/ec2-instance-metadata.md](05-docs/compute-ec2/ec2-instance-metadata.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html>
- `docs` · Launch templates · [05-docs/compute-ec2/ec2-launch-templates.md](05-docs/compute-ec2/ec2-launch-templates.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html>
- `docs` · Reserved Instances · [05-docs/compute-ec2/ec2-reserved-instances.md](05-docs/compute-ec2/ec2-reserved-instances.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html>
- `docs` · Instance types · [05-docs/compute-ec2/instance-types.md](05-docs/compute-ec2/instance-types.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html>
- `docs` · Spot Instances · [05-docs/compute-ec2/using-spot-instances.md](05-docs/compute-ec2/using-spot-instances.md) · <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html>
- `faq` · FAQ oficial · [04-faqs/amazon-ec2.md](04-faqs/amazon-ec2.md) · <https://aws.amazon.com/ec2/faqs/>

### Amazon EC2 Auto Scaling
- `docs` · Target tracking scaling policies · [05-docs/compute-ec2-autoscaling/as-scaling-target-tracking.md](05-docs/compute-ec2-autoscaling/as-scaling-target-tracking.md) · <https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html>
- `docs` · Instance refresh · [05-docs/compute-ec2-autoscaling/asg-instance-refresh.md](05-docs/compute-ec2-autoscaling/asg-instance-refresh.md) · <https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html>
- `docs` · Predictive scaling · [05-docs/compute-ec2-autoscaling/ec2-auto-scaling-predictive-scaling.md](05-docs/compute-ec2-autoscaling/ec2-auto-scaling-predictive-scaling.md) · <https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html>
- `docs` · Scaling cooldowns · [05-docs/compute-ec2-autoscaling/ec2-auto-scaling-scaling-cooldowns.md](05-docs/compute-ec2-autoscaling/ec2-auto-scaling-scaling-cooldowns.md) · <https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-cooldowns.html>
- `docs` · Scheduled scaling · [05-docs/compute-ec2-autoscaling/ec2-auto-scaling-scheduled-scaling.md](05-docs/compute-ec2-autoscaling/ec2-auto-scaling-scheduled-scaling.md) · <https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scheduled-scaling.html>
- `docs` · Launch templates · [05-docs/compute-ec2-autoscaling/launch-templates.md](05-docs/compute-ec2-autoscaling/launch-templates.md) · <https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html>
- `docs` · Create a step scaling policy for scale out · [05-docs/compute-ec2-autoscaling/step-scaling-create-scale-out-policy.md](05-docs/compute-ec2-autoscaling/step-scaling-create-scale-out-policy.md) · <https://docs.aws.amazon.com/autoscaling/ec2/userguide/step-scaling-create-scale-out-policy.html>
- `docs` · View health check status · [05-docs/compute-ec2-autoscaling/warm-pools-health-checks-monitor-view-status.md](05-docs/compute-ec2-autoscaling/warm-pools-health-checks-monitor-view-status.md) · <https://docs.aws.amazon.com/autoscaling/ec2/userguide/warm-pools-health-checks-monitor-view-status.html>
- `docs` · What is Amazon EC2 Auto Scaling? · [05-docs/compute-ec2-autoscaling/what-is-amazon-ec2-auto-scaling.md](05-docs/compute-ec2-autoscaling/what-is-amazon-ec2-auto-scaling.md) · <https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html>
- `faq` · FAQ oficial · [04-faqs/amazon-ec2-auto-scaling.md](04-faqs/amazon-ec2-auto-scaling.md) · <https://aws.amazon.com/ec2/autoscaling/faqs/>

### Amazon ECR
- `docs` · Troubleshooting image scanning · [05-docs/containers-ecr/image-scanning-troubleshooting.md](05-docs/containers-ecr/image-scanning-troubleshooting.md) · <https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning-troubleshooting.html>
- `docs` · Creating a lifecycle policy preview · [05-docs/containers-ecr/lpp-creation.md](05-docs/containers-ecr/lpp-creation.md) · <https://docs.aws.amazon.com/AmazonECR/latest/userguide/lpp_creation.html>
- `docs` · Sync an upstream registry · [05-docs/containers-ecr/pull-through-cache.md](05-docs/containers-ecr/pull-through-cache.md) · <https://docs.aws.amazon.com/AmazonECR/latest/userguide/pull-through-cache.html>
- `docs` · Creating a repository to store images · [05-docs/containers-ecr/repository-create.md](05-docs/containers-ecr/repository-create.md) · <https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-create.html>
- `docs` · What is Amazon ECR · [05-docs/containers-ecr/what-is-ecr.md](05-docs/containers-ecr/what-is-ecr.md) · <https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html>
- `faq` · FAQ oficial · [04-faqs/amazon-ecr.md](04-faqs/amazon-ecr.md) · <https://aws.amazon.com/ecr/faqs/>

### Amazon ECS (y ECS Anywhere)
- `docs` · What is Amazon ECS? · [05-docs/containers-ecs/welcome.md](05-docs/containers-ecs/welcome.md) · <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html>
- `docs` · Auto scaling and capacity management best practices · [05-docs/containers-ecs/capacity-availability.md](05-docs/containers-ecs/capacity-availability.md) · <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/capacity-availability.html>
- `docs` · Launch types and capacity providers · [05-docs/containers-ecs/capacity-launch-type-comparison.md](05-docs/containers-ecs/capacity-launch-type-comparison.md) · <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/capacity-launch-type-comparison.html>
- `docs` · Learn how to create a Linux task for Fargate · [05-docs/containers-ecs/getting-started-fargate.md](05-docs/containers-ecs/getting-started-fargate.md) · <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-fargate.html>
- `docs` · Launch a GPU container instance for Amazon ECS on Amazon EC2 · [05-docs/containers-ecs/gpu-launch.md](05-docs/containers-ecs/gpu-launch.md) · <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/gpu-launch.html>
- `docs` · Daemon task definitions · [05-docs/containers-ecs/managed-daemons-task-definitions.md](05-docs/containers-ecs/managed-daemons-task-definitions.md) · <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/managed-daemons-task-definitions.html>
- `docs` · Managed Instances capacity providers · [05-docs/containers-ecs/managed-instances-capacity-providers-concept.md](05-docs/containers-ecs/managed-instances-capacity-providers-concept.md) · <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/managed-instances-capacity-providers-concept.html>
- `docs` · Container image pull behavior for EC2 and external instances · [05-docs/containers-ecs/pull-behavior.md](05-docs/containers-ecs/pull-behavior.md) · <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/pull-behavior.html>
- `docs` · Amazon Elastic Container Service on AWS Outposts · [05-docs/containers-ecs/using-outposts.md](05-docs/containers-ecs/using-outposts.md) · <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-outposts.html>
- `faq` · FAQ oficial · [04-faqs/amazon-ecs-y-ecs-anywhere.md](04-faqs/amazon-ecs-y-ecs-anywhere.md) · <https://aws.amazon.com/ecs/faqs/>

### Amazon EKS (y EKS Anywhere / EKS Distro)
- `docs` · Migrate from Fargate · [05-docs/containers-eks/userguide/auto-migrate-fargate.md](05-docs/containers-eks/userguide/auto-migrate-fargate.md) · <https://docs.aws.amazon.com/eks/latest/userguide/auto-migrate-fargate.html>
- `docs` · Run critical add-ons · [05-docs/containers-eks/userguide/critical-workload.md](05-docs/containers-eks/userguide/critical-workload.md) · <https://docs.aws.amazon.com/eks/latest/userguide/critical-workload.html>
- `docs` · Create cluster (EKS Auto Mode) · [05-docs/containers-eks/userguide/getting-started-automode.md](05-docs/containers-eks/userguide/getting-started-automode.md) · <https://docs.aws.amazon.com/eks/latest/userguide/getting-started-automode.html>
- `docs` · Managed node groups · [05-docs/containers-eks/userguide/managed-node-groups.md](05-docs/containers-eks/userguide/managed-node-groups.md) · <https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html>
- `docs` · Node groups role · [05-docs/containers-eks/userguide/using-service-linked-roles-eks-nodegroups.md](05-docs/containers-eks/userguide/using-service-linked-roles-eks-nodegroups.md) · <https://docs.aws.amazon.com/eks/latest/userguide/using-service-linked-roles-eks-nodegroups.html>
- `docs` · What is Amazon EKS? · [05-docs/containers-eks/userguide/what-is-eks.md](05-docs/containers-eks/userguide/what-is-eks.md) · <https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html>
- `faq` · FAQ oficial · [04-faqs/amazon-eks-y-eks-anywhere-eks-distro.md](04-faqs/amazon-eks-y-eks-anywhere-eks-distro.md) · <https://aws.amazon.com/eks/faqs/>

### Amazon EMR
- `docs` · Planning and configuring instance fleets for your Amazon EMR cluster · [05-docs/analytics-emr/emr-instance-fleet.md](05-docs/analytics-emr/emr-instance-fleet.md) · <https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html>
- `docs` · Configure instance fleets or instance groups · [05-docs/analytics-emr/emr-instance-group-configuration.md](05-docs/analytics-emr/emr-instance-group-configuration.md) · <https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-group-configuration.html>
- `docs` · Understanding how to create and work with Amazon EMR clusters · [05-docs/analytics-emr/emr-overview.md](05-docs/analytics-emr/emr-overview.md) · <https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-overview.html>
- `docs` · Optimize Spark jobs · [05-docs/analytics-emr/emr-studio-spark-optimization.md](05-docs/analytics-emr/emr-studio-spark-optimization.md) · <https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-spark-optimization.html>
- `docs` · What is Amazon EMR? · [05-docs/analytics-emr/emr-what-is-emr.md](05-docs/analytics-emr/emr-what-is-emr.md) · <https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-what-is-emr.html>
- `faq` · FAQ oficial · [04-faqs/amazon-emr.md](04-faqs/amazon-emr.md) · <https://aws.amazon.com/emr/faqs/>

### Amazon ElastiCache (Memcached y Redis)
- `docs` · Example: Lettuce config for cluster mode, TLS enabled · [05-docs/db-elasticache/mem-ug/bestpractices-clients-lettuce-cme.md](05-docs/db-elasticache/mem-ug/bestpractices-clients-lettuce-cme.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/BestPractices.Clients-lettuce-cme.html>
- `docs` · Best practices and caching strategies · [05-docs/db-elasticache/mem-ug/bestpractices.md](05-docs/db-elasticache/mem-ug/bestpractices.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/BestPractices.html>
- `docs` · Supported node types · [05-docs/db-elasticache/mem-ug/cachenodes-supportedtypes.md](05-docs/db-elasticache/mem-ug/cachenodes-supportedtypes.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.SupportedTypes.html>
- `docs` · What is ElastiCache? · [05-docs/db-elasticache/mem-ug/whatis.md](05-docs/db-elasticache/mem-ug/whatis.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.html>
- `docs` · Accessing your ElastiCache cluster or replication group · [05-docs/db-elasticache/mem-ug/accessing-elasticache.md](05-docs/db-elasticache/mem-ug/accessing-elasticache.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/accessing-elasticache.html>
- `docs` · Creating and managing a node-based ElastiCache cluster · [05-docs/db-elasticache/mem-ug/designing-elasticache-cluster.md](05-docs/db-elasticache/mem-ug/designing-elasticache-cluster.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/designing-elasticache-cluster.html>
- `docs` · Example: Lettuce config for cluster mode, TLS enabled · [05-docs/db-elasticache/red-ug/bestpractices-clients-lettuce-cme.md](05-docs/db-elasticache/red-ug/bestpractices-clients-lettuce-cme.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/BestPractices.Clients-lettuce-cme.html>
- `docs` · Best practices and caching strategies · [05-docs/db-elasticache/red-ug/bestpractices.md](05-docs/db-elasticache/red-ug/bestpractices.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/BestPractices.html>
- `docs` · Supported node types · [05-docs/db-elasticache/red-ug/cachenodes-supportedtypes.md](05-docs/db-elasticache/red-ug/cachenodes-supportedtypes.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html>
- `docs` · What is ElastiCache? · [05-docs/db-elasticache/red-ug/whatis.md](05-docs/db-elasticache/red-ug/whatis.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html>
- `docs` · Accessing your ElastiCache cluster or replication group · [05-docs/db-elasticache/red-ug/accessing-elasticache.md](05-docs/db-elasticache/red-ug/accessing-elasticache.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/accessing-elasticache.html>
- `docs` · Creating and managing a node-based ElastiCache cluster · [05-docs/db-elasticache/red-ug/designing-elasticache-cluster.md](05-docs/db-elasticache/red-ug/designing-elasticache-cluster.md) · <https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/designing-elasticache-cluster.html>
- `faq` · FAQ oficial · [04-faqs/amazon-elasticache-memcached-y-redis.md](04-faqs/amazon-elasticache-memcached-y-redis.md) · <https://aws.amazon.com/elasticache/faqs/>

### Amazon Elastic Block Store (EBS)
- `docs` · EBS encryption · [05-docs/storage-ebs/ebs-encryption.md](05-docs/storage-ebs/ebs-encryption.md) · <https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html>
- `docs` · Fast snapshot restore · [05-docs/storage-ebs/ebs-fast-snapshot-restore.md](05-docs/storage-ebs/ebs-fast-snapshot-restore.md) · <https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html>
- `docs` · Performance for Multi-Attach volumes · [05-docs/storage-ebs/ebs-multi-attach-perf.md](05-docs/storage-ebs/ebs-multi-attach-perf.md) · <https://docs.aws.amazon.com/ebs/latest/userguide/ebs-multi-attach-perf.html>
- `docs` · EBS snapshots · [05-docs/storage-ebs/ebs-snapshots.md](05-docs/storage-ebs/ebs-snapshots.md) · <https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html>
- `docs` · EBS volume types · [05-docs/storage-ebs/ebs-volume-types.md](05-docs/storage-ebs/ebs-volume-types.md) · <https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html>
- `docs` · Throughput Optimized HDD and Cold HDD volumes · [05-docs/storage-ebs/hdd-vols.md](05-docs/storage-ebs/hdd-vols.md) · <https://docs.aws.amazon.com/ebs/latest/userguide/hdd-vols.html>
- `docs` · Provisioned IOPS SSD volumes · [05-docs/storage-ebs/provisioned-iops.md](05-docs/storage-ebs/provisioned-iops.md) · <https://docs.aws.amazon.com/ebs/latest/userguide/provisioned-iops.html>
- `docs` · What is Amazon EBS? · [05-docs/storage-ebs/what-is-ebs.md](05-docs/storage-ebs/what-is-ebs.md) · <https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html>
- `faq` · FAQ oficial · [04-faqs/amazon-elastic-block-store-ebs.md](04-faqs/amazon-elastic-block-store-ebs.md) · <https://aws.amazon.com/ebs/faqs/>

### Amazon Elastic File System (EFS)
- `docs` · Managing mount targets · [05-docs/storage-efs/accessing-fs.md](05-docs/storage-efs/accessing-fs.md) · <https://docs.aws.amazon.com/efs/latest/ug/accessing-fs.html>
- `docs` · Creating access points · [05-docs/storage-efs/create-access-point.md](05-docs/storage-efs/create-access-point.md) · <https://docs.aws.amazon.com/efs/latest/ug/create-access-point.html>
- `docs` · Mounting One Zone file systems · [05-docs/storage-efs/mounting-one-zone.md](05-docs/storage-efs/mounting-one-zone.md) · <https://docs.aws.amazon.com/efs/latest/ug/mounting-one-zone.html>
- `docs` · Viewing storage class size · [05-docs/storage-efs/view-storage-class-size.md](05-docs/storage-efs/view-storage-class-size.md) · <https://docs.aws.amazon.com/efs/latest/ug/view-storage-class-size.html>
- `docs` · What is Amazon Elastic File System? · [05-docs/storage-efs/whatisefs.md](05-docs/storage-efs/whatisefs.md) · <https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html>
- `faq` · FAQ oficial · [04-faqs/amazon-elastic-file-system-efs.md](04-faqs/amazon-elastic-file-system-efs.md) · <https://aws.amazon.com/efs/faq/>

### Amazon Elastic Transcoder
- `faq` · FAQ oficial · [04-faqs/amazon-elastic-transcoder.md](04-faqs/amazon-elastic-transcoder.md) · <https://aws.amazon.com/elastictranscoder/faqs/>

### Amazon EventBridge
- `docs` · Archive and replay · [05-docs/integration-eventbridge/eb-archive.md](05-docs/integration-eventbridge/eb-archive.md) · <https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-archive.html>
- `docs` · Send events from a specific rule cross-Region · [05-docs/integration-eventbridge/eb-event-bus-example-policy-restrict-rule.md](05-docs/integration-eventbridge/eb-event-bus-example-policy-restrict-rule.md) · <https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus-example-policy-restrict-rule.html>
- `docs` · Creating event patterns · [05-docs/integration-eventbridge/eb-event-patterns.md](05-docs/integration-eventbridge/eb-event-patterns.md) · <https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html>
- `docs` · What Is Amazon EventBridge? · [05-docs/integration-eventbridge/eb-what-is.md](05-docs/integration-eventbridge/eb-what-is.md) · <https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html>
- `docs` · Get started with event buses · [05-docs/integration-eventbridge/event-bus-rule-get-started.md](05-docs/integration-eventbridge/event-bus-rule-get-started.md) · <https://docs.aws.amazon.com/eventbridge/latest/userguide/event-bus-rule-get-started.html>
- `docs` · Get started with pipes · [05-docs/integration-eventbridge/pipes-get-started.md](05-docs/integration-eventbridge/pipes-get-started.md) · <https://docs.aws.amazon.com/eventbridge/latest/userguide/pipes-get-started.html>
- `docs` · Scheduler · [05-docs/integration-eventbridge/using-eventbridge-scheduler.md](05-docs/integration-eventbridge/using-eventbridge-scheduler.md) · <https://docs.aws.amazon.com/eventbridge/latest/userguide/using-eventbridge-scheduler.html>
- `faq` · FAQ oficial · [04-faqs/amazon-eventbridge.md](04-faqs/amazon-eventbridge.md) · <https://aws.amazon.com/eventbridge/faqs/>

### Amazon FSx (Lustre, Windows, ONTAP, OpenZFS)
- `docs` · Storage capacity · [05-docs/storage-fsx/lustreguide/managing-storage-capacity.md](05-docs/storage-fsx/lustreguide/managing-storage-capacity.md) · <https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-storage-capacity.html>
- `docs` · Throughput capacity · [05-docs/storage-fsx/lustreguide/managing-throughput-capacity.md](05-docs/storage-fsx/lustreguide/managing-throughput-capacity.md) · <https://docs.aws.amazon.com/fsx/latest/LustreGuide/managing-throughput-capacity.html>
- `docs` · Working with older deployment types · [05-docs/storage-fsx/lustreguide/older-deployment-types.md](05-docs/storage-fsx/lustreguide/older-deployment-types.md) · <https://docs.aws.amazon.com/fsx/latest/LustreGuide/older-deployment-types.html>
- `docs` · What is Amazon FSx for Lustre? · [05-docs/storage-fsx/lustreguide/what-is.md](05-docs/storage-fsx/lustreguide/what-is.md) · <https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html>
- `docs` · Configure routing to access Multi-AZ file systems from outside your VPC · [05-docs/storage-fsx/ontapguide/configuring-routing-using-awstg.md](05-docs/storage-fsx/ontapguide/configuring-routing-using-awstg.md) · <https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/configuring-routing-using-AWSTG.html>
- `docs` · Creating an SMB server in a workgroup · [05-docs/storage-fsx/ontapguide/create-smb-server-workgroup.md](05-docs/storage-fsx/ontapguide/create-smb-server-workgroup.md) · <https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/create-smb-server-workgroup.html>
- `docs` · Managing storage capacity · [05-docs/storage-fsx/ontapguide/managing-storage-capacity.md](05-docs/storage-fsx/ontapguide/managing-storage-capacity.md) · <https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-storage-capacity.html>
- `docs` · Managing throughput capacity · [05-docs/storage-fsx/ontapguide/managing-throughput-capacity.md](05-docs/storage-fsx/ontapguide/managing-throughput-capacity.md) · <https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-throughput-capacity.html>
- `docs` · FSx for ONTAP and IAM · [05-docs/storage-fsx/ontapguide/security-iam-service-with-iam.md](05-docs/storage-fsx/ontapguide/security-iam-service-with-iam.md) · <https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/security_iam_service-with-iam.html>
- `docs` · What is Amazon FSx for NetApp ONTAP? · [05-docs/storage-fsx/ontapguide/what-is-fsx-ontap.md](05-docs/storage-fsx/ontapguide/what-is-fsx-ontap.md) · <https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html>
- `docs` · Modifying SSD storage capacity and IOPS · [05-docs/storage-fsx/openzfsguide/managing-storage-capacity.md](05-docs/storage-fsx/openzfsguide/managing-storage-capacity.md) · <https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-storage-capacity.html>
- `docs` · Modifying throughput capacity · [05-docs/storage-fsx/openzfsguide/managing-throughput-capacity.md](05-docs/storage-fsx/openzfsguide/managing-throughput-capacity.md) · <https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/managing-throughput-capacity.html>
- `docs` · What is Amazon FSx for OpenZFS? · [05-docs/storage-fsx/openzfsguide/what-is-fsx.md](05-docs/storage-fsx/openzfsguide/what-is-fsx.md) · <https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/what-is-fsx.html>
- `docs` · You can't configure DFS-R on a Multi-AZ or Single-AZ 2 file system · [05-docs/storage-fsx/windowsguide/dfs-r.md](05-docs/storage-fsx/windowsguide/dfs-r.md) · <https://docs.aws.amazon.com/fsx/latest/WindowsGuide/dfs-r.html>
- `docs` · Increasing storage capacity · [05-docs/storage-fsx/windowsguide/increase-storage-capacity.md](05-docs/storage-fsx/windowsguide/increase-storage-capacity.md) · <https://docs.aws.amazon.com/fsx/latest/WindowsGuide/increase-storage-capacity.html>
- `docs` · Managing throughput capacity · [05-docs/storage-fsx/windowsguide/managing-throughput-capacity.md](05-docs/storage-fsx/windowsguide/managing-throughput-capacity.md) · <https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-throughput-capacity.html>
- `docs` · New-FSxSmbShare command fails with a one-way trust · [05-docs/storage-fsx/windowsguide/new-smbshare-fails.md](05-docs/storage-fsx/windowsguide/new-smbshare-fails.md) · <https://docs.aws.amazon.com/fsx/latest/WindowsGuide/new-smbshare-fails.html>
- `docs` · What is FSx for Windows File Server? · [05-docs/storage-fsx/windowsguide/what-is.md](05-docs/storage-fsx/windowsguide/what-is.md) · <https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-fsx-lustre-windows-ontap-openzfs.md](04-faqs/amazon-fsx-lustre-windows-ontap-openzfs.md) · <https://aws.amazon.com/fsx/windows/faqs/>

### Amazon Forecast
- `docs` · What Is Amazon Forecast? · [05-docs/ml-forecast/what-is-forecast.md](05-docs/ml-forecast/what-is-forecast.md) · <https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html>

### Amazon Fraud Detector
- `docs` · What is Amazon Fraud Detector? · [05-docs/ml-frauddetector/what-is-frauddetector.md](05-docs/ml-frauddetector/what-is-frauddetector.md) · <https://docs.aws.amazon.com/frauddetector/latest/ug/what-is-frauddetector.html>

### Amazon GuardDuty
- `docs` · Administrator account and member account relationships · [05-docs/security-guardduty/administrator-member-relationships.md](05-docs/security-guardduty/administrator-member-relationships.md) · <https://docs.aws.amazon.com/guardduty/latest/ug/administrator_member_relationships.html>
- `docs` · Findings that invoke GuardDuty-initiated malware scan · [05-docs/security-guardduty/gd-findings-initiate-malware-protection-scan.md](05-docs/security-guardduty/gd-findings-initiate-malware-protection-scan.md) · <https://docs.aws.amazon.com/guardduty/latest/ug/gd-findings-initiate-malware-protection-scan.html>
- `docs` · Extended Threat Detection · [05-docs/security-guardduty/guardduty-extended-threat-detection.md](05-docs/security-guardduty/guardduty-extended-threat-detection.md) · <https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html>
- `docs` · Malware Protection for EC2 · [05-docs/security-guardduty/malware-protection.md](05-docs/security-guardduty/malware-protection.md) · <https://docs.aws.amazon.com/guardduty/latest/ug/malware-protection.html>
- `docs` · What is GuardDuty? · [05-docs/security-guardduty/what-is-guardduty.md](05-docs/security-guardduty/what-is-guardduty.md) · <https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html>
- `faq` · FAQ oficial · [04-faqs/amazon-guardduty.md](04-faqs/amazon-guardduty.md) · <https://aws.amazon.com/guardduty/faqs/>

### Amazon Inspector
- `docs` · Understanding findings · [05-docs/security-inspector/findings-understanding.md](05-docs/security-inspector/findings-understanding.md) · <https://docs.aws.amazon.com/inspector/latest/user/findings-understanding.html>
- `docs` · Exporting SBOMs · [05-docs/security-inspector/sbom-export.md](05-docs/security-inspector/sbom-export.md) · <https://docs.aws.amazon.com/inspector/latest/user/sbom-export.html>
- `docs` · Automated scans · [05-docs/security-inspector/scanning-resources.md](05-docs/security-inspector/scanning-resources.md) · <https://docs.aws.amazon.com/inspector/latest/user/scanning-resources.html>
- `docs` · Service-linked role permissions for Amazon Inspector agentless scans · [05-docs/security-inspector/slr-permissions-agentless.md](05-docs/security-inspector/slr-permissions-agentless.md) · <https://docs.aws.amazon.com/inspector/latest/user/slr-permissions-agentless.html>
- `docs` · What is Amazon Inspector? · [05-docs/security-inspector/what-is-inspector.md](05-docs/security-inspector/what-is-inspector.md) · <https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html>
- `faq` · FAQ oficial · [04-faqs/amazon-inspector.md](04-faqs/amazon-inspector.md) · <https://aws.amazon.com/inspector/faqs/>

### Amazon Kendra
- `docs` · What is Amazon Kendra? · [05-docs/ml-kendra/what-is-kendra.md](05-docs/ml-kendra/what-is-kendra.md) · <https://docs.aws.amazon.com/kendra/latest/dg/what-is-kendra.html>
- `faq` · FAQ oficial · [04-faqs/amazon-kendra.md](04-faqs/amazon-kendra.md) · <https://aws.amazon.com/kendra/faqs/>

### Amazon Keyspaces
- `docs` · What is Amazon Keyspaces? · [05-docs/db-keyspaces/what-is-keyspaces.md](05-docs/db-keyspaces/what-is-keyspaces.md) · <https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is-keyspaces.html>
- `faq` · FAQ oficial · [04-faqs/amazon-keyspaces.html](04-faqs/amazon-keyspaces.html) · <https://aws.amazon.com/keyspaces/faqs/>

### Amazon Kinesis Data Firehose
- `docs` · Buffer data for dynamic partitioning · [05-docs/analytics-kinesis-firehose/buffering.md](05-docs/analytics-kinesis-firehose/buffering.md) · <https://docs.aws.amazon.com/firehose/latest/dev/buffering.html>
- `docs` · Required parameters for data transformation · [05-docs/analytics-kinesis-firehose/data-transformation-status-model.md](05-docs/analytics-kinesis-firehose/data-transformation-status-model.md) · <https://docs.aws.amazon.com/firehose/latest/dev/data-transformation-status-model.html>
- `docs` · What is Amazon Data Firehose · [05-docs/analytics-kinesis-firehose/what-is-this-service.md](05-docs/analytics-kinesis-firehose/what-is-this-service.md) · <https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html>
- `faq` · FAQ oficial · [04-faqs/amazon-kinesis-data-firehose.md](04-faqs/amazon-kinesis-data-firehose.md) · <https://aws.amazon.com/kinesis/firehose/faqs/>

### Amazon Kinesis Data Streams
- `docs` · What is Amazon Kinesis Data Streams? · [05-docs/analytics-kinesis-streams/introduction.md](05-docs/analytics-kinesis-streams/introduction.md) · <https://docs.aws.amazon.com/streams/latest/dev/introduction.html>
- `docs` · Change the data retention period · [05-docs/analytics-kinesis-streams/kinesis-extended-retention.md](05-docs/analytics-kinesis-streams/kinesis-extended-retention.md) · <https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html>
- `docs` · Provisioned throughput exception errors · [05-docs/analytics-kinesis-streams/kinesis-fis-provisioned-throughput.md](05-docs/analytics-kinesis-streams/kinesis-fis-provisioned-throughput.md) · <https://docs.aws.amazon.com/streams/latest/dev/kinesis-fis-provisioned-throughput.html>
- `docs` · List shards · [05-docs/analytics-kinesis-streams/kinesis-using-sdk-java-list-shards.md](05-docs/analytics-kinesis-streams/kinesis-using-sdk-java-list-shards.md) · <https://docs.aws.amazon.com/streams/latest/dev/kinesis-using-sdk-java-list-shards.html>
- `docs` · Implement the consumer · [05-docs/analytics-kinesis-streams/tutorial-stock-data-kplkcl2-consumer.md](05-docs/analytics-kinesis-streams/tutorial-stock-data-kplkcl2-consumer.md) · <https://docs.aws.amazon.com/streams/latest/dev/tutorial-stock-data-kplkcl2-consumer.html>
- `docs` · Implement the producer · [05-docs/analytics-kinesis-streams/tutorial-stock-data-kplkcl2-producer.md](05-docs/analytics-kinesis-streams/tutorial-stock-data-kplkcl2-producer.md) · <https://docs.aws.amazon.com/streams/latest/dev/tutorial-stock-data-kplkcl2-producer.html>
- `faq` · FAQ oficial · [04-faqs/amazon-kinesis-data-streams.md](04-faqs/amazon-kinesis-data-streams.md) · <https://aws.amazon.com/kinesis/data-streams/faqs/>

### Amazon Kinesis Video Streams
- `docs` · Create an Amazon Kinesis video stream · [05-docs/media-kinesis-video/gs-createstream.md](05-docs/media-kinesis-video/gs-createstream.md) · <https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/gs-createstream.html>
- `docs` · API and producer libraries · [05-docs/media-kinesis-video/how-it-works-kinesis-video-api-producer-sdk.md](05-docs/media-kinesis-video/how-it-works-kinesis-video-api-producer-sdk.md) · <https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works-kinesis-video-api-producer-sdk.html>
- `docs` · What is Amazon Kinesis Video Streams? · [05-docs/media-kinesis-video/what-is-kinesis-video.md](05-docs/media-kinesis-video/what-is-kinesis-video.md) · <https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/what-is-kinesis-video.html>
- `faq` · FAQ oficial · [04-faqs/amazon-kinesis-video-streams.md](04-faqs/amazon-kinesis-video-streams.md) · <https://aws.amazon.com/kinesis/video-streams/faqs/>

### Amazon Lex
- `docs` · What is Amazon Lex V2? · [05-docs/ml-lex/what-is.md](05-docs/ml-lex/what-is.md) · <https://docs.aws.amazon.com/lexv2/latest/dg/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-lex.md](04-faqs/amazon-lex.md) · <https://aws.amazon.com/lex/faqs/>

### Amazon MQ
- `docs` · Getting started: Creating and connecting to an ActiveMQ broker · [05-docs/integration-mq/getting-started-activemq.md](05-docs/integration-mq/getting-started-activemq.md) · <https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/getting-started-activemq.html>
- `docs` · Getting started: Creating and connecting to a RabbitMQ broker · [05-docs/integration-mq/getting-started-rabbitmq.md](05-docs/integration-mq/getting-started-rabbitmq.md) · <https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/getting-started-rabbitmq.html>
- `docs` · What is Amazon MQ? · [05-docs/integration-mq/welcome.md](05-docs/integration-mq/welcome.md) · <https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html>
- `docs` · Amazon MQ for ActiveMQ · [05-docs/integration-mq/working-with-activemq.md](05-docs/integration-mq/working-with-activemq.md) · <https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/working-with-activemq.html>
- `faq` · FAQ oficial · [04-faqs/amazon-mq.md](04-faqs/amazon-mq.md) · <https://aws.amazon.com/amazon-mq/faqs/>

### Amazon MSK
- `docs` · Monitor consumer lags · [05-docs/analytics-msk/consumer-lag.md](05-docs/analytics-msk/consumer-lag.md) · <https://docs.aws.amazon.com/msk/latest/developerguide/consumer-lag.html>
- `docs` · Create a cluster · [05-docs/analytics-msk/create-cluster.md](05-docs/analytics-msk/create-cluster.md) · <https://docs.aws.amazon.com/msk/latest/developerguide/create-cluster.html>
- `docs` · Get the bootstrap brokers · [05-docs/analytics-msk/msk-get-bootstrap-brokers.md](05-docs/analytics-msk/msk-get-bootstrap-brokers.md) · <https://docs.aws.amazon.com/msk/latest/developerguide/msk-get-bootstrap-brokers.html>
- `docs` · Welcome · [05-docs/analytics-msk/what-is-msk.md](05-docs/analytics-msk/what-is-msk.md) · <https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html>
- `faq` · FAQ oficial · [04-faqs/amazon-msk.md](04-faqs/amazon-msk.md) · <https://aws.amazon.com/msk/faqs/>

### Amazon Macie
- `docs` · docs · [05-docs/security-macie/welcome.md](05-docs/security-macie/welcome.md) · <https://docs.aws.amazon.com/macie/latest/userguide/welcome.html>
- `faq` · FAQ oficial · [04-faqs/amazon-macie.html](04-faqs/amazon-macie.html) · <https://aws.amazon.com/macie/faq/>

### Amazon Managed Grafana
- `docs` · What is Amazon Managed Grafana? · [05-docs/mgmt-grafana/what-is-amazon-managed-service-grafana.md](05-docs/mgmt-grafana/what-is-amazon-managed-service-grafana.md) · <https://docs.aws.amazon.com/grafana/latest/userguide/what-is-Amazon-Managed-Service-Grafana.html>
- `faq` · FAQ oficial · [04-faqs/amazon-managed-grafana.md](04-faqs/amazon-managed-grafana.md) · <https://aws.amazon.com/grafana/faqs/>

### Amazon Managed Service for Prometheus
- `docs` · What is Amazon Managed Service for Prometheus? · [05-docs/mgmt-prometheus/what-is-amazon-managed-service-prometheus.md](05-docs/mgmt-prometheus/what-is-amazon-managed-service-prometheus.md) · <https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html>
- `faq` · FAQ oficial · [04-faqs/amazon-managed-service-for-prometheus.md](04-faqs/amazon-managed-service-for-prometheus.md) · <https://aws.amazon.com/prometheus/faqs/>

### Amazon Neptune
- `docs` · What is Neptune? · [05-docs/db-neptune/intro.md](05-docs/db-neptune/intro.md) · <https://docs.aws.amazon.com/neptune/latest/userguide/intro.html>
- `faq` · FAQ oficial · [04-faqs/amazon-neptune.md](04-faqs/amazon-neptune.md) · <https://aws.amazon.com/neptune/faqs/>

### Amazon OpenSearch Service
- `docs` · Self-managed OpenSearch clusters · [05-docs/analytics-opensearch/configure-client-self-managed-opensearch.md](05-docs/analytics-opensearch/configure-client-self-managed-opensearch.md) · <https://docs.aws.amazon.com/opensearch-service/latest/developerguide/configure-client-self-managed-opensearch.html>
- `docs` · Create a domain · [05-docs/analytics-opensearch/gsgcreate-domain.md](05-docs/analytics-opensearch/gsgcreate-domain.md) · <https://docs.aws.amazon.com/opensearch-service/latest/developerguide/gsgcreate-domain.html>
- `docs` · Upload data for indexing · [05-docs/analytics-opensearch/gsgupload-data.md](05-docs/analytics-opensearch/gsgupload-data.md) · <https://docs.aws.amazon.com/opensearch-service/latest/developerguide/gsgupload-data.html>
- `docs` · Restarting the OpenSearch process on a data node · [05-docs/analytics-opensearch/restart-process.md](05-docs/analytics-opensearch/restart-process.md) · <https://docs.aws.amazon.com/opensearch-service/latest/developerguide/restart-process.html>
- `docs` · UltraWarm storage · [05-docs/analytics-opensearch/ultrawarm.md](05-docs/analytics-opensearch/ultrawarm.md) · <https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ultrawarm.html>
- `docs` · What is Amazon OpenSearch Service? · [05-docs/analytics-opensearch/what-is.md](05-docs/analytics-opensearch/what-is.md) · <https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-opensearch-service.md](04-faqs/amazon-opensearch-service.md) · <https://aws.amazon.com/opensearch-service/faqs/>

### Amazon Pinpoint
- `docs` · What is Amazon Pinpoint? · [05-docs/mobile-pinpoint/welcome.md](05-docs/mobile-pinpoint/welcome.md) · <https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html>
- `faq` · FAQ oficial · [04-faqs/amazon-pinpoint.md](04-faqs/amazon-pinpoint.md) · <https://aws.amazon.com/pinpoint/faqs/>

### Amazon Polly
- `docs` · What Is Amazon Polly? · [05-docs/ml-polly/what-is.md](05-docs/ml-polly/what-is.md) · <https://docs.aws.amazon.com/polly/latest/dg/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-polly.md](04-faqs/amazon-polly.md) · <https://aws.amazon.com/polly/faqs/>

### Amazon QuickSight
- `docs` · docs · [05-docs/analytics-quicksight/welcome.md](05-docs/analytics-quicksight/welcome.md) · <https://docs.aws.amazon.com/quicksight/latest/user/welcome.html>
- `faq` · FAQ oficial · [04-faqs/amazon-quicksight.md](04-faqs/amazon-quicksight.md) · <https://aws.amazon.com/quicksight/faqs/>

### Amazon RDS
- `docs` · DB instance classes · [05-docs/db-rds/concepts-dbinstanceclass.md](05-docs/db-rds/concepts-dbinstanceclass.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html>
- `docs` · Multi-AZ DB instance deployments · [05-docs/db-rds/concepts-multiazsinglestandby.md](05-docs/db-rds/concepts-multiazsinglestandby.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html>
- `docs` · Cross-Region automated backups · [05-docs/db-rds/concepts-rds-fea-regions-db-eng-feature-crossregionautomatedbackups.md](05-docs/db-rds/concepts-rds-fea-regions-db-eng-feature-crossregionautomatedbackups.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.CrossRegionAutomatedBackups.html>
- `docs` · Cross-Region read replicas · [05-docs/db-rds/concepts-rds-fea-regions-db-eng-feature-crossregionreadreplicas.md](05-docs/db-rds/concepts-rds-fea-regions-db-eng-feature-crossregionreadreplicas.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.CrossRegionReadReplicas.html>
- `docs` · Multi-AZ DB clusters · [05-docs/db-rds/concepts-rds-fea-regions-db-eng-feature-multiazdbclusters.md](05-docs/db-rds/concepts-rds-fea-regions-db-eng-feature-multiazdbclusters.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.MultiAZDBClusters.html>
- `docs` · Amazon RDS Proxy · [05-docs/db-rds/concepts-rds-fea-regions-db-eng-feature-rdsproxy.md](05-docs/db-rds/concepts-rds-fea-regions-db-eng-feature-rdsproxy.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.RDSProxy.html>
- `docs` · Cross-Region read replicas · [05-docs/db-rds/user-readrepl-xrgn.md](05-docs/db-rds/user-readrepl-xrgn.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.XRgn.html>
- `docs` · What is Amazon RDS? · [05-docs/db-rds/welcome.md](05-docs/db-rds/welcome.md) · <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html>
- `faq` · FAQ oficial · [04-faqs/amazon-rds.md](04-faqs/amazon-rds.md) · <https://aws.amazon.com/rds/faqs/>

### Amazon Redshift
- `docs` · Amazon Redshift provisioned clusters overview · [05-docs/analytics-redshift/overview.md](05-docs/analytics-redshift/overview.md) · <https://docs.aws.amazon.com/redshift/latest/mgmt/overview.html>
- `docs` · Viewing workload concurrency and concurrency scaling data · [05-docs/analytics-redshift/performance-metrics-concurrency-scaling.md](05-docs/analytics-redshift/performance-metrics-concurrency-scaling.md) · <https://docs.aws.amazon.com/redshift/latest/mgmt/performance-metrics-concurrency-scaling.html>
- `docs` · Snapshots and recovery points · [05-docs/analytics-redshift/serverless-snapshots-recovery-points.md](05-docs/analytics-redshift/serverless-snapshots-recovery-points.md) · <https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery-points.html>
- `docs` · Accessing Amazon S3 buckets with Redshift Spectrum · [05-docs/analytics-redshift/spectrum-enhanced-vpc.md](05-docs/analytics-redshift/spectrum-enhanced-vpc.md) · <https://docs.aws.amazon.com/redshift/latest/mgmt/spectrum-enhanced-vpc.html>
- `docs` · What Is Amazon Redshift? · [05-docs/analytics-redshift/welcome.md](05-docs/analytics-redshift/welcome.md) · <https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html>
- `faq` · FAQ oficial · [04-faqs/amazon-redshift.md](04-faqs/amazon-redshift.md) · <https://aws.amazon.com/redshift/faqs/>

### Amazon Rekognition
- `docs` · What is Amazon Rekognition? · [05-docs/ml-rekognition/what-is.md](05-docs/ml-rekognition/what-is.md) · <https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-rekognition.md](04-faqs/amazon-rekognition.md) · <https://aws.amazon.com/rekognition/faqs/>

### Amazon Route 53
- `docs` · What is Amazon Route 53? · [05-docs/network-route53/welcome.md](05-docs/network-route53/welcome.md) · <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html>
- `docs` · Using AWS Cloud Map to create records and health checks · [05-docs/network-route53/autonaming.md](05-docs/network-route53/autonaming.md) · <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/autonaming.html>
- `docs` · Replacing the hosted zone for a domain · [05-docs/network-route53/domain-replace-hosted-zone.md](05-docs/network-route53/domain-replace-hosted-zone.md) · <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-replace-hosted-zone.html>
- `docs` · Failover routing · [05-docs/network-route53/routing-policy-failover.md](05-docs/network-route53/routing-policy-failover.md) · <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-failover.html>
- `docs` · Choosing a routing policy · [05-docs/network-route53/routing-policy.md](05-docs/network-route53/routing-policy.md) · <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html>
- `docs` · Amazon OpenSearch Service · [05-docs/network-route53/routing-to-open-search-service.md](05-docs/network-route53/routing-to-open-search-service.md) · <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-open-search-service.html>
- `docs` · Creating and managing traffic policies · [05-docs/network-route53/traffic-policies.md](05-docs/network-route53/traffic-policies.md) · <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/traffic-policies.html>
- `docs` · How domain registration works · [05-docs/network-route53/welcome-domain-registration.md](05-docs/network-route53/welcome-domain-registration.md) · <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-domain-registration.html>
- `faq` · FAQ oficial · [04-faqs/amazon-route-53.md](04-faqs/amazon-route-53.md) · <https://aws.amazon.com/route53/faqs/>

### Amazon S3
- `docs` · Creating Multi-Region Access Points · [05-docs/storage-s3/creatingmultiregionaccesspoints.md](05-docs/storage-s3/creatingmultiregionaccesspoints.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html>
- `docs` · Using Requester Pays · [05-docs/storage-s3/requesterpaysbuckets.md](05-docs/storage-s3/requesterpaysbuckets.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html>
- `docs` · Hosting a static website · [05-docs/storage-s3/websitehosting.md](05-docs/storage-s3/websitehosting.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html>
- `docs` · What is Amazon S3? · [05-docs/storage-s3/welcome.md](05-docs/storage-s3/welcome.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html>
- `docs` · Examples that use Batch Operations to copy objects · [05-docs/storage-s3/batch-ops-examples-copy.md](05-docs/storage-s3/batch-ops-examples-copy.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-examples-copy.html>
- `docs` · Amazon S3 Glacier storage classes · [05-docs/storage-s3/glacier-storage-classes.md](05-docs/storage-s3/glacier-storage-classes.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/glacier-storage-classes.html>
- `docs` · Configuring a lifecycle configuration to delete incomplete multipart uploads · [05-docs/storage-s3/mpu-abort-incomplete-mpu-lifecycle-config.md](05-docs/storage-s3/mpu-abort-incomplete-mpu-lifecycle-config.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html>
- `docs` · Creating Object Lambda Access Points · [05-docs/storage-s3/olap-create.md](05-docs/storage-s3/olap-create.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-create.html>
- `docs` · Replicating objects within and across Regions · [05-docs/storage-s3/replication.md](05-docs/storage-s3/replication.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html>
- `docs` · Server-side encryption · [05-docs/storage-s3/serv-side-encryption.md](05-docs/storage-s3/serv-side-encryption.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html>
- `docs` · Understanding and managing storage classes · [05-docs/storage-s3/storage-class-intro.md](05-docs/storage-s3/storage-class-intro.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html>
- `docs` · Using presigned URLs to download and upload objects · [05-docs/storage-s3/using-presigned-url.md](05-docs/storage-s3/using-presigned-url.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html>
- `docs` · S3 Versioning · [05-docs/storage-s3/versioning-workflows.md](05-docs/storage-s3/versioning-workflows.md) · <https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html>
- `faq` · FAQ oficial · [04-faqs/amazon-s3.md](04-faqs/amazon-s3.md) · <https://aws.amazon.com/s3/faqs/>

### Amazon S3 Glacier
- `docs` · Data Retrieval Policies · [05-docs/storage-glacier/data-retrieval-policy.md](05-docs/storage-glacier/data-retrieval-policy.md) · <https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html>
- `docs` · DescribeJob · [05-docs/storage-glacier/example-glacier-describejob-section.md](05-docs/storage-glacier/example-glacier-describejob-section.md) · <https://docs.aws.amazon.com/amazonglacier/latest/dev/example_glacier_DescribeJob_section.html>
- `docs` · Step 2: Create a Vault · [05-docs/storage-glacier/getting-started-create-vault.md](05-docs/storage-glacier/getting-started-create-vault.md) · <https://docs.aws.amazon.com/amazonglacier/latest/dev/getting-started-create-vault.html>
- `docs` · Step 3: Upload an Archive to a Vault · [05-docs/storage-glacier/getting-started-upload-archive.md](05-docs/storage-glacier/getting-started-upload-archive.md) · <https://docs.aws.amazon.com/amazonglacier/latest/dev/getting-started-upload-archive.html>
- `docs` · What Is Amazon Glacier? · [05-docs/storage-glacier/introduction.md](05-docs/storage-glacier/introduction.md) · <https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html>
- `faq` · FAQ oficial · [04-faqs/amazon-s3-glacier.md](04-faqs/amazon-s3-glacier.md) · <https://aws.amazon.com/glacier/faqs/>

### Amazon SNS
- `docs` · Step 2: Creating a subscription to a topic · [05-docs/integration-sns/sns-create-subscribe-endpoint-to-topic.md](05-docs/integration-sns/sns-create-subscribe-endpoint-to-topic.md) · <https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html>
- `docs` · Message ordering and deduplication using FIFO topics · [05-docs/integration-sns/sns-fifo-topics.md](05-docs/integration-sns/sns-fifo-topics.md) · <https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html>
- `docs` · Create a topic and publish messages · [05-docs/integration-sns/sns-getting-started.md](05-docs/integration-sns/sns-getting-started.md) · <https://docs.aws.amazon.com/sns/latest/dg/sns-getting-started.html>
- `docs` · Subscription filter policy scope · [05-docs/integration-sns/sns-message-filtering-scope.md](05-docs/integration-sns/sns-message-filtering-scope.md) · <https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering-scope.html>
- `docs` · Sending mobile push notifications · [05-docs/integration-sns/sns-mobile-application-as-subscriber.md](05-docs/integration-sns/sns-mobile-application-as-subscriber.md) · <https://docs.aws.amazon.com/sns/latest/dg/sns-mobile-application-as-subscriber.html>
- `docs` · Step 3: Publishing a message · [05-docs/integration-sns/sns-publishing.md](05-docs/integration-sns/sns-publishing.md) · <https://docs.aws.amazon.com/sns/latest/dg/sns-publishing.html>
- `docs` · What is Amazon SNS? · [05-docs/integration-sns/welcome.md](05-docs/integration-sns/welcome.md) · <https://docs.aws.amazon.com/sns/latest/dg/welcome.html>
- `faq` · FAQ oficial · [04-faqs/amazon-sns.md](04-faqs/amazon-sns.md) · <https://aws.amazon.com/sns/faqs/>

### Amazon SQS
- `docs` · Creating a FIFO queue · [05-docs/integration-sqs/creating-sqs-fifo-queues.md](05-docs/integration-sqs/creating-sqs-fifo-queues.md) · <https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/creating-sqs-fifo-queues.html>
- `docs` · Dead-letter queues · [05-docs/integration-sqs/sqs-dead-letter-queues.md](05-docs/integration-sqs/sqs-dead-letter-queues.md) · <https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html>
- `docs` · Delay queues · [05-docs/integration-sqs/sqs-delay-queues.md](05-docs/integration-sqs/sqs-delay-queues.md) · <https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-delay-queues.html>
- `docs` · Queue types · [05-docs/integration-sqs/sqs-queue-types.md](05-docs/integration-sqs/sqs-queue-types.md) · <https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-types.html>
- `docs` · Short and long polling · [05-docs/integration-sqs/sqs-short-and-long-polling.md](05-docs/integration-sqs/sqs-short-and-long-polling.md) · <https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-short-and-long-polling.html>
- `docs` · Visibility timeout · [05-docs/integration-sqs/sqs-visibility-timeout.md](05-docs/integration-sqs/sqs-visibility-timeout.md) · <https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html>
- `docs` · What is Amazon SQS? · [05-docs/integration-sqs/welcome.md](05-docs/integration-sqs/welcome.md) · <https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html>
- `faq` · FAQ oficial · [04-faqs/amazon-sqs.md](04-faqs/amazon-sqs.md) · <https://aws.amazon.com/sqs/faqs/>

### Amazon SageMaker
- `docs` · Deploy your models to an endpoint · [05-docs/ml-sagemaker/canvas-deploy-model.md](05-docs/ml-sagemaker/canvas-deploy-model.md) · <https://docs.aws.amazon.com/sagemaker/latest/dg/canvas-deploy-model.html>
- `docs` · Stop a Training Job · [05-docs/ml-sagemaker/studio-tasks-stop-training-job.md](05-docs/ml-sagemaker/studio-tasks-stop-training-job.md) · <https://docs.aws.amazon.com/sagemaker/latest/dg/studio-tasks-stop-training-job.html>
- `docs` · What is Amazon SageMaker AI? · [05-docs/ml-sagemaker/whatis.md](05-docs/ml-sagemaker/whatis.md) · <https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html>
- `faq` · FAQ oficial · [04-faqs/amazon-sagemaker.md](04-faqs/amazon-sagemaker.md) · <https://aws.amazon.com/sagemaker/faqs/>

### Amazon Textract
- `docs` · What is Amazon Textract? · [05-docs/ml-textract/what-is.md](05-docs/ml-textract/what-is.md) · <https://docs.aws.amazon.com/textract/latest/dg/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-textract.md](04-faqs/amazon-textract.md) · <https://aws.amazon.com/textract/faqs/>

### Amazon Transcribe
- `docs` · What is Amazon Transcribe? · [05-docs/ml-transcribe/what-is.md](05-docs/ml-transcribe/what-is.md) · <https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-transcribe.md](04-faqs/amazon-transcribe.md) · <https://aws.amazon.com/transcribe/faqs/>

### Amazon Translate
- `docs` · What is Amazon Translate? · [05-docs/ml-translate/what-is.md](05-docs/ml-translate/what-is.md) · <https://docs.aws.amazon.com/translate/latest/dg/what-is.html>
- `faq` · FAQ oficial · [04-faqs/amazon-translate.md](04-faqs/amazon-translate.md) · <https://aws.amazon.com/translate/faqs/>

### Amazon VPC (subnets, route tables, SG, NACL, NAT)
- `docs` · Route tables · [05-docs/network-vpc/vpc-route-tables.md](05-docs/network-vpc/vpc-route-tables.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html>
- `docs` · VPC Flow Logs · [05-docs/network-vpc/flow-logs.md](05-docs/network-vpc/flow-logs.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html>
- `docs` · Managed prefix lists · [05-docs/network-vpc/managed-prefix-lists.md](05-docs/network-vpc/managed-prefix-lists.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/managed-prefix-lists.html>
- `docs` · Reachability Analyzer · [05-docs/network-vpc/reachability-analyzer.md](05-docs/network-vpc/reachability-analyzer.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/reachability-analyzer.html>
- `docs` · Subnet CIDR blocks · [05-docs/network-vpc/subnet-sizing.md](05-docs/network-vpc/subnet-sizing.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/subnet-sizing.html>
- `docs` · IP addressing · [05-docs/network-vpc/vpc-ip-addressing.md](05-docs/network-vpc/vpc-ip-addressing.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html>
- `docs` · NAT devices · [05-docs/network-vpc/vpc-nat.md](05-docs/network-vpc/vpc-nat.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat.html>
- `docs` · Network ACLs · [05-docs/network-vpc/vpc-network-acls.md](05-docs/network-vpc/vpc-network-acls.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html>
- `docs` · Security groups · [05-docs/network-vpc/vpc-security-groups.md](05-docs/network-vpc/vpc-security-groups.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html>
- `docs` · What is Amazon VPC? · [05-docs/network-vpc/what-is-amazon-vpc.md](05-docs/network-vpc/what-is-amazon-vpc.md) · <https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html>
- `faq` · FAQ oficial · [04-faqs/amazon-vpc-subnets-route-tables-sg-nacl-nat.md](04-faqs/amazon-vpc-subnets-route-tables-sg-nacl-nat.md) · <https://aws.amazon.com/vpc/faqs/>

### Disaster Recovery of Workloads on AWS (whitepaper)
- `docs` · Abstract · [03-whitepapers/dr-whitepaper/disaster-recovery-workloads-on-aws.md](03-whitepapers/dr-whitepaper/disaster-recovery-workloads-on-aws.md) · <https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html>
- `docs` · High availability is not disaster recovery · [03-whitepapers/dr-whitepaper/high-availability-is-not-disaster-recovery.md](03-whitepapers/dr-whitepaper/high-availability-is-not-disaster-recovery.md) · <https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/high-availability-is-not-disaster-recovery.html>

### Elastic Load Balancing (ALB/NLB/GLB)
- `docs` · What is Elastic Load Balancing? · [05-docs/network-elb/what-is-load-balancing.md](05-docs/network-elb/what-is-load-balancing.md) · <https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html>
- `faq` · FAQ oficial · [04-faqs/elastic-load-balancing-alb-nlb-glb.md](04-faqs/elastic-load-balancing-alb-nlb-glb.md) · <https://aws.amazon.com/elasticloadbalancing/faqs/>

### Savings Plans
- `faq` · FAQ oficial · [04-faqs/savings-plans.md](04-faqs/savings-plans.md) · <https://aws.amazon.com/savingsplans/faqs/>

### aurora-faq-docs
- `faq` · Amazon Aurora FAQ (ubicación oficial actual en AWS Docs) · [04-faqs/aurora-faq.html](04-faqs/aurora-faq.html) · <https://docs.aws.amazon.com/rds/latest/auroraextendedcontent/aurora-faq.html>

### cert-page
- `exam` · Página oficial de certificación SAA · [01-exam/certification-page.html](01-exam/certification-page.html) · <https://aws.amazon.com/certification/certified-solutions-architect-associate/>

### exam-guide-pdf
- `exam` · SAA-C03 Exam Guide (PDF v1.1) · [01-exam/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf](01-exam/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf) · <https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Exam-Guide.pdf>

### exam-sample-questions
- `exam` · SAA-C03 Sample Questions (PDF) · [01-exam/AWS-Certified-Solutions-Architect-Associate_Sample-Questions.pdf](01-exam/AWS-Certified-Solutions-Architect-Associate_Sample-Questions.pdf) · <https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Sample-Questions.pdf>

### global-infrastructure
- `whitepaper` · AWS Global Infrastructure · [03-whitepapers/global-infrastructure.html](03-whitepapers/global-infrastructure.html) · <https://aws.amazon.com/about-aws/global-infrastructure/>

### service-names-policy
- `exam` · AWS Service Names (política de nombres cortos) · [01-exam/service-names-policy.html](01-exam/service-names-policy.html) · <https://aws.amazon.com/certification/policies/general-information/>

### sg-saa-03-in-scope-services
- `exam` · In-Scope AWS Services · [01-exam/study-guide/saa-03-in-scope-services.html](01-exam/study-guide/saa-03-in-scope-services.html) · <https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-03-in-scope-services.html>

### sg-saa-03-out-of-scope-services
- `exam` · Out-of-Scope AWS Services · [01-exam/study-guide/saa-03-out-of-scope-services.html](01-exam/study-guide/saa-03-out-of-scope-services.html) · <https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-03-out-of-scope-services.html>

### sg-saa-service-mentions
- `exam` · Mentions of AWS Services on the Exam · [01-exam/study-guide/saa-service-mentions.html](01-exam/study-guide/saa-service-mentions.html) · <https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-service-mentions.html>

### sg-saa-technologies-concepts
- `exam` · Technologies and Concepts · [01-exam/study-guide/saa-technologies-concepts.html](01-exam/study-guide/saa-technologies-concepts.html) · <https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-technologies-concepts.html>

### sg-solutions-architect-associate-03
- `exam` · AWS Certified Solutions Architect - Associate (SAA-C03) — página principal · [01-exam/study-guide/solutions-architect-associate-03.html](01-exam/study-guide/solutions-architect-associate-03.html) · <https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html>

### sg-solutions-architect-associate-03-domain1
- `exam` · Content Domain 1: Design Secure Architectures · [01-exam/study-guide/solutions-architect-associate-03-domain1.html](01-exam/study-guide/solutions-architect-associate-03-domain1.html) · <https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain1.html>

### sg-solutions-architect-associate-03-domain2
- `exam` · Content Domain 2: Design Resilient Architectures · [01-exam/study-guide/solutions-architect-associate-03-domain2.html](01-exam/study-guide/solutions-architect-associate-03-domain2.html) · <https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain2.html>

### sg-solutions-architect-associate-03-domain3
- `exam` · Content Domain 3: Design High-Performing Architectures · [01-exam/study-guide/solutions-architect-associate-03-domain3.html](01-exam/study-guide/solutions-architect-associate-03-domain3.html) · <https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain3.html>

### sg-solutions-architect-associate-03-domain4
- `exam` · Content Domain 4: Design Cost-Optimized Architectures · [01-exam/study-guide/solutions-architect-associate-03-domain4.html](01-exam/study-guide/solutions-architect-associate-03-domain4.html) · <https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain4.html>

### shared-responsibility
- `whitepaper` · AWS Shared Responsibility Model · [03-whitepapers/shared-responsibility-model.html](03-whitepapers/shared-responsibility-model.html) · <https://aws.amazon.com/compliance/shared-responsibility-model/>

### skillbuilder-examprep
- `exam` · AWS Skill Builder — Exam Prep SAA-C03 (categoría) · [01-exam/skillbuilder-exam-prep-category.html](01-exam/skillbuilder-exam-prep-category.html) · <https://skillbuilder.aws/category/exam-prep/solutions-architect-associate-SAA-C03>

### study-guide-pdf
- `exam` · AWS Certification SAA-C03 Study Guide (PDF) · [01-exam/study-guide/solutions-architect-associate-03.pdf](01-exam/study-guide/solutions-architect-associate-03.pdf) · <https://docs.aws.amazon.com/pdfs/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.pdf>

### wa-appendix
- `well-architected` · Well-Architected Framework — Appendix: Questions and best practices · [02-well-architected/appendix.html](02-well-architected/appendix.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/appendix.html>

### wa-conclusion
- `well-architected` · Well-Architected Framework — Conclusion · [02-well-architected/conclusion.html](02-well-architected/conclusion.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/conclusion.html>

### wa-contributors
- `well-architected` · Well-Architected Framework — Contributors · [02-well-architected/contributors.html](02-well-architected/contributors.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/contributors.html>

### wa-cost-aware
- `well-architected` · Well-Architected Framework — Expenditure and usage awareness · [02-well-architected/cost-aware.html](02-well-architected/cost-aware.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-aware.html>

### wa-cost-bp
- `well-architected` · Well-Architected Framework — Best practices · [02-well-architected/cost-bp.html](02-well-architected/cost-bp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-bp.html>

### wa-cost-cereso
- `well-architected` · Well-Architected Framework — Cost-effective resources · [02-well-architected/cost-cereso.html](02-well-architected/cost-cereso.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-cereso.html>

### wa-cost-cfm
- `well-architected` · Well-Architected Framework — Practice Cloud Financial Management · [02-well-architected/cost-cfm.html](02-well-architected/cost-cfm.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-cfm.html>

### wa-cost-def
- `well-architected` · Well-Architected Framework — Definition · [02-well-architected/cost-def.html](02-well-architected/cost-def.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-def.html>

### wa-cost-dp
- `well-architected` · Well-Architected Framework — Design principles · [02-well-architected/cost-dp.html](02-well-architected/cost-dp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-dp.html>

### wa-cost-mandem
- `well-architected` · Well-Architected Framework — Manage demand and supply resources · [02-well-architected/cost-mandem.html](02-well-architected/cost-mandem.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-mandem.html>

### wa-cost-opti
- `well-architected` · Well-Architected Framework — Optimize over time · [02-well-architected/cost-opti.html](02-well-architected/cost-opti.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-opti.html>

### wa-cost-optimization
- `well-architected` · Well-Architected Framework — Cost optimization · [02-well-architected/cost-optimization.html](02-well-architected/cost-optimization.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-optimization.html>

### wa-cost-resources
- `well-architected` · Well-Architected Framework — Resources · [02-well-architected/cost-resources.html](02-well-architected/cost-resources.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-resources.html>

### wa-definitions
- `well-architected` · Well-Architected Framework — Definitions · [02-well-architected/definitions.html](02-well-architected/definitions.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/definitions.html>

### wa-document-revisions
- `well-architected` · Well-Architected Framework — Document revisions · [02-well-architected/document-revisions.html](02-well-architected/document-revisions.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/document-revisions.html>

### wa-framework-pdf
- `well-architected` · AWS Well-Architected Framework (PDF completo) · [02-well-architected/wellarchitected-framework.pdf](02-well-architected/wellarchitected-framework.pdf) · <https://docs.aws.amazon.com/pdfs/wellarchitected/latest/framework/wellarchitected-framework.pdf>

### wa-further-reading
- `well-architected` · Well-Architected Framework — Further reading · [02-well-architected/further-reading.html](02-well-architected/further-reading.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/further-reading.html>

### wa-general-design-principles
- `well-architected` · Well-Architected Framework — General design principles · [02-well-architected/general-design-principles.html](02-well-architected/general-design-principles.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html>

### wa-glossary
- `well-architected` · Well-Architected Framework — AWS Glossary · [02-well-architected/glossary.html](02-well-architected/glossary.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/glossary.html>

### wa-homepage
- `whitepaper` · AWS Well-Architected (página oficial) · [02-well-architected/well-architected-homepage.html](02-well-architected/well-architected-homepage.html) · <https://aws.amazon.com/architecture/well-architected/>

### wa-oe-bp
- `well-architected` · Well-Architected Framework — Best practices · [02-well-architected/oe-bp.html](02-well-architected/oe-bp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-bp.html>

### wa-oe-definition
- `well-architected` · Well-Architected Framework — Definition · [02-well-architected/oe-definition.html](02-well-architected/oe-definition.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-definition.html>

### wa-oe-design-principles
- `well-architected` · Well-Architected Framework — Design principles · [02-well-architected/oe-design-principles.html](02-well-architected/oe-design-principles.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-design-principles.html>

### wa-oe-evolve
- `well-architected` · Well-Architected Framework — Evolve · [02-well-architected/oe-evolve.html](02-well-architected/oe-evolve.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-evolve.html>

### wa-oe-operate
- `well-architected` · Well-Architected Framework — Operate · [02-well-architected/oe-operate.html](02-well-architected/oe-operate.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-operate.html>

### wa-oe-organization
- `well-architected` · Well-Architected Framework — Organization · [02-well-architected/oe-organization.html](02-well-architected/oe-organization.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-organization.html>

### wa-oe-prepare
- `well-architected` · Well-Architected Framework — Prepare · [02-well-architected/oe-prepare.html](02-well-architected/oe-prepare.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-prepare.html>

### wa-oe-resources
- `well-architected` · Well-Architected Framework — Resources · [02-well-architected/oe-resources.html](02-well-architected/oe-resources.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/oe-resources.html>

### wa-on-architecture
- `well-architected` · Well-Architected Framework — On architecture · [02-well-architected/on-architecture.html](02-well-architected/on-architecture.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/on-architecture.html>

### wa-operational-excellence
- `well-architected` · Well-Architected Framework — Operational excellence · [02-well-architected/operational-excellence.html](02-well-architected/operational-excellence.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/operational-excellence.html>

### wa-perf-arch
- `well-architected` · Well-Architected Framework — Architecture selection · [02-well-architected/perf-arch.html](02-well-architected/perf-arch.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-arch.html>

### wa-perf-bp
- `well-architected` · Well-Architected Framework — Best practices · [02-well-architected/perf-bp.html](02-well-architected/perf-bp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-bp.html>

### wa-perf-compute
- `well-architected` · Well-Architected Framework — Compute and hardware · [02-well-architected/perf-compute.html](02-well-architected/perf-compute.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-compute.html>

### wa-perf-data
- `well-architected` · Well-Architected Framework — Data management · [02-well-architected/perf-data.html](02-well-architected/perf-data.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-data.html>

### wa-perf-def
- `well-architected` · Well-Architected Framework — Definition · [02-well-architected/perf-def.html](02-well-architected/perf-def.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-def.html>

### wa-perf-dp
- `well-architected` · Well-Architected Framework — Design principles · [02-well-architected/perf-dp.html](02-well-architected/perf-dp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-dp.html>

### wa-perf-networking
- `well-architected` · Well-Architected Framework — Networking and content delivery · [02-well-architected/perf-networking.html](02-well-architected/perf-networking.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-networking.html>

### wa-perf-process
- `well-architected` · Well-Architected Framework — Process and culture · [02-well-architected/perf-process.html](02-well-architected/perf-process.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-process.html>

### wa-perf-resources
- `well-architected` · Well-Architected Framework — Resources · [02-well-architected/perf-resources.html](02-well-architected/perf-resources.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/perf-resources.html>

### wa-performance-efficiency
- `well-architected` · Well-Architected Framework — Performance efficiency · [02-well-architected/performance-efficiency.html](02-well-architected/performance-efficiency.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/performance-efficiency.html>

### wa-rel-bp
- `well-architected` · Well-Architected Framework — Best practices · [02-well-architected/rel-bp.html](02-well-architected/rel-bp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-bp.html>

### wa-rel-chg-mgmt
- `well-architected` · Well-Architected Framework — Change management · [02-well-architected/rel-chg-mgmt.html](02-well-architected/rel-chg-mgmt.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-chg-mgmt.html>

### wa-rel-def
- `well-architected` · Well-Architected Framework — Definition · [02-well-architected/rel-def.html](02-well-architected/rel-def.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-def.html>

### wa-rel-dp
- `well-architected` · Well-Architected Framework — Design principles · [02-well-architected/rel-dp.html](02-well-architected/rel-dp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-dp.html>

### wa-rel-failmgmt
- `well-architected` · Well-Architected Framework — Failure management · [02-well-architected/rel-failmgmt.html](02-well-architected/rel-failmgmt.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-failmgmt.html>

### wa-rel-found
- `well-architected` · Well-Architected Framework — Foundations · [02-well-architected/rel-found.html](02-well-architected/rel-found.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-found.html>

### wa-rel-resources
- `well-architected` · Well-Architected Framework — Resources · [02-well-architected/rel-resources.html](02-well-architected/rel-resources.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-resources.html>

### wa-rel-workload-arch
- `well-architected` · Well-Architected Framework — Workload architecture · [02-well-architected/rel-workload-arch.html](02-well-architected/rel-workload-arch.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-workload-arch.html>

### wa-reliability
- `well-architected` · Well-Architected Framework — Reliability · [02-well-architected/reliability.html](02-well-architected/reliability.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability.html>

### wa-sec-appsec
- `well-architected` · Well-Architected Framework — Application security · [02-well-architected/sec-appsec.html](02-well-architected/sec-appsec.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-appsec.html>

### wa-sec-bp
- `well-architected` · Well-Architected Framework — Best practices · [02-well-architected/sec-bp.html](02-well-architected/sec-bp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-bp.html>

### wa-sec-dataprot
- `well-architected` · Well-Architected Framework — Data protection · [02-well-architected/sec-dataprot.html](02-well-architected/sec-dataprot.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-dataprot.html>

### wa-sec-def
- `well-architected` · Well-Architected Framework — Definition · [02-well-architected/sec-def.html](02-well-architected/sec-def.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-def.html>

### wa-sec-design
- `well-architected` · Well-Architected Framework — Design principles · [02-well-architected/sec-design.html](02-well-architected/sec-design.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-design.html>

### wa-sec-detection
- `well-architected` · Well-Architected Framework — Detection · [02-well-architected/sec-detection.html](02-well-architected/sec-detection.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-detection.html>

### wa-sec-iam
- `well-architected` · Well-Architected Framework — Identity and access management · [02-well-architected/sec-iam.html](02-well-architected/sec-iam.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-iam.html>

### wa-sec-incresp
- `well-architected` · Well-Architected Framework — Incident response · [02-well-architected/sec-incresp.html](02-well-architected/sec-incresp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-incresp.html>

### wa-sec-infrastructure
- `well-architected` · Well-Architected Framework — Infrastructure protection · [02-well-architected/sec-infrastructure.html](02-well-architected/sec-infrastructure.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-infrastructure.html>

### wa-sec-resources
- `well-architected` · Well-Architected Framework — Resources · [02-well-architected/sec-resources.html](02-well-architected/sec-resources.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-resources.html>

### wa-sec-security
- `well-architected` · Well-Architected Framework — Security foundations · [02-well-architected/sec-security.html](02-well-architected/sec-security.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sec-security.html>

### wa-security
- `well-architected` · Well-Architected Framework — Security · [02-well-architected/security.html](02-well-architected/security.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/security.html>

### wa-sus-bp
- `well-architected` · Well-Architected Framework — Best practices · [02-well-architected/sus-bp.html](02-well-architected/sus-bp.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-bp.html>

### wa-sus-data-patterns
- `well-architected` · Well-Architected Framework — Data management · [02-well-architected/sus-data-patterns.html](02-well-architected/sus-data-patterns.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-data-patterns.html>

### wa-sus-def
- `well-architected` · Well-Architected Framework — Definition · [02-well-architected/sus-def.html](02-well-architected/sus-def.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-def.html>

### wa-sus-design-principles
- `well-architected` · Well-Architected Framework — Design principles · [02-well-architected/sus-design-principles.html](02-well-architected/sus-design-principles.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-design-principles.html>

### wa-sus-development-deployment-patterns
- `well-architected` · Well-Architected Framework — Process and culture · [02-well-architected/sus-development-deployment-patterns.html](02-well-architected/sus-development-deployment-patterns.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-development-deployment-patterns.html>

### wa-sus-hardware-patterns
- `well-architected` · Well-Architected Framework — Hardware and services · [02-well-architected/sus-hardware-patterns.html](02-well-architected/sus-hardware-patterns.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-hardware-patterns.html>

### wa-sus-region-selection
- `well-architected` · Well-Architected Framework — Region selection · [02-well-architected/sus-region-selection.html](02-well-architected/sus-region-selection.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-region-selection.html>

### wa-sus-resources
- `well-architected` · Well-Architected Framework — Resources · [02-well-architected/sus-resources.html](02-well-architected/sus-resources.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-resources.html>

### wa-sus-software-architecture-patterns
- `well-architected` · Well-Architected Framework — Software and architecture · [02-well-architected/sus-software-architecture-patterns.html](02-well-architected/sus-software-architecture-patterns.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-software-architecture-patterns.html>

### wa-sus-user-behavior-patterns
- `well-architected` · Well-Architected Framework — Alignment to demand · [02-well-architected/sus-user-behavior-patterns.html](02-well-architected/sus-user-behavior-patterns.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sus-user-behavior-patterns.html>

### wa-sustainability
- `well-architected` · Well-Architected Framework — Sustainability · [02-well-architected/sustainability.html](02-well-architected/sustainability.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/sustainability.html>

### wa-the-pillars-of-the-framework
- `well-architected` · Well-Architected Framework — The pillars of the framework · [02-well-architected/the-pillars-of-the-framework.html](02-well-architected/the-pillars-of-the-framework.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html>

### wa-the-review-process
- `well-architected` · Well-Architected Framework — The review process · [02-well-architected/the-review-process.html](02-well-architected/the-review-process.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/the-review-process.html>

### wa-welcome
- `well-architected` · Well-Architected Framework — Abstract and introduction · [02-well-architected/welcome.html](02-well-architected/welcome.html) · <https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html>

### whitepapers-index
- `whitepaper` · AWS Whitepapers & Guides (índice) · [03-whitepapers/whitepapers-index.html](03-whitepapers/whitepapers-index.html) · <https://aws.amazon.com/whitepapers/>
