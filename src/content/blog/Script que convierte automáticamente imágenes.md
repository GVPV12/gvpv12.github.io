---
title: Script convertidor imagen de Obsidian a Astro
description: Convertidor de WikiLinks a Markdown Estandar de Astro
pubDate: 2026-02-08
tags:
  - Obsidian
  - Comandos
  - Astro
  - Jardin-digital
---
Este es el script que tengo en esta página. Lo que hace es que básicamente convierte el formato de como se insertan las imágenes en obsidian en formato en que pueda ser visto correctamente. Más específicamente pasa de esto `![[Ejemplo]]` a esto `![Mi foto](./Ejemplo.jpg)`. En otras palabras de wikiLinks a Markdown estandar de Astro.

Para poder usarlo:
1. Crea un archivo .ps1 (**scripts de PowerShel**) llamado `convert-obsidian-images-fixed.ps1`
2. Añádelo a una nueva carpeta llamado scripts
3. Añadelo a la lista de git ignore
4. Ejecutalo con este comando:

```
powershell -ExecutionPolicy Bypass -File ".\scripts\convert-obsidian-images-fixed.ps1"
```


Este es el contenido de `convert-obsidian-images-fixed.ps1`


```
# Script para convertir sintaxis de imagenes de Obsidian a Markdown estandar
# y renombrar imagenes con espacios

param(
    [string]$Path = $PWD,
    [switch]$DryRun
)

Write-Host "=== Convertidor de Imagenes Obsidian a Markdown ===" -ForegroundColor Cyan
Write-Host ""

# Paso 1: Renombrar imagenes con espacios
Write-Host "Paso 1: Buscando imagenes con espacios en los nombres..." -ForegroundColor Yellow

$imageExtensions = @("*.jpg", "*.jpeg", "*.png", "*.gif", "*.webp", "*.svg", "*.bmp")
$renamedFiles = @{}

foreach ($ext in $imageExtensions) {
    $images = Get-ChildItem -Path $Path -Filter $ext -Recurse -File -ErrorAction SilentlyContinue | Where-Object { $_.Name -match " " }
    
    foreach ($image in $images) {
        $newName = $image.Name -replace " ", "-"
        $newPath = Join-Path $image.DirectoryName $newName
        
        if ($DryRun) {
            Write-Host "  [DRY RUN] Renombraria: $($image.Name) -> $newName" -ForegroundColor Gray
        } else {
            try {
                Write-Host "  Renombrando: $($image.Name) -> $newName" -ForegroundColor Green
                Rename-Item -Path $image.FullName -NewName $newName -Force -ErrorAction Stop
                $renamedFiles[$image.Name] = $newName
            } catch {
                Write-Host "  Error al renombrar: $($image.Name)" -ForegroundColor Red
            }
        }
    }
}

if ($renamedFiles.Count -eq 0) {
    Write-Host "  No se encontraron imagenes con espacios" -ForegroundColor Gray
}

Write-Host ""

# Paso 2: Convertir sintaxis de Obsidian a Markdown estandar
Write-Host "Paso 2: Convirtiendo sintaxis de imagenes en archivos .md..." -ForegroundColor Yellow

$mdFiles = Get-ChildItem -Path $Path -Filter "*.md" -Recurse -File -ErrorAction SilentlyContinue
$totalReplacements = 0

foreach ($mdFile in $mdFiles) {
    try {
        $content = Get-Content -Path $mdFile.FullName -Raw -Encoding UTF8 -ErrorAction Stop
        $originalContent = $content
        $fileReplacements = 0
        
        # Patron para capturar ![[imagen.ext]]
        $pattern = '!\[\[([^\]]+\.(jpg|jpeg|png|gif|webp|svg|bmp))\]\]'
        
        $matches = [regex]::Matches($content, $pattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        
        foreach ($match in $matches) {
            $fullMatch = $match.Value
            $imageName = $match.Groups[1].Value
            
            # Si la imagen fue renombrada, usar el nuevo nombre
            $finalImageName = if ($renamedFiles.ContainsKey($imageName)) {
                $renamedFiles[$imageName]
            } else {
                $imageName
            }
            
            # Crear el nombre descriptivo (sin extension) para el alt text
            $altText = [System.IO.Path]::GetFileNameWithoutExtension($finalImageName)
            
            # Nuevo formato: ![alt text](./imagen.ext)
            $replacement = "![$altText](./$finalImageName)"
            
            $content = $content -replace [regex]::Escape($fullMatch), $replacement
            $fileReplacements++
        }
        
        if ($fileReplacements -gt 0) {
            if ($DryRun) {
                Write-Host "  [DRY RUN] $($mdFile.Name): $fileReplacements reemplazo(s)" -ForegroundColor Gray
            } else {
                Set-Content -Path $mdFile.FullName -Value $content -Encoding UTF8 -NoNewline -ErrorAction Stop
                Write-Host "  $($mdFile.Name): $fileReplacements reemplazo(s)" -ForegroundColor Green
                $totalReplacements += $fileReplacements
            }
        }
    } catch {
        Write-Host "  Error procesando: $($mdFile.Name)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "=== Resumen ===" -ForegroundColor Cyan
Write-Host "Imagenes renombradas: $($renamedFiles.Count)" -ForegroundColor White
Write-Host "Archivos Markdown procesados: $($mdFiles.Count)" -ForegroundColor White
Write-Host "Total de reemplazos de sintaxis: $totalReplacements" -ForegroundColor White

if ($DryRun) {
    Write-Host ""
    Write-Host "MODO DRY RUN - No se realizaron cambios reales" -ForegroundColor Yellow
    Write-Host "Ejecuta sin el parametro -DryRun para aplicar los cambios" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Proceso completado!" -ForegroundColor Green
```



---

## Si no funciona el script:

## ✅ **Solución rápida:**

Ejecuta el script con **Bypass** para saltarte la verificación de firma:

powershell

```powershell
powershell -ExecutionPolicy Bypass -File ".\scripts\convert-obsidian-images.ps1"
```

O más simple:

powershell

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
& ".\scripts\convert-obsidian-images.ps1"
```

## 🎯 **Mejor solución (permanente):**

Desbloquea el archivo descargado:

powershell

```powershell
Unblock-File -Path ".\scripts\convert-obsidian-images.ps1"
Unblock-File -Path ".\scripts\process-new-image.ps1"

# Ahora sí debería funcionar:
& ".\scripts\convert-obsidian-images.ps1"
```

## 🚀 **Opción más directa:**

Copia y pega todo esto en tu PowerShell:

powershell

```powershell
# Desbloquear los scripts
Unblock-File -Path ".\scripts\convert-obsidian-images.ps1"

# Ejecutar
& ".\scripts\convert-obsidian-images.ps1"
```

## 📝 **Alternativa: Recrear el script manualmente**

Si los comandos anteriores no funcionan, crea el script de nuevo:

1. **Abre Notepad** o VSCode
2. **Copia el contenido** del archivo `convert-obsidian-images.ps1` que te di
3. **Guárdalo** como `convert-obsidian-images.ps1` en la carpeta `scripts/`
4. **Ejecuta normalmente**

Cuando creas el archivo tú mismo (en lugar de descargarlo), Windows no lo marca como bloqueado.

---

## ⚡ **Prueba esto AHORA:**

powershell

```powershell
Unblock-File -Path ".\scripts\convert-obsidian-images.ps1"
& ".\scripts\convert-obsidian-images.ps1"
```