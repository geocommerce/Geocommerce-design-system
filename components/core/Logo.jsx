import React from 'react';

export function Logo({ size = 32, showWordmark = true, tone = 'ink', src = '../../assets/logo-mark.png', ...rest }) {
  const colors = { ink: 'var(--ink-900)', brand: 'var(--green-600)', inverse: 'var(--shell-000)' };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }} {...rest}>
      <img src={src} alt="Geocommerce" width={size} height={size} style={{ width: size, height: size, objectFit: 'contain' }} />
      {showWordmark && <span style={{
        fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)',
        fontSize: size * 0.66, letterSpacing: '-0.02em', color: colors[tone],
      }}>Geocommerce</span>}
    </span>
  );
}
