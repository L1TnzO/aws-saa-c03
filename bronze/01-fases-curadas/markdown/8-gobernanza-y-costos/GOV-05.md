> **BRONZE Markdown** — `GOV-05` · Servicio: **AWS Systems Manager** · Fase 8 · Dominios examen: D2, D4
> URL oficial: https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html
> Título oficial: What is AWS Systems Manager?

AWS Systems Manager helps you centrally view, manage, and operate nodes at scale in AWS,
on-premises, and multicloud environments. With the launch of a unified console experience,
Systems Manager consolidates various tools to help you complete common node tasks across
AWS accounts and AWS Regions.

To use Systems Manager, nodes must be managed (https://docs.aws.amazon.com/systems-manager/latest/userguide/operating-systems-and-machine-types.html#supported-machine-types), which means SSM Agent is installed on the machine and the agent can
communicate with the Systems Manager service. To help you identify why nodes aren't reporting as
*managed*, Systems Manager offers a diagnosis and
remediation runbook. You can configure this runbook to run automatically on a schedule.
This feature helps identify why nodes can't connect to Systems Manager, including networking
misconfigurations. It also provides recommended runbooks for remediating
issues preventing nodes from being managed.

The unified console experience also includes a dashboard that provides a high-level
overview of your nodes. You can drill down for more specific node insights such as which
nodes are running outdated operating system (OS) software. You can also use filters for
granular views based on instance metadata like OSs and OS versions, AWS Regions,
AWS accounts, and SSM Agent versions. These filters help you retrieve relevant information
at a specific account level or application level across your entire organization.

###### Topics

- How can Systems Manager benefit my operations? (#benefits)
- Who should use Systems Manager? (#use-cases)
- What are the main features of Systems Manager? (#features)
- Supported AWS Regions (#regions)
- Accessing Systems Manager (#access-methods)
- Systems Manager service name history (#service-naming-history)
- Supported operating systems and machine types (./operating-systems-and-machine-types.html)
- What is the unified console? (./systems-manager-unified-console.html)

## How can Systems Manager benefit my operations?

Benefits of Systems Manager include the following:

- **Enhance visibility across your entire
infrastructure**
Systems Manager provides a centralized view of nodes across your organization's accounts
and Regions. Quickly access instance information such as ID, name, OS details,
and installed agents. Use Amazon Q Developer to query instance metadata using
natural language, helping you identify issues and take action faster.
- **Boost operational efficiency with
automation**
Automate common operational tasks and reduce time and effort required to
maintain your systems. Systems Manager provides safe and secure remote management of your
nodes at scale without logging into your servers. You no longer need to use
bastion hosts, SSH, or remote PowerShell. Systems Manager also provides a simple way of
automating common administrative tasks across groups of nodes such as registry
edits, user management, and software and patch installations.
- **Simplify node management at scale in any
environment**
Systems Manager helps you manage nodes across AWS, on-premises, and multicloud
environments. Schedule automated diagnoses to identify SSM Agent issues and
remediate them with runbooks. After your nodes are configured as
*managed* nodes, you can execute critical operational
tasks such as applying security patches, initiating logged sessions, and running
commands remotely.

## Who should use Systems Manager?

Systems Manager is used by IT operations managers and operators, DevOps engineers, security and
compliance managers, and IT directors and CIOs. Broadly speaking, Systems Manager is appropriate
for the following:

- Organizations that want to improve the management and security of their nodes
at scale.
- Organizations that want to increase visibility and operational agility when
managing their infrastructure.
- Organizations that want to increase operational efficiency at scale.

## What are the main features of Systems Manager?

The primary features of Systems Manager are shared between the unified console and the
individual tools Systems Manager provides to help you manage nodes at scale.

**Unified console**

The unified console provides a centralized experience to view and manage your nodes.
This console uses several Systems Manager tools and more to provide you with the
following:

- Centralized views of your nodes
- Detailed node insights
- Automated diagnosis and remediation of common node issues

For more information about the unified console, see What is the unified console? (./systems-manager-unified-console.html).

**Tools**

Tools consist of the individual capabilities of Systems Manager and their features such as
Run Command, Session Manager, Automation, and Parameter Store. With Systems Manager tools you can do the
following:

- Just-in-time access node access
- Patch nodes at scale
- Securely connect to nodes without opening inbound ports
- Run commands remotely on nodes
- Securely store data referenced by applications
- Automate common systems administration tasks

For more information about Systems Manager tools, see Using AWS Systems Manager tools (./systems-manager-tools.html).

## Supported AWS Regions

For a list of AWS Regions that support Systems Manager
tools (./systems-manager-tools.html), see Systems Manager service endpoints (https://docs.aws.amazon.com/general/latest/gr/ssm.html#ssm_region) in the
*Amazon Web Services General Reference*.

The unified Systems Manager console, released on November 21, 2024, is available in the
following AWS Regions:

- US East (N. Virginia) Region
- US East (Ohio) Region
- US West (N. California) Region
- US West (Oregon) Region
- Canada (Central) Region
- South America (São Paulo) Region
- Asia Pacific (Mumbai) Region
- Asia Pacific (Tokyo) Region
- Asia Pacific (Seoul) Region
- Asia Pacific (Singapore) Region
- Asia Pacific (Sydney) Region
- Europe (Frankfurt) Region
- Europe (Stockholm) Region
- Europe (Ireland) Region
- Europe (London) Region
- Europe (Paris) Region

## Accessing Systems Manager

You can work with Systems Manager in any of the following ways:

Systems Manager console

The Systems Manager console (https://console.aws.amazon.com/systems-manager/) is a
browser-based interface to access and use Systems Manager.

AWS IoT Greengrass V2 console

You can view and manage edge devices that are configured for AWS IoT Greengrass in
the Greengrass console (https://console.aws.amazon.com/iot).

AWS command line tools

By using the AWS command line tools, you can issue commands at your
system's command line to perform Systems Manager and other AWS tasks. The tools are
supported on Linux, macOS, and Windows. Using the AWS Command Line Interface
(AWS CLI) can be faster and more convenient than using the console. The
command line tools also are useful if you want to build scripts that perform
AWS tasks.

AWS provides two sets of command line tools: the AWS Command Line Interface (https://aws.amazon.com/cli/) and the AWS Tools for Windows PowerShell (https://aws.amazon.com/powershell/). For information about installing
and using the AWS CLI, see the AWS Command Line Interface User Guide (https://docs.aws.amazon.com/cli/latest/userguide/). For information
about installing and using the Tools for Windows PowerShell, see the AWS Tools for PowerShell User Guide (https://docs.aws.amazon.com/powershell/latest/userguide/).

- ### On this page

How can Systems Manager benefit my operations? (#benefits)
- Who should use Systems Manager? (#use-cases)
- What are the main features of Systems Manager? (#features)
- Supported AWS Regions (#regions)
- Accessing Systems Manager (#access-methods)
- Systems Manager service name history (#service-naming-history)

#### Next topic:

Supported operating systems and machine types
