import React from 'react';

export function Accordion({ items = [], defaultOpen = 0, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div {...rest}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderTop: '1px solid var(--border-hairline)' }}>
            <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)',
              padding: 'var(--space-6) 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              font: 'var(--text-h6)', fontFamily: 'var(--font-body)', color: isOpen ? 'var(--text-brand)' : 'var(--text-heading)',
              transition: 'color var(--duration-base) var(--ease-standard)',
            }}>
              {it.q}
              <span style={{ fontSize: '20px', lineHeight: 1, transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-standard)' }}>+</span>
            </button>
            <div style={{
              display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows var(--duration-base) var(--ease-standard)',
            }}>
              <div style={{ overflow: 'hidden' }}>
                <p style={{ margin: '0 0 var(--space-6)', font: 'var(--text-base)', color: 'var(--text-muted)', maxWidth: '68ch' }}>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
