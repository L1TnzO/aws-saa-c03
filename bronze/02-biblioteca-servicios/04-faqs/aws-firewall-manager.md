[Skip to main content](#aws-page-content-main)

AWS Firewall Manager

- [Overview](/firewall-manager/)
- [Features](/firewall-manager/features/)
- [Pricing](/fis/pricing/)
- [FAQs](/fis/faqs/)

# AWS Firewall Manager FAQs

- [General](#general--c9ytoc)
  6
- [Enabling AWS Firewall Manager](#enabling-aws-firewall-manager--c9ytoc)
  9
- [Dashboard and Visibility](#dashboard-and-visibility--c9ytoc)
  3

## General

[Open all](#)

### What is AWS Firewall Manager?

### What are the key benefits of AWS Firewall Manager?

### What does AWS Firewall Manager configure?

### Which AWS resources can AWS Firewall Manager configure rules on?

Using AWS Firewall Manager, you can 

- Easily roll out AWS WAF rules across Application Load Balancer, API Gateways and Amazon CloudFront distributions. 
- You can create AWS Shield Advanced protections for your Application Load Balancers, ELB Classic Load Balancers, Elastic IP Addresses and CloudFront distributions. 
- You can configure new Amazon Virtual Private Cloud (VPC) security groups and audit any existing security groups for your Amazon EC2, Application Load Balancers (ALBs) and ENI resource types. 
- You can also deploy AWS Network Firewalls across accounts and VPCs in your organization.
- Finally, with AWS Firewall Manager, you can also associate Amazon Route 53 Resolver DNS Firewall rules across VPCs in your organization.
- You can configure new Amazon Virtual Private Cloud (VPC) network access control lists (ACLs) for your VPC subnets.

### How much does AWS Firewall Manager cost?

### In which regions is AWS Firewall Manager available?

## Enabling AWS Firewall Manager

[Open all](#)

### What are the prerequisites for AWS Firewall Manager?

There are three mandatory pre-requisites and one optional pre-requisite to use AWS Firewall Manager.

- **AWS Organizations** - Your accounts must be part of [AWS Organizations](/organizations/) and have enabled all features. See [AWS Organizations documentation](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html) for more details.
- **Set the AWS Firewall Manager Administrator Account** - Firewall Manager must be associated with the management account of your AWS organization or associated with a member account that has the appropriate permissions. The account that you associate with Firewall Manager is called the Firewall Manager administrator account. See the [documentation guide](https://docs.aws.amazon.com/waf/latest/developerguide/enable-integration.html) for more information.
- **Enable [AWS Config](/config/) on accounts** - Enable AWS Config for each member account in your organization. See [AWS Config documentation](https://docs.aws.amazon.com/config/latest/developerguide/gs-console.html).
- **Enable AWS Resource Access Manager (Optional)** - To enable Firewall Manager to centrally configure AWS Network Firewalls or associate Amazon Route 53 Resolver DNS Firewall rules across accounts and VPCs, you must first enable sharing of resources using [AWS Resource Access Manager](https://docs.aws.amazon.com/ram/latest/userguide/getting-started-sharing.html).

### How do I use AWS Firewall Manager?

- First, complete the prerequisites mentioned above.
- Second, create a policy type for AWS WAF, AWS Shield Advanced, VPC security group, AWS Network Firewall, or Amazon Route 53 Resolver DNS Firewall.
- Third, depending on the policy, specify the set of rules or protections. For example, for a policy for AWS WAF specify the rule groups (custom or managed) that you want to deploy across accounts. Similarly, for a VPC security group policy, reference the security group you want replicated in each resource within accounts. For AWS Network Firewall, specify the rule groups (stateful and stateless) that you want to deploy across VPCs in your accounts. For Amazon Route 53 Resolver DNS Firewall, specify the set of rules (rule groups) you want to associate with your VPCs in your accounts.
- Fourth, specify the scope of the policy by choosing the accounts, resource type and, optionally, resource tags, where you want the policy to be deployed.
- Finally, you can review and create the policy. Firewall Manager will automatically apply the rules and protections to all resources across accounts. Once complete, Firewall Manager also shows a compliance dashboard indicating any accounts/resources that are non-compliant and those that are compliant.

### Can I create a Firewall Manager policy but not remediate automatically?

Yes, you can configure a Firewall Manager policy in two modes –

- Automatic remediation, which allows you to automatically monitor for drift in policy and apply rules on non-compliant resources
- Manual remediation, which creates a new policy and the associated rules/protections in each account but does not enforce the rules on the resources in the account. After the policy is created with manual remediation, you can choose to take manual action for each local account, or at any point you can edit the policy to automatically remediate.

### How many accounts can AWS Firewall Manager manage?

### How many resources can AWS Firewall Manager manage?

### Can I create security policies across regions?

### Can I exclude accounts or resources from the scope of the policy?

### What is a Firewall Manager security policy?

### What is a Firewall Manager security policy?

## Dashboard and Visibility

[Open all](#)

### How can I view the compliance status to a particular policy?

### Does AWS Firewall Manager provide notifications when a resource is non-compliant?

### How can I view all threats across my organization?

## Get started with Firewall Manager

[](/documentation/firewall-manager/)

## Learn more about Firewall Manager

Read documentation

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/application-integration/approved/images/18cd7be9-f578-45f5-8e32-d7001adbbdb4.f0891ef6ca7e1235841c6e079381cbad35c37a12.jpeg)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

## Sign up for a free account

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/be6bb18c-e958-472e-be9e-f387d1b2ad33.d293c7a93885ac126615839263b22ccf0599834e.jpeg)
