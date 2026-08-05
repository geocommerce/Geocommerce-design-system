import React from 'react';
import { ArrowLink } from '../core/ArrowLink.jsx';

export function CaseStudyCard({ image, category, title, excerpt, href = '#', ratio = '4 / 3', ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', flexDirection: 'column' }} {...rest}>
      <div style={{ aspectRatio: ratio, borderRadius: 'var(--radius-media)', overflow: 'hidden', background: 'var(--shell-100)' }}>
        {image
          ? <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.04)' : 'scale(1)', transition: 'transform var(--duration-slow) var(--ease-standard)' }} />
          : <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: 'var(--text-faint)', font: 'var(--text-small)' }}>Image</div>}
      </div>
      <div style={{
        marginTop: 'var(--space-5)', fontFamily: 'var(--font-body)', fontSize: 'var(--size-eyebrow)',
        fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)',
      }}>{category}</div>
      <h4 style={{ margin: 'var(--space-3) 0 var(--space-2)', font: 'var(--text-h6)', color: 'var(--text-heading)' }}>{title}</h4>
      {excerpt && <p style={{ margin: '0 0 var(--space-4)', font: 'var(--text-small)', color: 'var(--text-muted)' }}>{excerpt}</p>}
      <div><ArrowLink href={href} size="sm">View Case Study</ArrowLink></div>
    </div>
  );
}
