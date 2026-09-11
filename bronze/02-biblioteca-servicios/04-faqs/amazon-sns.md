[Skip to main content](#aws-page-content-main)

Amazon SNS

- [Overview](/sns/)
- [Features](/sns/features/)
- [Pricing](/sns/pricing/)
- [Getting Started](/sns/getting-started/)
- [Resources](/sns/resources/)
- More

# Amazon SNS FAQs

- [Overview](#overview--13686x6)
  11
- [Billing](#billing--13686x6)
  4
- [Features and functionality](#features-and-functionality--13686x6)
  11
- [FIFO topics](#fifo-topics--13686x6)
  2
- [Transports](#transports--13686x6)
  9
- [Security](#security--13686x6)
  14
- [Compliance](#compliance--13686x6)
  2
- [Reliability](#reliability--13686x6)
  7
- [Worldwide SMS](#worldwide-sms--13686x6)
  24
- [SMS Pricing](#sms-pricing--13686x6)
  4
- [Quotas and restrictions](#quotas-and-restrictions--13686x6)
  4
- [Raw message delivery](#raw-message-delivery--13686x6)
  4
- [Mobile push notifications](#mobile-push-notifications--13686x6)
  38
- [SNS support for AWS Lambda](#sns-support-for-aws-lambda--13686x6)
  15
- [VoIP iOS and Mac OS notifications](#voip-ios-and-mac-os-notifications--13686x6)
  3

## Overview

[Open all](#)

### What is Amazon Simple Notification Service (Amazon SNS)?

### How can I get started using Amazon SNS?

### What are the benefits of using Amazon SNS?

### What are some example uses for Amazon SNS notifications?

### How does Amazon SNS work?

### How is Amazon SNS different from Amazon SQS?

### How is Amazon SNS different from Amazon MQ?

### How can I get started using Amazon SNS?

### Is Amazon SNS supported in the AWS Management Console?

### What are the Amazon SNS service access points in each region?

### Can I get a history of SNS API calls made on my account for security analysis and operational troubleshooting purposes?

## Billing

[Open all](#)

### How much does Amazon SNS cost?

### How will I be charged and billed for my use of Amazon SNS?

### When does billing of my Amazon SNS use begin and end?

### Do your prices include taxes?

## Features and functionality

[Open all](#)

### What is the format of an Amazon SNS topic?

### What are the available operations for Amazon SNS and who can perform these operations?

Amazon SNS provides a set of simple APIs to enable event notifications for topic owners, subscribers, and publishers.

**Owner operations:**

- CreateTopic – Create a new topic.

- DeleteTopic – Delete a previously created topic.

- ListTopics – List of topics owned by a particular user (AWS ID).

- ListSubscriptionsByTopic – List of subscriptions for a particular topic

- SetTopicAttributes – Set/modify topic attributes, including setting and modifying publisher/subscriber permissions, transports supported, etc.

- GetTopicAttributes – Get/view existing attributes of a topic

- AddPermission – Grant access to selected users for the specified actions

- RemovePermission – Remove permissions for selected users for the specified actions

**Subscriber operations:**

- Subscribe – Register a new subscription on a particular topic, which will generate a confirmation message from Amazon SNS

- ConfirmSubscription – Respond to a subscription confirmation message, confirming the subscription request to receive notifications from the subscribed topic

- UnSubscribe – Cancel a previously registered subscription

- ListSubscriptions – List subscriptions owned by a particular user (AWS ID)

**Publisher operations:**

- Publish: Publish a new message to the topic.

### Why are there two different APIs to list subscriptions?

The two APIs to list subscriptions perform different functions and return different results:

- The ListSubscriptionsByTopic API allows a topic owner to see the list of all subscribers actively registered to a topic.

- The ListSubscriptions API allows a user to get a list of all their active subscriptions (to one or more topics).

### What are the different delivery formats/transports for receiving notifications?

“SQS” – Users can specify an SQS standard or FIFO queue as the endpoint; Amazon SNS will enqueue a notification message to the specified queue (which subscribers can then process using SQS APIs such as ReceiveMessage, DeleteMessage, etc.).

- “HTTP”, “HTTPS” – Subscribers specify a URL as part of the subscription registration; notifications will be delivered through an HTTP POST to the specified URL.

- ”Email”, “Email-JSON” – Messages are sent to registered addresses as email. Email-JSON sends notifications as a JSON object, while Email sends text-based email.

- “SQS” – Users can specify an SQS standard queue as the endpoint; Amazon SNS will enqueue a notification message to the specified queue (which subscribers can then process using SQS APIs such as ReceiveMessage, DeleteMessage, etc.).

- “SMS” – Messages are sent to registered phone numbers as SMS text messages.

### Can topic owners control the transports that are allowed on topics they create/own?

### How does an owner set Access Control policies?

### Can a single topic support subscriptions over multiple protocols/transports?

### Can subscribers selectively receive only a subset of messages published to a topic?

### Can Amazon SNS be used with other AWS services?

### Is Amazon SNS available in all regions where AWS services are available?

### How soon can customers recreate topics with previously used topic names?

## FIFO topics

[Open all](#)

### What are SNS FIFO topics?

### When should I use SNS FIFO topics and when should I use Kinesis Data Streams?

## Transports

[Open all](#)

### How would a user subscribe for notifications to be delivered over email?

### Why does Amazon SNS provide two different transports to receive notifications over email?

### Can a user change the Subject and Display name for notifications sent over Email/Email-JSON?

### Do subscribers need to specifically configure their email settings to receive notifications from Amazon SNS?

### In the case of passing in an SQS queue as an endpoint, will users need to create the queue prior to subscribing? What permissions will the queue require?

### How would a developer setup an Amazon SQS queue to receive Amazon SNS notifications?

### How can I fanout identical messages to multiple SQS queues?

### What is the format of structured notification messages sent by Amazon SNS?

The notification message sent by Amazon SNS for deliveries over HTTP, HTTPS, Email-JSON and SQS transport protocols will consist of a simple JSON object, which will include the following information:

- MessageId: A Universally Unique Identifier, unique for each notification published.

- Timestamp: The time (in GMT) at which the notification was published.

- TopicArn: The topic to which this message was published

- Type: The type of the delivery message, set to “Notification” for notification deliveries.

- UnsubscribeURL: A link to unsubscribe the end-point from this topic, and prevent receiving any further notifications.

- Message: The payload (body) of the message, as received from the publisher.

- Subject: The Subject field – if one was included as an optional parameter to the publish API call along with the message.

- Signature: Base64-encoded “SHA1withRSA” signature of the Message, MessageId, Subject (if present), Type, Timestamp, and Topic values.

- SignatureVersion: Version of the Amazon SNS signature used.

Notification messages sent over the “Email” transport only contain the payload (message body) as received from the publisher.

### How would a user subscribe for notifications to be delivered over SMS?

## Security

[Open all](#)

### How can users secure the messages sent to my topics?

### Who can create a topic?

### Can multiple users publish to a single topic?

### How can the owner grant/revoke publish or subscribe permissions on a topic?

### How does a topic owner give access to subscribers? Do subscribers have to have valid AWS IDs?

Amazon SNS makes it easy for users with and without AWS IDs to receive notifications. The owner of the topic can grant/restrict access to subscribers by setting appropriate permissions for the topic using Access Control policies. Users can receive notifications from Amazon SNS in two ways:

- Users with AWS IDs: Subscribers with valid AWS IDs (please refer to this link for details on obtaining AWS IDs) can subscribe to any topic directly – as long as the topic owner has granted them permissions to do so. The AWS IDs will be validated as part of the subscription registration.

- Other users: Topic owners can subscribe and register end-points on behalf of users without AWS IDs.

In both cases, the owner of the subscription endpoint needs to explicitly opt-in and confirm the subscription by replying to confirmation message sent by Amazon SNS.

### How will Amazon SNS authenticate API calls?

### How does Amazon SNS validate a subscription request to ensure that notifications will not be sent to users as spam?

As part of the subscription registration, Amazon SNS will ensure that notifications are only sent to valid, registered subscribers/end-points. To prevent spam and ensure that a subscriber end-point is really interested in receiving notifications from a particular topic, Amazon SNS requires an explicit opt-in from subscribers using a 2-part handshake:

i\. When a user first calls the Subscribe API and subscribes an end-point, Amazon SNS will send a confirmation message to the specified end-point.

ii\. On receiving the confirmation message at the end-point, the subscriber should confirm the subscription request by sending a valid response. Only then will Amazon SNS consider the subscription request to be valid. If there is no response to the challenge, Amazon SNS will not send any notifications to that end-point. The exact mechanism of confirming the subscription varies by the transport protocol selected:

- For HTTP/HTTPS notifications, Amazon SNS will first POST the confirmation message (containing a token) to the specified URL. The application monitoring the URL will have to call the ConfirmSubscription API with the token included token.

- For Email and Email-JSON notifications, Amazon SNS will send an email to the specified address containing an embedded link. The user will need to click on the embedded link to confirm the subscription request.

- For SQS notifications, Amazon SNS will enqueue a challenge message containing a token to the specified queue. The application monitoring the queue will have to call the ConfirmSubscription API with the token.

Note: The explicit “opt-in” steps described above are not required for the specific case where you subscribe your Amazon SQS queue to your Amazon SNS topic – and both are “owned” by the same AWS account.

### How long will subscription requests remain pending, while waiting to be confirmed?

### Who can change permissions on a topic?

### How can users verify that notification messages are sent from Amazon SNS?

### Do publishers have to sign messages as well?

### Can a publisher/subscriber use SSL to secure messages?

### What permissions does a subscriber need to allow Amazon SNS to send notifications to a registered endpoint?

### How can subscriptions be unsubscribed?

Subscribers can be unsubscribed either by the topic owner, the subscription owner or others – depending on the mechanism used for confirming the subscription request.

- A subscription that was confirmed with the AuthenticateOnUnsubscribe flag set to True in the call to the ConfirmSubscription API call can only be unsubscribed by a topic owner or the subscription owner.

- If the subscription was confirmed anonymously without the AuthenticateOnUnsubscribe flag set to True, then it can be anonymously unsubscribed.

In all cases except when unsubscribed by the subscription owner, a final cancellation message will be sent to the end-point, allowing the endpoint owner to easily re-subscribe to the topic (if the Unsubscribe request was unintended or in error). For further details on the ConfirmSubscription API, please refer to the Amazon SNS documentation.

## Compliance

[Open all](#)

### Is Amazon SNS HIPAA eligible?

Yes, the AWS HIPAA compliance program includes Amazon SNS as a HIPAA eligible Service. If you have an executed Business Associate Agreement (BAA) with AWS, you can now use Amazon SNS to build HIPAA-compliant applications. If you don't have a BAA or have other questions about using AWS for your HIPAA-compliant applications, contact us for more information. Please note that Amazon SNS mobile push notification and SMS functionalities are outside the scope of the Service’s HIPAA eligibility and thus not suitable for transmitting Protected Health Information (PHI).

To learn more, see the following resources:

- [*AWS HIPAA Compliance page*](/compliance/hipaa-compliance/)

- [*AWS Cloud Computing in Healthcare page*](/health/)

To see the current list of compliance programs that Amazon SNS is in scope for, see [*AWS Services in Scope by Compliance Program*](/compliance/services-in-scope/).

### What else is Amazon SNS compliant with?

## Reliability

[Open all](#)

### How durable is my data once published to Amazon SNS?

### Will a notification contain more than one message?

### How many times will a subscriber receive each message?

### Will messages be delivered to me in the exact order they were published?

### Can a message be deleted after being published?

### Does Amazon SNS guarantee that messages are delivered to the subscribed endpoint?

### What happens to Amazon SNS messages if the subscribing endpoint is not available?

## Worldwide SMS

[Open all](#)

### What features are part of Worldwide SMS capability?

### When should I mark an SMS message as Transactional or Promotional?

### What are Origination Identities, and what are the types of Origination IDs supported by Amazon SNS?

### Where can I learn about best practices for sending SMS messages?

### What are account-level and message-level spend quotas and how do they work?

### Is two-way SMS supported?

### Do I need to subscribe phone numbers to an SNS Topic before sending an SMS message to it?

### Does AWS offer short codes and long codes for purchase?

### Does AWS offer long codes for purchase?

### Will SMS notifications come from a specific origination number?

### Which countries does Amazon SNS support for Worldwide SMS?

### Which AWS regions support Worldwide SMS?

### What is the phone number format for sending messages to other countries?

### Does Amazon SNS determine if a phone number is a mobile, landline, or VoIP number?

### Is time-based or scheduled delivery supported for SMS messages?

### How do I track the delivery status of my SMS messages?

### Do you support MMS?

### What is the cost of receiving SMS messages from Amazon SNS?

### How do recipients opt out from receiving SMS messages from AWS?

Recipients can use their devices to opt out by replying to the message with any of the following:

- ARRET (French)

- CANCEL

- END

- OPT-OUT

- OPTOUT

- QUIT

- REMOVE

- STOP

- TD

- UNSUBSCRIBE

To opt out, the recipient must reply to the same long code or short code that Amazon SNS used to deliver the message. After opting out, the recipient will no longer receive SMS messages delivered from your AWS account unless you opt in the phone number.

### How do I know if a recipient device has ‘opted out’ of Global SMS?

### If a user opts out, will that number be unsubscribed automatically from the SNS Topic?

### How do I confirm the end user received the SMS message?

### Does Amazon SNS provide delivery receipts for SMS messages?

### Does SMS support delivery to VoIP services like Google Voice or Hangouts?

## SMS Pricing

[Open all](#)

### How much do you charge for sending SMS messages?

### Am I charged if my SMS messages aren't delivered?

### Does the length of a message impact the price I pay?

### Is there an AWS Free Tier allowance for sending SMS messages?

## Quotas and restrictions

[Open all](#)

### Are there quotas for the number of topics or number of subscribers per topic?

### How much and what kind of data can go in a message?

With the exception of SMS messages, Amazon SNS messages can contain up to 256 KB of text data, including XML, JSON and unformatted text.

The following Unicode characters are accepted:

\#x9 \| \#xA \| \#xD \| \[#x20 to \#xD7FF\] \| \[#xE000 to \#xFFFD\] \| \[#x10000 to \#x10FFFF\]

(according to [*http://www.w3.org/TR/REC-xml/#charsets*](http://www.w3.org/TR/REC-xml/#charsets)).

Each 64KB chunk of published data is billed as 1 request. For example, a single API call with a 256KB payload will be billed as four requests.

**SMS messages**

Each SMS message can contain up to 140 bytes, and the character limit depends on the encoding scheme. For example, an SMS message can contain:

- 160 GSM characters

- 140 ASCII characters

- 70 UCS-2 characters

If you publish a message that exceeds the size limit, Amazon SNS sends it as multiple messages, each fitting within the size limit. Messages are not cut off in the middle of a word but on whole-word boundaries. The total size limit for a single SMS publish action is 1600 bytes.

### How many message filters can be applied to a topic?

### Are there TCP ports that should be used for cross-region communication between SNS and EC2?

## Raw message delivery

[Open all](#)

### What is raw message delivery?

### What is the default behavior if the raw message delivery property on the subscription is not set?

### Which types of endpoints support raw message delivery?

### How will raw messages be delivered to HTTP endpoints?

## Mobile push notifications

[Open all](#)

### What is SNS Mobile Push?

### How do I get started sending push notifications?

### Which push notifications platforms are supported?

Currently, the following push notifications platforms are supported:

- Amazon Device Messaging (ADM)

- Apple Push Notification Service (APNS)

- Firebase Cloud Messaging (FCM)

- Windows Push Notification Service (WNS) for Windows 8+ and Windows Phone 8.1+

- Microsoft Push Notification Service (MPNS) for Windows Phone 7+

- Baidu Cloud Push for Android devices in China

### How many push notifications can I send with the SNS Free Tier?

### Does enabling push notifications require any special confirmations with SNS Mobile Push?

### Do I have to modify my client app to use SNS Mobile Push?

### How do SNS topics work with Mobile Push?

### What payload size is supported for various target platforms?

### How do platform-specific payloads work?

### Can one token subscribe to multiple topics?

### What is direct addressing? How does it work?

### Does SNS support direct addressing for SMS or Email?

### How does SNS Mobile Push handle token feedback from notification services?

### I use Google Cloud Messaging (GCM) for SNS mobile notifications. What happens when GCM is deprecated?

### Can I migrate existing apps to SNS Mobile Push?

### Can I monitor my push notifications through Amazon CloudWatch?

### What types of Windows Push Notifications does Amazon SNS support?

### Does SNS support Windows raw push notifications?

### What is Baidu Cloud Push?

### Can I publish Baidu notifications from all public AWS regions?

### Can I use Baidu notifications to any Android app store?

### What are message attributes?

### What message attributes are supported in SNS?

### What is Time to Live (TTL)?

### How do I specify a TTL for my messages?

### What is the default TTL?

### Do TTL message attributes override TTLs specified in a message payload?

### What happens if I specify TTL=0?

### What SNS endpoints support TTL?

### What does the Delivery Status feature of Amazon SNS do?

### Is the Delivery Status feature in Amazon SNS available only for mobile push notifications? Do you plan to support this feature for other endpoint types?

### How do I activate the Delivery Status feature?

### Can I activate the Delivery Status feature from the Amazon SNS APIs?

### How much does the Delivery Status feature cost?

### Why can you only choose a sampling percentage for successful delivery attempts and not sample failed delivery attempts?

### How can I set alarms based on failure metrics or dwell time metrics?

### Does Amazon SNS support HTTP/2 for mobile push notification to APNS endpoints?

### Do I have to modify my application due to the deprecation of APNS binary protocol as of November 2020?

## SNS support for AWS Lambda

[Open all](#)

### What does support for AWS Lambda endpoints in Amazon SNS mean?

### What is AWS Lambda?

### What can I do with AWS Lambda functions and Amazon SNS?

### How do I activate AWS Lambda endpoint support in Amazon SNS?

### What does delivery of a message from Amazon SNS to an AWS Lambda function do?

### How much does this feature cost?

### Can I subscribe AWS Lambda functions created by someone else to Amazon SNS topics that I own?

### Is there a quota to the number of AWS Lambda functions that I can subscribe to an Amazon SNS topic?

### What data can I pass to my AWS Lambda function?

### Can I track delivery status for message delivery attempts to AWS Lambda functions?

### What regions is AWS Lambda available in?

### Do my AWS Lambda functions need to be in the same region as my Amazon SNS usage?

### Are there any data transfer costs for invoking AWS Lambda functions?

### Are there any quotas to the concurrency of AWS Lambda functions?

### Can Amazon SNS use the same AWS Lambda functions that I use with other services (e.g. Amazon S3)?

## VoIP iOS and Mac OS notifications

[Open all](#)

### What are VoIP Push Notifications for iOS?

### Can I use VoIP Push Notifications and other Push Notifications in the same iOS app?

### What are Mac OS push notifications?

[](/sns/pricing/)

aws-global-namespace aws page-categories pricing

## Learn more about Amazon SNS pricing

Visit the pricing page

[](https://console.aws.amazon.com/console/home)

aws-global-namespace aws page-categories getting-started

## Ready to build?

Getting started with Amazon SNS

[](/contact-us/)

## Have more questions?

Contact us
