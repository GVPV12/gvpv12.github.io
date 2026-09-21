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
    image: '/src/content/blog/githubglasses.jpg'
  },
  {
    name: 'Games',
    description: 'Juegos de la web retro.',
    demoLink: 'https://starmoon.nekoweb.org/games.html',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'Juegos', 'HTML'],
    image: '/src/assets/img/pfp.jpg'
  },
  {
    name: 'Commonplace book',
    description: 'Cuaderno digital de la web retro.',
    demoLink: 'https://starmoon.nekoweb.org/commonplace_book.html',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'Escritura', 'HTML'],
    image: '/src/assets/img/pfp.jpg'
  },
  {
    name: 'Explorer',
    description: 'Explorador de la web retro.',
    demoLink: 'https://starmoon.nekoweb.org/explorer.html',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'HTML', 'CSS'],
    image: '/src/assets/img/pfp.jpg'
  },
];
