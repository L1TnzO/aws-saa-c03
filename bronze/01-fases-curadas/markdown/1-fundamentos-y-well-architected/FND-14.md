> **BRONZE Markdown** — `FND-14` · Servicio: **IAM** · Fase 1 · Dominios examen: D1
> URL oficial: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html
> Título oficial: Policies and permissions in AWS Identity and Access Management

Manage access in AWS by creating policies and attaching them to IAM identities (users,
groups of users, or roles) or AWS resources. A policy is an object in AWS that, when
associated with an identity or resource, defines their permissions. AWS evaluates these
policies when an IAM principal (user or role) makes a request. Permissions in the policies
determine whether the request is allowed or denied. Most policies are stored in AWS as JSON
documents. AWS supports nine types of policies: identity-based policies, resource-based
policies, VPC endpoint policies, permissions boundaries, AWS Organizations service control policies (SCPs), AWS Organizations resource control
policies (RCPs), access control lists (ACLs), Resource Access Manager shares (RAM) and session policies.

IAM policies define permissions for an action regardless of the method that you use to
perform the operation. For example, if a policy allows the GetUser (https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html) action, then a user with that policy can
get user information from the AWS Management Console, the AWS CLI, or the AWS API. When you create an IAM
user, you can choose to allow console or programmatic access. If console access is allowed, the
IAM user can sign in to the console using their sign-in credentials. If programmatic access is
allowed, the user can use access keys to work with the CLI or API.

## Policy types

The following policy types, listed in order from most frequently used to less frequently
used, are available for use in AWS. For more details, see the sections below for each policy
type.

