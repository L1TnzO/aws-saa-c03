> **BRONZE Markdown** — `CMP-14` · Servicio: **EC2 Auto Scaling** · Fase 3 · Dominios examen: D3
> URL oficial: https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html
> Título oficial: Target tracking scaling policies for Amazon EC2 Auto Scaling

A target tracking scaling policy automatically scales the capacity of your Auto Scaling
group based on a target metric value. It automatically adapts
to the unique usage patterns of your individual applications. This allows your application to maintain
optimal performance and high utilization for your EC2 instances for better cost efficiency without manual intervention.

With target tracking, you select a metric and a target value to represent the
ideal average utilization or throughput level for your application. Amazon EC2 Auto Scaling creates
and manages the CloudWatch alarms that invoke scaling events when the metric deviates from
the target. As an example, this is similar to how a thermostat maintains a target
temperature.

For example, let's say that you currently have an application that runs on two
instances, and you want the CPU utilization of the Auto Scaling group to stay at around 50
percent when the load on the application changes. This gives you extra capacity to
handle traffic spikes without maintaining an excessive number of idle resources.

You can meet this need by creating a target tracking scaling policy that targets
an average CPU utilization of 50 percent. Then, your Auto Scaling group will scale out, or
increase capacity, when CPU exceeds 50 percent to handle increased load. It will
scale in, or decrease capacity, when CPU drops below 50 percent to optimize costs
during periods of low utilization.

###### Topics

- Multiple target tracking scaling policies (#target-tracking-multiple-policies)
- Choose metrics (#target-tracking-choose-metrics)
- Define target value (#target-tracking-define-target-value)
- Define instance warmup time (#as-target-tracking-scaling-warmup)
- Considerations (#target-tracking-considerations)
- Create a target tracking scaling policy (./policy_creating.html)
- Create a target tracking policy using high-resolution metrics for faster response (./policy-creating-high-resolution-metrics.html)
- Create a target tracking scaling policy using metric math (./ec2-auto-scaling-target-tracking-metric-math.html)

## Multiple target tracking scaling policies

To help optimize scaling performance, you can use multiple target tracking
scaling policies together, provided that each of them uses a different metric.
For example, utilization and throughput can influence each other. Whenever one
of these metrics changes, it usually implies that other metrics will also be
impacted. The use of multiple metrics therefore provides additional information
about the load that your Auto Scaling group is under. This can help Amazon EC2 Auto Scaling make more
informed decisions when determining how much capacity to add to your group.

The intention of Amazon EC2 Auto Scaling is to always prioritize availability. It will scale
out the Auto Scaling group if any of the target tracking policies are ready to scale
out. It will scale in only if all of the target tracking policies (with the
scale in portion enabled) are ready to scale in.

## Choose metrics

You can create target tracking scaling policies with either predefined metrics
or custom metrics. Predefined metrics provide you easier access to the most
commonly used metrics for scaling. Custom metrics allow you to scale
on other available CloudWatch metrics including high-resolution metrics (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Resolution_definition) that are published at finer intervals in
the order of a few seconds. You can publish your own high-resolution metrics or metrics that other AWS
services publish.

For more information about creating target tracking policies using high resolution metrics, see
Create a target tracking policy using high-resolution metrics for faster response (./policy-creating-high-resolution-metrics.html).

Target tracking supports the following predefined metrics:

- `ASGAverageCPUUtilization`—Average CPU utilization of
the Auto Scaling group.
- `ASGAverageNetworkIn`—Average number of bytes
received on all network interfaces by the Auto Scaling group.
- `ASGAverageNetworkOut`—Average number of bytes sent
out on all network interfaces by the Auto Scaling group.
- `ALBRequestCountPerTarget`—Average Application Load Balancer request
count per target for your Auto Scaling group.

- ### On this page

Multiple target tracking scaling policies (#target-tracking-multiple-policies)
- Choose metrics (#target-tracking-choose-metrics)
- Define target value (#target-tracking-define-target-value)
- Define instance warmup time (#as-target-tracking-scaling-warmup)
- Considerations (#target-tracking-considerations)

#### Next topic:

Create a target tracking scaling policy

#### Previous topic:

Dynamic scaling
