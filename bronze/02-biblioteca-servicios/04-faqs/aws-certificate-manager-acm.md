[Skip to main content](#aws-page-content-main)

AWS Certificate Manager

- [Overview](/certificate-manager/?nc=sn&loc=1)
- [Features](/certificate-manager/features/?nc=sn&loc=2)
- [Pricing](/certificate-manager/pricing/?nc=sn&loc=3)
- [Getting Started](/certificate-manager/getting-started/?nc=sn&loc=4)
- [Resources](/certificate-manager/resources/?nc=sn&loc=5)
- More

# AWS Certificate Manager FAQs

- [General](#general--fl8aft)
  10
- [ACM Certificates](#acm-certificates--fl8aft)
  18
- [ACM Public Certificates](#acm-public-certificates--fl8aft)
  11
- [Provision Public Certificates](#provision-public-certificates--fl8aft)
  8
- [DNS Validation](#dns-validation--fl8aft)
  19
- [Email Validation](#email-validation--fl8aft)
  6
- [Private Key Protection](#private-key-protection--fl8aft)
  2
- [Managed Renewal and Deployment](#managed-renewal-and-deployment--fl8aft)
  9
- [Logging](#logging--fl8aft)
  2
- [Billing](#billing--fl8aft)
  1
- [AWS Private Certificate Authority](#aws-private-certificate-authority--fl8aft)
  1

## General

[Open all](#)

### What is AWS Certificate Manager?

### What is an SSL/TLS certificate?

### What are private certificates?

### What is the difference between public and private certificates?

### How can I use exportable public certificates?

### What are the benefits of using AWS Certificate Manager (ACM)?

### What types of certificates can I manage with ACM?

### How can I get started with ACM?

### What AWS services can I use ACM certificates with?

### In what Regions is ACM available?

## ACM Certificates

[Open all](#)

### What types of certificates does ACM manage?

### Can ACM provide certificates with multiple domain names?

### What is a wildcard domain name?

### Can ACM provide certificates with wildcard domain names?

### Does ACM provide certificates outside of SSL/TLS?

### Can I use ACM certificates for code signing or email encryption?

### Does ACM provide certificates used to sign and encrypt email (S/MIME certificates)?

### What is the validity period for ACM certificates?

### Will ACM support shorter validity lifetimes for public certificates?

Yes, AWS Certificate Manager (ACM) will provide shorter validity lifetimes for public certificates to align with the Certificate Authority/Browser Forum (CA/Browser Forum) requirements for TLS certificates. ACM already offers automatic handling of certificate renewals and capabilities to notify you when new certificates are ready for deployment.  Amazon Trust Services is an active participant in the CA/Browser Forum where the standards for publicly trusted TLS certificates are set. To meet CA/Browser Forum requirements, [Amazon Trust Services](https://www.amazontrust.com/repository/) will enforce a maximum certificate lifetime of a TLS certificate on the following schedule:

- From today until March 15, 2027, the maximum lifetime for a public TLS certificate issued will be 198 days. This is a reduction from the previous lifetime of 395 days.
- As of March 15, 2027, the maximum lifetime for a public TLS certificate issued will be less than 100 days.
- As of March 15, 2029, the maximum lifetime for a public TLS certificate issued will be less than 47 days.

 

### What will be the pricing for shorter validity certificates?

### What algorithms do ACM-issued certificates use?

### How do I revoke a certificate?

### Can I use the same ACM certificate in more than one AWS Region?

### Can I provision a certificate with ACM if I already have a certificate from another provider for the same domain name?

### Can I use certificates on Amazon EC2 instances or on my own servers?

### Does ACM allow local language characters in domain names, otherwise known as Internationalized Domain Names (IDNs)?

### Which domain name label formats does ACM allow?

### Can I import a third-party certificate and use it with AWS services?

## ACM Public Certificates

[Open all](#)

### What are public certificates?

### What type of public certificates does ACM provide?

### Are ACM public certificates trusted by browsers, operating systems, and mobile devices?

### How can I confirm that my browser trusts ACM public certificates?

### Does ACM provide public Organizational Validation (OV) or Extended Validation (EV) certificates?

### Where does Amazon describe its policies and practices for issuing public certificates?

### Will a certificate for www.example.com also work for example.com?

### How can ACM help my organization meet my compliance requirements?

### Does ACM have a service level agreement (SLA)?

### Does ACM provide a secure site seal or trust logo that I can display on my web site?

### Does Amazon allow its trademarks or logo to be used as a certificate badge, site seal, or trust logo?

## Provision Public Certificates

[Open all](#)

### How can I provision a public certificate from ACM?

### Why does ACM validate domain ownership for public certificates?

### How does ACM validate domain ownership before issuing a public certificate for a domain?

### Which validation method should I use for my public certificate: DNS, email, or HTTP?

### Can I convert an existing public certificate from email validation to DNS validation?

### How long does it take for a public certificate to be issued?

### What happens when I request a public certificate?

### Does ACM check DNS Certificate Authority Authorization (CAA) records before issuing public certificates?

## DNS Validation

[Open all](#)

### What is DNS validation?

### What are the benefits of DNS validation?

### Who should use DNS validation?

### Does ACM still support email validation?

### What records do I need to add to my DNS configuration to validate a domain?

### How can I add or modify DNS records for my domain?

### Can ACM simplify DNS validation for Amazon Route 53 DNS customers?

### Does DNS Validation require me to use a specific DNS provider?

### How many DNS records do I need if I want more than one certificate for the same domain?

### Can I validate multiple domain names with the same CNAME record?

### Can I validate a wildcard domain name using DNS validation?

### How does ACM construct CNAME records?

### Can I validate all subdomains of a domain using one CNAME record?

### Why does ACM use CNAME records for DNS validation instead of TXT records?

### Does DNS validation work across AWS Regions?

### Can I choose different validation methods in the same certificate?

### How do I renew a certificate validated with DNS validation?

### Can I revoke permission to issue certificates for my domain?

### What happens if I remove the CNAME record?

## Email Validation

[Open all](#)

### What is email validation?

### When I request a certificate and choose email validation, to which email addresses is the certificate approval request sent?

### Can I configure the email addresses to which the certificate approval request is sent?

### Can I use domains that have proxy contact information (such as Privacy Guard or WhoisGuard)?

### Can ACM validate my identity using the technical contact for my AWS account?

### What should I do if I did not receive the approval email?

## Private Key Protection

[Open all](#)

### How are the private keys of ACM-provided certificates managed?

### Does ACM copy certificates across AWS Regions?

## Managed Renewal and Deployment

[Open all](#)

### What is ACM managed renewal and deployment?

### What are the benefits of using ACM managed renewal and deployment?

### Which ACM certificates can be renewed and deployed automatically?

### When does ACM renew certificates?

### Will I be notified before my certificate is renewed and the new certificate is deployed?

### Can ACM renew public certificates containing bare domains, such as “example.com” (also known as zone apex or naked domains)?

### Does my site drop existing connections when ACM deploys the renewed certificate?

### Can I use the same certificate with multiple Elastic Load Balancing load balancers and multiple CloudFront distributions?

### Can I use public certificates for internal Elastic Load Balancing load balancers with no public internet access?

## Logging

[Open all](#)

### Can I audit the use of certificate private keys?

### What logging information is available from AWS CloudTrail?

## Billing

[Open all](#)

### How will I be charged and billed for my use of ACM certificates?

## AWS Private Certificate Authority

[Open all](#)

### Where can I find information about AWS Private CA?

## Next steps

[](/private-ca/)

AWS Solution

## Learn more about AWS Private Certificate Authority

Visit the page

[](https://console.aws.amazon.com/acm/home)

Console

## Get started building with AWS Certificate Manager in the AWS Management Console

Start building in the console
