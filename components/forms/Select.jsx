import React from 'react';

export function Select({ label, hint, options = [], tone = 'light', id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inverse = tone === 'inverse';
  const fieldId = id || 'sel-' + React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && <label htmlFor={fieldId} style={{ font: 'var(--text-label)', color: inverse ? 'rgba(247,247,242,.8)' : 'var(--text-heading)' }}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select id={fieldId} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{
          width: '100%', height: 'var(--control-height-md)', padding: '0 40px 0 16px', appearance: 'none',
          borderRadius: 'var(--radius-sm)', font: 'var(--text-base)', fontSize: '15px',
          color: inverse ? 'var(--shell-000)' : 'var(--text-heading)',
          background: inverse ? 'rgba(247,247,242,.06)' : 'var(--surface-raised)',
          border: '1px solid ' + (focus ? 'var(--border-brand)' : inverse ? 'rgba(247,247,242,.2)' : 'var(--border-subtle)'),
          boxShadow: focus ? 'var(--ring-focus)' : 'none', outline: 'none', transition: 'var(--transition-control)',
        }} {...rest}>
          {options.map((o) => typeof o === 'string'
            ? <option key={o} value={o}>{o}</option>
            : <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: '11px' }}>▼</span>
      </div>
      {hint && <span style={{ font: 'var(--text-small)', fontSize: '13px', color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}
