---
title: Como optimizar rendimiento astro con Lighthouse
description: Lighthouse para Optimizar rendimiento astro
pubDate: 2026-02-05
tags:
  - dev
  - Web-dev
  - Astro
---
Igual no es muy necesario porque ya astro va a ir super rápido pero en caso de que sea necesario puedes usar Lighthouse.

Si tu página web está hecha con Astro y la tienes corriendo en `localhost`, aquí tienes varias **formas de medir qué tan optimizada está en velocidad y rendimiento**:

---

## 🚀 OPCIÓN 1: Usa Lighthouse en Chrome (recomendado)

Lighthouse es una herramienta integrada en Google Chrome para medir rendimiento, accesibilidad, SEO y más.

### ✅ Pasos:

1. Abre tu sitio en `http://localhost:PORT` en Google Chrome.  
    (por ejemplo: `http://localhost:3000`)
    
2. Haz clic derecho en la página y selecciona **"Inspeccionar"** (o presiona `Ctrl+Shift+I`).
    
3. Ve a la pestaña **"Lighthouse"** en las DevTools.
    
4. Elige las opciones:
    
    - Marca: **Performance**, **Best practices**, **SEO**, **Accessibility**
        
    - Selecciona: **Mobile** o **Desktop** (haz ambos si puedes)
        
5. Haz clic en **"Analyze page load"**.
    

Chrome ejecutará una auditoría y te mostrará una puntuación del 0 al 100 con sugerencias.

---

## ⚡ OPCIÓN 2: Usar el CLI de Lighthouse en Node.js (avanzado)

Si prefieres desde terminal:

1. Instala Lighthouse globalmente:
    

```bash
npm install -g lighthouse
```

2. Ejecuta en terminal:
    

```bash
lighthouse http://localhost:3000 --view
```

Eso abrirá un reporte en tu navegador con métricas como:

- First Contentful Paint (FCP)
    
- Largest Contentful Paint (LCP)
    
- Time to Interactive
    
- Total Blocking Time
    

---

## 🧠 Recomendaciones de rendimiento para Astro:

Ya que estás usando Astro, deberías tener un buen rendimiento por defecto, pero aquí tienes extras para mejorar aún más:

- ✅ Usa `is:lazy` en imágenes:
    
    ```astro
    <img src="/hero.jpg" loading="lazy" alt="..." />
    ```
    
- ✅ Añade `<link rel="preload">` para recursos clave como fuentes
    
- ✅ Usa el modo `output: "static"` si no necesitas SSR
    
- ✅ Habilita minificación de CSS y JS si estás en producción:  
    Astro ya lo hace automáticamente en `astro build`
    

---

