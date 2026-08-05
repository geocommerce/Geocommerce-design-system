import React from 'react';

export function Testimonial({ quote, name, role, avatar, tone = 'light', ...rest }) {
  const inverse = tone === 'inverse';
  return (
    <figure style={{ margin: 0, maxWidth: '860px' }} {...rest}>
      <blockquote style={{
        margin: 0, font: 'var(--text-h4)', fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-light)', letterSpacing: 'var(--tracking-heading)',
        lineHeight: 1.32, color: inverse ? 'var(--shell-000)' : 'var(--text-heading)', textWrap: 'pretty',
      }}>{quote}</blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
        {avatar && <img src={avatar} alt="" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />}
        <div>
          <div style={{ font: 'var(--text-label)', color: inverse ? 'var(--shell-000)' : 'var(--text-heading)' }}>{name}</div>
          <div style={{ font: 'var(--text-small)', fontSize: '13px', color: inverse ? 'rgba(247,247,242,.6)' : 'var(--text-muted)' }}>{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
