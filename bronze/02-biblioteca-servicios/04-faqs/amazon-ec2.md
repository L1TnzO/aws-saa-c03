[Skip to main content](#aws-page-content-main)

Amazon EC2

- [Overview](/ec2/)
- [Features](/ec2/features/)
- [Pricing](/ec2/pricing/)
- Instance types
- [FAQs](/ec2/faqs/)
- More

# Amazon EC2 FAQs

- [General](#general--7oj3fi)
  4
- [Instance Types](#instance-types--7oj3fi)
  10
- [Storage](#storage--7oj3fi)
  3
- [Networking and security](#networking-and-security--7oj3fi)
  6
- [Management](#management--7oj3fi)
  4
- [Billing and purchase options](#billing-and-purchase-options--7oj3fi)
  11
- [Platform](#platform--7oj3fi)
  7
- [Workloads](#workloads--7oj3fi)
  3
- [Nitro System support for previous generation](#nitro-system-support-for-previous-generation--7oj3fi)
  1

## General

[Open all](#)

### Overview

### EC2 On-Demand Instance limits

### Changes to EC2 SMTP endpoint policy

### Service level agreement (SLA)

## Instance Types

[Open all](#)

### Accelerated Computing instances

### Flex instances

### Burstable Instances

### Compute Optimized instances

### High Performance Computing Optimized instances

### General Purpose instances

### High Memory instances

### Memory Optimized instances

### Previous Generation instances

### Storage Optimized instances

**Q: What is a Dense-storage Instance?**

Dense-storage instances are designed for workloads that require high sequential read and write access to very large data sets, such as Hadoop distributed computing, massively parallel processing data warehousing, and log processing applications. The Dense-storage instances offer the best price/GB-storage and price/disk-throughput across other EC2 instances.

**Q: How do dense-storage instances compare to High I/O instances?**

High I/O instances (Im4gn, Is4gen, I4i, I3, I3en) are targeted at workloads that demand low latency and high random I/O in addition to moderate storage density and provide the best price/IOPS across other EC2 instance types. Dense-storage instances (D3, D3en, D2) and HDD-storage instances (H1) are optimized for applications that require high sequential read/write access and low cost storage for very large data sets and provide the best price/GB-storage and price/disk-throughput across other EC2 instances.

**Q: How much disk throughput can Dense-storage and HDD-storage instances deliver?**

The largest current generation of Dense HDD-storage instances, d3en.12xlarge, can deliver up to 6.2 GiB/s read and 6.2 GiB/s write disk throughput with a 128k block size. Please see the product detail page for additional performance information. To ensure the best disk throughput performance from your D2, D3 and D3en instances on Linux, we recommend that you use the most recent version of the Amazon Linux AMI, or another Linux AMI with a kernel version of 3.8 or later that supports persistent grants—an extension to the Xen block ring protocol that significantly improves disk throughput and scalability.

**Q: Do Dense-storage and HDD-storage instances provide any failover mechanisms or redundancy?**

D2 and H1 instances provide notifications for hardware failures. Like all instance storage, Dense HDD-storage volumes persist only for the life of the instance. Hence, we recommend that you build a degree of redundancy (e.g. RAID 1/5/6) or use file systems (e.g. HDFS and MapR-FS) that support redundancy and fault tolerance. You can also back up data periodically to more data storage solutions such as Amazon EBS or Amazon S3.

**Q: How do dense HDD-storage instances differ from Amazon EBS?**

Amazon EBS offers simple, elastic, reliable (replicated), and persistent block level storage for Amazon EC2 while abstracting the details of the underlying storage media in use. Amazon EC2 instances with local HDD or NVMe storage provide directly attached, high performance storage building blocks that can be used for a variety of storage applications. Dense-storage instances are specifically targeted at customers who want high sequential read/write access to large data sets on local storage, e.g. for Hadoop distributed computing and massively parallel processing data warehousing.

**Q: Can I launch dense HDD-storage instances as Amazon EBS optimized instances?**

Each HDD-storage instance type (H1, D2, D3, and D3en) is EBS optimized by default. Since this feature is always enabled, launching one of these instances explicitly as EBS optimized will not affect the instance's behavior. For more information, see [*Amazon EBS–optimized instances*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html).

**Q: Can I launch D2 instances as Amazon EBS optimized instances?**

Each D2 instance type is EBS optimized by default. D2 instances offer 500 Mbps to 4,000 Mbps to EBS above and beyond the general-purpose network throughput provided to the instance. Since this feature is always enabled on D2 instances, launching a D2 instance explicitly as EBS optimized will not affect the instance's behavior.

**Q: What is a High I/O instance?**

High I/O instances use NVMe based local instance storage to deliver very high, low latency, I/O capacity to applications, and are optimized for applications that require millions of IOPS. Like Cluster instances, High I/O instances can be clustered via cluster placement groups for low latency networking.

**Q: Are all features of Amazon EC2 available for High I/O instances?**

High I/O instances support all Amazon EC2 features. Im4gn, Is4gen, I4i, I3 and I3en instances offer NVMe only storage, while previous generation I2 instances allow legacy blkfront storage access.

**Q: AWS has other database and Big Data offerings. When or why should I use High I/O instances?**

High I/O instances are ideal for applications that require access to millions of low latency IOPS, and can leverage data stores and architectures that manage data redundancy and availability. Example applications are:

- NoSQL databases like Cassandra and MongoDB

- In-memory databases like Aerospike

- Elasticsearch and analytics workloads

- OLTP systems

**Q: Do High I/O instances provide any failover mechanisms or redundancy?**

Like other Amazon EC2 instance types, instance storage on Im4gn, Is4gen, I4i, I3 and I3en instances persists during the life of the instance. Customers are expected to build resilience into their applications. We recommend using databases and file systems that support redundancy and fault tolerance. Customers should back up data periodically to Amazon S3 for improved data durability.

**Q: Do High I/O instances support TRIM?**

The TRIM command allows the operating system to inform SSDs which blocks of data are no longer considered in use and can be wiped internally. In the absence of TRIM, future write operations to the involved blocks can slow down significantly. Im4gn, Is4gen, I4i, I3 and I3en instances support TRIM.

**Q: How do D3 and D3en instances compare to D2 instances?**

D3 and D3en instances offer improved specifications over D2 on the following compute, storage and network attributes:

- D3 and D3en instances offer up to 30% higher compute performances than equivalent D2 instances. Exact performance benefit will depend on the specific workload.

- D3 and D3en instances provide up to 45% and 100% higher disk throughput than D2 instances, respectively.

- D3 instances are available at a price that is 5% lower than D2 instances. D3en instances lower cost per TB of storage by up to 80% compared to D2 instances.

- D3 and D3en instances offer Intel Advanced Vector Extensions (AVX 512), which offer up to 2X the FLOPS per cycle compared to AVX 2 on D2.

- D3en instances offer a new instance size (12xl) with 48 vCPUs and 7 TB of storage per vCPU for 336 TB of total storage, but have half the memory per vCPU compared to D2 and 48 TB of total storage.

- D3 and D3en instances offer up to 25 Gbps and 75 Gbps of network bandwidth respectively on their largest sizes to meet customer needs for network performance for running big data workloads and file system clusters.

**Q: Do D3 and D3en instances encrypt storage volumes and network traffic?**

Yes; data written onto the storage volumes will be encrypted at rest using AES-256-XTS. Network traffic between D3 and D3en instances in the same VPC or a peered VPC are encrypted by default using a 256-bit key.

## Storage

[Open all](#)

### Amazon Elastic Block Store (Amazon EBS)

### Amazon Elastic File System (Amazon EFS)

### NVMe Instance storage

## Networking and security

[Open all](#)

### Elastic Network Adapter (ENA) Express

### Elastic Fabric Adapter (EFA)

### Enhanced networking

### Elastic Load Balancing

### Elastic IP

### Security

## Management

[Open all](#)

### Amazon CloudWatch

### Amazon EC2 Auto Scaling

### Hibernate

### VM Import/Export

**Q: What is VM Import/Export?**

VM Import/Export enables customers to import Virtual Machine (VM) images in order to create Amazon EC2 instances. Customers can also export previously imported EC2 instances to create VMs. Customers can use VM Import/Export to leverage their previous investments in building VMs by migrating their VMs to Amazon EC2.

**Q: What operating systems are supported?**

VM Import/Export currently supports Windows and Linux VMs, including multiple editions of Windows Server, Red Hat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian and others. For more details on VM Import, including supported file formats, architectures, and operating system configurations, please see the VM Import/Export section of the [*VM Import/Export.*](https://docs.aws.amazon.com/vm-import/latest/userguide/prerequisites.html)

**Q: What VM file formats are supported?**

You can import VMware ESX VMDK images, Citrix Xen VHD images, Microsoft Hyper-V VHD images and RAW images as Amazon EC2 instances. You can export EC2 instances to VMware ESX VMDK, VMware ESX OVA, Microsoft Hyper-V VHD or Citrix Xen VHD images. For a full list of supported operating systems, please see [supported operating systems and machine types.](https://docs.aws.amazon.com/systems-manager/latest/userguide/operating-systems-and-machine-types.html)

**Q: What is VMDK?**

VMDK is a file format that specifies a virtual machine hard disk encapsulated within a single file. It is typically used by virtual IT infrastructures such as those sold by VMware, Inc.

**Q: How do I prepare a VMDK file for import using the VMware vSphere client?**

The VMDK file can be prepared by calling File-Export-Export to OVF template in VMware vSphere Client. The resulting VMDK file is compressed to reduce the image size and is compatible with VM Import/Export. No special preparation is required if you are using the Amazon EC2 VM Import Connector vApp for VMware vCenter.

**Q: What is VHD?**

VHD (Virtual Hard Disk) is a file format that specifies a virtual machine hard disk encapsulated within a single file. The VHD image format is used by virtualization platforms such as Microsoft Hyper-V and Citrix Xen.

**Q: How do I prepare a VHD file for import from Citrix Xen?**

Open Citrix XenCenter and select the virtual machine you want to export. Under the Tools menu, choose "Virtual Appliance Tools" and select "Export Appliance" to initiate the export task. When the export completes, you can locate the VHD image file in the destination directory you specified in the export dialog.

**Q: How do I prepare a VHD file for import from Microsoft Hyper-V?**

Open the Hyper-V Manager and select the virtual machine you want to export. In the Actions pane for the virtual machine, select "Export" to initiate the export task. Once the export completes, you can locate the VHD image file in the destination directory you specified in the export dialog.

**Q: Are there any other requirements when importing a VM into Amazon EC2?**

The virtual machine must be in a stopped state before generating the VMDK or VHD image. The VM cannot be in a paused or suspended state. We suggest that you export the virtual machine with only the boot volume attached. You can import additional disks using the ImportVolume command and attach them to the virtual machine using AttachVolume. Additionally, encrypted disks (e.g. Bit Locker) and encrypted image files are not supported. You are also responsible for ensuring that you have all necessary rights and licenses to import into AWS and run any software included in your VM image.

**Q: Does the virtual machine need to be configured in any particular manner to enable import to Amazon EC2?**

Ensure Remote Desktop (RDP) or Secure Shell (SSH) is enabled for remote access and verify that your host firewall (Windows firewall, iptables, or similar), if configured, allows access to RDP or SSH. Otherwise, you will not be able to access your instance after the import is complete. Please also ensure that Windows VMs are configured to use strong passwords for all users including the administrator and that Linux VMs are configured with a public key for SSH access.

**Q: How do I import a virtual machine to an Amazon EC2 instance?**

You can import your VM images using the Amazon EC2 API tools:

- Import the VMDK, VHD or RAW file via the ec2-import-instance API. The import instance task captures the parameters necessary to properly configure the Amazon EC2 instance properties (instance size, Availability Zone, and security groups) and uploads the disk image into Amazon S3.

- If ec2-import-instance is interrupted or terminates without completing the upload, use ec2-resume-import to resume the upload. The import task will resume where it left off.

- Use the ec2-describe-conversion-tasks command to monitor the import progress and obtain the resulting Amazon EC2 instance ID.

- Once your import task is completed, you can boot the Amazon EC2 instance by specifying its instance ID to the ec2-run-instances API.

- Finally, use the ec2-delete-disk-image command line tool to delete your disk image from Amazon S3 as it is no longer needed.

Alternatively, if you use the VMware vSphere virtualization platform, you can import your virtual machine to Amazon EC2 using a graphical user interface. Please refer to the Getting Started Guide in AWS Management Portal for vCenter. AWS Management Portal for vCenter includes integrated support for VM Import. Once the portal is installed within vCenter, you can right-click on a VM and select “Migrate to EC2” to create an EC2 instance from the VM. The portal will handle exporting the VM from vCenter, uploading it to S3, and converting it into an EC2 instance for you, with no additional work required. You can also track the progress of your VM migrations within the portal.

**Q: How do I export an Amazon EC2 instance back to my on-premise virtualization environment?**

You can export your Amazon EC2 instance using the Amazon EC2 CLI tools:

- Export the instance using the ec2-create-instance-export-task command. The export command captures the parameters necessary (instance ID, S3 bucket to hold the exported image, name of the exported image, VMDK, OVA or VHD format) to properly export the instance to your chosen format. The exported file is saved in an S3 bucket that you previously created.

- Use ec2-describe-export-tasks to monitor the export progress.

- Use ec2-cancel-export-task to cancel an export task prior to completion.

**Q: Are there any other requirements when exporting an EC2 instance using VM Import/Export?**

You can export running or stopped EC2 instances that you previously imported using VM Import/Export. If the instance is running, it will be momentarily stopped to snapshot the boot volume. EBS data volumes cannot be exported. EC2 instances with more than one network interface cannot be exported.

**Q: Can I export Amazon EC2 instances that have one or more EBS data volumes attached?**

Yes, but VM Import/Export will only export the boot volume of the EC2 instance.

**Q: What does it cost to import a virtual machine?**

You will be charged standard Amazon S3 data transfer and storage fees for uploading and storing your VM image file. Once your VM is imported, standard Amazon EC2 instance hour and EBS service fees apply. If you no longer wish to store your VM image file in S3 after the import process completes, use the ec2-delete-disk-image command line tool to delete your disk image from Amazon S3.

**Q: What does it cost to export a VM?**

You will be charged standard Amazon S3 storage fees for storing your exported VM image file. You will also be charged standard S3 data transfer charges when you download the exported VM file to your on-premise virtualization environment. Finally, you will be charged standard EBS charges for storing a temporary snapshot of your EC2 instance. To minimize storage charges, delete the VM image file in S3 after downloading it to your virtualization environment.

**Q: When I import a VM of Windows Server which has reached Microsoft EOS, who is responsible for supplying the operating system license?**

When you launch an imported VM using Microsoft Windows Server which has reached Microsoft EOS, you will be charged standard instance hour rates for Amazon EC2 running the appropriate Windows Server version, which includes the right to utilize that operating system within Amazon EC2. You are responsible for ensuring that all other installed software is properly licensed.

So then, what happens to my on-premise Microsoft Windows license key when I import a VM of Windows Server which has reached Microsoft EOS? Since your on-premise Microsoft Windows license key that was associated with that VM is not used when running your imported VM as an EC2 instance, you can reuse it for another VM within your on-premise environment.

**Q: Can I continue to use the AWS provided Microsoft Windows license key after exporting an EC2 instance back to my on-premises virtualization environment?**

No. After an EC2 instance has been exported, the license key utilized in the EC2 instance is no longer available. You will need to reactivate and specify a new license key for the exported VM after it is launched in your on-premises virtualization platform.

**Q: When I import a VM with Red Hat Enterprise Linux (RHEL), who is responsible for supplying the operating system license?**

When you import Red Hat Enterprise Linux (RHEL) VM images, you can use license portability for your RHEL instances. With license portability, you are responsible for maintaining the RHEL licenses for imported instances, which you can do using Cloud Access subscriptions for Red Hat Enterprise Linux. Please contact Red Hat to learn more about Cloud Access and to verify your eligibility.

**Q: How long does it take to import a virtual machine?**

The length of time to import a virtual machine depends on the size of the disk image and your network connection speed. As an example, a 10 GB Windows Server 2008 SP2 VMDK image takes approximately 2 hours to import when it’s transferred over a 10 Mbps network connection. If you have a slower network connection or a large disk to upload, your import may take significantly longer.

**Q: In which Amazon EC2 Regions can I use VM Import/Export?**

Visit the [*Region Table*](/about-aws/global-infrastructure/regional-product-services/) page to see product service availability by Region.

**Q: How many simultaneous import or export tasks can I have?**

Each account can have up to five active import tasks and five export tasks per region.

**Q: Can I run imported virtual machines in Amazon Virtual Private Cloud (Amazon VPC)?**

Yes, you can launch imported virtual machines within Amazon VPC.

**Q: Can I use the AWS Management Console with VM Import/Export?**

No. VM Import/Export commands are available via EC2 CLI and API. 

## Billing and purchase options

[Open all](#)

### Billing

### Data transfer fees when moving all data off AWS

### Data Transfer fees when migrating from Singapore region (SIN) to Malaysia or Thailand region (KUL)

### Convertible Reserved Instances

### EC2 Fleet

### Amazon EC2 Capacity Blocks for ML

**Q: What are Amazon EC2 Capacity Blocks for ML?**

Amazon EC2 Capacity Blocks for ML allow you to reserve GPU instances in Amazon EC2 UltraClusters to run your machine learning (ML) workloads. With Amazon EC2 Capacity Blocks, you can reserve GPU capacity starting on a future date for durations up to 6 months and in cluster sizes of one to 64 instances. When your EC2 Capacity Block reservation date and time arrives, you will be able to launch your instances and use them until your reservation time ends.

**Q: Why should I use EC2 Capacity Blocks?**

EC2 Capacity Blocks make it easy to access the highest-performing GPU instances in Amazon EC2 for ML, even in the face of industry-wide GPU shortages. Use EC2 Capacity Blocks to ensure capacity availability for GPU instances to plan your ML development with confidence. EC2 Capacity Blocks are delivered in [*EC2 UltraClusters*](/ec2/ultraclusters/) so you can leverage the best network latency and throughput performance available in EC2.

**Q: When should I use Amazon EC2 Capacity Blocks instead of On-Demand Capacity Reservations?**

Use EC2 Capacity Blocks for ML when you need short-term capacity assurance to train or fine-tune ML models, run experiments, build prototypes, or handle surges in demand for ML applications on a specific date to run your ML workloads. Use [*On-Demand Capacity Reservations*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html) when you need immediate or long-term capacity assurance with flexible duration for any workload type across a broader range of instance families, including business-critical applications, regulatory requirements, or disaster recovery scenarios. The key difference is that Capacity Blocks provide scheduled, future-dated GPU capacity specifically for ML workloads, while On-Demand Capacity Reservations offer flexible, immediate capacity assurance for any workload without requiring advance scheduling or a fixed end date.

**Q: How do I get started with EC2 Capacity Blocks?**

You can search for available EC2 Capacity Blocks based on your capacity needs in the [*AWS Management Console*](https://console.aws.amazon.com/), [*AWS Command Line Interface (AWS CLI)*](/cli/), and [*AWS SDKs*](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html). Once you purchase an EC2 Capacity Block, a reservation is created in your account. When the EC2 Capacity Block start time arrives, EC2 will emit an event through Amazon EventBridge to indicate that the reservation is now active and available for use. To use an active EC2 Capacity Block, select the “Capacity Block” purchase option and target the capacity reservation ID for your EC2 Capacity Block while launching EC2 instances. As your EC2 Capacity Block end time approaches, EC2 will emit event through EventBridge letting you know your reservation is ending soon so you can checkpoint your workload. Around 30 minutes before your EC2 Capacity Block expires, AWS will begin terminating any running instances.

**Q: How far in advance can I reserve an EC2 Capacity Block?**

You can purchase an EC2 Capacity Block as far out as eight weeks into the future or as soon as now, when capacity is available. EC2 Capacity Blocks reservations that start in the future always begin at 11:30 AM Coordinated Universal Time (UTC), and they always end at 11:30AM UTC.

**Q: What happens if there are no EC2 Capacity Blocks available that meet my specifications?**

If there are no EC2 Capacity Blocks that match your requirements, you can retry your request with different input parameters. We recommend that you use the widest date range possible in your search requests for the best chance at finding an EC2 Capacity Block.

**Q: Can I modify or cancel my EC2 Capacity Block?**

No, an EC2 Capacity Block cannot be modified or canceled once it is reserved.

**Q: How much do EC2 Capacity Blocks cost?**

When you search for an EC2 Capacity Block across dates, AWS returns the lowest-priced offering available that meets your specifications in the date range you provide. The price for an EC2 Capacity Block depends on total available supply and demand at the time you purchase the reservation. You can view the price of an EC2 Capacity Block offering before you reserve it, and the price of an EC2 Capacity Block is charged up front at the time the reservation is made. The price of an EC2 Capacity Block does not change after it is reserved. When you launch instances in an active EC2 Capacity Block, you will only be charged for the usage of any premium operating system on a pay-as-you-go basis.

**Q: Do Savings Plans and Reserved Instances (RI) discounts apply to EC2 Capacity Blocks?**

No, EC2 Capacity Blocks are not covered by Savings Plans or RI discounts.

**Q: Can I use EC2 Capacity Blocks with Amazon SageMaker?**

At this time, EC2 Capacity Blocks only support EC2 instances.  
  
**Q: Can I share a Capacity Block for ML with another AWS account?**

Yes, you can share active or scheduled Capacity Blocks with other AWS accounts within your AWS Organization through [AWS Resource Access Manager (AWS RAM)](/ram/). You can share EC2 capacity reservations in three easy steps:

1.  Create a Resource Share using AWS RAM
2.  Add resources (Capacity Blocks for ML) to the Resource Share
3.  Specify the target accounts that you wish to share the resources with

Please note that at this time, we do not support sharing Capacity Blocks for Amazon EC2 UltraServers.

### Amazon EC2 Capacity Reservations

### Reserved Instances

### Reserved Instance Marketplace

**Q: What is the Reserved Instance (RI) Marketplace?**

The RI Marketplace is an online marketplace that provides AWS customers the flexibility to sell their Amazon EC2 RIs to other businesses and organizations. Customers can also browse the RI Marketplace to find an even wider selection of RI term lengths and pricing options sold by other AWS customers.

**Q: When can I list an RI on the RI Marketplace?**

You can list an RI when:

- You've registered as a seller in the RI Marketplace.

- You've paid for your RI.

- You've owned the RI for longer than 30 days.

**Q: Can RIs be transferred?**

EC2 Reserved Instances are only transferrable in accordance with the requirements of the RI Marketplace provided in [*AWS Service Terms*](/service-terms/) and cannot otherwise be transferred.

**Q: Can I sell any RI on the EC2 RI Marketplace?**

No, AWS prohibits the resale of RIs purchased as part of a discount program per [*AWS Service Terms*](/service-terms/). Any All Upfront, Partial Upfront, or No Unfront RIs that were purchased directly from AWS or from EC2 RI Marketplace that received a discount from AWS (for example, [*RI Volume Discount*](/ec2/pricing/reserved-instances/pricing/) or other discount programs) are not eligible for sale on the EC2 RI Marketplace.

**Q: How will I register as a seller for the RI Marketplace?**

To register for the RI Marketplace, you can enter the registration workflow by selling an RI from the [*EC2 Management Console*](https://console.aws.amazon.com/) or setting up your profile from the "Account Settings" page on the AWS portal. No matter the route, you will need to complete the following steps:

1.  Start by reviewing the overview of the registration process.

2.  Log in to your AWS Account.

3.  Enter in the bank account into which you want us to disburse funds. Once you select "Continue," we will set that bank account as the default disbursement option.

4.  In the confirmation screen, choose "Continue to Console to Start Listing."

If you exceed \$20,000 in sales of RI, or plan to sell 50 or more RIs, you will need to provide tax information before you can list your RIs. Choose "Continue with Tax Interview." During the tax interview pipeline, you will be prompted to enter your company name, contact name, address, and Tax Identification Number using the TIMS workflow.

Additionally, if you plan to sell RIs worth more than \$50,000 per year you will also need to file a limit increase.

**Q: How will I know when I can start selling on the RI Marketplace?**

You can start selling on the RI Marketplace after you have added a bank account through the registration pipeline. Once activation is complete, you will receive a confirmation email. However, it is important to note that you will not be able to receive disbursements until we are able to receive verification from your bank, which may take up to two weeks, depending on the bank you use.

**Q: How do I list an RI for sale?**

To list an RI, simply complete these steps in the Amazon EC2 console:

1.  Select the RIs that you wish to sell, and choose "Sell Reserved Instances." If you have not completed the registration process, you will be prompted to register using the registration pipeline.

2.  For each RI type, set the number of instances you’d like to sell, and the price for the one-time fee you would like to set. Note that you can set the one-time price to different amounts depending on the amount of time remaining so that you don’t have to keep adjusting your one-time price if your RI doesn’t sell quickly. By default you just need to set the current price and we will automatically decrease the one-time price by the same increment each month.

3.  Once you have configured your listing, a final confirmation screen will appear. Choose "Sell Reserved Instance."

**Q: Which RIs can I list for sale?**

You can list any RIs that have been active for at least 30 days, and for which we have received payment. Typically, this means that you can list your reservations once they are in the **active** state. It is important to note that if you are an invoice customer, your RI can be in the **active** state prior to AWS receiving payment. In this case, your RI will not be listed until we have received your payment.

**Q: How are listed RIs displayed to buyers?**

RIs (both third-party and those offered by AWS) that have been listed on the RI Marketplace can be viewed in the "Reserved Instances" section of the Amazon EC2 console. You can also use the DescribeReservedInstancesListings API call.

The listed RIs are grouped based on the type, term remaining, upfront price, and hourly price. This makes it easier for buyers to find the right RIs to purchase.

**Q: How much of my RI term can I list?**

You can sell an RI for the term remaining, rounded down to the nearest month. For example, if you had 9 months and 13 days remaining, you will list it for sale as a 9-month-term RI.

**Q: Can I remove my RI after I’ve listed it for sale?**

Yes, you can remove your RI listings at any point until a sale is pending (meaning a buyer has bought your RI and confirmation of payment is pending).

**Q: Which pricing dimensions can I set for the RIs that I want to list?**

Using the RI Marketplace, you can set an upfront price you’d be willing to accept. You cannot set the hourly price (which will remain the same as was set on the original RI), and you will not receive any funds collected from payments associated with the hourly prices.

**Q: Can I still use my reservation while it is listed on the RI Marketplace?**

Yes, you will continue to receive the capacity and billing benefit of your reservation until it is sold. Once sold, any running instance that was being charged at the discounted rate will be charged at the On-Demand rate until and unless you purchase a new reservation, or terminate the instance.

**Q: Can I resell an RI that I purchased from the RI Marketplace?**

Yes, you can resell RIs purchased from the RI Marketplace just like any other RI.

**Q: Are there any restrictions when selling RIs?**

Yes, you must have a US bank account to sell RIs in the RI Marketplace. Support for non-US bank accounts will be coming soon. Also, you may not sell RIs in the US GovCloud Region.

**Q: Can I sell RIs purchased from the public volume pricing tiers?**

No, this capability is not yet available.

**Q: Is there a charge for selling RIs in the RI Marketplace?**

Yes, AWS charges a service fee of 12% of the total upfront price of each RI that you sell in the RI Marketplace.

**Q: Can AWS sell subsets of my listed RIs?**

Yes, AWS may potentially sell a subset of the quantity of RIs that you have listed. For example, if you list 100 RIs, we may only have a buyer interested in purchasing 50 of them. We will sell those 50 instances and continue to list your remaining 50 RIs until and unless you decide not to list them any longer.

**Q: How do buyers pay for RIs that they've purchased?**

Payment for completed RI sales are done via ACH wire transfers to a US bank account.

**Q: When will I receive my money?**

Once AWS has received funds from the customer that has bought your reservation, we will disburse funds via wire transfer to the bank account you specified when you registered for the RI Marketplace.

Then, we will send you an email notification letting you know that we’ve wired you the funds. Typically, funds will appear in your account within 3-5 days of when your RI was sold.

**Q: If I sell my RI in the RI Marketplace, will I get refunded for the Premium Support I was charged, too?**

No, you will not receive a prorated refund for the upfront portion of the AWS Premium Support Fee.

**Q: Will I be notified about RI Marketplace activities?**

Yes, you will receive a single email once a day that details your RI Marketplace activity whenever you create or cancel RI listings, buyers purchase your listings, or AWS disburses funds to your bank account.

**Q: What information is exchanged between the buyer and seller to help with the transaction tax calculation?**

The buyer’s city, state, zip+4, and country information will be provided to the seller via a disbursement report. This information will enable sellers to calculate any necessary transaction taxes they need to remit to the government (e.g., sales tax, value-added tax, etc.). The legal entity name of the seller will also be provided on the purchase invoice.

**Q: Are there any restrictions on the customers when purchasing third-party RIs?**

Yes, you cannot purchase your own listed RIs, including those in any of your linked accounts (via Consolidated Billing).

**Q: Do I have to pay for Premium Support when purchasing RIs from the RI Marketplace?**

Yes, if you are a Premium Support customer, you will be charged for Premium Support when you purchase an RI through the RI Marketplace.

### Savings Plans

**Q: What is Savings Plans?**

Savings Plans is a flexible pricing model that offers low prices on EC2, Lambda and Fargate usage, in exchange for a commitment to a consistent amount of usage (measured in \$/hour) for a one- or three-year term. When you sign up for Savings Plans, you will be charged the discounted Savings Plans price for your usage up to your commitment. For example, if you commit to \$10 of compute usage an hour, you will get the Savings Plans prices on that usage up to \$10 and any usage beyond the commitment will be charged On Demand rates.

**Q: What types of Savings Plans does AWS offer?**

AWS offers two types of Savings Plans:

1.  Compute Savings Plans provide the most flexibility and help to reduce your costs by up to 66%. These plans automatically apply to EC2 instance usage regardless of instance family, size, AZ, region, OS or tenancy, and also apply to AWS Fargate and Lambda usage. For example, with Compute Savings Plans, you can change from C4 to M5 instances, shift a workload from EU (Ireland) to EU (London), or move a workload from EC2 to Fargate or Lambda at any time and automatically continue to pay the Savings Plans price.

2.  EC2 Instance Savings Plans provides the lowest prices, offering savings up to 72% in exchange for commitment to usage of individual instance families in a Region (e.g., M5 usage in N. Virginia). This automatically reduces your cost on the selected instance family in that region regardless of AZ, size, OS or tenancy. EC2 Instance Savings Plans give you the flexibility to change your usage between instances within a family in that region. For example, you can move from c5.xlarge running Windows to c5.2xlarge running Linux and automatically benefit from the Savings Plan prices.

**Q: How do Savings Plans compare to EC2 RIs?**

Savings Plans offers significant savings over On Demand, just like EC2 RIs, but automatically reduce your bills on compute usage across any AWS region, even as usage changes. This provides you the flexibility to use the compute option that best suits your needs and continue to save money, all without having to perform exchanges or modifications.

Compute Savings Plans, which provide savings up to 66% (just like Convertible RIs), automatically reduce your cost on any EC2 instance usage regardless of region, instance family, size, OS, tenancy and even on AWS Fargate and Lambda. EC2 Instance Savings Plans, which provide savings up to 72% (just like Standard RIs), automatically save you money on any instance usage within a given EC2 instance family in a chosen region (e.g., M5 in N. Virginia) regardless of size, OS, or tenancy.

**Q: Do Savings Plans provide capacity reservations for EC2 instances?**

No, Savings Plans do not provide a capacity reservation. You can however reserve capacity with [*On-Demand Capacity Reservations*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html) and pay lower prices on them with Savings Plans.

**Q: How do I get started with Savings Plans?**

You can get started with Savings Plans from AWS Cost Explorer in the AWS Management Console or by using the API/CLI. You can easily make a commitment to a Savings Plan by using the recommendations provided in [*AWS Cost Explorer*](https://console.aws.amazon.com/cost-reports/home?region=us-east-1#/dashboard), to realize the biggest savings. The recommended hourly commitment is based on your historical On Demand usage and your choice of plan type, term length, and payment option. Once you sign up for a Savings Plan, your compute usage will automatically be charged at the discounted Savings Plan prices and any usage beyond your commitment will be charged at regular On Demand rates.

**Q: Can I continue to purchase EC2 RIs?**

Yes. You can continue purchasing RIs to maintain compatibility with your existing cost management processes, and your RIs will work alongside Savings Plans to reduce your overall bill. However as your RIs expire we encourage you to sign up for Savings Plans as they offer the same savings as RIs, but with additional flexibility.

### Spot Instances

## Platform

[Open all](#)

### Amazon Time Sync Service

### Availability Zones

**Q: How isolated are Availability Zones from one another?**

Each Availability Zone runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. Common points of failures like generators and cooling equipment are not shared across Availability Zones. Additionally, they are physically separate, such that even extremely uncommon disasters such as fires, tornados or flooding would only affect a single Availability Zone.

**Q: Is Amazon EC2 running in more than one AWS Region?**

Yes. Please refer to [*Regional Products and Services*](/about-aws/global-infrastructure/regional-product-services/) for more details of our product and service availability by Region.

**Q: How can I make sure that I am in the same Availability Zone as another developer?**

We do not currently support the ability to coordinate launches into the same Availability Zone across AWS developer accounts. One Availability Zone name (for example, us-east-1a) in two AWS customer accounts may relate to different physical Availability Zones.

**Q: If I transfer data between Availability Zones using public IP addresses, will I be charged twice for Regional Data Transfer (once because it’s across zones, and a second time because I’m using public IP addresses)?**

No. Regional Data Transfer rates apply if at least one of the following is true, but you are only charged once for a given instance even if both are true:

- The other instance is in a different Availability Zone, regardless of which type of address is used.

- Public or Elastic IP addresses are used, regardless of which Availability Zone the other instance is in.

### Cluster instances

### Hardware information

### Micro instances

### Nitro Hypervisor

### Optimize CPUs

**Q: What is Optimize CPUs?**

Optimize CPUs gives you greater control of your EC2 instances on two fronts. First, you can specify a custom number of vCPUs when launching new instances to save on vCPU-based licensing costs for workloads such as [Microsoft Windows and SQL Server](/microsoft/). Second, you can disable Intel Hyper-Threading Technology (Intel HT Technology) for workloads that perform well with single-threaded CPUs, such as certain HPC applications.

**Q: Why should I use Optimize CPUs feature?**

You should use Optimize CPUs if:

- You are running EC2 workloads that are not compute bound and are incurring vCPU-based licensing costs. By launching instances with a custom number of vCPUs you may be able to optimize your licensing spend.

- You are running workloads that will benefit from disabling hyper-threading on EC2 instances.

**Q: How will the CPU optimized instances be priced?**

For EC2 instances running license-included [Microsoft Windows and SQL Server](/windows/), you can use the Optimize CPUs feature to modify the number of vCPUs and/or disable the Hyper-threading to save on vCPU-based licensing costs. The savings for using Windows Server AMIs is \$0.046 per vCPU-hour. The savings for using Windows with SQL Enterprise AMIs, Windows with SQL Standard AMIs, and Windows with SQL Web AMIs are \$0.421 per vCPU-hour, \$0.166 per vCPU-hour, and \$0.063 per vCPU-hour respectively. For EC2 instances with other operating systems, CPU optimized instances will be priced the same as equivalent full-sized instances. Learn more about how you will be billed from the [Optimize CPUs User Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html).

**Q: How will my application performance change when using Optimize CPUs on EC2?**

Your application performance change with Optimize CPUs will be largely dependent on the workloads you are running on EC2. We encourage you to benchmark your application performance with Optimize CPUs to arrive at the right number of vCPUs and optimal hyper-threading behavior for your application. Read [this blog](/blogs/modernizing-with-aws/optimize-cpu-best-practices-for-sql-server-workloads/) for Optimize CPUs best practices for SQL Server workloads.

**Q: Can I use Optimize CPUs on EC2 Bare Metal instance types (such as i3.metal)?**

No. You can use Optimize CPUs with only virtualized EC2 instances.

**Q: How can I get started with using Optimize CPUs for EC2 Instances?**

For more information on how to get started with Optimize CPUs and supported instance types, please visit the Optimize CPUs documentation page [*here*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html).

**Q: What license types does Optimize CPUs support for license-included workloads?**

For license included workloads, Optimize CPUs supports four license types including Windows Server, Windows with SQL Server Enterprise, Windows with SQL Server Standard, and Windows with SQL Server Web. For more information about license types, see [AMI billing information fields](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/billing-info-fields.html#billing-info).

## Workloads

[Open all](#)

### Amazon EC2 running IBM

### Amazon EC2 running Microsoft Windows and other third-party software

### macOS workloads

**Q: What are Amazon EC2 Mac instances?  
**  
Amazon EC2 Mac instances allow customers to run on-demand macOS workloads in the cloud for the first time, extending the flexibility, scalability, and cost benefits of AWS to all Apple developers. With EC2 Mac instances, developers creating apps for iPhone, iPad, Mac, Apple Watch, Apple TV, and Safari can provision and access macOS environments within minutes, dynamically scale capacity as needed, and benefit from AWS’s pay-as-you-go pricing.

**Q: What workloads should you run on EC2 Mac instances?**

Amazon EC2 Mac instances are designed to build, test, sign, and publish applications for Apple platforms such as iOS, iPadOS, watchOS, tvOS, macOS, and Safari. Customers such as Pinterest, Intuit, FlipBoard, Twitch, and Goldman Sachs have seen up to 75% better build performance, up to 80% lower build failure rates, and up to 5x the number of parallel builds compared to running macOS on premises.

**Q: What are EC2 x86 Mac instances?**

x86-based EC2 Mac instances are built on Apple Mac mini computers featuring Intel Core i7 processors and are powered by the [*AWS Nitro System*](/ec2/nitro/). They offer customers a choice of macOS Mojave (10.14), macOS Catalina (10.15), macOS Big Sur (11), and macOS Monterey (12) as Amazon Machine Images (AMIs). x86-based EC2 Instances are available in 12 Regions: US East (Ohio, N. Virginia), US West (Oregon), Europe (Stockholm, Frankfurt, Ireland, London), and Asia Pacific (Mumbai, Seoul, Singapore, Sydney, Tokyo). Learn more and get started with x86-based EC2 Mac instances [*here*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html#mac-instance-launch).

**Q: What are EC2 M1 Mac instances?**

EC2 M1 Mac instances are built on Apple M1 Mac mini computers and are powered by the [*AWS Nitro System.*](/ec2/nitro/) They deliver up to 60 percent better price performance over x86-based EC2 Mac instances for iOS and macOS application build workloads. EC2 M1 Mac instances enable ARM64 macOS environments for the first time in AWS, and support macOS Big Sur (11) and macOS Monterey (12) as Amazon Machine Images (AMIs). EC2 M1 Mac instances are available in 4 Regions: US East (N. Virginia), US West (Oregon), Europe (Ireland), and Asia Pacific (Singapore). Learn more and get started with EC2 M1 Mac instances [*here.*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html#mac-instance-launch)

**Q: What are EC2 M1 Ultra Mac instances?  
**  
EC2 M1 Ultra Mac instances are built on Apple M1 Ultra Mac Studio computers and are powered by the [*AWS Nitro System.*](/ec2/nitro/) EC2 M1 Ultra Mac instances enable ARM64 macOS environments, and support macOS Ventura (13) or later as Amazon Machine Images (AMIs). EC2 M1 Ultra Mac instances are available in 2 Regions: US East (N. Virginia), US West (Oregon). Learn more and get started with EC2 M1 Ultra Mac instances [*here.*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html#mac-instance-launch)

**Q: What are EC2 M2 Mac instances?**

EC2 M2 Mac instances are built on Apple M2 Mac mini computers and powered by the [*AWS Nitro System*](/ec2/nitro/). They are up to 10% more performant than EC2 M1 Mac instances for iOS and macOS application build workloads. EC2 M2 Mac instances enable ARM64 macOS environments on AWS and support macOS Ventura (version 13.2 and later) as Amazon Machine Images (AMIs). EC2 M2 Mac instances are available in 6 Regions: US East (N. Virginia, Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), and Asia Pacific (Sydney). Learn more and get started with EC2 M2 Mac instances [*here*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html#mac-instance-launch).  
  
**Q: What are EC2 M2 Pro Mac instances?**  
  
EC2 M2 Pro Mac instances are built on Apple M2 Pro Mac mini computers and powered by the AWS Nitro System. They are up to 35% more performant than EC2 M1 Mac instances for iOS and macOS application build workloads. EC2 M2 Pro Mac instances enable ARM64 macOS environments on AWS and support macOS Ventura (version 13.2 and later) as Amazon Machine Images (AMIs). EC2 M2 Pro Mac instances are available in 4 Regions: US East (N. Virginia, Ohio), US West (Oregon), and Asia Pacific (Sydney). Learn more and get started with EC2 M2 Pro Mac instances [*here*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html#mac-instance-launch).

**Q: What pricing models are available for EC2 Mac instances?**

Amazon EC2 Mac instances are available as Dedicated Hosts through both On-Demand and Savings Plans pricing models. The Dedicated Host is the unit of billing for EC2 Mac instances. Billing is per second, with a 24-hour minimum allocation period for the Dedicated Host to comply with the Apple macOS Software License Agreement. At the end of the 24-hour minimum allocation period, the host can be released at any time with no further commitment. Both Compute and Instance Savings Plans are available for EC2 Mac instances and offer up to 44 percent off On-Demand pricing. Visit the [*Dedicated Host pricing page*](/ec2/dedicated-hosts/pricing/) for more information. (Note: Please select “Dedicated Host” tenancy and “Linux” operating system to view details.) You can also access EC2 Mac instances pricing on the [*AWS Pricing Calculator for Dedicated Hosts.*](https://calculator.aws/#/)**  
**

**Q: How do you release a Dedicated Host?**

The minimum allocation period for an EC2 Mac instance Dedicated Host is 24 hours. After the allocation period has exceeded 24 hours, first stop or terminate the instance running on the host, then release the host using the aws ec2 release-hosts CLI command or the AWS Management Console.

**Q: Can you share EC2 Mac Dedicated Hosts with other AWS accounts in your organization?**

Yes. You can share EC2 Mac Dedicated Hosts with AWS accounts inside your AWS organization, an organizational unit inside your AWS organization, or your entire AWS organization via AWS Resource Access Manager. For more information, please refer to the [*AWS Resource Access Manager*](/ram/) documentation.

**Q: How many EC2 Mac instances can you run on an EC2 Mac Dedicated Host?**

EC2 Mac instances leverage the full power of the underlying Mac mini hardware. You can run 1 EC2 Mac instance on each EC2 Mac Dedicated Host.

**Q: Can you update the EFI NVRAM variables on an EC2 Mac instance?**

Yes, you can update certain EFI NVRAM variables on an EC2 Mac instance that will persist across reboots. However, EFI NVRAM variables will be reset if the instance is stopped or terminated. Please see the [*EC2 Mac instances documentation*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html#mac-instance-stop) for more information.

**Q: Can you use FileVault to encrypt the Amazon Elastic Block Store (Amazon EBS) boot volume on EC2 Mac instances?**

FileVault requires a login before booting into macOS and before remote access can be enabled. If FileVault is enabled, you will lose access to your data on the boot volume at instance reboot, stop, or terminate. We strongly recommend you do not enable FileVault. Instead, we recommend using Amazon EBS encryption for both boot and data EBS volumes on EC2 Mac instances.

**Q: Can you access to the microphone input or audio output on an EC2 Mac instance?**

There is no access to the microphone input on an EC2 Mac instance. The built-in Apple Remote Desktop VNC server does not support audio output. Third party remote desktop software, such as [*Teradici CAS*](/marketplace/pp/prodview-isaghmqny2wr6), supports remote audio on macOS.

**Q: What macOS-based Amazon Machine Images (AMIs) are available for EC2 Mac instances?**

EC2 Mac instances use physical Mac mini hardware to run macOS. Apple hardware only supports the macOS version shipped with the hardware (or later). x86-based EC2 Mac instances use the 2018 Intel Core i7 Mac mini, which means macOS Mojave (10.14.x) is as 'far back' as you can go, since the 2018 Mac mini shipped with Mojave. EC2 M1 Mac instances use 2020 M1 Mac mini, which shipped with macOS Big Sur (11.x). EC2 M2 and M2 Pro Mac instances use the 2023 M2 and M2 Pro Mac Minis respectively, which shipped with macOS Ventura (13.2). To see which latest versions of macOS are available as EC2 Mac AMIs, please visit the [*documentation*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html).

**Q: How can you run older versions of macOS on EC2 Mac instances?**

EC2 Mac instances are bare metal instances and do not use the Nitro hypervisor. You can install and run a type-2 virtualization layer on x86-based EC2 Mac instances to get access to macOS High Sierra, Sierra, or older macOS versions. On EC2 M1 Mac instances, as macOS Big Sur is the first macOS version to support Apple Silicon, older macOS versions will not run even under virtualization.

**Q: How can I run beta or preview versions of macOS on EC2 Mac instances?**

Installation of beta or preview macOS versions is only available on Apple Silicon-based EC2 Mac Instances . Amazon EC2 doesn't qualify beta or preview macOS versions and doesn't ensure instances will remain functional after an update to a pre-production macOS version.

**Q: How can you use EC2 user data with EC2 Mac instances?**

As with EC2 Linux and Windows instances, you can pass custom user data to EC2 Mac instances. Instead of using [*cloud-init*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html), EC2 Mac instances use an open-source launch daemon: [*ec2-macos-init*](https://github.com/aws/ec2-macos-init). You can pass this data into the EC2 Launch Wizard as plain-text, as a file, or as base64-encoded-text.

**Q: How do you install Xcode on an EC2 Mac instance?  
**  
AWS provides base macOS AMIs without any prior Xcode IDE installation. You can install Xcode (and accept the EULA) just like you would on any other macOS system. You can install the latest Xcode IDE from the App Store, or earlier Xcode versions from the Apple Developer website. Once you have Xcode installed, we recommend creating a snapshot of your AMI for future use.

**Q: What is the release cadence of macOS AMIs?**

We make new macOS AMIs available on a best effort basis. You can subscribe to SNS notifications for updates. We are targeting 30-60 days after a macOS minor version update and 90-120 days after a macOS major version update to release official macOS AMIs.

**Q: What agents and packages are included in EC2 macOS AMIs?**

The following agents and packages are included by default in EC2 macOS AMIs:

- ENA Driver for macOS

- AWS CLI

- EC2-macos-init

- Amazon CloudWatch Agent

- Chrony

- Homebrew

- AWS Systems Manager Agent

**Q: Can you update the agents and packages included in macOS AMIs?**

There is a [*public GitHub repository of the Homebrew tap*](https://github.com/aws/homebrew-aws) for all agents and packages added to the base macOS image. You can use Homebrew to install the latest versions of agents and packages on macOS instances.

**Q: Can you apply OS and software updates to your Mac instances directly from Apple Update Servers?**

Automatic macOS software updates are disabled on EC2 Mac instances. We recommend using our officially vended macOS AMIs to launch the version of macOS you need. On x86-based and all Apple Silicon EC2 Mac instances, you can update the version of macOS via the Software Update preferences pane, or via the software update CLI command. On both EC2 Mac instances, you can install and update applications and any other user-space software.

**Q: How do you connect to an EC2 Mac instance over SSH?**

After launching your instance and receiving an instance id, you can use the following command to poll the instance and determine when it is ready for SSH access. Connecting over SSH to EC2 Mac instances follows the same process as connecting to other EC2 instances, such as those running Linux or Windows. To support connecting to your instance using SSH, launch the instance using a key pair and a security group that allows SSH access. Provide the .pem file for the key pair when you connect to the instance. For more information, please see the [*documentation*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html#mac-instance-ssh).

**Q: How do you connect to an EC2 Mac instance over VNC?**

macOS has built-in Screen Sharing functionality that is disabled by default, but can be enabled and used to connect to a Graphical (Desktop) session of your EC2 Mac instance. For more information on how to enable the built-in Screen Sharing, please see the [*documentation*](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-mac-instances.html#mac-instance-vnc).

**Q: How do you connect to an EC2 Mac instance using AWS Systems Manager Session Manager?**

You can connect to your EC2 Mac instances with AWS Systems Manager Session Manager (SSM). Session Manager is a fully managed [*AWS Systems Manager*](/systems-manager/) feature that provides secure and auditable instance management. It removes the need to keep open inbound ports, maintain bastion hosts, or manage SSH keys. The SSM Agent is pre-installed by default on all EC2 macOS AMIs. For more information, please see [*this blog*](/blogs/mt/manage-your-amazon-ec2-macos-instances-with-aws-systems-manager/).  

**Q: How many Amazon EBS volumes and Elastic Network Interfaces (ENIs) are supported by EC2 Mac instances?**

x86-based EC2 Mac instances support 16 EBS volumes and 8 ENI attachments, and EC2 M1 Mac instances support up to 10 EBS volumes and 8 ENI attachments.

**Q: Do EC2 Mac instances support EBS?**

EC2 Mac instances are EBS optimized by default and offer up to 8 Gbps of dedicated EBS bandwidth to both encrypted and unencrypted EBS volumes.

**Q: Do EC2 Mac instances support booting from local storage?**

EC2 Mac instances can only boot from EBS-backed macOS AMIs. The internal SSD of the Mac mini is present in Disk Utility, but is not bootable.

**Q: Do EC2 Mac instances support Amazon FSx?**

Yes. EC2 Mac instances support FSx using the SMB protocol. You will need to enroll the EC2 Mac instance into a supported directory service (such as Active Directory or the AWS Directory Service) to enable FSx on EC2 Mac instances. For more information on FSx, visit the [*product page*](/fsx/windows/).

**Q: Do EC2 Mac instances support Amazon Elastic File System (Amazon EFS)?**

Yes, EC2 Mac instances support EFS over the NFSv4 protocol. For more information on EFS, visit the [*product page*](/efs/).

## Nitro System support for previous generation

[Open all](#)

### Nitro System support for previous generation

## Get Started

[](/ec2/resources/?nc=nsb&pg=faq)

### Check out additional product-related resources

There are many resources to help you learn how to build with Amazon EC2.

Learn more

[](/free/)

### Sign up for a free account

Instantly get access to the AWS Free Tier.

Sign up

[](/ec2/faqs/#)

### Start building in the console

Get started building with Amazon EC2 in the AWS Management Console.

Get started
