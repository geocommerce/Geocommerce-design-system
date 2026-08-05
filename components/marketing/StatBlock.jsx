import React from 'react';

export function StatBlock({ value, label, tone = 'ink', align = 'left', size = 'md', ...rest }) {
  const colors = { ink: 'var(--ink-900)', brand: 'var(--green-600)', inverse: 'var(--shell-000)' };
  const labelColors = { ink: 'var(--text-muted)', brand: 'var(--text-muted)', inverse: 'rgba(247,247,242,.62)' };
  const sizes = { sm: 'var(--size-h4)', md: 'var(--size-h3)', lg: 'var(--size-h2)' };
  return (
    <div style={{ textAlign: align }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)', fontSize: sizes[size],
        lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-heading)', color: colors[tone],
      }}>{value}</div>
      <div style={{
        marginTop: 'var(--space-2)', fontFamily: 'var(--font-body)', fontSize: 'var(--size-eyebrow)',
        fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
        color: labelColors[tone],
      }}>{label}</div>
    </div>
  );
}
