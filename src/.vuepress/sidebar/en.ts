import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    { text: 'Download', link: '/download/' },
    { text: 'Changelogs', link: '/changelogs/' },
    { text: 'Contribute', link: '/docs/contribute' },

    {
      text: "Guides",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    { text: 'Introduction', link: '/getting-started/' },
    { text: 'Features', link: '/features/' },
    { text: 'Policies', link: '/privacy/' },
    { text: 'Alternatives', link: '/others/' },
  ],
});
