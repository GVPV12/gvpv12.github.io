// plugins/remark-callouts.js
// Convierte blockquotes estilo Obsidian [!question], [!note], [!warning], [!tip], [!info]
// en callouts con iconos.
//
// Uso en markdown:
// > [!question]
// > Tu pregunta aquí

const CALLOUTS = {
  question: { icon: '❓', label: 'Pregunta', color: '#a855f7' },
  note:     { icon: '📝', label: 'Nota',     color: '#3b82f6' },
  warning:  { icon: '⚠️',  label: 'Aviso',   color: '#f59e0b' },
  tip:      { icon: '💡', label: 'Consejo', color: '#10b981' },
  info:     { icon: 'ℹ️',  label: 'Info',    color: '#06b6d4' },
};

// Extrae texto plano de un nodo MDAST recursivamente
function extractText(node) {
  if (node.type === 'text') return node.value;
  if (node.children) return node.children.map(extractText).join('');
  return '';
}

export default function remarkCallouts() {
  return (tree) => {
    for (let i = 0; i < tree.children.length; i++) {
      const node = tree.children[i];

      // Solo procesar blockquotes
      if (node.type !== 'blockquote') continue;
      if (!node.children || node.children.length === 0) continue;

      // El primer hijo del blockquote debe ser un párrafo
      const firstParagraph = node.children[0];
      if (firstParagraph.type !== 'paragraph') continue;
      if (!firstParagraph.children || firstParagraph.children.length === 0) continue;

      // El texto del primer hijo del párrafo debe empezar con [!tipo]
      const firstText = firstParagraph.children[0];
      if (firstText.type !== 'text') continue;

      const match = firstText.value.match(/^\[!(question|note|warning|tip|info)\]\s*/i);
      if (!match) continue;

      const type = match[1].toLowerCase();
      const callout = CALLOUTS[type];
      if (!callout) continue;

      // Borrar el [!tipo] del primer texto
      firstText.value = firstText.value.slice(match[0].length);

      // Extraer todo el contenido restante del blockquote como texto
      const content = node.children.map(extractText).join(' ').trim();

      // Reemplazar el blockquote por un nodo HTML del callout
      tree.children[i] = {
        type: 'html',
        value: `<div style="border-left: 4px solid ${callout.color}; background: ${callout.color}18; border-radius: 0 0.5rem 0.5rem 0; padding: 0.75rem 1rem; margin: 1rem 0; display: flex; align-items: flex-start; gap: 0.6rem;">
  <span style="font-size: 1.2rem; line-height: 1.4; flex-shrink: 0;">${callout.icon}</span>
  <div>
    <strong style="color: ${callout.color};">${callout.label}</strong>
    <p style="margin: 0.25rem 0 0 0;">${content}</p>
  </div>
</div>`,
      };
    }
  };
}
