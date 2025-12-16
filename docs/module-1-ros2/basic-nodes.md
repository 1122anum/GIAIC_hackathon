---
sidebar_position: 2
---

# Basic ROS 2 Nodes

In this section, we'll create our first ROS 2 nodes to understand the basic communication patterns.

## Creating a Simple Publisher Node

Let's create a node that publishes messages to a topic:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1


def main(args=None):
    rclpy.init(args=args)

    minimal_publisher = MinimalPublisher()

    rclpy.spin(minimal_publisher)

    # Destroy the node explicitly
    minimal_publisher.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

## Creating a Simple Subscriber Node

Now let's create a node that subscribes to the topic:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main(args=None):
    rclpy.init(args=args)

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

## Building and Running the Nodes

To build these nodes, you'll need to create a `setup.py` file and use `colcon build`. The complete example can be found in the course materials under `course-materials/module-1-ros2/`.

## Understanding the Code

The publisher node creates a timer that publishes a message every 0.5 seconds. The subscriber node listens to the same topic and logs the received messages. This demonstrates the publish-subscribe communication pattern that is fundamental to ROS.

## Next Steps

In the next section, we'll explore more complex message types and learn how to create custom messages for our robot applications.