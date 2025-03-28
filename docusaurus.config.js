// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const variablesPlugin = require('./src/remark/variablesPlugin');
const componentImagePlugin = require('./src/remark/componentImagePlugin');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // TODO[dac]: noIndex should be removed, along with robots.txt and the
  // X-Robots-Tag:noindex in the /static/_headers file once we cutover
  noIndex: true,
  title: 'Calico & Tigera Docs',
  tagline: 'Active security for cloud-native applications',
  url: 'https://unified-docs.tigera.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

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
        // TODO: try to find a way to not specify a default instance
        docs: {
          path: 'default',
          sidebarPath: false,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/glyphicons.scss'),
            require.resolve('./src/css/external-links.scss'),
            require.resolve('./src/css/modal.scss'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'Q4GSZWRKBA',
        apiKey: '2ab3eace97419c5868153aac2e3d2e6c',
        indexName: '-', // sets automatically in swizzled SearchBar
        contextualSearch: false,
      },
      navbar: {
        title: 'Calico & Tigera Docs',
        logo: {
          alt: 'Calico & Tigera Docs',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Calico',
            type: 'docSidebar',
            sidebarId: 'calicoSidebar',
            docsPluginId: 'calico',
            position: 'left',
          },
          {
            label: 'Calico Enterprise',
            type: 'docSidebar',
            sidebarId: 'calicoEnterpriseSidebar',
            docsPluginId: 'calico-enterprise',
            position: 'left',
          },
          {
            label: 'Calico Cloud',
            type: 'docSidebar',
            sidebarId: 'calicoCloudSidebar',
            docsPluginId: 'calico-cloud',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            docsPluginId: 'calico',
          },
          {
            label: 'Tigera',
            href: 'https://tigera.io',
            position: 'right',
          },
          {
            label: 'Blog',
            href: 'https://tigera.io/blog',
            position: 'right',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/projectcalico',
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
              {
                label: 'Calico',
                to: '/calico/category/calico',
              },
              {
                label: 'Calico Enterprise',
                to: '/calico-enterprise/category/calico-enterprise',
              },
              {
                label: 'Calico Cloud',
                to: '/calico-cloud',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://slack.projectcalico.org/',
              },
              {
                label: 'Tigera Twitter',
                href: 'https://twitter.com/tigeraio',
              },
              {
                label: 'Calico Twitter',
                href: 'https://twitter.com/projectcalico',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/project-calico',
              },
              {
                label: 'Discourse',
                href: 'https://discuss.projectcalico.org/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Tigera Blog',
                href: 'https://tigera.io/blog',
              },
              {
                label: 'Calico GitHub',
                href: 'https://github.com/projectcalico',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tigera, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'calico',
        path: 'calico',
        routeBasePath: 'calico',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebars-calico.js'),
        beforeDefaultRemarkPlugins: [variablesPlugin, componentImagePlugin],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'calico-enterprise',
        path: 'calico-enterprise',
        routeBasePath: 'calico-enterprise',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebars-calico-enterprise.js'),
        beforeDefaultRemarkPlugins: [variablesPlugin, componentImagePlugin],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'calico-cloud',
        path: 'calico-cloud',
        routeBasePath: 'calico-cloud',
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebars-calico-cloud.js'),
        beforeDefaultRemarkPlugins: [variablesPlugin, componentImagePlugin],
      },
    ],
  ],
};

module.exports = config;
