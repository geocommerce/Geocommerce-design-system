import * as React from 'react';
/** Pill label for capability chips and status markers. */
export interface BadgeProps {
  tone?: 'neutral' | 'brand' | 'solid' | 'outline' | 'inverse';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
