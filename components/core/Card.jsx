import React from 'react';

const surfaces = {
  raised: { background: 'var(--surface-raised)', border: '1px solid var(--border-hairline)', color: 'var(--text-body)' },
  sunken: { background: 'var(--surface-sunken)', border: '1px solid transparent', color: 'var(--text-body)' },
  outline: { background: 'transparent', border: '1px solid var(--border-hairline)', color: 'var(--text-body)' },
  inverse: { background: 'var(--surface-inverse)', border: '1px solid rgba(247,247,242,.10)', color: 'rgba(247,247,242,.78)' },
  brand: { background: 'var(--surface-brand)', border: '1px solid var(--surface-brand)', color: 'rgba(247,247,242,.82)' },
};

export function Card({ surface = 'raised', padding = 'md', interactive = false, elevation = 'sm', children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const pads = { none: '0', sm: 'var(--space-5)', md: 'var(--space-8)', lg: 'var(--space-12)' };
  const shadows = { none: 'var(--shadow-none)', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)' };
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-card)', padding: pads[padding], overflow: 'hidden',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : shadows[elevation],
        transform: interactive && hover ? 'translateY(-3px)' : 'none',
        cursor: interactive ? 'pointer' : undefined,
        transition: 'transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
        ...surfaces[surface],
      }} {...rest}>{children}</div>
  );
}
