> **BRONZE Markdown** — `FND-11` · Servicio: **IAM** · Fase 1 · Dominios examen: D1
> URL oficial: https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html
> Título oficial: What is IAM? - AWS Identity and Access Management

AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS
resources. With IAM, you can manage permissions that control which AWS resources users can
access. You use IAM to control who is authenticated (signed in) and authorized (has
permissions) to use resources. IAM provides the infrastructure necessary to control
authentication and authorization for your AWS accounts.

For instructions on setting up your AWS account and creating identities, see Getting started with IAM (./getting-started.html).

**Identities**

When you create an AWS account, you begin with one sign-in identity called the AWS account *root user* that has complete access to all AWS services and resources. We strongly recommend that you don't use the root user for everyday tasks. For tasks that require root user credentials, see Tasks that require root user credentials (https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#root-user-tasks) in the *IAM User Guide*.

Use IAM to set up other identities in addition to your
root user, such as administrators, analysts, and developers, and grant them access to the resources
they need to succeed in their tasks.

**Access management**

After a user is set up in IAM, they use their sign-in credentials to authenticate with
AWS. Authentication is provided by matching the sign-in credentials to a principal (an
IAM user, AWS STS federated principal, IAM role, or application) trusted by the AWS account. Next, a
request is made to grant the principal access to resources. Access is granted in response to an
authorization request if the user has been given permission to the resource. For example, when
you first sign in to the console and are on the console Home page, you aren't accessing a
specific service. When you select a service, the request for authorization is sent to that
service and it looks to see if your identity is on the list of authorized users, what policies
are being enforced to control the level of access granted, and any other policies that might be
in effect. Authorization requests can be made by principals within your AWS account or from
another AWS account that you trust.

Once authorized, the principal can take action or perform operations on resources in your
AWS account. For example, the principal could launch a new Amazon Elastic Compute Cloud instance, modify
IAM group membership, or delete Amazon Simple Storage Service buckets.

- ### Related resources

AWS Identity and Access Management API Reference (https://docs.aws.amazon.com/IAM/latest/APIReference/index.html)AWS CLI commands for AWS Identity and Access Management (https://docs.aws.amazon.com/cli/latest/reference/iam/)SDKs & Tools  (https://aws.amazon.com/tools/)
- Did this page help you?YesNoProvide feedback (https://docs.aws.amazon.com/feedback/doc-feedback.html?hidden_service_name=IAM&topic_url=https%3A%2F%2Fdocs.aws.amazon.com%2FIAM%2Flatest%2FUserGuide%2Fintroduction.html)

#### Next topic:

Why should I use IAM?
