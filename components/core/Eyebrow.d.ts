import * as React from 'react';
/** Small uppercase label that opens nearly every section on the site. */
export interface EyebrowProps {
  tone?: 'muted' | 'brand' | 'inverse';
  /** Prepend a short horizontal rule. */
  rule?: boolean;
  children?: React.ReactNode;
}
export function Eyebrow(props: EyebrowProps): JSX.Element;
