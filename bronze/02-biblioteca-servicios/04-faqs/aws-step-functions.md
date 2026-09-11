[Skip to main content](#aws-page-content-main)

AWS Step Functions

- [Overview](/step-functions/)
- [Features](/step-functions/features/)
- [Pricing](/step-functions/pricing/)
- [Use Cases](/step-functions/use-cases/)
- [Customers](/step-functions/customers/)
- More

# AWS Step Functions FAQs

- [Overview](#overview--khj517)
  14
- [Comparisons](#comparisons--khj517)
  3
- [Integration](#integration--khj517)
  11
- [Security](#security--khj517)
  1
- [Compliance](#compliance--khj517)
  1

## Overview

[Open all](#)

### What is AWS Step Functions?

### What are the benefits of designing my application using orchestration?

### What are some common Step Functions use cases?

Step Functions helps with any computational problem or business process that can be subdivided into a series of steps. It’s also useful for creating end-to-end workflows to manage jobs with interdependencies. Common use cases include:

- Data processing: consolidate data from multiple databases into unified reports, refine and reduce large data sets into useful formats, iterate and process millions of files in an Amazon Simple Storage Service (S3) bucket with high concurrency workflows, or coordinate multi-step analytics and machine learning workflows
- Building serverless generative AI applications: leverage Step Functions for orchestrating interactions with [Amazon Bedrock’s](/bedrock/) Foundation Models, prompt chaining, fine-tuning, and enriching with capabilities from over 220 AWS services
- DevOps and IT automation: build tools for continuous integration and continuous deployment, or create event-driven applications that automatically respond to changes in infrastructure
- E-commerce: automate mission-critical business processes, such as order fulfillment and inventory tracking
- Web applications: implement robust user registration processes and sign-on authentication

For more details, explore AWS Step Functions [use cases](/step-functions/use-cases/) and [customer testimonials](/step-functions/customer-testimonials/).

### How does AWS Step Functions work?

### How does Step Functions connect to my resources?

### How do I get started with Step Functions?

There are a number of ways you can get started with Step Functions:

- Explore [sample projects](https://console.aws.amazon.com/states/home?#/sampleProjects) in the Step Functions console
- Read through the [Step Functions Developer Guide](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html)
- Try our [10-minute tutorials](/step-functions/getting-started/#Tutorials)

### What language does Step Functions use?

### My workflow has some of the properties of Standard Workflows and some properties of Express Workflows. How do I get the best of both?

You can compose the two workflow types:

- **By running Express Workflows as a child workflow of Standard Workflows**: The Express Workflow is invoked from a Task state in the parent orchestration workflow and succeeds or fails as a whole from the parent's perspective. It is subject to the parent's retry policy for that Task.  
   
- **By calling Express Workflows from within an Express Workflow, so long as all workflows do not exceed the duration limit of the parent**: You might choose to factor your workflows this way if your use case has a combination of long-running or exactly-once, and short-lived high-rate steps.

### How does Step Functions support parallelism?

### How do I assign and reference variables in AWS Step Functions?

### What is JSONata?

### Can I use Variables and JSONata in my existing workflows?

### How do I manipulate data with JSONata?

### How does "QueryLanguage":"JSONata" simplify data processing?

## Comparisons

[Open all](#)

### When should I use Step Functions vs. Amazon Simple Queue Service (SQS)?

You should use AWS Step Functions when you need to coordinate service components in the development of highly scalable and auditable applications. Amazon Simple Queue Service (Amazon SQS), is used for when you need a reliable, highly scalable, hosted queue for sending, storing, and receiving messages between services.

- Step Functions keeps track of all tasks and events in an application, SQS requires you to implement your own application-level tracking, especially if your application uses multiple queues.  
   
- The Step Functions console and visibility APIs provide an application-centric view that lets you search for executions, drill-down into an execution's detail, and administer executions. SQS would require implementing additional functionality.  
   
- Step Functions offers serveral features that facilitate application development, such as passing data between tasks and flexibility in distributing tasks, whereas SQS would require you to implement application-level functionality.  
   
- Step Functions has out-of-the-box capabilities to build workflows to coordinate your distributed application. SQS allows you to build basic workflows, but has limited functionality.

### When should I use Step Functions vs. Amazon Simple Workflow Service (SWF)?

### How does Step Functions’ HTTPS endpoints integration relate to Amazon EventBridge’s API Destinations?

## Integration

[Open all](#)

### How does Step Functions connect and coordinate other AWS services?

Workflows that you create with Step Functions can connect and coordinate over 200 AWS services using [service integrations](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-connectors.html). For example, you can:

- Invoke an AWS Lambda function
- Run an ECS or AWS Fargate task
- Get an existing item from an Amazon DynamoDB table or put a new item into a DynamoDB table
- Submit an AWS Batch job and wait for it to complete
- Invoke Amazon Bedrock Foundation Model
- Publish a message to an SNS topic
- Send a message to an Amazon SQS queue
- Start an AWS Glue job run
- Create an Amazon SageMaker job to train a machine learning model or batch transform a data set

To learn more about using Step Functions to connect to other AWS services, see the [Step Functions developer guide](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html). You can also create tasks in your state machines that run applications, see the FAQ in the [Overview](/step-functions/faqs/#Overview) section, How does Step Functions connect to my resources?

[For the most common use-cases of Step Functions, visit the use cases page, where there is detailed cases, alongside their architecture visualizations.](/step-functions/use-cases/)

### How does Step Functions integrate with third-party applications?

### How can I test my state machine definitions and debug their executions?

### How can Step Functions help me process a large dataset in Amazon S3?

### How does Step Functions work with Amazon API Gateway?

### How does AWS Step Functions work with Amazon EventBridge?

### What is AWS Step Functions vs. AWS Lambda

### Is AWS Step Functions Serverless?

### How does logging and monitoring work for Step Functions?

### What happens if my Express Workflow fails due to exhausted retries or an unmanaged exception?

### How does Step Functions help you build generative AI applications?

Step Functions has an optimized integration with [Amazon Bedrock](/bedrock/). You can invoke Bedrock’s Foundation Models directly from your Step Functions’ workflow using natural language. This gives you the ability to:   

- Enrich your data processed by Step Functions with generative AI capabilities to reduce the complexity of handling your data, such as text summarization, image generation, or personalization.
- Retrieve information from databases such as your latest product pricing and user personalization data and use Step Functions intrinsic functions to inject it into the prompt, making sure the LLM uses the most current data to improve the accuracy of the response.
- Generate embeddings by having Step Functions go through docs, extract data, chunk the documents, and then transform the data from digital text to embedding as a multi-step process. This can be scheduled as a recurring process.
- Use Step Function workflows for prompt chaining. You can orchestrate multiple LLM calls and choose the best model for each stage of the chain, forming a customized chain of processing stages, curating more contextually-aware and accurate responses from the foundational model.
- Build Human-in-the-loop (HITL) interactions with your generative AI workflow to moderate answers to avoid hallucination or build in logic to handle responses that are not supported by the foundational model.

## Security

[Open all](#)

### Can I access Step Functions from resources behind my Amazon VPC without connecting to the internet?

## Compliance

[Open all](#)

### What are the compliance standards supported by Step Functions?

## Next steps

[](/step-functions/getting-started/)

Getting started

## Get started with AWS Step Functions

Visit the getting started page

[](https://console.aws.amazon.com/states/home)

Console

## Sign in to the AWS Step Functions console

Ready to get started?