- **Identity-based
policies (#policies_id-based)** – Attach managed (#managedpolicy)
and inline (#inline) policies to IAM identities (users, groups to
which users belong, or roles). Identity-based policies grant permissions to an
identity.
- **Resource-based
policies (#policies_resource-based)** – Attach inline policies to resources. The most
common examples of resource-based policies are Amazon S3 bucket policies and IAM role trust
policies. Resource-based policies grant permissions to the principal that is specified in
the policy. Principals can be in the same account as the resource or in other
accounts.
- **VPC endpoint
policies (#policies_vpc-endpoint)** – Attach to a VPC endpoint to control which
principals can use the VPC endpoint policies and which resources can be accessed through it. VPC endpoint
policies act as an additional access boundary scoped to traffic that traverses the
endpoint.
- **Permissions
boundaries (#policies_bound)** – Use a managed policy as the permissions boundary
for an IAM entity (user or role). That policy defines the maximum permissions that the
identity-based policies can grant to an entity, but does not grant permissions.
Permissions boundaries do not define the maximum permissions that a resource-based policy
can grant to an entity.
- **AWS Organizations SCPs (#policies_scp)**
– Use an AWS Organizations service control policy (SCP) to define the maximum permissions
for IAM users and IAM roles within accounts in your organization or organizational
unit (OU). SCPs limit permissions that identity-based policies or resource-based policies
grant to IAM users or IAM roles within the account. SCPs do not grant
permissions.
- **AWS Organizations RCPs (#policies_rcp)**
– Use an AWS Organizations resource control policy (RCP) to define the maximum permissions
for resources within accounts in your organization or organizational unit (OU). RCPs limit
permissions that identity-based and resource-based policies can grant to resources in
accounts within your organization. RCPs do not grant permissions.
- **Access control lists
(ACLs) (#policies_acl)** – Use ACLs to control which principals in other accounts
can access the resource to which the ACL is attached. ACLs are similar to resource-based
policies, although they are the only policy type that does not use the JSON policy
document structure. ACLs are cross-account permissions policies that grant permissions to
the specified principal. ACLs cannot grant permissions to entities within the same
account.
- **AWS RAM resource
shares (#policies_ram)** – Use AWS Resource Access Manager to share resources
across AWS accounts, organizational units, or an entire organization without writing
individual resource-based policies for each shared resource.
- **Session
policies (#policies_session)** – Pass advanced session policies when you use the
AWS CLI or AWS API to assume a role or a federated user. Session policies limit the
permissions that the role or user's identity-based policies grant to the session. Session
policies limit permissions for a created session, but do not grant permissions. For more
information, see Session
Policies (https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session).

### Identity-based policies

Identity-based policies are JSON permissions policy documents that control what actions
an identity (users, groups of users, and roles) can perform, on which resources, and under
what conditions. Identity-based policies can be further categorized:

- **Managed
policies** – Standalone identity-based policies that you can attach to
multiple users, groups, and roles in your AWS account. There are two types of managed
policies:

**AWS managed policies** – Managed
policies that are created and managed by AWS.
- **Customer managed policies** – Managed
policies that you create and manage in your AWS account. Customer managed policies
provide more precise control over your policies than AWS managed policies.

**Inline
policies** – Policies that you add directly to a single user, group,
or role. Inline policies maintain a strict one-to-one relationship between a policy and
an identity. They are deleted when you delete the identity.

To learn how to choose between managed and inline policies, see Choose between managed policies and inline policies (./access_policies-choosing-managed-or-inline.html).

### Resource-based policies

Resource-based policies are JSON policy documents that you attach to a resource such as
an Amazon S3 bucket. These policies grant the specified principal permission to perform specific
actions on that resource and defines under what conditions this applies. Resource-based
policies are inline policies. There are no managed resource-based policies.

To enable cross-account access, you can specify an entire account or IAM entities in
another account as the principal in a resource-based policy. Adding a cross-account
principal to a resource-based policy is only half of establishing the trust relationship.
When the principal and the resource are in separate AWS accounts, you must also use an
identity-based policy to grant the principal access to the resource. However, if a
resource-based policy grants access to a principal in the same account, no additional
identity-based policy is required. For step-by step instructions for granting cross-service
access, see IAM tutorial: Delegate access across AWS accounts using IAM roles (./tutorial_cross-account-with-roles.html).

The IAM service supports only one type of resource-based policy called a role
*trust policy*, which is attached to an IAM role. An
IAM role is both an identity and a resource that supports resource-based policies. For
that reason, you must attach both a trust policy and an identity-based policy to an IAM
role. Trust policies define which principal entities (accounts, users, roles, and federated
users) can assume the role. To learn how IAM roles are different from other
resource-based policies, see Cross account resource access in IAM (./access_policies-cross-account-resource-access.html).

To see which other services support resource-based policies, see AWS services that work with IAM (./reference_aws-services-that-work-with-iam.html). To learn more about
resource-based policies, see Identity-based policies and resource-based policies (./access_policies_identity-vs-resource.html).
To learn whether principals in accounts outside of your zone of trust (trusted organization or account) have access to assume your roles, see
What is IAM Access Analyzer? (https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html).

### VPC endpoint policies

A VPC endpoint policy is a resource-based policy that you attach to a VPC endpoint to
control which principals can use the endpoint and which resources can be accessed through
it. VPC endpoint policies do not override or replace identity-based policies or resource-based
policies attached to the destination service—they act as an additional access boundary
scoped to traffic that traverses the endpoint.

VPC endpoint policies are used to ensure that only trusted identities in your AWS Organizations
organization can access trusted resources through your VPC endpoints. If you do not attach a custom endpoint
policy, AWS attaches a default policy that allows full access. For more information about
endpoint policies, see Control access to VPC endpoints
using endpoint policies (https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html) in the *AWS PrivateLink
Guide*.

### IAM permissions boundaries

A permissions boundary is an advanced feature in which you set the maximum permissions
that an identity-based policy can grant to an IAM entity. When you set a permissions
boundary for an entity, the entity can perform only the actions that are allowed by both its
identity-based policies and its permissions boundaries.

If you specify a role session or
user in the principal element of a resource-based policy, an explicit allow in the
permission boundary is not required. However, if you specify a role ARN in the principal
element of a resource-based policy, an explicit allow in the permission boundary is
required. In both cases, an explicit deny in the permission boundary is effective. An
explicit deny in any of these policies overrides the allow. For more information about
permissions boundaries, see Permissions boundaries for IAM entities (./access_policies_boundaries.html).

### AWS Organizations service control policies (SCPs)

If you enable all features in an organization, then you can apply service control
policies (SCPs) to any or all of your accounts. SCPs are JSON policies that specify the
maximum permissions for IAM users and IAM roles within accounts of an organization or
organizational unit (OU). The SCP limits permissions for principals in member accounts,
including each AWS account root user. An explicit deny in any of these policies overrides an allow in
other policies.

For more information about AWS Organizations and SCPs, see Service control
policies (SCPs) (https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) in the *AWS Organizations User Guide*.

### AWS Organizations resource control policies (RCPs)

If you enable all features in an organization, then you can use resource control
policies (RCPs) to centrally apply access controls on resources across multiple
AWS accounts. RCPs are JSON policies that you can use to set the maximum available
permissions for resources in your accounts without updating the IAM policies attached to
each resource that you own. The RCP limits permissions for resources in member accounts and
can impact the effective permissions for identities, including the AWS account root user, regardless of
whether they belong to your organization. An explicit deny in any applicable RCP overrides
an allow in other policies that might be attached to individual identities or
resources.

For more information about AWS Organizations and RCPs including a list of AWS services that support
RCPs, see Resource control
policies (RCPs) (https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html) in the *AWS Organizations User Guide*.

### Access control lists (ACLs)

Access control lists (ACLs) are service policies that allow you to control which
principals in another account can access a resource. ACLs cannot be used to control access
for a principal within the same account. ACLs are similar to resource-based policies,
although they are the only policy type that does not use the JSON policy document format.
Amazon S3, AWS WAF, and Amazon VPC are examples of services that support ACLs. To learn more about ACLs,
see Access
Control List (ACL) overview (https://docs.aws.amazon.com/AmazonS3/latest/userguide/acl-overview.html) in the *Amazon Simple Storage Service Developer
Guide*.

### AWS Resource Access Manager (AWS RAM) resource shares

AWS Resource Access Manager (AWS RAM) lets you share resources you create in one
AWS account with other AWS accounts, organizational units, or an entire organization in
AWS Organizations, without writing individual resource-based policies for each shared resource. While
you can grant cross-account access by attaching a resource-based policy directly to a
resource, AWS RAM provides a managed, centralized alternative that eliminates the need to
enumerate account IDs in policies or maintain identical policy documents across accounts.

With RAM, consuming accounts see shared resources natively in their service consoles,
resource owners retain full ownership and visibility into who has access, and managed
permissions define the maximum actions consumers can perform—all governed by a single
resource share rather than per-resource policies. Common use cases include sharing VPC
subnets, AWS Transit Gateway attachments, Route 53 Resolver rules, and License Manager
configurations across accounts. For more information, see What is AWS Resource Access
Manager? (https://docs.aws.amazon.com/ram/latest/userguide/what-is.html) in the *AWS RAM User
Guide*.

### Session policies

Session policies are advanced policies that you pass as a parameter when you
programmatically create a temporary session for a role or an AWS STS federated user principal. The permissions
for a session are the intersection of the identity-based policies for the IAM entity (user
or role) used to create the session and the session policies. Permissions can also come from
a resource-based policy. An explicit deny in any of these policies overrides the
allow.

You can create role session and pass session policies programmatically using the
`AssumeRole`, `AssumeRoleWithSAML`, or
`AssumeRoleWithWebIdentity` API operations. You can pass a single JSON inline
session policy document using the `Policy` parameter. You can use the
`PolicyArns` parameter to specify up to 10 managed session policies. For more
information about creating a role session, see Permissions for temporary security credentials (./id_credentials_temp_control-access.html).

When you create an AWS STS federated user principal session, you use the access keys of the IAM user to
programmatically call the `GetFederationToken` API operation. You must also pass
session policies. The resulting session's permissions are the intersection of the
identity-based policy and the session policy. For more information about creating a
federated user session, see Requesting credentials through a custom identity broker (./id_credentials_temp_request.html#api_getfederationtoken).

A resource-based policy can specify the ARN of the user or role as a principal. In that
case, the permissions from the resource-based policy are added to the role or user's
identity-based policy before the session is created. The session policy limits the total
permissions granted by the resource-based policy and the identity-based policy. The
resulting session's permissions are the intersection of the session policies and the
resource-based policies plus the intersection of the session policies and identity-based
policies.

- ### On this page

Policy types (#access_policy-types)
- Policies and the root user (#access_policies-root)
- Overview of JSON policies (#access_policies-json)
- Grant least privilege (#grant-least-priv)
- ### Related resources

AWS Identity and Access Management API Reference (https://docs.aws.amazon.com/IAM/latest/APIReference/index.html)AWS CLI commands for AWS Identity and Access Management (https://docs.aws.amazon.com/cli/latest/reference/iam/)SDKs & Tools  (https://aws.amazon.com/tools/)

#### Next topic:

Managed policies and inline policies

#### Previous topic:

Access management
