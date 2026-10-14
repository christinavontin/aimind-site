// When an article opens with a figure ("56 % der CMOs …", "56% of CMOs …"),
// the whole figure becomes the drop cap instead of its first digit:
// in display size the space before % becomes a narrow no-break space;
// the figure is wrapped in <span class="lead-figure"> (styled in global.css).

const FIGURE = /^(\d+(?:[.,]\d+)?[\s  ]?%)/;

export function rehypeLeadFigure() {
  return (tree) => {
    const p = (tree.children || []).find((n) => n.type === 'element');
    if (!p || p.tagName !== 'p') return;
    const first = p.children && p.children[0];
    if (!first || first.type !== 'text') return;
    const m = first.value.match(FIGURE);
    if (!m) return;
    p.children.splice(0, 1,
      { type: 'element', tagName: 'span', properties: { className: ['lead-figure'] }, children: [{ type: 'text', value: m[1].replace(/[\s\u00a0]/, '\u202f') }] },
      { type: 'text', value: first.value.slice(m[1].length) },
    );
  };
}
