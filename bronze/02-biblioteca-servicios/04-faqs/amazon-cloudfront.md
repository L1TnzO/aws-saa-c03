[Skip to main content](#aws-page-content-main)

Amazon CloudFront

- [Overview](/cloudfront/)
- Features
- [Pricing](/cloudfront/pricing/)
- [Getting Started](/cloudfront/getting-started/)
- Resources
- More

# Amazon CloudFront FAQs

- [General](#general--ae5c1y)
  16
- [Flat-Rate Pricing Plans](#flat-rate-pricing-plans--ae5c1y)
  16
- [Edge locations](#edge-locations--ae5c1y)
  10
- [Embedded Points of Presence](#embedded-points-of-presence--ae5c1y)
  9
- [Compliance](#compliance--ae5c1y)
  4
- [HTTP, HTTP/2 and HTTP/3](#http-http2-and-http3--ae5c1y)
  13
- [Saas Manager](#saas-manager--ae5c1y)
  8
- [WebSocket](#websocket--ae5c1y)
  4
- [gRPC](#grpc--ae5c1y)
  5
- [Security](#security--ae5c1y)
  10
- [Mutual TLS (Viewer)](#mutual-tls-viewer--ae5c1y)
  7
- [Mutual TLS (Origin)](#mutual-tls-origin--ae5c1y)
  5
- [VPC origins](#vpc-origins--ae5c1y)
  7
- [Caching](#caching--ae5c1y)
  10
- [Streaming](#streaming--ae5c1y)
  4
- [Origin Shield](#origin-shield--ae5c1y)
  4
- [Anycast Static IPs](#anycast-static-ips--ae5c1y)
  9
- [BYOIP](#byoip--ae5c1y)
  1
- [Limits](#limits--ae5c1y)
  3
- [Logging and reporting](#logging-and-reporting--ae5c1y)
  11
- [CloudFront Functions](#cloudfront-functions--ae5c1y)
  13
- [Lambda@Edge](#lambdaedge--ae5c1y)
  3
- [Continuous Deployment](#continuous-deployment--ae5c1y)
  8
- [IPv6](#ipv6--ae5c1y)
  10
- [Billing (Pay-as-you-go)](#billing-pay-as-you-go--ae5c1y)
  10
- [CloudFront Security Savings Bundle](#cloudfront-security-savings-bundle--ae5c1y)
  11

## General

[Open all](#)

### What is Amazon CloudFront?

### What can I do with Amazon CloudFront?

Amazon CloudFront provides a simple API that lets you:

- Distribute content with low latency and high data transfer rates by serving requests using a network of edge locations around the world.
- Get started without negotiating contracts and minimum commitments.

### How do I get started with Amazon CloudFront?

### How do I use Amazon CloudFront?

To use Amazon CloudFront, you:

- For static files, store the definitive versions of your files in one or more origin servers. These could be Amazon S3 buckets. For your dynamically generated content that is personalized or customized, you can use Amazon EC2 – or any other web server – as the origin server. These origin servers will store or generate your content that will be distributed through Amazon CloudFront.
- Register your origin servers with Amazon CloudFront through a simple API call. This call will return a CloudFront.net domain name that you can use to distribute content from your origin servers via the Amazon CloudFront service. For instance, you can register the Amazon S3 bucket “bucketname.s3.amazonaws.com” as the origin for all your static content and an Amazon EC2 instance “dynamic.myoriginserver.com” for all your dynamic content. Then, using the API or the AWS Management Console, you can create an Amazon CloudFront distribution that might return “abc123.cloudfront.net” as the distribution domain name.
- Include the cloudfront.net domain name, or a CNAME alias that you create, in your web application, media player, or website. Each request made using the cloudfront.net domain name (or the CNAME you set-up) is routed to the edge location best suited to deliver the content with the highest performance. The edge location will attempt to serve the request with a local copy of the file. If a local copy is not available, Amazon CloudFront will get a copy from the origin. This copy is then available at that edge location for future requests.

### How does Amazon CloudFront provide higher performance?

### How does Amazon CloudFront lower my costs to distribute content over the Internet?

### How does Amazon CloudFront speed up my entire website?

### How is Amazon CloudFront different from Amazon S3?

### How is Amazon CloudFront different from traditional content delivery solutions?

### What types of content does Amazon CloudFront support?

### Does Amazon CloudFront work with non-AWS origin servers?

### How does Amazon CloudFront enable origin redundancy?

### Does Amazon CloudFront offer a Service Level Agreement (SLA)?

### Can I use the AWS Management Console with Amazon CloudFront?

### What tools and libraries work with Amazon CloudFront?

### Can I point my zone apex (example.com versus www.example.com) at my Amazon CloudFront distribution?

## Flat-Rate Pricing Plans

[Open all](#)

### What are CloudFront flat-rate pricing plans and are there any overage charges?

### How do flat-rate plans compare to pay-as-you-go pricing?

### What's included in each plan and what do they cost?

### Are there any features not supported by pricing plans?

### Do plan prices vary by region?

### Can I share a pricing plan across multiple distributions?

### Can I use flat-rate pricing plans to reduce my overall AWS costs?

### How many Free plans can I have?

### Do DDoS attacks count against my usage allowance?

### How can I optimize my usage allowance?

### How does the Free flat-rate Plan differ from the CloudFront Free Tier?

### Is there a minimum commitment for plans?

### Can I use pricing plans for some distributions and pay-as-you-go for others?

### How do I know how much of my usage allowance I’ve consumed?

### How do I get started with CloudFront flat-rate plans?

### Can flat-rate pricing plans be combined with other offers, promotions, or discounts?

## Edge locations

[Open all](#)

### What is CloudFront Regional Edge Cache?

### How does regional edge caching work?

### Is regional edge cache feature enabled by default?

### Where are the edge network locations used by Amazon CloudFront located?

### Can I choose to serve content (or not serve content) to specified countries?

### How accurate is your GeoIP database?

### Can I serve a custom error message to my end users?

### How long will Amazon CloudFront keep my files at the edge locations?

### How do I remove an item from Amazon CloudFront edge locations?

### Is there a limit to the number of invalidation requests I can make?

## Embedded Points of Presence

[Open all](#)

### What are CloudFront embedded Points of Presence (POPs)?

### How are CloudFront embedded POPs different from CloudFront POPs?

### Which workloads are best suited for CloudFront embedded POPs?

### Is there a separate charge for using embedded POPs?

### How can I get access to embedded POPs?

### Do I need to create a new CloudFront distribution specifically for CloudFront embedded POPs?

### Do I need to choose between CloudFront embedded POPs and CloudFront POPs?

### I am an ISP, how do I get started with adding embedded POPs to my network?

### I am an ISP, how do I manage embedded POPs in my network?

## Compliance

[Open all](#)

### Is Amazon CloudFront PCI compliant?

### Is Amazon CloudFront HIPAA eligible?

### Is Amazon CloudFront SOC compliant?

### How do I request an AWS SOC1, SOC 2, or SOC 3 Report?

## HTTP, HTTP/2 and HTTP/3

[Open all](#)

### What types of HTTP requests are supported by Amazon CloudFront?

### Does Amazon CloudFront cache POST responses?

### How do I use HTTP/2?

### What if my origin does not support HTTP/2?

### Does Amazon CloudFront support HTTP/2 without TLS?

### What is HTTP/3?

### What is QUIC?

### What are the key benefits of using HTTP/3 with Amazon CloudFront?

Customers are constantly looking to deliver faster and more secure applications for their end users. As internet penetration increases globally and more users come online via mobile and from remote networks, the need for improved performance and reliability is greater than ever. HTTP/3 enables this as it offers several performance improvements over previous HTTP versions:

1.  **Faster and reliable connections** - CloudFront uses 1-RTT for TLS handshake for HTTP/3 reducing the connection establishment time and a corresponding reduction in handshake failure compared to previous HTTP versions.
2.  **Better web performance** - CloudFront’s HTTP/3 implementation supports client-side connection migrations, allowing client applications to recover from poor connections with minimal interruptions. Unlike TCP, QUIC is not lossless making it better suited for congested networks with high packet loss. Also, QUIC allows faster re-connections during Wifi or cellular handoffs.
3.  **Security** - HTTP/3 offers more comprehensive security compared to previous versions of HTTP by encrypting packets exchanged during TLS handshakes. This makes inspection by middleboxes harder providing additional privacy, and reducing man-in-the-middle attacks. CloudFront's HTTP/3 support is built on top of s2n-quic and Rust, both with a strong emphasis on efficiency and performance.  
     

### How do I enable HTTP/3 on my CloudFront distributions?

### Do I need to make changes to my applications before enabling HTTP/3?

### What if my origin does not support HTTP/3?

### How do Amazon CloudFront's TLS security policies interact with HTTP/3?

### Is there a separate charge for enabling HTTP/3?

## Saas Manager

[Open all](#)

### What is CloudFront SaaS Manager?

### Who should use CloudFront SaaS Manager?

### How do I get started with CloudFront SaaS Manager?

### What are Multi-Tenant Distributions?

### What are Distribution Tenants?

A Distribution Tenant represents a specific domain using a multi-tenant distribution. It inherits the base configuration from the multi-tenant distribution and must have at least one domain or subdomain with valid a TLS certificate.  
Each Distribution Tenant can include the following customizations:

- Unique origin paths and/or origin domain names (defined through parameter values in the multi-tenant distribution)
- Custom TLS certificates
- Web ACL overrides
- Geo Restriction overrides  

###  I already have a certificate workflow with a Certificate Authority (CA), can I continue to use these certificates with CloudFront SaaS Manager?

### I have customers who use an apex domain to serve traffic, can I use those with CloudFront?

### Is there a separate charge for using CloudFront SaaS Manager?

## WebSocket

[Open all](#)

### What are WebSockets?

### How do I enable my Amazon CloudFront distribution to support the WebSocket protocol?

### When is a WebSocket connection established through Amazon CloudFront?

### Does Amazon CloudFront support secured WebSockets over TLS?

## gRPC

[Open all](#)

### What is gRPC?

### How do I enable my Amazon CloudFront distribution to support gRPC?

### When is gRPC communication used through Amazon CloudFront?

Amazon CloudFront communicates over gRPC when the following conditions are met:

1.  HTTP/2 is enabled on your distribution
2.  POST requests and gRPC are enabled on a cache behavior
3.  A client sends a “content-type” header with the value of “application/grpc” over an HTTP/2 connection

### What are the key benefits of using gRPC with Amazon CloudFront?

1.  Security - gRPC uses HTTP/2, which ensures traffic is end-to-end encrypted from the client to your origin servers. Additionally, when using gRPC, you get AWS Shield Standard at no additional cost and AWS WAF can be configured to helps protect gRPC traffic from attacks.
2.  Better performance - gRPC leverages a binary message format, called Protocol Buffers, which are smaller than traditional payloads, like JSON used with RESTful APIs. Parsing Protocol Buffers is less CPU-intensive because data is in a binary format which means that messages are exchanged faster. This results in better overall performance.
3.  Built-in streaming support - Streaming is a built-in part of the gRPC framework and supports both client-side and server-side streaming semantics. This makes it much simpler to build streaming services or clients. gRPC on CloudFront supports the following streaming combinations:
    - Unary (no streaming)
    - Client-to-server streaming
    - Server-to-client streaming
    - Bi-directional streaming

### Does CloudFront support gRPC over HTTP/3?

## Security

[Open all](#)

### Can I configure my CloudFront distribution to deliver content over HTTPS using my own domain name?

### What is Field-Level Encryption?

### I am already using SSL/ TLS encryption with CloudFront, do I still need Field-Level Encryption?

### What is the difference between SNI Custom SSL and Dedicated IP Custom SSL of Amazon CloudFront?

### What is Server Name Indication?

### Does CloudFront Integrate with AWS Certificate Manager?

### Does Amazon CloudFront support access controls for paid or private content?

### How can I safeguard my web applications delivered via CloudFront from DDoS attacks?

### How can I protect my web applications delivered via CloudFront?

### How should I secure my origins with CloudFront?

CloudFront offers two fully managed ways to protect your origins:

1.  Origin Access Control (OAC): [CloudFront Origin Access Control (OAC)](/blogs/networking-and-content-delivery/amazon-cloudfront-introduces-origin-access-control-oac/) is a security feature that restricts access to your [Amazon Simple Storage Service (S3)](/s3/) Origins, [AWS Elemental](/media-services/elemental/) Origins, and Lambda Function URLs, ensuring that only CloudFront can access the content.
2.  VPC origins: [CloudFront Virtual Private Cloud (VPC) origins](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) allows you to use Amazon CloudFront to deliver content from applications hosted in a VPC private subnet. You can use [Application Load Balancers (ALB)](/elasticloadbalancing/application-load-balancer/), [Network Load Balancers (NLB)](/elasticloadbalancing/network-load-balancer/), and [EC2 Instances](/ec2/) in private subnets as VPC origins with CloudFront

If CloudFront managed solutions don’t meet your use-case requirements, below are some of the alternative approaches available:

1.  Custom Origin Headers: With CloudFront, you can append custom headers to your incoming requests and then configure your origin to validate these specific header values, effectively limiting access to only those requests routed through CloudFront. This method creates an additional layer of authentication, significantly reducing the risk of unauthorized direct access to your origin.
2.  IP Allowlisting: You can configure your origin's security group or firewall to exclusively permit incoming traffic from CloudFront's IP ranges. AWS maintains and regularly updates these IP ranges for your convenience. For detailed information on implementing IP allowlisting, please consult our comprehensive documentation at: <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/LocationsOfEdgeServers.html#managed-prefix-list>. This resource provides step-by-step guidance on leveraging AWS's managed prefix lists for optimal security configuration.
3.  SSL/TLS Encryption: You can configure CloudFront to exclusively use HTTPS connections with your origin to achieve end-to-end data protection through encrypted communication between your CloudFront distribution and your origin.

## Mutual TLS (Viewer)

[Open all](#)

### What is CloudFront mutual TLS authentication?

### Who should use CloudFront mutual TLS authentication?

### What certificate authorities are supported with CloudFront mutual TLS authentication?

### What are Trust Stores with CloudFront?

### How does optional mode work and what are its benefits?

### Can I implement certificate revocation checking with CloudFront mutual TLS?

### Can I customize the outcome of my mTLS handshake?

## Mutual TLS (Origin)

[Open all](#)

### What is CloudFront origin mutual TLS authentication?

### Who should use CloudFront origin mutual TLS authentication?

### What certificate authorities are supported with CloudFront origin mutual TLS authentication?

### How does CloudFront origin mTLS work with AWS services?

### When should I use VPC origins versus origin mTLS for secure origin connectivity?

## VPC origins

[Open all](#)

### What is CloudFront Regional Edge Cache?

### Why should I use VPC origins?

### What are the key benefits of using VPC origins with Amazon CloudFront?

1.  Security - With VPC origins, you can enhance the security posture of your application by placing your load balancers and EC2 instances in private subnets, making CloudFront the sole ingress point. User requests go from CloudFront to the VPC origins over a private, secure connection, providing additional security for your applications.
2.  Management - VPC origins reduces the operational overhead required for secure CloudFront - Origin connectivity by allowing you to move your origins to private subnets with no public access, and without having to implement Access Control Lists, secret shared headers or other mechanisms to restrict access to origins. This makes it easy for you to secure their web applications, with CloudFront without having to invest in undifferentiated development work.
3.  Scalable and Performant - With VPC Origins, customers get to use CloudFront’s global edge locations and AWS backbone networks, enjoying similar scale and performance as other existing content delivery methods, while getting improved security posture. The solution streamlines security management while global application delivery for customers, making it easy to use CloudFront as the single front door for your applications.

### How does VPC origins work with AWS VPC Block Public Access?

### Which resources are supported for VPC origins?

### Is IPv6 supported for VPC origins?

### Does CloudFront support cross-account VPC origins?

## Caching

[Open all](#)

### Can I add or modify request headers forwarded to the origin?

### How does Amazon CloudFront handle HTTP cookies?

### How does Amazon CloudFront handle query string parameters in the URL?

### Can I specify which query parameters are used in the cache key?

### Is there a limit to the number of query parameters that can be whitelisted?

### What parameter types are supported?

### Does CloudFront support gzip compression?

### What is cache tag invalidation?

### Why should I use cache tag invalidation?

### How does cache tag invalidation differ from path-based invalidation?

## Streaming

[Open all](#)

### What is streaming? Why would I want to stream?

Generally, streaming refers to delivering audio and video to end users over the Internet without having to download the media file prior to playback. The protocols used for streaming include those that use HTTP for delivery such as Apple’s HTTP Live Streaming (HLS), MPEG Dynamic Adaptive Streaming over HTTP (MPEG-DASH), Adobe’s HTTP Dynamic Streaming (HDS) and Microsoft’s Smooth Streaming. These protocols are different than the delivery of web pages and other online content because streaming protocols deliver media in real time – viewers watch the bytes as they are delivered. Streaming content has several potential benefits for you and your end-users:

- Streaming can give viewers more control over their viewing experience. For instance, it is easier for a viewer to seek forward and backward in a video using streaming than using traditional download delivery.
- Streaming can give you more control over your content, as no file remains on the viewer's client or local drive when they finish watching a video.
- Streaming can help reduce your costs, as it only delivers the portions of a media file that viewers actually watch. In contrast, with traditional downloads, frequently the whole media file will be delivered to viewers, even if they only watch a portion of the file.

### Does Amazon CloudFront support video-on-demand (VOD) streaming protocols?

### Does Amazon CloudFront support live streaming to multiple platforms?

### What is Media-Quality Aware Resiliency?

## Origin Shield

[Open all](#)

### What is Origin Shield?

### When should I use Origin Shield?

### Which Origin Shield Region should I use?

### Is Origin Shield resilient and highly available?

## Anycast Static IPs

[Open all](#)

### Does CloudFront Anycast Static IP support IPv6?

### What are Anycast Static IPs?

### How can I enable Anycast Static IP on CloudFront?

### How many IP addresses will I receive when I enable CloudFront Anycast Static IP?

### Can I get CloudFront Anycast Static IPs for only a certain geographic region?

### What happens as CloudFront adds more edge locations to its network?

### How does Anycast Static IPs work with existing features and other AWS Services?

### Can I use the set of Anycast IP addresses for multiple distributions, or only a single distribution?

### What happens when I create a new distribution?

## BYOIP

[Open all](#)

### Can I bring my own IP address blocks for CloudFront to advertise?

## Limits

[Open all](#)

### Can I use Amazon CloudFront if I expect usage peaks higher than 150 Gbps or 250,000 RPS?

### Is there a limit to the number of distributions my Amazon CloudFront account may deliver?

### What is the maximum size of a file that can be delivered through Amazon CloudFront?

## Logging and reporting

[Open all](#)

### What logging capabilities are available with Amazon CloudFront?

1.  **Standard logs (access logs)** CloudFront standard logs provide detailed records about every request that's made to a distribution. These logs are useful for many scenarios, including security and access audits.
2.  **Real-time logs** CloudFront real-time logs provide information about requests made to a distribution, in real time (log records are delivered within seconds of receiving the requests). You can choose the *sampling rate* for your real-time logs—that is, the percentage of requests for which you want to receive real-time log records.
3.  **Logging edge functions**: You can use Amazon CloudWatch Logs to get logs for your edge functions, both Lambda@Edge and CloudFront Functions. You can access the logs using the CloudWatch console or the CloudWatch Logs API. For more information, see [Edge function logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/edge-functions-logs.html).
4.  **Logging service activity:** You can use AWS CloudTrail to log the CloudFront service activity (API activity) in your AWS account. CloudTrail provides a record of API actions taken by a user, role, or AWS service in CloudFront. Using the information collected by CloudTrail, you can determine the API request that was made to CloudFront, the IP address from which the request was made, who made the request, when it was made, and additional details. For more information, see [Logging Amazon CloudFront API calls using AWS CloudTrail](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/logging_using_cloudtrail.html).

### What log delivery destinations are available for CloudFront log delivery?

- CloudFront standard logs are delivered to the Amazon S3 bucket of your choice, Amazon CloudWatch logs and Amazon Data Firehose. For more information, see [Use standard logs (access logs).](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/standard-logging.html)
- CloudFront real-time logs are delivered to the data stream of your choice in Amazon Kinesis Data Streams. CloudFront charges for real-time logs, in addition to the charges you incur for using Kinesis Data Streams. For more information, see [Use real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html).
- CloudFront edge function logs (Lambda@Edge and CloudFront Functions) are delivered to Amazon CloudWatch logs

### What features are available with standard access logs?

### Is there a separate charge for enabling standard access log for CloudFront?

### Does Amazon CloudFront offer ready-to-use reports so I can learn more about my usage, viewers, and content being served?

### Can I tag my distributions?

### Can I get a history of all Amazon CloudFront API calls made on my account for security, operational or compliance auditing?

### Do you have options for monitoring and alarming metrics in real time?

### How do I determine the appropriate CloudFront logs for my use case?

### What are the different log destination options available?

### How many Kinesis shards do I need in Kinesis Data Stream?

Use the following steps to estimate the number of shards you need:

1.  Calculate (or estimate) the number of requests per second that your CloudFront distribution receives. You can use the CloudFront usage reports or the CloudFront metrics to help you calculate your requests per second.
2.  Determine the typical size of a single real-time log record. A typical record that includes all available fields is around 1 KB. If you’re not sure what your log record size is, you can enable real-time logs with a low sampling rate (for example, 1%), and then calculate the average record size using monitoring data in Kinesis Data Streams (total number of records divided by total incoming bytes).
3.  Multiply the number of requests per second (from step 1) by the size of a typical real-time log record (from step 2) to determine the amount of data per second that your real-time log configuration is likely to send to the Kinesis data stream.
4.  Using the data per second, calculate the number of shards that you need. A single shard can handle no more than 1 MB per second and 1,000 requests (log records) per second. When calculating the number of shards that you need, we recommend adding up to 25% as a buffer.

For example, assume your distribution receives 10,000 requests per second, and that your real-time log records size is typically 1 KB. This means that your real-time log configuration could generate 10,000,000 bytes (10,000 multiplied by 1,000), or 9.53 MB, per second. In this scenario you would need just 10 Kinesis shards. You should consider creating at least 12 shards to have some buffer.

## CloudFront Functions

[Open all](#)

### What is CloudFront Functions?

### How do I customize content with CloudFront Functions?

### What are the use cases for CloudFront Functions?

CloudFront Functions is ideal for lightweight, short-running functions like the following:

- **Cache key normalization**: You can transform HTTP request attributes (headers, query strings, cookies, even the relative path of the request URL) to create an optimal cache key, which can improve your cache hit ratio.
- **Header manipulation**: You can insert, modify, or delete HTTP headers in the request or response. For example, you can add HTTP strict transport security (HSTS) or cross-origin resource sharing (CORS) headers to every response.
- **URL redirects or rewrites**: You can redirect viewers to other pages based on information in the request, or redirect all request from one path to another.
- **Request authorization**: You can validate authorization tokens, such as JSON web tokens (JWT), by inspecting authorization headers or other request metadata.

### What is CloudFront KeyValueStore?

### What are the use cases for CloudFront KeyValueStore?

CloudFront KeyValueStore is ideal for frequent reads at the edge locations and infrequent updates such as :

- **Maintain URL rewrites and redirects: **Redirect users to a specific country site based on geo-location. Storing and updating these geo-based URLs in KeyValueStore simplifies the management of URLs.
- **A/B testing and feature flags**: Run experiments by assigning a percentage of traffic to a version of your website. You can update experiment weights without updating function code or your CloudFront distribution.
- **Access authorization:** Implement access control and authorization for the content delivered through CloudFront by creating and validating user-generated tokens, such as HMAC tokens or JSON web tokens (JWT), to allow or deny requests. 

### Is CloudFront Functions replacing Lambda@Edge?

### Should I use CloudFront Functions or Lambda@Edge?

### How does AWS keep CloudFront Functions secure?

### How do I know my CloudFront Function will execute successfully?

### How can I monitor a CloudFront Function?

### What is cache tag invalidation?

### Why should I use cache tag invalidation?

### How does cache tag invalidation differ from path-based invalidation?

## Lambda@Edge

[Open all](#)

### What is Lambda@Edge?

### How do I customize content with Lambda@Edge?

### What Lambda@Edge events can be triggered with Amazon CloudFront?

Your Lambda@Edge functions will automatically trigger in response to the following Amazon CloudFront events:

- **Viewer Request**: This event occurs when an end user or a device on the Internet makes an HTTP(S) request to CloudFront, and the request arrives at the edge location closest to that user.
- **Viewer Response**: This event occurs when the CloudFront server at the edge is ready to respond to the end user or the device that made the request.
- **Origin Request**: This event occurs when the CloudFront edge server does not already have the requested object in its cache, and the viewer request is ready to be sent to your backend origin webserver (e.g. Amazon EC2, or Application Load Balancer, or Amazon S3).
- **Origin Response**: This event occurs when the CloudFront server at the edge receives a response from your backend origin webserver.

## Continuous Deployment

[Open all](#)

### What is continuous deployment on CloudFront?

### How can I set up continuous deployment on CloudFront?

### How will I measure the results of continuous deployment?

### Can I use existing distributions?

### How does continuous deployment work with CloudFront Functions & Lambda@Edge?

### How do I use continuous deployment distributions with AWS CloudFormation?

### How does continuous deployment on CloudFront support session stickiness?

### How much does it cost?

## IPv6

[Open all](#)

### What is IPv6?

### What can I do with IPv6?

### Should I expect a change in Amazon CloudFront performance when using IPv6?

### Are there any Amazon CloudFront features that will not work with IPv6?

All existing features of Amazon CloudFront will continue to work on IPv6, though there are two changes you may need for internal IPv6 address processing before you turn on IPv6 for your distributions.

1.  If you have turned on the [Amazon CloudFront Access Logs feature](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html#BasicDistributionFileFormat), you will start seeing your viewer’s IPv6 address in the “c-ip” field and may need to verify that your log processing systems continue to work for IPv6.
2.  When you enable IPv6 for your Amazon CloudFront distribution, you will get IPv6 addresses in the ‘[X-Forwarded-For](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorS3Origin.html#RequestS3IPAddresses)’ header that is sent to your origins. If your origin systems are only able to process IPv4 addresses, you may need to verify that your origin systems continue to work for IPv6.

Additionally, if you use IP whitelists for Trusted Signers, you should use an IPv4-only distribution for your Trusted Signer URLs with IP whitelists and an IPv4 / IPv6 distribution for all other content. This model sidesteps an issue that would arise if the signing request arrived over an IPv4 address and was signed as such, only to have the request for the content arrive via a different IPv6 address that is not on the whitelist.

To learn more about IPv6 support in Amazon CloudFront, see “[IPv6 support on Amazon CloudFront](https://docs.aws.amazon.com/console/cloudfront/ipv6)” in the Amazon CloudFront Developer Guide.

### Does that mean if I want to use IPv6 at all I cannot use Trusted Signer URLs with IP whitelist?

### If I enable IPv6, will the IPv6 address appear in the Access Log?

### Can I disable IPv6 for all my new distributions?

### Are there any reasons why I would want to disable IPv6?

### I enabled IPv6 for my distribution but a DNS lookup doesn’t return any IPv6 addresses. What is happening?

### If I use Route 53 to handle my DNS needs and I created an alias record pointing to an Amazon CloudFront distribution, do I need to update my alias records to enable IPv6?

## Billing (Pay-as-you-go)

[Open all](#)

### What usage types are covered in the AWS free tier for Amazon CloudFront?

### If we sign-up for Consolidated Billing, can we get the AWS Free Tier for each account?

### What happens if my usage is in multiple regions, and I exceed the free tiers?

### How do I know how much I’ve used and if I’ve gone over the free usage tiers?

### Does the free tier apply to customers subscribed to CloudFront Security Savings bundle?

### How will I be charged for my use of Amazon CloudFront?

Amazon CloudFront charges are based on actual usage of the service in five areas: Data Transfer Out, HTTP/HTTPS Requests, Invalidation Requests, Real-time Log Requests, and Dedicated IP Custom SSL certificates associated with a CloudFront distribution.

With the [AWS Free Usage Tier](/free/), you can get started with Amazon CloudFront for free and keep your rates down as you grow your usage. All CloudFront customers receive 1 TB data transfer out and 10,000,000 HTTP and HTTPS Requests for Amazon CloudFront free of charge, even when these limits are exceeded. If 

- **Data Transfer Out to Internet**  
  You are charged for the volume of data transferred out from Amazon CloudFront edge locations, measured in GB. You can see the rates for Amazon CloudFront data transfer to the internet here. Note that your data transfer usage is totaled separately for specific geographic regions, and then cost is calculated based on pricing tiers for each area. If you use other AWS services as the origins of your files, you are charged separately for your use of those services, including for storage and compute hours. If you use an AWS origin (such as Amazon S3, Amazon EC2, and so on), effective December 1, 2014, **we do not charge for AWS data transfer out to Amazon CloudFront**. This applies to data transfer from all AWS Regions to all global CloudFront edge locations.
- **Data Transfer Out to Origin**  
  You will be charged for the volume of data transferred out, measured in GB, from the Amazon CloudFront edge locations to your origin (both AWS origins and other origin servers). You can see the rates for Amazon CloudFront data transfer to Origin [here](/cloudfront/pricing/).
- **HTTP/HTTPS Requests**  
  You will be charged for number of HTTP/HTTPS requests made to Amazon CloudFront for your content. You can see the rates for HTTP/HTTPS requests [here](/cloudfront/pricing/).
- **Invalidation Requests**  
  You are charged per path in your invalidation request. A path listed in your invalidation request represents the URL (or multiple URLs if the path contains a wildcard character) of the object you want to invalidate from CloudFront cache. You can request up to 1,000 paths each month from Amazon CloudFront at no additional charge. Beyond the first 1,000 paths, you will be charged per path listed in your invalidation requests. You can see the rates for invalidation requests [here](/cloudfront/pricing/).
- **Real-time log Requests**  
  Real-time logs are charged based on the number of log lines that are generated; you pay \$0.01 for every 1,000,000 log lines that CloudFront publishes to your log destination.
- **Dedicated IP Custom SSL**  
  You pay \$600 per month for each custom SSL certificate associated with one or more CloudFront distributions using the Dedicated IP version of custom SSL certificate support. This monthly fee is pro-rated by the hour. For example, if you had your custom SSL certificate associated with at least one CloudFront distribution for just 24 hours (i.e. 1 day) in the month of June, your total charge for using the custom SSL certificate feature in June will be (1 day / 30 days) \* \$600 = \$20. To use Dedicated IP Custom SSL certificate support, upload a SSL certificate and use the AWS Management Console to associate it with your CloudFront distributions. If you need to associate more than two custom SSL certificates with your CloudFront distribution, please include details about your use case and the number of custom SSL certificates you intend to use in the [CloudFront Limit Increase Form](/support/createCase?type=service_limit_increase&serviceLimitIncreaseType=cloudfront-distributions).

Usage tiers for data transfer are measured separately for each geographic region. The prices above are exclusive of applicable taxes, fees, or similar governmental charges, if any exist, except as otherwise noted.

### Does your prices include taxes?

### How much will the real-time logs cost me?

### How am I charged for 304 responses?

### Can I choose to only serve content from less expensive Amazon CloudFront regions?

## CloudFront Security Savings Bundle

[Open all](#)

### What is the CloudFront Security Savings Bundle?

### What types of usage are covered by a CloudFront Security Savings Bundle?

### How do I get started with a CloudFront Security Savings Bundle?

### What happens when my CloudFront Security Savings Bundle expires after the 1-year term?

### How does CloudFront Security Savings Bundle work with AWS Organizations/ Consolidated Billing?

### Can I have multiple CloudFront Security Savings Bundles active at the same time?

### How will the CloudFront Security Savings Bundle show up on my bill?

### Can I be notified if my usage exceeds my CloudFront Security Savings Bundle monthly commitment?

### What portion of my WAF bill is covered by the CloudFront Security Savings Bundle?

### What if I already have a custom pricing agreement for CloudFront, can I subscribe to the CloudFront Security Savings Bundle too?

### Can I subscribe to a CloudFront Security Savings Bundle via API?

## Get started

[](/cloudfront/getting-started/)

Getting started

## Learn how to get started with CloudFront for free

Visit the getting started page

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/0ecc02ef-9c29-4da9-8901-89866f339b2b.43893f92a65dabfe5aca9d988c1579046af15e7c.png)

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Getting started

## Ready to get started? Sign up

Sign up

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/639ddfa6-eb09-4561-a2e1-4d2d80814a15.384104a9cbba365b69f5f18d6d8f2ca025a13be3.jpeg)

[](https://pages.awscloud.com/GLOBAL-ln-GC-CloudFront-Sales-Inquiries-2021-interest.html)

Contact us

## Have more questions?

Contact us

![](https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/product-categories/networking/approved/images/2c50fb03-8156-4fb1-9937-1dfed809a9e2.a95880625757ad7557ef377c5654264464059a6b.jpeg)
