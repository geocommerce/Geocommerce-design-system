import React from 'react';

export function Input({ label, hint, error, type = 'text', tone = 'light', id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inverse = tone === 'inverse';
  const fieldId = id || 'in-' + React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && <label htmlFor={fieldId} style={{ font: 'var(--text-label)', color: inverse ? 'rgba(247,247,242,.8)' : 'var(--text-heading)' }}>{label}</label>}
      <input id={fieldId} type={type} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{
        height: 'var(--control-height-md)', padding: '0 16px', borderRadius: 'var(--radius-sm)',
        font: 'var(--text-base)', fontSize: '15px', color: inverse ? 'var(--shell-000)' : 'var(--text-heading)',
        background: inverse ? 'rgba(247,247,242,.06)' : 'var(--surface-raised)',
        border: '1px solid ' + (error ? 'var(--accent-critical)' : focus ? 'var(--border-brand)' : inverse ? 'rgba(247,247,242,.2)' : 'var(--border-subtle)'),
        boxShadow: focus ? 'var(--ring-focus)' : 'none', outline: 'none',
        transition: 'var(--transition-control)',
      }} {...rest} />
      {(error || hint) && <span style={{ font: 'var(--text-small)', fontSize: '13px', color: error ? 'var(--accent-critical)' : inverse ? 'rgba(247,247,242,.55)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
