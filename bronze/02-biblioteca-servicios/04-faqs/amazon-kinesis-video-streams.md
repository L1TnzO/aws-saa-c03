[Skip to main content](#aws-page-content-main)

Amazon Kinesis Video Streams

- [Overview](/kinesis/video-streams/)
- [Features](/kinesis/video-streams/features/)
- [Pricing](/kinesis/video-streams/pricing/)
- [Customers](/kinesis/video-streams/customers/)
- [Partners](/kinesis/video-streams/partners/)
- More

# Amazon Kinesis Video Streams FAQs

- [General](#general--1pznecc)
  4
- [Key concepts](#key-concepts--1pznecc)
  6
- [Publishing data to streams](#publishing-data-to-streams--1pznecc)
  5
- [Reading data from streams](#reading-data-from-streams--1pznecc)
  6
- [Playing back video from streams](#playing-back-video-from-streams--1pznecc)
  9
- [What is the Amazon Kinesis Video Streams Edge Agent](#what-is-the-amazon-kinesis-video-streams-edge-agent--1pznecc)
  1
- [Low-latency two-way media streaming with WebRTC](#low-latency-two-way-media-streaming-with-webrtc--1pznecc)
  8
- [Console](#console--1pznecc)
  3
- [Encryption](#encryption--1pznecc)
  3
- [Pricing and billing](#pricing-and-billing--1pznecc)
  4
- [Service Level Agreement](#service-level-agreement--1pznecc)
  2

## General

[Open all](#)

### What is Amazon Kinesis Video Streams?

### What is time-encoded data?

### What are common use cases for Kinesis Video Streams?

### What does Amazon Kinesis Video Streams manage on my behalf?

## Key concepts

[Open all](#)

### What is a video stream?

### What is a fragment?

### What is a producer?

### What is a consumer?

### What is a chunk?

### How do I think about latency in Amazon Kinesis Video Streams?

There are four key contributors to latency in an end-to-end media data flow.

- Time spent in the device’s hardware media pipeline: This pipeline can comprise of the image sensor and any hardware encoders as appropriate. In theory, this can be as little as a single frame duration. In practice it rarely is. All encoders in order to work effectively for media encoding (compression) will accumulate several frames to construct a fragment. This process and any corresponding motion compensation algorithms will add anywhere from one second to several seconds of latency on the device before the data is packaged for transmission.
- Latency incurred on actual data transmission on the internet: The quality of the network throughput and latency can vary significantly based on where the producing device is located.
- Latency added by the Kinesis Video Streams as it receives data from the producer device: The incoming data is made available immediately on the [GetMedia API operation](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_GetMedia.html) for any consuming application. If you choose to retain data, then Kinesis Video Streams will ensure that the data is encrypted using AWS Key Management Service (AWS KMS) and generate a time-based index on the individual fragments in the video stream. When you access this retained data using the [GetMediaforFragmentList API](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_reader_GetMediaForFragmentList.html), Kinesis Video Streams fetches the fragments from durable storage, decrypt the data, and make it available for the consuming application.
- Time latency on data transmission back to the consumer: There can be consuming devices on the internet or other AWS regions that request the media data. The quality of the network throughput and latency can vary significantly based on where the consuming device is located.

## Publishing data to streams

[Open all](#)

### How do I publish data to my Kinesis video stream?

### What is the Kinesis Video Streams PutMedia operation?

### What is the Kinesis Video Streams Producer SDK?

### In which programming platforms is the Kinesis Video Streams Producer SDK available?

### What should I be aware of before getting started with the Kinesis Video Streams producer SDK?

## Reading data from streams

[Open all](#)

### What is the GetMedia API?

### What is the GetMediaForFragmentList API?

### What is the ListFragments API?

### How long can I store data in Kinesis Video Streams?

### What is the Kinesis Video Streams parser library?

### If I have a custom processing application that needs to use the frames (and fragments) carried by the Kinesis video stream, how do I do that?

## Playing back video from streams

[Open all](#)

### How do I playback the video captured in my own application?

### How do I get started with Kinesis Video Streams HLS or DASH APIs?

### What are the basic requirements to use the Kinesis Video Streams HLS APIs?

An Amazon Kinesis video stream has the following requirements for providing data through HLS:

- The media must contain h.264 or h.265 encoded video and, optionally, AAC encoded audio. Specifically, the codec ID of track 1 should be V_MPEG/ISO/AVC for h.264 or V_MPEG/ISO/HEVC for h.265. Optionally, the codec ID of track 2 should be A_AAC.
- The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for h.264 format or HEVC for h.265 format ([MPEG-4 specification ISO/IEC 14496-15](https://www.iso.org/standard/55980.html)). For information about adapting stream data to a given format, see [NAL Adaptation Flags](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html).
- Data retention must be greater than 0.
- The audio track (if present) of each fragment must contain codec private data in the AAC format ([AAC specification ISO/IEC 13818-7](https://www.iso.org/standard/43345.html)).

### What are the basic requirements to use the Kinesis Video Streams DASH APIs?

An Amazon Kinesis video stream has the following requirements for providing data through DASH:

- The media must contain h.264 or h.265 encoded video and, optionally, AAC or G.711 encoded audio. Specifically, the codec ID of track 1 should be V_MPEG/ISO/AVC (for h.264) or V_MPEGH/ISO/HEVC (for H.265). Optionally, the codec ID of track 2 should be A_AAC (for AAC) or A_MS/ACM (for G.711).
- The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more information, see [MPEG-4 specification ISO/IEC 14496-15](https://www.iso.org/standard/55980.html). For information about adapting stream data to a given format, see [NAL Adaptation Flags](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html).
- Data retention must be greater than 0.
- The audio track (if present) of each fragment must contain codec private data in the AAC format ([AAC specification ISO/IEC 13818-7](https://www.iso.org/standard/43345.html)) or the [MS Wave](http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html) format.

### What are the available playback modes for HLS or DASH streaming in Kinesis Video Streams?

### What is the delay in the playback of video using the API?

### What are the relevant limits to using HLS or DASH?

### What’s the difference between Kinesis Video Streams and AWS Elemental MediaLive?

### Am I charged to use this capability?

## What is the Amazon Kinesis Video Streams Edge Agent

[Open all](#)

### What is the Amazon Kinesis Video Streams Edge Agent?

## Low-latency two-way media streaming with WebRTC

[Open all](#)

### What is WebRTC and how does Kinesis Video Streams support this capability?

### What does Amazon Kinesis Video Streams manage on my behalf to enable live media streaming with WebRTC?

### What can I build using Kinesis Video Streams WebRTC capability?

### How do I get started with Kinesis Video Streams WebRTC capability?

### What is a Signaling Channel?

### How do applications use a signaling channel to enable peer-to-peer connectivity?

### How do applications live stream peer-to-peer media when they are located behind a NAT or a firewall?

### How does Kinesis Video Streams secure the live media streaming with WebRTC?

## Console

[Open all](#)

### What is the Kinesis Video Streams management console?

### What media type does the console support?

### What is the delay in the playback of video on the Kinesis Video Streams management console?

## Encryption

[Open all](#)

### What Is Server-Side Encryption for Kinesis Video Streams?

### How do I get started with server-side encryption?

### How much does it cost to use server-side encryption?

## Pricing and billing

[Open all](#)

### Is Amazon Kinesis Video Streams available in AWS Free Tier?

### How much does Kinesis Video Streams cost?

### How does Kinesis Video Streams bill for data stored in streams?

### How am I charged for using Kinesis Video Streams WebRTC capability?

## Service Level Agreement

[Open all](#)

### What does the Amazon Kinesis Video Streams SLA guarantee?

### How do I know if I qualify for a SLA Service Credit?

## Next Steps

[](/kinesis/video-streams/pricing/)

Pricing

## Learn more about Amazon Kinesis Video Streams pricing

Visit the pricing page

[](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html)

Free tier

## Ready to get started?

Sign up
