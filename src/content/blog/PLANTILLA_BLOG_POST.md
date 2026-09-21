
---
title: "[Título visible del post]"
seoTitle: "[Título para buscadores, opcional]"
description: "[Resumen breve del post]"
pubDate: 2026-09-20
updatedDate: 2026-09-20
tags:
  - blog
  - "[tema-principal]"
  - "[otra-etiqueta]"
# coverImage: ./imagen-de-portada.jpg
---

## Introducción

Presenta aquí el tema y explica qué encontrará la persona lectora.

## [Primer apartado]

Desarrolla la primera idea con párrafos cortos.

Puedes enlazar a una página externa: [texto del enlace](https://ejemplo.com).

También puedes enlazar a otra entrada del blog usando el nombre de su archivo:

[[Nombre de otra entrada]]

### [Subapartado]

Incluye ejemplos, contexto o pasos concretos.

```bash
# Ejemplo de código
pnpm dev
```

> [!NOTE]
> Usa este bloque para una nota importante.

## [Segundo apartado]



| Elemento | Descripción |
| --- | --- |
| Ejemplo | Información relevante |

## Conclusión

Resume las ideas principales y cierra el post.
```

## Campos del frontmatter

- `title`: título que se muestra en la publicación. Es obligatorio.
- `seoTitle`: título alternativo para buscadores. Es opcional.
- `description`: descripción breve. Es obligatoria.
- `pubDate`: fecha de publicación con formato `AAAA-MM-DD`. Es obligatoria.
- `updatedDate`: fecha de última actualización. Es opcional.
- `tags`: lista de etiquetas. Incluye `blog` para que aparezca en `/blog/`.
- `coverImage`: imagen de portada relativa al archivo Markdown. Es opcional.