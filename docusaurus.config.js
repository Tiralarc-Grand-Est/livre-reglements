// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "Règlements sportifs et Arbitrage - Fédération Française de Tir à l'Arc",
  url: "https://reglements-sportifs.tiralarc-grand-est.fr",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Tiralarc-Grand-Est", // Usually your GitHub org/user name.
  projectName: "livre-reglements", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "reglements",
          editUrl:
            "https://github.com/Tiralarc-Grand-Est/livre-reglements/tree/main/",
          routeBasePath: "reglements",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Règlements sportifs et Arbitrage",
        logo: {
          alt: "Fédération Française de Tir à l'Arc",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "generaux/index",
            position: "left",
            label: "Règlements Généraux",
          },
          {
            type: "doc",
            docId: "sportifs",
            position: "left",
            label: "Règlements Sportifs",
          },
          {
            href: "https://github.com/Tiralarc-Grand-Est/livre-reglements",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Règlements",
            items: [
              {
                label: "Règlements Généraux",
                to: "/reglements/generaux",
              },
              {
                label: "Règlements Sportifs",
                to: "/reglements/generaux",
              },
            ],
          },
          {
            title: "Plus",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Tiralarc-Grand-Est/livre-reglements",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fédération Française de Tir à l'Arc. Généré avec Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
