import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    { text: 'Download', link: '/download/' },
    { text: 'Changelogs', link: '/changelogs/' },
    { text: 'Contribute', link: '/contribute' },

    {
      text: "Guides",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    { text: 'Introduction', link: '/docs/getting-started/' },
  ],
});
