/**
 * Plugin de remark para generar slugs automáticamente desde el título
 * Versión simplificada sin dependencias externas
 */
export default function remarkAutoSlug() {
  return function (tree, file) {
    // Acceder al frontmatter a través de file.data
    const frontmatter = file.data.astro?.frontmatter;
    
    if (!frontmatter) return;
    
    // Si ya tiene slug, no hacer nada
    if (frontmatter.slug) return;
    
    // Si tiene título, generar slug
    if (frontmatter.title) {
      frontmatter.slug = slugify(frontmatter.title);
    }
  };
}

/**
 * Convierte un título en un slug URL-friendly
 */
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    // Normalizar caracteres Unicode y eliminar acentos
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Reemplazar caracteres especiales con guiones
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    // Reemplazar espacios con guiones
    .replace(/\s+/g, '-')
    // Eliminar guiones múltiples
    .replace(/-+/g, '-');
}
