// Datos de /lab/ y de "Proyectos recientes" en la portada.
// Vive fuera de src/pages para que Astro no intente generar una ruta /lab/lab.
// Las capturas viven en public/images/lab/.

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
    name: 'BrainDeck',
    description: 'Mesa de trabajo con más de 20 herramientas para artistas y autodidactas: planes de estudio, OCR a notas, paletas, quitar fondo, PDFs y subtítulos. Todo en el navegador.',
    demoLink: 'https://mybraindeck.netlify.app/',
    demoLinkRel: 'noopener noreferrer',
    postLink: '/posts/braindeck-herramientas-gratis-para-artistas-y-autodidactas/',
    tags: ['Web dev', 'Herramientas', 'IA local', 'Open source'],
    image: '/images/lab/braindeck.webp',
  },
  {
    name: 'Web retro en Nekoweb',
    description: 'Web inpirada en los 2000s.',
    demoLink: 'https://starmoon.nekoweb.org/',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'HTML', 'CSS', 'JS'],
    image: '/images/lab/starmoon-nekoweb.webp',
  },
  {
    name: 'Games',
    description: 'Juegos que he hecho.',
    demoLink: 'https://starmoon.nekoweb.org/games.html',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'Juegos', 'HTML'],
    image: '/images/lab/games.webp',
  },
  {
    name: 'Commonplace book',
    description: 'Cuaderno digital con cosas variadas.',
    demoLink: 'https://starmoon.nekoweb.org/commonplace_book.html',
    demoLinkRel: 'noopener noreferrer',
    postLink: '/posts/commonplace-book-digital-tracker-de-libros-y-juegos/',
    tags: ['Web dev', 'Escritura', 'HTML'],
    image: '/images/lab/commonplace-book.webp',
  },
  {
    name: 'Explorer',
    description: 'Explorador de archivos con estética retro de cosas variadas que me gustan.',
    demoLink: 'https://starmoon.nekoweb.org/explorer.html',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Web dev', 'HTML', 'CSS'],
    image: '/images/lab/explorer.webp',
  },
  {
    name: 'Focus Time',
    description: 'App de productividad gamificada para concentración y TDAH.',
    demoLink: 'https://focustimeisnow.netlify.app/',
    demoLinkRel: 'noopener noreferrer',
    postLink: 'https://gvpv12.github.io/posts/focus-time-app-productividad-tdah/',
    substackLink: 'https://greciart.substack.com/p/construi-focus-time-app-tdah',
    tags: ['Productividad', 'TDAH', 'React'],
    image: '/images/lab/focus-time.webp',
  },

  // ---------- Juegos (itch.io) ----------
  {
    name: 'Serperwave',
    description: 'Snake reimaginado como una máquina arcade vaporwave de los 90: 13 mundos neón, cajas misteriosas y banda sonora retro.',
    demoLink: 'https://grecia-v.itch.io/serperwave',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Videojuego', 'Arcade', 'Retro'],
    image: '/images/lab/serperwave.webp',
  },
  {
    name: 'El Peso del Sí',
    description: 'Novela visual en pixel art sobre salud mental, en español e inglés. Hecha con Zim Yi y Aria.',
    demoLink: 'https://grecia-v.itch.io/el-peso-del-si',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Videojuego', 'Novela visual', 'Pixel art'],
    image: '/images/lab/el-peso-del-si.webp',
  },
  {
    name: 'Balam Ball',
    description: 'Arcade inspirado en el pok-ta-pok: Balam contra Tezcat en la cancha sagrada.',
    demoLink: 'https://neurocode.itch.io/balam-ball',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Videojuego', 'Arcade', 'Colaboración'],
    image: '/images/lab/balam-ball.webp',
  },
  {
    name: 'Comedian Dreams',
    description: 'Ficción interactiva sobre Sam, que quiere alegrar a la gente con la comedia. Global Game Jam 2024.',
    demoLink: 'https://dreamteamlatam.itch.io/comedian-dreams',
    demoLinkRel: 'noopener noreferrer',
    tags: ['Videojuego', 'Ficción interactiva', 'Game jam'],
    image: '/images/lab/comedian-dreams.webp',
  },
];
