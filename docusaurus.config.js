module.exports = {
  title: 'Physical AI Humanoid Course',
  tagline: 'Learn about Physical AI and Humanoid Robotics',
  url: 'https://your-site.vercel.app',
  baseUrl: '/',
  
  organizationName: 'your-organization',
  projectName: 'physical-ai-humanoid-course',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
  themeConfig: {
    navbar: {
      title: 'Physical AI Humanoid',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI Humanoid Course.`,
    },
  },
};