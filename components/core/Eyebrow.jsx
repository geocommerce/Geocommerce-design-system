import React from 'react';

export function Eyebrow({ tone = 'muted', rule = false, children, ...rest }) {
  const colors = { muted: 'var(--text-muted)', brand: 'var(--text-brand)', inverse: 'rgba(247,247,242,.68)' };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-5)' }} {...rest}>
      {rule && <span style={{ width: '28px', height: '1px', background: 'currentColor', color: colors[tone], opacity: .5 }} />}
      <span style={{
        font: 'var(--text-small)', fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--size-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
        color: colors[tone],
      }}>{children}</span>
    </div>
  );
}
