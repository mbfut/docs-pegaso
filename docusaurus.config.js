// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pegaso',
  tagline: 'Gestionale per agenzie viaggi',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pegaso.futurasistemi.it',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Futura Sistemi S.r.l.', // Usually your GitHub org/user name.
  projectName: 'pegaso', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
      image: 'img/logo_pegaso_bgr_bianco.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Pegaso Logo',
          src: 'img/favicon.ico',// img/logo_pegaso_bgr_bianco.png
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentazione',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentazione',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://it.linkedin.com/company/futurasistemisrl',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Futura Sistemi S.r.l. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        "docusaurus-booklet",
        {
          cover: {
            title: "Documentazione Pegaso",
            subtitle: "Gestionale per agenzie viaggi",
            version: true,
            //backgroundImage: "static/img/logo_ginve-black.png",
            // width: "300px",
            // margin: {
            //   top: 0,
            //   right: 0,
            //   bottom: 0,
            //   left: 0,
            // },
          },
          header: {
            text: "Documentazione Pegaso",
            version: true, // => shows 'version' in 'package.json'
            style: "color: #dcdcdc; font-size: 9px;"
          },
          footer: {
            text: "Documentazione Pegaso",
            pageNumber: (pageNumber, totalPages) => `${pageNumber} di ${totalPages}`,
            style: "color: #dcdcdc; font-size: 9px; border-top: 1px solid #dcdcdc",
          }
        }
      ],
      // require.resolve('docusaurus-lunr-search')
      [ require.resolve('docusaurus-lunr-search'), {
        languages: ['it', 'en'] // , 'de' language codes
      }]
    ]
};

module.exports = config;
