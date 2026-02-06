---
title: Instalar plantilla en astro clonando repo de GitHub
description: Como instalar una website en el framework de Astro paso a paso
pubDate: 2026-02-05
tags:
  - dev
  - Git
  - Astro
  - Frameworks-JS
  - Frameworks-favs
---
Para este ejemplo use `gvpv12.github.io` pero aplica para cualquier link. Acá también use el template devolio el cual esta en Github.

## Preparación inicial

1. **Borra el repositorio anterior** (si existe):
    - Ve a tu repositorio `gvpv12.github.io` en GitHub
    - Settings → Scroll down → Delete this repository
2. **Crea un nuevo repositorio**:
    - Nombre: `gvpv12.github.io` (exactamente así)
    - Público
    - NO inicialices con README, .gitignore o license

## Clonación y configuración

3. **Clona el template original**:

bash

```bash
git clone https://github.com/devaradise/devolio.git
cd devolio
```

4. **Cambia el remote origin**:

bash

```bash
git remote remove origin
git remote add origin https://github.com/gvpv12/gvpv12.github.io.git
```

5. **Instala las dependencias**:

bash

```bash
npm install
```

## Configuración específica para GitHub Pages

6. **Modifica el archivo `astro.config.mjs`**:

javascript

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://gvpv12.github.io',
  base: '/',
});
```

7. **Verifica el archivo `package.json`** que tenga estos scripts:

json

```json
{
  "scripts": {
    "build": "astro build",
    "dev": "astro dev",
    "start": "astro dev",
    "preview": "astro preview"
  }
}
```

## Configuración de GitHub Actions

8. **Crea el archivo `.github/workflows/deploy.yml`**:

yaml

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Subir los cambios

9. **Commit y push inicial**:

bash

```bash
git add .
git commit -m "Initial commit - Devolio template setup"
git push -u origin main
```

## Configurar GitHub Pages

10. **Configurar Pages en GitHub**:
    - Ve a tu repositorio → Settings → Pages
    - Source: "GitHub Actions"
    - Save

## Personalización básica

11. **Personaliza el contenido** en estos archivos:
    - `src/data/info.ts` - Tu información personal
    - `src/data/projects.ts` - Tus proyectos
    - `src/pages/index.astro` - Página principal
    - `public/` - Imágenes y assets
12. **Después de personalizar, sube los cambios**:

bash

```bash
git add .
git commit -m "Customize portfolio content"
git push
```

## Verificación

El sitio debería estar disponible en `https://gvpv12.github.io` después de que termine el workflow de GitHub Actions (tarda 2-5 minutos).

**Puntos importantes:**

- Asegúrate de que el repositorio se llame exactamente `gvpv12.github.io`
- El workflow se ejecuta automáticamente cada vez que hagas push a main
- Si hay errores, revisa la pestaña "Actions" en GitHub para ver los logs

¿Te funciona este proceso o necesitas ayuda con algún paso específico?