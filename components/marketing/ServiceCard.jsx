import React from 'react';
import { Card } from '../core/Card.jsx';
import { ArrowLink } from '../core/ArrowLink.jsx';

export function ServiceCard({ index, category, title, body, href, surface = 'raised', ...rest }) {
  return (
    <Card surface={surface} padding="lg" interactive={!!href} elevation="sm" {...rest}>
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--size-eyebrow)', fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
        color: surface === 'inverse' ? 'rgba(247,247,242,.6)' : 'var(--text-muted)',
      }}>{category}{index ? ' / ' + index : ''}</div>
      <h4 style={{
        margin: 'var(--space-5) 0 var(--space-3)', font: 'var(--text-h5)',
        letterSpacing: 'var(--tracking-heading)', color: surface === 'inverse' ? 'var(--shell-000)' : 'var(--text-heading)',
      }}>{title}</h4>
      <p style={{ margin: 0, font: 'var(--text-base)', color: surface === 'inverse' ? 'rgba(247,247,242,.72)' : 'var(--text-muted)' }}>{body}</p>
      {href && <div style={{ marginTop: 'var(--space-6)' }}><ArrowLink href={href} tone={surface === 'inverse' ? 'inverse' : 'brand'} size="sm">Explore</ArrowLink></div>}
    </Card>
  );
}
