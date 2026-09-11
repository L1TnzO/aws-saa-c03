[Skip to main content](#aws-page-content-main)

AWS Organizations

- [Overview](/organizations/)
- [Features](/organizations/features/)
- [Getting Started](/organizations/getting-started/best-practices/)
- [Resources](/organizations/resources/)
- [FAQs](/organizations/faqs/)
- More

# AWS Organizations FAQs

- [General](#general--3m3tsn)
  4
- [Core Concepts](#core-concepts--3m3tsn)
  7
- [Organizing AWS accounts](#organizing-aws-accounts--3m3tsn)
  15
- [Control Management](#control-management--3m3tsn)
  13
- [Billing](#billing--3m3tsn)
  3
- [Integrated AWS Services](#integrated-aws-services--3m3tsn)
  3

## General

[Open all](#)

### What is AWS Organizations?

### Which central governance and management capabilities does AWS Organizations enable?

AWS Organizations enables the following capabilities:

- Automate AWS account creation and management, and provision resources with AWS CloudFormation Stacksets
- Maintain a secure environment with policies and management of AWS security services
- Govern access to AWS services, resources, and regions
- Centrally manage policies across multiple AWS accounts
- Audit your environment for compliance 
- View and manage costs with consolidated billing 
- Configure AWS services across multiple accounts

### Which AWS Regions is AWS Organizations available in?

### What is AWS Control Tower and who should use this service?

## Core Concepts

[Open all](#)

### What is an organization?

### What is an AWS account?

### What is a management account?

### What is a member account?

### What is an administrative root?

### What is an organizational unit (OU)?

### What is a policy?

Policies in AWS Organizations enable you to apply organization-wide controls to the AWS accounts in your organization centrally. 

- [**Service control policies (SCPs)**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) offer central control over the maximum available permissions for IAM users and IAM roles in an organization. 
- [**Resource control policies (RCPs)**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html) offer central control over the maximum available permissions for resources in an organization. 
- [**Backup policies**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html) allow you to centrally manage and apply backup plans to the AWS resources across an organization's accounts.
- **[Declarative policy](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)** is a management policy that helps you enforce durable intent such as baseline configuration for a given AWS service in your organization with a few simple clicks or commands. Once enforced, these policies prevent non-compliant actions. The configuration defined in the declarative policy is maintained when AWS introduces new APIs and features or if there are changes to your organization such as addition of resources, principals and accounts.
- [**Tag policies**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html) allow you to standardize the tags attached to the AWS resources in an organization's accounts.
- [**Chatbot policies**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html) allow you to control access to an organization's accounts from chat applications such as Slack and Microsoft Teams.
- [**AI services opt-out policies**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html) allow you to control data collection for AWS AI services for all the accounts in an organization.

## Organizing AWS accounts

[Open all](#)

### Can I define and manage my organization regionally?

### Can I change which AWS account is the management account?

### How do I add an AWS account to my organization?

Use one of the following two methods to add an AWS account to your organization:

*Method 1: Invite an existing account to join your organization*

1\. Sign in as an administrator of the management account and navigate to the AWS Organizations console.

2\. Choose the Accounts tab.

3\. Choose Add account and then choose Invite account.

4\. Provide the email address of the account that you want to invite or the AWS account ID of the account.

**Note**: You can invite more than one AWS account by providing a comma-separated list of email addresses or AWS account IDs.

The specified AWS account receives an email inviting it to join your organization. An administrator in the invited AWS account must accept or reject the request using the AWS Organizations console, AWS CLI, or Organizations API. If the administrator accepts your invitation, the account becomes visible in the list of member accounts in your organization. Any applicable policies, such as [SCPs](/organizations/faqs/#scps), will be enforced automatically in the newly added account. For example, if your organization has an SCP attached to the root of your organization it will directly be enforced on the newly created accounts.

*Method 2: Create an AWS account in your organization*

1\. Sign in as an administrator of your management account and navigate to the AWS Organizations console.

2\. Choose the Accounts tab.

3\. Choose Add account and then choose Create account.

4\. Provide a name for the account and the email address for the account.

You can also create an account by using the AWS SDK or AWS CLI. For both methods, after you add the new account, you can move it to an organizational unit (OU). The new account automatically inherits the policies attached to the OU.

### Can an AWS account be a member of more than one organization?

### How can I access an AWS account that was created in my organization?

### Can I set up multi-factor authentication (MFA) on the AWS account that I create in my organization programmatically?

### Can I move an AWS account that I have created using AWS Organizations to another organization?

### Can I remove an AWS account that I created using Organizations and make it a standalone account?

### How many AWS accounts can I manage in my organization?

### How can I remove an AWS member account from an organization?

You can remove a member account by using one of the following two methods. You might have to provide additional information to remove an account that you created using Organizations. If the attempt to remove an account fails, go to the [AWS Support Center](https://console.aws.amazon.com/support/home) and ask for help with removing an account.

*Method 1: Remove an invited member account by signing in to the management account*

1\. Sign in as an administrator of the master account and navigate to the AWS Organizations console.

2\. In the left pane, choose **Accounts**.

3\. Choose the account that you want to remove and then choose **Remove account**.

4\. If the account does not have a valid payment method, you must provide one.

*Method 2: Remove an invited member account by signing in to the member account*

1\. Sign in as an administrator of the member account that you want to remove from the organization.

2\. Navigate to the AWS Organizations console.

3\. Choose \*Leave organization\*.

4\. If the account does not have a payment method, you must provide one.

### How can I create an organizational unit (OU)?

To create an OU, follow these steps:

1\. Sign in as an administrator of the management account and navigate to the AWS Organizations console.

2\. Choose the **Organize accounts** tab.

3\. Navigate in the hierarchy to where you want to create the OU. You can create it directly under the root, or you can create it within another OU.

4\. Choose to **Create organizational unit** and provide a name for your OU. The name must be unique within your organization.

**Note**: You can rename the OU later.

You now can add AWS accounts to your OU. You can also use the AWS CLI and AWS APIs to create and manage an OU.

### How can I add a member AWS account to an OU?

Follow these steps to add member accounts to an OU:

1\. In the AWS Organizations console, choose the Organize accounts tab.

2\. Choose the AWS account, and then choose Move account.

3\. In the dialog box, select the OU to which you want to move the AWS account.

Alternatively, you can use the AWS CLI and AWS APIs to add AWS accounts to an OU.

### Can an AWS account be a member of multiple OUs?

### Can an OU be a member of multiple OUs?

### How many levels can I have in my OU hierarchy?

## Control Management

[Open all](#)

###  At what levels of my organization can I apply a policy?

### How can I attach a policy?

You can attach a policy in one of two ways:

- In the AWS Organizations console, navigate to where you want to assign the policy (the root, an OU, or an account), and then choose **Attach Policy**.
- In the Organizations console, choose the **Policies** tab and do one of the following:  
  Choose an existing policy, choose **Attach Policy** from the **Actions** drop-down list, and then choose the root, OU, or account to which you want to attach the policy.
- Choose **Create Policy**, and then as part of the policy creation workflow, choose the root, OU, or account to which you want to attach the new policy.

For more information, see [Managing Policies](http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html?org_product_faq_managepolicies).

### What types of policies does AWS Organizations support?

Currently, AWS Organizations supports the following policies:

- [**Service control policies (SCPs)**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) offer central control over the maximum available permissions for IAM users and IAM roles in an organization. 
- [**Resource control policies (RCPs)**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html) offer central control over the maximum available permissions for resources in an organization.
- **[Declarative policy](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_declarative.html)** is a management policy that helps you enforce durable intent such as baseline configuration for a given AWS service in your organization with a few simple clicks or commands. Once enforced, these policies prevent non-compliant actions. The configuration defined in the declarative policy is maintained when AWS introduces new APIs and features or if there are changes to your organization such as addition of resources, principals and accounts.
- [**Backup policies**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html) allow you to centrally manage and apply backup plans to the AWS resources across an organization's accounts.
- [**Tag policies**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html) allow you to standardize the tags attached to the AWS resources in an organization's accounts.
- [**Chatbot policies**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_chatbot.html) allow you to control access to an organization's accounts from chat applications such as Slack and Microsoft Teams.
- [**AI services opt-out policies**](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_ai-opt-out.html) allow you to control data collection for AWS AI services for all the accounts in an organization.

### What is a Service Control Policy (SCP)?

### What does an SCP look like?

### If I attach an empty SCP to an AWS account, does that mean that I allow all AWS service actions in that AWS account?

### What are the effective permissions if I apply an SCP to my organization and my principals also have IAM policies?

### Can I simulate the effect of an SCP on an AWS account?

### Can I create and manage an organization without enforcing an SCP?

### What is a resource control policy (RCP)?

### What is a declarative policy?

### How should I think about declarative policies, SCPs, and RCPs together?

### What does an RCP look like?

For examples of RCPs, visit the [documentation](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html) pages. General examples of RCPs include:

- [*Enforce confused deputy protection*](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps_examples.html#example-rcp-confused-deputy)
- [Allow only HTTPS connections to your resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps_examples.html#example-rcp-enforce-ssl)
- [*Consistent Amazon S3 bucket policy controls*](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps_examples.html#example-rcp-consistent-bucket)

## Billing

[Open all](#)

### What does AWS Organizations cost?

### Who pays for usage incurred by users under an AWS member account in my organization?

### Will my bill reflect the organizational unit structure that I created in my organization?

## Integrated AWS Services

[Open all](#)

### Why should I enable an AWS service integrated with AWS Organizations?

### Which AWS services are currently integrated with AWS Organizations?

### How do I enable an AWS service integration?

## How to get started

[](/organizations/features/)

Features page

## Learn more about AWS Organizations

Visit the features page

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/management-and-governance/approved/images/391d8fad-690a-4e00-9793-5bca5a8c1ee0.5e986cd51301b01e1754430b4d99f30a752198b8.jpeg)

[](https://console.aws.amazon.com/console/home)

Getting started

## Ready to build?

Get started with AWS Organizations

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](/contact-us/)

Contact us

## Have more questions?

Contact us

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/cloud-financial-management/approved/images/4417ee43-7767-4554-aee8-940dc8b68009.a1d9a2d67bb55a24d79b5020745ca37b025a6772.jpeg)
