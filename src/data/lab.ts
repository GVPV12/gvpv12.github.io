// Datos de /lab/ y de "Proyectos recientes" en la portada.
// Vive fuera de src/pages para que Astro no intente generar una ruta /lab/lab.
// Las imágenes se importan para que Astro las copie al build (una ruta '/src/...' da 404 en producción).
import githubglasses from '../content/blog/githubglasses.jpg';
import pfp from '../assets/img/pfp.jpg';

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[];
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
    tags: ['Web dev', 'HTML', 'CSS', 'JS'],
    image: githubglasses.src,
  },
  {
    name: 'Dribbble',
    description: 'Portafolio de diseño web.',
    demoLink: 'https://dribbble.com/gv_ui',
    tags: ['Diseño web', 'Freelance', 'UI/UX'],
    image: pfp.src,
  },
  {
    name: 'Tienda modelos 3D CGtrader',
    description: 'Aquí puedes comprar algunos de mis modelos 3D.',
    demoLink: 'https://www.cgtrader.com/greciavalentinagv',
    tags: ['3D', 'Modelado', 'Freelance'],
    image: pfp.src,
  },

  // ---------- Juegos (itch.io) ----------
  {
    name: 'Serperwave',
    description: 'Snake reimaginado como una máquina arcade vaporwave de los 90: 13 mundos neón, cajas misteriosas y banda sonora retro.',
    demoLink: 'https://grecia-v.itch.io/serperwave',
    tags: ['Videojuego', 'Arcade', 'Retro'],
  },
  {
    name: 'El Peso del Sí',
    description: 'Novela visual en pixel art sobre salud mental, en español e inglés. Hecha con Zim Yi y Aria.',
    demoLink: 'https://grecia-v.itch.io/el-peso-del-si',
    tags: ['Videojuego', 'Novela visual', 'Pixel art'],
  },
  {
    name: 'Balam Ball',
    description: 'Arcade inspirado en el pok-ta-pok: Balam contra Tezcat en la cancha sagrada.',
    demoLink: 'https://neurocode.itch.io/balam-ball',
    tags: ['Videojuego', 'Arcade', 'Colaboración'],
  },
  {
    name: 'Comedian Dreams',
    description: 'Ficción interactiva sobre Sam, que quiere alegrar a la gente con la comedia. Global Game Jam 2024.',
    demoLink: 'https://dreamteamlatam.itch.io/comedian-dreams',
    tags: ['Videojuego', 'Ficción interactiva', 'Game jam'],
  },
];
