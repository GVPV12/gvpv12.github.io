---
title: ¿Que es Git? Explicación y resumen sencillo
slug: Git-resumen-simple
description: Si te cuesta entender que es Git acá te lo resumo como yo lo entendí.
pubDate: 2026-02-03
tags:
  - Git
  - Resumenes
  - Cheat-sheet
  - Notas
coverImage: ./git.png
---

[[Github]]
[[Github actions]]
[[GitHub Codespaces y github.dev]]

Comandos git terminal
[[Github nuevos proyectos]]
[[Cambiar de repositorio en Git]]
[[Actualizar en git]]
[[Subir a dos repositorios en git]]


*Tabla de contenidos*
- [[#1. Git (El Sistema)|1. Git (El Sistema)]]
- [[#2. GitHub (La Plataforma de Alojamiento)|2. GitHub (La Plataforma de Alojamiento)]]
- [[#3. GitHub Desktop (La Interfaz Gráfica de Usuario - GUI)|3. GitHub Desktop (La Interfaz Gráfica de Usuario - GUI)]]
- [[#4. GitLab (Una Alternativa a GitHub)|4. GitLab (Una Alternativa a GitHub)]]
- [[#Comandos de Git Esenciales:|Comandos de Git Esenciales:]]
- [[#Funciones y Conceptos Básicos de Git y Plataformas como GitHub/GitLab:|Funciones y Conceptos Básicos de Git y Plataformas como GitHub/GitLab:]]

Git es un sistema de control de versiones distribuido que permite a varios desarrolladores trabajar en un mismo proyecto de forma colaborativa, rastreando los cambios y fusionándolos eficientemente. 

Es común confundir estos términos, pero representan diferentes aspectos del control de versiones y el desarrollo colaborativo. Aquí te explico las diferencias clave:

### 1. Git (El Sistema)

- **¿Qué es?** Git es un **sistema de control de versiones distribuido (VCS)** de código abierto. Es la tecnología subyacente que te permite rastrear y gestionar los cambios en tu código o cualquier conjunto de archivos a lo largo del tiempo.
- **Función principal:** Permite a los desarrolladores:
    - Mantener un historial completo de todas las modificaciones.
    - Revertir a versiones anteriores del código.
    - Crear "ramas" (branches) para trabajar en nuevas características de forma aislada.
    - Fusionar cambios de diferentes ramas.
    - Colaborar en un mismo proyecto sin sobrescribir el trabajo de los demás.
- **¿Dónde funciona?** Git es una herramienta de línea de comandos que se instala y funciona **localmente** en tu computadora. Puedes usar Git para gestionar proyectos en tu máquina sin necesidad de estar conectado a internet o de una plataforma externa.
- **En resumen:** Git es la _tecnología_ que hace posible el control de versiones.

### 2. GitHub (La Plataforma de Alojamiento)

- **¿Qué es?** GitHub es una **plataforma basada en la web (servicio en la nube)** que aloja repositorios Git. Es decir, utiliza Git como su tecnología principal, pero le añade una capa de funcionalidades sociales y de colaboración.
- **Función principal:**
    - **Alojamiento de repositorios:** Proporciona un lugar centralizado para almacenar tus repositorios Git en la nube, haciéndolos accesibles para ti y tu equipo desde cualquier lugar.
    - **Colaboración:** Facilita enormemente la colaboración a través de características como:
        - **Pull Requests (PRs):** Un mecanismo para proponer cambios y permitir la revisión y discusión antes de fusionarlos.
        - **Issues:** Herramientas para el seguimiento de tareas, errores, y discusiones del proyecto.
        - **Proyectos/Boards:** Tableros estilo Kanban para organizar el flujo de trabajo.
        - **Wikis, Gists, Pages:** Funcionalidades adicionales para documentación y compartir código.
    - **Comunidad:** Es la plataforma de alojamiento de código más grande del mundo, con una vasta comunidad de desarrolladores y proyectos de código abierto.
- **¿Dónde funciona?** Es un servicio en la nube, accesible a través de tu navegador web.
- **En resumen:** GitHub es el _sitio web_ o _plataforma_ que aloja tus proyectos Git y proporciona herramientas adicionales para la colaboración.

### 3. GitHub Desktop (La Interfaz Gráfica de Usuario - GUI)

- **¿Qué es?** GitHub Desktop es una **aplicación de escritorio (GUI)** gratuita y de código abierto desarrollada por GitHub. Sirve como una interfaz gráfica para interactuar con repositorios Git (tanto locales como alojados en GitHub u otros servicios Git) sin necesidad de usar la línea de comandos.
- **Función principal:**
    - Simplifica las operaciones comunes de Git (como clonar, hacer `add`, `commit`, `push`, `pull`, crear y cambiar ramas, fusionar).
    - Visualiza los cambios de forma más intuitiva.
    - Ayuda a los usuarios menos familiarizados con la línea de comandos a manejar Git de manera eficiente.
- **¿Dónde funciona?** Se instala y funciona **localmente** en tu computadora (Windows y macOS).
- **En resumen:** GitHub Desktop es una _aplicación_ que hace que usar Git sea más fácil y visual para aquellos que prefieren no usar la línea de comandos.

### 4. GitLab (Una Alternativa a GitHub)

- **¿Qué es?** GitLab es otra **plataforma basada en la web** para el control de versiones y el desarrollo colaborativo, similar a GitHub. También utiliza Git como su sistema subyacente.
- **Función principal:**
    - **Alojamiento de repositorios:** Al igual que GitHub, aloja repositorios Git en la nube.
    - **Funcionalidades DevOps completas:** Una de las principales diferencias es que GitLab se enfoca en ser una **plataforma [[DevOps]] completa**, ofreciendo herramientas integradas para todo el ciclo de vida de desarrollo de software:
        - **CI/CD (Integración Continua/Entrega Continua) incorporado:** Sus pipelines de CI/CD son una característica muy potente y están muy integradas.
        - **Seguridad y Pruebas (DevSecOps):** Ofrece herramientas para escanear código en busca de vulnerabilidades.
        - **Gestión de proyectos:** Incluye tableros, wikis, y gestión de incidencias.
    - **Opciones de auto-alojamiento:** A diferencia de GitHub (que tradicionalmente se centraba en la nube), GitLab ha tenido una fuerte presencia en la opción de auto-alojar tu propia instancia de GitLab en tus propios servidores, lo que es crucial para empresas con requisitos de seguridad y privacidad específicos.
- **¿Dónde funciona?** Ofrece un servicio en la nube (gitlab.com) y también software que puedes instalar en tus propios servidores.
- **En resumen:** GitLab es un _competidor_ de GitHub que busca ofrecer una solución más completa para el ciclo de vida de DevOps, con fuertes capacidades de CI/CD y opciones de auto-alojamiento.

### Comandos de Git Esenciales:

- **`git init`**: Inicializa un nuevo repositorio de Git en el directorio actual. Esto crea una carpeta oculta `.git` donde Git almacenará todo el historial y la metadata del proyecto.
- **`git clone [URL]`**: Crea una copia local completa de un repositorio de Git existente (remoto) en tu máquina. Descarga todos los archivos y el historial del proyecto.
- **`git add [archivo]` / `git add .`**:
    - `git add [archivo]`: Añade un archivo específico al "staging area" (área de preparación). Esto significa que los cambios en ese archivo están listos para ser incluidos en el próximo "commit".
    - `git add .`: Añade todos los archivos modificados y nuevos en el directorio de trabajo al staging area.
- **`git commit -m "[mensaje descriptivo]"`**: Guarda los cambios que están en el staging area en el historial del proyecto. El mensaje debe describir de forma concisa los cambios realizados.
- **`git status`**: Muestra el estado del directorio de trabajo y del staging area. Te indica qué archivos han sido modificados, cuáles están listos para ser "commitados" y cuáles no están siendo rastreados por Git.
- **`git diff`**: Muestra las diferencias entre los archivos en tu directorio de trabajo y el último "commit", o entre el directorio de trabajo y el staging area.
- **`git log`**: Muestra el historial de "commits" del repositorio, incluyendo información como el autor, la fecha y el mensaje del "commit".
- **`git branch`**:
    - `git branch`: Lista todas las ramas locales del repositorio.
    - `git branch [nombre-rama]`: Crea una nueva rama con el nombre especificado.
- **`git checkout [nombre-rama]`**: Cambia a la rama especificada. También se utiliza para "checkout" de commits anteriores o versiones de archivos.
- **`git checkout -b [nombre-rama]`**: Crea una nueva rama y se cambia a ella inmediatamente.
- **`git merge [nombre-rama]`**: Fusiona los cambios de la rama especificada en la rama actual. Si hay conflictos, deberás resolverlos manualmente.
- **`git push [nombre-remoto] [nombre-rama]`**: Envía los "commits" de tu rama local al repositorio remoto.
    - `git push origin main` (ejemplo común para enviar a la rama `main` del remoto llamado `origin`).
- **`git pull [nombre-remoto] [nombre-rama]`**: Descarga los cambios del repositorio remoto y los fusiona automáticamente con tu rama local. Es una combinación de `git fetch` (descargar) y `git merge` (fusionar).
    - `git pull origin main` (ejemplo común para traer cambios de la rama `main` del remoto llamado `origin`).
- **`git remote -v`**: Muestra las URLs de los repositorios remotos configurados para tu repositorio local.
- **`git remote add [nombre-remoto] [URL]`**: Añade un nuevo repositorio remoto a tu configuración.

### Funciones y Conceptos Básicos de Git y Plataformas como GitHub/GitLab:

- **Fork (Bifurcación)**:
    - **Concepto**: Un "fork" es una copia personal de un repositorio de otro usuario o de un proyecto, que reside en tu propia cuenta en una plataforma como GitHub o GitLab. Es como crear tu propia versión del proyecto original, pero que sigue vinculada a él.
    - **Función**: Te permite experimentar libremente con cambios sin afectar el proyecto original. Es muy común en el desarrollo de código abierto, donde no tienes permisos de escritura directa en el repositorio principal. Una vez que has hecho tus cambios en tu "fork", puedes proponer que se incorporen al proyecto original a través de un "Pull Request".
    - **Diferencia con `clone`**: Mientras que `git clone` crea una copia local en tu máquina, un "fork" crea una copia en el servidor (en tu cuenta de GitHub/GitLab, por ejemplo). Luego, puedes `clonar` tu "fork" a tu máquina local.
- **Clone (Clonar)**:
    - **Concepto**: Como se mencionó en los comandos, `git clone` es la acción de crear una copia exacta de un repositorio (ya sea el original o un "fork") en tu máquina local. Esta copia incluye todo el historial de "commits".
    - **Función**: Te permite trabajar en el código de forma local, realizar cambios, y luego "empujarlos" de vuelta al repositorio remoto. Es el primer paso para empezar a trabajar en un proyecto Git.
- **Branches (Ramas)**:
    - **Concepto**: Una rama en Git es una línea de desarrollo independiente dentro del mismo repositorio. Es una forma de aislar el trabajo nuevo o experimental del código principal y estable.
    - **Función**: Permite a los desarrolladores trabajar en nuevas características, correcciones de errores o experimentos sin afectar la rama principal (generalmente `main` o `master`) del proyecto. Cuando el trabajo en una rama está completo y probado, se puede fusionar de nuevo en la rama principal. Esto facilita el desarrollo paralelo y reduce el riesgo de introducir errores en el código en producción.
- **Commits (Confirmaciones)**:
    - **Concepto**: Un "commit" es una "instantánea" de los cambios en tu código en un momento específico. Es el bloque fundamental en el historial de Git. Cada "commit" tiene un mensaje descriptivo que explica lo que se hizo.
    - **Función**: Los "commits" permiten rastrear la evolución del proyecto. Puedes volver a cualquier "commit" anterior, ver qué cambios se hicieron, quién los hizo y cuándo. Esto es crucial para la auditoría, la depuración y la colaboración.
- **Pull Request (Solicitud de Extracción) / Merge Request (Solicitud de Fusión)**:
    - **Concepto**: Un "Pull Request" (PR) en GitHub o un "Merge Request" (MR) en GitLab es una propuesta para integrar cambios de una rama a otra. Típicamente, se usa para proponer cambios de una rama de característica (o de tu "fork") a la rama principal de un proyecto.
    - **Función**: Es una herramienta clave para la colaboración y revisión de código. Permite a otros desarrolladores revisar tus cambios, comentar sobre ellos, sugerir mejoras, y finalmente aprobar o rechazar la fusión. Una vez aprobado, los cambios se fusionan en la rama de destino.
- **Issues (Incidencias)**:
    - **Concepto**: Los "issues" (o problemas/incidencias) son una característica de las plataformas de alojamiento de Git (como GitHub, GitLab, Bitbucket) para rastrear tareas, errores, solicitudes de características o cualquier punto de discusión relacionado con el proyecto.
    - **Función**: Proporcionan un sistema de gestión de proyectos ligero. Los desarrolladores pueden crear "issues" para reportar bugs, solicitar nuevas funcionalidades, asignar tareas a miembros del equipo, y discutir soluciones. Ayudan a organizar el trabajo y a mantener un registro de lo que necesita ser abordado en el proyecto.
- **Remote (Remoto)**:
    - **Concepto**: Un "remote" en Git es una versión de tu repositorio que vive en otro lugar, generalmente en un servidor de red como GitHub, GitLab o Bitbucket.
    - **Función**: Permite la colaboración entre desarrolladores. Los desarrolladores "empujan" sus cambios a un "remote" y "jalan" cambios de otros desarrolladores desde el mismo "remote". El `origin` es el nombre por defecto del primer repositorio remoto con el que interactúas, generalmente el que clonaste.


