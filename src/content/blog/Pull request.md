---
title: Como hacer un pull request
description: Como hacer petición en github para modificar repositorio externo
pubDate: 2026-02-07
tags:
  - Git
  - github
  - dev
  - Comandos
  - Resumenes
  - Notas
---


Para hacer un pull request, sigue estos pasos:

**1. Fork el repositorio**

- Ve al repositorio. Ejemplo: [https://github.com/MaggieAppleton/digital-gardeners](https://github.com/MaggieAppleton/digital-gardeners)
- Haz clic en el botón "Fork" en la esquina superior derecha
- Esto creará una copia del repositorio en tu cuenta de GitHub

**2. Clona tu fork localmente**

bash

```bash
git clone https://github.com/TU-USUARIO/digital-gardeners.git
cd digital-gardeners
```

**3. Crea una nueva rama**

bash

```bash
git checkout -b nombre-de-tu-rama
```

**4. Haz tus cambios**

- Edita los archivos que necesites modificar
- Este repositorio parece ser una lista/directorio de digital gardens, así que probablemente querrás agregar tu jardín digital o hacer mejoras al README

**5. Guarda tus cambios**

bash

```bash
git add .
git commit -m "Descripción clara de tus cambios"
```

**6. Sube tus cambios a tu fork**

bash

```bash
git push origin nombre-de-tu-rama
```

**7. Crea el Pull Request**

- Ve a tu fork en GitHub
- Verás un mensaje sugiriendo crear un pull request
- Haz clic en "Compare & pull request"
- Escribe un título descriptivo y explica qué cambios propones
- Haz clic en "Create pull request"

**Consejos específicos para este repositorio:**

- Revisa las contribuciones anteriores para ver el formato esperado
- Lee el README para entender qué tipo de contribuciones aceptan
- Asegúrate de que tus cambios sigan el estilo y formato existente