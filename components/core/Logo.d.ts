import * as React from 'react';
/** Geocommerce mark (multicolour pin-cluster G) with optional Jost wordmark. */
export interface LogoProps {
  /** Mark height in px; wordmark scales from it. */
  size?: number;
  showWordmark?: boolean;
  tone?: 'ink' | 'brand' | 'inverse';
  /** Path to logo-mark.png relative to the consuming page. */
  src?: string;
  }
export function Logo(props: LogoProps): JSX.Element;
