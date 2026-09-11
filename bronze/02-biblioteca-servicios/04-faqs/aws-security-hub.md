[Skip to main content](#aws-page-content-main)

AWS Security Hub

- [Overview](/security-hub/?nc=sn&loc=1)
- Services
- [Features](/security-hub/features/?nc=sn&loc=2)
- [FAQ](/security-hub/faqs/)
- Pricing
- More

# Security Hub FAQs

- [General](#general--7oj3fi)
  9
- [Security Hub](#security-hub--7oj3fi)
  21
- [Security Hub CSPM](#security-hub-cspm--7oj3fi)
  19

## General

[Open all](#)

### What is AWS Security Hub?

### What is AWS Security Hub CSPM?

### How has Security Hub evolved?

### What's changed between Security Hub preview and general availability (GA)?

### What are the key benefits of Security Hub?

- **Unified security operations:** Gain broader visibility across your cloud environment through centralized management in a unified cloud security solution.
- **Confident prioritization:** Make informed decisions about your critical security issues through automated correlation and enhanced risk context. 
- **Actionable security insights:** Gain actionable insights through near real- time risk analytics, including threat trends and exposure summaries, to surface security risks specific to your environment.
- **Streamlined response at scale:** Reduce response times with automated workflows and native ticketing system integration to help protect your cloud environment.
- **Continuous security monitoring:** Detect deviations from security best practices with automated security checks against industry standards and AWS best practices.

### How do Security Hub and Security Hub CSPM compare?

### Can I use both Security Hub and Security Hub CSPM simultaneously in my account?

### How does the enhanced Security Hub change my security operations?

### What is the Security Hub streamlined pricing model?

## Security Hub

[Open all](#)

### How can I deploy Security Hub in my environment?

You have two deployment approaches:

Unified security solution (recommended): At general availability (GA), Security Hub provides a unified enablement process and the ability to manage your preferences across multiple AWS Regions and accounts from a single unified console.

- Enable Security Hub with its essential services:
- Security Hub CSPM for posture management
- Amazon Inspector for vulnerability management (Amazon EC2 scanning, Amazon ECR container scanning, and AWS Lambda standard scanning)
- Amazon GuardDuty for threat detection

Individual approach: Use security services independently while managing security findings separately. While this allows for targeted use cases, you'll need to manually correlate findings to identify and prioritize critical security risks. New features in the enhanced Security Hub such as exposure findings, trends, real-time risk analytics, and automated correlation analysis require the essential services (Security Hub CSPM and Amazon Inspector) to be enabled. Without these essential services, you won't be able to benefit from these security features. Choose the approach that best fits your specific security needs and preferences. However, the unified solution is recommended as it provides automated correlation and enhanced context across security signals, helping you prioritize and respond to security risks at scale.

### What are the enablement requirements for Security Hub at General Availability (GA)?

### Is Security Hub a regional or global service?

### Do I need to have AWS Config enabled if I use Security Hub?

### Will Security Hub replace the consoles of our other security services, such as GuardDuty, Amazon Inspector, or Macie?

### How can Security Hub prioritize the security data that I need the most?

### What is an exposure finding in Security Hub?

### How is Security Hub exposure finding severity calculated?

### How does Security Hub help identify potential attack paths?

### What types of AI assets does Security Hub AI inventory discover?

### Do I need to enable anything to use AI inventory?

### How does Security Hub help with security-focused resource inventory?

### What trends and analysis capabilities does Security Hub provide?

### How does Security Hub streamline response workflows? 

### How do I differentiate between findings from Security Hub and Security Hub CSPM?

Findings differ between Security Hub and Security Hub CSPM in four key aspects: their sources, types, format, and event delivery.

- Sources of findings: Security Hub receives findings from Security Hub CSPM (findings from security checks), Amazon GuardDuty, Amazon Inspector, and Amazon Macie. Security Hub CSPM receives findings from several AWS services such as AWS Config, AWS WAF, Amazon GuardDuty, Amazon Inspector, third-party Partner tools, and your custom findings.
- Types of findings: While both receive findings from integrated security services, the enhanced Security Hub also generates exposure findings by correlating security signals from AWS Security Hub CSPM, Amazon Inspector, and Amazon Macie to identify critical security risks. These exposure findings provide enhanced context through automated correlation across multiple security signals.
- Format of findings: The enhanced Security Hub uses the OCSF ([Open Cybersecurity Schema Framework](https://github.com/ocsf)) format, while Security Hub CSPM uses the ASFF (AWS Security Finding Format). This difference in format reflects their distinct approaches to security finding management and analysis.
- Event delivery: Security Hub CSPM findings will come through Amazon EventBridge with a detail type of "Security Hub Findings – Imported." Security Hub findings will come through EventBridge with a detail type of "Findings Imported V2."

### Will findings from partner tools be available in the enhanced Security Hub?

### Are all my AWS resources displayed in the resource list view within Security Hub?

### How can Security Hub integrate with my existing security operations and remediation processes?

### Can I have two different Delegated Administrator accounts for Security Hub and Security Hub CSPM?

The ability to have different Delegated Administrators in Security Hub depends on your current configuration. Here are the different scenarios:

- If Security Hub CSPM has defined the Delegated Administrator account as the organization management account then Security Hub can set the Delegated Administrator account to an account of your choosing.
- If Security Hub CSPM does not have a Delegated Administrator account defined then Security Hub can set the Delegated Administrator to an account of your choosing.
- If Security Hub CSPM has defined the Delegated Administrator account as an account other than the organization management account then Security Hub will automatically set the Delegated Administrator account to the same account as Security Hub CSPM. Any changes to the Delegated Administrator account for either service will apply to both services.

To maintain consistent governance and least-privileged access control, we recommend using the same Delegated Administrator for all security capabilities including Security Hub, Security Hub CSPM, GuardDuty, Amazon Inspector, and Macie.

### Can I use central configuration to enable Security Hub?

### If I create automation rules in Security Hub CSPM, will they automatically be applied to Security Hub or vice-versa?

## Security Hub CSPM

[Open all](#)

### What is Cloud Security Posture Management (CSPM)?

### How do I enable Security Hub CSPM?

### What is an insight?

### What is a security standard vs. a control vs. a security check?

### What is the AWS Foundational Security Best Practices standard?

### Do both Security Hub CSPM and AWS Config conformance packs support continuous monitoring?

### How are AWS Config and AWS Config rules related to Security Hub CSPM?

### When do I use Security Hub CSPM and AWS Config conformance packs?

### When do I use AWS Systems Manager and Security Hub CSPM?

### How is AWS Control Tower different from Security Hub CSPM?

### What findings sources does Security Hub CSPM analyze?

### I'm currently using Security Hub CSPM (previously known as Security Hub). What do I need to do to adopt the new, unified Security Hub?

### Can I continue using Security Hub CSPM if my primary need is security posture management? 

### Can Security Hub CSPM tell me how I measure against security best practices or security standards?

### If I score 100% on a security standard, does that mean that I will pass an audit for that security standard?

### Can I customize the checks that Security Hub CSPM runs?

### What are the specific CIS AWS Foundations benchmark controls that Security Hub CSPM supports?

### What are the specific controls of PCI DSS that Security Hub CSPM supports?

### Can I use both Security Hub and Security Hub CSPM simultaneously in my account?

## How to get started

[](https://console.aws.amazon.com/securityhub/v2/home)

### Get started with Security Hub in the console

Sign in to the console

[](/security-hub/faqs/)

FAQs

### Browse Security Hub FAQ's

Go to FAQ
