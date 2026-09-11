> **BRONZE Markdown** — `SEC-17` · Servicio: **AWS RAM** · Fase 7 · Dominios examen: D1
> URL oficial: https://docs.aws.amazon.com/ram/latest/userguide/what-is.html
> Título oficial: What is AWS Resource Access Manager?

AWS Resource Access Manager (AWS RAM) helps you securely share your resources across AWS accounts, within
your organization or organizational units (OUs), and with AWS Identity and Access Management (IAM) roles and users
for supported resource types. If you have multiple AWS accounts, you can create a resource
once and use AWS RAM to make that resource usable by those other accounts. If your account is
managed by AWS Organizations, you can share resources with all the other accounts in the organization
or only those accounts contained by one or more specified organizational units (OUs). You
can also share with specific AWS accounts by account ID, regardless of whether the account
is part of an organization. Some supported resource types (./shareable.html)
also let you share them with specified IAM roles and users.

###### Contents

- Video overviews (#video-intros)
- Benefits of AWS RAM (#what-is-features)
- How resource sharing works (#what-is-how)
- Accessing AWS RAM (#what-is-accessing)
- Pricing for AWS RAM (#what-is-pricing)
- Compliance and international standards (#certification)

## Video overviews

The following video provides a brief introduction to AWS RAM and describes how to create
a resource share. For more information, see Creating a resource share in AWS RAM (./working-with-sharing-create.html).

The following video demonstrates how to apply AWS managed permissions to your AWS resources. For
more information, see Managing permissions in AWS RAM (./security-ram-permissions.html).

This video demonstrates how to author and associate customer managed permissions following the best practice
of least privilege. For more information see, Creating and using customer managed permissions in AWS RAM (./create-customer-managed-permissions.html).

## Benefits of AWS RAM

Why use AWS RAM? It offers the following benefits:

- **Reduces your operational overhead** –
Create a resource once, and then use AWS RAM to share that resource with other
accounts. This eliminates the need to provision duplicate resources in every
account, which reduces operational overhead. Within the account that owns the
resource, AWS RAM simplifies granting access to every role and user in that
account without having to use identity-based permission policies.
- **Provides security and consistency** –
Simplify security management for your shared resources by using a single set of
policies and permissions. If you were to instead create duplicate resources in
all your separate accounts, you would have the task of implementing identical
policies and permissions, and then have to keep them identical across all those
accounts. Instead, all users of an AWS RAM resource share are managed by a single
set of policies and permissions. AWS RAM offers a consistent experience for
sharing different types of AWS resources.
- **Provides visibility and auditability** –
View the usage details for your shared resources through the integration of
AWS RAM with Amazon CloudWatch and AWS CloudTrail. AWS RAM provides comprehensive visibility into
shared resources and accounts.

### What about cross-account access with resource-based policies?

You can share some types of AWS resources with other AWS accounts by attaching
a resource-based policy (./getting-started-terms-and-concepts.html#term-resource-based-policy) that
identifies AWS Identity and Access Management (IAM) principals (IAM roles and users) outside of
your AWS account. However, sharing a resource by attaching a policy doesn't take
advantage of the additional benefits that AWS RAM provides. By using AWS RAM you get the
following features:

- You can share with an organization or an organizational unit (OU) (https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html#getting-started-sharing-orgs) without having to
enumerate every one of the AWS account IDs.
- Users can see the resources shared with them directly in the originating
AWS service console and API operations as if those resources were directly
in the user's account. For example, if you use AWS RAM to share an Amazon VPC
subnet with another account, users in that account can see the subnet in the
Amazon VPC console and in the results of Amazon VPC API operations performed in that
account. Resources shared by attaching a resource-based policy aren't
visible this way; instead, you have to discover and explicitly refer to the
resource by its Amazon Resource Name (ARN).
- The owners of a resource can see which principals have access to each
individual resource that they have shared.
- If you share resources with an account that isn't part of your
organization, then AWS RAM initiates an invitation process. The recipient must
accept the invitation before that principal can access the shared resources.
After you turn on the
ability to share within your organization, (./getting-started-sharing.html#getting-started-sharing-orgs) sharing with accounts
in the organization doesn't require invitations.

If you have resources that you have shared by using a resource-based permission
policy, you can promote those resources to fully AWS RAM managed resources by doing
either of the following:

- Use the PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) API
operation.
- Use the API operation's equivalent, which is the AWS Command Line Interface (AWS CLI) promote-resource-share-created-from-policy (https://docs.aws.amazon.com/cli/latest/reference/ram/promote-resource-share-created-from-policy.html)
command.

## How resource sharing works

When you share a resource in the *owning account*
with another AWS account, the *consuming account*,
you are granting access for principals in the consuming account to the shared resource.
Any policies and permissions that apply to roles and users in the consuming account also
apply to the shared resource. The resources in the share look like they're native
resources in the AWS accounts you shared them with.

You can share both global and Regional resources. For more information, see Sharing Regional resources compared to global resources (./working-with-regional-vs-global.html).

### Sharing your resources

With AWS RAM, you share resources that you own by creating a resource share (./getting-started-terms-and-concepts.html#term-resource-share). To
create a resource share, you specify the following:

- The AWS Region in which you want to create the resource share. In the console, you
choose from the **Region** dropdown menu in the upper-right
corner of the console. In the AWS CLI, you use the `--region`
parameter.

A resource share can contain only Regional resources that are in the same
AWS Region as the resource share.
- A resource share can contain global resources only if the resource share is in the
designated home Region for global resources,
US East (N. Virginia), `us-east-1`.

A name for the resource share.

The list of resources that you want to grant access to as part of this
resource share.

The principals to which you grant access to the resource share. Principals can be
individual AWS accounts, the accounts in an organization or an
organizational unit (OU) in AWS Organizations, or individual AWS Identity and Access Management (IAM) roles
or users.

- ### On this page

Video overviews (#video-intros)
- Benefits of AWS RAM (#what-is-features)
- How resource sharing works (#what-is-how)
- Accessing AWS RAM (#what-is-accessing)
- Pricing for AWS RAM (#what-is-pricing)
- Compliance and international standards (#certification)

#### Next topic:

Getting started
