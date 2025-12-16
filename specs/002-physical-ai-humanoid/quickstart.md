# Quickstart Guide: Physical AI & Humanoid Robotics

## Prerequisites

### Hardware Requirements
- Ubuntu 22.04 LTS
- NVIDIA RTX 4090/4080 (recommended) or RTX 4070 Ti (minimum)
- NVIDIA Jetson Orin (for edge deployment)
- RealSense D435i/D455 depth camera
- Unitree Go2/G1 or compatible humanoid robot

### Software Requirements
- ROS 2 Humble Hawksbill
- CUDA 12.2
- NVIDIA Isaac Sim (Omniverse)
- Docker and Docker Compose
- Python 3.10+

## Installation Steps

### 1. System Setup
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install basic dependencies
sudo apt install python3-pip python3-colcon-common-extensions git curl wget
```

### 2. Install ROS 2 Humble
```bash
# Set locale
locale  # check for UTF-8
sudo apt update && sudo apt install locales
sudo locale-gen en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

# Add ROS 2 apt repository
sudo apt install software-properties-common
sudo add-apt-repository universe
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null

sudo apt update
sudo apt install ros-humble-desktop
sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
```

### 3. Install NVIDIA Drivers and CUDA
```bash
# Install NVIDIA drivers
sudo apt install nvidia-driver-535

# Install CUDA 12.2
wget https://developer.download.nvidia.com/compute/cuda/12.2.0/local_installers/cuda_12.2.0_535.54.03_linux.run
sudo sh cuda_12.2.0_535.54.03_linux.run
```

### 4. Install Isaac Sim
```bash
# Download Isaac Sim from NVIDIA Developer website
# Follow NVIDIA's installation guide for Isaac Sim
```

### 5. Install Isaac ROS
```bash
# Clone Isaac ROS repository
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_common.git
cd isaac_ros_common
git checkout <latest-release-tag>

# Build Isaac ROS packages
cd ~/isaac_ros_ws
colcon build --symlink-install
source install/setup.bash
```

### 6. Install Navigation2
```bash
sudo apt install ros-humble-navigation2 ros-humble-nav2-bringup
```

## Module 1: ROS 2 Fundamentals

### Setup and Test
```bash
# Source ROS 2
source /opt/ros/humble/setup.bash

# Create workspace
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws

# Build workspace
colcon build
source install/setup.bash

# Test basic ROS 2 functionality
ros2 topic list
```

## Module 2: Digital Twin Simulation

### Gazebo Setup
```bash
# Install Gazebo Garden
sudo apt install ros-humble-gazebo-*

# Launch simulation environment
ros2 launch gazebo_ros empty_world.launch.py
```

## Module 3: AI-Robot Brain (NVIDIA Isaac™)

### Isaac Sim Setup
```bash
# Launch Isaac Sim
./isaac-sim/python.sh

# Load humanoid robot model in Isaac Sim
# Configure synthetic data generation
```

### Isaac ROS Setup
```bash
# Source Isaac ROS workspace
source ~/isaac_ros_ws/install/setup.bash

# Launch Isaac ROS perception pipeline
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### Navigation2 Configuration
```bash
# Launch navigation stack
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true
```

## Module 4: Vision-Language-Action (VLA)

### Whisper Installation
```bash
pip3 install openai-whisper
```

### LLM Integration
```bash
# Install LLM client library
pip3 install openai

# Test voice command processing
python3 -c "import whisper; print('Whisper installed successfully')"
```

## Running the Complete System

### 1. Launch Simulation Environment
```bash
# Terminal 1: Launch Isaac Sim or Gazebo
# Terminal 2: Launch ROS 2 nodes
source ~/ros2_ws/install/setup.bash
ros2 launch robot_bringup robot.launch.py
```

### 2. Launch Perception Systems
```bash
# Terminal 3: Launch Isaac ROS perception
source ~/isaac_ros_ws/install/setup.bash
ros2 launch perception_pipeline.launch.py
```

### 3. Launch Navigation System
```bash
# Terminal 4: Launch Navigation2
source /opt/ros/humble/setup.bash
ros2 launch nav2_bringup navigation_launch.py
```

### 4. Launch VLA System
```bash
# Terminal 5: Launch Voice-Language-Action
source ~/ros2_ws/install/setup.bash
ros2 run vla_system voice_control_node
```

## Testing the Autonomous System

### Basic Functionality Test
```bash
# Send a simple navigation command
ros2 action send_goal /navigate_to_pose nav2_msgs/action/NavigateToPose "{pose: {pose: {position: {x: 1.0, y: 1.0, z: 0.0}, orientation: {z: 0.0, w: 1.0}}, header: {frame_id: 'map'}}}"
```

### Voice Command Test
```bash
# Speak a command like "Go to the kitchen" to test VLA pipeline
# Check that the robot plans and executes the appropriate action
```

## Troubleshooting

### Common Issues

1. **CUDA/GPU Issues**: Verify NVIDIA drivers and CUDA installation:
   ```bash
   nvidia-smi
   nvcc --version
   ```

2. **ROS 2 Network Issues**: Check ROS 2 domain ID and network configuration:
   ```bash
   echo $ROS_DOMAIN_ID
   ros2 topic list
   ```

3. **Isaac Sim Not Launching**: Ensure Omniverse is properly installed and licensed.

4. **RealSense Camera Issues**: Install RealSense SDK:
   ```bash
   sudo apt install ros-humble-realsense2-camera
   ```

## Next Steps

After completing the quickstart:
1. Follow Module 1 to learn ROS 2 fundamentals
2. Proceed to Module 2 for digital twin simulation
3. Advance to Module 3 for Isaac platform integration
4. Complete Module 4 for Vision-Language-Action systems
5. Integrate all modules in the capstone project