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
      demoLinkRel: 'noopener noreferrer',
    tags: ['Networking', 'Freelance', 'Proyectos']
  },
  {
    name: 'Dribbble',
    description: 'Portafolio de diseño web.',
    demoLink: 'https://dribbble.com/gv_ui',
      demoLinkRel: 'noopener noreferrer',
    postLink: 'https://dribbble.com/shots/22907928-Portfolio-Website-Design',
    tags: ['Diseño web', 'Freelance', 'UI/UX']
  },
      {
    name: 'Tienda modelos 3D CGtrader',
    description: 'Aqui puedes comprar algunos de mis modelos 3D.',
    demoLink: 'https://www.cgtrader.com/greciavalentinapv',
      demoLinkRel: 'noopener noreferrer',
    tags: ['3D Models', 'Freelance', 'Tienda']
  },
  {
    name: 'Portafolio Contra',
    description: 'Mis trabajos de diseño web y animaciones 3D.',
    demoLink: 'https://greciavalentina.contra.com/',
      demoLinkRel: 'noopener noreferrer',
    tags: ['Networking', 'Freelance', 'Proyectos']
  },
  {
    name: 'Youtube',
    description: 'Comparto proyectos, tutoriales, timelapses, animaciones 3D.',
    demoLink: 'https://www.youtube.com/@grevaleart',
      demoLinkRel: 'noopener noreferrer',
    tags: ['Tutoriales', 'Timelapses', 'Proyectos']
  },
  {
    name: 'Substack',
    description: 'Algunos posts y opiniones sobre cosas que me interesan.',
    demoLink: 'https://substack.com/@greciart',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Blog', 'Opiniones']
  },
    {
    name: 'Vgen',
    description: 'Para comisiones pixel art, vtubers y animaciones 3D.',
    demoLink: 'https://vgen.co/grevaleart',
    demoLinkRel: 'noopener noreferrer',
    tags: ['2D', '3D', 'Animaciones']
  },
  {
    name: 'GitHub',
    description: 'Websites para clientes y algunos proyectos de desarrollo.',
    demoLink: 'https://github.com/GVPV12',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'Astro','Apps']
  },
  {
    name: 'Itch io',
    description: 'Algunos mini juegos y apps que he desarrollado.',
    demoLink: 'https://grecia-v.itch.io/',
      demoLinkRel: 'noopener noreferrer',
    postLink: 'https://sorafutaba.itch.io/chop-n-roll',
    tags: ['Mini apps', 'Mini juegos']
  },
  {
    name: 'Animaciones y Modelado 3D',
    description: 'Mis animaciones y modelos 3D hechos en Blender.',
    demoLink: 'https://3dgvart.carrd.co/',
      demoLinkRel: 'noopener noreferrer',
    tags: ['3D', 'Blender', 'Animaciones']
  },
  {
    name: 'Arte 2d y dibujos',
    description: 'Dibujos y arte 2D.',
    demoLink: 'https://gvart.carrd.co',
      demoLinkRel: 'noopener noreferrer',
    tags: ['Arte', 'Dibujos', 'Ilustraciones']
  },
  {
    name: 'Ko-fi',
    description: 'Donaciones y comisiones.',
    demoLink: 'https://ko-fi.com/grevaleart',
      demoLinkRel: 'noopener noreferrer',
    tags: ['Donaciones', 'Support', 'Comisiones']
  },
  {
    name: 'Pinterest',
    description: 'Mi banco de ideas, referencias y inspiración.',
    demoLink: 'https://www.pinterest.com/grevaleart',
      demoLinkRel: 'noopener noreferrer',
    tags: ['Ideas', 'Inspiración']
  }
]
