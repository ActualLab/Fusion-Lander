// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Actual Lab',
  tagline: 'Implement Real-time in .NET',
  url: 'https://actuallab.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ActualLab', // Usually your GitHub org/user name.
  projectName: 'Fusion-Lander', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ActualLab/Fusion-Lander/blob/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ActualLab/Fusion-Lander/blob/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Actual Lab',
        items: [
          {
            type: 'doc',
            docId: 'overview/introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: '/category/quickstarts',
            position: 'left',
            label: 'Quickstarts',
          },
          {
            type: 'doc',
            docId: '/category/project-samples',
            position: 'left',
            label: 'Project samples',
          },
          {
            type: 'doc',
            docId: 'overview/introduction',
            position: 'left',
            label: 'Code examples',
          },
          {
            href: 'https://github.com/ActualLab/Stl.Fusion',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              // {
              //   label: 'Tutorial',
              //   to: '/docs/overview',
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/EKEwv6d',
              },
            ],
          },
          {
            title: 'More',
            items: [              
              {
                label: 'GitHub',
                href: 'https://github.com/ActualLab/Stl.Fusion',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Actual Lab`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
