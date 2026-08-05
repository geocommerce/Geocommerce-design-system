import * as React from 'react';
/** Big Jost number over an uppercase caption — the site's proof metric. */
export interface StatBlockProps {
  value: React.ReactNode;
  label: React.ReactNode;
  tone?: 'ink' | 'brand' | 'inverse';
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
}
export function StatBlock(props: StatBlockProps): JSX.Element;
