//@ts-check
const path = require("path");
const visit = require("unist-util-visit");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "AAS-Core-Meta Documentation",
  tagline: "AAS-Core-Meta Documentation",
  url: "https://docs.<tbd>.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "ass-core-meta",
  projectName: "aas-core-meta-documentation",
  plugins: ["docusaurus-tailwindcss-loader"],
  themeConfig: {
    // Colormode
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          content: `url(/img/moon.svg)`,
          transform: "scale(2)",
          margin: "0 0.2rem",
        },
        lightIcon: "\u{1F602}",
        lightIconStyle: {
          content: `url(/img/sun.svg)`,
          transform: "scale(2)",
        },
      },
    },
    // Navbar
    navbar: {
      hideOnScroll: true,
      items: [
        {
          activeBasePath: "/docs",
          label: "Version",
          items: [
            {
              to: "/docs/v3rc02/overview-v3rc02",
              activeBasePath: "/docs/v3rc02/",
              label: "V3.RC02",
            },
            {
              to: "docs/v3rc01/overview-v3rc01",
              activeBasePath: "docs/v3rc01/",
              label: "V3.RC01",
            },
          ],
        },
      ],
    },
    footer: {},
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // Will be passed to @docusaurus/plugin-content-docs
        docs: {
          sidebarPath: require.resolve("./sidebars/index.js"),
          routeBasePath: "docs",
          exclude: ["**/shared/**"],
          editUrl:
            "https://github.com/gillistephan/aas-core-meta-docs/blob/main",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          includeCurrentVersion: true,
          remarkPlugins: [
            [
              () =>
                function addTSNoCheck(tree) {
                  // Disable TS type checking for any TypeScript code blocks.
                  // This is because imports are messy with snipsync: we don't
                  // have a way to pull in a separate config for every example
                  // snipsync pulls from.
                  function visitor(node) {
                    if (!/^ts$/.test(node.lang)) {
                      return;
                    }
                    node.value = "// @ts-nocheck\n" + node.value.trim();
                  }

                  visit(tree, "code", visitor);
                },
              {},
            ],
            [
              require("remark-typescript-tools").transpileCodeblocks,
              {
                compilerSettings: {
                  tsconfig: path.join(
                    __dirname,
                    "docs",
                    "typescript",
                    "tsconfig.json"
                  ),
                  externalResolutions: {},
                },
                fileExtensions: [".md", ".mdx"],
                // remark-typescript-tools automatically running prettier with a custom config that doesn't
                // line up with ours. This disables any post processing, including the default prettier step.
                postProcessTs: (files) => files,
                postProcessTranspiledJs: (files) => files,
              },
            ],
            [
              () =>
                function removeTSNoCheck(tree) {
                  function visitor(node) {
                    if (!/^ts$/.test(node.lang) && !/^js$/.test(node.lang)) {
                      return;
                    }
                    if (node.value.startsWith("// @ts-nocheck\n")) {
                      node.value = node.value.slice("// @ts-nocheck\n".length);
                    }
                    // If TS compiled output is empty, replace it with a more helpful comment
                    if (
                      node.lang === "js" &&
                      node.value.trim() === "export {};"
                    ) {
                      node.value = "// Not required in JavaScript";
                    } else if (node.lang === "js") {
                      node.value = convertIndent4ToIndent2(node.value).trim();
                    }
                  }
                  visit(tree, "code", visitor);
                },
              {},
            ],
          ],
        },
        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};

function convertIndent4ToIndent2(code) {
  // TypeScript always outputs 4 space indent. This is a workaround.
  // See https://github.com/microsoft/TypeScript/issues/4042
  return code.replace(/^( {4})+/gm, (match) => {
    return "  ".repeat(match.length / 4);
  });
}
