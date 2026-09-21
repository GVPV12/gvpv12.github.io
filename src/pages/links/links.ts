import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Youtube',
    description: 'Comparto proyectos, tutoriales, timelapses, animaciones 3D.',
    demoLink: 'https://www.youtube.com/@grevaleart',
      demoLinkRel: 'noopener noreferrer',
    tags: ['Tutoriales', 'Timelapses', 'Proyectos']
  },
  {
    name: 'Website',
    description: 'Mi portfolio y sitio personal.',
    demoLink: 'https://grevaleart.com/',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Portfolio', 'Web']
  },
  {
    name: 'Itch.io',
    description: 'Algunos mini juegos y apps que he desarrollado.',
    demoLink: 'https://grecia-v.itch.io/',
    demoLinkRel: 'noopener noreferrer',
    postLink: 'https://sorafutaba.itch.io/chop-n-roll',
    tags: ['Mini apps', 'Mini juegos']
  },
  {
    name: 'Ko-fi',
    description: 'Tienda de templates, donaciones y comisiones.',
    demoLink: 'https://ko-fi.com/grevaleart/shop',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Templates', 'Tienda', 'Comisiones']
  },
  {
    name: 'Vgen',
    description: 'Para comisiones pixel art, vtubers y animaciones 3D.',
    demoLink: 'https://vgen.co/grevaleart',
    demoLinkRel: 'noopener noreferrer',
    tags: ['2D', '3D', 'Animaciones']
  },
  {
    name: 'Substack',
    description: 'Algunos posts y opiniones sobre cosas que me interesan.',
    demoLink: 'https://greciart.substack.com/',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Blog', 'Opiniones']
  },
  {
    name: 'GitHub',
    description: 'Websites para clientes y algunos proyectos de desarrollo.',
    demoLink: 'https://github.com/GVPV12',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'Astro','Apps']
  },
  {
    name: 'Pinterest',
    description: 'Mi banco de ideas, referencias y inspiración.',
    demoLink: 'https://www.pinterest.com/grevaleart',
      demoLinkRel: 'noopener noreferrer',
    tags: ['Ideas', 'Inspiración']
  }
]
