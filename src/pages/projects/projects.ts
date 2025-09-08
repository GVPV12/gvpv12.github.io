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
    description: 'Comparto tutoriales, timelapses, animaciones 3D. Pienso compartir en el futuro procesos de mis proyectos.',
    demoLink: 'https://www.youtube.com/@grevaleart',
    tags: ['Tutoriales', 'Timelapses', 'Proyectos']
  },
  {
    name: 'Substack',
    description: 'Algunos posts y opiniones sobre cosas que me interesan.',
    demoLink: 'https://substack.com/@greciart',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Blog', 'Opiniones']
  },
  {
    name: 'GitHub',
    description: 'Websites para clientes y algunos proyectos de desarrollo.',
    demoLink: 'https://github.com/GVPV12',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Web dev', 'Astro','Apps']
  },
  {
    name: 'Itch io',
    description: 'Algunos mini juegos y apps que he desarrollado.',
    demoLink: 'https://grecia-v.itch.io/',
    postLink: 'https://sorafutaba.itch.io/chop-n-roll',
    tags: ['Mini apps', 'Mini juegos']
  },
  {
    name: 'Animaciones y Modelado 3D',
    description: 'Mis animaciones y modelos 3D hechos en Blender.',
    demoLink: 'https://3dgvart.carrd.co/',
    tags: ['3D', 'Blender', 'Animaciones']
  },
  {
    name: 'Arte 2d y dibujos',
    description: 'Dibujos y arte 2D.',
    demoLink: 'https://gvart.carrd.co',
    tags: ['Arte', 'Dibujos', 'Ilustraciones']
  },
  {
    name: 'Ko-fi',
    description: 'Aca puedes donar a mis proyectos o pagarme por comisiones.',
    demoLink: 'https://ko-fi.com/grevaleart',
    tags: ['Donaciones', 'Support', 'Comisiones']
  },
  {
    name: 'Pinterest',
    description: 'Mi banco de ideas, referencias y inspiración.',
    demoLink: 'https://www.pinterest.com/grevaleart',
    tags: ['Ideas', 'Inspiración']
  }
]
