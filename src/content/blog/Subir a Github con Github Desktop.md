---
title: Subir a Github con Github Desktop
description: Guia si prefieres usar github desktop
pubDate: 2026-02-04
tags:
  - github
  - dev
  - Notas
coverImage: ./github.jpg
---


GitHub Desktop es una herramienta muy útil y amigable para trabajar con Git y GitHub sin necesidad de usar la línea de comandos. Hace que muchas operaciones sean más visuales y sencillas.

## Cómo subir un proyecto a GitHub con GitHub Desktop

Para subir un proyecto que ya tienes en tu computadora a un nuevo repositorio en GitHub (o uno existente) usando GitHub Desktop, sigue estos pasos:

1. **Abre GitHub Desktop:** Asegúrate de tener la aplicación instalada y de haber iniciado sesión con tu cuenta de GitHub.
    
2. **Añade tu proyecto local:**
    
    - En GitHub Desktop, ve a **File > Add Local Repository...** (Archivo > Añadir repositorio local...).
    - Se abrirá una ventana. Haz clic en **"Choose..."** (Elegir...) y navega hasta la carpeta principal de tu proyecto en tu computadora. Selecciona esa carpeta y haz clic en "Select Folder" (Seleccionar carpeta).
    - GitHub Desktop la detectará como un repositorio Git si ya tiene un `.git` (aunque no lo hayas inicializado con la línea de comandos, GitHub Desktop lo hará por ti).
    - Haz clic en **"Add Repository"** (Añadir repositorio).
3. **Publica el repositorio en GitHub:**
    
    - Una vez que tu proyecto local esté añadido a GitHub Desktop, lo verás en la lista de repositorios.
    - En la parte superior de la interfaz de GitHub Desktop, verás un botón que dice **"Publish repository"** (Publicar repositorio). Haz clic en él.
    - Se abrirá una ventana:
        - **Name (Nombre):** Será el nombre de tu repositorio en GitHub. Puedes cambiarlo si quieres.
        - **Description (optional) (Descripción - opcional):** Una breve descripción de tu proyecto.
        - **Keep this code private (Mantener este código privado):** Marca esta casilla si quieres que el repositorio sea privado. Desmárcala si quieres que sea público.
        - **Organization (Organización - opcional):** Si eres parte de una organización en GitHub, puedes elegir dónde publicar el repositorio. Si no, déjalo en "None".
    - Haz clic en **"Publish Repository"** (Publicar repositorio).
    
    ¡Y listo! GitHub Desktop se encargará de crear el repositorio en GitHub y de subir todos tus archivos. Si tu proyecto ya tenía un `README.md`, se subirá y se mostrará en GitHub. Si no, puedes editarlo después directamente en GitHub o añadirlo localmente y luego "sincronizar" (push) los cambios.
    

### ¿Con GitHub Desktop también se pueden crear ramas?

**¡Sí, absolutamente!** Crear y gestionar ramas es una de las funciones más importantes de Git y GitHub Desktop lo hace muy fácil y visual.

### ¿Cómo crear ramas con GitHub Desktop de forma simple y resumida?

Las ramas te permiten trabajar en diferentes versiones de tu código (por ejemplo, añadir una nueva función, corregir un error) sin afectar la rama principal (generalmente llamada `main` o `master`) de tu proyecto. Es como crear una copia de seguridad temporal para experimentar.

Aquí tienes cómo crear una rama y trabajar con ella:

1. **Abre tu repositorio en GitHub Desktop:** Asegúrate de que tienes seleccionado el repositorio donde quieres crear la rama.
    
2. **Crea una nueva rama:**
    
    - En la barra superior de GitHub Desktop, verás un botón que muestra la **rama actual** (probablemente "main" o "master"). Haz clic en él.
    - En el menú desplegable que aparece, haz clic en **"New Branch..."** (Nueva rama...).
    - Se abrirá una ventana:
        - **Name (Nombre):** Escribe un nombre descriptivo para tu nueva rama (ej. `feature/nueva-calculadora`, `bugfix/login-error`).
        - **Based on (Basada en):** Aquí seleccionas de qué rama quieres que se copie la nueva rama. Generalmente, la dejas en `main` o `master`.
    - Haz clic en **"Create Branch"** (Crear rama).
3. **Cambia a tu nueva rama:**
    
    - Una vez creada, GitHub Desktop te preguntará si quieres "Publish branch" (Publicar rama). Primero, haz clic en **"Bring my changes to [nombre de la nueva rama]"** si te aparece esa opción, o simplemente asegúrate de que el nombre de tu nueva rama aparezca en el botón de la rama actual en la parte superior. GitHub Desktop cambia automáticamente a la rama que acabas de crear.
4. **Realiza tus cambios en el código (localmente):**
    
    - Ahora, abre tu editor de código preferido (VS Code, Sublime Text, etc.) y haz los cambios que quieras en los archivos de tu proyecto. Recuerda que estos cambios los estás haciendo en tu nueva rama, no en la rama principal.
