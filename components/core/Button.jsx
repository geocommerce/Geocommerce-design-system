import React from 'react';

const sizes = {
  sm: { height: 'var(--control-height-sm)', padding: '0 18px', fontSize: '13px' },
  md: { height: 'var(--control-height-md)', padding: '0 26px', fontSize: '14px' },
  lg: { height: 'var(--control-height-lg)', padding: '0 34px', fontSize: '15px' },
};

const variants = {
  primary: { background: 'var(--surface-brand)', color: 'var(--text-on-brand)', border: '1px solid var(--surface-brand)' },
  secondary: { background: 'transparent', color: 'var(--ink-900)', border: '1px solid var(--ink-900)' },
  ghost: { background: 'transparent', color: 'var(--ink-800)', border: '1px solid transparent' },
  inverse: { background: 'var(--shell-000)', color: 'var(--green-900)', border: '1px solid var(--shell-000)' },
};

const hovers = {
  primary: { background: 'var(--green-700)', borderColor: 'var(--green-700)', boxShadow: 'var(--shadow-brand)' },
  secondary: { background: 'var(--ink-900)', color: 'var(--shell-000)' },
  ghost: { background: 'var(--shell-100)' },
  inverse: { background: 'var(--green-100)', borderColor: 'var(--green-100)' },
};

export function Button({ variant = 'primary', size = 'md', href, disabled = false, iconRight, iconLeft, fullWidth = false, onClick, children, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const style = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
    font: 'var(--text-label)', fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-medium)',
    letterSpacing: '0.01em', borderRadius: 'var(--radius-control)', cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none', whiteSpace: 'nowrap', width: fullWidth ? '100%' : undefined,
    transition: 'var(--transition-control)', opacity: disabled ? 0.4 : 1,
    transform: press && !disabled ? 'scale(0.98)' : 'scale(1)',
    ...sizes[size], ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href} onClick={disabled ? undefined : onClick} disabled={!href ? disabled : undefined} style={style}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)} {...rest}
    >
      {iconLeft}{children}{iconRight}
    </Tag>
  );
}
