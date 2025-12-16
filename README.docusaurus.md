# Physical AI & Humanoid Robotics Course - Docusaurus Documentation

This directory contains the Docusaurus documentation for the Physical AI & Humanoid Robotics Course.

## Prerequisites

- Node.js version 18 or higher
- npm or yarn package manager

## Installation

1. Navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.