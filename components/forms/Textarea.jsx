import React from 'react';

export function Textarea({ label, hint, error, rows = 5, tone = 'light', id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inverse = tone === 'inverse';
  const fieldId = id || 'ta-' + React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {label && <label htmlFor={fieldId} style={{ font: 'var(--text-label)', color: inverse ? 'rgba(247,247,242,.8)' : 'var(--text-heading)' }}>{label}</label>}
      <textarea id={fieldId} rows={rows} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{
        padding: '14px 16px', borderRadius: 'var(--radius-sm)', resize: 'vertical',
        font: 'var(--text-base)', fontSize: '15px', color: inverse ? 'var(--shell-000)' : 'var(--text-heading)',
        background: inverse ? 'rgba(247,247,242,.06)' : 'var(--surface-raised)',
        border: '1px solid ' + (error ? 'var(--accent-critical)' : focus ? 'var(--border-brand)' : inverse ? 'rgba(247,247,242,.2)' : 'var(--border-subtle)'),
        boxShadow: focus ? 'var(--ring-focus)' : 'none', outline: 'none', transition: 'var(--transition-control)',
      }} {...rest} />
      {(error || hint) && <span style={{ font: 'var(--text-small)', fontSize: '13px', color: error ? 'var(--accent-critical)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
