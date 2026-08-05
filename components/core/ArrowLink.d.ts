import * as React from 'react';
/** Inline text link with a trailing arrow that slides on hover. */
export interface ArrowLinkProps {
  href?: string;
  tone?: 'brand' | 'ink' | 'inverse';
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}
export function ArrowLink(props: ArrowLinkProps): JSX.Element;
