> **BRONZE Markdown** — `FND-18` · Servicio: **AWS Organizations** · Fase 1 · Dominios examen: D1
> URL oficial: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html
> Título oficial: Service control policies (SCPs) - AWS Organizations

Service control policies (SCPs) are a type of organization policy that you can use to
manage permissions in your organization. SCPs offer central control over the maximum
available permissions for the IAM users and IAM roles in your organization. SCPs help
you to ensure your accounts stay within your organization’s access control guidelines. SCPs
are available only in an organization that has all features enabled (./orgs_manage_org_support-all-features.html). SCPs aren't
available if your organization has enabled only the consolidated billing features. For
instructions on enabling SCPs, see Enabling a policy type (./enable-policy-type.html).

SCPs do not grant permissions to the IAM users and IAM roles in your organization. No
permissions are granted by an SCP. An SCP defines a permission guardrail, or sets limits, on
the actions that the IAM users and IAM roles in your organization can perform. To grant
permissions, the administrator must attach policies to control access, such as identity-based policies that are attached to IAM users and IAM roles, and resource-based
policies that are attached to the resources in your accounts. For
more information, see Identity-based policies and resource-based policies (https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html) in the
*IAM User Guide*.

The effective permissions (#scp-effects-on-permissions) are the logical intersection between what is allowed by
the SCP and resource control policies (RCPs) (./orgs_manage_policies_rcps.html) and what is allowed by the identity-based and resource-based policies.

- ### On this page

Testing effects of SCPs (#scp-warning-testing-effect)
- Maximum size of SCPs (#scp-size-limit)
- Attaching SCPs to different levels in the organization (#scp-about-inheritance)
- SCP effects on permissions (#scp-effects-on-permissions)
- Using access data to improve SCPs (#data-from-iam)
- Tasks and entities not restricted by SCPs (#not-restricted-by-scp)

#### Next topic:

SCP evaluation

#### Previous topic:

Authorization policies
