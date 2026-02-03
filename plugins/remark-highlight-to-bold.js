// plugins/remark-highlight-to-bold.js
// Convierte ==texto== en <strong>texto</strong> (negrita)
//
// Uso en markdown:
// Este es un texto con ==esto en negrita== en medio.

export default function remarkHighlightToBold() {
  return (tree) => {
    visitAndReplace(tree);
  };
}

function visitAndReplace(node) {
  if (!node.children) return;

  const newChildren = [];

  for (const child of node.children) {
    if (child.type === 'text' && child.value.includes('==')) {
      const parts = splitHighlight(child.value);
      newChildren.push(...parts);
    } else {
      // Seguir buscando en niveles más profundos
      visitAndReplace(child);
      newChildren.push(child);
    }
  }

  node.children = newChildren;
}

// Partir un string en nodos text y strong según ==texto==
function splitHighlight(text) {
  const regex = /==(.+?)==/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Texto antes del ==
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
    }
    // El texto dentro de == == como strong
    parts.push({
      type: 'strong',
      children: [{ type: 'text', value: match[1] }],
    });
    lastIndex = regex.lastIndex;
  }

  // Texto después del último ==
  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) });
  }

  // Si no hubo matches, devolver el nodo original
  if (parts.length === 0) {
    parts.push({ type: 'text', value: text });
  }

  return parts;
}
