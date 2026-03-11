// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UniCMMS Help Center',
  tagline: 'Step-by-step guides and documentation for your maintenance team.',
  favicon: 'img/favicon.ico',

  url: 'https://help.unicmms.com',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'fr', 'es', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      ar: {
        label: 'العربية',
        direction: 'rtl',
        htmlLang: 'ar',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
        htmlLang: 'de-DE',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/unicmms/help-center/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "ar", "fr", "es", "de"],
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/unicmms-social-card.png',

      metadata: [
        { name: 'keywords', content: 'CMMS, maintenance, work orders, assets, help center, documentation' },
        { name: 'description', content: 'UniCMMS Help Center — complete documentation for maintenance management including work orders, assets, meters, triggers, and preventive maintenance.' },
        { property: 'og:type', content: 'website' },
      ],

      announcementBar: {
        id: 'welcome_bar',
        content: '🚀 Welcome to the UniCMMS Help Center — your complete maintenance management reference',
        backgroundColor: '#46beb8',
        textColor: '#ffffff',
        isCloseable: true,
      },

      navbar: {
        title: 'UniCMMS',
        logo: {
          alt: 'UniCMMS',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          width: 36,
          height: 36,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://app.unicmms.com',
            label: 'Open App',
            position: 'right',
            className: 'navbar-app-link',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Getting Started', to: '/docs/intro' },
              { label: 'Work Orders', to: '/docs/maintenance/work-orders' },
              { label: 'Meters', to: '/docs/maintenance/meters' },
              { label: 'Triggers', to: '/docs/maintenance/triggers' },
            ],
          },
          {
            title: 'Maintenance',
            items: [
              { label: 'Procedure Templates', to: '/docs/maintenance/procedure-templates' },
              { label: 'Work Requests', to: '/docs/maintenance/work-requests' },
              { label: 'Regular Maintenance (PM)', to: '/docs/maintenance/regular-maintenance' },
            ],
          },
          {
            title: 'Support',
            items: [
              { label: 'Contact Support', href: 'mailto:support@unicmms.com' },
              { label: 'App Login', href: 'https://app.unicmms.com' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UniCMMS. All rights reserved.`,
      },

      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
