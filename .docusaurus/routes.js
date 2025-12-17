import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '829'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4b6'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e86'),
            routes: [
              {
                path: '/docs/ai-education-research/ai-applications',
                component: ComponentCreator('/docs/ai-education-research/ai-applications', '7f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-education-research/conclusion',
                component: ComponentCreator('/docs/ai-education-research/conclusion', '963'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-education-research/implementation',
                component: ComponentCreator('/docs/ai-education-research/implementation', 'e90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-education-research/implementation-plan',
                component: ComponentCreator('/docs/ai-education-research/implementation-plan', '9bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-education-research/intro',
                component: ComponentCreator('/docs/ai-education-research/intro', '6e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-education-research/literature-review',
                component: ComponentCreator('/docs/ai-education-research/literature-review', '26c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-education-research/references',
                component: ComponentCreator('/docs/ai-education-research/references', '77b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-education-research/roi-analysis',
                component: ComponentCreator('/docs/ai-education-research/roi-analysis', '966'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-education-research/student-outcomes',
                component: ComponentCreator('/docs/ai-education-research/student-outcomes', 'd3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ai-education-research/teacher-workload',
                component: ComponentCreator('/docs/ai-education-research/teacher-workload', '9de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/ais-impact-on-k-12-classroom-efficiency',
                component: ComponentCreator('/docs/category/ais-impact-on-k-12-classroom-efficiency', '02e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/module-1-ros-2-fundamentals',
                component: ComponentCreator('/docs/category/module-1-ros-2-fundamentals', '91b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/module-2-digital-twin-simulation',
                component: ComponentCreator('/docs/category/module-2-digital-twin-simulation', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/module-3-isaac-platform',
                component: ComponentCreator('/docs/category/module-3-isaac-platform', '7d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/module-4-vision-language-action',
                component: ComponentCreator('/docs/category/module-4-vision-language-action', 'a2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/basic-nodes',
                component: ComponentCreator('/docs/module-1-ros2/basic-nodes', '08b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros2/introduction',
                component: ComponentCreator('/docs/module-1-ros2/introduction', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-digital-twin/introduction',
                component: ComponentCreator('/docs/module-2-digital-twin/introduction', 'eaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac-platform/',
                component: ComponentCreator('/docs/module-3-isaac-platform/', '898'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac-platform/integration',
                component: ComponentCreator('/docs/module-3-isaac-platform/integration', 'f83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac-platform/isaac-ros',
                component: ComponentCreator('/docs/module-3-isaac-platform/isaac-ros', '238'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac-platform/isaac-sim',
                component: ComponentCreator('/docs/module-3-isaac-platform/isaac-sim', '07b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-isaac-platform/nav2-humanoid',
                component: ComponentCreator('/docs/module-3-isaac-platform/nav2-humanoid', '33b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/',
                component: ComponentCreator('/docs/module-4-vla/', 'c89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/capstone',
                component: ComponentCreator('/docs/module-4-vla/capstone', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/llm-planning',
                component: ComponentCreator('/docs/module-4-vla/llm-planning', '764'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/nlp-ros',
                component: ComponentCreator('/docs/module-4-vla/nlp-ros', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-4-vla/whisper',
                component: ComponentCreator('/docs/module-4-vla/whisper', '50c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
