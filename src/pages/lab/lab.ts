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
    name: 'Web retro en Nekoweb',
    description: 'Web inpirada en los 2000s.',
    demoLink: 'https://starmoon.nekoweb.org/',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'HTML', 'CSS', 'JS'],
    image: '/images/lab/starmoon-nekoweb.webp'
  },
  {
    name: 'Games',
    description: 'Juegos que he hecho.',
    demoLink: 'https://starmoon.nekoweb.org/games.html',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'Juegos', 'HTML'],
    image: '/images/lab/games.webp'
  },
  {
    name: 'Commonplace book',
    description: 'Cuaderno digital con cosas variadas.',
    demoLink: 'https://starmoon.nekoweb.org/commonplace_book.html',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'Escritura', 'HTML'],
    image: '/images/lab/commonplace-book.webp'
  },
  {
    name: 'Explorer',
    description: 'Explorador de archivos con estética retro de cosas variadas que me gustan.',
    demoLink: 'https://starmoon.nekoweb.org/explorer.html',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'HTML', 'CSS'],
    image: '/images/lab/explorer.webp'
  },
  {
    name: 'Focus Time',
    description: 'App de productividad gamificada para concentración y TDAH.',
    demoLink: 'https://focustimeisnow.netlify.app/',
    demoLinkRel: 'noopener noreferrer',
    postLink: 'https://gvpv12.github.io/posts/focus-time-app-productividad-tdah/',
    substackLink: 'https://greciart.substack.com/p/construi-focus-time-app-tdah',
    tags: ['Productividad', 'TDAH', 'React'],
    image: '/images/lab/focus-time.webp'
  },
];
