import React from 'react';

export function ProcessStep({ number, title, body, active = false, ...rest }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '64px 1fr', gap: 'var(--space-6)',
      padding: 'var(--space-8) 0', borderTop: '1px solid var(--border-hairline)',
    }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--size-h5)', fontWeight: 'var(--weight-light)',
        color: active ? 'var(--text-brand)' : 'var(--text-faint)', lineHeight: 1.2,
      }}>{number}</div>
      <div>
        <h5 style={{ margin: '0 0 var(--space-2)', font: 'var(--text-h6)', color: 'var(--text-heading)' }}>{title}</h5>
        <p style={{ margin: 0, font: 'var(--text-base)', color: 'var(--text-muted)', maxWidth: '58ch' }}>{body}</p>
      </div>
    </div>
  );
}
