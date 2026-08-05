import React from 'react';

export function LogoWall({ logos = [], columns = 6, tone = 'light', ...rest }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + columns + ', 1fr)', gap: 'var(--space-8) var(--space-10)', alignItems: 'center' }} {...rest}>
      {logos.map((l, i) => (
        <div key={i} style={{
          height: '34px', display: 'grid', placeItems: 'center',
          font: 'var(--text-label)', letterSpacing: '0.04em', textTransform: 'uppercase',
          color: tone === 'inverse' ? 'rgba(247,247,242,.55)' : 'var(--text-faint)',
          opacity: .85,
        }}>
          {typeof l === 'string' && /\.(svg|png|jpg|webp|avif)/.test(l)
            ? <img src={l} alt="" style={{ maxHeight: '34px', width: 'auto', filter: 'grayscale(1)', opacity: .7 }} />
            : l}
        </div>
      ))}
    </div>
  );
}
