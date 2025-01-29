import { hopeTheme } from "vuepress-theme-hope";
import { localesconfig, locales2 } from "./locales.js";

import path from "path";
import fs from "fs";

const docsDir = path.resolve(__dirname, "../");

const getSidebarItems = (dir) => {
    const items = [];
    const files = fs.readdirSync(dir, { withFileTypes: true });

    files.forEach((file) => {
        if (file.isDirectory() && file.name !== ".vuepress") {
            const folderName = file.name;
            const folderPath = path.join(dir, folderName);
            const children = fs
                .readdirSync(folderPath, { withFileTypes: true })
                .filter((child) => child.isFile() && child.name.endsWith(".md"))
                .map((child) => child.name.replace(".md", ""));

            if (children.length === 1 && children[0] === "README") {
                // Folder with just README.md
                items.push({
                    text: folderName.replace(/-/g, " ").toUpperCase(),
                    link: `/${folderName}/`,
                });
            } else {
                // Folder with other markdown files
                items.push({
                    text: folderName.replace(/-/g, " ").toUpperCase(),
                    link: `/${folderName}/`,
                    prefix: `/${folderName}`,
                    children: children.filter((child) => child !== "README"),
                });
            }
        }
    });

    return items;
};

const generateSidebar = () => {
    return getSidebarItems(docsDir);
};

export default hopeTheme({
  navbarLayout: {
    start: ["Brand", "Search"],
    center: ["Links"],
    end: ["Language", "Outlook", "Repo"],
  },

  sidebar: generateSidebar(),

  hostname: "https://repodevil.netlify.app",

  author: {
    name: "Moonpic, AbandonedCart",
  },

  iconAssets: "fontawesome",

  // logo: "logo.svg",
  // logoDark: "logo.svg",
  repo: "RepoDevil/Himitsu",
  docsDir: "src",

  locales: localesconfig,

  plugins: {
    docsearch: {
      appId: 'X0VGF1D6HR',
      apiKey: '70daba0e597f1fdfaf2c93e7719a5633',
      indexName: 'repodevil',
      locales: locales2,
    },

    comment: {
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    components: {
      components: ["Badge", "VPCard", "VPBanner"],
    },

    copyright: {
      license: "MPL-2.0",
    },

    mdEnhance: {
      revealJs: true,
      align: true,
      attrs: false,
      hint: true,
      codetabs: true,
      component: true,
      demo: false,
      figure: true,
      breaks: true,
      imgLazyload: false,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },

    redirect: {
      switchLocale: 'modal',
    },
  },
});