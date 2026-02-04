---
title: Cambiar de repositorio en Git
description: Como cambiar de repositorio en Git
pubDate: 2026-02-04
tags:
  - Git
  - github
  - dev
  - Comandos

---

## 1. Verificar la configuración actual

bash

```bash
git remote -v
```

Esto te mostrará a qué repositorio está conectado.

## 2. Ver el estado actual

bash

```bash
git status
```

## 3. Opciones para proceder:

### Opción A: Si quieres usar el repositorio existente

bash

```bash
# Agregar archivos
git add .

# Hacer commit
git commit -m "Update Astro Idol project"

# Subir cambios
git push
```

### Opción B: Si quieres cambiar a un nuevo repositorio

bash

```bash
# Remover la conexión actual
git remote remove origin

# Agregar nueva conexión (reemplaza con tu nuevo repo)
git remote add origin https://github.com/tu-usuario/nuevo-repo.git

# Subir
git push -u origin main
```

### Opción C: Si quieres ver qué hay en el repositorio actual

bash

```bash
git pull
```