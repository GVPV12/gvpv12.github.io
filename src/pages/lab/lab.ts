import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  image?: string; // URL de la imagen de preview
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'LinkedIn',
    description: 'Si no prefieres correo, puedes mandarme un DM (trabajos).',
    demoLink: 'https://www.linkedin.com/in/grecia-valentina-valero/',
    tags: ['Networking', 'Freelance', 'Proyectos'],
    image: '/src/content/blog/githubglasses.jpg'
  },
  {
    name: 'Dribbble',
    description: 'Portafolio de diseño web.',
    demoLink: 'https://dribbble.com/gv_ui',
    tags: ['Diseño web', 'Freelance', 'UI/UX'],
    image: '/src/assets/img/pfp.jpg'
  },
  {
    name: 'Tienda modelos 3D CGtrader',
    description: 'Aquí puedes comprar algunos de mis modelos 3D.',
    demoLink: 'https://www.cgtrader.com/greciavalentinagv',
    tags: ['3D', 'Modelado', 'Freelance'],
    image: '/src/assets/img/pfp.jpg'
  },
];
