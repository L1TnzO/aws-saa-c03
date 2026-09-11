> **BRONZE Markdown** — `NET-14` · Servicio: **Amazon CloudFront** · Fase 2 · Dominios examen: D2, D3, D4
> URL oficial: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html
> Título oficial: What is Amazon CloudFront? - Amazon CloudFront

Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content,
such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through
a worldwide network of data centers called edge locations. When a user requests content that
you're serving with CloudFront, the request is routed to the edge location that provides the
lowest latency (time delay), so that content is delivered with the best possible
performance.

- If the
content is already in the edge location with the lowest latency, CloudFront delivers it immediately.
- If the content is not in that edge location, CloudFront retrieves it from an origin that you've
defined—such as an Amazon S3 bucket, a MediaPackage channel, or an HTTP server (for example, a web server)
that you have identified as the source for the definitive version of your content.

As an example, suppose that you're serving an image from a
traditional web server, not from CloudFront. For example, you might serve an image, sunsetphoto.png,
using the URL `https://example.com/sunsetphoto.png`.

Your users can easily navigate to this URL and see the image. But they probably don't know that
their request is routed from one network to another—through the complex collection of
interconnected networks that comprise the internet—until the image is found.

CloudFront speeds up the distribution of your content by routing each user request through the
AWS backbone network to the edge
location that can best serve your content. Typically, this is a CloudFront edge server that
provides the fastest delivery to the viewer. Using the AWS network dramatically reduces the number of
networks that your users' requests must pass through, which improves performance. Users get lower
latency—the time it takes to load the first byte of the file—and higher data transfer rates.

You also get increased reliability and availability because copies of your files (also known as
*objects)* are now held (or cached) in multiple edge locations around the world.

###### Topics

- How you set up CloudFront to deliver content (#HowCloudFrontWorksOverview)
- Choose between standard distribution or multi-tenant distribution (#choose-standard-or-multi-tenant)
- Pricing (#pricing)
- Ways to use CloudFront (./IntroductionUseCases.html)
- How CloudFront delivers content (./HowCloudFrontWorks.html)
- Locations and IP address ranges of CloudFront edge servers (./LocationsOfEdgeServers.html)
- Using CloudFront with an AWS SDK (./sdk-general-information-section.html)
- CloudFront technical resources (#resources-cloudfront)

## How you set up CloudFront to deliver content

You create a CloudFront distribution to tell CloudFront where you want content to be delivered from, and the details
about how to track and manage content delivery. Then CloudFront uses computers—edge servers—that are
close to your viewers to deliver that content quickly when someone wants to see it or use it.

- ### On this page

How you set up CloudFront to deliver content (#HowCloudFrontWorksOverview)
- Choose between standard distribution or multi-tenant distribution (#choose-standard-or-multi-tenant)
- Pricing (#pricing)
- CloudFront technical resources (#resources-cloudfront)

#### Next topic:

Ways to use CloudFront
