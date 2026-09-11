[Skip to main content](#aws-page-content-main)

AWS Web Application Firewall

- [Overview](/waf/)
- Features
- [Pricing](/waf/pricing/)
- [Getting Started](/waf/getting-started/)
- [Resources](/waf/resources/)
- More

# AWS WAF FAQs

- [General](#general--jt348y)
  27
- [Managed Rules for AWS WAF](#managed-rules-for-aws-waf--jt348y)
  6
- [Protection packs](#protection-packs--jt348y)
  4
- [AWS WAF configuration](#aws-waf-configuration--jt348y)
  6
- [AWS WAF Fraud Control - Account Takeover Prevention](#aws-waf-fraud-control-account-takeover-prevention--jt348y)
  6
- [AWS WAF Fraud Control - Account Creation Fraud Prevention](#aws-waf-fraud-control-account-creation-fraud-prevention--jt348y)
  5
- [AWS WAF application layer (L7) DDoS protection ](#aws-waf-application-layer-l7-ddos-protection--jt348y)
  17
- [Bot Control](#bot-control--jt348y)
  7

## General

[Open all](#)

### What is AWS WAF?

### How does AWS WAF block or allow traffic?

### How does AWS WAF protect my web site or application?

### Can I use AWS WAF to protect web sites not hosted in AWS?

### Which types of events can AWS WAF help me to stop?

### Which bot mitigation capabilities are available with AWS WAF?

### Can I get a history of all AWS WAF API calls made on my account for security, operational or compliance auditing?

### Does AWS WAF support IPv6?

### Does IPSet match condition for an AWS WAF Rule support IPv6?

### Can I expect to see IPv6 address appear in the AWS WAF sampled requests where applicable?

### Can I use IPv6 with all AWS WAF features?

### What services does AWS WAF support?

### In what AWS Regions is AWS WAF available in?

### Is AWS WAF HIPAA eligible?

### How does AWS WAF pricing work? Are there any upfront costs?

### What is Rate-based Rule in AWS WAF?

### How does a Rate-based rule compare to a regular AWS WAF Rule?

### What does the Rate-based Rule cost?

### What are the use cases for the Rate-based Rule?

Here are some popular use cases customers can address with Rate-based rules:

- I want to block or count an IP address when that IP address exceeds the configured threshold rate (configurable in web requests per trailing 5 minute period)
- I want to know which IP address are currently being blocked because they exceeded the configured threshold rate
- I want IP addresses that have been added to the block list to be automatically removed when they are no longer violating the configured threshold rate
- I want to exempt certain high-traffic source IP ranges from being blocked by my Rate-based rules

### Are the existing matching conditions compatible with the Rate-base Rule?

### Can I use Rate-based rule to mitigate Web layer DDoS attacks?

### What visibility features does Rate-based Rules offer?

### Can I use Rate-based rule to limit access to a certain parts of my Webpage?

Yes. Here is an example. Suppose that you want to limit requests to the login page on your website. To do this, you could add the following string match condition to a rate-based rule:

- The Part of the request to filter on is “URI”.
- The Match Type is “Starts with”.
- A Value to match is “/login” (this need to be whatever identifies the login page in the URI portion of the web request)

Additionally, you would specify a Rate Limit of, say, 15,000 requests per 5 minutes. Adding this rate-based rule to a web ACL will limit requests to your login page per IP address without affecting the rest of your site.

### Can I exempt certain high-traffic source IP ranges from being blocked by my Rate-based Rule(s)?

### How accurate is your GeoIP database?

### How do I get started with AWS WAF?

### How do I monitor the effectiveness of my security rules?

## Managed Rules for AWS WAF

[Open all](#)

### What are Managed Rules for AWS WAF?

### How can I subscribe to Managed Rules through AWS Marketplace?

### Can I use Managed Rules along with my existing AWS WAF rules?

### Will Managed Rules add to my existing AWS WAF limit on number of rules?

### How can I disable a Managed Rule?

### How can I test a Managed Rule?

## Protection packs

[Open all](#)

### What is an AWS WAF protection pack?

### How are protection packs different than Managed Rules for AWS WAF?

### Do protection packs cost extra?

### Can I see what's inside a protection pack?

## AWS WAF configuration

[Open all](#)

### Can I configure custom error pages?

### How long does it take AWS WAF to propagate my rules?

### How can I see if my rules are working?

### How can I test my rules?

### How long are Real-Time Metrics and Sampled Web Requests stored?

### Can AWS WAF inspect HTTPS traffic?

## AWS WAF Fraud Control - Account Takeover Prevention

[Open all](#)

### What is Account Takeover Prevention?

### How does Account Takeover Prevention safeguard the credential under inspection?

### How does Account Takeover Prevention compare to Bot Control?

### How do I get started with Account Takeover Prevention and AWS WAF?

### What benefit does JavaScript SDK or Mobile SDK provide?

### How do I customize the default behavior of Account Takeover Prevention?

## AWS WAF Fraud Control - Account Creation Fraud Prevention

[Open all](#)

### What is account creation fraud prevention?

### How does ACFP relate to Account Takeover Protection (ATP)?

### How do I get started with Account Creation Fraud Prevention and AWS WAF?

### Does ACFP require SDK integration?

### How can I get visibility into the performance of ACFP?

## AWS WAF application layer (L7) DDoS protection

[Open all](#)

### What is AWS WAF application layer (L7) DDoS protection?

### Why should I use application layer (L7) DDoS protection?

### Which resources are protected by AWS WAF application layer (L7) DDoS protection?

### How long does baselining take?

### How can I monitor the DDoS events mitigated by AWS WAF application layer (L7) DDoS protection?

### How do I get started with AWS WAF application layer (L7) DDoS protection?

### Can I customize this AWS Managed Rule group?

### What are AWS WAF application layer (L7) DDoS protection sensitivity levels?

### How does AWS WAF application layer (L7) DDoS protection work with AWS Shield Advanced?

### How is this feature priced?

### Will this AWS Managed Rule group add to the WCU count in AWS WAF? If so, by how much?

### What is the billing cycle for AWS WAF?

### Is there a AWS WAF request limit?

### Are there any upfront or minimum usage commitments required?

### Can AWS WAF application layer (L7) DDoS protection be purchased standalone, or does it require an AWS Shield Advanced subscription?

### I am an AWS Shield Advanced customer; will my price increase with this feature?

### If a request triggers multiple AWS WAF rules and AWS Managed Rules, will I be charged multiple times?

## Bot Control

[Open all](#)

### What is web bot auth (WBA) support in AWS WAF?

### How does web bot auth work?

Web bot auth uses public-key cryptography to verify bot identity through three steps:  

1.  Signing: The bot attaches a digital signature to each HTTP request using its private key
2.  Verification: AWS WAF retrieves the bot's public key from a trusted directory and verifies the signature hasn't been tampered with
3.  Access Decision: Valid signatures allow the request as a "verified bot." Invalid or missing signatures can trigger additional verification (such as CAPTCHA) or be blocked based on your rules

This approach relies on two IETF draft specifications:  

- A directory protocol for bots to publish their public keys
- A signing protocol defining how bots attach cryptographic identity to HTTP requests

Because the signature is cryptographically bound to the request, it cannot be replayed or forged by malicious actors attempting to impersonate legitimate bots.

### What version of Bot Control is required for web bot auth support?

### What labels are available for web bot auth verification?

Bot Control managed rule version 4.0 and later supports web bot auth. The following labels are available:  

- verified: Bot provided valid web bot auth signature matching a known public key
- failed: Signature present but cryptographic verification failed (potential impersonation attempt)
- expired: Signature timestamp outside acceptable time window (replay event protection)
- unknown_bot: Valid signature format but from unrecognized bot identity

You can use these labels in custom rules to implement tiered access policies. For example, allow verified bots immediately, challenge unknown bots, and block failed verification attempts.

### What are the benefits of using web bot auth?

Web bot auth provides several advantages over traditional bot identification methods:  

- Security Benefits:
  - Cryptographic proof of identity - Cannot be spoofed like IP addresses or User-Agent strings
  - Protection against impersonation - Malicious actors cannot forge signatures without the bot's private key
  - Replay event prevention - Signatures include timestamps and are valid only for a limited time window
- Operational Benefits:
  - Reduced allowlist maintenance - No need to manually track and update IP ranges for legitimate bots
  - Lower false positive rates - Verified bots are definitively identified, reducing accidental blocks
  - Standardized approach - Based on IETF draft specifications for industry-wide interoperability

As major search engines and AI providers adopt web bot auth, you'll gain more reliable bot verification without increasing operational complexity.

### How can I monitor web bot auth verification activity?

You can track verification through several mechanisms:

- CloudWatch Metrics:
  - Create custom metrics for each WBA label (verified, failed, expired, unknown_bot)
  - Monitor trends in verification success rates over time
  - Set alarms for unusual spikes in failed verifications (potential event indicators)
- AWS WAF Logs:
  - WBA labels appear in request logs alongside other Bot Control labels
  - Filter logs by label to analyze traffic patterns from verified vs. unverified bots
  - Export to Amazon S3 or stream to Amazon Kinesis for long-term analysis
- Sampled Requests:
  - View real-time examples of web bot auth-labeled requests in the AWS WAF console
  - Inspect request headers and signatures for troubleshooting

We recommend establishing baseline metrics during the initial rollout to understand current WBA adoption rates among your bot traffic.

### Are all bots currently using web bot auth signatures?

No. Web bot auth adoption requires two steps, and both are still in early stages:  

1.  Bot Implementation: Bot operators must implement the WBA IETF draft specification to sign their requests with cryptographic signatures
2.  AWS Registration: Bot operators must register their public keys with AWS WAF before their signatures can be verified

Current testing shows that even major bots are mostly not sending WBA signatures yet. Additionally, bots that have implemented WBA must complete the registration process before AWS WAF can verify their signatures. As major AI providers and search engines adopt WBA and complete registration, verified bot traffic will increase over time.

## Get started with AWS WAF

[](/waf/pricing/?nc=nsb&pg=faq)

None

## Learn more about AWS WAF pricing

Visit the pricing page

[](https://console.aws.amazon.com/wafv2/homev2/)

None

## Ready to build?

Get started with AWS WAF
