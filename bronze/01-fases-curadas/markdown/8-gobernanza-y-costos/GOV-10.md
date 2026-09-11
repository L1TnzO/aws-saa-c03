> **BRONZE Markdown** — `GOV-10` · Servicio: **AWS CUR** · Fase 8 · Dominios examen: D4
> URL oficial: https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html
> Título oficial: What are AWS Cost and Usage Reports?

AWS Cost and Usage Reports (AWS CUR) contains the most comprehensive set of cost and usage data available.
You can use Cost and Usage Reports to publish your AWS billing reports to an Amazon Simple Storage Service (Amazon S3) bucket that
you own. You can receive reports that break down your costs by the hour, day, or month, by
product or product resource, or by tags that you define yourself. AWS updates the report in
your bucket once a day in comma-separated value (CSV) format. You can view the reports using
spreadsheet software such as Microsoft Excel or Apache OpenOffice Calc, or access them from an
application using the Amazon S3 API.

AWS Cost and Usage Reports tracks your AWS usage and provides estimated charges associated with your account. Each report contains line items for each unique combination of AWS products, usage type, and operation that you use in your AWS account. You can customize the AWS Cost and Usage Reports to aggregate the information either by the hour, day, or month.

AWS Cost and Usage Reports can do the following:

- Deliver report files to your Amazon S3 bucket
- Update the report up to three times a day
- Create, retrieve, and delete your reports using the AWS CUR API Reference

## How Cost and Usage Reports work

After you create a Cost and Usage Report, AWS sends your report to the Amazon S3 bucket that you
specify. AWS updates your report at least once a day until your charges are
finalized.

Your report files consist of a .csv file or a collection of .csv files and a manifest
file. You can choose to configure your report data for integration with Amazon Athena, Amazon Redshift,
or Quick.

## Report timeline

After you create your report, it can take up to 24 hours for AWS to deliver the first
report to your Amazon S3 bucket.

After delivery starts, AWS updates the report files at least once a day. Each report
update in a given month is cumulative, so each version of the report includes all of the
billing data for the month to date. The report updates that you receive throughout the month
are estimates. The charges are subject to change as you continue to use your AWS
services.

- ### On this page

How Cost and Usage Reports work (#how-cur-works)
- Report timeline (#cur-timeline)
- Report files (#cur-files)
- Report columns (#reading-cur)
- Using your report (#download-cur)

#### Next topic:

Creating Cost and Usage Reports

#### Previous topic:

Legacy Cost and Usage Reports
