// Fotos del "Camera roll" de la portada.
// También se usan como foto de perfil aleatoria en /about/.
import type { ImageMetadata } from 'astro';
import pic10 from '../assets/img/gallery/pic10.webp';
import pic from '../assets/img/gallery/pic.webp';
import pic3 from '../assets/img/gallery/pic3.webp';
import pic4 from '../assets/img/gallery/pic4.webp';
import pic5 from '../assets/img/gallery/pic5.webp';
import pic6 from '../assets/img/gallery/pic6.webp';
import pic7 from '../assets/img/gallery/pic7.webp';
import pic8 from '../assets/img/gallery/pic8.webp';
import pic9 from '../assets/img/gallery/pic9.webp';
import pic11 from '../assets/img/gallery/pic11.webp';
import pic12 from '../assets/img/gallery/pic12.jpg';
import pic13 from '../assets/img/gallery/pic13.jpg';
import pic14 from '../assets/img/gallery/pic14.jpg';
import pic15 from '../assets/img/gallery/pic15.webp';
import pic16 from '../assets/img/gallery/pic16.webp';
import pic17 from '../assets/img/gallery/pic17.webp';
import pic18 from '../assets/img/gallery/pic18.webp';
import pic19 from '../assets/img/gallery/pic19.webp';
import pic21 from '../assets/img/gallery/pic21.webp';
import pic22 from '../assets/img/gallery/pic22.webp';
import pic23 from '../assets/img/gallery/pic23.webp';

export interface GalleryImage {
  src: ImageMetadata;
  alt: string;
  tooltip?: string;
}

export const galleryImages: GalleryImage[] = [
  { src: pic10, alt: 'Camera roll 1', tooltip: 'Mi gata durmiendo en una cajita' },
  { src: pic, alt: 'Camera roll 3' },
  { src: pic3, alt: 'Camera roll 4' },
  { src: pic4, alt: 'Camera roll 5' },
  { src: pic5, alt: 'Camera roll 6' },
  { src: pic6, alt: 'Camera roll 7' },
  { src: pic7, alt: 'Camera roll 8' },
  { src: pic8, alt: 'Camera roll 9' },
  { src: pic9, alt: 'Camera roll 10' },
  { src: pic11, alt: 'Camera roll 11' },
  { src: pic12, alt: 'Camera roll 12' },
  { src: pic13, alt: 'Camera roll 13' },
  { src: pic14, alt: 'Camera roll 14' },
  { src: pic15, alt: 'Camera roll 15' },
  { src: pic16, alt: 'Camera roll 16' },
  { src: pic17, alt: 'Camera roll 17' },
  { src: pic18, alt: 'Camera roll 18' },
  { src: pic19, alt: 'Camera roll 19' },
  { src: pic21, alt: 'Camera roll 21' },
  { src: pic22, alt: 'Camera roll 22' },
  { src: pic23, alt: 'Camera roll 23' },
];
