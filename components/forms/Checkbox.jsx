import React from 'react';

export function Checkbox({ label, checked, defaultChecked, onChange, disabled, ...rest }) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : inner;
  const toggle = () => { if (disabled) return; if (checked === undefined) setInner(!isOn); onChange && onChange(!isOn); };
  return (
    <label onClick={toggle} style={{
      display: 'inline-flex', alignItems: 'center', gap: '11px', cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1, font: 'var(--text-base)', fontSize: '15px', color: 'var(--text-body)',
    }} {...rest}>
      <span style={{
        width: '20px', height: '20px', flex: '0 0 20px', display: 'grid', placeItems: 'center',
        borderRadius: 'var(--radius-xs)', background: isOn ? 'var(--surface-brand)' : 'var(--surface-raised)',
        border: '1px solid ' + (isOn ? 'var(--surface-brand)' : 'var(--border-subtle)'),
        color: 'var(--shell-000)', fontSize: '12px', lineHeight: 1, transition: 'var(--transition-control)',
      }}>{isOn ? '✓' : ''}</span>
      {label}
    </label>
  );
}
