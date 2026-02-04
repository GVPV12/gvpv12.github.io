---
title: Subir desde 0 con Git a Github al mismo tiempo en local y github
description: Como subir desde 0 con Git a Github al mismo tiempo en local y github
pubDate: 2026-02-04
tags:
  - Git
  - github
  - dev
  - Comandos
  - Resumenes
  - Notas
---


[[Cambiar de repositorio en Git]]

### ¿Cómo publicar un proyecto en GitHub? (Simple y resumido)

Publicar un proyecto en GitHub se puede hacer de dos maneras principales: directamente desde la web de GitHub o usando la línea de comandos (Git). Te explicaré la forma más común y versátil usando la línea de comandos, ya que te da más control y es la práctica estándar.

**Requisitos previos:**

- Tener una cuenta en GitHub (si no la tienes, créala en [github.com](https://github.com/)).
- Tener Git instalado en tu computadora (descárgalo de [git-scm.com](https://git-scm.com/downloads)).

**Pasos para publicar tu proyecto:**

1. **Crea un nuevo repositorio en GitHub (online):**
    
    - Ve a [github.com](https://github.com/).
    - Inicia sesión.
    - Haz clic en el botón verde "New" (Nuevo) en la parte superior izquierda de la página, o en el icono de "+" en la esquina superior derecha y selecciona "New repository".
    - Dale un **nombre** a tu repositorio (idealmente el mismo que el nombre de la carpeta de tu proyecto).
    - Puedes añadir una descripción opcional.
    - Decide si quieres que sea **público** o **privado**.
    - **NO marques** la opción "Add a README file", "Add .gitignore" o "Choose a license" aquí, ya que vamos a añadir nuestro propio `README.md` y otros archivos desde nuestra computadora.
    - Haz clic en "Create repository".
    - GitHub te mostrará una página con instrucciones. Mantén esa página abierta porque necesitarás los comandos.
2. **Inicializa tu proyecto local con Git (en tu computadora):**
    
    - Abre tu terminal o línea de comandos.
    - Navega hasta la carpeta raíz de tu proyecto usando el comando `cd`:
        
        Bash
        
        ```
        cd /ruta/a/tu/carpeta/de/proyecto
        ```
        
    - Inicializa un repositorio Git local en esa carpeta:
        
        Bash
        
        ```
        git init
        ```
        
3. **Añade tus archivos al "staging area" de Git:**
    
    - Este comando le dice a Git que quieres incluir todos los archivos de tu proyecto en el próximo "commit" (guardado de cambios).
        
        Bash
        
        ```
        git add .
        ```
        
        (El `.` significa "todos los archivos en el directorio actual").
4. **Haz tu primer "commit":**
    
    - Un "commit" es como una instantánea de tu proyecto en un momento dado, junto con un mensaje que describe los cambios.
        
        Bash
        
        ```
        git commit -m "Primer commit del proyecto"
        ```
        
        (Puedes cambiar el mensaje `Primer commit del proyecto` por algo más descriptivo).
5. **Conecta tu repositorio local con el repositorio de GitHub:**
    
    - Copia la URL de tu repositorio de GitHub. Debería verse algo como `https://github.com/tu-usuario/tu-proyecto.git`.
    - Usa este comando (reemplazando la URL con la tuya):
        
        Bash
        
        ```
        git remote add origin https://github.com/tu-usuario/tu-proyecto.git
        ```

Aca si da error usar [[Cambiar de repositorio en Git]]

6. **Sube tus archivos a GitHub ("push"):**
    
    - Este comando sube tu código local a la rama principal (o `main`) de tu repositorio en GitHub.
        
        Bash
        
        ```
        git push -u origin main
        ```
        
        (En algunas versiones antiguas de Git, la rama principal se llama `master` en lugar de `main`. Si `main` te da un error, prueba con `git push -u origin master`).

¡Y listo! Si todo salió bien, al refrescar la página de tu repositorio en GitHub, verás todos tus archivos, incluido tu `README.md`, y el contenido de este se mostrará automáticamente en la parte inferior.

**En resumen:**

- **`README.md`:** Es la carta de presentación de tu proyecto, explicando de qué trata y cómo usarlo.
- **Publicar en GitHub:** Implica crear un repositorio online, inicializar Git en tu proyecto local, añadir y confirmar tus archivos, y luego "empujarlos" (push) a GitHub.