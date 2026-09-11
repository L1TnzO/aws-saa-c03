[Skip to main content](#aws-page-content-main)

AWS CloudHSM

- [Overview](/cloudhsm/)
- [Features](/cloudhsm/features/)
- [Pricing](/cloudhsm/pricing/)
- [Getting Started](/cloudhsm/getting-started/)
- [Resources](/cloudhsm/resources/)
- More

# AWS CloudHSM FAQs

- [General](#general--k6o0on)
  12
- [Billing](#billing--k6o0on)
  4
- [Provisioning and operations](#provisioning-and-operations--k6o0on)
  8
- [Security and Compliance](#security-and-compliance--k6o0on)
  16
- [Performance and capacity](#performance-and-capacity--k6o0on)
  2
- [3rd Party Integrations](#3rd-party-integrations--k6o0on)
  2
- [AWS CloudHSM client, API and SDK](#aws-cloudhsm-client-api-and-sdk--k6o0on)
  7
- [Migrating to CloudHSM](#migrating-to-cloudhsm--k6o0on)
  3
- [Support and maintenance](#support-and-maintenance--k6o0on)
  2

## General

[Open all](#)

### What is AWS CloudHSM?

### What is a Hardware Security Module (HSM)?

### What can I do with AWS CloudHSM?

### How does CloudHSM work?

### I don’t currently have a VPC. Can I still use AWS CloudHSM?

### Does my application need to reside in the same VPC as the CloudHSM Cluster?

### Does AWS CloudHSM work with on-premises HSMs?

### How can my application use AWS CloudHSM?

### Can other AWS services use AWS CloudHSM to store and manage keys?

### Can AWS CloudHSM be used to perform personal identification number (PIN) block translation or other cryptographic operations used with debit payment transactions?

### How do I get started with AWS CloudHSM?

### How do I terminate AWS CloudHSM service?

## Billing

[Open all](#)

### How will I be charged and billed for my use of the AWS CloudHSM service?

### Is there a Free Tier for the CloudHSM service?

### Do charges vary depending on how many users or keys I create on my HSM?

### Do you offer reserved instance pricing for AWS CloudHSM?

## Provisioning and operations

[Open all](#)

### Are there any prerequisites for using AWS CloudHSM?

### Do I need to manage the firmware on my HSM?

### How many HSMs should I have in my CloudHSM Cluster?

### Who is responsible for key durability?

### How do I set up a high availability (HA) configuration?

### How many HSMs can be contained in a CloudHSM Cluster?

### Can I back up the contents of my CloudHSM Cluster?

### Is there an SLA for AWS CloudHSM?

## Security and Compliance

[Open all](#)

### Do I share my AWS CloudHSM resources with other AWS customers?

### How does AWS manage the HSM without having access to my encryption keys?

### Can I monitor my HSM?

### What is the ‘entropy source’ (source of randomness) for AWS CloudHSM?

### What happens if someone tampers with the HSM hardware?

### What happens in case of failure?

### Could I lose my keys if a single HSM fails?

### Can Amazon recover my keys if I lose my credentials to my HSM?

### How do I know that I can trust AWS CloudHSM?

### Does the AWS CloudHSM service support FIPS 140-2 Level 3?

### Is AWS CloudHSM FIPS 140-3 certified?

### Can I get a history of all AWS CloudHSM API calls made from my account?

### Which events are not logged in AWS CloudTrail?

### Which AWS compliance initiatives include AWS CloudHSM?

### Why is FIPS 140-2 Level 3 important?

### How can I request compliance reports that include AWS CloudHSM in scope?

## Performance and capacity

[Open all](#)

### How many cryptographic operations per second can CloudHSM perform?

### How many keys can be stored in a CloudHSM Cluster?

## 3rd Party Integrations

[Open all](#)

### Does AWS CloudHSM support Amazon RDS Oracle TDE?

### Can I use AWS CloudHSM as a root of trust for other software?

## AWS CloudHSM client, API and SDK

[Open all](#)

### What is the AWS CloudHSM Client Library?

### Does the CloudHSM Client Library give AWS access to my CloudHSM Cluster?

### How can I download and get started with the AWS CloudHSM command line interface Tools?

### Do the CloudHSM CLI tools provide AWS with access to the contents of the HSM?

### On what operating systems can I use the CloudHSM Client Libary and CLI tools?

### What are the network connectivity requirements for using the CloudHSM command line interface tools?

### What can I do with the AWS CloudHSM API & SDK?

## Migrating to CloudHSM

[Open all](#)

### How should I plan my migration to AWS CloudHSM?

### How can I rotate my keys?

Your rotation strategy will depend on your type of application. Common examples are below.

- Private keys for signing: Generally, the private key on the HSM corresponds to an intermediate certificate, which is in turn signed by an offline enterprise root. You will rotate keys by issuing a new intermediate certificate. Create a [new private key and generate the corresponding CSR using OpenSSL](https://docs.aws.amazon.com/cloudhsm/latest/userguide/ssl-offload-import-or-generate-private-key-and-certificate.html) on AWS CloudHSM. Next, sign the CSR with the same offline enterprise root. You may have to register this new certificate with any partners who do not automatically verify the entire certificate chain. Moving forward, you would sign all new requests (such as for documents, code, or other certificates) with the new private key, corresponding to the new certificate. You can continue to verify signatures from the original private key using the corresponding public key. No revocation is necessary. This process is analogous to the process you would follow to retire or archive a signing key.
- Oracle Transparent Data Encryption: You can transfer your wallet by first switching from a hardware keystore (your original HSM) to a [software keystore](https://docs.oracle.com/database/121/ASOAG/configuring-transparent-data-encryption.htm#ASOAG10474), and then back to a [hardware keystore](https://docs.aws.amazon.com/cloudhsm/latest/userguide/oracle-tde-configure-database-and-generate-master-key.html) (AWS CloudHSM). *Note: If you are using Amazon RDS, see the above FAQ* [*“Does AWS CloudHSM support Amazon RDS Oracle TDE?”*](/cloudhsm/faqs/#tde)
- Symmetric key for envelope encryption: Envelope encryption refers to the key architecture where one key on the HSM encrypts/decrypts many data keys on the application host. You likely already have a key rotation process in place to go through and decrypt the data keys with the old wrapping key and re-encrypt them with the new wrapping key. The only difference during migration will be that the new wrapping key will be created and used on AWS CloudHSM instead of your original HSM. If you do not already have a key rotation tool and process in place, you will need to create one.

### What if I can't rotate my keys?

## Support and maintenance

[Open all](#)

### Does AWS CloudHSM have scheduled maintenance windows?

### I am having a problem with AWS CloudHSM. What do I do?

## Next steps

[](/cloudhsm/pricing/?nc=nsb&pg=ft)

Pricing

## See pricing examples and calculate your costs

Learn more about product pricing

[](https://console.aws.amazon.com/console/home)

Console

## Get started building with AWS CloudHSM in the AWS Console

Start building in the console
