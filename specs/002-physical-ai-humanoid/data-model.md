# Data Model: Physical AI & Humanoid Robotics

## Core Entities

### CourseModule
- id: string (unique identifier like "001-ros2", "002-digital-twin", etc.)
- title: string (module title)
- description: string (detailed description)
- learningObjectives: string[] (list of learning objectives)
- prerequisites: string[] (required knowledge/skills)
- duration: number (estimated hours)
- dependencies: string[] (other modules this depends on)

### RobotConfiguration
- id: string (unique robot identifier)
- name: string (robot name like "Unitree Go2", "Unitree G1")
- urdfPath: string (path to URDF model)
- jointLimits: JointLimit[]
- sensorConfig: SensorConfiguration[]
- controllerConfig: ControllerConfiguration[]

### JointLimit
- jointName: string (name of the joint)
- lower: number (lower limit in radians)
- upper: number (upper limit in radians)
- velocity: number (max velocity)
- effort: number (max effort)

### SensorConfiguration
- sensorType: string ("camera", "lidar", "imu", "realsense", etc.)
- topicName: string (ROS topic for sensor data)
- frameId: string (TF frame ID)
- parameters: object (sensor-specific parameters)

### ControllerConfiguration
- controllerName: string (name of controller)
- controllerType: string (type like "position", "velocity", "effort")
- joints: string[] (list of joint names controlled)
- parameters: object (controller-specific parameters)

### IsaacEnvironment
- id: string (unique environment ID)
- name: string (environment name)
- description: string (description of the environment)
- usdPath: string (path to USD file)
- lighting: LightingConfiguration
- domainRandomization: DomainRandomizationConfig

### LightingConfiguration
- intensity: number (light intensity)
- color: string (color in hex format)
- position: Vector3 (3D position)

### Vector3
- x: number
- y: number
- z: number

### DomainRandomizationConfig
- textures: string[] (list of texture variations)
- materials: string[] (list of material variations)
- lighting: LightingVariations
- objects: ObjectVariations[]

### IsaacPerceptionPipeline
- id: string (unique pipeline ID)
- name: string (pipeline name)
- description: string (description of the pipeline)
- inputTopics: string[] (input ROS topics)
- outputTopics: string[] (output ROS topics)
- gpuAcceleration: boolean (whether GPU acceleration is used)
- parameters: object (pipeline-specific parameters)

### VLAPipeline
- id: string (unique pipeline ID)
- name: string (pipeline name)
- voiceInputTopic: string (topic for voice commands)
- textOutputTopic: string (topic for transcribed text)
- actionPlanTopic: string (topic for planned actions)
- llmConfiguration: LLMConfiguration

### LLMConfiguration
- model: string (LLM model identifier)
- apiEndpoint: string (API endpoint if applicable)
- parameters: object (model-specific parameters)
- safetyFilters: SafetyFilter[]

### SafetyFilter
- name: string (filter name)
- description: string (what the filter checks for)
- action: string ("block", "warn", "allow") (what to do when triggered)

### NavigationGoal
- id: string (unique goal ID)
- pose: Pose (target position and orientation)
- description: string (description of the goal)
- constraints: NavigationConstraints
- successCriteria: string[] (list of success conditions)

### Pose
- position: Vector3 (3D position)
- orientation: Quaternion (orientation as quaternion)

### Quaternion
- x: number
- y: number
- z: number
- w: number

### NavigationConstraints
- maxVelocity: number (maximum velocity)
- minDistanceToObstacles: number (minimum safe distance)
- preferredPath: string (preferred path type)
- safetyMargin: number (safety buffer distance)

### CapstoneProject
- id: string (unique project ID)
- name: string (project name)
- description: string (project description)
- modulesIntegrated: string[] (list of integrated modules)
- successCriteria: string[] (criteria for project completion)
- evaluationMetrics: EvaluationMetric[]
- safetyProtocols: SafetyProtocol[]

### EvaluationMetric
- name: string (metric name)
- description: string (what is measured)
- targetValue: number (target performance value)
- measurementMethod: string (how to measure)

### SafetyProtocol
- name: string (protocol name)
- description: string (what the protocol covers)
- activationConditions: string[] (when to activate)
- actions: string[] (actions to take)