// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { links } = require('./vars');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CRBT Docs',
  url: links.base,
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'https://crbt.app/favicon.png',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass', '@docusaurus/plugin-pwa'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          editUrl: 'https://github.com/CRBT-Team/docs/tree/main/',
        },
        blog: {
          routeBasePath: '/blog',
          postsPerPage: 1,
          showReadingTime: true,
          blogTitle: 'CRBT Blog',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
        // disableSwitch: true,
      },

      navbar: {
        title: 'CRBT Docs',
        logo: {
          alt: 'CRBT logo',
          src: 'https://crbt.app/assets/logos/CRBT-logo-black.svg',
          srcDark: 'https://crbt.app/assets/logos/CRBT-logo-white.svg',
        },
        hideOnScroll: true,
        items: [
          {
            position: 'left',
            label: 'CRBTscript',
            to: 'crbtscript/intro',
          },
          {
            position: 'left',
            label: 'API',
            to: 'api/intro',
          },
          {
            position: 'left',
            label: 'Purplet',
            to: 'https://github.com/CRBT-Team/Purplet',
          },
          {
            to: 'https://github.com/CRBT-Team/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          src: `/wordmark-color.svg`,
          alt: 'CRBT',
          href: links.base,
          width: '200px',
        },
        copyright: `© ${new Date().getFullYear()} All rights reserved. CRBT is not affiliated with Discord.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
