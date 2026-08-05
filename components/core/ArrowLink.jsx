import React from 'react';

export function ArrowLink({ href = '#', tone = 'brand', size = 'md', children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const colors = { brand: 'var(--text-brand)', ink: 'var(--ink-900)', inverse: 'var(--shell-000)' };
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px', color: colors[tone],
        fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-medium)',
        fontSize: size === 'sm' ? '13px' : '15px', letterSpacing: '0.01em', textDecoration: 'none',
        borderBottom: '1px solid ' + (hover ? 'currentColor' : 'transparent'), paddingBottom: '2px',
        transition: 'border-color var(--duration-base) var(--ease-standard)',
      }} {...rest}>
      {children}
      <span style={{ display: 'inline-block', transform: hover ? 'translateX(4px)' : 'none', transition: 'transform var(--duration-base) var(--ease-standard)' }}>→</span>
    </a>
  );
}
