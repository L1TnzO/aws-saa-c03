[Skip to main content](#aws-page-content-main)

# Amazon Elastic Transcoder FAQs

On November 13, 2025, AWS will discontinue support for Amazon Elastic Transcoder. After November 13, 2025, you will no longer be able to access the Amazon Elastic Transcoder console or Amazon Elastic Transcoder resources. For more information, see the migration blog post.

- [General](#general--1pos9zs)
  33
- [Format Support](#format-support--1pos9zs)
  30
- [Pricing](#pricing--1pos9zs)
  6
- [Security](#security--1pos9zs)
  8

## General

[Open all](#)

### What is Amazon Elastic Transcoder?

### What can I do with Amazon Elastic Transcoder?

### Why should I use Amazon Elastic Transcoder?

### How do I get started with Amazon Elastic Transcoder?

### How do I use Amazon Elastic Transcoder?

### What tools and libraries work with Amazon Elastic Transcoder?

### Can I use the AWS Management Console with Amazon Elastic Transcoder?

### How do I get my media files into Amazon S3?

### How do I retrieve my media files from Amazon S3?

### Can I use a Content Distribution Network (CDN) to distribute my media files?

### How long does it take to transcode a job?

### When will my job be ready?

### How many jobs are processed at once?

### How many jobs can I submit?

### Can I create multiple outputs per job?

### How do I generate clips?

### How do I stitch clips?

### What is a transcoding pipeline, what can I use it for, and how many can I have?

### What are transcoding presets?

### What do I do if none of your transcoding presets work for me?

### Why do I need to assign a role to a transcoding pipeline?

### How can I configure roles to be more restrictive?

### How do I use notifications?

### Why should I use notifications?

### Why does my job keep failing?

### How can I generate more than one thumbnail per job?

### Can I reserve a transcoder for my exclusive use?

### Do I need to pay license fees?

### Do you support live encoding?

### Are there limits to the service?

### How do I increase service limits?

### Where is Amazon Elastic Transcoder available?

### Can I pass metadata when creating a job?

## Format Support

[Open all](#)

### What input formats do you support?

### Where can I find a comprehensive list of support formats?

### When creating MP4 files, do you support "fast start"?

### Do you support Apple ProRes or digital cinematography formats?

### What video formats can I transcode into?

### What audio formats can I transcode into?

### How is album art supported for audio files?

### How do I create an audio file from a video file?

### Do you support surround sound formats?

### Do you support audio channel remapping?

### Can I generate XDCAM-compatible video?

### Do you support closed captions?

### Can you support multiple caption tracks?

### How do I create content for HLS output?

There are two steps:

1.  Create a transcoding job containing outputs for each variation using one of our supplied system presets or your own, based on the MPEG-2 TS container and H.264 and AAC codecs. The lowest rate stream should be an audio only stream.

2.  Specify that the transcoding job create a playlist that references the outputs. You should order your bit rates from lowest to highest, with the audio only stream last, since this order will be maintained in the generated playlist file. Once your transcoding job has completed, the output bucket will contain a proper arrangement of your master and individual M3U8 playlists, and MPEG-2 TS media stream fragments.

Note: When selecting the HLSv4 option, your outputs should be matched to audio-only and video-only presets. For system presets, these can be identified by words "Audio" or "Video" as part of their name. For example, “System preset: HLS Video – 600k,” would match with the HLSv4 option whereas "System preset: HLS – 600k,” would be used with the HLSv3 option.

### How do I create content for Smooth Streaming?

There are two steps:

1.  Create a transcoding job containing outputs for each variation using one of our supplied system presets or your own, based on the fragmented MP4 container and H.264 and AAC codecs.

2.  Specify that the transcoding job create a playlist that references the outputs. Once your transcoding job has completed, the output bucket specified by the transcoding pipeline will contain your manifest ISM file, client ISMC file, and fragmented MP4 media files.

### Q: How do I create content for MPEG-DASH streaming?

There are two steps:

1.  Create a transcoding job containing the video-only outputs (with the desired resolutions and bitrates) and the audio-only output using either the system presets or your own customized presets, based on the fragmented MP4 container with H.264 video and AAC audio.

2.  Create an MPEG-DASH playlist for the transcoding job by selecting MPEG-DASH as the Playlist Format. Specify the outputs that this playlist will reference. Once your transcoding job has completed, the output bucket specified by the transcoding pipeline will contain your manifest MPD file, and the fragmented MP4 media files.

### Should I use the HLSv3 or the HLSv4 option?

### Can I stream HLS directly from S3?

### Do I need a streaming server to deliver my Smooth Streaming content?

### Why is the codec parameter that I want to change not exposed by the API?

### What settings do I use to preserve the dimensions of my video?

### How do I scale my output to a specified width and set the height to preserve the aspect ratio of the source content?

### How do I limit the height or width of a video without stretching the output to fit my set limit while preserving the input aspect ratio?

### What settings should I use to create a preset that causes the output video to fill the screen without distortion, if necessary cropping some of the edges ("center cut")?

### What settings should I use to create a preset that causes the output video to fill the screen without cropping any image area, if necessary distorting the image ("squeeze" or "stretch")?

### How do I make my watermark scale with my video?

### How do I avoid distorting my watermark?

### What are the settings for placing my watermark over the active video region rather than over the matte?

### How do I use multiple watermarks?

### Can I generate NTSC or PAL outputs?

## Pricing

[Open all](#)

### How much does Amazon Elastic Transcoder cost to use?

### How are jobs charged?

### How are fractional minutes charged?

### Do you charge for failed jobs?

### Is it cheaper to use multiple outputs per job than to use separate jobs?

### Do your prices include taxes?

## Security

[Open all](#)

### Are my media assets secure?

### Can I set S3 permissions and storage options?

### Can I use encrypted input media files or encrypt my output files?

### Do you support DRM?

### Can I get a history of all Amazon Elastic Transcoder API calls made on my account for security, operational or compliance auditing?

### Do I need to setup AWS KMS before using the Elastic Transcoder encryption and DRM packaging features?

### Can I save the keys used to encrypt my HLS streams to S3?

### Can I rotate the keys used for HLS with AES-128 encryption?
