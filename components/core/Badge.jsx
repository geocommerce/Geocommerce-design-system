import React from 'react';

const tones = {
  neutral: { background: 'var(--shell-100)', color: 'var(--ink-700)', border: 'var(--border-hairline)' },
  brand: { background: 'var(--green-100)', color: 'var(--green-800)', border: 'var(--green-200)' },
  solid: { background: 'var(--surface-brand)', color: 'var(--text-on-brand)', border: 'var(--surface-brand)' },
  outline: { background: 'transparent', color: 'var(--ink-800)', border: 'var(--border-subtle)' },
  inverse: { background: 'rgba(247,247,242,.12)', color: 'var(--shell-000)', border: 'rgba(247,247,242,.24)' },
};

export function Badge({ tone = 'neutral', dot = false, children, ...rest }) {
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 13px',
      borderRadius: 'var(--radius-pill)', background: t.background, color: t.color,
      border: '1px solid ' + t.border, fontFamily: 'var(--font-body)', fontSize: '12px',
      fontWeight: 'var(--weight-medium)', letterSpacing: '0.02em', whiteSpace: 'nowrap',
    }} {...rest}>
      {dot && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
