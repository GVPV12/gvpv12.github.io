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
    name: 'LinkedIn',
    description: 'Si no prefieres correo, puedes mandarme un DM (trabajos).',
    demoLink: 'https://www.linkedin.com/in/grecia-valentina-valero/',
    tags: ['Networking', 'Freelance', 'Proyectos']
  },
  {
    name: 'Dribbble',
    description: 'Portafolio de diseño web.',
    demoLink: 'https://dribbble.com/gv_ui',
    tags: ['Diseño web', 'Freelance', 'UI/UX']
  },
      {
    name: 'Tienda modelos 3D CGtrader',
    description: 'Aqui puedes comprar algunos de mis modelos 3D.',
    demoLink: 'https://www.cgtrader.com/greciavalentinapv',
    tags: ['3D Models', 'Freelance', 'Tienda']
  },
  {
    name: 'Portafolio Contra',
    description: 'Mis trabajos de diseño web y animaciones 3D.',
    demoLink: 'https://greciavalentina.contra.com/',
    tags: ['Networking', 'Freelance', 'Proyectos']
  },
  {
    name: 'Youtube',
    description: 'Comparto proyectos, tutoriales, timelapses, animaciones 3D.',
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
    name: 'Vgen',
    description: 'Para comisiones pixel art, vtubers y animaciones 3D.',
    demoLink: 'https://vgen.co/grevaleart',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['2D', '3D', 'Animaciones']
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
    description: 'Donaciones y comisiones.',
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
