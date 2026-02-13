---
title: Mejorar velocidad web hecha con Astro
description: Comandos para tener un pagespeedinsights como el de google pero para local
pubDate: 2026-02-06
tags:
  - dev
  - Web-dev
  - Astro
---


1. Instala Lighthouse globalmente:
    
    Bash
    
    ```
    npm install -g lighthouse
    ```
    
2. Ejecuta la auditoría en tu URL local (asegúrate de que tu proyecto AstroJS esté corriendo con `npm run dev` o similar):
    
    Bash
    
    ```
    lighthouse http://localhost:4321
    ```
    
    _(Cambia `4321` por el puerto que esté usando tu proyecto AstroJS)._
    

Esto te dará un informe en la terminal o puedes generar un archivo HTML/JSON si especificas las opciones:

Bash

```
lighthouse http://localhost:4321 --view
```