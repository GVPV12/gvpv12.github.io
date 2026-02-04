---
title: Iniciar git enlazando a repo existente github
slug: iniciar-git-enlazando-a-repo-existente-github
description: Manera de hacerlo si no te queda otra opción, pero se tendrá que hacer el force probablemente para que no de error al final
pubDate: 2026-02-03
tags:
  - Git
  - github
  - Notas
  - Resumenes
  - Comandos
  - dev

---


[[Jardin digital/Git pull de repo existente]] 

## Si el repo local esta actualizado y el de Github no

**1. Enlaza tu carpeta con GitHub:**


```bash
git init
```


```bash
git remote add origin https://github.com/GVPV12/gvpv12.github.io.git
```

**2. Prepara y guarda los cambios:**


```bash
git add .
```


```bash
git config --global user.email "tu.correo@gmail.com"
```


```bash
git config --global user.name "Tu Nombre"
```

```bash
git commit -m "mensaje"
```

**3. Sube los cambios a GitHub:**


```bash
git push -u origin main
```

El `-u` lo usas solo esta primera vez para establecer la conexión, después ya solo con `git push`.

Si te sale algún error en el `push`, avísame y te ayudo a resolverlo.