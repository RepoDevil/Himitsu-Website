import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/ES/": [
    { text: 'Descargar', link: '/ES/Descargar/' },
    { text: 'Registro de cambios', link: '/ES/changelogs/' },
    { text: 'Contribuir', link: '/ES/contribute' },

    {
      text: "Guias",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    { text: 'Introduccion', link: '/ES/docs/Empezando/' },
  ],
});
