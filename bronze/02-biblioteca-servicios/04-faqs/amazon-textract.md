[Skip to main content](#aws-page-content-main)

Amazon Textract

- [Overview](/textract/)
- Features
- [Pricing](/textract/pricing/)
- [Resources](/textract/resources/)
- [FAQs](/textract/faqs/)
- More

# Amazon Textract FAQs

- [General](#general--823zv7)
  15
- [Billing](#billing--823zv7)
  5
- [Data Privacy](#data-privacy--823zv7)
  7

## General

[Open all](#)

### What is Amazon Textract?

### What are the most common use cases for Amazon Textract?

The most common use cases for Amazon Textract include:

- Importing documents and forms into business applications
- Creating smart search indexes 
- Building automated document processing workflows
- Maintaining compliance in document archives
- Extracting text for Natural Language Processing (NLP)
- Extracting text for document classification

### What type of text can Amazon Textract detect and extract?

### What document formats does Amazon Textract support?

### How do I get started with Amazon Textract?

### What APIs does Amazon Textract offer?

### What features does the Analyze Document API have?

### How should customers construct/craft/word queries?

### Are there any limits to the number of Queries I can ask per document?

### How can I get the best results from Amazon Textract?

Amazon Textract uses machine learning to read virtually any type of document in order to extract printed text, handwriting, and structured information. Keep the following tips in mind in order to get the best results:

- Make sure your document uses a language supported by Amazon Textract (Currently English, Spanish, Italian, Portuguese, French, German. Handwriting, Invoices and Receipts, Identity documents and Queries processing are in English only).
- Provide as high quality an image as you can, ideally at least 150 DPI.
- If your document is already in one of the file formats that Amazon Textract supports (PDF, JPG, PNG), don't convert or downsample it before uploading it to Amazon Textract.
- Amazon Textract's table feature works best when the tables in your document are visually separated from surrounding elements on the page (e.g. not overlaid on an image or complex pattern), and the text within the table is upright (e.g. not rotated relative to other text on the page).

You can get started with analyzing you own documents with Amazon Textract with just a few clicks in the [Amazon Textract Management Console](https://console.aws.amazon.com/textract/). If you have trouble achieving high accuracy with receipts, identification, or industrial diagrams, please contact us on <amazon-textract@amazon.com> for assistance.

### How do I use the confidence score Amazon Textract provides?

### Does Amazon Textract work with AWS CloudTrail?

### In which AWS regions is Amazon Textract available?

### How can I request a service limit increase for Amazon Textract?

### What are the best practices to limit throttling when using Amazon Textract?

## Billing

[Open all](#)

### How does Amazon Textract count the number of pages processed?

### Which APIs am I charged for with Amazon Textract?

### How much does Amazon Textract cost?

### Does Amazon Textract participate in the AWS Free Tier?

Yes. As part of the [AWS Free Tier](/free/), you can get started with Amazon Textract for free. The Free Tier lasts for three months, and new AWS customers can analyze up to:  
  
**Detect Document Text API**: 1,000 pages per month  
**Analyze Document API**:

- 1000 Pages per month when using Signatures only

&nbsp;

- 100 Pages per month when using Forms, Tables, and Layout features

&nbsp;

- 100 pages per month each for Queries, Forms + Queries, Tables + Queries, Forms + Tables + Queries

&nbsp;

- There is no free-tier for Custom Queries

**Analyze Expense API**: 100 pages per month  
**Analyze ID API**: 100 pages per month  
**Analyze Lending API**: 2,000 pages per month

### Do your prices include taxes?

## Data Privacy

[Open all](#)

### Are document and image inputs processed by Amazon Textract stored, and how are they used by AWS?

### Is the content processed by Amazon Textract moved outside the AWS region where I am using Amazon Textract?

### Can I delete images and documents stored by Amazon Textract?

### Do I still own my content that is processed and stored by Amazon Textract?

### How does Amazon Textract handle the content used for adapter generation in Custom Queries?

### Is Amazon Textract HIPAA eligible?

### What Compliance Programs are in scope for Amazon Textract?
