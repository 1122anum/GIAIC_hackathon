---
sidebar_position: 1
---

# Introduction to ROS 2 Fundamentals

This module introduces the core concepts of ROS 2 (Robot Operating System 2), which serves as the foundation for all robotics development in this course. ROS 2 provides the communication framework, tools, and conventions necessary for building complex robotic systems.

## Learning Objectives

After completing this module, you will be able to:

- Understand the core concepts of ROS 2 architecture
- Create and run basic ROS 2 nodes
- Work with topics, services, and actions
- Define robot models using URDF
- Configure robot controllers

## What is ROS 2?

ROS 2 is the next generation of the Robot Operating System, designed for production robotics applications. It addresses many of the limitations of ROS 1, including:

- Improved security and authentication
- Better real-time performance
- Support for multiple DDS implementations
- Enhanced cross-platform compatibility

## Key Concepts

### Nodes
Nodes are processes that perform computation. In ROS 2, nodes are written in various programming languages and communicate with each other through topics, services, and actions.

### Topics and Messages
Topics allow nodes to exchange data in a publish-subscribe pattern. Messages are the data structures used to exchange information between nodes.

### Services
Services provide a request-response communication pattern, allowing nodes to request specific actions from other nodes.

### Actions
Actions are similar to services but are designed for long-running tasks that may include feedback during execution.

## Prerequisites

Before starting this module, you should have:

- Basic understanding of Linux command line
- Familiarity with Python or C++
- ROS 2 Humble Hawksbill installed on your system

## Exercises

This module includes hands-on exercises where you will:

1. Create your first ROS 2 node
2. Implement publisher and subscriber nodes
3. Create a simple robot URDF model
4. Configure basic robot controllers

Continue to [Basic ROS 2 Nodes](./basic-nodes.md) to start implementing your first ROS 2 components.