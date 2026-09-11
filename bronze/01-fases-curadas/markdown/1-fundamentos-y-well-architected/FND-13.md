> **BRONZE Markdown** — `FND-13` · Servicio: **IAM** · Fase 1 · Dominios examen: D1
> URL oficial: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
> Título oficial: AWS Identity and Access Management

An IAM *role* is an IAM identity that you can create in your account
that has specific permissions. An IAM role is similar to an IAM user, in that it is an AWS
identity with permission policies that determine what the identity can and cannot do in AWS.
However, instead of being uniquely associated with one person, a role is intended to be
assumable by anyone who needs it. Also, a role does not have standard long-term credentials such
as a password or access keys associated with it. Instead, when you assume a role, it provides
you with temporary security credentials for your role session.

You can use roles to delegate access to users, applications, or services that don't normally
have access to your AWS resources. For example, you might want to grant users in your AWS
account access to resources they don't usually have, or grant users in one AWS account access
to resources in another account. Or you might want to allow a mobile app to use AWS resources,
but not want to embed AWS keys within the app (where they can be difficult to update and where
users can potentially extract them). Sometimes you want to give AWS access to users who
already have identities defined outside of AWS, such as in your corporate directory. Or, you
might want to grant access to your account to third parties so that they can perform an audit on
your resources.

For these scenarios, you can delegate access to AWS resources using an *IAM
role*. This section introduces roles and the different ways you can use them, when
and how to choose among approaches, and how to create, manage, switch to (or assume), and delete
roles.

Account access manager (./account-access-manager.html) is an IAM feature that lets you
centrally assign IAM roles across your organization's accounts to IAM Identity Center (https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html) users and groups. Account access manager gives
your workforce access through IAM roles with their full feature set. You can use it alongside
IAM Identity Center permission sets or on its own.

- ### On this page

When to create an IAM user (instead of a role) (#id_which-to-choose)
- Roles terms and concepts (#id_roles_terms-and-concepts)
- Additional resources (#id_roles_additional-resources)
- ### Related resources

AWS Identity and Access Management API Reference (https://docs.aws.amazon.com/IAM/latest/APIReference/index.html)AWS CLI commands for AWS Identity and Access Management (https://docs.aws.amazon.com/cli/latest/reference/iam/)SDKs & Tools  (https://aws.amazon.com/tools/)

#### Next topic:

The confused deputy problem

#### Previous topic:

Delete an IAM group
