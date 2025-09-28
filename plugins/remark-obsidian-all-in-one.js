import { visit } from 'unist-util-visit';

export default function remarkObsidianAllInOne() {
  return (tree) => {
    /* 1.  ===highlight===  */
    visit(tree, 'text', (node) => {
      if (!node.value.includes('===')) return;
      node.type = 'html';
      node.value = node.value.replace(
        /===([^=]+)===/g,
        '<mark class="bg-yellow-300 text-black px-1 rounded">$1</mark>'
      );
    });

    /* 2.  `kbd`  (inline)  */
    visit(tree, 'text', (node) => {
      if (!node.value.includes('`')) return;
      node.type = 'html';
      node.value = node.value.replace(
        /`([^`]+)`/g,
        '<kbd class="px-2 py-0.5 text-sm font-mono bg-gray-800 text-gray-100 border border-gray-600 rounded shadow-sm align-baseline">$1</kbd>'
      );
    });

    /* 3.  > [!tip] ...  →  <Callout>  */
    visit(tree, 'blockquote', (node) => {
      const first = node.children?.[0];
      if (first?.type !== 'paragraph') return;
      const line = first.children?.[0];
      if (line?.type !== 'text') return;

      const m = line.value.match(/\[\!([^\]]+)\]\s*(.*)/);
      if (!m) return;

      const type = m[1].toLowerCase();
      const title = m[2].trim() || type;

      /* convierte el blockquote en un <Callout type="tip" title="Tip"> */
      node.data = node.data || {};
      node.data.hName = 'Callout';
      node.data.hProperties = { type, title };
    });
  };
}