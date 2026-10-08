// Wraps every <table> in <figure class="aim-tbl"> so tables follow the
// editorial table template (full width up to 1600px, horizontal scroll on phones)
// while staying real HTML tables for search engines and AI systems.
// Cells whose content is a number get class="num" (right-aligned, tabular figures).

const NUMERIC = /^[\s€$£%+\-–.,:×÷\d()]+$/;

function textOf(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

function walk(node, parent) {
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (child.type === 'element' && child.tagName === 'table' && !(parent && parent.tagName === 'figure')) {
      node.children[i] = {
        type: 'element',
        tagName: 'figure',
        properties: { className: ['aim-tbl'] },
        children: [child],
      };
      markNumbers(child);
      continue;
    }
    walk(child, node);
  }
}

function markNumbers(table) {
  const visit = (n) => {
    if (n.type === 'element' && (n.tagName === 'td' || n.tagName === 'th')) {
      const t = textOf(n).trim();
      if (t && NUMERIC.test(t) && /\d/.test(t)) {
        const cls = n.properties.className || [];
        n.properties.className = [...cls, 'num'];
      }
    }
    (n.children || []).forEach(visit);
  };
  visit(table);
}

export function rehypeTables() {
  return (tree) => walk(tree, null);
}
