// src/utils/obsidianMarkdown.js
// Procesador que funciona con tu setup actual

export function processObsidianMarkdown(content) {
  let processed = content;
  
  // 1. Procesar resaltado ===texto===
  processed = processed.replace(/===([^=]+)===/g, '<mark class="highlight">$1</mark>');
  
  // 2. Procesar kbd `texto` 
  processed = processed.replace(/`([^`\n]+)`/g, '<kbd class="key">$1</kbd>');
  
  // 3. Procesar callouts
  processed = processCallouts(processed);
  
  return processed;
}

function processCallouts(text) {
  // Regex mejorado para capturar callouts completos
  const calloutRegex = /^>\s*\[!(\w+)\]([+-]?)\s*([^\n]*)\n((?:^>.*\n?)*)/gm;
  
  return text.replace(calloutRegex, (match, type, fold, title, content) => {
    const calloutType = type.toLowerCase();
    const isCollapsible = fold === '+' || fold === '-';
    const isInitiallyFolded = fold === '-';
    const displayTitle = title.trim() || capitalizeFirst(calloutType);
    const icon = getCalloutIcon(calloutType);
    
    // Limpiar contenido
    const cleanContent = content
      .replace(/^>\s*/gm, '')
      .trim();
    
    const foldedClass = isInitiallyFolded ? ' folded' : '';
    const foldIcon = isCollapsible ? '<button class="callout-fold" onclick="toggleCallout(this)">▼</button>' : '';
    
    return `<div class="callout callout-${calloutType}${foldedClass}" data-collapsible="${isCollapsible}">
      <div class="callout-header">
        <span class="callout-icon">${icon}</span>
        <span class="callout-title">${displayTitle}</span>
        ${foldIcon}
      </div>
      <div class="callout-content">${cleanContent}</div>
    </div>`;
  });
}

function getCalloutIcon(type) {
  const icons = {
    note: '📝', info: 'ℹ️', tip: '💡', warning: '⚠️', error: '❌',
    success: '✅', question: '❓', important: '🔥', example: '📋',
    quote: '💬', abstract: '📄', summary: '📄', todo: '✅',
    help: '❓', faq: '❓', caution: '⚠️', attention: '⚠️',
    failure: '❌', fail: '❌', missing: '❌', danger: '⛔',
    bug: '🐛', check: '✅', done: '✅'
  };
  return icons[type] || '📝';
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Funciones globales para el navegador
if (typeof window !== 'undefined') {
  window.toggleCallout = function(button) {
    const callout = button.closest('.callout');
    const content = callout.querySelector('.callout-content');
    
    if (callout.classList.contains('folded')) {
      // Expandir
      callout.classList.remove('folded');
      content.style.display = 'block';
      button.style.transform = 'rotate(0deg)';
    } else {
      // Colapsar
      callout.classList.add('folded');
      content.style.display = 'none';
      button.style.transform = 'rotate(-90deg)';
    }
  };
}