5. **Haz un "commit" de tus cambios:**
    
    - Vuelve a GitHub Desktop. Verás que en la pestaña **"Changes"** (Cambios) aparecen los archivos que has modificado.
    - En la parte inferior izquierda, hay un cuadro de texto para el **"Summary (required)"** (Resumen - requerido). Escribe un mensaje corto y descriptivo de los cambios que hiciste (ej. "Añadir función de suma", "Corregir error de validación de correo").
    - Opcionalmente, puedes añadir una "Description" más detallada.
    - Haz clic en el botón **"Commit to [nombre de tu rama]"**.
6. **Publica tu rama en GitHub:**
    
    - Después de hacer el commit, en la parte superior de GitHub Desktop, verás un botón **"Publish branch"** (Publicar rama). Haz clic en él. Esto subirá tu nueva rama y los cambios que confirmaste a tu repositorio en GitHub.
7. **Crea un "Pull Request" (Opcional, pero recomendado para fusionar):**
    
    - Si quieres que los cambios de tu rama se integren en la rama principal (`main` o `master`), puedes crear un "Pull Request".
    - Después de publicar tu rama, GitHub Desktop te mostrará un botón para **"Create Pull Request"** (Crear Pull Request). Haz clic en él.
    - Esto te llevará a la página web de GitHub, donde podrás revisar tus cambios y enviar el Pull Request para que se fusione con la rama principal.

**En resumen, con GitHub Desktop:**

- **Subir un proyecto:** Añades el proyecto local y luego lo "Publicas" en GitHub.
- **Crear ramas:** Haces clic en el selector de ramas, eliges "New Branch", le das un nombre y la creas. Después de hacer cambios y "commits", la "Publicas" y, si quieres, creas un "Pull Request".

GitHub Desktop simplifica mucho el flujo de trabajo de Git, haciendo que sea muy visual y fácil de entender. ¡Te será de gran ayuda!


> [!question] 
> y si quiero linkearlo con un repositorio existente desde github desktop a github? 

### Usar Github desktop con repositorio existente en Github
¡Claro que sí! Si ya tienes un repositorio en GitHub (online) y quieres trabajarlo localmente con GitHub Desktop, lo que necesitas hacer es **clonar** ese repositorio.

"Clonar" significa descargar una copia exacta del repositorio de GitHub a tu computadora. GitHub Desktop simplifica mucho este proceso.

Aquí te explico cómo linkear (clonar) un repositorio existente de GitHub a GitHub Desktop:

### Cómo clonar un repositorio de GitHub a GitHub Desktop

1. **Abre GitHub Desktop:** Asegúrate de que la aplicación esté abierta y de que hayas iniciado sesión con tu cuenta de GitHub.
    
2. **Selecciona la opción para clonar un repositorio:**
    
    - En la interfaz principal de GitHub Desktop, verás una opción que dice **"Clone a Repository"** (Clonar un repositorio). Haz clic en ella.
    - Si ya tienes otros repositorios abiertos, puedes ir a **File > Clone Repository...** (Archivo > Clonar repositorio...).
3. **Elige el repositorio a clonar:**
    
    - Se abrirá una ventana con varias pestañas:
        
        - **GitHub.com:** Esta es la pestaña más común. Aquí verás una lista de todos los repositorios a los que tienes acceso en tu cuenta de GitHub.
        - **URL:** Si tienes la URL de un repositorio (ej. `https://github.com/usuario/mi-repo.git`), puedes pegarla aquí. Esto es útil para repositorios públicos de otras personas o si no aparece en tu lista.
        - **GitHub Enterprise:** Para usuarios de GitHub Enterprise Server (menos común para uso personal).
    - **Selecciona el repositorio deseado:**
        
        - Si usas la pestaña **"GitHub.com"**, busca y selecciona el repositorio que quieres clonar de la lista.
        - Si usas la pestaña **"URL"**, pega la URL del repositorio.
4. **Elige la ruta local donde se guardará:**
    
    - Una vez seleccionado el repositorio, abajo verás un campo "Local Path" (Ruta local). Este es el directorio en tu computadora donde GitHub Desktop creará una carpeta con tu repositorio clonado.
    - Haz clic en **"Choose..."** (Elegir...) para seleccionar la ubicación en tu disco duro donde quieres guardar el proyecto. **Importante:** Selecciona una carpeta _vacía_ o una carpeta _superior_ donde GitHub Desktop pueda crear la nueva carpeta del repositorio. Por ejemplo, si tu proyecto se llama `MiProyecto`, selecciona una carpeta como `Documentos` o `Proyectos` y GitHub Desktop creará automáticamente `Documentos/MiProyecto` o `Proyectos/MiProyecto`.
5. **Clona el repositorio:**
    
    - Una vez que hayas seleccionado el repositorio y la ruta local, haz clic en el botón **"Clone"** (Clonar).
