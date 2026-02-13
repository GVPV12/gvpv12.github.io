---
title: Deploy y hosting gratis
description: Comparativa y recomendación de hosting gratis
pubDate: 2026-02-08
tags:
  - Notas
  - dev
  - Deploy
  - Hosting
  - Recomendaciones
  - Web-dev
  - game-dev
---


## 🚀 Comparativa: Vercel vs Netlify (plan gratuito)

| Característica                              | **Vercel (Hobby)**                 | **Netlify (Free)**                            |
| ------------------------------------------- | ---------------------------------- | --------------------------------------------- |
| **Dominios personalizados**                 | ✅ Sí                               | ✅ Sí                                          |
| **Subdominio gratuito**                     | `*.vercel.app`                     | `*.netlify.app`                               |
| **Despliegues automáticos (Git)**           | ✅ GitHub, GitLab, Bitbucket        | ✅ GitHub, GitLab, Bitbucket                   |
| **Límites de ancho de banda**               | 100 GB/mes                         | 100 GB/mes                                    |
| **Límites de uso por equipo**               | 1 miembro (proyecto personal)      | Ilimitado (aunque el soporte es limitado)     |
| **Número de sitios**                        | Ilimitados                         | Ilimitados                                    |
| **Tiempo de build (por deploy)**            | ~45 segundos (máx. 1 concurrente)  | ~15 minutos (máx. 1 concurrente)              |
| **Serverless Functions**                    | ✅ 1,000 ejecuciones/día            | ✅ 125,000 ejecuciones/mes                     |
| **Soporte a SSR (renderizado en servidor)** | ✅ Soportado (ideal para Astro SSR) | ⚠️ Parcial (mejor para sitios 100% estáticos) |
| **Previsualización de PR (preview)**        | ✅ Sí, por pull request             | ✅ Sí, por pull request                        |
| **Analíticas integradas**                   | ❌ Solo en plan pago                | ❌ Solo en plan pago                           |
| **Interfaz y experiencia de usuario**       | ⭐ Moderna, rápida                  | ⭐ Sencilla, clara                             |
| **Integración con Astro**                   | ✅ Nativa, muy recomendada          | ✅ También compatible                          |

- Mención honorifica: Github pages
- Otros: https://www.infinityfree.com/

---

## 🏁 Recomendación 

### ✅ **Usa Vercel si:**

- Estás usando Astro con **SSR** o endpoints (`API routes`)
    
- Quieres una integración más fluida con frameworks modernos (Next.js, Astro, SvelteKit, etc.)
    
- Prefieres una interfaz más moderna y rápida para ver deploys y previews
    
- Quieres hacer sitios tipo dashboard, blog dinámico, o páginas que rendericen desde el servidor
    

### ✅ **Usa Netlify si:**

- Tu sitio es completamente **estático** (sin server-side rendering)
    
- Te gusta el enfoque simple y rápido de Netlify (ideal para landing pages, portafolios, etc.)
    
- Estás acostumbrado a usar su sistema de **Netlify Forms** (muy útil sin backend)
    
- Quieres una alternativa sin depender de Vercel
    

---

### 🎯 Conclusión personal:

> Para **Astro**, especialmente si usas SSR, **Vercel es la mejor opción gratuita** hoy por hoy. Es más flexible para sitios modernos y su integración con Astro es excelente.