---
title: Subir a dos repositorios en git
description: Como subir a dos repositorios en git
pubDate: 2026-02-04
tags:
  - Git
  - github
  - dev
  - Comandos
  - Notas
---



1. **Agrega el nuevo remote como "upstream":**
    
    bash
    
    ```bash
    git remote add upstream https://github.com/ANYWHEREHEALING/anywherehealing_New.git
    ```
    
2. **Sube al nuevo repositorio:**
    
    bash
    
    ```bash
    git push upstream main
    ```

Si no funciona (si estas segura de los cambios)

```bash
git push upstream main --force
```



## Consideraciones importantes:

- **Permisos:** Asegúrate de tener permisos de escritura en el repositorio
- **Repositorio destino:** El repositorio de destino debe existir en GitHub (puede estar vacío)
- **Ramas:** Si tienes múltiples ramas, repite el proceso para cada una que quieras transferir

---

Cuando ya esta configurado:
# Trabajas normal y subes a tu repo
git push origin main

# Cuando quieras sincronizar el fork
git push upstream main


## Verificación:

Después de agregar el remote, puedes verificar:

bash

```bash
git remote -v
```

Deberías ver algo como:

```
origin    https://github.com/GVPV12/anywherehealing.git
upstream  https://github.com/ANYWHEREHEALING/anywherehealing_New.git
```



## Antes de hacer push Verifica primero qué tienes pendiente:

## El flujo correcto con permisos:

### 1. Asegurar que tu repo local esté actualizado:

bash

```bash
git status
```

### 2. Si tienes cambios pendientes:

bash

```bash
git add .
git commit -m "Nuevos cambios para sincronizar"
git push origin main
```

### 3. Agregar el remote (si no lo has hecho):

bash

```bash
git remote add upstream https://github.com/ANYWHEREHEALING/anywherehealing_New.git
```

### 4. Push directo al fork:

bash

```bash
git push upstream main
```

## O si ya tienes el remote configurado:

Puedes ir directo a:

bash

```bash
git push upstream main
```

## Para verificar que tienes el remote:

bash

```bash
git remote -v
```