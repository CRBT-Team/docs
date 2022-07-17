// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { links } = require('./vars');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CRBT Resources',
  url: links.base,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          editUrl: 'https://github.com/CRBT-Team/resources.crbt.app/tree/main/',
        },
        blog: {
          routeBasePath: '/',
          feedOptions: {
            type: 'rss',
            title: 'Blog - CRBT',
            copyright: `© ${new Date().getFullYear()} CRBT Team`,
            language: 'en-US',
          },
          postsPerPage: 1,
          showReadingTime: true,
          blogTitle: 'CRBT Blog',
          blogSidebarTitle: 'Blog',
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
      announcementBar: {
        content:
          'Welcome to the new CRBT documentation & blog website! Explore the new changes and features in <a href="/announcements/new-resources-website">this blog article</a>.',
        isCloseable: false,
        textColor: '#fff',
        backgroundColor: 'var(--ifm-color-primary)',
      },
      colorMode: {
        respectPrefersColorScheme: true,
        // disableSwitch: true,
      },

      navbar: {
        title: 'CRBT',
        logo: {
          alt: 'CRBT logo',
          src: 'https://crbt.app/assets/logos/CRBT-logo-black.svg',
          srcDark: 'https://crbt.app/assets/logos/CRBT-logo-white.svg',
        },
        hideOnScroll: true,
        items: [
          // {
          //   type: 'localeDropdown',
          //   position: 'left',
          //   dropdownItemsAfter: [
          //     {
          //       to: 'https://crowdin.com/project/crbt-docs',
          //       label: 'Help us translate',
          //     },
          //   ],
          // },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Docs',
            items: [
              {
                type: 'doc',
                docId: 'crbtscript/intro',
                label: 'CRBTscript',
              },
              {
                type: 'doc',
                docId: 'api/intro',
                label: 'API',
              },
              {
                to: 'https://purplet.js.org',
                label: 'Purplet',
              },
            ],
          },
          { to: '/', label: 'Blog', position: 'left' },
          {
            to: 'https://github.com/CRBT-Team/resources.crbt.app',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `
                  
                <a href="${links.base}">
                <img src="${links.base}/assets/logos/CRBT-wordmark-white.png" alt="CRBT logo" />
                </a>
                `,
              },
              {
                html: '<p>&copy; 2022 All rights reserved.<br />CRBT is not affiliated with Discord.</p>',
                // to: 'https://crowdin.com/project/crbt-docs',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Invite',
                to: `${links.base}/invite`,
              },
              {
                label: 'Changelog',
                to: `${links.blog}/changelog`,
              },
              {
                label: 'CRBTscript',
                to: `${links.blog}`,
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'GitHub',
                to: `${links.base}/github`,
              },
              {
                label: 'Purplet',
                to: `https://purplet.js.org`,
              },
              {
                label: 'API',
                to: `${links.docs}/api`,
              },
            ],
          },
          {
            title: 'Policies',
            items: [
              {
                label: 'Credits',
                to: `${links.base}/credits`,
              },
              {
                label: 'Privacy',
                to: `${links.base}/privacy`,
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Discord',
                to: `${links.base}/discord`,
              },
              {
                label: 'Twitter',
                to: `${links.base}/twitter`,
              },
              {
                label: 'Email',
                to: `mailto:clembs@clembs.xyz`,
              },
            ],
          },
        ],
        // copyright: `© ${new Date().getFullYear()} All rights reserved. CRBT is not affiliated with Discord.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