6. **¡Listo!**
    
    - GitHub Desktop descargará todo el contenido del repositorio de GitHub a la carpeta que especificaste en tu computadora.
    - Ahora podrás abrir la carpeta del proyecto en tu editor de código preferido, hacer cambios, y luego usar GitHub Desktop para **"Fetch origin"** (traer cambios de otros), **"Commit"** (guardar tus cambios localmente) y **"Push origin"** (subir tus cambios a GitHub).

**En resumen, para linkear un repositorio existente de GitHub a GitHub Desktop (lo que se llama clonar):**

- Abres GitHub Desktop.
- Vas a "File" > "Clone Repository..." (o el botón "Clone a Repository").
- Seleccionas el repositorio de la lista de GitHub.com o pegas su URL.
- Eliges la ubicación en tu computadora donde quieres que se guarde la copia local del repositorio.
- Haces clic en "Clone".

Después de clonarlo, cualquier cambio que hagas en los archivos de esa carpeta local podrá ser gestionado y sincronizado con el repositorio remoto en GitHub usando GitHub Desktop. ¡Entendido! Si ya tienes un repositorio en GitHub y quieres **vincularlo a tu computadora usando GitHub Desktop**, lo que necesitas hacer es **"clonar"** ese repositorio. Clonar un repositorio significa descargar una copia exacta de todo su contenido (código, historial, ramas, etc.) desde GitHub a tu máquina local.

Aquí te explico cómo hacerlo de manera simple y resumida:

### Cómo clonar un repositorio existente de GitHub con GitHub Desktop

Este proceso es ideal si ya tienes un repositorio en GitHub (quizás lo creaste directamente en la web) y quieres empezar a trabajar en él desde tu computadora, o si quieres colaborar en un proyecto de otra persona.

1. **Abre GitHub Desktop:** Asegúrate de que la aplicación está instalada y de que has iniciado sesión con tu cuenta de GitHub.
    
2. **Inicia el proceso de clonación:**
    
    - En GitHub Desktop, ve a **File > Clone Repository...** (Archivo > Clonar repositorio...).
    - Alternativamente, si estás en la pantalla de inicio de GitHub Desktop (donde ves "No repositories yet" o una lista de tus repositorios), puedes hacer clic en el botón **"Clone a repository from the Internet..."** (Clonar un repositorio de Internet...).
3. **Selecciona el repositorio a clonar:**
    
    - En la ventana "Clone a Repository", verás varias pestañas:
        - **GitHub.com:** Esta pestaña te mostrará una lista de todos los repositorios que tienes en tu cuenta de GitHub, así como los repositorios de organizaciones a las que perteneces. Esta es la forma más común.
        - **URL:** Si el repositorio no aparece en tu lista (quizás es público y no es tuyo, o privado y alguien te dio el enlace), puedes pegar la URL del repositorio de GitHub aquí (ej. `https://github.com/tu-usuario/tu-proyecto.git`).
        - **GitHub Enterprise:** Si usas una instancia privada de GitHub en tu empresa.
    - **Selecciona el repositorio** de la lista (o pega la URL).
4. **Elige la ruta local (dónde se guardará en tu computadora):**
    
    - Junto al campo **"Local Path"** (Ruta local), haz clic en el botón **"Choose..."** (Elegir...).
    - Navega hasta la carpeta en tu computadora donde quieres que se guarde el repositorio clonado. GitHub Desktop creará automáticamente una subcarpeta con el nombre del repositorio dentro de la ruta que elijas. Por ejemplo, si eliges `C:\MisProyectos` y el repositorio se llama `MiProyecto`, se creará `C:\MisProyectos\MiProyecto`.
    - Haz clic en "Select Folder" (Seleccionar carpeta).
5. **Confirma la clonación:**
    
    - Una vez que hayas seleccionado el repositorio y la ruta local, haz clic en el botón verde **"Clone"** (Clonar) en la parte inferior de la ventana.
6. **Espera a que se descargue:**
    
    - GitHub Desktop descargará el repositorio completo a la ubicación que especificaste en tu computadora. Esto puede tardar un poco dependiendo del tamaño del repositorio y tu conexión a Internet.
7. **¡Listo para trabajar!**
    
    - Una vez completado, el repositorio se abrirá automáticamente en GitHub Desktop. Ahora tienes una copia local del repositorio y cualquier cambio que hagas en esa carpeta local (usando tu editor de código) lo detectará GitHub Desktop. Podrás hacer "commits" y luego "push" (subir) o "pull" (descargar cambios de otros) directamente desde la interfaz de GitHub Desktop.

**En resumen, para vincular un repositorio existente:**

- **No "añades" un repositorio local que ya tienes en GitHub.**
- Lo que haces es **"clonar"** el repositorio que ya existe en GitHub hacia tu computadora usando GitHub Desktop. Esto descarga una copia local y la vincula automáticamente.

De esta forma, la copia local de tu proyecto estará perfectamente sincronizada con el repositorio remoto en GitHub.