// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const randomVersion = `${Math.random() * 1000}`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Règlements sportifs et Arbitrage",
  tagline: "Fédération Française de Tir à l'Arc - Édition Février 2022",
  url: "https://livre-reglements.tiralarc-grand-est.fr/",
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

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            sizes: "192x192",
            href: "/img/icon-512.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: `/manifest.json?v=${randomVersion}`,
          },
          {
            tagName: "meta",
            name: "application-name",
            content: "Règlements FFTA",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-title",
            content: "Règlements FFTA",
          },
          {
            tagName: "meta",
            name: "msapplication-navbutton-color",
            content: "#215197",
          },
          {
            tagName: "meta",
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no",
          },
          {
            tagName: "meta",
            name: "msapplication-starturl",
            content: "/",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#215197",
          },
          {
            tagName: "meta",
            name: "mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "light",
          },
          {
            tagName: "link",
            sizes: "192x192",
            rel: "apple-touch-icon",
            href: "/img/icon-192.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/icon-vector.svg",
            color: "#fff",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/icon-512.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#fff",
          },
        ],
      },
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
            docId: "I/index",
            position: "left",
            label: "Règlements Généraux",
          },
          {
            type: "doc",
            docId: "II",
            position: "left",
            label: "Règlements Sportifs",
          },
          {
            href: "https://github.com/Tiralarc-Grand-Est/livre-reglements",
            label: "Contribuer",
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
                to: "/reglements/I",
              },
              {
                label: "Règlements Sportifs",
                to: "/reglements/I",
              },
              {
                label: "Version PDF officielle",
                href: "https://www.ffta.fr/vie-sportive/larbitrage/reglements-sportifs-et-arbitrage",
              },
            ],
          },
          {
            title: "Contributeurs",
            items: [
              {
                label: "Julien Blatecky",
                href: "https://github.com/Julien1619",
              },
              {
                label: "Hervé Paciel",
                href: "https://github.com/RV-HP",
              },
              {
                label: "Nous aider",
                href: "https://github.com/Tiralarc-Grand-Est/livre-reglements",
              },
            ],
          },
        ],
        copyright: `Site créé par Julien Blatecky, le règlement est propriété de la FFTA. Copyright © ${new Date().getFullYear()}. Généré avec Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "TXA5HPKN0T",
        apiKey: "c8e6afe48b408c3540a5210e2383a54f",
        indexName: "livre-reglements",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
