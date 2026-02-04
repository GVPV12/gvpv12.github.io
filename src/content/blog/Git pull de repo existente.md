---
title: Git pull de repo existente
slug: git-pull-de-repo-existente
description: Esto es cuando tienes un repo y lo quieres traer sin tenerlo local.
pubDate: 2026-02-03
tags:
  - Git
  - github
  - dev
  - Comandos
  - Notas
coverImage: ./gitandgithub.jpg
---

Esto es cuando tienes un repo y lo quieres traer sin tenerlo local.

**1. Instala Git** (si no lo tienes instalado tras el formateo)

Descárgalo en: [https://git-scm.com/](https://git-scm.com/)

---

**2. Abre la terminal** en la carpeta donde tiene tu proyecto local y ejecuta estos comandos uno por uno:

```bash
git init
```

Esto convierte tu carpeta en un repositorio Git local.

```bash
git remote add origin https://github.com/GVPV12/gvpv12.github.io.git
```

Esto enlaza tu carpeta local con tu repositorio de GitHub.

---

**3. Verifica que el enlace quedó bien:**



```bash
git remote -v
```

Deberías ver algo así:
```
origin  https://github.com/GVPV12/gvpv12.github.io.git (fetch)
origin  https://github.com/GVPV12/gvpv12.github.io.git (push)
````

---

**4. Descarga lo que ya tenías en GitHub** (para no perder nada ni generar conflictos):



```bash
git pull origin main
```

⚠️ Este pull es solo si el repo de github esta acctualixado y el local no

---

**5. Ya queda todo listo.** A partir de ahora usas los comandos que ya conoces:



```bash
git add .
git commit -m "mensaje"
git push
```

---

**Posible problema:** Si cuando haces `git pull` te pide autenticación, GitHub ya no permite contraseñas por HTTP. En ese caso necesitas crear un **Personal Access Token** en GitHub (en Settings → Developer Settings → Personal access tokens) y usarlo como contraseña cuando te lo pida.